var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png'){
        myImage.setAttribute ('src','images/firefox2.png');
        } else {
        myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Введи своё имя');
    localStorage.setItem('name', myName);
    if (!localStorage.getItem('name')) {
        setUserName();
    }   else {
        var storedName = localStorage.getItem('name');
        myHeading.textContent = 'Программирование - круто! ' + myName;
    }
}
myButton.onclick = function(){
    setUserName();
    }