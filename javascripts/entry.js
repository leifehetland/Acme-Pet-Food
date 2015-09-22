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



require(["jquery", "hbs", "bootstrap", "firebase", "getTemplates", "lodash"],
  function($, Handlebars, bootstrap, firebase, templates, _) {

    var myFirebaseRef = new Firebase("https://acme-pet-food.firebaseio.com/");

    myFirebaseRef.child("dog_brands").on("value", function(snapshot) {

      var dog_brands = snapshot.val();
      console.log("dog_brands", dog_brands);

      $("#dog-brands").html(templates.dogPdt({dogthings:dog_brands}));

    });

    myFirebaseRef.child("cat_brands").on("value", function(snapshot) {

      var cat_brands = snapshot.val();
      console.log("cat_brands", cat_brands);

      $("#cat-brands").html(templates.catPdt({catthings:cat_brands}));

    });

  }
);
