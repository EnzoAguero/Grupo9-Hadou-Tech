/* const $ = id => document.getElementById(id)

window.addEventListener('load', () => {
    console.log('Conectado bien!');

const form = $('formRegister');

form.addEventListener('submit', e => {
    e.preventDefault()
})

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

})  */