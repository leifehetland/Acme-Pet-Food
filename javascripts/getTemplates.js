define(["hbs",
        "hbs!../templates/dog_brands",
        "hbs!../templates/cat_brands"],
function(handlebars, dogTemplate, catTemplate) {

  var templates = {};
  templates.dogPdt = dogTemplate;
  templates.catPdt = catTemplate;

  return templates;

});
