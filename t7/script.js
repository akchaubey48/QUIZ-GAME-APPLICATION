
    const quizData = [
        {
            question: "What is Java?",
            options: ["Language", "Database", "OS", "Browser"],
            answer: 0
        },
        {
            question: "Which keyword is used for inheritance?",
            options: ["this", "super", "extends", "implements"],
            answer: 2
        },
        {
            question: "Which is not a data type?",
            options: ["int", "float", "real", "char"],
            answer: 2
        }
    ];

    let currentQ = 0;
    let score = 0;
    let selected = null;

    function loadQuestion() {
        selected = null;
        const q = quizData[currentQ];
        document.getElementById("question").innerText = q.question;

        const optionsDiv = document.getElementById("options");
        optionsDiv.innerHTML = "";

        q.options.forEach((opt, index) => {
            const btn = document.createElement("div");
            btn.classList.add("option");
            btn.innerText = opt;

            btn.onclick = () => {
                selected = index;

                // highlight selected
                document.querySelectorAll(".option").forEach(o => o.style.background="#334155");
                btn.style.background = "#22c55e";
            };

            optionsDiv.appendChild(btn);
        });
    }

    function nextQuestion() {
        if (selected === null) {
            alert("Select an option first");
            return;
        }

        if (selected === quizData[currentQ].answer) {
            score++;
        }

        currentQ++;

        if (currentQ < quizData.length) {
            loadQuestion();
        } else {
            document.querySelector(".quiz-container").innerHTML =
                `<h2>Your Score: ${score}/${quizData.length}</h2>`;
        }
    }

    loadQuestion();
