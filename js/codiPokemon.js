//Haz tú validación en javascript acá

//const logo = document.querySelector("[data-logoMario]");
addEventListener('DOMContentLoaded', () =>{
  const bars = document.querySelector('[data-bars]');
  //console.log(bars)
  if(bars){
    bars.addEventListener('click', () => {
      const ul = document.querySelector('.menu__lista');
      ul.classList.toggle('show')
      //console.log("de")
    });

  }
})
/*
 function logoMario() {
   let iconoActivo = "true";
  logo.addEventListener("click", function quitar(evento) {
     evento.preventDefault();
     // const elemento = evento.target;
     if (iconoActivo == "true") {
       logo.src = "../assets/img/logoMario3.png";
       iconoActivo = "false";
     } else {
       logo.src = "../assets/img/logoMario.png";
       iconoActivo = "true";
    }
    });
 }

// logoMario();
*/
