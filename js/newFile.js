// 輪播功能 - 加上安全檢查Add commentMore actions
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

//banner5圖片輪播Add commentMore actions
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

// 第二頁Add 
// 按鈕
function setActiveNav(clickedBtn) {
    // 移除所有按鈕的 active 類別
    const allBtns = document.querySelectorAll('.center-nav-btn');
    allBtns.forEach(btn => btn.classList.remove('active'));
    
    // 為點擊的按鈕添加 active 類別
    clickedBtn.classList.add('active');
}

// 心理測驗變數Add commentMore actions
// 測驗系統初始化
// 測驗系統初始化
// 測驗系統初始化
// 測驗系統初始化
// 測驗系統初始化
// 測驗系統初始化
// 測驗系統初始化
function initQuizSystem() {
    console.log('測驗系統已初始化');
    setupQuestionListeners();
    updateUI();
}

// 按鈕
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
    const imageChanger = initImageChanger();
    
    // 測驗功能初始化
    initQuizSystem();
    
    // 將圖片切換器存儲為全局變量供其他函數使用
    window.imageChangerInstance = imageChanger;
});

// 圖片切換功能
function initImageChanger() {
    const startButton = document.getElementById('startButton');
    const images = document.querySelectorAll('.current-image');
    const beforeImage = images[0]; // 第一張圖片
    const afterImage = images[1];  // 第二張圖片
    const imageDisplay = document.querySelector('.image-display');
    
    let isHovering = false;
    let hasStarted = false;

    console.log('圖片切換功能已初始化');
    console.log('startButton:', startButton);
    console.log('beforeImage:', beforeImage);
    console.log('afterImage:', afterImage);

    // 檢查元素是否存在
    if (!startButton) {
        console.error('startButton 未找到');
        return null;
    }
    if (!beforeImage || !afterImage) {
        console.error('圖片元素未找到', { beforeImage, afterImage });
        return null;
    }

    // 移除舊的事件監聽器（防止重複綁定）
    const newStartButton = startButton.cloneNode(true);
    startButton.parentNode.replaceChild(newStartButton, startButton);

    // 切換到第二張圖片
    function switchToAfterImage() {
        console.log('切換到第二張圖片');
        if (beforeImage && afterImage) {
            beforeImage.classList.remove('active');
            afterImage.classList.add('active');
        }
    }

    // 切換到第一張圖片
    function switchToBeforeImage() {
        console.log('切換到第一張圖片');
        if (beforeImage && afterImage) {
            afterImage.classList.remove('active');
            beforeImage.classList.add('active');
        }
    }

    // 鼠標懸停換圖功能
    newStartButton.addEventListener('mouseenter', function() {
        console.log('鼠標進入按鈕，hasStarted:', hasStarted);
        if (!hasStarted) {
            isHovering = true;
            switchToAfterImage();
        }
    });

    newStartButton.addEventListener('mouseleave', function() {
        console.log('鼠標離開按鈕，hasStarted:', hasStarted);
        if (!hasStarted) {
            isHovering = false;
            switchToBeforeImage();
        }
    });

    // 點擊開始答題功能
    newStartButton.addEventListener('click', function() {
        console.log('按鈕被點擊');
        if (!hasStarted) {
            hasStarted = true; // 設置為已開始狀態
            startQuiz();
        }
    });

    // 開始答題功能
    function startQuiz() {
        console.log('開始測驗，準備切換到測驗內容');
        
        // 顯示加載動畫
        if (imageDisplay) {
            imageDisplay.classList.add('loading');
        }
        
        // 改變按鈕狀態
        newStartButton.classList.add('starting');
        newStartButton.textContent = '準備中...';
        
        // 確保顯示第二張圖片
        switchToAfterImage();
        
        // 延遲後在原位置切換內容
        setTimeout(() => {
            // 在原來的圖片區域顯示測驗內容
            const imageSection = document.getElementById('imageSection');
            const quizSection = document.getElementById('quizSection');
            // 將測驗內容移動到圖片區域的位置
            const imageChanger = imageSection.querySelector('.image-changer');
            const quizWrapper = quizSection.querySelector('.quiz-wrapper');
            if (imageChanger && quizWrapper) {
                // 隱藏圖片內容，在同一位置顯示測驗
                imageChanger.style.display = 'none';
                
                // 將測驗包裝器移動到圖片區域
                imageSection.appendChild(quizWrapper);
                quizWrapper.style.display = 'block';
                
                // 隱藏原來的測驗區域
                quizSection.style.display = 'none';
                
                // 重新組織測驗佈局
                reorganizeQuizLayout();
                
                console.log('已在原位置切換到測驗內容');
            }
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

    // 返回函數供外部使用
    return {
        switchToAfterImage,
        switchToBeforeImage,
        hasStarted: () => hasStarted,
        setHasStarted: (value) => { hasStarted = value; }
    };
}

// 重新組織測驗佈局
function reorganizeQuizLayout() {
    const quizWrapper = document.querySelector('.quiz-wrapper');
    if (!quizWrapper) {
        console.error('找不到 quiz-wrapper');
        return;
    }

    // 檢查是否已經有 questions-container，避免重複創建
    let questionsContainer = quizWrapper.querySelector('.questions-container');
    
    if (questionsContainer) {
        console.log('questions-container 已存在，清理後重新組織');
        // 如果已存在，先清理
        questionsContainer.remove();
    }
    
    // 獲取現有元素
    const questions = Array.from(quizWrapper.querySelectorAll('.question'));
    const progressContainer = quizWrapper.querySelector('.progress-container');
    const progressText = quizWrapper.querySelector('.progress-text');
    const quizIntro = quizWrapper.querySelector('.quiz-intro');

    console.log('找到問題數量:', questions.length);

    // 重置所有問題狀態
    questions.forEach((question, index) => {
        question.classList.remove('active', 'prev');
        if (index === 0) {
            question.classList.add('active');
        }
    });

    // 創建新的問題容器
    questionsContainer = document.createElement('div');
    questionsContainer.className = 'questions-container';

    // 將所有問題移動到問題容器中
    questions.forEach(question => {
        questionsContainer.appendChild(question);
    });

    // 清空並重新排列 quiz-wrapper
    quizWrapper.innerHTML = '';
    
    // 按正確順序添加元素
    if (quizIntro) quizWrapper.appendChild(quizIntro);
    quizWrapper.appendChild(questionsContainer);
    if (progressContainer) quizWrapper.appendChild(progressContainer);
    if (progressText) quizWrapper.appendChild(progressText);

    console.log('測驗佈局已重新組織');
    
    // 重新初始化測驗功能
    setupQuestionListeners();
    updateUI();
}

// 設置問題選項監聽器
function setupQuestionListeners() {
    // 先移除舊的監聽器，避免重複綁定
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        const newRadio = radio.cloneNode(true);
        radio.parentNode.replaceChild(newRadio, radio);
    });

    // 重新綁定事件監聽器
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const questionNum = this.name.substring(1);
            answers[questionNum] = this.value;
            
            // 更新UI顯示
            updateSelectedStyle(this);
            
            console.log('答案已記錄:', answers);
            console.log('當前題號:', currentQuestion);
            
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
    
    console.log('問題監聽器已重新設置');
}

// 更新選中的樣式
function updateSelectedStyle(selectedRadio) {
    const questionDiv = selectedRadio.closest('.question');
    const labels = questionDiv.querySelectorAll('label');
    
    labels.forEach(label => label.classList.remove('selected'));
    selectedRadio.closest('label').classList.add('selected');
}

// 下一題 - 修復版本
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

// 更新UI - 修復版本
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

// 計算結果 - 修復版本
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

// 顯示結果 - 修復版本
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
                <div class="result-buttons">
                    <button class="restart-btn" onclick="restartQuiz()">重新測驗</button>
                    <button class="school-btn" onclick="goToSchoolIntro()">學校介紹</button>
                    <button class="department-btn" onclick="gotoDepartmentIntro()">科系介紹</button>
                </div>
            </div>
        `;
    }
}

// 重新開始測驗
function restartQuiz() {
    console.log('重新開始測驗');
    
    // 重置所有變數
    currentQuestion = 1;
    Object.keys(answers).forEach(key => delete answers[key]);
    
    // 找到相關元素
    const imageSection = document.getElementById('imageSection');
    const quizSection = document.getElementById('quizSection');
    const imageChanger = imageSection.querySelector('.image-changer');
    
    // 檢查測驗包裝器在哪裡並移回原位
    let quizWrapper = imageSection.querySelector('.quiz-wrapper');
    if (quizWrapper) {
        // 如果在圖片區域，移回quiz-section
        quizSection.appendChild(quizWrapper);
        console.log('測驗包裝器已移回quiz-section');
    }
    
    // 重新獲取移動後的元素
    quizWrapper = quizSection.querySelector('.quiz-wrapper');
    
    // 重置測驗區域的HTML結構到原始狀態
    if (quizWrapper) {
        quizWrapper.innerHTML = `
            <div class="quiz-intro">
                <h1>探索你的潛能</h1>
                <p>完成心理測驗，獲得最適合你的科系推薦</p>
            </div>

            <!-- 問題1 -->
            <div class="question active" id="q1">
                <h2>1. 當面對一個複雜的問題時，你通常會？</h2>
                <label data-question="1" data-answer="A">
                    <input type="radio" name="q1" value="A">
                    分析問題的邏輯結構，尋找最佳解決方案
                </label>
                <label data-question="1" data-answer="B">
                    <input type="radio" name="q1" value="B">
                    用創意思維尋找獨特的解決方法
                </label>
                <label data-question="1" data-answer="C">
                    <input type="radio" name="q1" value="C">
                    與他人討論，聽取不同觀點
                </label>
            </div>

            <!-- 問題2 -->
            <div class="question" id="q2">
                <h2>2. 你最喜歡的學習方式是？</h2>
                <label data-question="2" data-answer="A">
                    <input type="radio" name="q2" value="A">
                    透過實驗和數據分析理解概念
                </label>
                <label data-question="2" data-answer="B">
                    <input type="radio" name="q2" value="B">
                    透過視覺化和創作表達學習
                </label>
                <label data-question="2" data-answer="C">
                    <input type="radio" name="q2" value="C">
                    透過小組討論和互動學習
                </label>
            </div>

            <!-- 問題3 -->
            <div class="question" id="q3">
                <h2>3. 你理想的工作環境是？</h2>
                <label data-question="3" data-answer="A">
                    <input type="radio" name="q3" value="A">
                    安靜的辦公室，可以專注思考
                </label>
                <label data-question="3" data-answer="B">
                    <input type="radio" name="q3" value="B">
                    充滿創意氛圍的工作室
                </label>
                <label data-question="3" data-answer="C">
                    <input type="radio" name="q3" value="C">
                    開放式空間，便於團隊合作
                </label>
            </div>

            <!-- 問題4 -->
            <div class="question" id="q4">
                <h2>4. 你最擅長的是？</h2>
                <label data-question="4" data-answer="A">
                    <input type="radio" name="q4" value="A">
                    邏輯推理和數據分析
                </label>
                <label data-question="4" data-answer="B">
                    <input type="radio" name="q4" value="B">
                    創意發想和藝術表達
                </label>
                <label data-question="4" data-answer="C">
                    <input type="radio" name="q4" value="C">
                    人際溝通和團隊協調
                </label>
            </div>

            <!-- 問題5 -->
            <div class="question" id="q5">
                <h2>5. 你喜歡的休閒活動是？</h2>
                <label data-question="5" data-answer="A">
                    <input type="radio" name="q5" value="A">
                    閱讀科技或學術文章
                </label>
                <label data-question="5" data-answer="B">
                    <input type="radio" name="q5" value="B">
                    繪畫、攝影或手工創作
                </label>
                <label data-question="5" data-answer="C">
                    <input type="radio" name="q5" value="C">
                    與朋友聚會或參加社交活動
                </label>
            </div>

            <!-- 問題6 -->
            <div class="question" id="q6">
                <h2>6. 你認為最重要的能力是？</h2>
                <label data-question="6" data-answer="A">
                    <input type="radio" name="q6" value="A">
                    分析和解決問題的能力
                </label>
                <label data-question="6" data-answer="B">
                    <input type="radio" name="q6" value="B">
                    創新和想像力
                </label>
                <label data-question="6" data-answer="C">
                    <input type="radio" name="q6" value="C">
                    理解他人和同理心
                </label>
            </div>

            <!-- 問題7 -->
            <div class="question" id="q7">
                <h2>7. 你的理想職業特質是？</h2>
                <label data-question="7" data-answer="A">
                    <input type="radio" name="q7" value="A">
                    需要高度技術和專業知識
                </label>
                <label data-question="7" data-answer="B">
                    <input type="radio" name="q7" value="B">
                    充滿創意和變化性
                </label>
                <label data-question="7" data-answer="C">
                    <input type="radio" name="q7" value="C">
                    能幫助他人和社會
                </label>
            </div>

            <!-- 問題8 -->
            <div class="question" id="q8">
                <h2>8. 在小組作業中，你通常扮演什麼角色？</h2>
                <label data-question="8" data-answer="A">
                    <input type="radio" name="q8" value="A">
                    技術專家，負責分析和執行
                </label>
                <label data-question="8" data-answer="B">
                    <input type="radio" name="q8" value="B">
                    創意發想者，提供新點子
                </label>
                <label data-question="8" data-answer="C">
                    <input type="radio" name="q8" value="C">
                    協調者，維持團隊和諧
                </label>
            </div>

            <!-- 問題9 -->
            <div class="question" id="q9">
                <h2>9. 你最感興趣的課外讀物是？</h2>
                <label data-question="9" data-answer="A">
                    <input type="radio" name="q9" value="A">
                    科技趨勢和技術文章
                </label>
                <label data-question="9" data-answer="B">
                    <input type="radio" name="q9" value="B">
                    藝術設計和創意雜誌
                </label>
                <label data-question="9" data-answer="C">
                    <input type="radio" name="q9" value="C">
                    心理學和人文社會書籍
                </label>
            </div>

            <!-- 問題10 -->
            <div class="question" id="q10">
                <h2>10. 你希望自己的工作能帶來什麼影響？</h2>
                <label data-question="10" data-answer="A">
                    <input type="radio" name="q10" value="A">
                    推動科技進步和創新
                </label>
                <label data-question="10" data-answer="B">
                    <input type="radio" name="q10" value="B">
                    創造美麗和啟發人心的作品
                </label>
                <label data-question="10" data-answer="C">
                    <input type="radio" name="q10" value="C">
                    幫助他人成長和解決問題
                </label>
            </div>

            <!-- 進度條 -->
            <div class="progress-container">
                <div class="progress-bar"></div>
            </div>
            <div class="progress-text">第 1 題 / 共 10 題 (10%)</div>
        `;
    }
    
    // 隱藏測驗區域
    quizSection.style.display = 'none';
    
    // 顯示圖片區域
    if (imageChanger) {
        imageChanger.style.display = 'flex';
    }
    
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
        startButton.classList.remove('starting', 'loading');
        startButton.textContent = '點擊開始吧';
    }
    
    // 清除加載狀態
    const imageDisplay = document.querySelector('.image-display');
    if (imageDisplay) {
        imageDisplay.classList.remove('loading');
    }
    
    // 重新初始化圖片切換功能
    setTimeout(() => {
        window.imageChangerInstance = initImageChanger();
        console.log('圖片切換功能已重新初始化');
    }, 100);
    
    console.log('已完全重置到初始狀態');
}

// 學校介紹按鈕功能
function goToSchoolIntro() {
    console.log('跳轉到學校介紹頁面');
    window.location.href = 'school.html';
}

// 科系介紹按鈕功能  
function gotoDepartmentIntro() {
    console.log('跳轉到科系介紹頁面');
    window.location.href = 'department-intro.html';
}

// 卡片點擊處理函數最後Add commentMore actions

        // 卡片點擊處理函數
        function goToDetail(department) {
            console.log('跳轉到科系詳情頁:', department);
            // 可以根據不同科系跳轉到不同頁面
            // window.location.href = `department-detail.html?dept=${department}`;
            alert(`即將跳轉到 ${department} 科系詳情頁`);
        }

        // 添加卡片動畫效果
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.card');
            
            // 為卡片添加進入動畫
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(40px)';
                
                setTimeout(() => {
                    card.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.320, 1)';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 150);
            }
                    );    });  