document.getElementById("hamburger").addEventListener("click", function(){
    if (document.getElementById("menu-small") == null){
        var nav = document.getElementById("navigation");
        var hamburger = document.getElementById("hamburger");
        nav.classList.add("colored");
        hamburger.className = "fa fa-close menu-item";
        el = document.createElement("div");
        el.id="menu-small";
        el.innerHTML = hamburger.parentNode.innerHTML;
        el.lastChild.remove();
        el.lastChild.remove();
        document.getElementById("navigation").parentNode.appendChild(el);
    }
    else{
        var hamburger = document.getElementById("hamburger");
        document.getElementById("menu-small").remove();
        hamburger.className = "fa fa-bars menu-item";
    }
});

var i = 0;
var txt = "Hi! I'm Ethan Kosaki"; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
document.onload = typeWriter();

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML + txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else{
    document.getElementById("demo").innerHTML+='<span class="blinking-cursor">|</span>';
  }
}

var scrolled1 = 0
window.addEventListener("scroll",flyIn);
function flyIn(){
    if (scrollY>100 && scrolled1 == 0){
        scrolled1 = 1;
        document.getElementById("scu").style.animation = "fly-from-left 1.25s, linear";
        document.getElementById("scu").style.animationFillMode = "forwards";
        document.getElementById("uci").style.animation = "fly-from-right 1.25s, linear";
        document.getElementById("uci").style.animationFillMode = "forwards";
    }
    
}

