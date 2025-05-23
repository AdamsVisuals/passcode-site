document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
// Mobile Menu Functionality
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenuContainer = document.querySelector('.mobile-menu-container');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const mobileMenuClose = document.querySelector('.mobile-menu-close');

// Toggle mobile menu
function toggleMobileMenu() {
    mobileMenuToggle.classList.toggle('active');
    mobileMenuContainer.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
}

mobileMenuToggle.addEventListener('click', toggleMobileMenu);
mobileMenuClose.addEventListener('click', toggleMobileMenu);
mobileMenuOverlay.addEventListener('click', toggleMobileMenu);

// Mobile dropdown functionality
const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');
mobileDropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('a');
    
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.classList.toggle('active');
        const submenu = dropdown.querySelector('.mobile-submenu');
        submenu.classList.toggle('active');
    });
});

// Close mobile menu when clicking on regular links
const mobileLinks = document.querySelectorAll('.mobile-nav > ul > li > a:not(.mobile-dropdown > a)');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleMobileMenu();
    });
});

// Sync cart count between desktop and mobile
const cartCount = document.querySelector('.cart-count');
const mobileCartCount = document.querySelector('.mobile-cart-count');

// Update this function when adding items to cart
function updateCartCount(count) {
    cartCount.textContent = count;
    mobileCartCount.textContent = count;
}
    
    // Cart functionality
    const cartIcon = document.querySelector('.cart-icon');
    let cartItems = 0;
    
    cartIcon.addEventListener('click', function() {
        // In a real implementation, this would open a cart modal
        alert(`You have ${cartItems} items in your cart`);
    });
    
    // Toast notification element
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
    
    // Function to show toast notification
    function showToast(message) {
        toast.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
    
    // Simulate adding items to cart (for demo purposes)
    function addToCart() {
        cartItems++;
        cartCount.textContent = cartItems;
        cartIcon.classList.add('animate-bounce');
        
        // Show toast notification
        showToast('Item added to cart!');
        
        setTimeout(() => {
            cartIcon.classList.remove('animate-bounce');
        }, 1000);
    }
    
    // For demo - simulate adding to cart when clicking shop now buttons
    const shopNowButtons = document.querySelectorAll('.btn-primary');
    shopNowButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            addToCart();
        });
    });
    
    // Hero slideshow functionality
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slide-prev');
    const nextBtn = document.querySelector('.slide-next');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    // Auto slide change
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause on hover
    const heroSlideshow = document.querySelector('.hero-slideshow');
    heroSlideshow.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    heroSlideshow.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // Navigation controls
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Initialize first slide
    showSlide(0);
});

// Category click handler
const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
    card.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        showToast(`Loading ${category} products...`);
        // In a real implementation, this would load/filter products
        // For demo, we'll just show a toast
        setTimeout(() => {
            showToast(`${category} products displayed`);
        }, 1000);
    });
});