const form = document.querySelector("form");
const divWIthGifs = document.querySelector("div")
const apiKey = "johLqC4sWIRKESKJrvTUVrapjS23Gw9U"

const getApiUrl = GIFName => {
  return `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=1&q=${GIFName}`
}

const generateGifImg = (gifImageUrl, gifData) => {

  const img = document.createElement("img")
  img.setAttribute("src", gifImageUrl)
  img.setAttribute("alt", gifData.data[0].title)

  return img

}

const gifFetch = async (apiUrl) => {

  try {

    const response = await fetch(apiUrl)

    if (!response.ok) {
      throw new Error("Não foi possível obter os dados!")

    }
    return await response.json()


  } catch (error) {
    alert(`Erro na requisição : ${error.message}`)
  }


}

const insertGifIntoDom = async (apiUrl) => {




  const gifData = await (await fetch(apiUrl)).json()

  if(gifData) {
    
    const gifImageUrl = gifData.data[0].images.downsized.url
  
    const img = generateGifImg(gifImageUrl, gifData)
  
    divWIthGifs.insertAdjacentElement("afterbegin", img)
  
    form.reset()

  }

}



form.addEventListener("submit", async event => {
  event.preventDefault()

  const inputValue = event.target.search.value

  const apiUrl = getApiUrl(inputValue)

  gifFetch(apiUrl)


  insertGifIntoDom(apiUrl)


})