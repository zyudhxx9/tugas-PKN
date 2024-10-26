const questions = [
    {
    question: "Apa pengertian Sistem Pemerintahan menurut Hukumm Tata Negara dalam arti sempit?",
        answers: [
            { text: "Sebuah kajian yang melihat hubungan antara legislatif dan eksekutif dalam sebuah negara", correct: true},
            { text: "Suatu kajian pemerintahan negara yang bertolak dari hubungan antara semua organ negara", correct: false},
            { text: "kajian yang menitik beratkan pada hubungan antar negara dengan rakyatnya", correct: false},
            { text: "pemerintahan yang memiliki sifat eksekutif dan legislatif yang saling memberi timbal balik", correct: false},
        ]
    },
    { 
        question: "Apa perbedaan Parlementer dengan Presidensial?",
        answers: [
            { text: "Parlementer miliki sistem republik. Sedangkan presidensial, memiliki sistem monarki", correct: false},
            { text: "Parlementer memiliki eksekutif dan legislatif yang bersifat timbal balik dan mempengaruhi. Sedangkan presidensial, eksekutif dan legislatif tidak memiliki ubungan timbal balik", correct: true},
            { text: "parlementer memiliki kekuasaan terpusat pada satu orang. Sedangkan presidensial, presiden dan menteri tidak bertanggungjawab kepada parlemen", correct: false},
            { text: "Parlementer kedudukan keala negara tidak dapat diganggu gugat. Sedangkan presidensial, Masa jabatan presiden ditetapkan dalam jangka waktu tertent.u", correct: false},
        ] 
    },
    {
        question: "Berikut ini yang BUKAN ciri dari sistem presidensial adalah....",
        answers: [
            { text: "Massa jabatan presiden ditetapkan dalam jangk waktu tertentu", correct: false},
            { text: "Presiden tidak bertaanggungjawab terhadap parlemen atau DPR", correct: false},
            { text: "Kabinet yang dipimpin oleh perdana menteri bertanggung jawab kepada parlemene", correct: true},
            { text: "presiden dibantu oleh menteri yang diangkat dan bertanggungjawab kepadanya", correct: false},
        ]
    },
    {
        question: "Fungsi pesiden menurut UUD 1945 meliput, kecuali?",
        answers: [
            { text: "Sebagai kepala negara", correct: false},
            { text: "Sebagai kepala eksekutif", correct: false},
            { text: "Sebagai panglima tertinggi", correct: false},
            { text: "Sebagai raja yang menjabat seummur hidup", correct: true},
        ]
    },
    {
        question: "Apa ciri dari sistem pemerintahan menurut S.L. Witman?",
        answers: [
            { text: "Didasarkan pada Prinsip kekuasaan (diffusion of power)", correct: false},
            { text: "Kabinet secara keseluruhan bertanggungjawab kepada presiden (chief of executive)", correct: true},
            { text: "Saling bertanggungjawab secara terpisah", correct: false},
            { text: "Kabinet dapat dijatuhkan dan dibubarkan setiap waktu oleh parlemen", correct: false},
        ]
    },
    {
        question: "Sistem pemerintahan yang dianut Konstitusi RIS Sistem Kabinet Perlementer Semu (Quasi Parlementer) adalah......",
        answers: [
            { text: "Perdana menteri tidak diangkat oleh presiden", correct: false},
            { text: "Parlemen dapat menggunaakan mosi tidak percaya kepada kabnet", correct: false},
            { text: "Pertanggungjawaban kabinet padda parlemen", correct: true},
            { text: "Kabinet dibentuk oleh parlemen bukan oleh presiden", correct: false},
        ]
    },
    {
        question: "Berikut yang merupakan empat model transisi atau perubahan politik yang diajukan oleh Samuel Huntington adalah?",
        answers: [
            { text: "Model investasi", correct: false},
            { text: "Model camputan antara pergantian dan transplasi", correct: true},
            { text: "Model pemindahan", correct: false},
            { text: "Model jual-beli", correct: false},
        ]
    },
    {
        question: "apa yang terjadi pada tanggal 21 Mei 1998?",
        answers: [
            { text: "Turunnya presiden Soeharto dan digantikan oleh BJ. Habiebie", correct: true},
            { text: "Soeharto digantikan oleh KH. Abdurrahman Wahid", correct: false},
            { text: "Abdurrahman wahid digantikan oleh Megawati", correct: false},
            { text: "BJ. Habiebie digantikan oleh Megawati", correct: false},
        ]
    },
    {
        question: "Apa perkembangan sistem pemerintahan Indonesia pada masa ke 3?",
        answers: [
            { text: "Demokrasi terpimpin", correct: false},
            { text: "Demokrasi Pancasila setelah reformasi", correct: false},
            { text: "Demokrasi Pancasila", correct: true},
            { text: "Demokrasi konsitusional", correct: false},
        ]
    },
    {
        question: "Sistem Kenegaraan Indonesia adalah negara kesatuan yang menganut demokrasi, kedaulatan berada di tangan rakyat, berdasar UUD 1945 sebelum dilakukan amandemen, kekuasaan negara dijalankan oleh lembaga sebagai berikut: kecuali",
        answers: [
            { text: "MPR tidak lagi sebagai lembaga tertinggi pemegang kedaulatan rakyat", correct: false},
            { text: "Presiden tidak dapat membekukan dan atau membubarkan DPR", correct: false},
            { text: "Kekuasaan legislatif semakin dominan", correct: false},
            { text: "Presiden sebagai penyelenggara pemerintahan disebut lembaga eksekutif", correct: true},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
};

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();