
let randomNO = null;
const saveButton = function () { /* when click on button call this function */
    let randomNumber = Math.floor(Math.random() * (76 - 1) + 1)
    let h4 = document.getElementById('showNo');
    h4.innerText = 'Random No: ' + randomNumber;
    let cellNode = document.getElementsByClassName('cell');
    let h3 = document.getElementsByTagName('h3')
    cellNode[randomNumber - 1].style.backgroundColor = 'chartreuse'; // solution 1
    // cellNode[randomNumber - 1].classList.add('selected') // solution 2
    // for (let i = 0; i < 76; i++) { // solution 3
    //     if (parseInt(h3[i].innerText) === randomNumber) {
    //         cellNode[i].classList.add('selected')
    //     }
    // }
}
const createCellOfBoard = function () {
    let boardNode = document.getElementById('bingoBoard')
    for (let i = 0; i < 76; i++) {
        let cellNode = document.createElement('div');
        cellNode.className = 'cell';
        const h3 = document.createElement('h3');
        h3.innerText = i + 1;
        cellNode.appendChild(h3);
        boardNode.appendChild(cellNode);
    }
}

window.onload = function () {
    let title = document.querySelector('h1');
    title.innerText = 'bingo board';
    createCellOfBoard();
};