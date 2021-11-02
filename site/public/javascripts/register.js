 const $ = id => document.getElementById(id)

window.addEventListener('load', () => {
    console.log('Conectado bien!');

const form = $('formRegister');


$('email').addEventListener('blur', () => {
    if(!$('email').value){
        $('email').classList.add('is-invalid')
            $('error-email').innerHTML = "Debes ingresar un email válido"
    }else{
        $('email').classList.remove('is-invalid')
        $('email').classList.add('is-valid')
        $('error-email').innerHTML = null
    }
}),
$('password').addEventListener('blur', () => {
    if(!$('password').value){
        $('password').classList.add('is-invalid')
            $('error-password').innerHTML = "Debes ingresar una contraseña válida"
    }else{
        $('password').classList.remove('is-invalid')
        $('password').classList.add('is-valid')
        $('error-password').innerHTML = null
    }
}),
$('name').addEventListener('blur', () => {
    if(!$('name').value){
        $('name').classList.add('is-invalid')
            $('error-name').innerHTML = "Debes ingresar un nombre válido"
    }else{
        $('name').classList.remove('is-invalid')
        $('name').classList.add('is-valid')
        $('error-name').innerHTML = null
    }
}),
$('last_name').addEventListener('blur', () => {
    if(!$('last_name').value){
        $('last_name').classList.add('is-invalid')
            $('error-last_name').innerHTML = "Debes ingresar un apellido válido"
    }else{
        $('last_name').classList.remove('is-invalid')
        $('last_name').classList.add('is-valid')
        $('error-last_name').innerHTML = null
    }
})

if(!$('acepta').checked){
    $('acepta').classList.add('is-invalid')
    $('error-acepta').innerHTML = "Debes aceptar los términos y condiciones";
    error = true
}

form.addEventListener('submit', e => {
    e.preventDefault()

    let elementsForm = $('formRegister').elements;
    let error = false;

    for (let i = 0; i < elementsForm.length - 1; i++) {
        
        if(!elementsForm[i].value){
            elementsForm[i].classList.add('is-invalid')
            $('error-empty').innerHTML = 'Los campos señalados son obligatorios';
            error = true
        }
    }

    
    if(!error){
        $('formRegister').submit()
    }
})

}) 