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

// 心理測驗變數
// 測驗系統初始化
// 測驗系統初始化
function initQuizSystem() {
    console.log('測驗系統已初始化');
    setupQuestionListeners();
    updateUI();
}// 按鈕
function setActiveNav(clickedBtn) {
    // 移除所有按鈕的 active 類別
    const allBtns = document.querySelectorAll('.center-nav-btn');
    allBtns.forEach(btn => btn.classList.remove('active'));
    
    // 為點擊的按鈕添加 active 類別
    clickedBtn.classList.add('active');
}

// 心理測驗變數
let currentQuestion = 1;
const totalQuestions = 10;
const answers = {};

// 科系推薦結果
const results = {
    A: {
        title: "理工科技型",
        description: "你具有優秀的邏輯思維和分析能力，適合從事需要技術和專業知識的領域。你喜歡解決複雜問題，並且善於運用數據和科學方法。",
        departments: ["資訊工程學系", "電機工程學系", "機械工程學系", "化學工程學系", "數學系"]
    },
    B: {
        title: "創意藝術型",
        description: "你富有創造力和想像力，善於用不同的方式表達想法。你適合從事需要創意思維和美感的工作，能夠創造出獨特且有意義的作品。",
        departments: ["視覺傳達設計學系", "建築學系", "美術學系", "廣告學系", "工業設計學系"]
    },
    C: {
        title: "人文社會型",
        description: "你具有優秀的人際溝通能力和同理心，善於理解他人需求並提供幫助。你適合從事與人互動密切、能夠對社會產生正面影響的工作。",
        departments: ["心理學系", "社會工作學系", "教育學系", "企業管理學系", "法律學系"]
    }
};

// 等待DOM完全加載
document.addEventListener('DOMContentLoaded', function() {
    // 圖片切換功能初始化
    initImageChanger();
    
    // 測驗功能初始化
    initQuizSystem();
});

// 圖片切換功能
function initImageChanger() {
    const startButton = document.getElementById('startButton');
    const images = document.querySelectorAll('.current-image');
    const beforeImage = images[0]; // 第一張圖片
    const afterImage = images[1];  // 第二張圖片
    const imageDisplay = document.getElementById('imageDisplay');
    
    let isHovering = false;
    let hasStarted = false;

    console.log('圖片切換功能已初始化');
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
            hasStarted = true;
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
        console.log('開始測驗，準備跳轉到測驗區域');
        
        // 顯示加載動畫
        if (imageDisplay) {
            imageDisplay.classList.add('loading');
        }
        
        // 改變按鈕狀態
        startButton.classList.add('starting');
        startButton.textContent = '準備中...';
        
        // 確保顯示第二張圖片
        switchToAfterImage();
        
        // 延遲後跳轉到測驗
        setTimeout(() => {
            // 隱藏圖片區域，但保持其他元素可見
            document.getElementById('imageSection').style.display = 'none';
            
            // 顯示測驗區域
            const quizSection = document.getElementById('quizSection');
            quizSection.style.display = 'block';
            
            // 平滑滾動到測驗區域
            quizSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start' 
            });
            
            // 重新組織測驗區域的HTML結構
            reorganizeQuizLayout();
            
            console.log('已跳轉到測驗區域');
        }, 1500);
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
}

// 重新組織測驗佈局
function reorganizeQuizLayout() {
    const quizWrapper = document.querySelector('.quiz-wrapper');
    if (!quizWrapper) {
        console.error('找不到 quiz-wrapper');
        return;
    }

    // 不重建HTML，直接使用現有結構並添加容器
    const questions = quizWrapper.querySelectorAll('.question');
    const progressContainer = quizWrapper.querySelector('.progress-container');
    const progressText = quizWrapper.querySelector('.progress-text');
    const quizIntro = quizWrapper.querySelector('.quiz-intro');

    // 創建問題容器
    const questionsContainer = document.createElement('div');
    questionsContainer.className = 'questions-container';

    // 將所有問題移動到問題容器中
    questions.forEach(question => {
        questionsContainer.appendChild(question);
    });

    // 重新排列元素順序：標題 -> 問題容器 -> 進度條 -> 進度文字
    quizWrapper.innerHTML = '';
    quizWrapper.appendChild(quizIntro);
    quizWrapper.appendChild(questionsContainer);
    quizWrapper.appendChild(progressContainer);
    quizWrapper.appendChild(progressText);

    console.log('測驗佈局已重新組織');
    
    // 重新初始化測驗功能
    setupQuestionListeners();
    updateUI();
}

// 設置問題選項監聽器
function setupQuestionListeners() {
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const questionNum = this.name.substring(1);
            answers[questionNum] = this.value;
            
            // 更新UI顯示
            updateSelectedStyle(this);
            
            console.log('答案已記錄:', answers);
            
            // 自動切換到下一題（延遲0.5秒讓用戶看到選擇效果）
            setTimeout(() => {
                if (currentQuestion === totalQuestions) {
                    showResults();
                } else {
                    nextQuestion();
                }
            }, 500);
        });
    });
}

// 更新選中的樣式
function updateSelectedStyle(selectedRadio) {
    const questionDiv = selectedRadio.closest('.question');
    const labels = questionDiv.querySelectorAll('label');
    
    labels.forEach(label => label.classList.remove('selected'));
    selectedRadio.closest('label').classList.add('selected');
}

// 下一題
function nextQuestion() {
    if (currentQuestion === totalQuestions) {
        showResults();
        return;
    }
    
    if (currentQuestion < totalQuestions) {
        // 隱藏當前問題
        const currentQ = document.getElementById(`q${currentQuestion}`);
        if (currentQ) {
            currentQ.classList.remove('active');
            currentQ.classList.add('prev');
        }
        
        currentQuestion++;
        
        // 顯示下一題
        setTimeout(() => {
            const nextQ = document.getElementById(`q${currentQuestion}`);
            if (nextQ) {
                nextQ.classList.add('active');
            }
            const prevQ = document.getElementById(`q${currentQuestion - 1}`);
            if (prevQ) {
                prevQ.classList.remove('prev');
            }
        }, 200);
        
        updateUI();
    }
}

// 更新UI
function updateUI() {
    // 更新進度條
    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.querySelector('.progress-text');
    
    if (progressBar && progressText) {
        const progress = (currentQuestion / totalQuestions) * 100;
        progressBar.style.width = progress + '%';
        progressText.textContent = `第 ${currentQuestion} 題 / 共 ${totalQuestions} 題 (${Math.round(progress)}%)`;
    }
    
    // 恢復已選答案的樣式
    const currentAnswer = answers[currentQuestion];
    if (currentAnswer) {
        const selectedRadio = document.querySelector(`input[name="q${currentQuestion}"][value="${currentAnswer}"]`);
        if (selectedRadio) {
            updateSelectedStyle(selectedRadio);
        }
    }
}

// 計算結果
function calculateResult() {
    const scores = { A: 0, B: 0, C: 0 };
    
    Object.values(answers).forEach(answer => {
        scores[answer]++;
    });
    
    console.log('分數統計:', scores);
    
    // 找出最高分
    let maxScore = 0;
    let resultType = 'A';
    
    for (let type in scores) {
        if (scores[type] > maxScore) {
            maxScore = scores[type];
            resultType = type;
        }
    }
    
    return resultType;
}

// 顯示結果
function showResults() {
    console.log('顯示測驗結果');
    
    const resultType = calculateResult();
    const result = results[resultType];
    
    // 創建結果HTML
    const quizWrapper = document.querySelector('.quiz-wrapper');
    if (quizWrapper) {
        quizWrapper.innerHTML = `
            <div class="result-section show">
                <h2 class="result-title">${result.title}</h2>
                <p class="result-description">${result.description}</p>
                <div class="recommended-departments">
                    <h3>推薦科系</h3>
                    <div class="department-list">
                        ${result.departments.map(dept => `<div class="department-item">${dept}</div>`).join('')}
                    </div>
                </div>
                <button class="restart-btn" onclick="restartQuiz()">重新測驗</button>
            </div>
        `;
    }
}

// 重新開始測驗
function restartQuiz() {
    console.log('重新開始測驗');
    
    // 重置變數
    currentQuestion = 1;
    Object.keys(answers).forEach(key => delete answers[key]);
    
    // 顯示圖片區域，隱藏測驗區域
    document.getElementById('imageSection').style.display = 'block';
    document.getElementById('quizSection').style.display = 'none';
    
    // 重置圖片切換狀態
    const images = document.querySelectorAll('.current-image');
    const beforeImage = images[0];
    const afterImage = images[1];
    const startButton = document.getElementById('startButton');
    
    if (beforeImage && afterImage) {
        afterImage.classList.remove('active');
        beforeImage.classList.add('active');
    }
    
    if (startButton) {
        startButton.classList.remove('starting');
        startButton.textContent = '點擊開始吧';
    }
    
    // 重新初始化
    location.reload(); // 簡單的重新加載頁面
}