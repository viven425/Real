// 圖片輪播
const items = document.querySelectorAll(".carousel-item");
let current = 0;

setInterval(() => {
  items[current].classList.remove("active");
  current = (current + 1) % items.length;
  items[current].classList.add("active");
}, 5000);

// //汉堡按鈕的

// document.addEventListener('DOMContentLoaded', () => {
//     const hamburger = document.querySelector('.hamburger-icon');
//     const body = document.body;
//     const menu = document.querySelector('.menu');

//     if (hamburger) {
//         hamburger.addEventListener('click', () => {
//             body.classList.toggle('menu-open');
//         });
//     }

//     if (menu) {
//         menu.querySelectorAll('.menu-link-item').forEach(item => {
//             item.addEventListener('click', () => {
//                 if (body.classList.contains('menu-open')) {
//                     body.classList.remove('menu-open');
//                 }
//             });
//         });
//     }
// });

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-icon');
    const body = document.body;
    const menu = document.querySelector('.menu');
    const overlay = document.querySelector('.overlay'); 

    const closeMenu = () => { // 創建一個關閉菜單的函數
        if (body.classList.contains('menu-open')) {
            body.classList.remove('menu-open');
        }
    };

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            body.classList.toggle('menu-open');
        });
    }

    if (menu) {
        // 當點擊菜單中的連結時關閉菜單
        menu.querySelectorAll('.menu-link-item').forEach(item => {
            item.addEventListener('click', closeMenu);
        });
    }

    if (overlay) {// **如果遮罩存在，點擊它也關閉菜單**
        overlay.addEventListener('click', closeMenu);
    }
});