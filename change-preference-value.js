module.exports = function(params){
	var pageAlias = params.pageAlias,
		windowId = params.windowId,
		prefName = params.prefName,
		prefValue = params.prefValue;

	return {
		'config': function($) {
			var overrideId = $('[id="'+pageAlias+':'+windowId+'"]');
			if(overrideId.length > 0){
				var count = 0;
				overrideId.children().each(function(i, elem) {
					if($(this).attr('name') == prefName){
						count = ++i;
						$(this).attr('value', prefValue);
					}
				});
				console.log('\n' + count + ' ' + prefName + ' preferences were changed to ' + prefValue + '\n');
			} else {
				console.log('\nNo ' + prefName + ' preferences were found\n');
			}
		}
	}
}