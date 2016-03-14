module.exports = function(params){
	var variation = params.variation,
		color = params.color;
	return {
		'config': function($) {
			$('variation-ref').text(variation);
			$('themekit').text(color);
			console.log('\nChanged variation to '+variation+' and color to '+color+'\n');
		}
	}
};