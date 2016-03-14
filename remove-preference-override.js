module.exports = function(params){
	var pageAlias = params.pageAlias,
		windowId = params.windowId
	;
	return {
		'config': function($) {
			$('[id="'+pageAlias+':'+windowId+'"]').remove();
			console.log('\nRemoved '+pageAlias+':'+windowId+'\n');
		}
	}
}