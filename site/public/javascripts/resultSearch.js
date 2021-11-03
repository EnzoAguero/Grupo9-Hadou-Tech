let formSearchHeader = document.getElementById('f-s-h')
formSearchHeader.addEventListener('submit', e => {
  e.preventDefault()

  document.getElementById('i-s-h').value != "" && formSearchHeader.submit()

})

