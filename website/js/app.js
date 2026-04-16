// app.js - Global Logic for Website

let cart = [];
let cartTotal = 0;

document.addEventListener('DOMContentLoaded', () => {
  // Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // Init cart badge
  updateCartBadges();
});

function addToCart(id, name, price, img) {
  const existingItem = cart.find(i => i.id === id);
  if (existingItem) {
    existingItem.qty++;
  } else {
    cart.push({ id, name, price, img, qty: 1 });
  }

  showToast(`Added ${name} to cart!`);
  updateCartBadges();
}

function updateCartBadges() {
  const count = cart.reduce((acc, item) => acc + item.qty, 0);
  const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  
  // Update nav badges
  const navBadge = document.getElementById('nav-cart-count');
  if (navBadge) navBadge.textContent = count;

  // Update floating cart if it exists (menu page)
  const floatCart = document.getElementById('floating-cart');
  if (floatCart) {
    if (count > 0) {
      floatCart.style.display = 'flex';
      document.getElementById('float-cart-count').textContent = `${count} item${count > 1 ? 's' : ''}`;
      document.getElementById('float-cart-total').textContent = `₦${total.toLocaleString()}`;
    } else {
      floatCart.style.display = 'none';
    }
  }
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  toast.style.display = 'flex';
  
  // Reset animation
  toast.style.animation = 'none';
  toast.offsetHeight; 
  toast.style.animation = 'slideIn 0.4s ease';

  setTimeout(() => {
    toast.style.display = 'none';
  }, 3000);
}
