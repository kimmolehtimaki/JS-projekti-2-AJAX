// function toggleDropdown() {
//     let dropdown = document.querySelector("#dropdownBtn #dropdown");
//     dropdown.classList.toggle("hidden");
// }

const root = document.getElementById('dropdownRoot');
  const btn = document.getElementById('dropdownBtn');
  const menu = document.getElementById('dropdown-box');
  const chevron = document.getElementById('chevron-down');

  function toggleDropdown() {
    const open = menu.classList.toggle('hidden') === false;
    btn.setAttribute('aria-expanded', String(open));
    chevron?.classList.toggle('rotate-180', open);
  }

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('hidden');
    const open = !menu.classList.contains('hidden');
    btn.setAttribute('aria-expanded', String(open));
    chevron?.classList.toggle('rotate-180', open);
  });

  // Sulje klikatessa ulos
  document.addEventListener('click', (e) => {
    if (!root.contains(e.target)) {
      menu.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
      chevron?.classList.remove('rotate-180');
    }
  });

  // Esc sulkee
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      menu.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
      chevron?.classList.remove('rotate-180');
      btn.focus();
    }
  });