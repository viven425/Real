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
// 測驗狀態管理
    // 添加选项选择效果
document.addEventListener('DOMContentLoaded', function() {
  // 初始化变量
  const totalQuestions = 10;
  let currentQuestion = 1;
  const answers = {};
  
  // DOM元素 - 修復選擇器
  const prevBtn = document.querySelector('.nav-btn');
  const nextBtn = document.querySelector('.btn.primary');
  const retryBtn = document.getElementById('retry-btn');
  const scienceBtn = document.getElementById('science-btn');
  const scienceModal = document.getElementById('science-modal');
  const closeModal = document.getElementById('close-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const progressBar = document.querySelector('.progress-bar');
  const floatingProgressBar = document.querySelector('.floating-progress-bar');
  const resultsSection = document.querySelector('.recommendations-section');
  const floatingProgress = document.querySelector('.floating-progress');
  const progressInfo = document.querySelector('.progress-info');
  
  // 為每個問題添加ID（如果不存在）
  const questions = document.querySelectorAll('.question');
  questions.forEach((question, index) => {
    if (!question.id) {
      question.id = `q${index + 1}`;
    }
  });
  
  // 更新进度条
  function updateProgress() {
    const progress = (currentQuestion / totalQuestions) * 100;
    progressBar.style.width = `${progress}%`;
    
    if (floatingProgressBar) {
      floatingProgressBar.style.width = `${progress}%`;
    }
    
    // 更新進度資訊
    if (progressInfo) {
      const spans = progressInfo.querySelectorAll('span');
      if (spans[0]) spans[0].textContent = `第 ${currentQuestion} 題 / 共 ${totalQuestions} 題`;
      if (spans[1]) spans[1].textContent = `${Math.round(progress)}%`;
    }
    
    // 更新按钮状态
    if (prevBtn) prevBtn.disabled = currentQuestion === 1;
    if (nextBtn) nextBtn.innerHTML = currentQuestion === totalQuestions ? 
      '看結果 <i class="fas fa-star"></i>' : 
      '下一題 <i class="fas fa-arrow-right"></i>';
    
    // 显示/隐藏浮动进度条
    if (floatingProgress) {
      if (currentQuestion > 1) {
        floatingProgress.style.display = 'block';
      } else {
        floatingProgress.style.display = 'none';
      }
    }
  }
  
  // 显示当前问题
  function showCurrentQuestion() {
    // 隐藏所有问题
    questions.forEach((q, index) => {
      q.classList.remove('active');
      q.style.display = 'none';
    });
    
    // 显示当前问题
    const currentQ = questions[currentQuestion - 1]; // 使用索引而不是ID
    if (currentQ) {
      currentQ.classList.add('active');
      currentQ.style.display = 'block';
      
      // 滚动到问题位置
      setTimeout(() => {
        currentQ.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
    
    updateProgress();
  }
  
  // 下一题
  function nextQuestion() {
    // 只有當用戶點擊"下一題"或"看結果"按鈕時才檢查答案
    const isManualNext = arguments.length > 0 && arguments[0] === 'manual';
    
    if (isManualNext) {
      // 检查当前问题是否已回答（僅在手動點擊時）
      const currentQuestionElement = questions[currentQuestion - 1];
      const selectedOption = currentQuestionElement ? currentQuestionElement.querySelector('input[type="radio"]:checked') : null;
      
      if (!selectedOption) {
        alert('請選擇一個答案後繼續');
        return;
      }
      
      if (selectedOption) {
        // 保存答案
        answers[`q${currentQuestion}`] = selectedOption.id;
      }
    }
    
    if (currentQuestion < totalQuestions) {
      currentQuestion++;
      showCurrentQuestion();
    } else {
      // 显示结果
      if (resultsSection) {
        resultsSection.style.display = 'block';
        resultsSection.scrollIntoView({ behavior: 'smooth' });
        createConfetti();
      }
    }
  }
  
  // 上一题
  function prevQuestion() {
    if (currentQuestion > 1) {
      currentQuestion--;
      showCurrentQuestion();
    }
  }
  
  // 重新测试
  function retryTest() {
    // 重置所有选择
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.checked = false;
    });
    
    // 移除选中样式
    document.querySelectorAll('.option-item').forEach(item => {
      item.classList.remove('selected');
    });
    
    // 重置变量
    currentQuestion = 1;
    for (let key in answers) {
      delete answers[key];
    }
    
    // 隐藏结果
    if (resultsSection) {
      resultsSection.style.display = 'none';
    }
    
    // 显示第一题
    showCurrentQuestion();
    
    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // 添加选项选择效果
  document.querySelectorAll('.option-item').forEach(item => {
    const radio = item.querySelector('input[type="radio"]');
    
    // 点击整个区域都可以选择
    item.addEventListener('click', (e) => {
      e.preventDefault();
      radio.checked = true;
      
      // 保存答案
      answers[`q${currentQuestion}`] = radio.id;
      
      updateSelectedStyles();
      
      // 自动前进到下一題（800ms后）
      setTimeout(() => {
        if (currentQuestion < totalQuestions) {
          currentQuestion++;
          showCurrentQuestion();
        } else {
          // 如果是最後一題，顯示結果
          if (resultsSection) {
            resultsSection.style.display = 'block';
            resultsSection.scrollIntoView({ behavior: 'smooth' });
            createConfetti();
          }
        }
      }, 800);
    });
    
    // 单独处理radio按钮点击
    radio.addEventListener('click', (e) => {
      // 保存答案
      answers[`q${currentQuestion}`] = radio.id;
      updateSelectedStyles();
      
      // 自动前进
      setTimeout(() => {
        if (currentQuestion < totalQuestions) {
          currentQuestion++;
          showCurrentQuestion();
        } else {
          // 如果是最後一題，顯示結果
          if (resultsSection) {
            resultsSection.style.display = 'block';
            resultsSection.scrollIntoView({ behavior: 'smooth' });
            createConfetti();
          }
        }
      }, 800);
    });
  });
  
  // 更新选中样式
  function updateSelectedStyles() {
    // 只更新當前問題的選項樣式
    const currentQuestionElement = questions[currentQuestion - 1];
    if (currentQuestionElement) {
      currentQuestionElement.querySelectorAll('.option-item').forEach(item => {
        if (item.querySelector('input[type="radio"]').checked) {
          item.classList.add('selected');
        } else {
          item.classList.remove('selected');
        }
      });
    }
  }
  
  // 创建彩色纸屑效果
  function createConfetti() {
    const colors = ['#4a6fa5', '#6d9bc3', '#ff7e5f', '#28a745', '#ffc107'];
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.width = `${Math.random() * 8 + 4}px`;
      confetti.style.height = confetti.style.width;
      confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
      confetti.style.animationDelay = `${Math.random() * 2}s`;
      document.body.appendChild(confetti);
      
      // 动画结束后移除元素
      setTimeout(() => {
        if (confetti.parentNode) {
          confetti.remove();
        }
      }, 6000);
    }
  }
  
  // 事件监听
  if (nextBtn) nextBtn.addEventListener('click', () => nextQuestion('manual'));
  if (prevBtn) prevBtn.addEventListener('click', prevQuestion);
  if (retryBtn) retryBtn.addEventListener('click', retryTest);
  if (scienceBtn) {
    scienceBtn.addEventListener('click', () => {
      if (scienceModal) scienceModal.style.display = 'flex';
    });
  }
  if (closeModal) {
    closeModal.addEventListener('click', () => {
      if (scienceModal) scienceModal.style.display = 'none';
    });
  }
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      if (scienceModal) scienceModal.style.display = 'none';
    });
  }
  
  // 点击模态框外部关闭
  window.addEventListener('click', (e) => {
    if (e.target === scienceModal && scienceModal) {
      scienceModal.style.display = 'none';
    }
  });
  
  // 初始化
  updateProgress();
  showCurrentQuestion();
});