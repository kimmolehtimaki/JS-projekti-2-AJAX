// Määritetään muuttujat väkäselle ja napille
const chevron = document.getElementById("chevron");
const ddBtn = document.getElementById("dropdownBtn");
// const open = !menu.classList.toggle("hidden");
const closed = menu.classList.toggle("hidden");

// Dropdown-valikon avaaminen
function toggleDropdown() {
    let dropdown = document.querySelector("#dropdown-box");
    let open = !dropdown.classList.toggle("hidden");
    chevron.classList.toggle("rotate-180", open);
}

//lisätään kuuntelija väkäsen kääntämiseen
ddBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let open = !menu.classList.toggle("hidden");
  chevron.classList.toggle("rotate-180");
});

//kuuntelija valikon sulkemiseen



// const ddRoot = document.getElementById('dropdownRoot');
//   const ddBtn = document.getElementById('dropdownBtn');
//   const box = document.getElementById('dropdown-box');
//   const chevron = document.getElementById('chevron-down');

//   function toggleDropdown() {
//     const open = menu.classList.toggle('hidden') === false;
//     btn.setAttribute('aria-expanded', String(open));
//     chevron?.classList.toggle('rotate-180', open);
//   }

//   btn.addEventListener('click', (e) => {
//     e.stopPropagation();
//     menu.classList.toggle('hidden');
//     const open = !menu.classList.contains('hidden');
//     btn.setAttribute('aria-expanded', String(open));
//     chevron?.classList.toggle('rotate-180', open);
//   });

//   // Sulje klikatessa ulos
//   document.addEventListener('click', (e) => {
//     if (!root.contains(e.target)) {
//       menu.classList.add('hidden');
//       btn.setAttribute('aria-expanded', 'false');
//       chevron?.classList.remove('rotate-180');
//     }
//   });

//   // Esc sulkee
//   document.addEventListener('keydown', (e) => {
//     if (e.key === 'Escape') {
//       menu.classList.add('hidden');
//       btn.setAttribute('aria-expanded', 'false');
//       chevron?.classList.remove('rotate-180');
//       btn.focus();
//     }
//   });