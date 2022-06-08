

var images = [];
var maximage = 4;
for(var i = 0; i < maximage; i++)
{
    images[i] = new Image();
    images[i] = "image/" + i + ".png";
}

var index = 0;
function next()
{
    index++;
    if(index >= images.length) index = 0;
    var pic = document.getElementById("anh");
    pic.src = images[index];
    // document.getElementById("screen").innerHTML = index + 1 +"/" + images.length;
    // document.getElementById("note").innerHTML = note[index];
}

function activeDot () {
    const dotList = document.querySelectorAll('.dot');
   
    for (let i = 0; i < dotList.length; i++) {
        if (index === i) {
            dotList[i].classList.add('active');
        } else {
            dotList[i].classList.remove('active');
        }
    }

}
function movetop () {
    window.movetop;
}

setInterval(() => {
    next();
    activeDot();
},3000); 