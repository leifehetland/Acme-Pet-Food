define (["jquery"], function($) {

	return{
		loadDogs: function(callback) {
			$.ajax({
			url:"https://acme-pet-food.firebaseio.com/.json"
			}).done(function(data){
			callback(data);
			});
		}
	};
});