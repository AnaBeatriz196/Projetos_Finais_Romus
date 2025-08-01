import { LinkedStack } from './linkedstack_pilha.js';

const textareaEditor = document.getElementById('textareaEditor');
const btnMostrar = document.getElementById('mostrarTexto');
const historyDiv = document.getElementById('history');

const stack = new LinkedStack();

function typeEffectWithWordDelay(text, element, letterSpeed = 200, wordPause = 1000) {
  return new Promise((resolve) => {
    let i = 0;
    element.textContent = '';

    function isSpace(char) {
      return /\s/.test(char);
    }

    function type() {
      if (i < text.length) {
        element.textContent += text[i];

        if (isSpace(text[i]) || i === text.length - 1) {
          setTimeout(type, wordPause);
        } else {
          setTimeout(type, letterSpeed);
        }

        i++;
      } else {
        resolve();
      }
    }

    type();
  });
}

btnMostrar.addEventListener('click', async () => {
  const texto = textareaEditor.value.trim();
  if (!texto) {
    historyDiv.textContent = '(Nenhum texto para mostrar)';
    return;
  }
  stack.push(texto);

  await typeEffectWithWordDelay(texto, historyDiv, 200, 1000);
});
