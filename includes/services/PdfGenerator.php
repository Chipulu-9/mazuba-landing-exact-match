<?php
/**
 * Mazuba Envirotech - PDF Quotation Generator
 * Generates a product quotation PDF using FPDF with dynamic cart data
 */

require_once BASE_PATH . '/vendor/autoload.php';

class PdfGenerator {

    public static function generate(
        string $customerName,
        string $customerPhone,
        string $customerEmail,
        array $cartProducts,
        array $cartPackages
    ): string {
        $pdf = new \FPDF('P', 'mm', 'A4');
        $pdf->AddPage();
        $pdf->SetMargins(15, 15, 15);
        $pdf->SetAutoPageBreak(true, 15);

        // --- Company Header ---
        $pdf->SetFont('Helvetica', 'B', 24);
        $pdf->SetTextColor(230, 182, 33); // #E6B621 yellow
        $pdf->Cell(0, 12, 'MAZUBA ENVIROTECH', 0, 1, 'C');

        $pdf->SetFont('Helvetica', '', 11);
        $pdf->SetTextColor(102, 102, 102);
        $pdf->Cell(0, 7, 'Solar Energy Solutions | Chingola, Zambia', 0, 1, 'C');

        // Horizontal line
        $pdf->Ln(3);
        $pdf->SetDrawColor(230, 182, 33);
        $pdf->SetLineWidth(0.7);
        $pdf->Line(15, $pdf->GetY(), 195, $pdf->GetY());
        $pdf->Ln(8);

        // --- Title ---
        $pdf->SetFont('Helvetica', 'B', 18);
        $pdf->SetTextColor(42, 48, 112); // #2A3070 brand blue
        $pdf->Cell(0, 10, 'PRODUCT QUOTATION', 0, 1, 'C');

        // Date & Reference
        $pdf->SetFont('Helvetica', '', 9);
        $pdf->SetTextColor(102, 102, 102);
        $pdf->Cell(0, 6, 'Date: ' . date('d F Y') . '  |  Ref: MZB-' . date('Ymd') . '-' . rand(100, 999), 0, 1, 'R');
        $pdf->Ln(6);

        // --- Customer Info ---
        $pdf->SetFont('Helvetica', 'B', 10);
        $pdf->SetTextColor(42, 48, 112);
        $pdf->Cell(0, 6, 'PREPARED FOR:', 0, 1);

        $pdf->SetFont('Helvetica', '', 10);
        $pdf->SetTextColor(51, 51, 51);
        $pdf->Cell(0, 6, $customerName, 0, 1);
        $pdf->Cell(0, 5, 'Phone: ' . $customerPhone, 0, 1);
        if (!empty($customerEmail)) {
            $pdf->Cell(0, 5, 'Email: ' . $customerEmail, 0, 1);
        }
        $pdf->Ln(8);

        $total = 0;
        $itemNum = 0;

        // --- Combo Packages ---
        if (!empty($cartPackages)) {
            $pdf->SetFont('Helvetica', 'B', 12);
            $pdf->SetTextColor(42, 48, 112);
            $pdf->Cell(0, 8, 'COMBO PACKAGES', 0, 1);
            $pdf->SetDrawColor(200, 200, 200);
            $pdf->SetLineWidth(0.3);
            $pdf->Line(15, $pdf->GetY(), 195, $pdf->GetY());
            $pdf->Ln(4);

            foreach ($cartPackages as $pkg) {
                $itemNum++;
                $price = floatval($pkg['price'] ?? 0);
                $total += $price;

                // Package name
                $pdf->SetFont('Helvetica', 'B', 11);
                $pdf->SetTextColor(230, 182, 33);
                $pdf->Cell(0, 7, $itemNum . '. ' . ($pkg['name'] ?? 'Package'), 0, 1);

                // Description
                if (!empty($pkg['description'])) {
                    $pdf->SetFont('Helvetica', 'I', 9);
                    $pdf->SetTextColor(102, 102, 102);
                    $pdf->SetX(20);
                    $pdf->MultiCell(0, 4, $pkg['description']);
                }

                // Features / included items
                if (!empty($pkg['features']) && is_array($pkg['features'])) {
                    $pdf->SetFont('Helvetica', '', 9);
                    $pdf->SetTextColor(80, 80, 80);
                    foreach ($pkg['features'] as $feature) {
                        $pdf->SetX(22);
                        $pdf->Cell(0, 5, chr(149) . ' ' . $feature, 0, 1);
                    }
                }

                // Price
                $pdf->SetFont('Helvetica', 'B', 11);
                $pdf->SetTextColor(42, 48, 112);
                $pdf->SetX(20);
                $pdf->Cell(0, 7, 'K' . number_format($price, 2), 0, 1);
                $pdf->Ln(3);
            }
            $pdf->Ln(4);
        }

        // --- Individual Products ---
        if (!empty($cartProducts)) {
            $pdf->SetFont('Helvetica', 'B', 12);
            $pdf->SetTextColor(42, 48, 112);
            $pdf->Cell(0, 8, 'INDIVIDUAL PRODUCTS', 0, 1);
            $pdf->SetDrawColor(200, 200, 200);
            $pdf->SetLineWidth(0.3);
            $pdf->Line(15, $pdf->GetY(), 195, $pdf->GetY());
            $pdf->Ln(4);

            // Table header
            $pdf->SetFont('Helvetica', 'B', 9);
            $pdf->SetTextColor(255, 255, 255);
            $pdf->SetFillColor(42, 48, 112);
            $pdf->Cell(85, 7, '  Product', 0, 0, 'L', true);
            $pdf->Cell(25, 7, 'Qty', 0, 0, 'C', true);
            $pdf->Cell(35, 7, 'Unit Price', 0, 0, 'R', true);
            $pdf->Cell(35, 7, 'Total', 0, 1, 'R', true);

            $pdf->SetFont('Helvetica', '', 9);
            $pdf->SetTextColor(51, 51, 51);
            $fill = false;

            foreach ($cartProducts as $item) {
                $product = $item['product'] ?? $item;
                $qty = intval($item['quantity'] ?? 1);
                $unitPrice = floatval($product['price'] ?? 0);
                $lineTotal = $unitPrice * $qty;
                $total += $lineTotal;

                if ($fill) {
                    $pdf->SetFillColor(245, 245, 245);
                }

                $pdf->Cell(85, 6, '  ' . ($product['name'] ?? 'Product'), 0, 0, 'L', $fill);
                $pdf->Cell(25, 6, $qty, 0, 0, 'C', $fill);
                $pdf->Cell(35, 6, 'K' . number_format($unitPrice, 2), 0, 0, 'R', $fill);
                $pdf->Cell(35, 6, 'K' . number_format($lineTotal, 2), 0, 1, 'R', $fill);

                $fill = !$fill;
            }
            $pdf->Ln(4);
        }

        // --- Total Section ---
        $pdf->Ln(4);
        $pdf->SetDrawColor(230, 182, 33);
        $pdf->SetLineWidth(0.7);
        $pdf->Line(120, $pdf->GetY(), 195, $pdf->GetY());
        $pdf->Ln(3);

        $pdf->SetFont('Helvetica', 'B', 14);
        $pdf->SetTextColor(42, 48, 112);
        $pdf->Cell(0, 10, 'TOTAL: K' . number_format($total, 2), 0, 1, 'R');

        $pdf->SetDrawColor(230, 182, 33);
        $pdf->Line(120, $pdf->GetY(), 195, $pdf->GetY());
        $pdf->Ln(10);

        // --- Notes ---
        $pdf->SetFont('Helvetica', 'U', 9);
        $pdf->SetTextColor(102, 102, 102);
        $pdf->Cell(0, 6, 'Notes:', 0, 1);

        $pdf->SetFont('Helvetica', '', 8);
        $notes = [
            'All prices are in Zambian Kwacha (ZMW)',
            'Prices are subject to change based on specifications and quantities',
            'Installation and delivery charges may apply',
            'This quotation is valid for 30 days from the date of issue',
        ];
        foreach ($notes as $note) {
            $pdf->SetX(18);
            $pdf->Cell(0, 5, chr(149) . ' ' . $note, 0, 1);
        }

        $pdf->Ln(8);

        // --- Contact ---
        $pdf->SetFont('Helvetica', '', 9);
        $pdf->SetTextColor(42, 48, 112);
        $pdf->Cell(0, 6, 'For more information, please contact us:', 0, 1, 'C');

        $pdf->SetFont('Helvetica', '', 8);
        $pdf->SetTextColor(102, 102, 102);
        $pdf->Cell(0, 5, 'Email: mazubaenvirotec@gmail.com | Phone: +260 761 695 008', 0, 1, 'C');
        $pdf->Cell(0, 5, 'Shop No. 8, HardWork Shopping Complex, Chingola, Zambia', 0, 1, 'C');

        return $pdf->Output('S');
    }
}
