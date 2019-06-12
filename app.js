// 'use strict';
//building constructor
var allCookieStoresArray = [];

var storeUlEl = document.getElementById('store-container');

function CookieStore (location, minCustomer, maxCustomer, averageCookieSale){
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.averageCookieSale = averageCookieSale;
  this.totalsPerHour = [];
  this.cookiePerHourPerStoreArray = [];
  allCookieStoresArray.push(this);
  this.calculateCustomersPerHour();
  this.calculateCookiesSoldInOneHour();
  this.calculateTotalsPerHour();
}

CookieStore.prototype.calculateCustomersPerHour = function(){
  var customers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
  console.log('calculateCustomerPerHour ' + customers);
  return customers; 
};

CookieStore.prototype.calculateCookiesSoldInOneHour = function(){
  //multiply an amount of customers by the average amount of cookies
  var customersInAnHour = this.calculateCustomersPerHour();
  var cookies = Math.floor(this.averageCookieSale * customersInAnHour);
  console.log('calculateCookiesSoldInOneHour' + cookies);
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
  console.log('calculateTotalsPerHour ' + total);
};

CookieStore.prototype.render = function() {
  var trEl = document.createElement('tr');
  trEl.textContent = this.location;
  storeUlEl.appendChild(trEl);

  for(var i = 0; i < this.cookiePerHourPerStoreArray.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiePerHourPerStoreArray[i];
    trEl.appendChild(tdEl);
  }
  storeUlEl.appendChild(trEl);
};
//1. reference the parent
var trEl = document.createElement('tr');

//2. create element
var totalTdEl = document.createElement('td');
// 3. fill new element with content
totalTdEl.textContent = 'Total: ' + this.total;
trEl.appendChild(totalTdEl);
//4.append to parents
storeUlEl.appendChild(trEl);


//creating my new store objects
allCookieStoresArray.push(new CookieStore('1st and Pike', 23, 65, 6.3));
allCookieStoresArray.push(new CookieStore('SeaTac Airport', 3, 24, 1.2));
allCookieStoresArray.push(new CookieStore('Seattle Center', 11, 38, 3.7));
allCookieStoresArray.push(new CookieStore('Capitol Hill', 20, 38, 2.3));
allCookieStoresArray.push(new CookieStore('Alki', 2, 16, 4.6));

