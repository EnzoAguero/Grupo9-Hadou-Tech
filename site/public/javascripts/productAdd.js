const $ = id => document.getElementById(id)

window.addEventListener('load', () => {
    console.log('Conectado bien!');

const form = $('formAdd');

form.addEventListener('submit', e => {
    e.preventDefault()
})

$('name').addEventListener('blur', () => {
    if(!$('name').value){
        $('name').classList.add('is-invalid')
            $('error-name').innerHTML = "Debes ingresar un nombre válido"
    }else{
        $('name').classList.remove('is-invalid')
        $('name').classList.add('is-valid')
        $('error-name').innerHTML = null
    }
})
})