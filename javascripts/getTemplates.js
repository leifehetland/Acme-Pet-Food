define(["hbs",
        "hbs!../templates/cat_brands",
        "hbs!../templates/dog_brands"]
function(handlebars, brandTemplate) {

  var templates = {};
  templates.brandPdt = brandTemplate;

  return templates;

});
