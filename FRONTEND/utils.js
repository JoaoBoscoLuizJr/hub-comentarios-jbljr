const formattedDate = () =>{
    const currentDate = new Date();
    const options = { 
        day: '2-digit',
        month: 'short',
        hour: 'numeric',
        hour12: false
    };

    let formatted = currentDate.toLocaleDateString('pt-BR',options)
    return formatted.replace(',', ' às') + 'hs';
}

function randomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}
function randomColors(colors) {
    const valores = colors.charAt(0).toUpperCase();
    const color = randomColor();
    document.body.style.backgroundColor = color;
    document.body.textContent = valores;
    document.body.title = darkColors
    document.body.title = lightColor
}

function darkColors() {
    const darkPalette = ['#2c3e50', '#34495e', '#7f8c8d', '#2c3e50', '#34495e'];
    return randomColor(darkPalette);
    
}

function lightColor() {
    const lightPalette = ['#ecf0f1', '#bdc3c7', '#d7dbdd', '#f2f3f4', '#e5e7e9'];
    return randomColor(lightPalette);

}


export {randomColor, formattedDate}