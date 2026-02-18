/**
 * Mazuba Envirotech - Vanilla JavaScript
 * Handles: mobile menu, quote form, PDF download, product modal, toasts
 */

(function () {
  'use strict';

  // ===== Toast Notification System =====
  function showToast(message, type) {
    var container = document.getElementById('toast-container');
    var toast = document.createElement('div');
    toast.className = 'toast toast-' + (type || 'success');
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(function () {
      toast.classList.add('toast-hide');
      setTimeout(function () {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, 5000);
  }

  // ===== Mobile Navigation Toggle =====
  var menuBtn = document.getElementById('mobile-menu-btn');
  var mobileMenu = document.getElementById('mobile-menu');
  var iconOpen = document.getElementById('menu-icon-open');
  var iconClose = document.getElementById('menu-icon-close');

  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      var isOpen = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      iconOpen.classList.toggle('hidden');
      iconClose.classList.toggle('hidden');
    });

    // Close mobile menu when a link is clicked
    var mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
        iconOpen.classList.remove('hidden');
        iconClose.classList.add('hidden');
      });
    });
  }

  // ===== Quote Form Submission =====
  var quoteForm = document.getElementById('quote-form');
  var quoteEmail = document.getElementById('quote-email');
  var quoteSubmitBtn = document.getElementById('quote-submit-btn');

  if (quoteForm) {
    quoteForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var email = quoteEmail.value.trim();
      if (!email) return;

      quoteSubmitBtn.disabled = true;
      quoteSubmitBtn.textContent = 'Submitting...';

      fetch('/api/quotes.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Website Visitor',
          email: email,
          service: 'Solar Installation',
          message: 'Requested free solar package quote from website'
        })
      })
        .then(function (response) {
          if (!response.ok) {
            return response.json().then(function (err) {
              throw new Error(err.message || 'Failed to submit quote');
            });
          }
          return response.json();
        })
        .then(function () {
          quoteEmail.value = '';
          showToast('Your quote request has been submitted successfully. We\'ll contact you soon!', 'success');
        })
        .catch(function (error) {
          showToast(error.message || 'Failed to submit quote. Please try again.', 'error');
        })
        .finally(function () {
          quoteSubmitBtn.disabled = false;
          quoteSubmitBtn.textContent = 'Get Quote';
        });
    });
  }

  // ===== PDF Download =====
  var downloadBtn = document.getElementById('download-pdf-btn');

  if (downloadBtn) {
    downloadBtn.addEventListener('click', function () {
      downloadBtn.disabled = true;
      downloadBtn.textContent = 'Generating PDF...';

      fetch('/api/download-pdf.php')
        .then(function (response) {
          if (!response.ok) {
            throw new Error('Failed to generate PDF quotation');
          }
          return response.blob();
        })
        .then(function (blob) {
          var url = window.URL.createObjectURL(blob);
          var link = document.createElement('a');
          link.href = url;
          link.download = 'Mazuba-Quotation.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
          showToast('Your quotation PDF has been downloaded successfully.', 'success');
        })
        .catch(function (error) {
          showToast(error.message || 'Failed to download quotation. Please try again.', 'error');
        })
        .finally(function () {
          downloadBtn.disabled = false;
          downloadBtn.textContent = 'Download Quote \u2192';
        });
    });
  }

  // ===== Products & Equipment Modal =====
  var modalBtn = document.getElementById('products-modal-btn');
  var modal = document.getElementById('products-modal');
  var modalClose = document.getElementById('products-modal-close');

  if (modalBtn && modal) {
    modalBtn.addEventListener('click', function () {
      modal.classList.add('active');
    });

    modalClose.addEventListener('click', function () {
      modal.classList.remove('active');
    });

    // Close on overlay click
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
      }
    });
  }
})();
