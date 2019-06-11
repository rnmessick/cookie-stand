'use strict';

var hours = ['6am: ', '7am: ', '8am: ','9am: ','10am: ','11am: ','12am: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ', '8pm: '];

var pikeCookieStand = {
  location: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  averageCookieSale: 6.3,
  generateCustomers: function(){
    var min = this.minCust;
    var max = this.maxCust;
    return Math.floor(Math.random() * (max - min +1)) + min;
  },
  cookiesByHour: function(){
    return this.generateCustomers() * this.averageCookieSale;
  }
};

var seaTacAirportCookieStand = {
  location: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  averageCookieSale: 1.2,
  generateCustomers: function(){
    var min = this.minCust;
    var max = this.maxCust;
    return Math.floor(Math.random() * (max - min +1)) + min;
  },
  cookiesByHour: function(){
    return this.generateCustomers() * this.averageCookieSale;
  }
};

var seattleCenterCookieStand = {
  location: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  averageCookieSale: 3.7,
  generateCustomers: function(){
    var min = this.minCust;
    var max = this.maxCust;
    return Math.floor(Math.random() * (max - min +1)) + min;
  },
  cookiesByHour: function(){
    return this.generateCustomers() * this.averageCookieSale;
  }
};

var capHillCookieStand = {
  location: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  averageCookieSale: 2.3,
  generateCustomers: function(){
    var min = this.minCust;
    var max = this.maxCust;
    return Math.floor(Math.random() * (max - min +1)) + min;
  },
  cookiesByHour: function(){
    return this.generateCustomers() * this.averageCookieSale;
  }
};

var alkiCookieStand = {
  location: 'Alki',
  minCust: 2,
  maxCust: 16,
  averageCookieSale: 4.6,
  generateCustomers: function(){
    var min = this.minCust;
    var max = this.maxCust;
    return Math.floor(Math.random() * (max - min +1)) + min;
  },
  cookiesByHour: function(){
    return this.generateCustomers() * this.averageCookieSale;
  }
};




