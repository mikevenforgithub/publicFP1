




document.addEventListener('DOMContentLoaded', function() {
    


     
    fetch('/allfollowedcryptos')
      .then(response => response.json())
      .then(data => {

      // Print result
      console.log(data);
      
      for (i in data){
      console.log(data[i].crypto);
      window.mydata = data[i].crypto;
      }
      
      for (i in data){


        let url100 = `https://api.coingecko.com/api/v3/coins/${data[i].crypto}`;

        fetch(url100)
        .then(function (resp) {
        return resp.json();
        })
        .then(function (result){

            console.log(result);
            

            var container = document.getElementById('maincont');    
            

            var savedcrypto = document.createElement('div');
            savedcrypto.style.height = '200px';
            savedcrypto.style.width = '1200px';
            savedcrypto.style.marginTop = '20px';
            savedcrypto.style.backgroundColor = "rgba(255, 99, 132, 0.5)";
            
            

            var nameandlogo = document.createElement('div');
            nameandlogo.style.height = '200px';
            nameandlogo.style.width = '250px';
            
            nameandlogo.style.display = 'inline-block';
            nameandlogo.style.overflow = "hidden";
            
            var name = document.createElement('div');
            name.style.height = '60px';
            name.style.width = '250px';
            
            name.style.overflow = "hidden";
            var nm = document.createElement('h1');
            nm.innerHTML = result.name;
            lowernm = (result.name).toLowerCase()

            globalThis.logo = document.createElement('div');
            logo.style.height = '140px';
            logo.style.width = '250px';
            
            logo.style.overflow = "hidden";
            logo.setAttribute('id','cryptologo');
            logo.setAttribute('class','cryptologo');
            
            var cryptochart = document.createElement('div');
            cryptochart.style.height = '200px';
            cryptochart.style.width = '350px';
            
            cryptochart.style.display = 'inline-block';
            cryptochart.style.marginTop = '5px';
            cryptochart.style.overflow = "hidden";
            
            

            var marketdetails = document.createElement('div');
            marketdetails.style.height = '200px';
            marketdetails.style.width = '600px';
            
            marketdetails.style.display = 'inline-block';
            marketdetails.style.overflow = "hidden";

            var bin = document.createElement('div');
            bin.style.height = '50px';
            bin.style.width = '120px';
            
            bin.style.overflow = "hidden";
            
            var binform = document.createElement('form');
            binform.setAttribute('method','POST');
            binform.setAttribute('action',`/unfollow/${lowernm}/`);
           


            var binimage = document.createElement('input');
            binimage.setAttribute('src','data:image/jpeg;base64,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');
            binimage.style.height = '50px';
            binimage.style.width = '70px';
            binimage.style.overflow = "hidden";
            binimage.setAttribute('id', 'binimage');
            binimage.setAttribute('type', 'image');
            

            
            name.appendChild(nm);
            nameandlogo.appendChild(name);
            nameandlogo.appendChild(logo);
            savedcrypto.appendChild(nameandlogo);
            savedcrypto.appendChild(cryptochart);
            binform.appendChild(binimage);
            bin.appendChild(binform);
            bin.style.overflow = "hidden";
            binform.style.overflow = "hidden";
            marketdetails.appendChild(bin);
            marketdetails.style.overflow = "hidden";
            savedcrypto.appendChild(marketdetails);
            container.appendChild(savedcrypto);
            
            
            var img = document.createElement('img');
            img.style.marginLeft = '70px';
            img.style.marginTop = '20px';
            img.style.marginLeft = '70px';
            img.style.height = '100px';
            img.style.width = '100px';
            img.setAttribute('src', `${result.image.small}`) ;
            logo.appendChild(img);

            var currentprice = document.createElement('div');
            currentprice.style.height = "60px";
            currentprice.style.width = "350px";
            
            cryptochart.appendChild(currentprice);

            var currprice = document.createElement('h2'); 
            currprice.innerText = "Current Price : " + result.market_data.current_price.usd;
            currentprice.appendChild(currprice);
            currentprice.style.overflow = "hidden";
            currprice.style.overflow = "hidden";

            var highcontainer = document.createElement('div');
            highcontainer.style.marginTop = "-20px";
            highcontainer.style.height = "65px";
            highcontainer.style.width = "175px";
            
            highcontainer.style.display = 'inline-block';
            highcontainer.style.overflow = "hidden";
            cryptochart.appendChild(highcontainer);

            var high24 = document.createElement('h3'); 
            high24.innerText = "Highest 24h : " + result.market_data.high_24h.usd;
            high24.style.overflow = "hidden";
            highcontainer.appendChild(high24);

            var lowcontainer = document.createElement('div');
            lowcontainer.style.height = "65px";
            lowcontainer.style.width = "175px";
            
            lowcontainer.style.overflow = "hidden";
            lowcontainer.style.display = 'inline-block';
            cryptochart.appendChild(lowcontainer);

            var low24 = document.createElement('h3'); 
            low24.innerText = "Lowest 24h : " + result.market_data.low_24h.usd;
            low24.style.overflow = "hidden";
            lowcontainer.appendChild(low24);

            var updatedon = document.createElement('div');
            updatedon.style.height = "60px";
            updatedon.style.width = "350px";
            
            cryptochart.appendChild(updatedon);

            var update = document.createElement('h5'); 
            update.innerText = "Updated on the : " + result.market_data.last_updated;
            updatedon.appendChild(update);
            update.style.overflow = "hidden";
            update.style.overflow = "hidden";

            var moreinfocontainer = document.createElement('div');
            moreinfocontainer.style.height = '80px';
            moreinfocontainer.style.width = '180px';
            moreinfocontainer.style.borderTop = '60px';
            marketdetails.appendChild(moreinfocontainer);

            var moreinfobutton = document.createElement('button');
            var moreinfobuttonform = document.createElement('form');
            moreinfobuttonform.setAttribute('action',`/singlecrypto/${result.id}`);
            moreinfobutton.style.overflow = "hidden";
            moreinfobutton.setAttribute('id','infobutton');
            moreinfobutton.innerText = "More Info"
            moreinfobuttonform.appendChild(moreinfobutton);
            moreinfocontainer.appendChild(moreinfobuttonform);


         
        })

      } 
   
    });

});




