 const form = document.getElementById('formDelete')

 console.log('conected')

 form.addEventListener('click', (e) => {
 e.preventDefault()

   Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
     
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
      form.submit()
      
    }
  })
 }
 )
/*  
 function swal(e) {
   e.preventDefault()
 
  var form = event.target.form
  Swal.fire({
   title: 'Are you sure?',
   text: "You won't be able to revert this!",
   icon: 'warning',
   showCancelButton: true,
   confirmButtonColor: '#3085d6',
   cancelButtonColor: '#d33',
   confirmButtonText: 'Yes, delete it!'
 }).then((result) => {
   if (result.isConfirmed) {
     Swal.fire(
       'Deleted!',
       'Your file has been deleted.',
       'success'
     )
     form.submit()
   }
 })
} */
    
