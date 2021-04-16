





document.addEventListener('DOMContentLoaded', function() {


     var cryptoname = document.getElementById('cryptoname');
     console.log(cryptoname.innerHTML);
     var addcrypto = document.getElementById('addcrypto');
     var cryptolist = document.getElementById('addtocryptolist');
     
     if ( cryptolist.style.display == "block" ){
     addcrypto.setAttribute('href', `profile/add${cryptoname.innerHTML}`)
     } else { addcrypto.setAttribute('href', "") }
    

     let url9 = `https://api.coingecko.com/api/v3/coins/${cryptoname.innerHTML}`;
    
     fetch(url9)
     .then(function(resp) {
         return resp.json();
         })
         .then(function(data){
             appendData(data)
             console.log(data);
         })
         .catch(function(err){
             console.log(err);
         })

         function appendData(data) {
             
            var namebox = document.getElementById('singlecryptoname');
            namebox.style.color = "rgba(255, 99, 132, 0.7)";
            var namofcrypto = document.createElement('h2'); 
            namofcrypto.innerText = data.name;
            namofcrypto.setAttribute('id','namcrypto');
            namebox.appendChild(namofcrypto);
            

            var imgcont = document.getElementById('singlecryptoimage');
            var img = document.createElement('img');
            img.style.marginLeft = '30px';
            img.style.height = '80px';
            img.style.width = '80px';
            img.setAttribute('src', `${data.image.small}`) ;
            imgcont.appendChild(img);

            var description = document.getElementById('singlecryptodescription');
            description.style.color ='white';
            description.innerHTML = data.description.en;

            var sideright = document.getElementById('singlecryptosymbol');
            var symbol = document.createElement('div');
            var sbl = document.createElement('h4'); 
            sbl.innerHTML = 'Sybol : ' + data.symbol;
            sbl.setAttribute('id','sbl');
            sbl.style.color = "rgba(255, 99, 132, 0.7)";
            sbl.style.marginLeft = "10px";
            sideright.appendChild(symbol);
            symbol.appendChild(sbl);

            var marketdata = document.getElementById('marketdata');
            var currentprice = document.createElement('div');
            currentprice.innerText = 'Current price: $'+ data.market_data.current_price.usd;
            currentprice.style.fontWeight = 'bold';
            currentprice.style.fontSize = '20px';
            currentprice.style.color = 'rgba(255, 99, 132, 1)';
            var fluctuation = document.createElement('div');
            fluctuation.style.width = '187px';
            var high24 = document.createElement('div');
            high24.innerText = ' High 24h: $' + data.market_data.high_24h.usd;
            high24.style.color = 'rgba(255, 99, 132, 1)';
            
            high24.style.float = 'left';
            var low24 = document.createElement('div');
            low24.innerText = ' Low 24h: $' + data.market_data.low_24h.usd;
            
            low24.style.float = 'left';
            low24.style.color = 'rgba(255, 99, 132, 1)';
            
   
            marketdata.appendChild(currentprice);
            fluctuation.appendChild(high24);
            fluctuation.appendChild(low24);
            marketdata.appendChild(fluctuation);

            var tickerscontainer = document.getElementById('tickerscontainer');

            for (i = 0; i < 50; i++){
            var tickerbase = document.createElement('div');
            tickerbase.style.backgroundColor = "red";
            tickerbase.style.overflow = "hidden";
            tickerbase.style.height = "45px";
            tickerbase.style.width = "100px";
            tickerbase.style.display = "inline-block";
            tickerbase.innerHTML = data.tickers[i].base;
            var tickertarget = document.createElement('div');
            tickertarget.style.backgroundColor = "white";
            tickertarget.style.overflow = "hidden";
            tickertarget.style.height = "45px";
            tickertarget.style.width = "100px";
            tickertarget.style.display = "inline-block";
            tickertarget.innerHTML = data.tickers[i].target;
            var tickervolume = document.createElement('div');
            tickervolume.style.backgroundColor = "yellow";
            tickervolume.style.overflow = "hidden";
            tickervolume.style.height = "45px";
            tickervolume.style.width = "110px";
            tickervolume.style.display = "inline-block";
            tickervolume.innerHTML = data.tickers[i].volume.toFixed(2);
            var tickertime = document.createElement('div');
            tickertime.style.backgroundColor = "purple";
            tickertime.style.overflow = "hidden";
            tickertime.style.height = "45px";
            tickertime.style.width = "150px";
            tickertime.style.display = "inline-block";
            tickertime.innerHTML = data.tickers[i].timestamp;


            tickerscontainer.appendChild(tickerbase);
            tickerscontainer.appendChild(tickertarget);
            tickerscontainer.appendChild(tickervolume);
            tickerscontainer.appendChild(tickertime);
            }

            var piechart = document.getElementById('piechart');
            var totalsupply = data.market_data.max_supply
            var circulatingsupply = data.market_data.circulating_supply

            var circontot = ((circulatingsupply / totalsupply) * 100).toFixed(0);
            var unmined = 100 - circontot;

            console.log(totalsupply);
            console.log(circulatingsupply);
            console.log(circontot);
            console.log(unmined);


            if ( circontot != "Infinity"){
            var myPieChart = new Chart(piechart, {
                type: 'pie',
                data: {
                    datasets: [{
                        data: [circontot, unmined],
                        backgroundColor: ['rgb(63, 65, 118)',  'rgba(255, 99, 132, 1)'],
                            borderColor: ['rgba(255, 99, 132, 1)', 'rgb(63, 65, 118)', ],
                            borderWidth: 2,
                            
                    }],
                
                    // These labels appear in the legend and in the tooltips when hovering different arcs
                    labels: [
                        'Circulating Supply %',
                        'Not yet mined %',
                        
                    ]
                },
            });
            } else {
                var messagebox = document.getElementById('piechartcontainer');
                var message = document.createElement('h1');
                message.innerHTML = "Infinite Supply "
                message.style.marginLeft = "100px";
                message.style.marginTop = "-150px";
                message.style.zIndex = "1";
                message.style.position = "relative";
                message.style.fontSize = "50px";
                messagebox.appendChild(message);

                var myPieChart = new Chart(piechart, {
                    type: 'pie',
                    data: {
                        datasets: [{
                            data: [100],
                            backgroundColor: ['rgb(124, 222, 233)'],
                                borderColor: ['rgba(255, 99, 132, 1)'],
                                borderWidth: 2,
                            zIndex: 0,
                                
                        }],

                    },
                });



            }

            var pc24h = document.getElementById('24h');
            pc24h.innerHTML = data.market_data.price_change_percentage_24h;
            var pc7d = document.getElementById('7d');
            pc7d.innerHTML = data.market_data.price_change_percentage_7d;
            var pc14d = document.getElementById('14d');
            pc14d.innerHTML = data.market_data.price_change_percentage_14d;
            var pc30d = document.getElementById('30d');
            pc30d.innerHTML = data.market_data.price_change_percentage_30d;
            var pc60d = document.getElementById('60d');
            pc60d.innerHTML = data.market_data.price_change_percentage_60d;
            var pc200d = document.getElementById('200d');
            pc200d.innerHTML = data.market_data.price_change_percentage_200d;
            var pc1y = document.getElementById('1y');
            pc1y.innerHTML = data.market_data.price_change_percentage_1y;     
            
         }

});


document.addEventListener('DOMContentLoaded', function() {


    document.getElementById('OneWeek').addEventListener('click', () => {
        var todelete = document.getElementById('singlecryptochart');
        todelete.innerHTML = ""; 
        one_week();
    });

    document.getElementById('15Days').addEventListener('click', () => {
        var todelete = document.getElementById('singlecryptochart');
        todelete.innerHTML = ""; 
        fifteen();
    });

    document.getElementById('OneMonth').addEventListener('click', () => {
        var todelete = document.getElementById('singlecryptochart');
        todelete.innerHTML = ""; 
        one_month();
    });
    
    one_week();

});


function one_week(){
 

    var cryptoname = document.getElementById('cryptoname');
    console.log(cryptoname.innerHTML);


    let url91 = `https://api.coingecko.com/api/v3/coins/${cryptoname.innerHTML}/market_chart?vs_currency=USD&days=30&interval=daily`;
    
    fetch(url91)
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

            var ctx = document.getElementById('singlecryptochart').getContext('2d');

                var price3  =  data[[23]][1].toFixed(2) ;
                var price4  =  data[[24]][1].toFixed(2) ;
                var price5  =  data[[25]][1].toFixed(2) ;
                var price6 =  data[[26]][1].toFixed(2) ;
                var price7  =  data[[27]][1].toFixed(2) ;
                var price8  =  data[[28]][1].toFixed(2) ;
                var price9  =  data[[29]][1].toFixed(2) ;
                var price10  =  data[[30]][1].toFixed(2) ;
                var prices = [];
                
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
                        labels: ["7days ago","6days ago","5days ago","4days ago","3days ago","2days ago","1days ago","Today"],
                        datasets: [{
                            label: `${cryptoname.innerHTML}`.toUpperCase(),
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

}

function fifteen(){

    var todelete = document.getElementById('singlecryptochart');
    todelete.innerHTML = ""; 

    var cryptoname = document.getElementById('cryptoname');
    console.log(cryptoname.innerHTML);


    let url92 = `https://api.coingecko.com/api/v3/coins/${cryptoname.innerHTML}/market_chart?vs_currency=USD&days=30&interval=daily`;
    
    fetch(url92)
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

            var ctx = document.getElementById('singlecryptochart').getContext('2d');
                
                var price01 =  data[[15]][1].toFixed(2) ;
                var price11  =  data[[16]][1].toFixed(2) ;
                var price21  =  data[[17]][1].toFixed(2) ;
                var price31  =  data[[18]][1].toFixed(2) ;
                var price41  =  data[[19]][1].toFixed(2) ;
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
                prices.push(price01);
                prices.push(price11);
                prices.push(price21);
                prices.push(price31);
                prices.push(price41);
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
                        labels: ["15days ago","14days ago","13days ago","12days ago","11days ago","10days ago",
                        "9days ago","8days ago","7days ago","6days ago",
                        "5days ago","4days ago","3days ago","2days ago","1days ago","Today"],
                        datasets: [{
                            label: `${cryptoname.innerHTML}`.toUpperCase(),
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

}

function one_month(){

    var todelete = document.getElementById('singlecryptochart');
    todelete.innerHTML = ""; 

    var cryptoname = document.getElementById('cryptoname');
    console.log(cryptoname.innerHTML);


    let url93 = `https://api.coingecko.com/api/v3/coins/${cryptoname.innerHTML}/market_chart?vs_currency=USD&days=30&interval=daily`;
    
    fetch(url93)
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

            var ctx = document.getElementById('singlecryptochart').getContext('2d');
                
                
                var price22  =  data[[0]][1].toFixed(2) ;
                var price32  =  data[[1]][1].toFixed(2) ;
                var price42  =  data[[2]][1].toFixed(2) ;
                var price52  =  data[[3]][1].toFixed(2) ;
                var price62 =  data[[4]][1].toFixed(2) ;
                var price72  =  data[[5]][1].toFixed(2) ;
                var price82  =  data[[6]][1].toFixed(2) ;
                var price92  =  data[[7]][1].toFixed(2) ;
                var price102  =  data[[8]][1].toFixed(2) ;
                var price01 =  data[[9]][1].toFixed(2) ;
                var price11  =  data[[10]][1].toFixed(2) ;
                var price21  =  data[[11]][1].toFixed(2) ;
                var price31  =  data[[12]][1].toFixed(2) ;
                var price41  =  data[[13]][1].toFixed(2) ;
                var price51  =  data[[14]][1].toFixed(2) ;
                var price61 =  data[[15]][1].toFixed(2) ;
                var price71  =  data[[16]][1].toFixed(2) ;
                var price81  =  data[[17]][1].toFixed(2) ;
                var price91  =  data[[18]][1].toFixed(2) ;
                var price101  =  data[[19]][1].toFixed(2) ;
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
            
                prices.push(price22);
                prices.push(price32);
                prices.push(price42);
                prices.push(price52);
                prices.push(price62);
                prices.push(price72);
                prices.push(price82);
                prices.push(price92);
                prices.push(price102);
                prices.push(price01);
                prices.push(price11);
                prices.push(price21);
                prices.push(price31);
                prices.push(price41);
                prices.push(price51);
                prices.push(price61);
                prices.push(price71);
                prices.push(price81);
                prices.push(price91);
                prices.push(price101);
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
                        labels: ["30days ago","29days ago","28days ago","27days ago","26days ago","25days ago",
                        "24days ago","23days ago","22days ago","21days ago",
                        "20days ago","19days ago","18days ago","17days ago","16days ago","15days ago","14days ago","13days ago","12days ago","11days ago","10days ago",
                        "9days ago","8days ago","7days ago","6days ago",
                        "5days ago","4days ago","3days ago","2days ago","1days ago","Today"],
                        datasets: [{
                            label: `${cryptoname.innerHTML}`.toUpperCase(),
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

}


function save_crypto() {

    let cryptocurrency = document.querySelector('#singlecryptoname').value;
 
    
    fetch('/allfollowedcryptos', {
      method: 'POST',
      body: JSON.stringify({
          cryptocurrency: (cryptocurrency)
      })
    })
      .then(response => response.json())
      .then(result => {
          console.log(result);
        });
  
 }
 