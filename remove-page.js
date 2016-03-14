module.exports = function(params){
	var pageAlias = params.pageAlias;
	return {
		'config': function($) {
			$('[alias="'+pageAlias+'"]').remove();
			console.log('\nRemoved '+pageAlias+'\n');
		}
	}
};