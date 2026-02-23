import { useState } from 'react';
import { jsPDF } from 'jspdf';
import { singleProducts, packageProducts } from '../../data/products';
import type { CartItem, Package, Product } from '../../types';

type Tab = 'individual' | 'packages';

interface ExtendedProductsProps {
  showToast: (message: string, type?: 'success' | 'error') => void;
}

export default function ExtendedProducts({ showToast }: ExtendedProductsProps) {
  const [activeTab, setActiveTab] = useState<Tab>('individual');
  const [cartProducts, setCartProducts] = useState<Map<string, CartItem>>(new Map());
  const [cartPackages, setCartPackages] = useState<Map<string, Package>>(new Map());
  const [mobileCartOpen, setMobileCartOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [generating, setGenerating] = useState(false);

  // --- Product cart logic ---
  const toggleProduct = (product: Product) => {
    setCartProducts((prev) => {
      const next = new Map(prev);
      if (next.has(product.id)) {
        next.delete(product.id);
      } else {
        next.set(product.id, { product, quantity: 1 });
      }
      return next;
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartProducts((prev) => {
      const next = new Map(prev);
      const item = next.get(id);
      if (!item) return prev;
      const newQty = item.quantity + delta;
      if (newQty <= 0) {
        next.delete(id);
      } else {
        next.set(id, { ...item, quantity: newQty });
      }
      return next;
    });
  };

  // --- Package cart logic ---
  const togglePackage = (pkg: Package) => {
    setCartPackages((prev) => {
      const next = new Map(prev);
      if (next.has(pkg.id)) {
        next.delete(pkg.id);
      } else {
        next.set(pkg.id, pkg);
      }
      return next;
    });
  };

  // --- Totals ---
  let total = 0;
  cartPackages.forEach((pkg) => { total += pkg.price; });
  cartProducts.forEach((item) => { total += item.product.price * item.quantity; });
  const hasItems = cartProducts.size > 0 || cartPackages.size > 0;
  const cartCount = cartProducts.size + cartPackages.size;

  // --- PDF Generation ---
  const downloadQuote = () => {
    if (!customerName.trim() || !customerPhone.trim()) {
      showToast('Please enter your name and phone number.', 'error');
      return;
    }
    if (!hasItems) {
      showToast('Please select at least one product or package.', 'error');
      return;
    }

    setGenerating(true);

    try {
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();

      // Header
      doc.setFillColor(42, 48, 112); // secondary blue
      doc.rect(0, 0, pageWidth, 35, 'F');
      doc.setTextColor(230, 182, 33); // primary yellow
      doc.setFontSize(20);
      doc.setFont('helvetica', 'bold');
      doc.text('MAZUBA ENVIROTECH LTD', pageWidth / 2, 14, { align: 'center' });
      doc.setFontSize(11);
      doc.setTextColor(255, 255, 255);
      doc.text('Solar Energy Solutions — Chingola, Zambia', pageWidth / 2, 22, { align: 'center' });
      doc.setFontSize(9);
      doc.text('+260761695008  |  mazubaenvirotec@gmail.com', pageWidth / 2, 30, { align: 'center' });

      // Title
      doc.setTextColor(42, 48, 112);
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('SOLAR QUOTATION', pageWidth / 2, 48, { align: 'center' });

      // Customer info
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(50, 50, 50);
      const date = new Date().toLocaleDateString('en-ZM', { year: 'numeric', month: 'long', day: 'numeric' });
      doc.text(`Date: ${date}`, 14, 58);
      doc.text(`Customer: ${customerName}`, 14, 65);
      doc.text(`Phone: ${customerPhone}`, 14, 72);
      if (customerEmail.trim()) {
        doc.text(`Email: ${customerEmail}`, 14, 79);
      }

      // Table header
      let y = customerEmail.trim() ? 90 : 83;
      doc.setFillColor(230, 182, 33);
      doc.rect(14, y, pageWidth - 28, 8, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(10);
      doc.text('Item', 16, y + 5.5);
      doc.text('Qty', pageWidth - 60, y + 5.5);
      doc.text('Unit Price', pageWidth - 48, y + 5.5);
      doc.text('Total', pageWidth - 24, y + 5.5, { align: 'right' });
      y += 12;

      // Table rows
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(50, 50, 50);

      const addRow = (name: string, qty: number, unitPrice: number) => {
        if (y > 260) { doc.addPage(); y = 20; }
        doc.setFontSize(9);
        const lines = doc.splitTextToSize(name, 95);
        doc.text(lines, 16, y);
        doc.text(String(qty), pageWidth - 60, y);
        doc.text(`K${unitPrice.toLocaleString()}`, pageWidth - 48, y);
        doc.text(`K${(qty * unitPrice).toLocaleString()}`, pageWidth - 14, y, { align: 'right' });
        y += Math.max(lines.length * 5, 7) + 2;
        doc.setDrawColor(220, 220, 220);
        doc.line(14, y - 1, pageWidth - 14, y - 1);
      };

      cartPackages.forEach((pkg) => addRow(`[Package] ${pkg.name}`, 1, pkg.price));
      cartProducts.forEach((item) => addRow(item.product.name, item.quantity, item.product.price));

      // Total
      y += 4;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.setTextColor(42, 48, 112);
      doc.text(`TOTAL: K${total.toLocaleString()}`, pageWidth - 14, y, { align: 'right' });

      // Footer
      const footerY = doc.internal.pageSize.getHeight() - 18;
      doc.setDrawColor(230, 182, 33);
      doc.line(14, footerY - 4, pageWidth - 14, footerY - 4);
      doc.setFontSize(8);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(100, 100, 100);
      doc.text('Thank you for choosing Mazuba Envirotech LTD. This quote is valid for 30 days.', pageWidth / 2, footerY, { align: 'center' });
      doc.text('Shop No. 8, HardWork Shopping Complex, Chingola, Copperbelt, Zambia', pageWidth / 2, footerY + 6, { align: 'center' });

      doc.save('Mazuba-Quotation.pdf');
      showToast('Your quotation PDF has been downloaded!', 'success');
    } catch {
      showToast('Failed to generate PDF. Please try again.', 'error');
    } finally {
      setGenerating(false);
    }
  };

  const tabBase = 'flex-1 py-2.5 text-sm font-medium rounded-md transition-all';
  const tabActive = `${tabBase} bg-accent text-accent-foreground shadow-sm`;
  const tabInactive = `${tabBase} text-muted-foreground hover:text-foreground`;

  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-8">
      <div className="mb-6 sm:mb-10">
        <h2 className="text-2xl sm:text-4xl font-bold text-primary">Build Your Solar Quotation</h2>
        <p className="text-muted-foreground mt-1 sm:mt-2 max-w-xl text-sm sm:text-base">
          Select individual products or complete packages below, then submit your details to receive a formal quotation.
        </p>
      </div>

      {/* Mobile Cart Toggle */}
      <button
        onClick={() => setMobileCartOpen(true)}
        className="lg:hidden fixed bottom-4 right-4 z-40 bg-accent text-accent-foreground w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </button>

      <div className="flex flex-col lg:flex-row gap-4 sm:gap-8">
        {/* Product List */}
        <div className="flex-1 min-w-0">
          {/* Tabs */}
          <div className="flex gap-1 bg-muted rounded-lg p-1 mb-4 sm:mb-6">
            <button onClick={() => setActiveTab('individual')} className={activeTab === 'individual' ? tabActive : tabInactive}>
              Individual Products
            </button>
            <button onClick={() => setActiveTab('packages')} className={activeTab === 'packages' ? tabActive : tabInactive}>
              Combo Packages
            </button>
          </div>

          {/* Individual Products */}
          {activeTab === 'individual' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
              {singleProducts.map((product) => {
                const inCart = cartProducts.has(product.id);
                const qty = cartProducts.get(product.id)?.quantity ?? 0;
                return (
                  <div
                    key={product.id}
                    className={`group relative bg-card border rounded-xl overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full ${inCart ? 'border-primary ring-2 ring-primary ring-offset-2' : 'border-border'}`}
                  >
                    <div className="aspect-square bg-gray-100 relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://placehold.co/400x400?text=Product'; }}
                      />
                    </div>
                    <div className="p-2 sm:p-4 flex flex-col flex-1">
                      <h3 className="font-semibold text-xs sm:text-base mb-1 line-clamp-2">{product.name}</h3>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {product.specs.map((spec) => (
                          <span key={spec} className="text-[10px] bg-muted px-1.5 py-0.5 rounded text-muted-foreground">{spec}</span>
                        ))}
                      </div>
                      <div className="mt-auto pt-3 flex items-center justify-between border-t border-border">
                        <span className="font-bold text-primary">K{product.price.toLocaleString()}</span>
                        {inCart ? (
                          <div className="flex items-center gap-2 bg-muted rounded-full p-1">
                            <button onClick={() => updateQuantity(product.id, -1)} className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center text-xs hover:bg-gray-50">-</button>
                            <span className="text-xs font-medium w-4 text-center">{qty}</span>
                            <button onClick={() => updateQuantity(product.id, 1)} className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center text-xs hover:bg-gray-50">+</button>
                          </div>
                        ) : (
                          <button
                            onClick={() => toggleProduct(product)}
                            className="h-8 w-8 rounded-full bg-muted hover:bg-gray-200 flex items-center justify-center transition-colors"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="12" y1="5" x2="12" y2="19" />
                              <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Packages */}
          {activeTab === 'packages' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
              {packageProducts.map((pkg) => {
                const selected = cartPackages.has(pkg.id);
                return (
                  <div
                    key={pkg.id}
                    className={`relative bg-card border rounded-xl overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full ${selected ? 'border-primary ring-2 ring-primary ring-offset-2' : 'border-border'}`}
                  >
                    {pkg.image && (
                      <div className="aspect-video bg-gray-100 overflow-hidden">
                        <img
                          src={pkg.image}
                          alt={pkg.name}
                          className="object-cover w-full h-full"
                          onError={(e) => { (e.currentTarget as HTMLImageElement).parentElement!.style.display = 'none'; }}
                        />
                      </div>
                    )}
                    <div className="p-3 sm:p-5 flex flex-col flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg">{pkg.name}</h3>
                        {selected ? (
                          <button onClick={() => togglePackage(pkg)} className="text-sm font-medium text-red-600 hover:text-red-700">Remove</button>
                        ) : (
                          <button onClick={() => togglePackage(pkg)} className="text-sm font-medium text-primary hover:underline">Select</button>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                      <ul className="space-y-2 mb-6 flex-1">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="text-sm flex items-center gap-2 text-gray-700">
                            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto pt-4 border-t border-border flex justify-between items-center">
                        <span className="font-bold text-xl">K{pkg.price.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Cart Panel */}
        <div
          className={`fixed inset-0 z-50 bg-black/50 lg:inset-auto lg:z-auto lg:bg-transparent lg:block lg:w-96 lg:sticky lg:top-24 lg:self-start ${mobileCartOpen ? 'block' : 'hidden lg:block'}`}
          onClick={(e) => { if (e.target === e.currentTarget) setMobileCartOpen(false); }}
        >
          <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto lg:relative lg:max-h-none lg:bottom-auto rounded-b-none lg:rounded-b-xl">
            {/* Mobile drag handle */}
            <div className="lg:hidden flex justify-center pt-2 pb-1">
              <div className="w-10 h-1 rounded-full bg-gray-300" />
            </div>

            <div className="p-4 sm:p-5 border-b border-border bg-muted/30 flex items-center justify-between">
              <h3 className="font-bold text-lg">Your Quotation</h3>
              <button onClick={() => setMobileCartOpen(false)} className="lg:hidden p-1 rounded hover:bg-muted transition-colors">
                <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-5">
              {!hasItems && (
                <div className="text-center py-8 text-muted-foreground text-sm">No items selected yet.</div>
              )}

              {hasItems && (
                <div className="space-y-4 mb-6">
                  {Array.from(cartPackages.values()).map((pkg) => (
                    <div key={pkg.id} className="flex justify-between items-start text-sm">
                      <div>
                        <span className="font-medium block text-primary">Package</span>
                        <span className="text-gray-700">{pkg.name}</span>
                      </div>
                      <div className="text-right">
                        <span className="block font-medium">K{pkg.price.toLocaleString()}</span>
                        <button onClick={() => togglePackage(pkg)} className="text-xs text-red-500 hover:text-red-700">Remove</button>
                      </div>
                    </div>
                  ))}

                  {cartPackages.size > 0 && cartProducts.size > 0 && (
                    <hr className="border-dashed border-gray-200" />
                  )}

                  {Array.from(cartProducts.values()).map((item) => (
                    <div key={item.product.id} className="flex justify-between items-start text-sm">
                      <div className="flex-1">
                        <span className="text-gray-700 block">{item.product.name}</span>
                        <span className="text-xs text-muted-foreground">x{item.quantity} @ K{item.product.price.toLocaleString()}</span>
                      </div>
                      <div className="text-right ml-2">
                        <span className="block font-medium">K{(item.product.price * item.quantity).toLocaleString()}</span>
                        <button onClick={() => toggleProduct(item.product)} className="text-xs text-red-500 hover:text-red-700">Remove</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {hasItems && (
                <div className="border-t border-border pt-4 space-y-2 mb-6">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Subtotal</span>
                    <span>K{total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-gray-900 pt-2">
                    <span>Total</span>
                    <span>K{total.toLocaleString()}</span>
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-border rounded-md text-sm focus:ring-1 focus:ring-primary outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-border rounded-md text-sm focus:ring-1 focus:ring-primary outline-none"
                    placeholder="097 000 0000"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Email (Optional)</label>
                  <input
                    type="email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-md text-sm focus:ring-1 focus:ring-primary outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <button
                  type="button"
                  onClick={downloadQuote}
                  disabled={!hasItems || generating}
                  className="w-full py-2.5 bg-accent text-accent-foreground font-medium rounded-md hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  {generating ? 'Generating PDF...' : 'Download Quote'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
