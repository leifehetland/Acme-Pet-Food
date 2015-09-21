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



require(["jquery", "hbs", "bootstrap", "firebase", "getTemplates"],
  function($, Handlebars, bootstrap, firebase, templates) {
    var allBrandsObject = {};
    var allBrandsArray = [];

    var myFirebaseRef = new Firebase("https://acme-pet-food.firebaseio.com/");
    var catFirebaseRef = new Firebase("https://acme-cat-food.firebaseio.com/");

    myFirebaseRef.child("dog_brands").on("value", function(snapshot) {

      var dog_brands = snapshot.val();
      console.log("dog_brands", dog_brands);

      for (var key in dog_brands) {
        allBrandsArray[allBrandsArray.length] = dog_brands[key];
        }

      allBrandsObject= { dog_brands: allBrandsArray };
      console.log("allBrandsObject", allBrandsObject);

      $("#dog-brand").html(templates.dogPdt(allBrandsObject));

    });

    // catFirebaseRef.child("cat_brands").on("value", function(snapshot) {
    //   var cat_brands = snapshot.val();

    // });

  }
);
