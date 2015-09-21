require.config({
  baseURL: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    "firebase":"../lib/bower_components/firebase/firebase",
    "lodash": "../lib/bower_components/lodash/lodash"
  },
  shim: {
    "bootstrap":["jquery"],
    'firebase': {
      exports: 'Firebase'
    }
  }
});


require(["jquery", "hbs", "bootstrap", "firebase"],
  function($, Handlebars, bootstrap, firebase) {

var myFirebaseRef = new Firebase("https://acme-pet-food.firebaseio.com/");

myFirebaseRef.child("dog_brands").on("value", function(snapshot) {

  var dog_brands = snapshot.val();
  console.log("dog_brands", dog_brands);
});

  }
);
