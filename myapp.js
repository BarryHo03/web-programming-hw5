var skycons = new Skycons();

skycons.play(); 
/*
Get value from Bootstrap dropdown menu
*/
$(document).ready(function(){
    $(".dropdown-toggle").dropdown();
});

// $('#dropdown li').on('click', function(){
//     alert($(this).text());
// });

var $lists = $('#dropdown li a');
$lists.each(function(index, element) {
  var $lists = $(this);
  if(index === 0){ 
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Taipei%20City%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
      function(data){
      var currentTemp = data.query.results.channel.item.condition.temp;    
      var $temp = $('<span>').html(currentTemp +"&#8451;").css({"display":"inline-block","width": "50%", "text-align": "right"});   
      $lists.append($temp);
      }); 
  }
  if(index === 1){ 
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22New%20Taipei%20City%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
      function(data){
      var currentTemp = data.query.results.channel.item.condition.temp;    
      var $temp = $('<span>').html(currentTemp +"&#8451;").css({"display":"inline-block","width": "50%", "text-align": "right"});   
      $lists.append($temp);
      }); 
  }
  if(index === 2){ 
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Taichung%20City%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
      function(data){
      var currentTemp = data.query.results.channel.item.condition.temp;    
      var $temp = $('<span>').html(currentTemp +"&#8451;").css({"display":"inline-block","width": "50%", "text-align": "right"});   
      $lists.append($temp);
      }); 
  }
  if(index === 3){ 
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Tainan%20City%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
      function(data){
      var currentTemp = data.query.results.channel.item.condition.temp;    
      var $temp = $('<span>').html(currentTemp +"&#8451;").css({"display":"inline-block","width": "50%", "text-align": "right"});   
      $lists.append($temp);
      }); 
  }
  if(index === 4){ 
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Kaohsiung%20City%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
      function(data){
      var currentTemp = data.query.results.channel.item.condition.temp;    
      var $temp = $('<span>').html(currentTemp +"&#8451;").css({"display":"inline-block","width": "50%", "text-align": "right"});   
      $lists.append($temp);
      }); 
  }
  if(index === 5){ 
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Keelung%20City%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
      function(data){
      var currentTemp = data.query.results.channel.item.condition.temp;    
      var $temp = $('<span>').html(currentTemp +"&#8451;").css({"display":"inline-block","width": "50%", "text-align": "right"});   
      $lists.append($temp);
      }); 
  }
  if(index === 6){ 
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Taoyuan%20City%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
      function(data){
      var currentTemp = data.query.results.channel.item.condition.temp;    
      var $temp = $('<span>').html(currentTemp +"&#8451;").css({"display":"inline-block","width": "50%", "text-align": "right"});   
      $lists.append($temp);
      }); 
  }
  if(index === 7){ 
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Hsinchu%20City%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
      function(data){
      var currentTemp = data.query.results.channel.item.condition.temp;    
      var $temp = $('<span>').html(currentTemp +"&#8451;").css({"display":"inline-block","width": "50%", "text-align": "right"});   
      $lists.append($temp);
      }); 
  }
  if(index === 8){ 
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22%20Hsinchu%20County%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
      function(data){
      var currentTemp = data.query.results.channel.item.condition.temp;    
      var $temp = $('<span>').html(currentTemp +"&#8451;").css({"display":"inline-block","width": "50%", "text-align": "right"});   
      $lists.append($temp);
      }); 
  }
  if(index === 9){ 
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Miaoli%20County%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
      function(data){
      var currentTemp = data.query.results.channel.item.condition.temp;    
      var $temp = $('<span>').html(currentTemp +"&#8451;").css({"display":"inline-block","width": "50%", "text-align": "right"});   
      $lists.append($temp);
      }); 
  }
  if(index === 10){ 
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22%20Changhua%20County%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
      function(data){
      var currentTemp = data.query.results.channel.item.condition.temp;    
      var $temp = $('<span>').html(currentTemp +"&#8451;").css({"display":"inline-block","width": "50%", "text-align": "right"});   
      $lists.append($temp);
      }); 
  }
  if(index === 11){ 
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22%20Nantou%20County%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
      function(data){
      var currentTemp = data.query.results.channel.item.condition.temp;    
      var $temp = $('<span>').html(currentTemp +"&#8451;").css({"display":"inline-block","width": "50%", "text-align": "right"});   
      $lists.append($temp);
      }); 
  }
  if(index === 12){ 
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22%20Yunlin%20County%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
      function(data){
      var currentTemp = data.query.results.channel.item.condition.temp;    
      var $temp = $('<span>').html(currentTemp +"&#8451;").css({"display":"inline-block","width": "50%", "text-align": "right"});   
      $lists.append($temp);
      }); 
  }
  if(index === 13){ 
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22%20Chiayi%20City%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
      function(data){
      var currentTemp = data.query.results.channel.item.condition.temp;    
      var $temp = $('<span>').html(currentTemp +"&#8451;").css({"display":"inline-block","width": "50%", "text-align": "right"});   
      $lists.append($temp);
      }); 
  }
  if(index === 14){ 
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Chiayi%20County%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
      function(data){
      var currentTemp = data.query.results.channel.item.condition.temp;    
      var $temp = $('<span>').html(currentTemp +"&#8451;").css({"display":"inline-block","width": "50%", "text-align": "right"});   
      $lists.append($temp);
      }); 
  }
  if(index === 15){ 
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Pingtung%20County%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
      function(data){
      var currentTemp = data.query.results.channel.item.condition.temp;    
      var $temp = $('<span>').html(currentTemp +"&#8451;").css({"display":"inline-block","width": "50%", "text-align": "right"});   
      $lists.append($temp);
      }); 
  }
  if(index === 16){ 
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Yilan%20County%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
      function(data){
      var currentTemp = data.query.results.channel.item.condition.temp;    
      var $temp = $('<span>').html(currentTemp +"&#8451;").css({"display":"inline-block","width": "50%", "text-align": "right"});   
      $lists.append($temp);
      }); 
  }
  if(index === 17){ 
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Hualien%20County%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
      function(data){
      var currentTemp = data.query.results.channel.item.condition.temp;    
      var $temp = $('<span>').html(currentTemp +"&#8451;").css({"display":"inline-block","width": "50%", "text-align": "right"});   
      $lists.append($temp);
      }); 
  }
  if(index === 18){ 
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Taitung%20County%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
      function(data){
      var currentTemp = data.query.results.channel.item.condition.temp;    
      var $temp = $('<span>').html(currentTemp +"&#8451;").css({"display":"inline-block","width": "50%", "text-align": "right"});   
      $lists.append($temp);
      }); 
  }
  if(index === 19){ 
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Penghu%20County%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
      function(data){
      var currentTemp = data.query.results.channel.item.condition.temp;    
      var $temp = $('<span>').html(currentTemp +"&#8451;").css({"display":"inline-block","width": "50%", "text-align": "right"});   
      $lists.append($temp);
      }); 
  }
  if(index === 20){ 
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Kinmen%20County%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
      function(data){
      var currentTemp = data.query.results.channel.item.condition.temp;    
      var $temp = $('<span>').html(currentTemp +"&#8451;").css({"display":"inline-block","width": "50%", "text-align": "right"});   
      $lists.append($temp);
      }); 
  }
  if(index === 21){ 
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Lianjiang%20County%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
      function(data){
      var currentTemp = data.query.results.channel.item.condition.temp;    
      var $temp = $('<span>').html(currentTemp +"&#8451;").css({"display":"inline-block","width": "50%", "text-align": "right"});   
      $lists.append($temp);
      }); 
  }

});

//show Taipei's weather by default
$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Taipei%20City%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  function(data){
    var currentTemp = data.query.results.channel.item.condition.temp; 
    var currentWeather = data.query.results.channel.item.condition.code;
    var currentDate = data.query.results.channel.item.forecast[0].date;
    var currentWeatherText = data.query.results.channel.item.condition.text;

    var forecastDate = new Array(3);
    var forecastLowTemp = new Array(3);
    var forecastHighTemp = new Array(3);
    var forecastWeather = new Array(3);
    for (var i = 0 ; i < forecastDate.length ; i++){
      forecastDate[i] = data.query.results.channel.item.forecast[i+1].date;
      forecastLowTemp[i] = data.query.results.channel.item.forecast[i+1].low;
      forecastHighTemp[i] = data.query.results.channel.item.forecast[i+1].high;
      forecastWeather[i] = data.query.results.channel.item.forecast[i+1].code;
    }

    //show skycons weather     
    showWeather(currentWeather, "today");
    showWeather(forecastWeather[0], "day1");
    showWeather(forecastWeather[1], "day2");
    showWeather(forecastWeather[2], "day3");
    //show today's date ,temp and weather text
    $("div.condition").html( "：" + currentWeatherText).prepend($('<span>').html(currentDate).addClass("date"));
    $("div span.temperature").html(currentTemp);

    //show forecast
    $("table.table thead tr th:nth-of-type(1)").html(forecastDate[0]);
    $("table.table thead tr th:nth-of-type(2)").html(forecastDate[1]);
    $("table.table thead tr th:nth-of-type(3)").html(forecastDate[2]);

    $("table.table tbody tr:nth-of-type(1) td:nth-of-type(1)").html(forecastLowTemp[0] +"-"+ forecastHighTemp[0] + " " + "&#8451;");
    $("table.table tbody tr:nth-of-type(1) td:nth-of-type(2)").html(forecastLowTemp[1] +"-"+ forecastHighTemp[1] + " " + "&#8451;");
    $("table.table tbody tr:nth-of-type(1) td:nth-of-type(3)").html(forecastLowTemp[2] +"-"+ forecastHighTemp[2] + " " + "&#8451;");

  }
);

//Taipei
$('#dropdown li:nth-of-type(1) a').on('click',function(){
  $("#dLabel").html("台北市 ").append($("<span>").addClass("caret"));
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Taipei%20City%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
    function(data){
      var currentTemp = data.query.results.channel.item.condition.temp; 
      var currentWeather = data.query.results.channel.item.condition.code;
      var currentDate = data.query.results.channel.item.forecast[0].date;
      var currentWeatherText = data.query.results.channel.item.condition.text;

      var forecastDate = new Array(3);
      var forecastLowTemp = new Array(3);
      var forecastHighTemp = new Array(3);
      var forecastWeather = new Array(3);
      for (var i = 0 ; i < forecastDate.length ; i++){
        forecastDate[i] = data.query.results.channel.item.forecast[i+1].date;
        forecastLowTemp[i] = data.query.results.channel.item.forecast[i+1].low;
        forecastHighTemp[i] = data.query.results.channel.item.forecast[i+1].high;
        forecastWeather[i] = data.query.results.channel.item.forecast[i+1].code;
      }

      //show skycons weather     
      showWeather(currentWeather, "today");
      showWeather(forecastWeather[0], "day1");
      showWeather(forecastWeather[1], "day2");
      showWeather(forecastWeather[2], "day3");
      //show today's date ,temp and weather text
      $("div.condition").html( "：" + currentWeatherText).prepend($('<span>').html(currentDate).addClass("date"));
      $("div span.temperature").html(currentTemp);

      //show forecast
      $("table.table thead tr th:nth-of-type(1)").html(forecastDate[0]);
      $("table.table thead tr th:nth-of-type(2)").html(forecastDate[1]);
      $("table.table thead tr th:nth-of-type(3)").html(forecastDate[2]);

      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(1)").html(forecastLowTemp[0] +"-"+ forecastHighTemp[0] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(2)").html(forecastLowTemp[1] +"-"+ forecastHighTemp[1] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(3)").html(forecastLowTemp[2] +"-"+ forecastHighTemp[2] + " " + "&#8451;");

    }
  );
});

//New Taipei City
$('#dropdown li:nth-of-type(2) a').on('click',function(){
  $("#dLabel").html("新北市 ").append($("<span>").addClass("caret"));
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22New%20Taipei%20City%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
    function(data){
      var currentTemp = data.query.results.channel.item.condition.temp;
      var currentWeather = data.query.results.channel.item.condition.code;
      var currentDate = data.query.results.channel.item.forecast[0].date;
      var currentWeatherText = data.query.results.channel.item.condition.text;

      var forecastDate = new Array(3);
      var forecastLowTemp = new Array(3);
      var forecastHighTemp = new Array(3);
      var forecastWeather = new Array(3);
      for (var i = 0 ; i < forecastDate.length ; i++){
        forecastDate[i] = data.query.results.channel.item.forecast[i+1].date;
        forecastLowTemp[i] = data.query.results.channel.item.forecast[i+1].low;
        forecastHighTemp[i] = data.query.results.channel.item.forecast[i+1].high;
        forecastWeather[i] = data.query.results.channel.item.forecast[i+1].code;
      }

      //show skycons weather     
      showWeather(currentWeather, "today");
      showWeather(forecastWeather[0], "day1");
      showWeather(forecastWeather[1], "day2");
      showWeather(forecastWeather[2], "day3");
      //show today's date ,temp and weather text
      $("div.condition").html( "：" + currentWeatherText).prepend($('<span>').html(currentDate).addClass("date"));
      $("div span.temperature").html(currentTemp);

      //show forecast
      $("table.table thead tr th:nth-of-type(1)").html(forecastDate[0]);
      $("table.table thead tr th:nth-of-type(2)").html(forecastDate[1]);
      $("table.table thead tr th:nth-of-type(3)").html(forecastDate[2]);

      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(1)").html(forecastLowTemp[0] +"-"+ forecastHighTemp[0] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(2)").html(forecastLowTemp[1] +"-"+ forecastHighTemp[1] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(3)").html(forecastLowTemp[2] +"-"+ forecastHighTemp[2] + " " + "&#8451;");
    }
  );
});

//Taichung
$('#dropdown li:nth-of-type(3) a').on('click',function(){
  $("#dLabel").html("台中市 ").append($("<span>").addClass("caret"));
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Taichung%20City%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
    function(data){
      var currentTemp = data.query.results.channel.item.condition.temp;
      var currentWeather = data.query.results.channel.item.condition.code;
      var currentDate = data.query.results.channel.item.forecast[0].date;
      var currentWeatherText = data.query.results.channel.item.condition.text;

      var forecastDate = new Array(3);
      var forecastLowTemp = new Array(3);
      var forecastHighTemp = new Array(3);
      var forecastWeather = new Array(3);
      for (var i = 0 ; i < forecastDate.length ; i++){
        forecastDate[i] = data.query.results.channel.item.forecast[i+1].date;
        forecastLowTemp[i] = data.query.results.channel.item.forecast[i+1].low;
        forecastHighTemp[i] = data.query.results.channel.item.forecast[i+1].high;
        forecastWeather[i] = data.query.results.channel.item.forecast[i+1].code;
      }

      //show skycons weather     
      showWeather(currentWeather, "today");
      showWeather(forecastWeather[0], "day1");
      showWeather(forecastWeather[1], "day2");
      showWeather(forecastWeather[2], "day3");
      //show today's date ,temp and weather text
      $("div.condition").html( "：" + currentWeatherText).prepend($('<span>').html(currentDate).addClass("date"));
      $("div span.temperature").html(currentTemp);

      //show forecast
      $("table.table thead tr th:nth-of-type(1)").html(forecastDate[0]);
      $("table.table thead tr th:nth-of-type(2)").html(forecastDate[1]);
      $("table.table thead tr th:nth-of-type(3)").html(forecastDate[2]);

      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(1)").html(forecastLowTemp[0] +"-"+ forecastHighTemp[0] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(2)").html(forecastLowTemp[1] +"-"+ forecastHighTemp[1] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(3)").html(forecastLowTemp[2] +"-"+ forecastHighTemp[2] + " " + "&#8451;");
    }
  );
});

//Tainan
$('#dropdown li:nth-of-type(4) a').on('click',function(){
  $("#dLabel").html("台南市 ").append($("<span>").addClass("caret"));
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Tainan%20City%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
    function(data){
      var currentTemp = data.query.results.channel.item.condition.temp;
      var currentWeather = data.query.results.channel.item.condition.code;
      var currentDate = data.query.results.channel.item.forecast[0].date;
      var currentWeatherText = data.query.results.channel.item.condition.text;

      var forecastDate = new Array(3);
      var forecastLowTemp = new Array(3);
      var forecastHighTemp = new Array(3);
      var forecastWeather = new Array(3);
      for (var i = 0 ; i < forecastDate.length ; i++){
        forecastDate[i] = data.query.results.channel.item.forecast[i+1].date;
        forecastLowTemp[i] = data.query.results.channel.item.forecast[i+1].low;
        forecastHighTemp[i] = data.query.results.channel.item.forecast[i+1].high;
        forecastWeather[i] = data.query.results.channel.item.forecast[i+1].code;
      }

      //show skycons weather     
      showWeather(currentWeather, "today");
      showWeather(forecastWeather[0], "day1");
      showWeather(forecastWeather[1], "day2");
      showWeather(forecastWeather[2], "day3");
      //show today's date ,temp and weather text
      $("div.condition").html( "：" + currentWeatherText).prepend($('<span>').html(currentDate).addClass("date"));
      $("div span.temperature").html(currentTemp);

      //show forecast
      $("table.table thead tr th:nth-of-type(1)").html(forecastDate[0]);
      $("table.table thead tr th:nth-of-type(2)").html(forecastDate[1]);
      $("table.table thead tr th:nth-of-type(3)").html(forecastDate[2]);

      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(1)").html(forecastLowTemp[0] +"-"+ forecastHighTemp[0] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(2)").html(forecastLowTemp[1] +"-"+ forecastHighTemp[1] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(3)").html(forecastLowTemp[2] +"-"+ forecastHighTemp[2] + " " + "&#8451;");
    }
  );
});

//Kaohsiung
$('#dropdown li:nth-of-type(5) a').on('click',function(){
  $("#dLabel").html("高雄市 ").append($("<span>").addClass("caret"));
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Kaohsiung%20City%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
    function(data){
      var currentTemp = data.query.results.channel.item.condition.temp;
      var currentWeather = data.query.results.channel.item.condition.code;
      var currentDate = data.query.results.channel.item.forecast[0].date;
      var currentWeatherText = data.query.results.channel.item.condition.text;

      var forecastDate = new Array(3);
      var forecastLowTemp = new Array(3);
      var forecastHighTemp = new Array(3);
      var forecastWeather = new Array(3);
      for (var i = 0 ; i < forecastDate.length ; i++){
        forecastDate[i] = data.query.results.channel.item.forecast[i+1].date;
        forecastLowTemp[i] = data.query.results.channel.item.forecast[i+1].low;
        forecastHighTemp[i] = data.query.results.channel.item.forecast[i+1].high;
        forecastWeather[i] = data.query.results.channel.item.forecast[i+1].code;
      }

      //show skycons weather     
      showWeather(currentWeather, "today");
      showWeather(forecastWeather[0], "day1");
      showWeather(forecastWeather[1], "day2");
      showWeather(forecastWeather[2], "day3");
      //show today's date ,temp and weather text
      $("div.condition").html( "：" + currentWeatherText).prepend($('<span>').html(currentDate).addClass("date"));
      $("div span.temperature").html(currentTemp);

      //show forecast
      $("table.table thead tr th:nth-of-type(1)").html(forecastDate[0]);
      $("table.table thead tr th:nth-of-type(2)").html(forecastDate[1]);
      $("table.table thead tr th:nth-of-type(3)").html(forecastDate[2]);

      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(1)").html(forecastLowTemp[0] +"-"+ forecastHighTemp[0] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(2)").html(forecastLowTemp[1] +"-"+ forecastHighTemp[1] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(3)").html(forecastLowTemp[2] +"-"+ forecastHighTemp[2] + " " + "&#8451;");
    }
  );
});

//Keelung
$('#dropdown li:nth-of-type(6) a').on('click',function(){
  $("#dLabel").html("基隆市 ").append($("<span>").addClass("caret"));
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Keelung%20City%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
    function(data){
      console.log(data);
      var currentTemp = data.query.results.channel.item.condition.temp;
      var currentWeather = data.query.results.channel.item.condition.code;
      var currentDate = data.query.results.channel.item.forecast[0].date;
      var currentWeatherText = data.query.results.channel.item.condition.text;

      var forecastDate = new Array(3);
      var forecastLowTemp = new Array(3);
      var forecastHighTemp = new Array(3);
      var forecastWeather = new Array(3);
      for (var i = 0 ; i < forecastDate.length ; i++){
        forecastDate[i] = data.query.results.channel.item.forecast[i+1].date;
        forecastLowTemp[i] = data.query.results.channel.item.forecast[i+1].low;
        forecastHighTemp[i] = data.query.results.channel.item.forecast[i+1].high;
        forecastWeather[i] = data.query.results.channel.item.forecast[i+1].code;
      }

      //show skycons weather     
      showWeather(currentWeather, "today");
      showWeather(forecastWeather[0], "day1");
      showWeather(forecastWeather[1], "day2");
      showWeather(forecastWeather[2], "day3");
      //show today's date ,temp and weather text
      $("div.condition").html( "：" + currentWeatherText).prepend($('<span>').html(currentDate).addClass("date"));
      $("div span.temperature").html(currentTemp);

      //show forecast
      $("table.table thead tr th:nth-of-type(1)").html(forecastDate[0]);
      $("table.table thead tr th:nth-of-type(2)").html(forecastDate[1]);
      $("table.table thead tr th:nth-of-type(3)").html(forecastDate[2]);

      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(1)").html(forecastLowTemp[0] +"-"+ forecastHighTemp[0] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(2)").html(forecastLowTemp[1] +"-"+ forecastHighTemp[1] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(3)").html(forecastLowTemp[2] +"-"+ forecastHighTemp[2] + " " + "&#8451;");
    }
  );
});

//Taoyuan
$('#dropdown li:nth-of-type(7) a').on('click',function(){
  $("#dLabel").html("桃園市 ").append($("<span>").addClass("caret"));
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Taoyuan%20City%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
    function(data){
      console.log(data);
      var currentTemp = data.query.results.channel.item.condition.temp;
      var currentWeather = data.query.results.channel.item.condition.code;
      var currentDate = data.query.results.channel.item.forecast[0].date;
      var currentWeatherText = data.query.results.channel.item.condition.text;

      var forecastDate = new Array(3);
      var forecastLowTemp = new Array(3);
      var forecastHighTemp = new Array(3);
      var forecastWeather = new Array(3);
      for (var i = 0 ; i < forecastDate.length ; i++){
        forecastDate[i] = data.query.results.channel.item.forecast[i+1].date;
        forecastLowTemp[i] = data.query.results.channel.item.forecast[i+1].low;
        forecastHighTemp[i] = data.query.results.channel.item.forecast[i+1].high;
        forecastWeather[i] = data.query.results.channel.item.forecast[i+1].code;
      }

      //show skycons weather     
      showWeather(currentWeather, "today");
      showWeather(forecastWeather[0], "day1");
      showWeather(forecastWeather[1], "day2");
      showWeather(forecastWeather[2], "day3");
      //show today's date ,temp and weather text
      $("div.condition").html( "：" + currentWeatherText).prepend($('<span>').html(currentDate).addClass("date"));
      $("div span.temperature").html(currentTemp);

      //show forecast
      $("table.table thead tr th:nth-of-type(1)").html(forecastDate[0]);
      $("table.table thead tr th:nth-of-type(2)").html(forecastDate[1]);
      $("table.table thead tr th:nth-of-type(3)").html(forecastDate[2]);

      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(1)").html(forecastLowTemp[0] +"-"+ forecastHighTemp[0] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(2)").html(forecastLowTemp[1] +"-"+ forecastHighTemp[1] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(3)").html(forecastLowTemp[2] +"-"+ forecastHighTemp[2] + " " + "&#8451;");
    }
  );
});

//Hsinchu city
$('#dropdown li:nth-of-type(8) a').on('click',function(){
  $("#dLabel").html("新竹市 ").append($("<span>").addClass("caret"));
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Hsinchu%20City%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
    function(data){
      console.log(data);
      var currentTemp = data.query.results.channel.item.condition.temp;
      var currentWeather = data.query.results.channel.item.condition.code;
      var currentDate = data.query.results.channel.item.forecast[0].date;
      var currentWeatherText = data.query.results.channel.item.condition.text;

      var forecastDate = new Array(3);
      var forecastLowTemp = new Array(3);
      var forecastHighTemp = new Array(3);
      var forecastWeather = new Array(3);
      for (var i = 0 ; i < forecastDate.length ; i++){
        forecastDate[i] = data.query.results.channel.item.forecast[i+1].date;
        forecastLowTemp[i] = data.query.results.channel.item.forecast[i+1].low;
        forecastHighTemp[i] = data.query.results.channel.item.forecast[i+1].high;
        forecastWeather[i] = data.query.results.channel.item.forecast[i+1].code;
      }

      //show skycons weather     
      showWeather(currentWeather, "today");
      showWeather(forecastWeather[0], "day1");
      showWeather(forecastWeather[1], "day2");
      showWeather(forecastWeather[2], "day3");
      //show today's date ,temp and weather text
      $("div.condition").html( "：" + currentWeatherText).prepend($('<span>').html(currentDate).addClass("date"));
      $("div span.temperature").html(currentTemp);

      //show forecast
      $("table.table thead tr th:nth-of-type(1)").html(forecastDate[0]);
      $("table.table thead tr th:nth-of-type(2)").html(forecastDate[1]);
      $("table.table thead tr th:nth-of-type(3)").html(forecastDate[2]);

      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(1)").html(forecastLowTemp[0] +"-"+ forecastHighTemp[0] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(2)").html(forecastLowTemp[1] +"-"+ forecastHighTemp[1] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(3)").html(forecastLowTemp[2] +"-"+ forecastHighTemp[2] + " " + "&#8451;");
    }
  );
});

//Hsinchu country
$('#dropdown li:nth-of-type(9) a').on('click',function(){
  $("#dLabel").html("新竹縣 ").append($("<span>").addClass("caret"));
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22%20Hsinchu%20County%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
    function(data){
      console.log(data);
      var currentTemp = data.query.results.channel.item.condition.temp;
      var currentWeather = data.query.results.channel.item.condition.code;
      var currentDate = data.query.results.channel.item.forecast[0].date;
      var currentWeatherText = data.query.results.channel.item.condition.text;

      var forecastDate = new Array(3);
      var forecastLowTemp = new Array(3);
      var forecastHighTemp = new Array(3);
      var forecastWeather = new Array(3);
      for (var i = 0 ; i < forecastDate.length ; i++){
        forecastDate[i] = data.query.results.channel.item.forecast[i+1].date;
        forecastLowTemp[i] = data.query.results.channel.item.forecast[i+1].low;
        forecastHighTemp[i] = data.query.results.channel.item.forecast[i+1].high;
        forecastWeather[i] = data.query.results.channel.item.forecast[i+1].code;
      }

      //show skycons weather     
      showWeather(currentWeather, "today");
      showWeather(forecastWeather[0], "day1");
      showWeather(forecastWeather[1], "day2");
      showWeather(forecastWeather[2], "day3");
      //show today's date ,temp and weather text
      $("div.condition").html( "：" + currentWeatherText).prepend($('<span>').html(currentDate).addClass("date"));
      $("div span.temperature").html(currentTemp);

      //show forecast
      $("table.table thead tr th:nth-of-type(1)").html(forecastDate[0]);
      $("table.table thead tr th:nth-of-type(2)").html(forecastDate[1]);
      $("table.table thead tr th:nth-of-type(3)").html(forecastDate[2]);

      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(1)").html(forecastLowTemp[0] +"-"+ forecastHighTemp[0] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(2)").html(forecastLowTemp[1] +"-"+ forecastHighTemp[1] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(3)").html(forecastLowTemp[2] +"-"+ forecastHighTemp[2] + " " + "&#8451;");
    }
  );
});

//Miaoli County
$('#dropdown li:nth-of-type(10) a').on('click',function(){
  $("#dLabel").html("苗栗縣 ").append($("<span>").addClass("caret"));
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Miaoli%20County%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
    function(data){
      console.log(data);
      var currentTemp = data.query.results.channel.item.condition.temp;
      var currentWeather = data.query.results.channel.item.condition.code;
      var currentDate = data.query.results.channel.item.forecast[0].date;
      var currentWeatherText = data.query.results.channel.item.condition.text;

      var forecastDate = new Array(3);
      var forecastLowTemp = new Array(3);
      var forecastHighTemp = new Array(3);
      var forecastWeather = new Array(3);
      for (var i = 0 ; i < forecastDate.length ; i++){
        forecastDate[i] = data.query.results.channel.item.forecast[i+1].date;
        forecastLowTemp[i] = data.query.results.channel.item.forecast[i+1].low;
        forecastHighTemp[i] = data.query.results.channel.item.forecast[i+1].high;
        forecastWeather[i] = data.query.results.channel.item.forecast[i+1].code;
      }

      //show skycons weather     
      showWeather(currentWeather, "today");
      showWeather(forecastWeather[0], "day1");
      showWeather(forecastWeather[1], "day2");
      showWeather(forecastWeather[2], "day3");
      //show today's date ,temp and weather text
      $("div.condition").html( "：" + currentWeatherText).prepend($('<span>').html(currentDate).addClass("date"));
      $("div span.temperature").html(currentTemp);

      //show forecast
      $("table.table thead tr th:nth-of-type(1)").html(forecastDate[0]);
      $("table.table thead tr th:nth-of-type(2)").html(forecastDate[1]);
      $("table.table thead tr th:nth-of-type(3)").html(forecastDate[2]);

      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(1)").html(forecastLowTemp[0] +"-"+ forecastHighTemp[0] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(2)").html(forecastLowTemp[1] +"-"+ forecastHighTemp[1] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(3)").html(forecastLowTemp[2] +"-"+ forecastHighTemp[2] + " " + "&#8451;");
    }
  );
});

//Changhua County
$('#dropdown li:nth-of-type(11) a').on('click',function(){
  $("#dLabel").html("彰化縣 ").append($("<span>").addClass("caret"));
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22%20Changhua%20County%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
    function(data){
      console.log(data);
      var currentTemp = data.query.results.channel.item.condition.temp;
      var currentWeather = data.query.results.channel.item.condition.code;
      var currentDate = data.query.results.channel.item.forecast[0].date;
      var currentWeatherText = data.query.results.channel.item.condition.text;

      var forecastDate = new Array(3);
      var forecastLowTemp = new Array(3);
      var forecastHighTemp = new Array(3);
      var forecastWeather = new Array(3);
      for (var i = 0 ; i < forecastDate.length ; i++){
        forecastDate[i] = data.query.results.channel.item.forecast[i+1].date;
        forecastLowTemp[i] = data.query.results.channel.item.forecast[i+1].low;
        forecastHighTemp[i] = data.query.results.channel.item.forecast[i+1].high;
        forecastWeather[i] = data.query.results.channel.item.forecast[i+1].code;
      }

      //show skycons weather     
      showWeather(currentWeather, "today");
      showWeather(forecastWeather[0], "day1");
      showWeather(forecastWeather[1], "day2");
      showWeather(forecastWeather[2], "day3");
      //show today's date ,temp and weather text
      $("div.condition").html( "：" + currentWeatherText).prepend($('<span>').html(currentDate).addClass("date"));
      $("div span.temperature").html(currentTemp);

      //show forecast
      $("table.table thead tr th:nth-of-type(1)").html(forecastDate[0]);
      $("table.table thead tr th:nth-of-type(2)").html(forecastDate[1]);
      $("table.table thead tr th:nth-of-type(3)").html(forecastDate[2]);

      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(1)").html(forecastLowTemp[0] +"-"+ forecastHighTemp[0] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(2)").html(forecastLowTemp[1] +"-"+ forecastHighTemp[1] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(3)").html(forecastLowTemp[2] +"-"+ forecastHighTemp[2] + " " + "&#8451;");
    }
  );
});

//Nantou County
$('#dropdown li:nth-of-type(12) a').on('click',function(){
  $("#dLabel").html("南投縣 ").append($("<span>").addClass("caret"));
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22%20Nantou%20County%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
    function(data){
      console.log(data);
      var currentTemp = data.query.results.channel.item.condition.temp;
      var currentWeather = data.query.results.channel.item.condition.code;
      var currentDate = data.query.results.channel.item.forecast[0].date;
      var currentWeatherText = data.query.results.channel.item.condition.text;

      var forecastDate = new Array(3);
      var forecastLowTemp = new Array(3);
      var forecastHighTemp = new Array(3);
      var forecastWeather = new Array(3);
      for (var i = 0 ; i < forecastDate.length ; i++){
        forecastDate[i] = data.query.results.channel.item.forecast[i+1].date;
        forecastLowTemp[i] = data.query.results.channel.item.forecast[i+1].low;
        forecastHighTemp[i] = data.query.results.channel.item.forecast[i+1].high;
        forecastWeather[i] = data.query.results.channel.item.forecast[i+1].code;
      }

      //show skycons weather     
      showWeather(currentWeather, "today");
      showWeather(forecastWeather[0], "day1");
      showWeather(forecastWeather[1], "day2");
      showWeather(forecastWeather[2], "day3");
      //show today's date ,temp and weather text
      $("div.condition").html( "：" + currentWeatherText).prepend($('<span>').html(currentDate).addClass("date"));
      $("div span.temperature").html(currentTemp);

      //show forecast
      $("table.table thead tr th:nth-of-type(1)").html(forecastDate[0]);
      $("table.table thead tr th:nth-of-type(2)").html(forecastDate[1]);
      $("table.table thead tr th:nth-of-type(3)").html(forecastDate[2]);

      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(1)").html(forecastLowTemp[0] +"-"+ forecastHighTemp[0] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(2)").html(forecastLowTemp[1] +"-"+ forecastHighTemp[1] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(3)").html(forecastLowTemp[2] +"-"+ forecastHighTemp[2] + " " + "&#8451;");
    }
  );
});

//Yunlin County
$('#dropdown li:nth-of-type(13) a').on('click',function(){
  $("#dLabel").html("雲林縣 ").append($("<span>").addClass("caret"));
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22%20Yunlin%20County%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
    function(data){
      console.log(data);
      var currentTemp = data.query.results.channel.item.condition.temp;
      var currentWeather = data.query.results.channel.item.condition.code;
      var currentDate = data.query.results.channel.item.forecast[0].date;
      var currentWeatherText = data.query.results.channel.item.condition.text;

      var forecastDate = new Array(3);
      var forecastLowTemp = new Array(3);
      var forecastHighTemp = new Array(3);
      var forecastWeather = new Array(3);
      for (var i = 0 ; i < forecastDate.length ; i++){
        forecastDate[i] = data.query.results.channel.item.forecast[i+1].date;
        forecastLowTemp[i] = data.query.results.channel.item.forecast[i+1].low;
        forecastHighTemp[i] = data.query.results.channel.item.forecast[i+1].high;
        forecastWeather[i] = data.query.results.channel.item.forecast[i+1].code;
      }

      //show skycons weather     
      showWeather(currentWeather, "today");
      showWeather(forecastWeather[0], "day1");
      showWeather(forecastWeather[1], "day2");
      showWeather(forecastWeather[2], "day3");
      //show today's date ,temp and weather text
      $("div.condition").html( "：" + currentWeatherText).prepend($('<span>').html(currentDate).addClass("date"));
      $("div span.temperature").html(currentTemp);

      //show forecast
      $("table.table thead tr th:nth-of-type(1)").html(forecastDate[0]);
      $("table.table thead tr th:nth-of-type(2)").html(forecastDate[1]);
      $("table.table thead tr th:nth-of-type(3)").html(forecastDate[2]);

      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(1)").html(forecastLowTemp[0] +"-"+ forecastHighTemp[0] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(2)").html(forecastLowTemp[1] +"-"+ forecastHighTemp[1] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(3)").html(forecastLowTemp[2] +"-"+ forecastHighTemp[2] + " " + "&#8451;");
    }
  );
});

//Chiayi City
$('#dropdown li:nth-of-type(14) a').on('click',function(){
  $("#dLabel").html("嘉義市 ").append($("<span>").addClass("caret"));
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22%20Chiayi%20City%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
    function(data){
      console.log(data);
      var currentTemp = data.query.results.channel.item.condition.temp;
      var currentWeather = data.query.results.channel.item.condition.code;
      var currentDate = data.query.results.channel.item.forecast[0].date;
      var currentWeatherText = data.query.results.channel.item.condition.text;

      var forecastDate = new Array(3);
      var forecastLowTemp = new Array(3);
      var forecastHighTemp = new Array(3);
      var forecastWeather = new Array(3);
      for (var i = 0 ; i < forecastDate.length ; i++){
        forecastDate[i] = data.query.results.channel.item.forecast[i+1].date;
        forecastLowTemp[i] = data.query.results.channel.item.forecast[i+1].low;
        forecastHighTemp[i] = data.query.results.channel.item.forecast[i+1].high;
        forecastWeather[i] = data.query.results.channel.item.forecast[i+1].code;
      }

      //show skycons weather     
      showWeather(currentWeather, "today");
      showWeather(forecastWeather[0], "day1");
      showWeather(forecastWeather[1], "day2");
      showWeather(forecastWeather[2], "day3");
      //show today's date ,temp and weather text
      $("div.condition").html( "：" + currentWeatherText).prepend($('<span>').html(currentDate).addClass("date"));
      $("div span.temperature").html(currentTemp);

      //show forecast
      $("table.table thead tr th:nth-of-type(1)").html(forecastDate[0]);
      $("table.table thead tr th:nth-of-type(2)").html(forecastDate[1]);
      $("table.table thead tr th:nth-of-type(3)").html(forecastDate[2]);

      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(1)").html(forecastLowTemp[0] +"-"+ forecastHighTemp[0] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(2)").html(forecastLowTemp[1] +"-"+ forecastHighTemp[1] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(3)").html(forecastLowTemp[2] +"-"+ forecastHighTemp[2] + " " + "&#8451;");
    }
  );
});

//Chiayi County
$('#dropdown li:nth-of-type(15) a').on('click',function(){
  $("#dLabel").html("嘉義縣 ").append($("<span>").addClass("caret"));
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Chiayi%20County%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
    function(data){
      console.log(data);
      var currentTemp = data.query.results.channel.item.condition.temp;
      var currentWeather = data.query.results.channel.item.condition.code;
      var currentDate = data.query.results.channel.item.forecast[0].date;
      var currentWeatherText = data.query.results.channel.item.condition.text;

      var forecastDate = new Array(3);
      var forecastLowTemp = new Array(3);
      var forecastHighTemp = new Array(3);
      var forecastWeather = new Array(3);
      for (var i = 0 ; i < forecastDate.length ; i++){
        forecastDate[i] = data.query.results.channel.item.forecast[i+1].date;
        forecastLowTemp[i] = data.query.results.channel.item.forecast[i+1].low;
        forecastHighTemp[i] = data.query.results.channel.item.forecast[i+1].high;
        forecastWeather[i] = data.query.results.channel.item.forecast[i+1].code;
      }

      //show skycons weather     
      showWeather(currentWeather, "today");
      showWeather(forecastWeather[0], "day1");
      showWeather(forecastWeather[1], "day2");
      showWeather(forecastWeather[2], "day3");
      //show today's date ,temp and weather text
      $("div.condition").html( "：" + currentWeatherText).prepend($('<span>').html(currentDate).addClass("date"));
      $("div span.temperature").html(currentTemp);

      //show forecast
      $("table.table thead tr th:nth-of-type(1)").html(forecastDate[0]);
      $("table.table thead tr th:nth-of-type(2)").html(forecastDate[1]);
      $("table.table thead tr th:nth-of-type(3)").html(forecastDate[2]);

      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(1)").html(forecastLowTemp[0] +"-"+ forecastHighTemp[0] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(2)").html(forecastLowTemp[1] +"-"+ forecastHighTemp[1] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(3)").html(forecastLowTemp[2] +"-"+ forecastHighTemp[2] + " " + "&#8451;");
    }
  );
});

//Pingtung County
$('#dropdown li:nth-of-type(16) a').on('click',function(){
  $("#dLabel").html("屏東縣 ").append($("<span>").addClass("caret"));
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Pingtung%20County%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
    function(data){
      console.log(data);
      var currentTemp = data.query.results.channel.item.condition.temp;
      var currentWeather = data.query.results.channel.item.condition.code;
      var currentDate = data.query.results.channel.item.forecast[0].date;
      var currentWeatherText = data.query.results.channel.item.condition.text;

      var forecastDate = new Array(3);
      var forecastLowTemp = new Array(3);
      var forecastHighTemp = new Array(3);
      var forecastWeather = new Array(3);
      for (var i = 0 ; i < forecastDate.length ; i++){
        forecastDate[i] = data.query.results.channel.item.forecast[i+1].date;
        forecastLowTemp[i] = data.query.results.channel.item.forecast[i+1].low;
        forecastHighTemp[i] = data.query.results.channel.item.forecast[i+1].high;
        forecastWeather[i] = data.query.results.channel.item.forecast[i+1].code;
      }

      //show skycons weather     
      showWeather(currentWeather, "today");
      showWeather(forecastWeather[0], "day1");
      showWeather(forecastWeather[1], "day2");
      showWeather(forecastWeather[2], "day3");
      //show today's date ,temp and weather text
      $("div.condition").html( "：" + currentWeatherText).prepend($('<span>').html(currentDate).addClass("date"));
      $("div span.temperature").html(currentTemp);

      //show forecast
      $("table.table thead tr th:nth-of-type(1)").html(forecastDate[0]);
      $("table.table thead tr th:nth-of-type(2)").html(forecastDate[1]);
      $("table.table thead tr th:nth-of-type(3)").html(forecastDate[2]);

      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(1)").html(forecastLowTemp[0] +"-"+ forecastHighTemp[0] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(2)").html(forecastLowTemp[1] +"-"+ forecastHighTemp[1] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(3)").html(forecastLowTemp[2] +"-"+ forecastHighTemp[2] + " " + "&#8451;");
    }
  );
});

//Yilan County
$('#dropdown li:nth-of-type(17) a').on('click',function(){
  $("#dLabel").html("宜蘭縣 ").append($("<span>").addClass("caret"));
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Yilan%20County%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
    function(data){
      console.log(data);
      var currentTemp = data.query.results.channel.item.condition.temp;
      var currentWeather = data.query.results.channel.item.condition.code;
      var currentDate = data.query.results.channel.item.forecast[0].date;
      var currentWeatherText = data.query.results.channel.item.condition.text;

      var forecastDate = new Array(3);
      var forecastLowTemp = new Array(3);
      var forecastHighTemp = new Array(3);
      var forecastWeather = new Array(3);
      for (var i = 0 ; i < forecastDate.length ; i++){
        forecastDate[i] = data.query.results.channel.item.forecast[i+1].date;
        forecastLowTemp[i] = data.query.results.channel.item.forecast[i+1].low;
        forecastHighTemp[i] = data.query.results.channel.item.forecast[i+1].high;
        forecastWeather[i] = data.query.results.channel.item.forecast[i+1].code;
      }

      //show skycons weather     
      showWeather(currentWeather, "today");
      showWeather(forecastWeather[0], "day1");
      showWeather(forecastWeather[1], "day2");
      showWeather(forecastWeather[2], "day3");
      //show today's date ,temp and weather text
      $("div.condition").html( "：" + currentWeatherText).prepend($('<span>').html(currentDate).addClass("date"));
      $("div span.temperature").html(currentTemp);

      //show forecast
      $("table.table thead tr th:nth-of-type(1)").html(forecastDate[0]);
      $("table.table thead tr th:nth-of-type(2)").html(forecastDate[1]);
      $("table.table thead tr th:nth-of-type(3)").html(forecastDate[2]);

      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(1)").html(forecastLowTemp[0] +"-"+ forecastHighTemp[0] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(2)").html(forecastLowTemp[1] +"-"+ forecastHighTemp[1] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(3)").html(forecastLowTemp[2] +"-"+ forecastHighTemp[2] + " " + "&#8451;");
    }
  );
});

//Hualien County
$('#dropdown li:nth-of-type(18) a').on('click',function(){
  $("#dLabel").html("花蓮縣 ").append($("<span>").addClass("caret"));
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Hualien%20County%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
    function(data){
      console.log(data);
      var currentTemp = data.query.results.channel.item.condition.temp;
      var currentWeather = data.query.results.channel.item.condition.code;
      var currentDate = data.query.results.channel.item.forecast[0].date;
      var currentWeatherText = data.query.results.channel.item.condition.text;

      var forecastDate = new Array(3);
      var forecastLowTemp = new Array(3);
      var forecastHighTemp = new Array(3);
      var forecastWeather = new Array(3);
      for (var i = 0 ; i < forecastDate.length ; i++){
        forecastDate[i] = data.query.results.channel.item.forecast[i+1].date;
        forecastLowTemp[i] = data.query.results.channel.item.forecast[i+1].low;
        forecastHighTemp[i] = data.query.results.channel.item.forecast[i+1].high;
        forecastWeather[i] = data.query.results.channel.item.forecast[i+1].code;
      }

      //show skycons weather     
      showWeather(currentWeather, "today");
      showWeather(forecastWeather[0], "day1");
      showWeather(forecastWeather[1], "day2");
      showWeather(forecastWeather[2], "day3");
      //show today's date ,temp and weather text
      $("div.condition").html( "：" + currentWeatherText).prepend($('<span>').html(currentDate).addClass("date"));
      $("div span.temperature").html(currentTemp);

      //show forecast
      $("table.table thead tr th:nth-of-type(1)").html(forecastDate[0]);
      $("table.table thead tr th:nth-of-type(2)").html(forecastDate[1]);
      $("table.table thead tr th:nth-of-type(3)").html(forecastDate[2]);

      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(1)").html(forecastLowTemp[0] +"-"+ forecastHighTemp[0] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(2)").html(forecastLowTemp[1] +"-"+ forecastHighTemp[1] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(3)").html(forecastLowTemp[2] +"-"+ forecastHighTemp[2] + " " + "&#8451;");
    }
  );
});

//Taitung County
$('#dropdown li:nth-of-type(19) a').on('click',function(){
  $("#dLabel").html("台東縣 ").append($("<span>").addClass("caret"));
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Taitung%20County%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
    function(data){
      console.log(data);
      var currentTemp = data.query.results.channel.item.condition.temp;
      var currentWeather = data.query.results.channel.item.condition.code;
      var currentDate = data.query.results.channel.item.forecast[0].date;
      var currentWeatherText = data.query.results.channel.item.condition.text;

      var forecastDate = new Array(3);
      var forecastLowTemp = new Array(3);
      var forecastHighTemp = new Array(3);
      var forecastWeather = new Array(3);
      for (var i = 0 ; i < forecastDate.length ; i++){
        forecastDate[i] = data.query.results.channel.item.forecast[i+1].date;
        forecastLowTemp[i] = data.query.results.channel.item.forecast[i+1].low;
        forecastHighTemp[i] = data.query.results.channel.item.forecast[i+1].high;
        forecastWeather[i] = data.query.results.channel.item.forecast[i+1].code;
      }

      //show skycons weather     
      showWeather(currentWeather, "today");
      showWeather(forecastWeather[0], "day1");
      showWeather(forecastWeather[1], "day2");
      showWeather(forecastWeather[2], "day3");
      //show today's date ,temp and weather text
      $("div.condition").html( "：" + currentWeatherText).prepend($('<span>').html(currentDate).addClass("date"));
      $("div span.temperature").html(currentTemp);

      //show forecast
      $("table.table thead tr th:nth-of-type(1)").html(forecastDate[0]);
      $("table.table thead tr th:nth-of-type(2)").html(forecastDate[1]);
      $("table.table thead tr th:nth-of-type(3)").html(forecastDate[2]);

      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(1)").html(forecastLowTemp[0] +"-"+ forecastHighTemp[0] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(2)").html(forecastLowTemp[1] +"-"+ forecastHighTemp[1] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(3)").html(forecastLowTemp[2] +"-"+ forecastHighTemp[2] + " " + "&#8451;");
    }
  );
});

//Penghu County
$('#dropdown li:nth-of-type(20) a').on('click',function(){
  $("#dLabel").html("澎湖縣 ").append($("<span>").addClass("caret"));
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Penghu%20County%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
    function(data){
      console.log(data);
      var currentTemp = data.query.results.channel.item.condition.temp;
      var currentWeather = data.query.results.channel.item.condition.code;
      var currentDate = data.query.results.channel.item.forecast[0].date;
      var currentWeatherText = data.query.results.channel.item.condition.text;

      var forecastDate = new Array(3);
      var forecastLowTemp = new Array(3);
      var forecastHighTemp = new Array(3);
      var forecastWeather = new Array(3);
      for (var i = 0 ; i < forecastDate.length ; i++){
        forecastDate[i] = data.query.results.channel.item.forecast[i+1].date;
        forecastLowTemp[i] = data.query.results.channel.item.forecast[i+1].low;
        forecastHighTemp[i] = data.query.results.channel.item.forecast[i+1].high;
        forecastWeather[i] = data.query.results.channel.item.forecast[i+1].code;
      }

      //show skycons weather     
      showWeather(currentWeather, "today");
      showWeather(forecastWeather[0], "day1");
      showWeather(forecastWeather[1], "day2");
      showWeather(forecastWeather[2], "day3");
      //show today's date ,temp and weather text
      $("div.condition").html( "：" + currentWeatherText).prepend($('<span>').html(currentDate).addClass("date"));
      $("div span.temperature").html(currentTemp);

      //show forecast
      $("table.table thead tr th:nth-of-type(1)").html(forecastDate[0]);
      $("table.table thead tr th:nth-of-type(2)").html(forecastDate[1]);
      $("table.table thead tr th:nth-of-type(3)").html(forecastDate[2]);

      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(1)").html(forecastLowTemp[0] +"-"+ forecastHighTemp[0] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(2)").html(forecastLowTemp[1] +"-"+ forecastHighTemp[1] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(3)").html(forecastLowTemp[2] +"-"+ forecastHighTemp[2] + " " + "&#8451;");
    }
  );
});

//Kinmen County
$('#dropdown li:nth-of-type(21) a').on('click',function(){
  $("#dLabel").html("金門縣 ").append($("<span>").addClass("caret"));
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Kinmen%20County%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
    function(data){
      console.log(data);
      var currentTemp = data.query.results.channel.item.condition.temp;
      var currentWeather = data.query.results.channel.item.condition.code;
      var currentDate = data.query.results.channel.item.forecast[0].date;
      var currentWeatherText = data.query.results.channel.item.condition.text;

      var forecastDate = new Array(3);
      var forecastLowTemp = new Array(3);
      var forecastHighTemp = new Array(3);
      var forecastWeather = new Array(3);
      for (var i = 0 ; i < forecastDate.length ; i++){
        forecastDate[i] = data.query.results.channel.item.forecast[i+1].date;
        forecastLowTemp[i] = data.query.results.channel.item.forecast[i+1].low;
        forecastHighTemp[i] = data.query.results.channel.item.forecast[i+1].high;
        forecastWeather[i] = data.query.results.channel.item.forecast[i+1].code;
      }

      //show skycons weather     
      showWeather(currentWeather, "today");
      showWeather(forecastWeather[0], "day1");
      showWeather(forecastWeather[1], "day2");
      showWeather(forecastWeather[2], "day3");
      //show today's date ,temp and weather text
      $("div.condition").html( "：" + currentWeatherText).prepend($('<span>').html(currentDate).addClass("date"));
      $("div span.temperature").html(currentTemp);

      //show forecast
      $("table.table thead tr th:nth-of-type(1)").html(forecastDate[0]);
      $("table.table thead tr th:nth-of-type(2)").html(forecastDate[1]);
      $("table.table thead tr th:nth-of-type(3)").html(forecastDate[2]);

      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(1)").html(forecastLowTemp[0] +"-"+ forecastHighTemp[0] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(2)").html(forecastLowTemp[1] +"-"+ forecastHighTemp[1] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(3)").html(forecastLowTemp[2] +"-"+ forecastHighTemp[2] + " " + "&#8451;");
    }
  );
});

//Lianjiang
$('#dropdown li:nth-of-type(22) a').on('click',function(){
  $("#dLabel").html("連江縣 ").append($("<span>").addClass("caret"));
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Lianjiang%20County%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
    function(data){
      console.log(data);
      var currentTemp = data.query.results.channel.item.condition.temp;
      var currentWeather = data.query.results.channel.item.condition.code;
      var currentDate = data.query.results.channel.item.forecast[0].date;
      var currentWeatherText = data.query.results.channel.item.condition.text;

      var forecastDate = new Array(3);
      var forecastLowTemp = new Array(3);
      var forecastHighTemp = new Array(3);
      var forecastWeather = new Array(3);
      for (var i = 0 ; i < forecastDate.length ; i++){
        forecastDate[i] = data.query.results.channel.item.forecast[i+1].date;
        forecastLowTemp[i] = data.query.results.channel.item.forecast[i+1].low;
        forecastHighTemp[i] = data.query.results.channel.item.forecast[i+1].high;
        forecastWeather[i] = data.query.results.channel.item.forecast[i+1].code;
      }

      //show skycons weather     
      showWeather(currentWeather, "today");
      showWeather(forecastWeather[0], "day1");
      showWeather(forecastWeather[1], "day2");
      showWeather(forecastWeather[2], "day3");
      //show today's date ,temp and weather text
      $("div.condition").html( "：" + currentWeatherText).prepend($('<span>').html(currentDate).addClass("date"));
      $("div span.temperature").html(currentTemp);

      //show forecast
      $("table.table thead tr th:nth-of-type(1)").html(forecastDate[0]);
      $("table.table thead tr th:nth-of-type(2)").html(forecastDate[1]);
      $("table.table thead tr th:nth-of-type(3)").html(forecastDate[2]);

      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(1)").html(forecastLowTemp[0] +"-"+ forecastHighTemp[0] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(2)").html(forecastLowTemp[1] +"-"+ forecastHighTemp[1] + " " + "&#8451;");
      $("table.table tbody tr:nth-of-type(1) td:nth-of-type(3)").html(forecastLowTemp[2] +"-"+ forecastHighTemp[2] + " " + "&#8451;");
    }
  );
});

var showWeather = function(weather, day){
  // classify weather
  if(weather == 0 || weather == 23 || weather == 24){
    skycons.set(day, Skycons.WIND);
  }
  if(weather == 19 || weather ==20 || weather == 21 || weather == 22){
    skycons.set(day, Skycons.FOG);
  }
  if(weather == 6 || weather == 7 || weather == 18){
    skycons.set(day, Skycons.SLEET);
  }
  if(weather == 36 || weather == 34 || weather == 32){
    skycons.set(day, Skycons.CLEAR_DAY);
  }
  if(weather == 31 || weather == 33){
    skycons.set(day, Skycons.CLEAR_NIGHT);
  }
  if(weather == 28 || weather == 30 || weather == 44){
    skycons.set(day, Skycons.PARTLY_CLOUDY_DAY);
  }
  if(weather == 27 || weather == 29){
    skycons.set(day, Skycons.PARTLY_CLOUDY_NIGHT);
  }
  if(weather == 5 || weather == 13 || weather == 14 || weather == 15 || weather == 16 || weather == 17 || weather == 25 || weather == 41 || weather == 42 || weather == 43 || weather == 46){
    skycons.set(day, Skycons.SNOW);
  }
  if(weather == 26){
    skycons.set(day, Skycons.CLOUDY);
  }
  if (weather == 1 || weather == 2 || weather == 3 || weather == 4 || weather == 8 || weather == 9 || weather == 10 || weather == 11 || weather == 12 || weather == 35 || weather == 37 || weather == 38 || weather == 39 || weather == 40 || weather == 45 || weather == 47){
    skycons.set(day, Skycons.RAIN);
  }
}
