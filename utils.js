import {quoteDisplayElement, quoteInputElement, timerElement} from './main.js'

const RANDOM_URL = 'http://api.quotable.io/random'

const getRandomQuote = () => {
  return fetch(RANDOM_URL)
      .then(response => response.json())
      .then(data => data.content)
}

const getNextQuote = async () => {
  const quote = await getRandomQuote()
  quoteDisplayElement.innerHTML = ''
  quote.split('').forEach(character=>{
    const characterSpan = document.createElement('span')
    characterSpan.innerText = character
    quoteDisplayElement.appendChild(characterSpan)
  })
  quoteInputElement.value = null
  startTimer()
}

let startTime
const startTimer = () =>{
  timerElement.innerText = 0
  startTime = new Date()
  setInterval(()=>{
    timer.innerText = getTimerTime()
  }, 1000)
}

const getTimerTime = () => {
  return Math.floor((new Date() - startTime) / 1000)
}


export default getNextQuote