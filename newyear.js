var n = new Date("jan 1, 2021 00:00:00").getTime();
var intervalsetting = setInterval(function(){
   
    var currenttime = new Date().getTime();
    var diff = n - currenttime;
    
    var days = Math.floor(diff/(1000*60*60*24));
    var hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((diff%(1000*60*60))/(1000*60));
    var seconds = Math.floor((diff%(1000*60))/(1000));
    
    document.querySelector("#daycount").textContent = days;
    document.querySelector("#hourcount").textContent = hours;
    document.querySelector("#minutecount").textContent = minutes;
    document.querySelector("#secondcount").textContent = seconds;
    
    if(days < 0)
    {
        window.location.replace("newpage.html");
    }
},1000);
