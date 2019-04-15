let url = 'http://techvoices.club/update?name=2';

let jsonRequest = new XMLHttpRequest();
jsonRequest.open('GET',url,true);
jsonRequest.onload = function() {
    jsonData = JSON.parse(jsonRequest.responseText);
    console.log(jsonData);
    
    
    for (let t in jsonData.trades2) {

        if (jsonData.trades2[t].isBuyer === true) {
        //buy
        }

        else {
        //sell
        }
    }

    var buyTots = new Object;
    var buyCs = new Object;
    var sellTots = new Object;
    var sellCs = new Object;
    

    for (let p in jsonData.trades2) {
        if (jsonData.trades2[p].time > jsonData.least) {
            if (jsonData.trades2[p].isBuyer) {
                if (buyTots[jsonData.trades2[p].symbol] == undefined) {
                    buyTots[jsonData.trades2[p].symbol] = 0
                    buyCs[jsonData.trades2[p].symbol] = 0
                }
                buyCs[jsonData.trades2[p].symbol]++
                buyTots[jsonData.trades2[p].symbol] += (parseFloat(jsonData.trades2[p].price))
            }
            else {
                if (sellTots[jsonData.trades2[p].symbol] == undefined) {
                    sellTots[jsonData.trades2[p].symbol] = 0
                    sellCs[jsonData.trades2[p].symbol] = 0
                }
                sellCs[jsonData.trades2[p].symbol]++
                sellTots[jsonData.trades2[p].symbol] += (parseFloat(jsonData.trades2[p].price))
        
            }
        }
    }

    console.log(buyTots);
    console.log(buyCs);
    console.log(sellTots);
    console.log(sellCs);

    console.log(Object.keys(buyCs));

    console.log(Object.keys(sellCs));

    let buyCsKeys = Object.keys(buyCs);
    let sellCsKeys= Object.keys(sellCs);

    for (let i in buyCsKeys) {
        let currentBuyCsItem = buyCsKeys[i];
        for (let i in sellCsKeys) {
            if (sellCsKeys[i] === currentBuyCsItem) {
                if (buyCs[currentBuyCsItem] === sellCs[currentBuyCsItem]) {
                    let difference = sellTots[currentBuyCsItem] - buyTots[currentBuyCsItem];
                    if (difference > 0) {
                        var color = 'blue';
                    }
                    else {
                        var color = 'red';
                    }
                    console.log(currentBuyCsItem + ': ' + buyCs[currentBuyCsItem]);
                    let table = document.getElementById('resultsTable');
                    table.innerHTML += `<tr><td>${currentBuyCsItem}</td><td class=${color}>${difference}</td></tr>`;
                }
            }
        }
    }

}

jsonRequest.send();
