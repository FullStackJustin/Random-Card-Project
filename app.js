

window.onload = function generate() {
    var top = document.querySelector(".topBox")
    var numb = document.querySelector(".number")
    var bottom = document.querySelector(".bottomBox")
    var button = document.querySelector(".btn")
    const sign = ['♦', '♥', '♠', '♣',];
    const value = ['1','2','3','4','5','6','7','8','9','J','Q','K'];
    const color = ['black', 'red'];
    let currentSign = sign[Math.floor(Math.random()*sign.length -1)]
    let currentValue = value[Math.floor(Math.random()*value.length -1)]
    
    button.addEventListener("click", function generate(){
        if (currentSign ==='♦' || currentSign === '♥') {
    top.style.color = color[1];
    bottom.style.color = color[1];
        } else {
            top.style.color = color[0];
            bottom.style.color = color[0];
        }
        numb.innerHTML = currentValue;
        top.innerHTML = currentSign;
        bottom.innerHTML = currentSign;     
    
    })
}
