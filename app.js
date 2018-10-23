var div = document.getElementById('div');
var circle = document.getElementById('circle');
var circleD = document.getElementById('circleDiv');
var img = document.getElementById('img');
var knife = document.getElementById('knife');
var knifeDiv = document.getElementById('knifes');
var knifeImg = document.createElement('img');
knifeImg.setAttribute('img' , 'gun (1).png');
knifeImg.setAttribute('class' , 'knife');
knifeImg.style.bottom = '270px';


function roundingCircle() {
    var deg = 0;
    var i = setInterval(function () {
        circleD.style.transform = 'rotate(' + deg++ + 'deg)';
    }, 10)
}
roundingCircle();

function hitApple() {
    var k = document.createElement('img');
    k.setAttribute('src', 'knife-5.png');
    k.style.height = '90px';
    k.style.width = '90px';
    var c = knifeDiv.children;
    knifeDiv.removeChild(c[0]);
    if (c.length === 0) {
        alert('GameOver');
        location.reload();
    }
    circleD.appendChild(k);
}
function restartGame() {
    var a = document.getElementsByClassName('knife');
    console.log(a);
    for (var i = 0; i < 6; i++) {
        var k = document.createElement('img');
        var d = document.createElement('div');
        k.setAttribute('src', 'knife-5.png');
        k.setAttribute('class', 'knife');
        k.style.position = '';
        d.appendChild(k);
        knifeDiv.appendChild(d);
    }
}
//restartGame();