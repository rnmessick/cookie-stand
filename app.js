// 'use strict';
//building constructor
var allCookieStoresArray = [];

var hours = ['6am', '7am', '8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm', '8pm'];

var storeTableEl = document.getElementById('store-container');

function CookieStore (location, minCustomer, maxCustomer, averageCookieSale){
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.averageCookieSale = averageCookieSale;
  this.totalsPerHour = [];
  this.cookiePerHourPerStoreArray = [];
  this.calculateCustomersPerHour();
  this.calculateCookiesSoldInOneHour();
  this.calculateTotalsPerHour();
}

CookieStore.prototype.calculateCustomersPerHour = function(){
  var customers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
  // console.log('calculateCustomerPerHour ' + customers);
  return customers; 
};

CookieStore.prototype.calculateCookiesSoldInOneHour = function(){
  //multiply an amount of customers by the average amount of cookies
  var customersInAnHour = this.calculateCustomersPerHour();
  var cookies = Math.floor(this.averageCookieSale * customersInAnHour);
  // console.log('calculateCookiesSoldInOneHour' + cookies);
  return cookies;
};

CookieStore.prototype.calculateTotalsPerHour = function(){
  var total = 0;
  for(var i = 0; i < 15; i++){
    var totalInOneHour = this.calculateCookiesSoldInOneHour();
    this.totalsPerHour.push(totalInOneHour);
    total += totalInOneHour;
  }
  this. total = total;
  // console.log('calculateTotalsPerHour ' + total);
};

//creating my new store objects
allCookieStoresArray.push(new CookieStore('1st and Pike', 23, 65, 6.3));
allCookieStoresArray.push(new CookieStore('SeaTac Airport', 3, 24, 1.2));
allCookieStoresArray.push(new CookieStore('Seattle Center', 11, 38, 3.7));
allCookieStoresArray.push(new CookieStore('Capitol Hill', 20, 38, 2.3));
allCookieStoresArray.push(new CookieStore('Alki', 2, 16, 4.6));

// Call to render the table elements
var renderTable = function() {
  // Create a table row
  var trEl = document.createElement('tr');
  storeTableEl.appendChild(trEl);

  // Create table header "Stores"
  var thEl = document.createElement('th');
  thEl.textContent = 'Stores';
  trEl.appendChild(thEl);

  // Iterate through store hours and create new table headers. ex 6am -8pm
  for (var k = 0; k < hours.length; k++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[k];
    trEl.appendChild(thEl);
  }

  // Create final column with "Daily Totals"
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Totals';
  trEl.appendChild(thEl);

  // Create a new table row
  trEl = document.createElement('tr');
  storeTableEl.appendChild(trEl);

  // Iterate through cookies store array
  for(var i = 0; i < allCookieStoresArray.length; i++) {
    // Create table data element with location name
    var tdEl = document.createElement('td');
    tdEl.textContent = allCookieStoresArray[i].location;
    trEl.appendChild(tdEl);

    // Iterated through total cookies per hour for each store
    for (var j = 0; j < allCookieStoresArray[i].totalsPerHour.length; j++) {
      // Create new table data element for each data point
      tdEl = document.createElement('td');
      tdEl.textContent = allCookieStoresArray[i].totalsPerHour[j];
      trEl.appendChild(tdEl);

      // Check if we are at the end of the store array; if so create a new table row
      if (allCookieStoresArray[i].totalsPerHour.length - 1 === j) {
        // Create table data with final total for each store
        tdEl = document.createElement('td');
        tdEl.textContent = allCookieStoresArray[i].total;
        trEl.appendChild(tdEl);

        // Create a new table row the next store
        trEl = document.createElement('tr');
        storeTableEl.appendChild(trEl);
        break;
      }
    }
    //create footer row with totals by hour/allstores


  }

};

var CookieForm = function(location, min, max, avg) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg;
};

var form = document.getElementById('storeForm');

var handleFormSubmit = function(formSubmitEvent) {
  formSubmitEvent.preventDefault();

  var location = formSubmitEvent.target.location.value;
  var min = parseInt(formSubmitEvent.target.min.value);
  var max = parseInt(formSubmitEvent.target.max.value);
  var avg = parseInt(formSubmitEvent.target.avg.value);

  console.log(location);
  console.log(min);
  console.log(max);
  console.log(avg);


  var newCookieStore = new CookieForm(location, min, max, avg);

  console.log(newCookieStore);

  allCookieStoresArray.push(new CookieStore(newCookieStore.location, newCookieStore.min, newCookieStore.max, newCookieStore.avg));
  // allCookieStoresArray.push(newCookieStore);

  console.log(allCookieStoresArray);

  storeTableEl.innerHTML = '';
  document.getElementById('storeForm').reset();
  renderTable();

};

form.addEventListener('submit', handleFormSubmit);

renderTable();
