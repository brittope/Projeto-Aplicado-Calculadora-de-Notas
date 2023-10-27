let sum = 0;

let y = 1;
function add1() {
    if (y === 1) {
        var newField = document.createElement('input');
        newField.setAttribute('type', 'number');
        newField.setAttribute('max', 10);
        newField.setAttribute('min', 0);
        newField.setAttribute('placeholder', 'Digite a nota da AP1');
        newField.setAttribute('id', 'nota1');
        newField.setAttribute('class', 'question')
        formField.appendChild(newField);
        y = y + 1;
}
}

const questionnaire = document.getElementById('questionnaire');
const questionsDiv = document.getElementById('questions');

let x = 1;

questionsDiv.addEventListener('input', (event) => {
    const input = event.target;
    if (input.classList.contains('question') || input.classList.contains('question2') || input.classList.contains('question3')) {
        const lastQuestion = document.querySelector('.question:last-of-type');
        const lastQuestion2 = document.querySelector('.question2:last-of-type');
        const lastQuestion3 = document.querySelector('.question3:last-of-type');

        if (input === lastQuestion && input.value.trim() !== '' && x === 1) {
            const newQuestion = document.createElement('input');
            newQuestion.type = 'number';
            newQuestion.setAttribute('class', 'question2');
            newQuestion.setAttribute('max', 10);
            newQuestion.setAttribute('min', 0);
            newQuestion.setAttribute('id', 'nota2');
            newQuestion.placeholder = `Digite a nota da AP2`;
            questionsDiv.appendChild(newQuestion);
            newQuestion.focus();
            x = x + 1;
        } 
        else if (input === lastQuestion2 && input.value.trim() !== '') {
            const newQuestion = document.createElement('input');
            newQuestion.type = 'number';
            newQuestion.setAttribute('class', 'question3');
            newQuestion.setAttribute('max', 10);
            newQuestion.setAttribute('min', 0);
            newQuestion.setAttribute('id', 'nota3');
            newQuestion.placeholder = `Digite a nota da AC`;
            questionsDiv.appendChild(newQuestion);
            newQuestion.focus();
        }    
        else if (input === lastQuestion3 && input.value.trim() !== '') {
                const newQuestion = document.createElement('input');
                newQuestion.type = 'number';
                newQuestion.setAttribute('class', 'question4');
                newQuestion.setAttribute('max', 10);
                newQuestion.setAttribute('min', 0);
                newQuestion.setAttribute('id', 'nota4');
                newQuestion.placeholder = `Digite a nota da AP3`;
                questionsDiv.appendChild(newQuestion);
                newQuestion.focus();
        } 
    }
});

questionnaire.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputs = document.querySelectorAll('.question, .question2, .question3, .question4');
    const responses = Array.from(inputs).map(input => input.value);

    console.log('Responses:', responses);
});