function getJSON(url, done){
  var xhr = new XMLHttpRequest();
  
  xhr.open("GET", url);
  xhr.onload = function(){
    done(JSON.parse(xhr.responseText));
  };
  xhr.send();
}

const app = new Vue({
  el: "#app",
  data: {
    API_url: "https://api.apixu.com/v1/current.json?key=76355218a5de4faf8a7152658170302&q=auto:ip",
    location: {
      city: "Ridderkerk",
      country: "Netherlands"
    },
    weather: {
      temp_c: "10.0",
      temp_f: "50.0",
      icon_url: "http://cdn.apixu.com/weather/64x64/day/116.png"
    },
    celsiusOn: true
  },
  created: function(){
    // this.getData();
  },
  methods: {
    getData: function(){
      var self = this;
      getJSON(this.API_url, function(data){
        self.location = {
          city: data.location.name,
          country: data.location.country
        }
        self.weather = {
          temp_c: data.current.temp_c.toFixed(1),
          temp_f: data.current.temp_f.toFixed(1),
          icon_url: data.current.condition.icon
        }
      });
    }
  }
});
