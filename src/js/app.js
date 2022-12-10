import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
  fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
  .then(resp=>resp.json())
  .then(data=>{
    data.results.forEach(element => {
      const li = document.createElement('li')
      li.innerText = element.name
      ul.appendChild(li)
    });
  })
  .catch(console.error)
});
