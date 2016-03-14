module.exports = function(params){
	var pageAlias = params.pageAlias,
		pageId = params.pageId
	;
	return {
		'config': function($) {
			var
				$pageAlias = $('[alias="'+pageAlias+'"]');
				existingPageId = $pageAlias.attr('id')
			;
			$pageAlias.attr('id',pageId);
			console.log('\nUpdated ' + existingPageId + ' index page id with ' + $pageAlias.attr('id') + '\n');
		}
	}
}