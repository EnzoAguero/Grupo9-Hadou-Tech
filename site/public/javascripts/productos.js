/* const $ = id => document.getElementById(id);

window.onload = async function products() {
    console.log('conected');
    try {
        let response = await fetch('/api/products')
        let result = await response.json();
        console.log(result);

        result.data.forEach(producto => {
            let item =
            `
            <article>
          <a href="/products/detalle/<%= producto.id %> ">
            <div class="d-flex justify-content-center">
              <img src="/images/${producto.images[0].file}"  alt="mouse">
            </div>
            <div class="descripcion-de-producto">
                <h4>
                  ${producto.name} 
                  ${producto.marks[0].name}
                </h4>
              <span>$ ${producto.price}</span>
              <h5>En $ ${producto.cuotas} cuotas de $${Math.round(producto.price
                 /producto.cuotas)}
              </h5>
          </a>
          <a href="#">
            <p>Comprar</p>
          </a>
            </div>
        </article>
            `
            $('products').innerHTML += item
        })

    } catch (error) {
        console.log(error);
        
    }
}

window.addEventListener('load', () => {
  products(query.get())
}) */

function ajax() {
    const http = new XMLHttpRequest()
    const url = 'http://localhost:3000/products/productos/mouse'

    http.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        document.getElementById("vista").innerHTML = this.responseText
      }
    }
      http.open("GET",url)
      http.send()
    
    }

    document.getElementById("boton").addEventListener("click",function(){
      ajax()
    })