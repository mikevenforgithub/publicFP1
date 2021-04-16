document.addEventListener('DOMContentLoaded', function() {



    let url41 = "https://blockchain.info/q/getdifficulty";

    fetch(url41)
    .then(function(resp) {
    return resp.json();
    })
    .then(function(data){
        appendData(data);
        console.log(data);
    })
    .catch(function(err){
        console.log(err);
    })

    function appendData(data) {

        var numbercontainer1 = document.getElementById('numbercontainer1');

        numbercontainer1.innerText = (data / 10000000000000).toFixed(5);
        

    }
});

document.addEventListener('DOMContentLoaded', function() {



    let url42 = "https://blockchain.info/q/getblockcount";

    fetch(url42)
    .then(function(resp) {
    return resp.json();
    })
    .then(function(data){
        appendData(data);
        console.log(data);
    })
    .catch(function(err){
        console.log(err);
    })

    function appendData(data) {

        var numbercontainer1 = document.getElementById('numbercontainer2');

        numbercontainer1.innerText = data;
        

    }
});


document.addEventListener('DOMContentLoaded', function() {



    let url43 = "https://blockchain.info/q/avgtxnumber";

    fetch(url43)
    .then(function(resp) {
    return resp.json();
    })
    .then(function(data){
        appendData(data);
        console.log(data);
    })
    .catch(function(err){
        console.log(err);
    })

    function appendData(data) {

        var numbercontainer1 = document.getElementById('numbercontainer3');

        numbercontainer1.innerText = data;
        

    }
});


document.addEventListener('DOMContentLoaded', function() {



    let url44 = "https://blockchain.info/q/bcperblock";

    fetch(url44)
    .then(function(resp) {
    return resp.json();
    })
    .then(function(data){
        appendData(data);
        console.log(data);
    })
    .catch(function(err){
        console.log(err);
    })

    function appendData(data) {

        var numbercontainer1 = document.getElementById('numbercontainer4');

        numbercontainer1.innerText = data;
        

    }
});


document.addEventListener('DOMContentLoaded', function() {



    let url45 = "https://blockchain.info/q/totalbc";

    fetch(url45)
    .then(function(resp) {
    return resp.json();
    })
    .then(function(data){
        appendData(data);
        console.log(data);
    })
    .catch(function(err){
        console.log(err);
    })

    function appendData(data) {

        var numbercontainer1 = document.getElementById('numbercontainer5');

        numbercontainer1.innerText = data;
        

    }
});


document.addEventListener('DOMContentLoaded', function() {



    let url46 = "https://blockchain.info/q/probability";

    fetch(url46)
    .then(function(resp) {
    return resp.json();
    })
    .then(function(data){
        appendData(data);
        console.log(data);
    })
    .catch(function(err){
        console.log(err);
    })

    function appendData(data) {

        var numbercontainer1 = document.getElementById('numbercontainer6');

        numbercontainer1.innerText = data;
        

    }
});


document.addEventListener('DOMContentLoaded', function() {



    let url47 = "https://blockchain.info/q/hashestowin";

    fetch(url47)
    .then(function(resp) {
    return resp.json();
    })
    .then(function(data){
        appendData(data);
        console.log(data);
    })
    .catch(function(err){
        console.log(err);
    })

    function appendData(data) {

        var numbercontainer1 = document.getElementById('numbercontainer7');

        numbercontainer1.innerText = data;
        

    }
});


document.addEventListener('DOMContentLoaded', function() {



    let url48 = "https://blockchain.info/q/nextretarget";

    fetch(url48)
    .then(function(resp) {
    return resp.json();
    })
    .then(function(data){
        appendData(data);
        console.log(data);
    })
    .catch(function(err){
        console.log(err);
    })

    function appendData(data) {

        var numbercontainer1 = document.getElementById('numbercontainer8');

        numbercontainer1.innerText = data;
        

    }
});


document.addEventListener('DOMContentLoaded', function() {



    let url49 = "https://blockchain.info/q/avgtxsize";

    fetch(url49)
    .then(function(resp) {
    return resp.json();
    })
    .then(function(data){
        appendData(data);
        console.log(data);
    })
    .catch(function(err){
        console.log(err);
    })

    function appendData(data) {

        var numbercontainer1 = document.getElementById('numbercontainer9');

        numbercontainer1.innerText = data.toFixed(2);
        

    }
});


document.addEventListener('DOMContentLoaded', function() {



    let url50 = "https://blockchain.info/q/avgtxvalue";

    fetch(url50)
    .then(function(resp) {
    return resp.json();
    })
    .then(function(data){
        appendData(data);
        console.log(data);
    })
    .catch(function(err){
        console.log(err);
    })

    function appendData(data) {

        var numbercontainer1 = document.getElementById('numbercontainer10');

        numbercontainer1.innerText = data;
        

    }
});


document.addEventListener('DOMContentLoaded', function() {



    let url51 = "https://blockchain.info/q/interval";

    fetch(url51)
    .then(function(resp) {
    return resp.json();
    })
    .then(function(data){
        appendData(data);
        console.log(data);
    })
    .catch(function(err){
        console.log(err);
    })

    function appendData(data) {

        var numbercontainer1 = document.getElementById('numbercontainer11');

        numbercontainer1.innerText = data.toFixed(2);
        

    }
});


document.addEventListener('DOMContentLoaded', function() {



    let url52 = "https://blockchain.info/q/eta";

    fetch(url52)
    .then(function(resp) {
    return resp.json();
    })
    .then(function(data){
        appendData(data);
        console.log(data);
    })
    .catch(function(err){
        console.log(err);
    })

    function appendData(data) {

        var numbercontainer1 = document.getElementById('numbercontainer12');

        numbercontainer1.innerText = data.toFixed(2);
        

    }
});

