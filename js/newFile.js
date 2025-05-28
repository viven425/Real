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
            // 根據 src 屬性選取圖片，確保選擇到正確的圖片
            const beforeImage = document.querySelector('.current-image[src*="before.svg"]');
            const afterImage = document.querySelector('.current-image[src*="after.svg"]');

            // 檢查所有必要的元素是否存在，防止錯誤
            if (changeButton && beforeImage && afterImage) {
                changeButton.addEventListener('mouseenter', () => {
                    // 當滑鼠進入按鈕時，隱藏第一張圖片，顯示第二張圖片
                    beforeImage.classList.remove('active');
                    afterImage.classList.add('active');
                    console.log('滑鼠進入：顯示 after.svg'); // 偵錯訊息
                });

                changeButton.addEventListener('mouseleave', () => {
                    // 當滑鼠離開按鈕時，隱藏第二張圖片，顯示第一張圖片
                    afterImage.classList.remove('active');
                    beforeImage.classList.add('active');
                    console.log('滑鼠離開：顯示 before.svg'); // 偵錯訊息
                });
            } else {
                console.error('錯誤：找不到按鈕或圖片元素。請檢查 HTML 選擇器和圖片路徑。');
            }
        });