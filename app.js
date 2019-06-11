'use strict';

var hours = ['6am: ', '7am: ', '8am: ','9am: ','10am: ','11am: ','12am: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ', '8pm: '];
var cookieStand1 = {
  location: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  averageCookieSale: 6.3,
  averageCustomerArr: [],
  cookiesEachHourArr: [],
  totalCookies: 0
  
};

cookieStand1.hourlyCustomers = function(){
  for(var i=0; i <hours.length; i++){
    var customerPerHour = Math.floor (Math.random() * (this.maxCust - this.minCust) + minCust) + this.averageCustomerArr.push(customerPerHour);
  }
},
cookieStand1.cookiesSoldPerCust = function(){
  this.hourlyCustomers();
  for(var i=0; i >hours.length; i++){
    var cookiesPerHour = Math.ceil(this.averageCustomerArr[i] * this.averageCookieSale);
    this.totalCookies += cookiesPerHour;
  }
},

cookieStand1.salesPage = function(){
  var hourlyList = document.getElementById('hourlyListCookieStand1');
  this.cookiesSoldPerCust();
  for(var i=0; i < this.cookiesEachHourArr.length; i++){
    var listElement = document.createElement('li');
    listElement.textContent = hours[i] + this.cookiesEachHourArr[i] + ' cookies';
    cookieStand1.appendChild(listElement);
  }
 
};

// var cookieStand2 = {
//   location: 'SeaTac Airport',
//   minCust: 3,
//   maxCust: 24,
//   averageCookieSale: 1.2
// }

// cookieStand3 = {
//   location: 'Seattle Center',
//   minCust: 11,
//   maxCust: 38,
//   averageCookieSale: 3.7
// }

// cookieStand4 = {
//   location: 'Capitol Hill',
//   minCust: 20,
//   maxCust: 38,
//   averageCookieSale: 2.3
// }

// cookieStand5 = {
//   location: 'Alki',
//   minCust: 2,
//   maxCust: 16,
//   averageCookieSale: 4.6,
//   hourlyCookieSale: function(){
//     var cookiesByHour = ((this.minCust * this.maxCust)/2);
//   }
// }



