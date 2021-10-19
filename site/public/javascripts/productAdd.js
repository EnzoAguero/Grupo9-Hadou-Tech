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
}),
$('mark').addEventListener('blur', () => {
    if(!$('mark').value){
        $('mark').classList.add('is-invalid')
            $('error-mark').innerHTML = "Debes ingresar un nombre de marca válido"
    }else{
        $('mark').classList.remove('is-invalid')
        $('mark').classList.add('is-valid')
        $('error-mark').innerHTML = null
    }
}),
$('price').addEventListener('blur', () => {
    if(!$('price').value){
        $('price').classList.add('is-invalid')
            $('error-price').innerHTML = "Debes ingresar un precio válido"
    }else{
        $('price').classList.remove('is-invalid')
        $('price').classList.add('is-valid')
        $('error-price').innerHTML = null
    }
}),
$('image').addEventListener('blur', () => {
    if(!$('image').value){
        $('image').classList.add('is-invalid')
            $('error-image').innerHTML = "Debes ingresar al menos una foto"
    }else{
        $('image').classList.remove('is-invalid')
        $('image').classList.add('is-valid')
        $('error-image').innerHTML = null
    }
}),
$('cuotas').addEventListener('blur', () => {
    if(!$('cuotas').value){
        $('cuotas').classList.add('is-invalid')
            $('error-cuotas').innerHTML = "Debes ingresar un numero de cuotas"
    }else{
        $('cuotas').classList.remove('is-invalid')
        $('cuotas').classList.add('is-valid')
        $('error-cuotas').innerHTML = null
    }
})
})