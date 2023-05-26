
const log = console.log.bind(console);


setInterval(() => {
    
    // current style
    let cStyle = document.getElementById('ac').style.opacity;

    // toggle
    if (cStyle == "0") {
        document.getElementById('ac').style.opacity = "1.0";
    }
    else {
        document.getElementById('ac').style.opacity = "0";
    };

}, 600);