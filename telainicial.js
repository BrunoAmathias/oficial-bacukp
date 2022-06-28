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
    let menuAbertura = document.getElementById("div-abertura")
    menuAbertura.style.display = "none"
}


// function abrirFecharMenuCel(){
// let menuAbertura = document.getElementById("div-abertura")
// if(menuAbertura.style.display === "none"){
//     menuAbertura.style.display = "block"
// }else {
//       menuAbertura.style.display = "none"  
// }
// }

$("#reservas").click(()=>{
    console.log("funcionando");
    $("#div-abertura").toggle()
})