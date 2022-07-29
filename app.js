const form = document.querySelector("form");

form.addEventListener("submit", async event=>{
  event.preventDefault()
  const inputValue = event.target.search.value
  const apiKey = "johLqC4sWIRKESKJrvTUVrapjS23Gw9U"
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=1&q=${inputValue}`

try{
  const response = await fetch(url)

  if(!response.ok){
    throw new Error("Não foi possível obter os dados!")

  }

const GIFdata = await response.json()
console.log(GIFdata)
  
} catch(error){
  alert(`Erro na requisição : ${error.message}`)
}




  
})