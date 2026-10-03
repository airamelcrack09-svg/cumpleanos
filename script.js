const boton = document.getElementById("entrar");
const portada = document.querySelector(".portada");
const bienvenida = document.getElementById("bienvenida");
const personas = document.querySelector(".personas");

boton.addEventListener("click", function() {

    portada.style.opacity = "0";
    portada.style.transform = "translateY(-20px)";

    setTimeout(function() {

        portada.style.display = "none";

        bienvenida.style.display = "flex";
        personas.style.display = "block";

        setTimeout(function() {
            bienvenida.style.opacity = "1";
        }, 50);

    }, 800);

});

const polaroids = document.querySelectorAll(".polaroid");

polaroids.forEach(function(polaroid) {

    polaroid.addEventListener("click", function() {

        const interior = polaroid.querySelector(".polaroid-inner");

        if (interior.style.transform === "rotateY(180deg)") {
            interior.style.transform = "rotateY(0deg)";
        } else {
            interior.style.transform = "rotateY(180deg)";
        }

    });

});
