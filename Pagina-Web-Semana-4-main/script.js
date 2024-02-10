const galleta = document.getElementById("galleta");
const n_clicks_galleta = document.getElementById("n_clicks_galleta");
var contador = 0;

const fondo_multicolor = document.getElementById("multicolor");
const cambia_colores = document.getElementById("cambia_colores");
const hexadecimal_label = document.getElementById("hexadecimal");

const reproducir_sonido = document.getElementById("barra_metal");
const sonido_barra_metal = document.getElementById("sonido_barra_metal");

const input1 = document.getElementById("input1");
const input1val = input1.placeholder;

const input2 = document.getElementById("input2");
const correo_invalido = document.getElementById("correo_invalido");

const twitter = document.getElementById("twitter");
const num_caracteres = document.getElementById("num_caracteres")

galleta.addEventListener("click",()=>{
    contador +=1;
    n_clicks_galleta.innerHTML="¡Tienes "+contador+" galletas!"
    if(contador === 10){
        n_clicks_galleta.innerHTML ="¡Tienes diabetes! De nada :D"
    }
    if(contador > 10){
        contador_diabetes = contador -10
        n_clicks_galleta.innerHTML ="¡Tienes diabetes + " + contador_diabetes + " galletas!"
    }
})

cambia_colores.addEventListener("click",()=>{
    var nuevo_color = get_new_color();
    fondo_multicolor.style.backgroundColor = nuevo_color;
    hexadecimal_label.innerHTML = nuevo_color;
})

function get_new_color(){
    var digitos_hexadecimales = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        //Añade un digito  hexadecimal aleatorio
        color += digitos_hexadecimales[Math.floor(Math.random() * 16)];
    }
    return color;
}

reproducir_sonido.addEventListener("click",()=>{
    if (sonido_barra_metal.paused) {
        sonido_barra_metal.play();
    } else {
        sonido_barra_metal.currentTime = 0;
    }
})

input1.addEventListener("focus",()=>{
    input1.placeholder = "";    
})

input1.addEventListener("blur",()=>{
    input1.placeholder = input1val;
})

input2.addEventListener("focus",()=>{
    if (input2.classList.contains('invalid')) {
        // quitar la  indicación "error", porque el usuario quiere reintroducir algo
        input2.classList.remove('invalid');
        correo_invalido.innerHTML = "";
      }
})

input2.addEventListener("blur",()=>{
    if (!input2.value.includes('@ugb.edu.sv')) {
        input2.classList.add('invalid');
        correo_invalido.innerHTML = 'Por favor introduzca un correo válido'
    }
})

twitter.addEventListener("focus",()=>{
    twitter.style.backgroundColor="lightblue"
})

twitter.addEventListener("blur",()=>{
    twitter.style.backgroundColor="white"
})

twitter.addEventListener("input", function() {
    // Obtener la longitud del texto actual
    var longitudTexto = twitter.value.length;
    if (longitudTexto > 144) {
      // Truncar el texto para que no exceda el límite
      twitter.value = twitter.value.slice(0, 144);
      longitudTexto = 144; // Actualizar la longitud después de truncar
    }

    // Mostrar la cantidad de caracteres restantes
    var caracteresRestantes = 144 - longitudTexto;
    num_caracteres.textContent = "Caracteres restantes: " + caracteresRestantes;
  });
