const items = document.querySelector('.items');
const input = document.querySelector('.footer_input');
const addBtn = document.querySelector('.footer_button');

function onAdd() {      
      const text = input.value;
      if(text == '') {
        input.focus();
        return;
      }      
      const item = createItem(text);    
      items.appendChild(item);    
      item.scrollIntoView({block: 'center'});    
      input.value = '';
      input.focus();
}
let id = 0; //UUID
function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item_row');
    itemRow.setAttribute('data-id', id);
    itemRow.innerHTML = `
        <div class="item">
            <span class="item_name">${text}</span>
            <button class="item_delete" data-id=${id}>
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
        <div class="item_divider"></div>
    `;
    id++;
    return itemRow;
}

addBtn.addEventListener('click', () => {
    onAdd();
});

input.addEventListener('keypress', () => {
    if(event.key === 'Enter') {
        onAdd();
    }
})

items.addEventListener('click', event => {
    const id = event.target.dataset.id;
    if (id) {
        const toBeDeleted = document.querySelector(`.item_row[data-id="${id}"]`);
        toBeDeleted.remove();
    }         
});