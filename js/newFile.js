const carousel = document.querySelector('.smallphoto11');
const leftArrow = document.querySelector('.arrow-btn.left');
const rightArrow = document.querySelector('.arrow-btn.right');

const cardWidth = 320; // 根據你的 SCSS 設定
const gap = 24;      // 根據你的 SCSS 設定
const scrollAmount = cardWidth + gap;

rightArrow.addEventListener('click', () => {
    carousel.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

leftArrow.addEventListener('click', () => {
    carousel.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});
//banneer5圖片輪播

// 以前的圖片輪播
const items = document.querySelectorAll(".carousel-item");
let current = 0;

setInterval(() => {
    items[current].classList.remove("active");
    current = (current + 1) % items.length;
    items[current].classList.add("active");
}, 5000);

//漢堡按鈕
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

// 第二页换图功能

document.addEventListener('DOMContentLoaded', () => {
    const changeButton = document.querySelector('.change-image-button');
    const beforeImage = document.querySelector('.current-image:first-child');
    const afterImage = document.querySelector('.current-image:last-child');

    console.log('按鈕:', changeButton);
    console.log('Before元素:', beforeImage);
    console.log('After元素:', afterImage);

    if (changeButton && beforeImage && afterImage) {
        changeButton.addEventListener('mouseenter', () => {
            console.log('滑鼠進入');
            beforeImage.style.transition = 'none';
            afterImage.style.transition = 'none';
            beforeImage.style.opacity = '0';
            afterImage.style.opacity = '1';
        });

        changeButton.addEventListener('mouseleave', () => {
            console.log('滑鼠離開');
            beforeImage.style.transition = 'none';
            afterImage.style.transition = 'none';
            beforeImage.style.opacity = '1';
            afterImage.style.opacity = '0';
        });
    } else {
        console.error('找不到元素');
    }
});