    <!-- Products Section -->
    <section id="products" class="py-16 bg-gradient-dark relative overflow-hidden">
      <!-- Decorative solar panel image -->
      <div class="absolute bottom-0 right-0 w-1/3 h-1/2 opacity-20">
        <img src="/assets/images/solar-panels-field.jpg" alt="" class="w-full h-full object-cover">
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <!-- Section Header -->
        <div class="section-divider">
          <h2 class="section-title-light">Our Products</h2>
        </div>

        <!-- Products Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          <?php
          $products = [
            [
              'image' => '/assets/images/solar-panels-field.jpg',
              'title' => 'Solar System Design',
              'description' => 'High-efficiency solar panels for residential, commercial, and industrial use.',
              'price' => 45000,
              'unit' => 'per system',
            ],
            [
              'image' => '/assets/images/inverter.jpg',
              'title' => 'Inverters',
              'description' => 'Advanced inverters for efficient energy conversion.',
              'price' => 18500,
              'unit' => 'per unit',
            ],
            [
              'image' => '/assets/images/battery-storage.jpg',
              'title' => 'Battery Storage Solutions',
              'description' => 'Reliable supply of solar components and systems.',
              'price' => 25000,
              'unit' => 'per battery',
            ],
            [
              'image' => '/assets/images/mounting-rails.jpg',
              'title' => 'Mounting Rails & Accessories',
              'description' => 'Durable, easy to install mounting solutions, and installation kits.',
              'price' => 8500,
              'unit' => 'per set',
            ],
          ];

          foreach ($products as $index => $product): ?>
            <div class="group animate-fade-in" style="animation-delay: <?= $index * 0.1 ?>s">
              <div class="aspect-[3/4] rounded-xl overflow-hidden mb-3 shadow-lg">
                <img
                  src="<?= htmlspecialchars($product['image']) ?>"
                  alt="<?= htmlspecialchars($product['title']) ?>"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                >
              </div>
              <h3 class="font-semibold text-primary text-sm md:text-base mb-1">
                <?= htmlspecialchars($product['title']) ?>
              </h3>
              <p class="text-xs md:text-sm text-white/70">
                <?= htmlspecialchars($product['description']) ?>
              </p>
            </div>
          <?php endforeach; ?>
        </div>

        <!-- CTA Button -->
        <div class="text-center mt-12">
          <a
            href="/quote.php"
            class="inline-block px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-full hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            See More &rarr;
          </a>
        </div>
      </div>
    </section>
