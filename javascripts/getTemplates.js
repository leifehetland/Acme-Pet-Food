define(["hbs",
        "hbs!../templates/dog_brands"],
function(handlebars, dogTemplate) {

  var templates = {};
  templates.dogPdt = dogTemplate;

  return templates;

});
