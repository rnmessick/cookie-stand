// 'use strict';

//building constructor
var allCookieStoresArray = [];
function CookieStore (location, minCustomer, maxCustomer, averageCookieSale){
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.averageCookieSale = averageCookieSale;
}

// CookieStore.prototype.calculateCustomersPerHour = function(){
//   var customers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;

//   return customers;
// };

// CookieStore.prototype.calculateCookiesSoldInOneHour = function(){
//   //multiply an amount of customers by the average amount of cookies
//   var customersInAnHour = this.calculateCustomersPerHour();
//   var cookies = this.averageCookieSale * customersInAnHour;
//   return cookies;
// };

// CookieStore.prototype.calculateTotalsPerHour = function(){
//   for(var i = 0; i < 15; i++){
//     var totalInOneHour = this.calculateCookiesSoldInOneHour();
//     this.totalsPerHour.push(totalInOneHour);
//     total +=

//   }

allCookieStoresArray.push(new CookieStore('1st and Pike', 23, 65, 6.3));
allCookieStoresArray.push(new CookieStore('SeaTac Airport', 3, 24, 1.2));
allCookieStoresArray.push(new CookieStore('Seattle Center', 11, 38, 3.7));
allCookieStoresArray.push(new CookieStore('Capitol Hill', 20, 38, 2.3));
allCookieStoresArray.push(new CookieStore('Alki', 2, 16, 4.6));

var tableEl = document.getElementById('store-table');
var trEl = document.createElement('tr');
var tdEl = document.createElement('td');
tdEl.textContent = 'Location';

trEl.appendChild(tdEl);

tableEl.appendChild(trEl);
