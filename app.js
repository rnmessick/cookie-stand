cookieStand1 = {
  location: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  averageCookieSale: 6.3
}

cookieStand2 = {
  location: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  averageCookieSale: 1.2
}

cookieStand3 = {
  location: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  averageCookieSale: 3.7
}

cookieStand4 = {
  location: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  averageCookieSale: 2.3
}

cookieStand5 = {
  location: 'Alki',
  minCust: 2,
  maxCust: 16,
  averageCookieSale: 4.6,
  hourlyCookieSale: function(){
    var cookiesByHour = ((this.minCust * this.maxCust)/2);
  }
}



