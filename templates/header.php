<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Mazuba Envirotech LTD - Solar Energy Solutions in Zambia. High-quality solar panels, inverters, and mounting rails.">
  <title>Mazuba Envirotech LTD - Solar Energy Solutions</title>
  <link rel="icon" href="/favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/assets/css/style.css">
</head>
<body class="min-h-screen bg-background text-foreground font-sans antialiased">

  <!-- Navigation -->
  <nav class="bg-background border-b border-border">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <a href="/" class="flex items-center gap-2">
          <img src="/assets/images/mazuba-logo.webp" alt="Mazuba Envirotech Limited" class="h-12 w-auto object-contain">
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <?php if (!empty($isQuotePage)): ?>
            <a href="/" class="text-secondary font-medium hover:text-accent transition-colors duration-200 relative group">
              Home
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
            </a>
          <?php else: ?>
            <a href="#home" class="text-secondary font-medium hover:text-accent transition-colors duration-200 relative group">
              Home
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="#about" class="text-secondary font-medium hover:text-accent transition-colors duration-200 relative group">
              About Us
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="#products" class="text-secondary font-medium hover:text-accent transition-colors duration-200 relative group">
              Products
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="#contact" class="text-secondary font-medium hover:text-accent transition-colors duration-200 relative group">
              Contact
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
            </a>
          <?php endif; ?>
        </div>

        <!-- Mobile Menu Button -->
        <button id="mobile-menu-btn" class="md:hidden p-2 rounded-md hover:bg-muted transition-colors" aria-label="Toggle menu">
          <svg id="menu-icon-open" class="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg id="menu-icon-close" class="h-6 w-6 text-secondary hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div id="mobile-menu" class="md:hidden hidden py-4 border-t border-border">
        <?php if (!empty($isQuotePage)): ?>
          <a href="/" class="block py-2 text-secondary font-medium hover:text-accent transition-colors duration-200 mobile-nav-link">Home</a>
        <?php else: ?>
          <a href="#home" class="block py-2 text-secondary font-medium hover:text-accent transition-colors duration-200 mobile-nav-link">Home</a>
          <a href="#about" class="block py-2 text-secondary font-medium hover:text-accent transition-colors duration-200 mobile-nav-link">About Us</a>
          <a href="#products" class="block py-2 text-secondary font-medium hover:text-accent transition-colors duration-200 mobile-nav-link">Products</a>
          <a href="#contact" class="block py-2 text-secondary font-medium hover:text-accent transition-colors duration-200 mobile-nav-link">Contact</a>
        <?php endif; ?>
      </div>
    </div>
  </nav>

  <main class="min-h-screen">
