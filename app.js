window.addEventListener("scroll",function(){
var header = document.querySelector("header")
header.classList.toggle('sticky',this.window.scroll> 0)
});
const body = document.querySelector('body');
const toggle = document.getElementById('toggle')
toggle.onclick = function(){
    toggle.classList.toggle('active')
    body.classList.toggle('active')
}