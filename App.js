const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
var icon = document.getElementById('icon');


icon.onclick = function () {
    document.body.classList.toggle('dark-theme')
    if (document.body.classList.contains('dark-theme')) {
        icon.src = '/images/sun.png'
    } else {
        icon.src = '/images/moon.png'
    }
}



function addTask() {
    if (inputBox.value === '') {
        alert('Please write something')
    }

    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = '\u00d7'
        li.appendChild(span);

    }
    inputBox.value = '';
    savaData();
    console.log(savaData());
}


listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }

    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
}, false);


function savaData() {
    localStorage.setItem('Data', listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('Data');
}

inputBox.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

showTask();
