module.exports = function(params){
	var pages = {};
	for( var i in params){
		if(params.hasOwnProperty(i)) {
			pages[i] = params[i];
		}
	}
	return {
		'config': function($) {
			for(var page in pages){
				var addPageId = "";
				if(pages[page].pageId.length > 0){
					addPageId = 'id="'+pages[page].pageId+'"';
				}
				if($('[alias="'+pages[page].pageAlias+'"]').length < 1 ){
					$('sitemap').append('<entry alias="'+pages[page].pageAlias+ '" '+addPageId+' path="'+pages[page].pagePath+'"/>\n');
					console.log('Added alias="'+pages[page].pageAlias+'" '+addPageId+' path="'+pages[page].pagePath+'" to the config.xml');
				}
			}
		}
	}
};
