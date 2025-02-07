// Toggle submenu for Accounts
const accountsMenu = document.getElementById('accounts-menu');
const accountsSubmenu = document.getElementById('accounts-submenu');

accountsMenu.addEventListener('click', (e) => {
  e.preventDefault();
  accountsSubmenu.classList.toggle('open');
});

// Display dynamic content when links are clicked
const links = document.querySelectorAll('.main-link, .submenu-link');
const dynamicContent = document.getElementById('dynamic-content');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const content = e.target.getAttribute('data-content');
    dynamicContent.innerHTML = `<p>${content}</p>`;
  });
});