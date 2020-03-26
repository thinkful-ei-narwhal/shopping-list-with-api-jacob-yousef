const items = [];
const hideCheckedItems = false;

function findById(id) {
  return this.items.find(item => item.id === id);
}

const findAndUpdate = function (id, newData) {
  const item = this.findById(id)
  Object.assign(item, newData)
}


function addItem(item) {
   this.items.push(item);
}

function findAndDelete(id) {
  this.items = this.items.filter(item => item.id !== id);
}

function toggleCheckedFilter() {
  this.hideCheckedItems = !this.hideCheckedItems;
}


export default {
  items,
  hideCheckedItems,
  findAndUpdate,
  findById,
  addItem,
  findAndDelete,
  toggleCheckedFilter
};
