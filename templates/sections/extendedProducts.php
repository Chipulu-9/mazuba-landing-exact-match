<?php
// 1. DATA SIMULATION (Replacing imports from @/data/products)
// In a real app, these might come from a database.

$imgBase = '/assets/images/products/individual-images/';

$singleProducts = [
    [
        'id' => 'p1',
        'name' => '6kVA Inverter Felicity',
        'price' => 8500.00,
        'image' => $imgBase . '6kVAFelicity inverter@2x-80.jpg',
        'specs' => ['6kVA', 'Felicity']
    ],
    [
        'id' => 'p2',
        'name' => '6kVA Inverter Must',
        'price' => 7500.00,
        'image' => '/assets/images/inverter.jpg',
        'specs' => ['6kVA', 'Must']
    ],
    [
        'id' => 'p3',
        'name' => '4kVA Inverter Felicity',
        'price' => 6500.00,
        'image' => '/assets/images/inverter.jpg',
        'specs' => ['4kVA', 'Felicity']
    ],
    [
        'id' => 'p4',
        'name' => '3kVA Hybrid Inverter Felicity',
        'price' => 6000.00,
        'image' => '/assets/images/inverter.jpg',
        'specs' => ['3kVA', 'Hybrid', 'Felicity']
    ],
    [
        'id' => 'p5',
        'name' => '1kVA Hybrid Inverter Felicity',
        'price' => 4000.00,
        'image' => $imgBase . '1kVAFelicity inverter@2x-80.jpg',
        'specs' => ['1kVA', 'Hybrid', 'Felicity']
    ],
    [
        'id' => 'p6',
        'name' => '3kVA Esener Inverter',
        'price' => 6000.00,
        'image' => $imgBase . '3kVAESENER inverter@2x-80.jpg',
        'specs' => ['3kVA', 'Esener']
    ],
    [
        'id' => 'p7',
        'name' => '10kVA Inverter Hanchu',
        'price' => 19500.00,
        'image' => '/assets/images/inverter.jpg',
        'specs' => ['10kVA', 'Hanchu']
    ],
    [
        'id' => 'p8',
        'name' => 'Hanchu 2.56kWh 24V Lithium Battery',
        'price' => 9750.00,
        'image' => '/assets/images/battery-storage.jpg',
        'specs' => ['2.56kWh', '24V', 'Lithium']
    ],
    [
        'id' => 'p9',
        'name' => '5kWh Felicity Lithium Battery 100Ah 51.2V',
        'price' => 15500.00,
        'image' => '/assets/images/battery-storage.jpg',
        'specs' => ['5kWh', '100Ah', '51.2V']
    ],
    [
        'id' => 'p10',
        'name' => '24V 100Ah Felicity Lithium Battery',
        'price' => 11000.00,
        'image' => '/assets/images/battery-storage.jpg',
        'specs' => ['24V', '100Ah', 'Lithium']
    ],
    [
        'id' => 'p11',
        'name' => '1.5kVA Fivestar Inverter',
        'price' => 5000.00,
        'image' => '/assets/images/inverter.jpg',
        'specs' => ['1.5kVA', 'Fivestar']
    ],
    [
        'id' => 'p12',
        'name' => '12V 150Ah Felicity Gel Battery',
        'price' => 3500.00,
        'image' => $imgBase . '200Ah 12vFelicity gel battery@2x-80.jpg',
        'specs' => ['12V', '150Ah', 'Gel']
    ]
];

$comboBase = '/assets/images/products/combo-images/';

$packageProducts = [
    [
        'id' => 'pkg1',
        'name' => '1kVA Felicity Package',
        'price' => 15400.00,
        'image' => $comboBase . '1kVA ComboInverter & 12V,150Ah Gel Battery@2x-80.jpg',
        'description' => 'Basic lighting, phone charging, and small appliances.',
        'features' => ['1kVA Felicity Inverter — K4,000', '2x 12V 150Ah Felicity Gel Battery — K7,000', '2x 585W Solar Panels — K4,400']
    ],
    [
        'id' => 'pkg2',
        'name' => '1.5kVA Fivestar Package',
        'price' => 16400.00,
        'image' => '',
        'description' => 'Lights, TV, fan, and phone charging.',
        'features' => ['1.5kVA Fivestar Inverter — K5,000', '2x 12V 150Ah Felicity Gel Battery — K7,000', '2x 585W Solar Panels — K4,400']
    ],
    [
        'id' => 'pkg3',
        'name' => '3kVA Felicity Package',
        'price' => 23600.00,
        'image' => $comboBase . '3kVA ComboInverter & 24VLithium Battery @2x-80.jpg',
        'description' => 'Fridge, lights, TV, and entertainment system.',
        'features' => ['3kVA Felicity Inverter — K6,000', '24V 100Ah Felicity Lithium Battery — K11,000', '3x 585W Solar Panels — K6,600']
    ],
    [
        'id' => 'pkg4',
        'name' => '3kVA Esener Package',
        'price' => 23600.00,
        'image' => '',
        'description' => 'Fridge, lights, TV, and entertainment system.',
        'features' => ['3kVA Esener Inverter — K6,000', '3x 585W Solar Panels — K6,600', '24V 100Ah Felicity Lithium Battery — K11,000']
    ],
    [
        'id' => 'pkg5',
        'name' => '4kVA Felicity Package',
        'price' => 26300.00,
        'image' => '',
        'description' => 'Full home power — fridge, microwave, laptops, and more.',
        'features' => ['4kVA Felicity Inverter — K6,500', '4x 585W Solar Panels — K8,800', '24V 100Ah Felicity Lithium Battery — K11,000']
    ],
    [
        'id' => 'pkg6',
        'name' => '6kVA Felicity Package',
        'price' => 37200.00,
        'image' => $comboBase . '6kVA ComboInverter + 51.2VLithium Battery @2x-80.jpg',
        'description' => 'Large home or small business — AC, fridge, and office equipment.',
        'features' => ['6kVA Felicity Inverter — K8,500', '6x 585W Solar Panels — K13,200', '48V 100Ah Felicity Lithium Battery — K15,500']
    ],
    [
        'id' => 'pkg7',
        'name' => '6kVA Must Package',
        'price' => 36200.00,
        'image' => '',
        'description' => 'Large home or small business — AC, fridge, and office equipment.',
        'features' => ['6kVA Must Inverter — K7,500', '6x 585W Solar Panels — K13,200', '48V 100Ah Felicity Lithium Battery — K15,500']
    ],
    [
        'id' => 'pkg8',
        'name' => '8kVA Felicity Package',
        'price' => 70600.00,
        'image' => '',
        'description' => 'Heavy-duty power for large homes and commercial properties.',
        'features' => ['8kVA Felicity Inverter — K19,000', '8x 585W Solar Panels — K17,600', '51.2V 200Ah Felicity Lithium Battery — K34,000']
    ],
    [
        'id' => 'pkg9',
        'name' => '10kVA Hanchu Package',
        'price' => 68300.00,
        'image' => $comboBase . '10kVA ComboInverter + 51.2VLithium Battery @2x-80.jpg',
        'description' => 'Full commercial or industrial power solution.',
        'features' => ['10kVA Hanchu Inverter — K19,500', '9x 585W Solar Panels — K19,800', '51.2V 200Ah Hanchu Lithium Battery — K29,000']
    ]
];

?>

    <section class="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-8">

        <section class="mb-6 sm:mb-10">
            <h2 class="text-2xl sm:text-4xl font-bold text-primary">
                Build Your Solar Quotation
            </h2>
            <p class="text-muted-foreground mt-1 sm:mt-2 max-w-xl text-sm sm:text-base">
                Select individual products or complete packages below, then submit your details to receive a formal quotation.
            </p>
        </section>

        <!-- Mobile Cart Toggle -->
        <button id="mobile-cart-toggle" onclick="toggleMobileCart()" class="lg:hidden fixed bottom-4 right-4 z-40 bg-accent text-accent-foreground w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            <span id="mobile-cart-badge" class="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full items-center justify-center" style="display:none">0</span>
        </button>

        <div class="flex flex-col lg:flex-row gap-4 sm:gap-8">

            <div class="flex-1 min-w-0">
                <div class="flex gap-1 bg-muted rounded-lg p-1 mb-4 sm:mb-6">
                    <button onclick="switchTab('individual')" id="tab-individual"
                        class="flex-1 py-2.5 text-sm font-medium rounded-md transition-all bg-accent text-accent-foreground shadow-sm">
                        Individual Products
                    </button>
                    <button onclick="switchTab('packages')" id="tab-packages"
                        class="flex-1 py-2.5 text-sm font-medium rounded-md transition-all text-muted-foreground hover:text-foreground">
                        Combo Packages
                    </button>
                </div>

                <div id="view-individual" class="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
                    <?php foreach ($singleProducts as $product): ?>
                        <div class="group relative bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full product-card" 
                             data-id="<?= $product['id'] ?>">
                            <div class="aspect-square bg-gray-100 relative overflow-hidden">
                                <img src="<?= $product['image'] ?>" alt="<?= $product['name'] ?>" 
                                     class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                     onerror="this.src='https://placehold.co/400x400?text=Product';">
                            </div>
                            
                            <div class="p-2 sm:p-4 flex flex-col flex-1">
                                <h3 class="font-semibold text-xs sm:text-base mb-1 line-clamp-2"><?= $product['name'] ?></h3>
                                
                                <div class="flex flex-wrap gap-1 mb-3">
                                    <?php foreach ($product['specs'] as $spec): ?>
                                        <span class="text-[10px] bg-muted px-1.5 py-0.5 rounded text-muted-foreground">
                                            <?= $spec ?>
                                        </span>
                                    <?php endforeach; ?>
                                </div>

                                <div class="mt-auto pt-3 flex items-center justify-between border-t border-border">
                                    <span class="font-bold text-primary">K<?= number_format($product['price'], 2) ?></span>
                                    
                                    <div class="control-area" id="control-<?= $product['id'] ?>">
                                        <button onclick="toggleProduct('<?= $product['id'] ?>', <?= htmlspecialchars(json_encode($product)) ?>)" 
                                            class="h-8 w-8 rounded-full bg-muted hover:bg-gray-200 flex items-center justify-center transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>

                <div id="view-packages" class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4" style="display:none">
                    <?php foreach ($packageProducts as $pkg): ?>
                        <div class="relative bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full package-card"
                             data-id="<?= $pkg['id'] ?>">
                            <?php if (!empty($pkg['image'])): ?>
                                <div class="aspect-video bg-gray-100 overflow-hidden">
                                    <img src="<?= htmlspecialchars($pkg['image']) ?>" alt="<?= htmlspecialchars($pkg['name']) ?>"
                                         class="object-cover w-full h-full"
                                         onerror="this.parentElement.style.display='none'">
                                </div>
                            <?php endif; ?>
                            <div class="p-3 sm:p-5 flex flex-col flex-1">
                                <div class="flex justify-between items-start mb-2">
                                    <h3 class="font-bold text-lg"><?= $pkg['name'] ?></h3>
                                    <div class="control-area-pkg" id="control-pkg-<?= $pkg['id'] ?>">
                                         <button onclick="togglePackage('<?= $pkg['id'] ?>', <?= htmlspecialchars(json_encode($pkg)) ?>)"
                                            class="text-sm font-medium text-primary hover:underline">
                                            Select
                                         </button>
                                    </div>
                                </div>

                                <p class="text-sm text-muted-foreground mb-4"><?= $pkg['description'] ?></p>

                                <ul class="space-y-2 mb-6 flex-1">
                                    <?php foreach ($pkg['features'] as $feature): ?>
                                        <li class="text-sm flex items-center gap-2 text-gray-700">
                                            <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                            <?= $feature ?>
                                        </li>
                                    <?php endforeach; ?>
                                </ul>

                                <div class="mt-auto pt-4 border-t border-border flex justify-between items-center">
                                    <span class="font-bold text-xl">K<?= number_format($pkg['price'], 2) ?></span>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>

            <div id="cart-panel" class="fixed inset-0 z-50 bg-black/50 hidden lg:inset-auto lg:z-auto lg:bg-transparent lg:block lg:w-96 lg:sticky lg:top-24 lg:self-start" onclick="if(event.target===this)toggleMobileCart()">
                <div class="bg-card border border-border rounded-xl shadow-sm overflow-hidden absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto lg:relative lg:max-h-none lg:bottom-auto rounded-b-none lg:rounded-b-xl">
                    <!-- Mobile drag handle -->
                    <div class="lg:hidden flex justify-center pt-2 pb-1">
                        <div class="w-10 h-1 rounded-full bg-gray-300"></div>
                    </div>
                    <div class="p-4 sm:p-5 border-b border-border bg-muted/30 flex items-center justify-between">
                        <h3 class="font-bold text-lg">Your Quotation</h3>
                        <button onclick="toggleMobileCart()" class="lg:hidden p-1 rounded hover:bg-muted transition-colors">
                            <svg class="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>

                    <div class="p-5">
                        <div id="cart-empty" class="text-center py-8 text-muted-foreground text-sm">
                            No items selected yet.
                        </div>

                        <div id="cart-items" class="space-y-4 mb-6"></div>

                        <div id="cart-totals" class="hidden border-t border-border pt-4 space-y-2 mb-6">
                            <div class="flex justify-between text-sm text-gray-600">
                                <span>Subtotal</span>
                                <span id="summary-subtotal">K0.00</span>
                            </div>
                            <div class="flex justify-between text-lg font-bold text-gray-900 pt-2">
                                <span>Total</span>
                                <span id="summary-total">K0.00</span>
                            </div>
                        </div>

                        <div class="space-y-3">
                            <div>
                                <label class="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
                                <input type="text" id="customerName" required
                                    class="w-full px-3 py-2 border border-border rounded-md text-sm focus:ring-1 focus:ring-primary outline-none"
                                    placeholder="John Doe">
                            </div>
                            <div>
                                <label class="block text-xs font-medium text-gray-700 mb-1">Phone Number</label>
                                <input type="tel" id="customerPhone" required
                                    class="w-full px-3 py-2 border border-border rounded-md text-sm focus:ring-1 focus:ring-primary outline-none"
                                    placeholder="097 000 0000">
                            </div>
                            <div>
                                <label class="block text-xs font-medium text-gray-700 mb-1">Email (Optional)</label>
                                <input type="email" id="customerEmail"
                                    class="w-full px-3 py-2 border border-border rounded-md text-sm focus:ring-1 focus:ring-primary outline-none"
                                    placeholder="john@example.com">
                            </div>

                            <button type="button" id="btn-submit" onclick="downloadQuote()" disabled
                                class="w-full py-2.5 bg-accent text-accent-foreground font-medium rounded-md hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                <span id="btn-submit-text">Download Quote</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <script>
        // State
        const state = {
            products: new Map(), // id -> {product, qty}
            packages: new Map()  // id -> pkg
        };

        // --- Tabs Logic ---
        function switchTab(tab) {
            const indView = document.getElementById('view-individual');
            const pkgView = document.getElementById('view-packages');
            const indBtn = document.getElementById('tab-individual');
            const pkgBtn = document.getElementById('tab-packages');

            if (tab === 'individual') {
                indView.style.display = '';
                pkgView.style.display = 'none';

                indBtn.className = "flex-1 py-2.5 text-sm font-medium rounded-md transition-all bg-accent text-accent-foreground shadow-sm";
                pkgBtn.className = "flex-1 py-2.5 text-sm font-medium rounded-md transition-all text-muted-foreground hover:text-foreground";
            } else {
                indView.style.display = 'none';
                pkgView.style.display = '';

                indBtn.className = "flex-1 py-2.5 text-sm font-medium rounded-md transition-all text-muted-foreground hover:text-foreground";
                pkgBtn.className = "flex-1 py-2.5 text-sm font-medium rounded-md transition-all bg-accent text-accent-foreground shadow-sm";
            }
        }

        // --- Cart Logic ---

        function toggleProduct(id, productData) {
            if (state.products.has(id)) {
                // If quantity is handled inside the card in the list view, we might just remove it
                // But for the 'toggle' button behavior:
                state.products.delete(id);
            } else {
                state.products.set(id, { product: productData, quantity: 1 });
            }
            renderUI();
        }

        function updateQuantity(id, change) {
            if (state.products.has(id)) {
                const item = state.products.get(id);
                const newQty = item.quantity + change;
                if (newQty <= 0) {
                    state.products.delete(id);
                } else {
                    item.quantity = newQty;
                    state.products.set(id, item);
                }
                renderUI();
            }
        }

        function togglePackage(id, pkgData) {
            if (state.packages.has(id)) {
                state.packages.delete(id);
            } else {
                state.packages.set(id, pkgData);
            }
            renderUI();
        }

        // --- Rendering ---

        function renderUI() {
            renderProductControls();
            renderPackageControls();
            renderSummary();
            updateFormInput();
            updateMobileBadge();
        }

        function renderProductControls() {
            // Update the buttons on the product cards
            const cards = document.querySelectorAll('.product-card');
            cards.forEach(card => {
                const id = card.dataset.id;
                const controlDiv = document.getElementById(`control-${id}`);
                // Note: To handle clicking logic cleanly, we recreate the innerHTML or toggle classes
                // Simple implementation:
                if (state.products.has(id)) {
                    const qty = state.products.get(id).quantity;
                    controlDiv.innerHTML = `
                        <div class="flex items-center gap-2 bg-muted rounded-full p-1">
                            <button onclick="updateQuantity('${id}', -1)" class="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center text-xs hover:bg-gray-50">-</button>
                            <span class="text-xs font-medium w-4 text-center">${qty}</span>
                            <button onclick="updateQuantity('${id}', 1)" class="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center text-xs hover:bg-gray-50">+</button>
                        </div>
                    `;
                    card.classList.add('ring-2', 'ring-primary', 'ring-offset-2');
                } else {
                    // Re-bind the original toggle click
                    // We need to fetch the original onclick attribute or data. 
                    // Since passing complex objects in JS string literal is messy, we rely on the static render.
                    // A page reload resets this, but for dynamic updates:
                    controlDiv.innerHTML = `<button onclick="triggerProductToggle('${id}')" class="h-8 w-8 rounded-full bg-muted hover:bg-gray-200 flex items-center justify-center transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></button>`;
                    card.classList.remove('ring-2', 'ring-primary', 'ring-offset-2');
                }
            });
        }

        // Helper to find the original data from the DOM to re-toggle
        window.triggerProductToggle = function(id) {
             // Find the original button definition in PHP loop or store data globally
             // For this single file, let's use a lookup based on the initial PHP data array which we can dump into JS
             const allProducts = <?= json_encode($singleProducts) ?>;
             const product = allProducts.find(p => p.id === id);
             toggleProduct(id, product);
        }

        function renderPackageControls() {
            const cards = document.querySelectorAll('.package-card');
            const allPackages = <?= json_encode($packageProducts) ?>;

            cards.forEach(card => {
                const id = card.dataset.id;
                const controlDiv = document.getElementById(`control-pkg-${id}`);
                const pkg = allPackages.find(p => p.id === id);

                if (state.packages.has(id)) {
                    controlDiv.innerHTML = `<button onclick="togglePackage('${id}', null)" class="text-sm font-medium text-red-600 hover:text-red-700">Remove</button>`;
                    card.classList.add('ring-2', 'ring-primary', 'ring-offset-2');
                } else {
                    // Hacky way to pass object back, better to use ID lookup
                    controlDiv.innerHTML = `<button onclick="triggerPackageToggle('${id}')" class="text-sm font-medium text-primary hover:underline">Select</button>`;
                    card.classList.remove('ring-2', 'ring-primary', 'ring-offset-2');
                }
            });
        }

        window.triggerPackageToggle = function(id) {
             const allPackages = <?= json_encode($packageProducts) ?>;
             const pkg = allPackages.find(p => p.id === id);
             togglePackage(id, pkg);
        }

        function renderSummary() {
            const container = document.getElementById('cart-items');
            const emptyMsg = document.getElementById('cart-empty');
            const totalsDiv = document.getElementById('cart-totals');
            const submitBtn = document.getElementById('btn-submit');

            container.innerHTML = '';
            let total = 0;
            let hasItems = false;

            // Render Packages
            state.packages.forEach((pkg, id) => {
                hasItems = true;
                total += pkg.price;
                container.innerHTML += `
                    <div class="flex justify-between items-start text-sm">
                        <div>
                            <span class="font-medium block text-primary">Package</span>
                            <span class="text-gray-700">${pkg.name}</span>
                        </div>
                        <div class="text-right">
                            <span class="block font-medium">K${pkg.price.toLocaleString()}</span>
                            <button onclick="togglePackage('${id}')" class="text-xs text-red-500 hover:text-red-700">Remove</button>
                        </div>
                    </div>
                `;
            });

            if (state.packages.size > 0 && state.products.size > 0) {
                 container.innerHTML += `<hr class="border-dashed border-gray-200 my-2">`;
            }

            // Render Products
            state.products.forEach((item, id) => {
                hasItems = true;
                const itemTotal = item.product.price * item.quantity;
                total += itemTotal;
                container.innerHTML += `
                    <div class="flex justify-between items-start text-sm">
                        <div class="flex-1">
                            <span class="text-gray-700 block">${item.product.name}</span>
                            <span class="text-xs text-muted-foreground">x${item.quantity} @ K${item.product.price}</span>
                        </div>
                        <div class="text-right ml-2">
                            <span class="block font-medium">K${itemTotal.toLocaleString()}</span>
                            <button onclick="toggleProduct('${id}')" class="text-xs text-red-500 hover:text-red-700">Remove</button>
                        </div>
                    </div>
                `;
            });

            if (hasItems) {
                emptyMsg.classList.add('hidden');
                totalsDiv.classList.remove('hidden');
                document.getElementById('summary-subtotal').innerText = 'K' + total.toLocaleString();
                document.getElementById('summary-total').innerText = 'K' + total.toLocaleString();
                submitBtn.disabled = false;
            } else {
                emptyMsg.classList.remove('hidden');
                totalsDiv.classList.add('hidden');
                submitBtn.disabled = true;
            }
        }

        function updateFormInput() {
            // No-op: form data is built on download
        }

        // --- PDF Download ---
        function showQuoteToast(message, type) {
            const container = document.getElementById('toast-container');
            if (!container) return;
            const toast = document.createElement('div');
            toast.className = 'toast toast-' + (type || 'success');
            toast.textContent = message;
            container.appendChild(toast);
            setTimeout(() => {
                toast.classList.add('toast-hide');
                setTimeout(() => { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 300);
            }, 5000);
        }

        function downloadQuote() {
            const name = document.getElementById('customerName').value.trim();
            const phone = document.getElementById('customerPhone').value.trim();
            const email = document.getElementById('customerEmail').value.trim();

            if (!name || !phone) {
                showQuoteToast('Please enter your name and phone number.', 'error');
                return;
            }
            if (state.products.size === 0 && state.packages.size === 0) {
                showQuoteToast('Please select at least one product or package.', 'error');
                return;
            }

            const btn = document.getElementById('btn-submit');
            const btnText = document.getElementById('btn-submit-text');
            btn.disabled = true;
            btnText.textContent = 'Generating PDF...';

            // Build products array: [{product: {name, price, ...}, quantity}]
            const products = [];
            state.products.forEach((item) => {
                products.push({ product: item.product, quantity: item.quantity });
            });

            // Build packages array
            const packages = [];
            state.packages.forEach((pkg) => {
                packages.push(pkg);
            });

            fetch('/api/download-pdf.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    customerName: name,
                    customerPhone: phone,
                    customerEmail: email,
                    products: products,
                    packages: packages
                })
            })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(err => { throw new Error(err.message || 'Failed to generate PDF'); });
                }
                return response.blob();
            })
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'Mazuba-Quotation.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
                showQuoteToast('Your quotation PDF has been downloaded!', 'success');
            })
            .catch(error => {
                showQuoteToast(error.message || 'Failed to download quotation. Please try again.', 'error');
            })
            .finally(() => {
                btn.disabled = false;
                btnText.textContent = 'Download Quote';
            });
        }

        // --- Mobile Cart ---
        function toggleMobileCart() {
            const panel = document.getElementById('cart-panel');
            panel.classList.toggle('hidden');
        }

        function updateMobileBadge() {
            const count = state.products.size + state.packages.size;
            const badge = document.getElementById('mobile-cart-badge');
            if (count > 0) {
                badge.textContent = count;
                badge.style.display = 'flex';
            } else {
                badge.style.display = 'none';
            }
        }

        // Initialize
        renderUI();

    </script>