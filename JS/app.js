/*<script>
    const header = document.querySelector("header");
    const hamburger = document.querySelector(".hamburger-on");
    const navLinks = document.querySelector(".nav-links");
    let hamburgerOpen = false;

    window.addEventListener("scroll", function(){
        header.classList.toggle("sticky", window.scrollY>0)
    })

    hamburger.addEventListener("click", function(){
        if(!hamburgerOpen){
            navLinks.classList.toggle("show-navlinks");
            hamburger.classList.toggle("hamburger-off");
        }
        else{
            navLinks.classList.remove("show-navlinks");
            hamburger.classList.remove("hamburger-off");
            hamburgerOpen = false;
        }
    })
</script>*/

'use strict'

const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')

// Cuando CLICK en punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS puntos
    // AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
punto.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click',()=>{

        // Guardar la posición de ese PUNTO
        let posicion  = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -50

        // MOVEMOS el grand
        grande.style.transform = `translateX(${ operacion }%)`

        // Recorremos TODOS los punto
        punto.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')

    })
})