import cuid from 'cuid';

function validateName(name) {
  if (!name) {
    throw new TypeError("Name must not be blank");
  }
}

function create(name) {
  return {
    id: cuid(),
    name,
    checked: false
  }
}

fetch('https://thinkful-list-api.herokuapp.com/ei-student/items')
  .then(res => res.json())
  .then(data => console.log(data));


export default {
  validateName,
  create,
}
