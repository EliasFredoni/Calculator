function operation(ele) {
    document.getElementById("result").innerHTML += ele;
}

function calculateResult() {
    let container = document.getElementById("result");
    let result = eval(container.innerHTML);
    container.innerHTML = result;
}

function del() {
    let container = document.getElementById("result");
    if (container.innerHTML.endsWith(' ')) {
        container.innerHTML = container.innerHTML.slice(0. - 3);
    }
    else {
        container.innerHTML = container.innerHTML.slice(0. - 1);
    }
}

// function Post(EliasinDenBirken){
// document.getElementById(deklarierte(was muss verschickt werden) ID).innerHTML(verbindet mit HTML) += (SteffenSuperCode)
// }