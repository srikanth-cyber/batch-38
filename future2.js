const state = {

    profile: {

        name: "",
        ageGroup: "",
        occupation: "",
        income: "",
        maritalStatus: "",
        dependents: "",
        concern: "",
        existingInsurance: "",
        financialGoal: "",
        emergencyPreparedness: "",
        savingsDuration: "",
        priority: ""
    },

    currentQuestionIndex: 0
};

const questions = [

    {
        key: "name",
        text: "Hello. I am HDFC Future AI. What is your name?",
        type: "text"
    },

    {
        key: "ageGroup",
        text: "What is your age group?",
        type: "options",

        options: [
            "Below 25",
            "25–35",
            "36–50",
            "Above 50"
        ]
    },

    {
        key: "occupation",
        text: "What is your occupation?",
        type: "options",

        options: [
            "Salaried Employee",
            "Business Owner / Self-Employed",
            "Student",
            "Retired"
        ]
    },

    {
        key: "income",
        text: "What is your monthly income range?",
        type: "options",

        options: [
            "Below ₹25,000",
            "₹25,000 – ₹50,000",
            "₹50,000 – ₹1,00,000",
            "Above ₹1,00,000"
        ]
    },

    {
        key: "maritalStatus",
        text: "What is your marital status?",
        type: "options",

        options: [
            "Single",
            "Married",
            "Married with Children"
        ]
    },

    {
        key: "dependents",
        text: "Do you have family members dependent on your income?",
        type: "options",

        options: [
            "Yes",
            "No"
        ]
    },

    {
        key: "concern",
        text: "what is the purpose of insurance?",
        type: "options",

        options: [
            "Family financial insecurity",
            "Lack of future savings",
            "investment via Insurance",
            "Medical emergencies",
            "Vehicle repair expenses"
        ]
    },

    {
        key: "existingInsurance",
        text: "Do you currently have any insurance coverage?",
        type: "options",

        options: [
            "Yes, multiple policies",
            "Yes, one policy",
            "No insurance yet"
        ]
    },

   /* {
        key: "financialGoal",
        text: "What is your biggest financial goal?",
        type: "options",

        options: [
            "Buying a House",
            "Children's Education",
            "Retirement Planning",
            "Building Wealth",
            "Protecting Family"
        ]
    },

    {
        key: "emergencyPreparedness",
        text: "How prepared are you for emergencies?",
        type: "options",

        options: [
            "Fully Prepared",
            "Somewhat Prepared",
            "Not Prepared"
        ]
    },

    {
        key: "savingsDuration",
        text: "If your income stopped tomorrow, how long could your savings support your family?",
        type: "options",

        options: [
            "Less than 1 month",
            "1–6 months",
            "More than 6 months"
        ]
    },*/

    {
        key: "priority",
        text: "What matters most to you?",
        type: "options",

        options: [
            "Family Security",
            "Health Protection",
            "Saving Taxes",
            "Wealth Creation",
            "Peace of Mind"
        ]
    }
];

const screens = {

    welcome: document.getElementById("welcome-screen"),
    chat: document.getElementById("chat-screen"),
    scan: document.getElementById("scan-screen"),
    video: document.getElementById("video-screen"),
    recommendation: document.getElementById("recommendation-screen")
};
// ==============================
// AI VOICE WELCOME SYSTEM
// ==============================

function speakWelcomeMessage() {

    // Fix for browser voice loading
    speechSynthesis.cancel();

    const message = new SpeechSynthesisUtterance(
        "Welcome to HDFC Future AI I am happy to see you here, as you decided to protect yourself from financial crises."
    );

    message.rate = 0.92;
    message.pitch = 1;
    message.volume = 1;

    // Load available voices
    let voices = speechSynthesis.getVoices();

    const preferredVoice =
        voices.find(v => v.name.includes('Google UK English Female')) ||
        voices.find(v => v.name.includes('Samantha')) ||
        voices.find(v => v.name.includes('Female')) ||
        voices[0];

    if (preferredVoice) {
        message.voice = preferredVoice;
    }

    // Start animation
    activateAISpeakingEffect();

    // Speak
    speechSynthesis.speak(message);

    // Stop animation when speaking ends
    message.onend = () => {

        const logo =
            document.querySelector('.logo-container');

        if (logo) {
            logo.classList.remove('speaking');
        }
    };
}

function activateAISpeakingEffect() {

    const logo =
        document.querySelector('.logo-container');

    if (logo) {
        logo.classList.add('speaking');
    }
}

// Load voices properly in Chrome
speechSynthesis.onvoiceschanged = () => {
    speechSynthesis.getVoices();
};

// ==============================
// AI VOICE WELCOME SYSTEM
// ==============================
function speakWelcomeMessage1() {

    // Fix for browser voice loading
    speechSynthesis.cancel();

    const message = new SpeechSynthesisUtterance(
        "Based on the profile you need Hdfc Life Click TWO Protect Insurance Policy Go to counter number one our PB Sathiswaran Will Assist YOu better "
    );

    message.rate = 0.92;
    message.pitch = 1;
    message.volume = 1;

    // Load available voices
    let voices = speechSynthesis.getVoices();

    const preferredVoice =
        voices.find(v => v.name.includes('Google UK English Female')) ||
        voices.find(v => v.name.includes('Samantha')) ||
        voices.find(v => v.name.includes('Female')) ||
        voices[0];

    if (preferredVoice) {
        message.voice = preferredVoice;
    }

    // Start animation
    activateAISpeakingEffect();

    // Speak
    speechSynthesis.speak(message);

    // Stop animation when speaking ends
    message.onend = () => {

        const logo =
            document.querySelector('.logo-container');

        if (logo) {
            logo.classList.remove('speaking');
        }
    };
}

function activateAISpeakingEffect() {

    const logo =
        document.querySelector('.logo-container');

    if (logo) {
        logo.classList.add('speaking');
    }
}

// Load voices properly in Chrome
speechSynthesis.onvoiceschanged = () => {
    speechSynthesis.getVoices();
};
// ==============================
// AI VOICE WELCOME SYSTEM
// ==============================
function speakWelcomeMessage2() {

    // Fix for browser voice loading
    speechSynthesis.cancel();

    const message = new SpeechSynthesisUtterance(
        "Based on the profile you need Hdfc Life Click Sanchay PAR Insurance Policy Go to counter number TWO our PB Mounika Will Assist You better "
    );

    message.rate = 0.92;
    message.pitch = 1;
    message.volume = 1;

    // Load available voices
    let voices = speechSynthesis.getVoices();

    const preferredVoice =
        voices.find(v => v.name.includes('Google UK English Female')) ||
        voices.find(v => v.name.includes('Samantha')) ||
        voices.find(v => v.name.includes('Female')) ||
        voices[0];

    if (preferredVoice) {
        message.voice = preferredVoice;
    }

    // Start animation
    activateAISpeakingEffect();

    // Speak
    speechSynthesis.speak(message);

    // Stop animation when speaking ends
    message.onend = () => {

        const logo =
            document.querySelector('.logo-container');

        if (logo) {
            logo.classList.remove('speaking');
        }
    };
}

function activateAISpeakingEffect() {

    const logo =
        document.querySelector('.logo-container');

    if (logo) {
        logo.classList.add('speaking');
    }
}

// Load voices properly in Chrome
speechSynthesis.onvoiceschanged = () => {
    speechSynthesis.getVoices();
};
// ==============================
// AI VOICE WELCOME SYSTEM
// ==============================
function speakWelcomeMessage3() {

    // Fix for browser voice loading
    speechSynthesis.cancel();

    const message = new SpeechSynthesisUtterance(
        "Based on the profile you need Hdfc Life Sampoorna Nivesh Insurance Policy Go to counter number Three our PB Shivanshu Will Assist YOu better "
    );

    message.rate = 0.92;
    message.pitch = 1;
    message.volume = 1;

    // Load available voices
    let voices = speechSynthesis.getVoices();

    const preferredVoice =
        voices.find(v => v.name.includes('Google UK English Female')) ||
        voices.find(v => v.name.includes('Samantha')) ||
        voices.find(v => v.name.includes('Female')) ||
        voices[0];

    if (preferredVoice) {
        message.voice = preferredVoice;
    }

    // Start animation
    activateAISpeakingEffect();

    // Speak
    speechSynthesis.speak(message);

    // Stop animation when speaking ends
    message.onend = () => {

        const logo =
            document.querySelector('.logo-container');

        if (logo) {
            logo.classList.remove('speaking');
        }
    };
}

function activateAISpeakingEffect() {

    const logo =
        document.querySelector('.logo-container');

    if (logo) {
        logo.classList.add('speaking');
    }
}

// Load voices properly in Chrome
speechSynthesis.onvoiceschanged = () => {
    speechSynthesis.getVoices();
};
// ==============================
// AI VOICE WELCOME SYSTEM
// ==============================
function speakWelcomeMessage4() {

    // Fix for browser voice loading
    speechSynthesis.cancel();

    const message = new SpeechSynthesisUtterance(
        "Based on the profile you need Hdfc ERGO Health Insurance Policy Go to counter number Four our PB Mogilan Will Assist YOu better "
    );

    message.rate = 0.92;
    message.pitch = 1;
    message.volume = 1;

    // Load available voices
    let voices = speechSynthesis.getVoices();

    const preferredVoice =
        voices.find(v => v.name.includes('Google UK English Female')) ||
        voices.find(v => v.name.includes('Samantha')) ||
        voices.find(v => v.name.includes('Female')) ||
        voices[0];

    if (preferredVoice) {
        message.voice = preferredVoice;
    }

    // Start animation
    activateAISpeakingEffect();

    // Speak
    speechSynthesis.speak(message);

    // Stop animation when speaking ends
    message.onend = () => {

        const logo =
            document.querySelector('.logo-container');

        if (logo) {
            logo.classList.remove('speaking');
        }
    };
}

function activateAISpeakingEffect() {

    const logo =
        document.querySelector('.logo-container');

    if (logo) {
        logo.classList.add('speaking');
    }
}

// Load voices properly in Chrome
speechSynthesis.onvoiceschanged = () => {
    speechSynthesis.getVoices();
};
// ==============================
// AI VOICE WELCOME SYSTEM
// ==============================
function speakWelcomeMessage5() {

    // Fix for browser voice loading
    speechSynthesis.cancel();

    const message = new SpeechSynthesisUtterance(
        "based on your profile you need Hdfc Ergo Motor Insurance Policy Go to counter number Five our PB Prasey Will Assist YOu better "
    );

    message.rate = 0.92;
    message.pitch = 1;
    message.volume = 1;

    // Load available voices
    let voices = speechSynthesis.getVoices();

    const preferredVoice =
        voices.find(v => v.name.includes('Google UK English Female')) ||
        voices.find(v => v.name.includes('Samantha')) ||
        voices.find(v => v.name.includes('Female')) ||
        voices[0];

    if (preferredVoice) {
        message.voice = preferredVoice;
    }

    // Start animation
    activateAISpeakingEffect();

    // Speak
    speechSynthesis.speak(message);

    // Stop animation when speaking ends
    message.onend = () => {

        const logo =
            document.querySelector('.logo-container');

        if (logo) {
            logo.classList.remove('speaking');
        }
    };
}

function activateAISpeakingEffect() {

    const logo =
        document.querySelector('.logo-container');

    if (logo) {
        logo.classList.add('speaking');
    }
}

// Load voices properly in Chrome
speechSynthesis.onvoiceschanged = () => {
    speechSynthesis.getVoices();
};
function speakWelcomeMessage6() {

    // Fix for browser voice loading
    speechSynthesis.cancel();

    const message = new SpeechSynthesisUtterance(
        "Keep Your Face in Circle TO predict future "
    );

    message.rate = 0.92;
    message.pitch = 1;
    message.volume = 1;

    // Load available voices
    let voices = speechSynthesis.getVoices();

    const preferredVoice =
        voices.find(v => v.name.includes('Google UK English Female')) ||
        voices.find(v => v.name.includes('Samantha')) ||
        voices.find(v => v.name.includes('Female')) ||
        voices[0];

    if (preferredVoice) {
        message.voice = preferredVoice;
    }

    // Start animation
    activateAISpeakingEffect();

    // Speak
    speechSynthesis.speak(message);

    // Stop animation when speaking ends
    message.onend = () => {

        const logo =
            document.querySelector('.logo-container');

        if (logo) {
            logo.classList.remove('speaking');
        }
    };
}

function activateAISpeakingEffect() {

    const logo =
        document.querySelector('.logo-container');

    if (logo) {
        logo.classList.add('speaking');
    }
}

// Load voices properly in Chrome
speechSynthesis.onvoiceschanged = () => {
    speechSynthesis.getVoices();
};
const startBtn = document.getElementById("start-btn");

const chatBox = document.getElementById("chat-box");

const chatInput = document.getElementById("chat-input");

const sendBtn = document.getElementById("send-btn");

const optionsContainer =
    document.getElementById("options-container");

function showScreen(screenName) {

    Object.values(screens).forEach(screen => {

        screen.classList.add("hidden");
    });

    screens[screenName].classList.remove("hidden");
}

startBtn.addEventListener("click", () => {
     speakWelcomeMessage();
    showScreen("chat");

    setTimeout(() => {

        askNextQuestion();

    }, 1000);
});

sendBtn.addEventListener("click", handleTextInput);

chatInput.addEventListener("keypress", e => {

    if (e.key === "Enter") {

        handleTextInput();
    }
});

function askNextQuestion() {

    if (
        state.currentQuestionIndex >= questions.length
    ) {

        startFaceScan();

        return;
    }

    const q = questions[state.currentQuestionIndex];

    appendMessage(q.text, "ai-msg");

    optionsContainer.innerHTML = "";

    if (q.type === "text") {

        chatInput.style.display = "block";

        sendBtn.style.display = "block";

    }

    else {

        chatInput.style.display = "none";

        sendBtn.style.display = "none";

        q.options.forEach(option => {

            const btn =
                document.createElement("button");

            btn.className = "option-btn";

            btn.innerText = option;

            btn.onclick = () => {

                handleOptionSelect(option);
            };

            optionsContainer.appendChild(btn);
        });
    }
}

function handleTextInput() {

    const text = chatInput.value.trim();

    if (!text) return;

    appendMessage(text, "user-msg");

    const currentQ =
        questions[state.currentQuestionIndex];

    state.profile[currentQ.key] = text;

    chatInput.value = "";

    state.currentQuestionIndex++;

    setTimeout(() => {

        askNextQuestion();

    }, 500);
}

function handleOptionSelect(option) {

    appendMessage(option, "user-msg");

    const currentQ =
        questions[state.currentQuestionIndex];

    state.profile[currentQ.key] = option;

    state.currentQuestionIndex++;

    setTimeout(() => {

        askNextQuestion();

    }, 500);
}

function appendMessage(text, className) {

    const div = document.createElement("div");

    div.className = `message ${className}`;

    div.innerText = text;

    chatBox.appendChild(div);

    chatBox.scrollTop = chatBox.scrollHeight;
}

async function startFaceScan() {

    showScreen("scan");

    const video =
        document.getElementById("camera-feed");
        speakWelcomeMessage6();
    try {

        const stream =
            await navigator.mediaDevices
            .getUserMedia({

                video: true
            });

        video.srcObject = stream;

    }

    catch (err) {

        console.log(err);
    }

    const phrases = [

        "Analyzing financial risks...",

        "Evaluating family dependency...",

        "Predicting future uncertainty...",

        "Generating AI protection matrix...",

        "Scanning financial vulnerability..."
    ];

    let percent = 0;

    const progress =
        document.getElementById("scan-progress");

    const percentage =
        document.getElementById("scan-percentage");

    const scanText =
        document.getElementById("scan-text");

    let phraseIndex = 0;

    const phraseInterval = setInterval(() => {

        scanText.innerText =
            phrases[phraseIndex];

        phraseIndex++;

        if (phraseIndex >= phrases.length) {

            phraseIndex = 0;
        }

    }, 2000);

    const timer = setInterval(() => {

        percent++;

        progress.style.width = percent + "%";

        percentage.innerText = percent + "%";

        if (percent >= 100) {

            clearInterval(timer);

            clearInterval(phraseInterval);

            playStoryVideos();
        }

    }, 70);
}

function playStoryVideos() {

    showScreen("video");

    const video =
        document.getElementById("story-video");

    const videos = [

        "lifewithoutinsurance.mp4",

        "lifewithinsurance.mp4"
    ];

    let currentVideo = 0;

    function playNextVideo() {

        if (currentVideo >= videos.length) {

            showRecommendations();

            return;
        }

        video.src = videos[currentVideo];

        video.play();

        video.onended = () => {

            currentVideo++;

            playNextVideo();
        };
    }

    playNextVideo();
}

function getInsuranceRecommendations(profile) {

    const recommendations = [];

    // TERM INSURANCE

    if (

        (
            profile.maritalStatus === "Married" ||

            profile.maritalStatus ===
            "Married with Children" || profile.maritalStatus ==="Single"
        )

        &&(

        profile.existingInsurance === "No insurance yet" && (profile.concern === "Family financial insecurity" || profile.financialGoal ==="Protecting Family")
        )
    ) {

        recommendations.push({

            counter: "Counter No. 1",

            title: "🛡️ Term Insurance",

            risk: "Critical",

            message:
                "Your family depends on your income. " +
                "Term Insurance protects them financially."
        });
    }

    // ENDOWMENT POLICY

    if (

        profile.concern ===
        "Lack of future savings"

        &&

        (
            profile.existingInsurance ==="No insurance yet"
        )

       
    ) {

        recommendations.push({

            counter: "Counter No. 2",

            title:
                "💰 Endowment Insurance Policy",

            risk: "High Risk",

            message:
                "Endowment plans help you build future savings securely."
        });
    }

    // ULIP

    if (   
        (profile.concern ===
        "investment via Insurance") && ( profile.existingInsurance ==="No insurance yet") 


        /*(
            profile.ageGroup === "Below 25"

            ||

            profile.ageGroup === "25–35"
            ||
            profile.ageGroup === "36–50"
            
        )

        &&

        profile.income ===
        "Above ₹1,00,000"

        &&

        profile.financialGoal ===
        "Building Wealth"*/
    ) {

        recommendations.push({

            counter: "Counter No. 3",

            title:
                "📈 ULIP Insurance Policy",

            risk: "High",

            message:
                "ULIP combines investment growth with insurance protection."
        });
    }

    // HEALTH INSURANCE

    if (

        profile.concern ===
        "Medical emergencies"

        &&

        (
            profile.ageGroup === "36–50"

            ||

            profile.ageGroup === "25–35"
             
             ||

            profile.ageGroup === "Above 50"
            ||
            profile.ageGroup ==="Below 25"
        )

        &&
        (

        profile.maritalStatus ===
        "Married with Children"
        ||
        profile.maritalStatus ===
        "Married"
        ||
        profile.maritalStatus ==="Single"
        )
    ) {

        recommendations.push({

            counter: "Counter No. 4",

            title: "🏥 Health Insurance",

            risk: "Critical",

            message:
                "Health Insurance protects against hospitalization expenses."
        });
    }

    // MOTOR INSURANCE

    if (

        profile.concern ===
        "Vehicle repair expenses"

        &&

        (
            profile.occupation ===
            "Business Owner / Self-Employed"

            ||

            profile.occupation ===
            "Salaried Employee"
        )
    ) {

        recommendations.push({

            counter: "Counter No. 5",

            title: "🚗 Motor Insurance",

            risk: "Important",

            message:
                "Motor Insurance protects against vehicle repair costs."
        });
    }

    return recommendations;
}

function showRecommendations() {

    showScreen("recommendation");

    const summary =
        document.getElementById("dynamic-summary");

    const p = state.profile;

    let riskMessage = "";

    if (

        p.existingInsurance ===
        "No insurance yet"

        ||

        p.emergencyPreparedness ===
        "Not Prepared"
    ) {

        riskMessage =
            "⚠️ Your financial protection level is HIGH RISK.";
    }

    else if (

        p.emergencyPreparedness ===
        "Somewhat Prepared"
    ) {

        riskMessage =
            "🛡️ Your financial protection level is MODERATE.";
    }

    else {

        riskMessage =
            "✅ Your financial protection level is STRONG.";
    }

    const recommendations =
        getInsuranceRecommendations(p);

    let html = `

        <div class="glass-card">

            <h1>
                AI Protection Report
            </h1>

            <h2>
                ${p.name}
            </h2>

            <p>
                ${riskMessage}
            </p>

        </div>
    `;

    if (recommendations.length === 0) {

        html += `

            <div class="glass-card">

                <h2>
                    No Critical Insurance Gap Found
                </h2>

                <p>
                    Your profile appears financially stable.
                    You can still strengthen protection
                    using investment and savings plans.
                </p>

            </div>
        `;
    }

    recommendations.forEach((item, index) => {

        let priority = "";

        if (index === 0) {

            priority = "⭐ PRIMARY RECOMMENDATION";
        }

        else if (index === 1) {

            priority = "🟡 SECONDARY RECOMMENDATION";
        }

        else {

            priority = "🔹 ADDITIONAL PROTECTION";
        }

        let pbName = "";
        let ip = "";
        // PB NAMES

        if (item.counter === "Counter No. 1") {
              speakWelcomeMessage1();
            pbName =
                "PB Name:Sathishwaran";
            ip = "insurance Policy:HDFC CLICK 2 Protect";
        }

        else if (item.counter === "Counter No. 2") {
            speakWelcomeMessage2();
            pbName =
                "PB Name: Mounika";
                ip = "HDFC Sanchay Par";
        }

        else if (item.counter === "Counter No. 3") {
            speakWelcomeMessage3();
            pbName =
                "PB Name: Shivanshu";
                ip="HDFC Sampoorna nivesh";
        }

        else if (item.counter === "Counter No. 4") {
                speakWelcomeMessage4();
            pbName =
                "PB Name: Mogilan";
                ip ="Hdfc Erogo Health Insurance";

        }

        else if (item.counter === "Counter No. 5") {
            speakWelcomeMessage5();
            pbName =
                "PB Name: Prasey";
                 ip = "HDFC ERGO Motor Insurance";
        }

        html += `

            <div class="
                glass-card
                plan-card
                ${index === 0 ? "primary-card" : ""}
            ">

                <div class="priority-badge">
                    ${priority}
                </div>

                <h3>
                    ${item.counter}
                </h3>

                <h2>
                    ${item.title}
                </h2>

                <p class="pb-name">
                    ${pbName}
                </p>
                 <p class="IP">
                    ${ip}
                </p>
                <p>
                    <strong>Risk Level:</strong>
                    ${item.risk}
                </p>

                <p>
                    ${item.message}
                </p>

            </div>
        `;
    });

    summary.innerHTML = html;
}