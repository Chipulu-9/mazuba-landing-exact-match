    <!-- Hero Section -->
    <section id="home" class="relative min-h-[85vh] md:min-h-screen w-full overflow-hidden pb-10 md:pb-0">
      <!-- Background Image -->
      <div class="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat" style="background-image: url('/assets/images/hero-solar-equipment.jpg')"></div>

      <!-- Gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/40 to-secondary-dark/90"></div>

      <!-- Content -->
      <div class="relative z-10 container mx-auto px-4">
        <!-- Hero Content -->
        <div class="text-center max-w-3xl mx-auto animate-fade-in pt-20">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 leading-tight">
            Get a <span class="text-primary">FREE</span><br>
            Solar Package Quote!
          </h1>
          <p class="text-lg md:text-xl text-white/90 mb-8">
            Looking for the best solar solution for your home or business?<br>
            Get a customized quote today!
          </p>
        </div>

        <!-- Quote Form Card -->
        <div class="max-w-xl mx-auto mt-12 animate-slide-up" style="animation-delay: 0.2s">
          <div class="bg-secondary-dark/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-secondary-light/20">
            <h2 class="text-xl md:text-2xl font-semibold text-primary text-center mb-6">
              Would you like a free solar package quote?
            </h2>

            <form id="quote-form" class="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                id="quote-email"
                name="email"
                placeholder="Enter your email address"
                class="flex-1 px-5 py-4 rounded-lg text-secondary bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent border border-border"
                required
              >
              <button
                type="submit"
                id="quote-submit-btn"
                class="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
              >
                Get 
              </button>
            </form>

            <!-- Trust badges -->
            <div class="flex flex-wrap justify-center gap-4 md:gap-8 mt-6 text-white/90">
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-sm font-medium">No Obligation</span>
              </div>
              <span class="hidden md:block text-white/50">&bull;</span>
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-sm font-medium">Fast &amp; Easy</span>
              </div>
              <span class="hidden md:block text-white/50">&bull;</span>
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-sm font-medium">Expert Advice</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
