<?php
/**
 * Mazuba Envirotech - PDF Quotation Download
 * Accepts POST with cart data, generates and returns PDF
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Content-Type: application/json');
    echo json_encode(['message' => 'Method not allowed']);
    exit;
}

require_once __DIR__ . '/../../includes/config.php';
require_once __DIR__ . '/../../includes/services/PdfGenerator.php';

try {
    $input = json_decode(file_get_contents('php://input'), true);

    $customerName = trim($input['customerName'] ?? '');
    $customerPhone = trim($input['customerPhone'] ?? '');
    $customerEmail = trim($input['customerEmail'] ?? '');
    $products = $input['products'] ?? [];
    $packages = $input['packages'] ?? [];

    if (empty($customerName) || empty($customerPhone)) {
        http_response_code(400);
        header('Content-Type: application/json');
        echo json_encode(['message' => 'Name and phone number are required']);
        exit;
    }

    if (empty($products) && empty($packages)) {
        http_response_code(400);
        header('Content-Type: application/json');
        echo json_encode(['message' => 'Please select at least one product or package']);
        exit;
    }

    $pdfContent = PdfGenerator::generate(
        $customerName,
        $customerPhone,
        $customerEmail,
        $products,
        $packages
    );

    header('Content-Type: application/pdf');
    header('Content-Disposition: attachment; filename=Mazuba-Quotation-' . date('Ymd') . '.pdf');
    header('Content-Length: ' . strlen($pdfContent));

    echo $pdfContent;
} catch (Exception $e) {
    header('Content-Type: application/json');
    http_response_code(500);
    $response = ['message' => 'Failed to generate PDF quotation'];
    if (defined('APP_ENV') && APP_ENV === 'development') {
        $response['error'] = $e->getMessage();
    }
    echo json_encode($response);
}
