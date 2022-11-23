const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const correo = document.getElementById("correo");
const formulario = document.getElementById("formulario");
const parrafo = document.getElementById("warnings");

formulario.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings=""
    let entrar=false
    let regexEmail=/^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    if(nombre.value.length <1){
      /*  alert("nombre muy corto");*/
      warnings += 'el nombre no es valido <br>'
      entrar=true
    }
    if(apellido.value.length <1){
        /*  alert("nombre muy corto");*/
        warnings += 'el apellido no es valido <br>'
        entrar=true
      }
      if(!regexEmail.test(correo.value)){
        /*  alert("nombre muy corto");*/
        warnings += 'el correo no es valido <br>'
        entrar=true
      }
    if(entrar){
        parrafo.innerHTML=warnings
    }
})