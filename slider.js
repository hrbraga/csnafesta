let count = 1;
const tempoSlide = 4000;

document.getElementById('radio1').checked = true;

setInterval( function(){
    nextImage();
}, tempoSlide);

function nextImage(){
    count++
    if(count>3){
        count=1
    }
    document.getElementById('radio'+count).checked = true;
}