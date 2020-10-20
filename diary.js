const entryForm = document.getElementById('entryForm');
const entriesSection = document.querySelector('#entries');
const entryTextbox = document.querySelector('.entry-textbox');
const entriesNav = document.querySelector('.entries-nav');

let count = 1;
function addToEntryDom(event) {
  event.preventDefault();
  const entryDiv = document.createElement('div');
  entryDiv.className = 'single-entry';
  entryDiv.innerHTML = entryTextbox.value;
  entryDiv.style.display = 'none';
  console.log(entryDiv);
  entriesSection.appendChild(entryDiv);
  //   code for clearing textbox after pressing submit button
  entryTextbox.value = '';

  const displayEntryButton = document.createElement('button');
  displayEntryButton.className = 'display-entry-button';
  displayEntryButton.innerText = count;
  entriesNav.appendChild(displayEntryButton);
  displayEntryButton.addEventListener('click', function () {
    const allEntries = document.querySelectorAll('.single-entry');
    for (let i = 0; i < allEntries.length; i++) {
      allEntries[i].style.display = 'none';
    }
    entryDiv.style.display = 'block';
  });

  count++;
}

entryForm.addEventListener('submit', addToEntryDom);
