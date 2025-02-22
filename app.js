function convertToModern(text) {
    return text
        .replace(/dj/g, 'j')
        .replace(/tj/g, 'c')
        .replace(/j/g, 'y')
        .replace(/nj/g, 'ny')
        .replace(/sj/g, 'sy')
        .replace(/ch/g, 'kh')
        .replace(/oe/g, 'u');
}

function convertToOld(text) {
    return text
        .replace(/kh/g, 'ch')
        .replace(/sy/g, 'sj')
        .replace(/ny/g, 'nj')
        .replace(/y/g, 'j')
        .replace(/c/g, 'tj')
        .replace(/j/g, 'dj')
        .replace(/u/g, 'oe');
}

// Example usage
document.getElementById('convert-to-modern').addEventListener('click', () => {
    const inputText = document.getElementById('input-text').value;
    const outputText = convertToModern(inputText);
    document.getElementById('output-text').value = outputText;
});

document.getElementById('convert-to-old').addEventListener('click', () => {
    const inputText = document.getElementById('input-text').value;
    const outputText = convertToOld(inputText);
    document.getElementById('output-text').value = outputText;
});
