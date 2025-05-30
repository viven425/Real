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

// 第二页换图功能
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM載入完成');
    
    const changeButton = document.querySelector('.change-image-button');
    const images = document.querySelectorAll('.current-image');
    
    if (!changeButton || images.length < 2) {
        console.error('找不到按鈕或圖片元素不足');
        return;
    }

    const beforeImage = images[0];
    const afterImage = images[1];

    console.log('按鈕:', changeButton);
    console.log('Before元素:', beforeImage);
    console.log('After元素:', afterImage);

    changeButton.addEventListener('mouseenter', () => {
        console.log('滑鼠進入');
        beforeImage.style.opacity = '0';
        afterImage.style.opacity = '1';
    });

    changeButton.addEventListener('mouseleave', () => {
        console.log('滑鼠離開');
        beforeImage.style.opacity = '1';
        afterImage.style.opacity = '0';
    });

    console.log('事件監聽器已綁定完成');
});

// //導覽列旁邊
// document.addEventListener('DOMContentLoaded', function() {
//   const sidebar = document.querySelector('.sidebar-navigation');
//   const footer = document.querySelector('footer');
  
//   if (!sidebar || !footer) return;

//   // 使用Intersection Observer API - 更高效可靠
//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           sidebar.classList.add('hide-sidebar');
//         } else {
//           sidebar.classList.remove('hide-sidebar');
//         }
//       });
//     },
//     {
//       root: null,
//       rootMargin: '-50px 0px 0px 0px', // 提前50px检测
//       threshold: 0.01
//     }
//   );

//   observer.observe(footer);

//   // 备用方案：传统滚动检测
//   function checkFooterPosition() {
//     const footerRect = footer.getBoundingClientRect();
//     const triggerPoint = window.innerHeight * 0.8; // 当页脚到达视窗80%位置时触发
    
//     if (footerRect.top < triggerPoint) {
//       sidebar.classList.add('hide-sidebar');
//     } else {
//       sidebar.classList.remove('hide-sidebar');
//     }
//   }

//   // 如果Intersection Observer不可用，使用传统方法
//   if (!('IntersectionObserver' in window)) {
//     window.addEventListener('scroll', function() {
//       requestAnimationFrame(checkFooterPosition);
//     });
//     checkFooterPosition();
//   }
// });

//導覽列旁邊
document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.querySelector('.sidebar-navigation');
  const footer = document.querySelector('footer');
  
  if (!sidebar || !footer) return;

  // 使用Intersection Observer API - 更高效可靠
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          sidebar.classList.add('hide-sidebar');
        } else {
          sidebar.classList.remove('hide-sidebar');
        }
      });
    },
    {
      root: null,
      rootMargin: '-50px 0px 0px 0px', // 提前50px检测
      threshold: 0.01
    }
  );

  observer.observe(footer);

  // 導覽列小icon
  function checkFooterPosition() {
    const footerRect = footer.getBoundingClientRect();
    const triggerPoint = window.innerHeight * 0.8; // 当页脚到达视窗80%位置时触发
    
    if (footerRect.top < triggerPoint) {
      sidebar.classList.add('hide-sidebar');
    } else {
      sidebar.classList.remove('hide-sidebar');
    }
  }

  // 如果Intersection Observer不可用，使用传统方法
  if (!('IntersectionObserver' in window)) {
    window.addEventListener('scroll', function() {
      requestAnimationFrame(checkFooterPosition);
    });
    checkFooterPosition();
  }
});