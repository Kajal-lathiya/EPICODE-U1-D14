
let randomNO = null;
const saveButton = function () { /* when click on button call this function */
    let randomNumber = Math.floor(Math.random() * (76 - 1) + 1)
    let h4 = document.getElementById('showNo');
    h4.innerText = 'Random No: ' + randomNumber;
    let cellNode = document.getElementsByClassName('cell');
    let h3 = document.getElementsByTagName('h3')
    for (var i = 0; i < 76; i++) {
        // console.log('h3[i].innerText-->', h3[i].innerText);
        // console.log('randomNumber:', randomNumber);
        if (parseInt(h3[i].innerText) === randomNumber) {
            console.log('calalalalaallaallaalal');
            cellNode[i].classList.add('selected')
        }
    }
}

// const highLightSelectedNumber = function (val) {
//     console.log('val-->', val);
//     let cellNode = document.getElementsByClassName('cell');
//     let h3 = document.getElementsByTagName('h3');
//     console.log(h3);
//     h3.map((obj) => {
//         console.log(obj.innerText);
//     })

// }

const createCellOfBoard = function () {
    let boardNode = document.getElementById('bingoBoard')
    for (let i = 0; i < 76; i++) {
        let cellNode = document.createElement('div');
        cellNode.className = 'cell';
        const h3 = document.createElement('h3');
        // if (i + 1 === randomNO) {
        //     cellNode.classList.add("selected"); // adds the class for coloring it
        // }
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