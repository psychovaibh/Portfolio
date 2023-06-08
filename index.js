let counts0 = setInterval(html, 10);
let start0 = -100;
function html() {
    let count = document.getElementById("html");
    count.innerHTML = ++start0 + "%";
    if (start0 === 73) {
        clearInterval(counts0);
    }
}


let counts1 = setInterval(css, 10);
let start1 = -100;
function css() {
    document.getElementById("css").innerHTML = ++start1 + "%";
    if (start1 === 69) {
        clearInterval(counts1);
    }
}

let counts2 = setInterval(js, 10);
let start2 = -100;
function js() {
    document.getElementById("js").innerHTML = ++start2 + "%";
    if (start2 === 70) {
        clearInterval(counts2);
    }
}


let counts3 = setInterval(python, 10);
let start3 = -100;
function python() {
    document.getElementById("python").innerHTML = ++start3 + "%";
    if (start3 === 76) {
        clearInterval(counts3);
    }
}
