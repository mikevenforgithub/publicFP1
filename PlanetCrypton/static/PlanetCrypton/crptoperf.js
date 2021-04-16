




document.addEventListener('DOMContentLoaded', function() {
    

        
    

        const searchInput = document.getElementById("searchbar"); 
        
        searchInput.addEventListener('keyup', (event) => {
        var centerbox = document.getElementById('newcharts');
        centerbox.innerHTML = "";    
        var searchString = event.target.value;

        currencies = ['bitcoin','litecoin','ethereum',
                      'maker','tether','cardano',
                      'polkadot','uniswap','chainlink',
                      'stellar','dogecoin','cosmos',
                      'chilliz','tron','avalanche',
                      'tezos','sushi','algorand',
                      'near','neo','nexo'
                     ];

        var filteredCrypto = currencies.filter( (currency) => {
            return (currency.includes(searchString));  
        })
        

        var newArray = filteredCrypto.slice(0, 20); 




        console.log(filteredCrypto);
            
    
        newArray.forEach( function (i) {


            let url51 = `https://api.coingecko.com/api/v3/coins/${i}/market_chart?vs_currency=USD&days=30&interval=daily`; 
            

            fetch(url51)
            .then(function(resp) {
            return resp.json();
            })
            .then(function(data){
                appendData(data.prices);
                console.log(data.prices);
            })
            .catch(function(err){
                console.log(err);
            })

            function appendData(data) {   


                var centerbox = document.getElementById('newcharts');


                var canvas = document.createElement('canvas');
                canvas.setAttribute('id','canvas');
                var title = document.createElement('a');
                title.style.fontSize = "25px"
                title.innerText = `${i}`.toUpperCase();
                title.setAttribute('href', `/singlecrypto/${i}`);
                
                
                
                var wrapper = document.createElement('wrapper');
                wrapper.setAttribute('id','wrapper');
                wrapper.style.float = 'left';
                
                
                var ctx = canvas.getContext('2d');
            
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
                            label: `${i} value in $` ,
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
                },});
                
                wrapper.appendChild(title);
                wrapper.appendChild(canvas);
                centerbox.appendChild(wrapper);
                
            }    
        }) 
     }); 
    
});
