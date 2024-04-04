function change(element) {
    var tools = document.querySelectorAll('.tools1, .tools2, .tools3');
    tools.forEach(function(item) {
        item.classList.remove('selected');
    });
    element.classList.add('selected');
    var image = document.querySelector('.image');
    image.classList.add('akilesh'); 
    setTimeout(function() {
        image.classList.remove('akilesh');
    },500);
   
}

hamburger = document.querySelector(".hamburger");
hamburger.onclick= function(){
    navbar = document.querySelector(".nav-bar");
    navbar.classList.toggle("active")
}

const navblock = document.querySelector('.navblock');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            navblock.classList.add('scroll');
        } else {
            navblock.classList.remove('scroll');
        }
    });

