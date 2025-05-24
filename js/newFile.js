// 圖片輪播
const items = document.querySelectorAll(".carousel-item");
let current = 0;

setInterval(() => {
  items[current].classList.remove("active");
  current = (current + 1) % items.length;
  items[current].classList.add("active");
}, 5000);

//汉堡按鈕的

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-icon');
    const body = document.body;
    const menu = document.querySelector('.menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            body.classList.toggle('menu-open');
        });
    }

    if (menu) {
        menu.querySelectorAll('.menu-link-item').forEach(item => {
            item.addEventListener('click', () => {
                if (body.classList.contains('menu-open')) {
                    body.classList.remove('menu-open');
                }
            });
        });
    }
});