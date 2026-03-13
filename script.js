// PICKLEBOI

const form = document.getElementById('jarForm');
const note = document.getElementById('formNote');
const emailInput = document.getElementById('emailInput');
const STORAGE_KEY = 'pickleboi_list';

function getList() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch { return []; }
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const email = emailInput.value.trim().toLowerCase();
  const list = getList();
  if (list.includes(email)) {
    note.textContent = "You're already on the list boi 🥒";
    note.className = 'form-note success';
    return;
  }
  list.push(email);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  emailInput.value = '';
  note.textContent = "You're in. We'll let you know when the next batch drops 🥒";
  note.className = 'form-note success';
  console.log('New signup:', email, '| Total:', list.length);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
  });
});
