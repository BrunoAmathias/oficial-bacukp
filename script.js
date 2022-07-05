// modal imagens ----------------------------------------------------------------------------

let imagens = document.querySelectorAll(".foto-cardapio")
let modal = document.querySelector(".modal")
let modalImg = document.querySelector("#modal_img")
let bt_close = document.querySelector("#bt_close")
let srcVal = ""

for(let i = 0; i< imagens.length; i++){
    imagens[i].addEventListener("click", function(){
        
        srcVal = imagens[i].getAttribute("src");
        modalImg.setAttribute("src", srcVal);
        modal.classList.toggle('modal_active');
    });
}

bt_close.addEventListener("click", fechar)
modalImg.addEventListener("click", fechar)

function fechar(){
    modal.classList.toggle('modal_active');
    }
// ------------------------ //




// botão ver mais ---------------------------------------


let btn_verMais = document.querySelector(".btn_vermais")
let verMais = document.querySelector(".mais")

btn_verMais.addEventListener("click", function(){
    if(verMais.style.display === "none"){
        verMais.style.display = "inline"
        btn_verMais.innerHTML= "Ver menos"
    }else{
        verMais.style.display = "none"
        btn_verMais.innerHTML= "Ver mais"

    }
})
// --------------- //

window.sr = ScrollReveal({reset:true});

    sr.reveal(".escrita-background-cardapio",{rotate: {x:0, y:0,z:0},
    duration:1500} );
    sr.reveal(".espetos",{rotate: {x:0, y:0,z:0},
    duration:1000} );




    function loading(){
        document.getElementsByClassName("box-load")[0].style.display = "none"
        document.getElementById("content").style.visibility = "visible"

    }

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
    }