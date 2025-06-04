// 輪播功能 - 加上安全檢查
const carousel = document.querySelector('.smallphoto11');
const leftArrow = document.querySelector('.arrow-btn.left');
const rightArrow = document.querySelector('.arrow-btn.right');

if (carousel && leftArrow && rightArrow) {
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
} else {
    console.log('輪播元素未找到，跳過輪播功能');
}

//banner5圖片輪播
const items = document.querySelectorAll(".carousel-item");
if (items.length > 0) {
    let current = 0;

    setInterval(() => {
        items[current].classList.remove("active");
        current = (current + 1) % items.length;
        items[current].classList.add("active");
    }, 5000);
} else {
    console.log('carousel-item 元素未找到，跳過圖片輪播');
}

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

// 第二頁
// 按鈕
   function setActiveNav(clickedBtn) {
            // 移除所有按鈕的 active 類別
            const allBtns = document.querySelectorAll('.center-nav-btn');
            allBtns.forEach(btn => btn.classList.remove('active'));
            
            // 為點擊的按鈕添加 active 類別
            clickedBtn.classList.add('active');
        }

// 為所有圖片換的
  // 獲取DOM元素
       // 等待DOM完全加載
          // 等待DOM完全加載
          // 等待DOM完全加載
        document.addEventListener('DOMContentLoaded', function() {
            // 獲取DOM元素
            const startButton = document.getElementById('startButton');
            const images = document.querySelectorAll('.current-image');
            const beforeImage = images[0]; // 第一張圖片
            const afterImage = images[1];  // 第二張圖片
            const imageDisplay = document.getElementById('imageDisplay');
            
            let isHovering = false;
            let hasStarted = false;

            console.log('DOM已加載，開始綁定事件');
            console.log('startButton:', startButton);
            console.log('beforeImage:', beforeImage);
            console.log('afterImage:', afterImage);
            console.log('images 數量:', images.length);

            // 檢查元素是否存在
            if (!startButton) {
                console.error('startButton 未找到');
                return;
            }
            if (!beforeImage || !afterImage) {
                console.error('圖片元素未找到', { beforeImage, afterImage });
                return;
            }

            // 鼠標懸停換圖功能
            startButton.addEventListener('mouseenter', function() {
                console.log('鼠標進入按鈕，hasStarted:', hasStarted);
                if (!hasStarted) {
                    isHovering = true;
                    switchToAfterImage();
                }
            });

            startButton.addEventListener('mouseleave', function() {
                console.log('鼠標離開按鈕，hasStarted:', hasStarted);
                if (!hasStarted) {
                    isHovering = false;
                    switchToBeforeImage();
                }
            });

            // 點擊開始答題功能
            startButton.addEventListener('click', function() {
                console.log('按鈕被點擊');
                if (!hasStarted) {
                    startQuiz();
                }
            });

            // 切換到第二張圖片
            function switchToAfterImage() {
                console.log('切換到第二張圖片');
                if (beforeImage && afterImage) {
                    beforeImage.classList.remove('active');
                    afterImage.classList.add('active');
                    console.log('切換後，afterImage active:', afterImage.classList.contains('active'));
                }
            }

            // 切換到第一張圖片
            function switchToBeforeImage() {
                console.log('切換到第一張圖片');
                if (beforeImage && afterImage) {
                    afterImage.classList.remove('active');
                    beforeImage.classList.add('active');
                    console.log('切換後，beforeImage active:', beforeImage.classList.contains('active'));
                }
            }

            // 開始答題功能
            function startQuiz() {
                console.log('開始答題');
                hasStarted = true;
                
                // 顯示加載動畫
                if (imageDisplay) {
                    imageDisplay.classList.add('loading');
                }
                
                // 改變按鈕狀態
                startButton.classList.add('starting');
                startButton.textContent = '';
                
                // 確保顯示第二張圖片
                switchToAfterImage();
                
                // 模擬加載過程
                setTimeout(() => {
                    if (imageDisplay) {
                        imageDisplay.classList.remove('loading');
                    }
                    
                    // 這裡可以添加跳轉到答題頁面的邏輯
                    alert('開始答題！\n\n在這裡可以跳轉到答題頁面或載入題目。');
                    
                    // 重置狀態（僅用於演示）
                    resetToInitialState();
                }, 2000);
            }

            // 重置到初始狀態（僅用於演示）
            function resetToInitialState() {
                hasStarted = false;
                startButton.classList.remove('starting');
                startButton.textContent = '點擊開始吧';
                switchToBeforeImage();
            }

            // 圖片加載錯誤處理
            if (beforeImage) {
                beforeImage.addEventListener('error', function() {
                    console.log('第一張圖片加載失敗');
                });
            }

            if (afterImage) {
                afterImage.addEventListener('error', function() {
                    console.log('第二張圖片加載失敗');
                });
            }
        });