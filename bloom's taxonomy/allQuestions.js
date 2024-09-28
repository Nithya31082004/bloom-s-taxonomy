const questions = [
    {
        question: "What is a pointer in C?",
        type: "Analyze",
        topic: "Pointers"
    },
    {
        question: "Explain the different types of loops in C.",
        type: "Understand",
        topic: "Loops"
    },
    {
        question: "Write a program to calculate factorial of a number.",
        type: "Apply",
        topic: "Functions"
    }
];

function loadQuestions() {
    const tableBody = document.getElementById('questionTableBody');
    questions.forEach((q) => {
        const row = document.createElement('tr');
        
        const questionCell = document.createElement('td');
        questionCell.textContent = q.question;
        row.appendChild(questionCell);
        
        const typeCell = document.createElement('td');
        typeCell.textContent = q.type;
        row.appendChild(typeCell);
        
        const topicCell = document.createElement('td');
        topicCell.textContent = q.topic;
        row.appendChild(topicCell);
        
        tableBody.appendChild(row);
    });
}

window.onload = loadQuestions;
