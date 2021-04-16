

// script for the top 5 cryptocurrencies

document.addEventListener('DOMContentLoaded', function() {


    let url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", 
    qString ="?CMC_PRO_API_KEY=" + "67963354-ebb6-4bc3-a607-f653556460df" + "&start=1&limit=10&convert=USD";

    fetch(url + qString)
    .then(function(resp) {
        return resp.json();
        })
        .then(function(data){
            appendData(data.data);
            console.log(data.data);
        })
        .catch(function(err){
            console.log(err);
        })

        function appendData(data) {

            
            var Containername = document.getElementById("name");
            var Containersymbol = document.getElementById("symbol");
            var Containertousd = document.getElementById("tousd");
            

            for (var i = 0; i < data.length; i++) {
                
                var name = document.createElement("div");
                var symbol = document.createElement("div");
                var tousd = document.createElement("div");
                
                
                name.innerHTML =  data[i].name 
                symbol.innerHTML = data[i].symbol 
                tousd.innerHTML = "$" + (data[i].quote.USD.price).toFixed(2) ;
                
                Containername.appendChild(name);
                Containersymbol.appendChild(symbol);
                Containertousd.appendChild(tousd);    
                window.value =  data[i].name;   
                
                
                
            }
    }

});





 

// script for the carousel

document.addEventListener('DOMContentLoaded', function() {


    let url2 = "https://min-api.cryptocompare.com/data/v2/news/?lang=EN", 
    qString2 ="&api_key=" + "2aa87ad23752714f5ee27f3ec3af630d049532705f0f28dd240eb41a7fdee64a" ;

    fetch(url2 + qString2)
    .then(function(resp) {
    return resp.json();
    })
    .then(function(data){
        appendData(data.Data);
        console.log(data.Data);
    })
    .catch(function(err){
        console.log(err);
    })

    function appendData(Data) {


        var article0 = document.getElementById("firstarticle");
        article0.innerText = Data[0].body; 
        var image0 = document.getElementById("imagefirst");
        image0.src = Data[0].imageurl;
        var title0 = document.getElementById("firsttitle");
        title0.innerText = Data[0].title;
        var url0 = document.getElementById("firsturl");
        url0.setAttribute('href', Data[0].url);
        url0.innerText =  Data[0].url;
        var article1 = document.getElementById("secondarticle");
        article1.innerText = Data[1].body;
        var image1 = document.getElementById("imagesecond");
        image1.src = Data[1].imageurl;
        var title1 = document.getElementById("secondtitle");
        title1.innerText = Data[1].title;
        var url1 = document.getElementById("secondurl");
        url1.setAttribute('href', Data[1].url);
        url1.innerText =  Data[1].url;
        var article2 = document.getElementById("thirdarticle");
        article2.innerText = Data[2].body;
        var image2 = document.getElementById("imagethird");
        image2.src = Data[2].imageurl;
        var title2 = document.getElementById("thirdtitle");
        title2.innerText = Data[2].title;
        var url2 = document.getElementById("thirdurl");
        url2.setAttribute('href', Data[2].url);
        url2.innerText =  Data[2].url;
    
         
    }
});



// script for the diagram



document.addEventListener('DOMContentLoaded', function() {


    let url7 = "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=USD&days=30&interval=daily";
    
    fetch(url7)
    .then(function(resp) {
        return resp.json();
        })
        .then(function(data){
            usedata(data.prices);
            console.log(data.prices);
        })
        .catch(function(err){
            console.log(err);
        })

        function usedata(data) {
            var ctx = document.getElementById('chartbit').getContext('2d');

                var price0 =  data[[20]][1].toFixed(2) ;
                var price1  =  data[[21]][1].toFixed(2) ;
                var price2  =  data[[22]][1].toFixed(2) ;
                var price3  =  data[[23]][1].toFixed(2) ;
                var price4  =  data[[24]][1].toFixed(2) ;
                var price5  =  data[[25]][1].toFixed(2) ;
                var price6 =  data[[26]][1].toFixed(2) ;
                var price7  =  data[[27]][1].toFixed(2) ;
                var price8  =  data[[28]][1].toFixed(2) ;
                var price9  =  data[[29]][1].toFixed(2) ;
                var price10  =  data[[30]][1].toFixed(2) ;
                var prices = [];
                prices.push(price0);
                prices.push(price1);
                prices.push(price2);
                prices.push(price3);
                prices.push(price4);
                prices.push(price5);
                prices.push(price6);
                prices.push(price7);
                prices.push(price8);
                prices.push(price9);
                prices.push(price10);
                console.log(prices);
                
                var myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ["10days ago","9days ago","8days ago","7days ago","6days ago","5days ago","4days ago","3days ago","2days ago","1days ago","Today"],
                        datasets: [{
                            label: 'BITCOIN',
                            data: prices,
                            responsive: true,
                            maintainAspectRatio: true,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',

                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',

                            ],
                            borderWidth: 1
                        }]
                    },
        
            });
            
              

        }


});

document.addEventListener('DOMContentLoaded', function() {


    let url8 = "https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=USD&days=30&interval=daily";
    
    fetch(url8)
    .then(function(resp) {
        return resp.json();
        })
        .then(function(data){
            usedata(data.prices);
            console.log(data.prices);
        })
        .catch(function(err){
            console.log(err);
        })

        function usedata(data) {
            var ctx = document.getElementById('charteth').getContext('2d');

                var price0 =  data[[20]][1].toFixed(2) ;
                var price1  =  data[[21]][1].toFixed(2) ;
                var price2  =  data[[22]][1].toFixed(2) ;
                var price3  =  data[[23]][1].toFixed(2) ;
                var price4  =  data[[24]][1].toFixed(2) ;
                var price5  =  data[[25]][1].toFixed(2) ;
                var price6 =  data[[26]][1].toFixed(2) ;
                var price7  =  data[[27]][1].toFixed(2) ;
                var price8  =  data[[28]][1].toFixed(2) ;
                var price9  =  data[[29]][1].toFixed(2) ;
                var price10  =  data[[30]][1].toFixed(2) ;
                var prices = [];
                prices.push(price0);
                prices.push(price1);
                prices.push(price2);
                prices.push(price3);
                prices.push(price4);
                prices.push(price5);
                prices.push(price6);
                prices.push(price7);
                prices.push(price8);
                prices.push(price9);
                prices.push(price10);
                console.log(prices);
                
                var myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ["10days ago","9days ago","8days ago","7days ago","6days ago","5days ago","4days ago","3days ago","2days ago","1days ago","Today"],
                        datasets: [{
                            label: 'ETHEREUM',
                            data: prices,
                            backgroundColor: ['rgba(255, 99, 132, 0.2)', ],
                            borderColor: ['rgba(255, 99, 132, 1)', ],
                            borderWidth: 1
                        }]
                    },
        
            });    

        }

});

document.addEventListener('DOMContentLoaded', function() {


    let url3 = "https://min-api.cryptocompare.com/data/v2/news/?lang=EN", 
    qString3 ="&api_key=" + "2aa87ad23752714f5ee27f3ec3af630d049532705f0f28dd240eb41a7fdee64a" ;

    fetch(url3 + qString3)
    .then(function(resp) {
    return resp.json();
    })
    .then(function(data){
        appendData(data.Data);
        console.log(data.Data);
    })
    .catch(function(err){
        console.log(err);
    })

    function appendData(Data) {


        var article0 = document.getElementById("firstarticleblk");
        article0.innerText = Data[3].body; 
        var image0 = document.getElementById("imagefirstblk");
        image0.src = Data[3].imageurl;
        var title0 = document.getElementById("firsttitleblk");
        title0.innerText = Data[3].title;
        var url0 = document.getElementById("firsturlblk");
        url0.setAttribute('href', Data[3].url);
        url0.innerText =  Data[3].url;
        var article1 = document.getElementById("secondarticleblk");
        article1.innerText = Data[4].body;
        var image1 = document.getElementById("imagesecondblk");
        image1.src = Data[4].imageurl;
        var title1 = document.getElementById("secondtitleblk");
        title1.innerText = Data[4].title;
        var url1 = document.getElementById("secondurlblk");
        url1.setAttribute('href', Data[4].url);
        url1.innerText =  Data[4].url;
        var article2 = document.getElementById("thirdarticleblk");
        article2.innerText = Data[5].body;
        var image2 = document.getElementById("imagethirdblk");
        image2.src = Data[5].imageurl;
        var title2 = document.getElementById("thirdtitleblk");
        title2.innerText = Data[5].title;
        var url2 = document.getElementById("thirdurlblk");
        url2.setAttribute('href', Data[5].url);
        url2.innerText =  Data[5].url;
    
         
    }
});

document.addEventListener('DOMContentLoaded', function() {


    let url9 = "https://api.coingecko.com/api/v3/coins/litecoin/market_chart?vs_currency=USD&days=30&interval=daily";
    
    fetch(url9)
    .then(function(resp) {
        return resp.json();
        })
        .then(function(data){
            usedata(data.prices);
            console.log(data.prices);
        })
        .catch(function(err){
            console.log(err);
        })

        function usedata(data) {
            var ctx = document.getElementById('chartlite').getContext('2d');

                var price0 =  data[[20]][1].toFixed(2) ;
                var price1  =  data[[21]][1].toFixed(2) ;
                var price2  =  data[[22]][1].toFixed(2) ;
                var price3  =  data[[23]][1].toFixed(2) ;
                var price4  =  data[[24]][1].toFixed(2) ;
                var price5  =  data[[25]][1].toFixed(2) ;
                var price6 =  data[[26]][1].toFixed(2) ;
                var price7  =  data[[27]][1].toFixed(2) ;
                var price8  =  data[[28]][1].toFixed(2) ;
                var price9  =  data[[29]][1].toFixed(2) ;
                var price10  =  data[[30]][1].toFixed(2) ;
                var prices = [];
                prices.push(price0);
                prices.push(price1);
                prices.push(price2);
                prices.push(price3);
                prices.push(price4);
                prices.push(price5);
                prices.push(price6);
                prices.push(price7);
                prices.push(price8);
                prices.push(price9);
                prices.push(price10);
                console.log(prices);
                
                var myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ["10days ago","9days ago","8days ago","7days ago","6days ago","5days ago","4days ago","3days ago","2days ago","1days ago","Today"],
                        datasets: [{
                            label: 'LITECOIN',
                            data: prices,
                            responsive: true,
                            maintainAspectRatio: true,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',

                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',

                            ],
                            borderWidth: 1
                        }]
                    },
        
            });
            
              

        }


});

document.addEventListener('DOMContentLoaded', function() {


    let url10 = "https://api.coingecko.com/api/v3/coins/maker/market_chart?vs_currency=USD&days=30&interval=daily";
    
    fetch(url10)
    .then(function(resp) {
        return resp.json();
        })
        .then(function(data){
            usedata(data.prices);
            console.log(data.prices);
        })
        .catch(function(err){
            console.log(err);
        })

        function usedata(data) {
            var ctx = document.getElementById('chartmaker').getContext('2d');

                var price0 =  data[[20]][1].toFixed(2) ;
                var price1  =  data[[21]][1].toFixed(2) ;
                var price2  =  data[[22]][1].toFixed(2) ;
                var price3  =  data[[23]][1].toFixed(2) ;
                var price4  =  data[[24]][1].toFixed(2) ;
                var price5  =  data[[25]][1].toFixed(2) ;
                var price6 =  data[[26]][1].toFixed(2) ;
                var price7  =  data[[27]][1].toFixed(2) ;
                var price8  =  data[[28]][1].toFixed(2) ;
                var price9  =  data[[29]][1].toFixed(2) ;
                var price10  =  data[[30]][1].toFixed(2) ;
                var prices = [];
                prices.push(price0);
                prices.push(price1);
                prices.push(price2);
                prices.push(price3);
                prices.push(price4);
                prices.push(price5);
                prices.push(price6);
                prices.push(price7);
                prices.push(price8);
                prices.push(price9);
                prices.push(price10);
                console.log(prices);
                
                var myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ["10days ago","9days ago","8days ago","7days ago","6days ago","5days ago","4days ago","3days ago","2days ago","1days ago","Today"],
                        datasets: [{
                            label: 'MAKER',
                            data: prices,
                            responsive: true,
                            maintainAspectRatio: true,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',

                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',

                            ],
                            borderWidth: 1
                        }],

                        
                    },
        
            });
            
              

        }


});