import $ from "jquery";
import api from './api';
import store from './store';
import shoppingList from "./shopping-list";



import "./index.css";

const main = function() {


  api.getItems()
  .then(res => res.json())
  .then((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });

  // // api.getItems()
  // //  .then(res => res.json())
  // //  .then(res => console.log(res));
  shoppingList.bindEventListeners();
  shoppingList.render();
};


$(main);
