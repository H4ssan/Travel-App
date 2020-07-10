function showOutput(){
    const output = document.getElementById('output');

    if(getComputedStyle(output, null).display === 'none'){
        output.style.display = 'block';
        output.scrollIntoView();
    }
}

function scrollToView(){
    const button = document.getElementById('generate');
    const section = document.getElementById('output');

    button.addEventListener('click', () => {
        section.scrollIntoView();
    })
}

export {
    showOutput,
    scrollToView
}