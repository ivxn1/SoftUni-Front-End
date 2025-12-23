function solve() {
  const inputField = document.querySelector('div#exercise > textarea#input');
  const inputData = inputField.value;
  const outputField = document.querySelector('div#exercise > div#output');

  let sentences = inputData.trim().split(/(?<=[.!?])\s*/);
  let paragraphs = [];
  outputField.innerHTML = '';


  for (let i=0; i<sentences.length; i+=3) {
    let p = document.createElement('p');
    p.textContent = sentences.slice(i, i+3).join(' ');

    paragraphs.push(p);
  }


  outputField.replaceChildren(...paragraphs);
}