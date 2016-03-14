module.exports = function(params){
	var profile = params.profile,
		replace = params.replaceExisting;

	return {
		'config': function($) {
			var originalProfile = $('profile-ref').text();
			if($('profile-ref').length < 1 ) {
				$('variation-ref').after('<profile-ref>'+profile+'</profile-ref>');
				console.log('Added '+profile+' profile-ref to config.xml');
			}else if(replace = true){
				$('profile-ref').text(profile);
				console.log('Replaced '+originalProfile+' with profile-ref '+profile);
			}
		}
	}
};