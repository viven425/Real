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
document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.querySelector('.sidebar-navigation');
  const footer = document.querySelector('footer');
  const toggleBtn = document.querySelector('.floating-sidebar-toggle');
  const mobileBreakpoint = 768;

  if (!sidebar || !footer) return;

  // IntersectionObserver - 監控 footer 是否出現，切換 sidebar 顯示
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          sidebar.classList.add('hide-sidebar');
        } else {
          sidebar.classList.remove('hide-sidebar');
        }
      });
    }, {
      root: null,
      rootMargin: '-50px 0px 0px 0px',
      threshold: 0.01
    });

    observer.observe(footer);
  } else {
    // fallback - scroll 事件
    function checkFooterPosition() {
      const footerRect = footer.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.8;
      if (footerRect.top < triggerPoint) {
        sidebar.classList.add('hide-sidebar');
      } else {
        sidebar.classList.remove('hide-sidebar');
      }
    }
    window.addEventListener('scroll', () => {
      requestAnimationFrame(checkFooterPosition);
    });
    checkFooterPosition();
  }

  // 手機版 sidebar toggle 按鈕行為
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('show-on-mobile');
    });

    // 視窗寬度變化，超過手機寬度自動關閉側邊欄
    window.addEventListener('resize', () => {
      if (window.innerWidth > mobileBreakpoint && sidebar.classList.contains('show-on-mobile')) {
        sidebar.classList.remove('show-on-mobile');
      }
    });
  }
});

//心裏測驗
// function calculateResult() {
//     const totalQuestions = 10;
//     const form = document.getElementById("quizForm");
//     const answers = new FormData(form);

//     let scores = {
//         logic: 0,
//         creative: 0,
//         social: 0
//     };

//     for (let i = 1; i <= totalQuestions; i++) {
//         const answer = answers.get(`q${i}`);
//         if (answer) {
//             scores[answer]++;
//         }
//     }

//     // 找出最高分
//     let resultType = "logic";
//     let maxScore = scores.logic;

//     if (scores.creative > maxScore) {
//         resultType = "creative";
//         maxScore = scores.creative;
//     }
//     if (scores.social > maxScore) {
//         resultType = "social";
//     }

//     // 隱藏所有結果區塊
//     document.getElementById("result-A").style.display = "none";
//     document.getElementById("result-B").style.display = "none";
//     document.getElementById("result-C").style.display = "none";

//     // 顯示對應的結果區塊
//     if (resultType === "logic") {
//         document.getElementById("result-A").style.display = "block";
//     } else if (resultType === "creative") {
//         document.getElementById("result-B").style.display = "block";
//     } else if (resultType === "social") {
//         document.getElementById("result-C").style.display = "block";
//     }

//     // 平滑滾動到結果
//     document.querySelector(`#result-${resultType === 'logic' ? 'A' : resultType === 'creative' ? 'B' : 'C'}`)
//         .scrollIntoView({ behavior: 'smooth' });
// }
// document.addEventListener("DOMContentLoaded", () => {
//     const totalQuestions = 10;
//     const progressFill = document.getElementById("progressFill");
//     const quizForm = document.getElementById("quizForm");
//     const resultBlocks = document.querySelectorAll(".result-block");

//     // 1. 更新 progress bar
//     quizForm.addEventListener("change", () => {
//         const answered = quizForm.querySelectorAll("input[type=radio]:checked").length;
//         const percent = (answered / totalQuestions) * 100;
//         progressFill.style.width = `${percent}%`;

//         // 2. 更新 label 樣式
//         const questions = quizForm.querySelectorAll(".question");
//         questions.forEach(q => {
//             const radios = q.querySelectorAll("input[type=radio]");
//             radios.forEach(r => {
//                 r.parentElement.classList.remove("selected");
//                 if (r.checked) {
//                     r.parentElement.classList.add("selected");
//                 }
//             });
//         });
//     });

//     // 3. 計算結果
//     window.calculateResult = () => {
//         const answers = quizForm.querySelectorAll("input[type=radio]:checked");
//         if (answers.length < totalQuestions) {
//             alert("請完成所有題目再查看結果！");
//             return;
//         }

//         let scores = { logic: 0, creative: 0, social: 0 };
//         answers.forEach(a => scores[a.value]++);

//         // 找出最高分類別
//         let maxType = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

//         // 隱藏所有結果，顯示對應結果區塊
//         resultBlocks.forEach(block => block.style.display = "none");
//         if (maxType === "logic") {
//             document.getElementById("result-A").style.display = "block";
//         } else if (maxType === "creative") {
//             document.getElementById("result-B").style.display = "block";
//         } else {
//             document.getElementById("result-C").style.display = "block";
//         }

//         // 滾動到結果區塊
//         setTimeout(() => {
//             document.querySelector(".result-block[style*='block']").scrollIntoView({
//                 behavior: "smooth"
//             });
//         }, 200);
//     };

//     // 4. 重設問卷
//     window.restartQuiz = () => {
//         quizForm.reset();
//         progressFill.style.width = "0%";
//         resultBlocks.forEach(block => block.style.display = "none");
//         const labels = quizForm.querySelectorAll("label");
//         labels.forEach(label => label.classList.remove("selected"));
//         window.scrollTo({ top: 0, behavior: "smooth" });
//     };

//     // 5. 回首頁
//     window.goHome = () => {
//         window.location.href = "/";
//     };
// });
//心裏測驗
document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".question");
  const progressFill = document.getElementById("progressFill");
  const resultBlocks = document.querySelectorAll(".result-block");
  const buttonGroup = document.querySelector(".button-group");
  let currentIndex = 0;
  let answers = {};

  // 初始只顯示第一題
  function showQuestion(index) {
    questions.forEach((q, i) => {
      q.classList.toggle("active", i === index);
    });
    updateProgress(index);
  }

  function updateProgress(index) {
    // 用 index + 1 保證最後一題為 100%
    const percent = ((index + 1) / questions.length) * 100;
    progressFill.style.width = `${percent}%`;
  }

  function calculateResult() {
    const counts = { logic: 0, creative: 0, social: 0 };
    Object.values(answers).forEach(val => {
      if (counts[val] !== undefined) counts[val]++;
    });
    // 找最高分
    let maxType = "logic";
    let maxCount = 0;
    for (const type in counts) {
      if (counts[type] > maxCount) {
        maxCount = counts[type];
        maxType = type;
      }
    }
    return maxType;
  }

  function showResult(type) {
    // 隱藏題目（全部隱藏）
    questions.forEach(q => q.classList.remove("active"));
    // 進度條填滿
    progressFill.style.width = "100%";

    // 顯示對應結果區塊（覆蓋答題區域）
    resultBlocks.forEach(rb => {
      rb.style.display = rb.id === `result-${type.toUpperCase()}` ? "block" : "none";
    });
    // 顯示按鈕群組
    buttonGroup.style.display = "flex";
  }

  // 綁定選項事件
  questions.forEach((q, i) => {
    const inputs = q.querySelectorAll("input[type=radio]");
    inputs.forEach(input => {
      input.addEventListener("change", () => {
        answers[input.name] = input.value;
        currentIndex++;
        if (currentIndex < questions.length) {
          showQuestion(currentIndex);
        } else {
          // 結束，顯示結果
          const resType = calculateResult();
          showResult(resType);
        }
      });
    });
  });

  // 重置測驗
  window.restartQuiz = function () {
    answers = {};
    currentIndex = 0;
    resultBlocks.forEach(rb => (rb.style.display = "none"));
    buttonGroup.style.display = "none";
    showQuestion(currentIndex);
    // 重置進度條
    progressFill.style.width = "0%";
  };

  // 回首頁（可自行定義）
  window.goHome = function () {
    window.location.href = "/";
  };

  // 啟動測驗顯示第一題
  showQuestion(currentIndex);
});
