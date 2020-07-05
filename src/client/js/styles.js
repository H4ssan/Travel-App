function showOutput(){
    const output = document.getElementById('output');

    if(getComputedStyle(output, null).display === 'none'){
        output.style.display = 'block';
    }
}

export {
    showOutput
}

