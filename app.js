const form = document.querySelector("form");

form.addEventListener("submit", async event=>{
  event.preventDefault()
  const inputValue = event.target.search.value
  const apiKey = "johLqC4sWIRKESKJrvTUVrapjS23Gw9U"
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=1&q=${inputValue}`
  const divWIthGifs = document.querySelector("div")

try{
  const response = await fetch(url)

  if(!response.ok){
    throw new Error("Não foi possível obter os dados!")

  }

const gifData = await response.json()
const gifImageUrl = gifData.data[0].images.downsized.url
const img = document.createElement("img")
img.setAttribute("src", gifImageUrl)
img.setAttribute("alt", gifData.data[0].title)
console.log (img)
divWIthGifs.insertAdjacentElement("afterbegin", img)
}catch(error){
  alert(`Erro na requisição : ${error.message}`)
}




  
})