let imagens = document.querySelectorAll(".fotos")
let modal = document.querySelector(".telainicial_modal")
let modalImg = document.querySelector("#telainicial_modal_img")
let bt_close = document.querySelector("#telainicial_bt_close")
let srcVal = ""

for( let i = 0; i < imagens.length; i++){
    imagens[i].addEventListener("click", function(){
        srcVal = imagens[i].getAttribute("src");
        modalImg.setAttribute("src", srcVal);
        modal.classList.toggle('telainicial_modal_active');
    });
}

bt_close.addEventListener("click", fechar)
modalImg.addEventListener("click", fechar)

function fechar(){
    modal.classList.toggle('telainicial_modal_active');
    }

    window.sr = ScrollReveal({reset:true});

    sr.reveal('.escrita-background',{rotate: {x:0, y:0,z:0},
    duration:1500} );

    sr.reveal(".container-descricao", {rotate:{x:0, y:20, z:0}, duration:1000})
    sr.reveal(".fotos", {rotate:{x:0, y:20, z:0}, duration:1000})
    sr.reveal(".nossos-valores", {rotate:{x:70, y:0, z:0},duration:1000 })



    // ------------Pré loading--------------//

    function loading(){
       
        document.getElementsByClassName("box-load")[0].style.display = "none"
        document.getElementById("content").style.visibility = "visible"

    }

// var close = document.getElementById('close');
// var popup = document.getElementById('popup');

// close.addEventListener("click", function() {
//   popup.style.display = 'none';
// });






function fecharMenu(){
    let menuNav = document.getElementById("div-abertura")
    menuNav.classList.remove("show-div-abertura")
}





function menuNavegador(){
    let menuNav = document.getElementById("div-abertura")
    if(menuNav.classList.contains("show-div-abertura"))
        menuNav.classList.remove("show-div-abertura")
        else{
            menuNav.classList.add("show-div-abertura")
        }
}


function menuMobileSub(){
let menuSub = document.getElementById("div-abertura-mobile")
let mobileMenu = document.getElementById("menu-mobile")
if(menuSub.classList.contains("show-div-abertura-mobile"))
    menuSub.classList.remove("show-div-abertura-mobile")
    else{
        menuSub.classList.add("show-div-abertura-mobile")
    }
   
}




function mobileMenu(){
let mobileMenu = document.getElementById("menu-mobile")
let menuSub = document.getElementById("div-abertura-mobile")

if(mobileMenu.classList.contains("show-menu")){
    mobileMenu.classList.remove("show-menu")
    menuSub.classList.remove("show-div-abertura-mobile")

    }else{
        mobileMenu.classList.add("show-menu")
    }
    console.log(mobileMenu);
}


