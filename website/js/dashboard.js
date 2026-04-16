// dashboard.js - Logic for Manager and CEO dashboards

document.addEventListener('DOMContentLoaded', () => {
  updateTime();
  setInterval(updateTime, 60000); // update every minute
});

function updateTime() {
  const timeEl = document.getElementById('dash-time');
  const dateEl = document.getElementById('dash-date');
  
  const now = new Date();
  
  if (timeEl) {
    let hours = now.getHours();
    let mins = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    timeEl.textContent = `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')} ${ampm}`;
  }

  if (dateEl) {
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    dateEl.textContent = now.toLocaleDateString('en-US', options);
  }
}

function showSection(id, navItem) {
  // Hide all sections
  document.querySelectorAll('.dash-content').forEach(el => el.style.display = 'none');
  
  // Show target
  const sec = document.getElementById('section-' + id);
  if (sec) sec.style.display = 'flex';

  // Update nav highlight
  document.querySelectorAll('.dash-nav-item').forEach(el => el.classList.remove('active'));
  if (navItem) navItem.classList.add('active');
}

function toggleNotifs() {
  alert("No new notifications at this time.");
}

// Kanban Interactions Simulation for Manager Dashboard
function acceptOrder(orderId, fromColId, toColId, newCountId, prepCountId) {
  moveCard(orderId, fromColId, toColId, 'new-order', 'preparing-order');
  updateCount(newCountId, -1);
  updateCount(prepCountId, 1);
  
  // Change actions inside card
  const card = document.getElementById(orderId);
  const actions = card.querySelector('.order-actions');
  actions.outerHTML = `
    <div class="prep-timer" id="timer-${orderId}">⏱ Just started</div>
    <button class="btn-ready" onclick="markReady('${orderId}','${toColId}','col-ready','${prepCountId}','ready-count')">📦 Mark Ready</button>
  `;
}

function rejectOrder(orderId) {
  if(confirm("Are you sure you want to reject this order?")) {
    document.getElementById(orderId).remove();
    updateCount('new-count', -1);
  }
}

function markReady(orderId, fromColId, toColId, prepCountId, readyCountId) {
  moveCard(orderId, fromColId, toColId, 'preparing-order', 'ready-order');
  updateCount(prepCountId, -1);
  updateCount(readyCountId, 1);

  // Change actions
  const card = document.getElementById(orderId);
  const timer = card.querySelector('.prep-timer');
  const btn = card.querySelector('.btn-ready');
  if(timer) timer.outerHTML = `<div style="font-size:0.8rem;color:var(--warning);font-weight:600;margin:10px 0;">⏳ Awaiting rider pickup...</div>`;
  if(btn) btn.outerHTML = `<button class="btn-dispatched" onclick="markDispatched('${orderId}','${toColId}','col-delivered','${readyCountId}','done-count')">🛵 Dispatched</button>`;
}

function markDispatched(orderId, fromColId, toColId, readyCountId, doneCountId) {
  moveCard(orderId, fromColId, toColId, 'ready-order', 'done-order');
  updateCount(readyCountId, -1);
  updateCount(doneCountId, 1);
  
  // Change actions to None
  const card = document.getElementById(orderId);
  const msg = card.querySelector('div[style*="Awaiting rider"]');
  const btn = card.querySelector('.btn-dispatched');
  if(msg) msg.remove();
  if(btn) btn.remove();
  
  // update chip
  const header = card.querySelector('.order-card-header');
  if(header) {
      const chip = header.querySelector('.chip');
      chip.className = 'chip chip-green';
      chip.textContent = 'Delivered';
  }
}

function moveCard(cardId, fromCol, toCol, oldClass, newClass) {
  const card = document.getElementById(cardId);
  const targetCol = document.getElementById(toCol);
  
  if (card && targetCol) {
    card.classList.remove(oldClass);
    card.classList.add(newClass);
    targetCol.prepend(card);
  }
}

function updateCount(id, delta) {
  const el = document.getElementById(id);
  if (el) {
    let num = parseInt(el.textContent);
    el.textContent = num + delta;
  }
}
