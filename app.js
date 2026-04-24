// App State
const state = {
    currentScreen: 'language-selection',
    selectedLanguage: null,
    currentLesson: null,
    currentStep: 0,
    user: {
        name: 'Coder',
        level: 1,
        xp: 0,
        streak: 0,
        hearts: 5,
        lessonsCompleted: 0,
        achievements: [],
        ownedFaces: ['cat-blue'],
        currentFace: 'cat-blue',
        profilePicture: null,
        progress: {
            basics: { level: 0, progress: 0, completedLessons: [] },
            python: { level: 1, progress: 0, completedLessons: [] },
            java: { level: 1, progress: 0, completedLessons: [] },
            javascript: { level: 1, progress: 0, completedLessons: [] },
            cpp: { level: 1, progress: 0, completedLessons: [] },
            csharp: { level: 1, progress: 0, completedLessons: [] },
            ruby: { level: 1, progress: 0, completedLessons: [] },
            go: { level: 1, progress: 0, completedLessons: [] }
        }
    }
};

// Shop items - AI faces
const shopItems = [
    { id: 'cat-blue', name: 'Blue Cat', price: 0, color: '#87ceeb', owned: true },
    { id: 'cat-pink', name: 'Pink Cat', price: 50, color: '#ffb6c1', owned: false },
    { id: 'cat-purple', name: 'Purple Cat', price: 100, color: '#dda0dd', owned: false },
    { id: 'cat-green', name: 'Green Cat', price: 150, color: '#90ee90', owned: false },
    { id: 'cat-orange', name: 'Orange Cat', price: 200, color: '#ffa500', owned: false },
    { id: 'cat-gold', name: 'Golden Cat', price: 500, color: '#ffd700', owned: false },
    { id: 'robot-blue', name: 'Blue Robot', price: 300, color: '#4169e1', owned: false },
    { id: 'robot-pink', name: 'Pink Robot', price: 350, color: '#ff69b4', owned: false }
];

// Load user data from localStorage
function loadUserData() {
    const savedData = localStorage.getItem('codelearn-user');
    if (savedData) {
        state.user = JSON.parse(savedData);
        updateUI();
        updateProfilePicture();
        updateCatFace();
    }
}

// Save user data to localStorage
function saveUserData() {
    localStorage.setItem('codelearn-user', JSON.stringify(state.user));
    updateUI();
}

// Update UI with current user data
function updateUI() {
    document.getElementById('streak-count').textContent = state.user.streak;
    document.getElementById('xp-count').textContent = state.user.xp;
    document.getElementById('hearts-count').textContent = state.user.hearts;
    
    // Update language progress
    for (const lang of ['basics', 'python', 'java', 'javascript', 'cpp', 'csharp', 'ruby', 'go']) {
        const progress = state.user.progress[lang];
        document.getElementById(`${lang}-progress`).style.width = `${progress.progress}%`;
        document.getElementById(`${lang}-level`).textContent = `Level ${progress.level}`;
    }
    
    // Update profile
    document.getElementById('profile-name').textContent = state.user.name;
    document.getElementById('profile-level').textContent = `Level ${state.user.level}`;
    document.getElementById('profile-streak').textContent = state.user.streak;
    document.getElementById('profile-xp').textContent = state.user.xp;
    document.getElementById('profile-lessons').textContent = state.user.lessonsCompleted;
    document.getElementById('profile-achievements').textContent = state.user.achievements.length;
}

// Show screen
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    state.currentScreen = screenId;

    // Update bottom nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    if (screenId === 'language-selection') {
        document.querySelector('.nav-item:nth-child(1)').classList.add('active');
    } else if (screenId === 'lesson-selection') {
        document.querySelector('.nav-item:nth-child(2)').classList.add('active');
        renderLessonPath();
    } else if (screenId === 'shop-screen') {
        document.querySelector('.nav-item:nth-child(3)').classList.add('active');
        renderShop();
    } else if (screenId === 'profile-screen') {
        document.querySelector('.nav-item:nth-child(4)').classList.add('active');
        renderAchievements();
    }
}

// Select language
function selectLanguage(language) {
    state.selectedLanguage = language;
    document.getElementById('selected-language-title').textContent = 
        language.charAt(0).toUpperCase() + language.slice(1) + ' Lessons';
    renderLessonPath();
    showScreen('lesson-selection');
}

// Go back
function goBack() {
    if (state.currentScreen === 'lesson-content') {
        showScreen('lesson-selection');
    } else if (state.currentScreen === 'lesson-selection') {
        showScreen('language-selection');
    }
}

// Render lesson path
function renderLessonPath() {
    const lessonPath = document.getElementById('lesson-path');
    const lessons = getLessonsForLanguage(state.selectedLanguage);
    const completedLessons = state.user.progress[state.selectedLanguage].completedLessons;
    
    lessonPath.innerHTML = lessons.map((lesson, index) => {
        const isCompleted = completedLessons.includes(lesson.id);
        const isLocked = index > 0 && !completedLessons.includes(lessons[index - 1].id);
        
        return `
            <div class="lesson-node ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''}" 
                 onclick="${isLocked ? '' : `startLesson('${lesson.id}')`}">
                <div class="lesson-icon">
                    <i class="fas ${isCompleted ? 'fa-check' : 'fa-code'}"></i>
                </div>
                <div class="lesson-info">
                    <h4>${lesson.title}</h4>
                    <p>${lesson.description}</p>
                </div>
                <div class="lesson-xp">+${lesson.xp} XP</div>
            </div>
        `;
    }).join('');
}

// Start lesson
function startLesson(lessonId) {
    const lessons = getLessonsForLanguage(state.selectedLanguage);
    state.currentLesson = lessons.find(l => l.id === lessonId);
    state.currentStep = 0;
    renderLessonContent();
    showScreen('lesson-content');
}

// Render lesson content
function renderLessonContent() {
    const lesson = state.currentLesson;
    const step = lesson.steps[state.currentStep];
    
    document.getElementById('lesson-title').textContent = lesson.title;
    document.getElementById('lesson-step').textContent = `${state.currentStep + 1}/${lesson.steps.length}`;
    document.getElementById('explanation-text').textContent = step.explanation;
    document.getElementById('editor-language').textContent = 
        state.selectedLanguage.charAt(0).toUpperCase() + state.selectedLanguage.slice(1);
    
    // Set code input
    const codeInput = document.getElementById('code-input');
    codeInput.value = step.code || '';
    
    // Clear output
    document.getElementById('code-output').innerHTML = '<p class="placeholder">Run your code to see output...</p>';
    document.getElementById('code-output').className = 'output-content';
    
    // Render code breakdown if exists
    if (step.codeBreakdown && step.codeBreakdown.length > 0) {
        document.getElementById('code-breakdown-section').style.display = 'block';
        renderCodeBreakdown(step.codeBreakdown);
    } else {
        document.getElementById('code-breakdown-section').style.display = 'none';
    }
    
    // Render quiz if exists
    if (step.quiz) {
        document.getElementById('quiz-section').style.display = 'block';
        renderQuiz(step.quiz);
    } else {
        document.getElementById('quiz-section').style.display = 'none';
    }
    
    // Update buttons
    document.getElementById('prev-btn').style.visibility = state.currentStep === 0 ? 'hidden' : 'visible';
    document.getElementById('next-btn').innerHTML = state.currentStep === lesson.steps.length - 1 
        ? 'Complete <i class="fas fa-check"></i>' 
        : 'Next <i class="fas fa-arrow-right"></i>';
}

// Render quiz
function renderQuiz(quiz) {
    const quizContent = document.getElementById('quiz-content');
    quizContent.innerHTML = `
        <p style="margin-bottom: 1rem; font-weight: bold;">${quiz.question}</p>
        ${quiz.options.map((option, index) => `
            <div class="quiz-option" onclick="selectQuizOption(this, ${index})">
                ${option}
            </div>
        `).join('')}
    `;
}

// Render code breakdown
function renderCodeBreakdown(codeBreakdown) {
    const breakdownContent = document.getElementById('code-breakdown-content');
    breakdownContent.innerHTML = codeBreakdown.map(item => `
        <div class="code-breakdown-item">
            <div class="code-line">${item.line}</div>
            <div class="code-explanation">${item.explanation}</div>
        </div>
    `).join('');
}

// Select quiz option
function selectQuizOption(element, index) {
    document.querySelectorAll('.quiz-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    element.classList.add('selected');
}

// Previous step
function previousStep() {
    if (state.currentStep > 0) {
        state.currentStep--;
        renderLessonContent();
    }
}

// Next step
function nextStep() {
    const lesson = state.currentLesson;
    
    if (state.currentStep < lesson.steps.length - 1) {
        state.currentStep++;
        renderLessonContent();
    } else {
        completeLesson();
    }
}

// Complete lesson
function completeLesson() {
    const lesson = state.currentLesson;
    const langProgress = state.user.progress[state.selectedLanguage];
    
    // Add XP
    state.user.xp += lesson.xp;
    
    // Mark lesson as completed
    if (!langProgress.completedLessons.includes(lesson.id)) {
        langProgress.completedLessons.push(lesson.id);
        state.user.lessonsCompleted++;
    }
    
    // Update progress
    const totalLessons = getLessonsForLanguage(state.selectedLanguage).length;
    langProgress.progress = Math.round((langProgress.completedLessons.length / totalLessons) * 100);
    
    // Update level
    if (langProgress.progress >= 100 && langProgress.completedLessons.length % 5 === 0) {
        langProgress.level++;
        state.user.level++;
    }
    
    // Update streak
    state.user.streak++;
    
    // Check achievements
    checkAchievements();
    
    // Save and update UI
    saveUserData();
    
    // Show completion message
    alert(`🎉 Lesson Complete! +${lesson.xp} XP`);
    
    // Go back to lesson selection
    showScreen('lesson-selection');
    renderLessonPath();
}

// Run code
function runCode() {
    const code = document.getElementById('code-input').value;
    const output = document.getElementById('code-output');
    
    output.innerHTML = '<p><i class="fas fa-spinner fa-spin"></i> Running...</p>';
    
    // Simulate code execution based on language
    setTimeout(() => {
        let result = '';
        
        if (state.selectedLanguage === 'python') {
            result = executePython(code);
        } else if (state.selectedLanguage === 'java') {
            result = executeJava(code);
        } else if (state.selectedLanguage === 'javascript') {
            result = executeJavaScript(code);
        }
        
        if (result.success) {
            output.innerHTML = `<pre>${result.output}</pre>`;
            output.className = 'output-content success';
        } else {
            output.innerHTML = `<pre>${result.error}</pre>`;
            output.className = 'output-content error';
        }
    }, 500);
}

// Reset code
function resetCode() {
    const step = state.currentLesson.steps[state.currentStep];
    document.getElementById('code-input').value = step.code || '';
    document.getElementById('code-output').innerHTML = '<p class="placeholder">Run your code to see output...</p>';
    document.getElementById('code-output').className = 'output-content';
}

// Execute Python (simulated)
function executePython(code) {
    try {
        // Simple Python simulation for basic operations
        if (code.includes('print')) {
            const match = code.match(/print\((.*)\)/);
            if (match) {
                let output = match[1].replace(/['"]/g, '');
                // Evaluate simple expressions
                if (output.match(/^\d+[\+\-\*\/]\d+$/)) {
                    output = eval(output);
                }
                return { success: true, output: output };
            }
        }
        
        // Handle variable assignments and basic math
        if (code.includes('=') && !code.includes('==')) {
            const lines = code.split('\n');
            let result = '';
            for (const line of lines) {
                if (line.includes('print')) {
                    const match = line.match(/print\((.*)\)/);
                    if (match) {
                        result += match[1].replace(/['"]/g, '') + '\n';
                    }
                }
            }
            return { success: true, output: result || 'Code executed successfully!' };
        }
        
        return { success: true, output: 'Code executed successfully!' };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// Execute Java (simulated)
function executeJava(code) {
    try {
        if (code.includes('System.out.println')) {
            const match = code.match(/System\.out\.println\((.*)\)/);
            if (match) {
                let output = match[1].replace(/"/g, '');
                return { success: true, output: output };
            }
        }
        return { success: true, output: 'Code compiled and executed successfully!' };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// Execute JavaScript
function executeJavaScript(code) {
    try {
        const result = eval(code);
        if (result !== undefined) {
            return { success: true, output: String(result) };
        }
        return { success: true, output: 'Code executed successfully!' };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// Regenerate explanation
function regenerateExplanation() {
    const step = state.currentLesson.steps[state.currentStep];
    const explanationEl = document.getElementById('explanation-text');
    
    explanationEl.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating new explanation...';
    
    setTimeout(() => {
        generateAIExplanation(state.selectedLanguage, step.topic, (newExplanation) => {
            explanationEl.textContent = newExplanation;
        });
    }, 1000);
}

// Check achievements
function checkAchievements() {
    const achievements = [
        { id: 'first_lesson', name: 'First Steps', icon: 'fa-baby', condition: () => state.user.lessonsCompleted >= 1 },
        { id: 'streak_3', name: 'On Fire', icon: 'fa-fire', condition: () => state.user.streak >= 3 },
        { id: 'streak_7', name: 'Week Warrior', icon: 'fa-calendar-week', condition: () => state.user.streak >= 7 },
        { id: 'xp_100', name: 'Rising Star', icon: 'fa-star', condition: () => state.user.xp >= 100 },
        { id: 'xp_500', name: 'Code Master', icon: 'fa-crown', condition: () => state.user.xp >= 500 },
        { id: 'level_5', name: 'Level Up', icon: 'fa-arrow-up', condition: () => state.user.level >= 5 },
        { id: 'python_basic', name: 'Pythonista', icon: 'fa-python', condition: () => state.user.progress.python.level >= 2 },
        { id: 'java_basic', name: 'Java Guru', icon: 'fa-java', condition: () => state.user.progress.java.level >= 2 },
    ];
    
    for (const achievement of achievements) {
        if (!state.user.achievements.includes(achievement.id) && achievement.condition()) {
            state.user.achievements.push(achievement.id);
            alert(`🏆 Achievement Unlocked: ${achievement.name}!`);
        }
    }
}

// Render achievements
function renderAchievements() {
    const achievementsGrid = document.getElementById('achievements-grid');
    const allAchievements = [
        { id: 'first_lesson', name: 'First Steps', icon: 'fa-baby' },
        { id: 'streak_3', name: 'On Fire', icon: 'fa-fire' },
        { id: 'streak_7', name: 'Week Warrior', icon: 'fa-calendar-week' },
        { id: 'xp_100', name: 'Rising Star', icon: 'fa-star' },
        { id: 'xp_500', name: 'Code Master', icon: 'fa-crown' },
        { id: 'level_5', name: 'Level Up', icon: 'fa-arrow-up' },
        { id: 'python_basic', name: 'Pythonista', icon: 'fa-python' },
        { id: 'java_basic', name: 'Java Guru', icon: 'fa-java' },
    ];
    
    achievementsGrid.innerHTML = allAchievements.map(achievement => {
        const isUnlocked = state.user.achievements.includes(achievement.id);
        return `
            <div class="achievement ${isUnlocked ? 'unlocked' : ''}">
                <i class="fab ${achievement.icon} fas ${achievement.icon}"></i>
                <p>${achievement.name}</p>
            </div>
        `;
    }).join('');
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadUserData();
    showScreen('language-selection');
});

// Cat AI Chat Functions
let catChatOpen = false;

function toggleCatChat() {
    const catChat = document.getElementById('cat-chat');
    catChatOpen = !catChatOpen;
    catChat.classList.toggle('active', catChatOpen);
    
    if (catChatOpen) {
        document.getElementById('cat-input').focus();
    }
}

function handleCatChatKeypress(event) {
    if (event.key === 'Enter') {
        sendCatMessage();
    }
}

function sendCatMessage() {
    const input = document.getElementById('cat-input');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    addChatMessage(message, 'user');
    input.value = '';
    
    // Generate AI response
    setTimeout(() => {
        const response = generateCatResponse(message);
        addChatMessage(response, 'ai');
    }, 500 + Math.random() * 500);
}

function addChatMessage(message, sender) {
    const messagesContainer = document.getElementById('cat-chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `cat-message ${sender}`;
    messageDiv.innerHTML = `
        <div class="message-content">
            <p>${message}</p>
        </div>
    `;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateCatResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    
    // Encouraging responses based on question type
    const encouragingPrefixes = [
        "Great question! 😺 ",
        "Ooh, I love that question! 🐱 ",
        "You're so curious, that's awesome! 😸 ",
        "Fantastic thinking! 🎉 ",
        "That's a wonderful question! ✨ ",
        "You're doing great asking that! 💪 ",
        "Super smart question! 🌟 ",
        "I'm so happy you asked that! 😻 "
    ];
    
    const prefix = encouragingPrefixes[Math.floor(Math.random() * encouragingPrefixes.length)];
    
    // Topic-based responses
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
        return "Meow! 😺 Hello there, my wonderful friend! I'm so excited to help you learn coding! What would you like to explore today? 🎉";
    }
    
    if (lowerMessage.includes('variable') || lowerMessage.includes('var')) {
        return prefix + "Variables are like labeled boxes where we store information! 📦 Just like you might put your toys in different boxes, in coding we put data in variables. For example, `age = 25` stores the number 25 in a box labeled 'age'. Pretty neat, right? 😸";
    }
    
    if (lowerMessage.includes('loop') || lowerMessage.includes('for') || lowerMessage.includes('while')) {
        return prefix + "Loops are like doing something over and over again! 🔄 Think of it like eating cereal - you take a spoonful, eat it, and repeat until the bowl is empty! In coding, loops let us repeat code without writing it multiple times. You're getting the hang of this! 🌟";
    }
    
    if (lowerMessage.includes('function') || lowerMessage.includes('def')) {
        return prefix + "Functions are like recipes! 📝 You write the instructions once, and you can use them anytime! Just like how you can make the same sandwich multiple times using the same recipe. Functions make code reusable and organized. You're understanding this so well! 😺";
    }
    
    if (lowerMessage.includes('array') || lowerMessage.includes('list')) {
        return prefix + "Arrays (or lists) are like shopping lists! 🛒 They hold multiple items in order. You can have a list of your favorite foods, and each item has its own position. Arrays help us organize related data together. Great question! 🎉";
    }
    
    if (lowerMessage.includes('if') || lowerMessage.includes('condition') || lowerMessage.includes('else')) {
        return prefix + "Conditionals are like making decisions! 🤔 'If it's raining, take an umbrella. Else, wear sunglasses.' In coding, we use if/else to make our programs smart and responsive. You're thinking like a programmer already! 😸";
    }
    
    if (lowerMessage.includes('class') || lowerMessage.includes('object')) {
        return prefix + "Classes are like blueprints! 🏗️ Just like a blueprint for a house tells you how to build it, a class tells the computer how to create objects. Objects are the actual houses built from the blueprint. You're asking advanced questions - impressive! 🌟";
    }
    
    if (lowerMessage.includes('string') || lowerMessage.includes('text')) {
        return prefix + "Strings are just text! 📝 Anything in quotes is a string - like 'Hello World!' or 'I love coding!'. Computers treat text differently from numbers, so we use strings to work with words and sentences. You're doing fantastic! 😺";
    }
    
    if (lowerMessage.includes('number') || lowerMessage.includes('integer') || lowerMessage.includes('int')) {
        return prefix + "Numbers in coding are just like the numbers you use in math! 🔢 We can add, subtract, multiply, and divide them. Some languages have different types for whole numbers (integers) and decimal numbers (floats). You've got this! 💪";
    }
    
    if (lowerMessage.includes('python')) {
        return prefix + "Python is such a friendly language! 🐍 It's designed to be easy to read and write, almost like English! It's perfect for beginners. Many people love Python because it's versatile - you can build websites, analyze data, create AI, and so much more! Great choice! 🎉";
    }
    
    if (lowerMessage.includes('javascript') || lowerMessage.includes('js')) {
        return prefix + "JavaScript is the language of the web! 🌐 It makes websites interactive and fun. When you click a button and something happens, that's usually JavaScript! It's everywhere on the internet. You're learning a super valuable skill! 😸";
    }
    
    if (lowerMessage.includes('java')) {
        return prefix + "Java is a powerful and popular language! ☕ It's used for big applications, Android apps, and enterprise systems. Java is known for being reliable and secure. It might seem a bit more formal than Python, but it's incredibly useful! You're exploring great options! 🌟";
    }
    
    if (lowerMessage.includes('c++') || lowerMessage.includes('cpp')) {
        return prefix + "C++ is like a sports car - fast and powerful! 🏎️ It's used for games, systems programming, and performance-critical applications. It gives you lots of control but requires careful handling. You're brave for tackling C++! 😺";
    }
    
    if (lowerMessage.includes('c#') || lowerMessage.includes('csharp')) {
        return prefix + "C# (pronounced C-sharp) is Microsoft's baby! 💻 It's great for Windows apps, games with Unity, and enterprise software. It's similar to Java but with some cool features. You're building a solid foundation! 🎉";
    }
    
    if (lowerMessage.includes('ruby')) {
        return prefix + "Ruby is designed to make programmers happy! 💎 It's elegant and expressive, almost like writing poetry. Ruby on Rails is famous for building web applications quickly. You have great taste in languages! 😸";
    }
    
    if (lowerMessage.includes('go') || lowerMessage.includes('golang')) {
        return prefix + "Go is Google's creation! ⚡ It's simple, fast, and great for building scalable applications. Go is perfect for cloud services and microservices. You're keeping up with modern tech - impressive! 🌟";
    }
    
    if (lowerMessage.includes('help') || lowerMessage.includes('stuck') || lowerMessage.includes('confused')) {
        return "Don't worry, my friend! 😺 Getting stuck is part of learning - even expert programmers get stuck! Try breaking the problem into smaller pieces, or ask me about a specific concept. You're doing amazing by asking for help! That takes courage! 💪 What specific part is confusing you?";
    }
    
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
        return "Aww, you're so welcome! 😻 It makes me so happy to help you! Keep asking questions and keep learning - you're doing wonderfully! Never hesitate to reach out. I believe in you! 🌟";
    }
    
    if (lowerMessage.includes('hard') || lowerMessage.includes('difficult')) {
        return "I know coding can feel hard sometimes, but you're doing great! 😺 Every programmer started exactly where you are now. The key is to keep practicing and not give up. You're building skills that will last a lifetime. I'm so proud of your persistence! 💪";
    }
    
    if (lowerMessage.includes('boring') || lowerMessage.includes('tired')) {
        return "Feeling tired is totally normal! 😴 Take a break, grab a snack, or come back later. Coding should be fun! When you're ready, I'll be here cheering you on. You've already accomplished so much! 🎉";
    }
    
    if (lowerMessage.includes('good') || lowerMessage.includes('great') || lowerMessage.includes('awesome')) {
        return "Thank you so much, my wonderful friend! 😻 You just made my day! Your positivity is amazing, and I know you're going to be an incredible programmer. Keep that awesome attitude! 🌟";
    }
    
    // Default encouraging response
    const defaultResponses = [
        prefix + "That's an interesting topic! While I'm still learning, I'd say the best way to understand it is by practicing. Try writing some code and experimenting - that's how real learning happens! You're doing great by being curious! 😺",
        prefix + "I love your enthusiasm! 🎉 The best way to learn is by doing. Try the lessons, experiment with code, and don't be afraid to make mistakes - that's how we all learn! You're on the right track! 💪",
        prefix + "What a thoughtful question! 😸 Keep exploring and practicing. Every great programmer started with questions just like yours. You're building a strong foundation, and I'm so excited to see what you'll create! 🌟",
        prefix + "You're asking all the right questions! 🐱 Keep that curiosity alive. The journey of learning to code is amazing, and you're doing wonderfully. Remember, every expert was once a beginner. You've got this! 😺"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Shop Functions
function renderShop() {
    const shopGrid = document.getElementById('shop-grid');
    document.getElementById('shop-xp').textContent = `${state.user.xp} XP`;

    shopGrid.innerHTML = shopItems.map(item => {
        const isOwned = state.user.ownedFaces.includes(item.id);
        const isEquipped = state.user.currentFace === item.id;
        const canAfford = state.user.xp >= item.price;

        return `
            <div class="shop-item ${isEquipped ? 'equipped' : ''}">
                <div class="shop-item-preview" style="background: ${item.color}">
                    ${item.id.includes('robot') ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-cat"></i>'}
                </div>
                <div class="shop-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.price === 0 ? 'Free' : item.price + ' XP'}</p>
                </div>
                <button class="shop-btn" onclick="${isOwned ? (isEquipped ? '' : `equipFace('${item.id}')`) : (canAfford ? `buyFace('${item.id}')` : '')}" 
                        ${!isOwned && !canAfford ? 'disabled' : ''} 
                        ${isEquipped ? 'disabled' : ''}>
                    ${isEquipped ? 'Equipped' : (isOwned ? 'Equip' : (canAfford ? 'Buy' : 'Not enough XP'))}
                </button>
            </div>
        `;
    }).join('');
}

function buyFace(faceId) {
    const item = shopItems.find(i => i.id === faceId);
    if (!item || state.user.xp < item.price) return;

    state.user.xp -= item.price;
    state.user.ownedFaces.push(faceId);
    saveUserData();
    renderShop();
    alert(`🎉 You bought ${item.name}!`);
}

function equipFace(faceId) {
    state.user.currentFace = faceId;
    saveUserData();
    renderShop();
    updateCatFace();
    alert('✨ Face equipped!');
}

function updateCatFace() {
    const item = shopItems.find(i => i.id === state.user.currentFace);
    if (item) {
        document.querySelectorAll('.cat-body, .cat-face-small').forEach(el => {
            el.style.background = `linear-gradient(135deg, ${item.color} 0%, ${adjustColor(item.color, -20)} 100%)`;
            el.style.borderColor = adjustColor(item.color, -30);
        });
    }
}

function adjustColor(color, amount) {
    const hex = color.replace('#', '');
    const num = parseInt(hex, 16);
    const r = Math.min(255, Math.max(0, (num >> 16) + amount));
    const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amount));
    const b = Math.min(255, Math.max(0, (num & 0x0000FF) + amount));
    return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)}`;
}

// Profile Picture Upload
function handleProfileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        state.user.profilePicture = e.target.result;
        saveUserData();
        updateProfilePicture();
    };
    reader.readAsDataURL(file);
}

function updateProfilePicture() {
    const profileImage = document.getElementById('profile-image');
    const profileIcon = document.getElementById('profile-icon');

    if (state.user.profilePicture) {
        profileImage.src = state.user.profilePicture;
        profileImage.style.display = 'block';
        profileIcon.style.display = 'none';
    } else {
        profileImage.style.display = 'none';
        profileIcon.style.display = 'block';
    }
}

// Username Edit
function editUsername() {
    const newName = prompt('Enter your new username:', state.user.name);
    if (newName && newName.trim() !== '') {
        state.user.name = newName.trim();
        saveUserData();
        document.getElementById('profile-name').textContent = state.user.name;
    }
}
