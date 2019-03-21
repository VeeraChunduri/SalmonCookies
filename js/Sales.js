'use strict';
function Cookies(name,minNumCust,maxNumCust,avgCookieSale) {
  this.name = name;
  this.minNumCust = minNumCust;
  this.maxNumCust = maxNumCust;
  this.avgCookieSale = avgCookieSale;
}
Cookies.prototype.getCustCount=function(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}

var firstandpike = new Cookies('1st and Pike',23,65,6.3);
var seatac = new Cookies('SeaTac Airport',3,24,1.2);
var seattlecenter = new Cookies('Seattle Center',11,38,3.7);
var capitolhill = new Cookies('Capitol Hill',20,38,2.3);
var alki = new Cookies('Alki',2,16,4.6);

var stores = [firstandpike, seatac, seattlecenter, capitolhill, alki];    

  var StoreList = document.getElementById('store-sales');
  var storetime;
  var numCust;
  var numCookies;
  var storeCount =0;
    while (storeCount < stores.length) {

    var totCookies = 0;

    var liEl = document.createElement('li');

    liEl.textContent = 'Store Name : ' + stores[storeCount].name;
    
    StoreList.appendChild(liEl);

  for (var i = 6; i <= 21; i++) {  
    if (i < 12) {
        storetime = i + ' am' } 
    else if (i===12) {
        storetime = i + ' pm' 
    }
    else if (i > 12) {
        storetime = (i-12) + ' pm' 
    }

    var liEl = document.createElement('li');

    numCust = stores[storeCount].getCustCount(stores[storeCount].minNumCust,stores[storeCount].maxNumCust);
    numCookies = Math.ceil(numCust * stores[storeCount].avgCookieSale);
    liEl.textContent = storetime + ": " + numCookies + " Cookies" ;
    

    StoreList.appendChild(liEl);
   
    totCookies = totCookies + numCookies;
  }

  liEl.textContent = "Total : " + totCookies + " Cookies"; 
  StoreList.appendChild(liEl);

  storeCount = storeCount + 1;
}
