import './style.css'
import getNextQuote from './utils.js'

document.querySelector('#app').innerHTML = `
  <main>
    <div class="timer" id="timer">0</div>
    <div class="container">
      <article class="quote-display" id="quoteDisplay">quote</article>
      <textarea id="quoteInput" class="quote-input" autofocus></textarea>
    </div>
  </main>
`

export const quoteDisplayElement = document.querySelector('#quoteDisplay')
export const quoteInputElement = document.querySelector('#quoteInput')

getNextQuote()
