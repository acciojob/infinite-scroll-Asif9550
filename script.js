//your code here!

// Select the list element
const infiList = document.getElementById('infi-list');

// Function to add list items
function addListItems(count) {
  const fragment = document.createDocumentFragment();
  for (let i = 1; i <= count; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `List Item ${infiList.children.length + 1}`;
    fragment.appendChild(listItem);
  }
  infiList.appendChild(fragment);
}

// Add initial 10 list items
addListItems(10);

// Event listener for infinite scroll
infiList.addEventListener('scroll', () => {
  // Check if the user has scrolled to the bottom
  if (infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight) {
    addListItems(2); // Add 2 more list items
  }
});
