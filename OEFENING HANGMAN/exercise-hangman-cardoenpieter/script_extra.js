//origineel
function drawSolutionLetters() {
    let solutionLetterHTML = '';

    for (let i = 0; i < state.foundLetters.length; i++) {
        solutionLetterHTML += `<div class="solution-letter">${state.foundLetters[i]}</div>`;
    }

    $solutionContainer.innerHTML = solutionLetterHTML;
}

//deze herschrijven als alternatief v1
function drawSolutionLetters() {
    // let solutionLetterHTML = '';
    //
    // for (let i = 0; i < state.foundLetters.length; i++) {
    //     solutionLetterHTML += `<div class="solution-letter">${state.foundLetters[i]}</div>`;
    // }
    //
    // $solutionContainer.innerHTML = solutionLetterHTML;

    $solutionContainer.innerHTML = ''; //container leegmaken
    for (let i = 0; i < state.foundLetters.length; i++) {
        let $solutionLetter = document.createElement('div');
        $solutionLetter.classList.add('solution-letter');
        $solutionLetter.innerText = state.foundLetters[i];
        $solutionContainer.insertAdjacentElement('beforeend', $solutionLetter); //voordeel: elementen toevoegen en addeventlistener gebruiken
        
        // `
        // beforestart
        // <div>
        // afterstart
        // <p>test</p>
        // beforeend
        // </div>
        // afterend
        // `
    }
}

//deze herschrijven als alternatief v2
function drawSolutionLetters() {
    // let solutionLetterHTML = '';
    //
    // for (let i = 0; i < state.foundLetters.length; i++) {
    //     solutionLetterHTML += `<div class="solution-letter">${state.foundLetters[i]}</div>`;
    // }
    //
    // $solutionContainer.innerHTML = solutionLetterHTML;
    
    // $solutionContainer.innerHTML = '';
    //
    // for (let i = 0; i < state.foundLetters.length; i++) {
    //     let $solutionLetter = document.createElement('div');
    //     $solutionLetter.classList.add('solution-letter');
    //     $solutionLetter.innerText = state.foundLetters[i];
    //     $solutionContainer.insertAdjacentElement('beforeend', $solutionLetter);
    //    
    //     // `
    //     // beforestart
    //     // <div>
    //     // afterstart
    //     // <p>test</p>
    //     // beforeend
    //     // </div>
    //     // afterend
    //     // `
    // }
    
    $solutionContainer.innerHTML = '';

    for (let i = 0; i < state.foundLetters.length; i++) {
        $solutionContainer.insertAdjacentHTML('beforeend', `<div class="solution-letter">${state.foundLetters[i]}</div>`)
    }

}
