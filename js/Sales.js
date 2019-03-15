'use strict';

var firstandpike = {
    name :'1st and Pike',
    minNumCust: 23,
    maxNumCust: 65,
    avgCookieSale: 6.3
  
    }

var seatac = {
    name :'SeaTac Airport',    
    minNumCust : 3,
    maxNumCust : 24,
    avgCookieSale : 1.2
    }

var seattlecenter = {
    name :'Seattle Center',    
    minNumCust : 11,
    maxNumCust : 38,
    avgCookieSale : 3.7
    }

var capitolhill= {
    name :'Capitol Hill',    
    minNumCust : 20,
    maxNumCust : 38,
    avgCookieSale : 2.3
    }

var alki = {
    name :'Alki',    
    minNumCust : 2,
    maxNumCust : 16,
    avgCookieSale : 4.6
    }

var stores = [firstandpike, seatac, seattlecenter, capitolhill, alki];    

  var StoreList = document.getElementById('store-list');
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

    numCust = getCustCount(stores[storeCount].minNumCust,stores[storeCount].maxNumCust);
    numCookies = Math.ceil(numCust * stores[storeCount].avgCookieSale);
    liEl.textContent = storetime + ": " + numCookies + " Cookies" ;
    

    StoreList.appendChild(liEl);
   
    totCookies = totCookies + numCookies;
  }

  liEl.textContent = "Total : " + totCookies + " Cookies"; 
  StoreList.appendChild(liEl);
 
  storeCount = storeCount + 1;
}

function getCustCount(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}
