module.exports = function(params){
	var name = params.propertyName,
		value = params.propertyValue;

	return {
		'config': function($) {
			var $templateHeaderOverride = $('[name="'+name+'"]');
			if($templateHeaderOverride.length < 1) {
				console.log("Adding Site Property [" + name + "] = " + value);
				$('properties').append('<property name="'+name+'" value="'+value+'"/>');
			} else {
				console.log("Updating Site Property [" + name + "] = " + value);
				$templateHeaderOverride.attr('value', value);
			}
		}
	}
};