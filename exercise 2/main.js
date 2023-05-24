const banner = document.querySelector('.banner');
const info = document.querySelector('.info-container');
const toggleBtn = document.getElementById('info-link-sm');
let infoHeight = 0;

banner.addEventListener('mouseenter', (event) => {
  if (event.target === banner && window.innerWidth > 798) {
    displayInfo();
  }
});

banner.addEventListener('mouseleave', (event) => {
  if (event.target === banner) {
    collapseInfo();
  }
});

toggleBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (info.getBoundingClientRect().height === 0) {
    displayInfo();
  } else {
    collapseInfo();
  }
});

// Calculate the height of all children elements in 'info'
function displayInfo() {
  [...info.children].forEach(elem => {
    infoHeight += (elem.getBoundingClientRect().height + 13);
  });
  info.style.height = infoHeight + 'px';
}

// Hide 'info'
function collapseInfo() {
  infoHeight = 0;
  info.style.height = infoHeight;
}