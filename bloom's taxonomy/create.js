document.getElementById('questionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const question = document.getElementById('question').value;
    const taxonomy = document.getElementById('taxonomy').value;
    const topic = document.getElementById('topic').value;

    if (question && taxonomy && topic) {
        alert('Question added successfully!');
        // Reset form after submission
        document.getElementById('questionForm').reset();
    } else {
        alert('Please fill all the fields!');
    }
});

function viewAllQuestions() {
    // Implement functionality to view all questions
    alert('Navigating to All Questions page');
}

function logOut() {
    // Implement functionality to log out
    alert('Logging out...');
}
