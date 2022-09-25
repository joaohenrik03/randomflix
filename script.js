const API_KEY = 'api_key=04febd9b1a0791554ad97c1ed63e92ae';

function handleSearchMovie() {
  fetch(`https://api.themoviedb.org/3/movie/${Math.floor(Math.random() * 100)}?${API_KEY}&language=pt-BR`)
  .then(response => {
    if (response.ok) {
      response.json().then(data => {
        document.getElementById('moviesSection').innerHTML = `
          <img 
            src="https://image.tmdb.org/t/p/original${data.poster_path}" 
            alt=""
          />
        
          <div>
            <h2>
              ${data.title}
            </h2>
            <p>
              ${data.overview}
            </p>
          </div>
        `  
      })
    } else {
      document.getElementById('moviesSection').innerHTML = `
        <img 
          src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" 
          alt="Foto de um Ambiente de desenvolvimento"
        />
      
        <div class="time-to-code">
          <h2>
            Ops, hoje não é dia de assistir filme.
            <br />
            Bora codar! 🚀
          </h2>
        </div>  
      `  
    }
  })
  .catch(error => console.log(error))
}

document.getElementById('searchMovie').addEventListener('click' ,handleSearchMovie);