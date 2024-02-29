import {quoteDisplayElement, quoteInputElement} from './main.js'

const RANDOM_URL = 'http://api.quotable.io/random'

const getRandomQuote = () => {
  return fetch(RANDOM_URL)
      .then(response => response.json())
      .then(data => data.content)
}

const getNextQuote = async () => {
  const quote = await getRandomQuote()
  quoteDisplayElement.innerText = quote
  quoteInputElement.value = null
}


export default getNextQuote()