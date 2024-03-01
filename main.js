import './style.css'
import getNextQuote from './utils.js'

document.querySelector('#app').innerHTML = `
  <main>
    <div class="timer" id="timer">0</div>
    <div class="container">
      <article class="quote-display" id="quoteDisplay">q</article>
      <textarea id="quoteInput" class="quote-input" autofocus></textarea>
    </div>
  </main>
`

export const quoteDisplayElement = document.querySelector('#quoteDisplay')
export const quoteInputElement = document.querySelector('#quoteInput')
export const timerElement =document.querySelector('#timer')

quoteInputElement.addEventListener('input', () => {
  const arrayQuote = quoteDisplayElement.querySelectorAll('span')
  const arrayValue = quoteInputElement.value.split('')
  
  let correct = true
  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index]
    if (character == null) {
      characterSpan.classList.remove('correct')
      characterSpan.classList.remove('incorrect')
      correct = false
    } else if (character === characterSpan.innerText) {
      characterSpan.classList.add('correct')
      characterSpan.classList.remove('incorrect')
    } else {
      characterSpan.classList.remove('correct')
      characterSpan.classList.add('incorrect')
      correct = false
    }
  })
  
  if (correct) getNextQuote()
})

getNextQuote()
