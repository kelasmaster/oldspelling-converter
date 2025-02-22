function convertToModern(text) {
    return text
        .replace(/dj/g, 'j')
        .replace(/tj/g, 'c')
        .replace(/j/g, 'y')
        .replace(/nj/g, 'ny')
        .replace(/sj/g, 'sy')
        .replace(/ch/g, 'kh')
        .replace(/oe/g, 'u')
        .replace(/Dj/g, 'J')
        .replace(/Tj/g, 'C')
        .replace(/J/g, 'Y')
        .replace(/Nj/g, 'Ny')
        .replace(/Sj/g, 'Sy')
        .replace(/Ch/g, 'Kh')
        .replace(/Oe/g, 'U');
}

function convertToOld(text) {
    return text
        .replace(/kh/g, 'ch')
        .replace(/sy/g, 'sj')
        .replace(/ny/g, 'nj')
        .replace(/y/g, 'j')
        .replace(/c/g, 'tj')
        .replace(/j/g, 'dj')
        .replace(/u/g, 'oe')
        .replace(/Kh/g, 'Ch')
        .replace(/Sy/g, 'Sj')
        .replace(/Ny/g, 'Nj')
        .replace(/Y/g, 'J')
        .replace(/C/g, 'Tj')
        .replace(/J/g, 'Dj')
        .replace(/U/g, 'Oe');
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
