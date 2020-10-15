const entryForm = document.getElementById('entryForm');
const entriesSection = document.getElementById('entires');
const entryTextbox = document.getElementsByClassName('entry-textbox');

function addToEntryDom(event) {
  event.preventDefault();
  const entryDiv = document.createElement('div');
  entryDiv.className = 'single-entry';
  entryDiv.innerHTML = entryTextbox[0].value;
  entriesSection.appendChild(entryDiv);
  //   console.log(entryTextbox[0].value);
}

entryForm.addEventListener('submit', addToEntryDom);
