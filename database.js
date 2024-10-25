// to initialize database with firebase
import {initializeApp} from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js';
// to use the required functions from the firebase
import {getDatabase, ref, push, onValue, remove} from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js';
// configuring database
const appSettings = {
  databaseURL: "https://dropshipping-a4035-default-rtdb.firebaseio.com/"
}
// connecting the database
const app = initializeApp(appSettings);
const database = getDatabase(app);
const itemsInDB = ref(database, "items");

// a function select all the add to cart buttons looping throught it then getting the required values
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener('click', (e)=>{
    var item = e.target.closest(".items");
    var name = item.querySelector('.product-name').innerHTML;
    var quantity = item.querySelector('.quantity').value;
    var rate = item.querySelector('.rate').querySelector('p').innerHTML;
    push(itemsInDB, name);
  })  
});

// using the onValue method to get the value from the database
onValue(itemsInDB, function(snapshot){
  // this line below is used to convert object into arrays
  // use Object.values for getting the values only from the object
  // use Object.keys for getting the keys only from the object
  // use Object.entries for getting the both keys and values from the object
  if (snapshot.exists()){
    const items = Object.values(snapshot.val());
    items.forEach(e => {
  });
  }else{
    console.log("No items in the database");
  }
});

// to remove from the database
// remove method takes 1 param that is the ref of the daabase with the location and id of the data to be taken out
// remove(ref(database, `items/${id}`));