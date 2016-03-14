module.exports = function(params){
	var oldItem = params.oldNavItem,
		newItem = params.newNewItem;
	return {
		'config': function($) {
			var $navigationPage = $('[label="'+oldItem+'"]');
			if($navigationPage.length >= 1 ) {
				$navigationPage.attr('id', newItem).attr('url', newItem);
				console.log('Changed '+oldItem+' navigation item to go to '+newItem+' page\n');
			}
		}
	}
};