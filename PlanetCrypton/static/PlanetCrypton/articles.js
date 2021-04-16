document.addEventListener('DOMContentLoaded', function() {



    let url21 = "https://min-api.cryptocompare.com/data/v2/news/?lang=EN", 
    qString21 ="&api_key=" + "2aa87ad23752714f5ee27f3ec3af630d049532705f0f28dd240eb41a7fdee64a" ;

    fetch(url21 + qString21)
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
        
        var newselement = document.getElementById('newselement');
        var previous = document.getElementById('previous');
        var next = document.getElementById('next');
        
        

        var fulllist = [];
        var page = 0;

        
       
        
        for (var i = 1; i < Data.length; i++) {

        var Containersummary = document.createElement("div");
        Containersummary.setAttribute('id','artsum');
        Containersummary.innerText = Data[i].body; 
        var Containerimage = document.createElement("img");
        Containerimage.setAttribute('id','artimg');
        Containerimage.src = Data[i].imageurl;
        var Containername = document.createElement("div");
        Containername.setAttribute('id','arttit');
        Containername.innerText = Data[i].title;
        var Containerurl = document.createElement("a");
        Containerurl.setAttribute('href', Data[i].url);
        Containerurl.innerText =  Data[i].url;
        Containerurl.setAttribute('id','arturl');
        var arrayList = document.createElement("div");
        var hr = document.createElement("hr")
        hr.setAttribute('id','brake');
        var br = document.createElement("br")
        arrayList.appendChild(Containername);
        arrayList.appendChild(Containerimage);
        arrayList.appendChild(Containersummary);
        arrayList.appendChild(Containerurl);
        arrayList.appendChild(br);
        arrayList.appendChild(hr);
        fulllist.push(arrayList);

        }

        for (var i = 0; i < page + 11; i++){
            newselement.appendChild(fulllist[i]);
        } 

        next.addEventListener("click", () => {
            page == fulllist.lenght - 11 ? (page=0) : (page+= 11);
            if ( page >= 0) { previous.style.display = 'block'};
            if ( page >= 44) { next.style.display = 'none'};
            newselement.innerHTML = "";
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            for (var i = page ; i < page + 11; i++ ) {
                newselement.appendChild(fulllist[i]);
            }
        })
        
        previous.addEventListener("click", () => {
            page < 0 ? (page = fulllist.lenght - 11) : (page -= 11);
            if ( page <= 11) { previous.style.display = 'none'} else {previous.style.display = 'block'};
            if ( page <= 50) {next.style.display = 'block'} ;
            newselement.innerHTML = "";
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            for (var i = page ; i < page + 11; i++ ) {
                newselement.appendChild(fulllist[i]);
            }
            
        })

        

    }
});
