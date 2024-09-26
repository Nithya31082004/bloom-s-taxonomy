// Script for the "Generate" button action
document.getElementById('generate-btn').addEventListener('click', function() {
    const keyword = document.getElementById('keyword').value;
    const taxonomyType = document.getElementById('taxonomy-type').value;

    if (keyword && taxonomyType) {
        alert(`Generating a question for keyword "${keyword}" in the context of ${taxonomyType}.`);
    } else {
        alert('Please enter a keyword and select a question type.');
    }
});
