module.exports = function(params){
    var editConfig = function($) {
        var $allVLP = $('[alias="INVENTORY_LISTING_DEFAULT_AUTO_ALL"]'),
            $MSLP = $('[id^="v9_MODEL_SPECIFIC_LANDING_DEFAULT_"]'),
            override = [
                {'id':'SHOWROOM:showroom1','name':'show.overview.review','value':'false'},
                {'id':'SHOWROOM:showroom2','name':'overviewVideoYearMatching','value':'true'},
                {'id':'INDEX:inventory-search1','name':'listing.config.id','value':'auto-new'},
                {'id':'INDEX:inventory-search2','name':'listing.config.id','value':'auto-new'},
                {'id':'INDEX:inventory-search3','name':'listing.config.id','value':'auto-new'},
                {'id':'INDEX:inventory-featured1','name':'listing.config.id','value':'auto-new'},
                {'id':'INDEX:inventory-featured2','name':'listing.config.id','value':'auto-new'},
                {'id':'INDEX:inventory-featured3','name':'listing.config.id','value':'auto-new'},
                {'id':'INCENTIVES_SEARCH_DEFAULT:disclaimer1','name':'disclaimer.type','value':'honda_without_destination'},
                {'id':'INCENTIVES_SEARCH_DETAIL:disclaimer1','name':'disclaimer.type','value':'honda_without_destination'},
                {'id':'INCENTIVES_LISTING_DEFAULT:disclaimer1','name':'disclaimer.type','value':'honda_without_destination'},
                {'id':'VIDEO_GALLERY:video-gallery','name':'listing.config.id','value':'auto-new'},
                {'id':'VIDEO_GALLERY:video-gallery','name':'mediaAssets.filterBasedOnListingType','value':'true'},
                {'id':'VIDEO_GALLERY:video-gallery','name':'showFranchiseVideosOnly','value':'true'},
                {'id':'VIDEO_GALLERY:video-gallery','name':'testdrive.minimum.year','value':'2013'},
                {'id':'VIDEO_GALLERY:video-gallery','name':'overviewVideoYearMatching','value':'true'},
                {'id':'VIDEO_GALLERY:video-gallery','name':'suppressAllConditions','value':'true'},
                {'id':'VIDEO_GALLERY_COMPLIANT:video-gallery','name':'listing.config.id','value':'auto-new'},
                {'id':'VIDEO_GALLERY_COMPLIANT:video-gallery','name':'mediaAssets.filterBasedOnListingType','value':'true'},
                {'id':'VIDEO_GALLERY_COMPLIANT:video-gallery','name':'showFranchiseVideosOnly','value':'true'},
                {'id':'VIDEO_GALLERY_COMPLIANT:video-gallery','name':'testdrive.minimum.year','value':'2013'},
                {'id':'VIDEO_GALLERY_COMPLIANT:video-gallery','name':'overviewVideoYearMatching','value':'true'},
                {'id':'VIDEO_GALLERY_SEARCH_FRAGMENT:video-gallery','name':'overviewVideoYearMatching','value':'true'},
                {'id':'VIDEO_GALLERY_COMPLIANT:video-gallery','name':'suppressAllConditions','value':'true'},
                {'id':'VIDEO_GALLERY:blog1','name':'layout.hidden','value':'true'},
                {'id':'VIDEO_GALLERY:blog2','name':'layout.hidden','value':'true'},
                {'id':'VIDEO_GALLERY:links1','name':'linkText4','value':'BLANK'},
                {'id':'VIDEO_GALLERY:links1','name':'linkHref4','value':'BLANK'},
                {'id':'INVENTORY_LISTING_NO_RESULTS_AUTO:inventory-search1','name':'listing.config.id','value':'auto-new'},
                {'id':'INVENTORY_LISTING_NO_RESULTS_AUTO:inventory-featured1','name':'listing.config.id','value':'auto-new'},
                {'id':'REVIEWS_AUTO_LISTING:reviews1','name':'display.years','value':'2015,2014,2013'},
                {'id':'INVENTORY_SEARCH_FACETBROWSE:inventory-search1','name':'listing.config.id','value':'auto-new'},
                {'id':'INVENTORY_SEARCH_FACETBROWSE:inventory-search1','name':'supressAllConditions','value':'true'},
                {'id':'INVENTORY_SEARCH_FORWARD_BROWSE:navigation-forward-search1','name':'listing.config.id','value':'auto-new'},
                {'id':'INVENTORY_SEARCH_FORWARD_BROWSE:navigation-forward-search2','name':'listing.config.id','value':'auto-new'},
                {'id':'INVENTORY_SEARCH_FORWARD_BROWSE:navigation-forward-inentory-listing1','name':'listing.config.id','value':'auto-new'},
                {'id':'INVENTORY_SEARCH_FORWARD_BROWSE_LANDING:navigation-forward-search1','name':'listing.config.id','value':'auto-new'},
                {'id':'INVENTORY_SEARCH_FORWARD_BROWSE_LANDING:navigation-forward-search2','name':'listing.config.id','value':'auto-new'},
                {'id':'INVENTORY_SEARCH_FORWARD_BROWSE_LANDING:navigation-forward-inentory-listing1','name':'listing.config.id','value':'auto-new'},
                {'id':'INVENTORY_SEARCH_FORWARD_BROWSE:navigation-forward-search2','name':'supressAllConditions','value':'true'},
                {'id':'INVENTORY_SEARCH_FORWARD_BROWSE_LANDING:navigation-forward-search2','name':'supressAllConditions','value':'true'}
            ],
            updatePreference = function($, id, name, value) {
                var
                    overrideId = $('[id="'+id+'"]'),
                    prefName = name,
                    prefValue = value
                ;

                // If the window-preference-override exists manipulate it to meet compliance
                if(overrideId.length > 0){
                    // Add new preferences if they don't exist
                    if(overrideId.find('preference[name="'+prefName+'"]').length < 1) {
                        overrideId.append('  <preference name="'+prefName+'" value="'+prefValue+'"/>\n');
                        logInfo('added', 'preference', id, name, value);

                    // Otherwise, loop through the existing preferences and correct their values
                    } else {
                        var count = 0;
                        overrideId.children().each(function(i) {
                            if($(this).attr('name') == prefName && $(this).attr('value') != prefValue){
                                count = ++i;
                                $(this).attr('value', prefValue);
                                logInfo('modified', 'preference', id, name, value);
                            }
                        });
                    }

                // Otherwise, add the window-preference-override and the first preference
                } else {
                    $('window-overrides').append(
                        '    <window-preferences-override id="'+id+'">\n'+
                        '      <preference name="'+prefName+'" value="'+prefValue+'"/>\n'+
                        '    </window-preferences-override>\n'
                    );
                    logInfo('added', 'preference', id, name, value);
                }
            }
        ;

        // Remove pages from config
        if($allVLP.length > 0){
            $allVLP.remove();
            logInfo('removed', 'page', 'INVENTORY_LISTING_DEFAULT_AUTO_ALL');
        }

        // Update all of the MSLP pages
        if($MSLP.length > 0){
            $MSLP.each(function() {
                var alias = $(this).attr('alias');

                override.push({'id':alias+':content4','name':'disclaimer.type','value':'honda_with_destination'});
                override.push({'id':alias+':content1','name':'includeDestinationChargeInPrice','value':'true'});
                override.push({'id':alias+':model-specific-landing1','name':'overview.video.year.matching','value':'true'});
                override.push({'id':alias+':model-specific-landing1','name':'showVideos','value':'true'});

                if($('[id="'+alias+':content2"]').length > 0){
                    logInfo('alert', 'preference', alias, 'content.id', 'custom content');
                }
            });
        }

        // Update variation specific overrides
        if($('variation-ref') == 'v9_GLOBAL_0009_V1' || 'v9_GLOBAL_0009_V2'){
            override.push({'id':'default:inventory-search3','name':'listing.config.id','value':'auto-new'});
            override.push({'id':'landing:inventory-search3','name':'listing.config.id','value':'auto-new'});
        }

        // Update all preference overrides defined in override var
        for (var i = 0; i < override.length; i++) {
            var o = override[i];
            updatePreference($, o.id, o.name, o.value);
        }
    },
    updateItemDisplayConfig = function($) {
        var $itemDisplay = $('item-display'),
            $titleSet = $('display-set[id^="TITLE"]'),
            $listingSet = $('display-set[id^="LISTING"]'),
            $displayer,
            attributeCount,
            titleAttributes = [
                type = 'TITLE',
                year = {name: 'year', label: 'YEAR'},
                make = {name: 'make', label: 'MAKE'},
                model = { name: 'model', label: 'MODEL'},
                trim = {name: 'trim', label: 'TRIM'},
                bodyStyle = {name: 'bodyStyle', label: 'BODYSTYLE'}
            ],
            listingAttributes = [
                type = 'LISTING',
                engine = {name: 'engine', label: 'ENGINE', valueOverrideType: 'CONCATENATE', computeAttrs: '!engineSize, ,!engine'},
                transmission = {name: 'transmission', label: 'TRANSMISSION'}
            ],
            addXml = function(modType, type, name, label, valueOverrideType, computeAttrs, $displayer){
                var attributeArray = [];
                if(name){
                    attributeArray.push('name="'+name+'"');
                }
                if(label){
                    attributeArray.push('label="'+label+'"');
                }
                if(valueOverrideType){
                    attributeArray.push('valueOverrideType="'+valueOverrideType+'"');
                }
                if(computeAttrs){
                    attributeArray.push('computeAttrs="'+computeAttrs+'"');
                }

                if(attributeArray.length > 1) {
                    logInfo(modType, 'item-display-config display-set', type, name, label);

                    $displayer.append('\n\t\t\t<attribute '+attributeArray.join(' ')+' />');
                }
            },
            sortAttributes = function($displayer, attributes){
                var xmlNodes = $displayer.find('attribute'),
                    xmlNodeCount = xmlNodes.length,
                    attributeCount = attributes.length,
                    xmlNodeIds = [],
                    attributeIds = []
                ;

                // create an array of the XML Node IDs
                for(var j = 0; j < xmlNodeCount; j++){
                    xmlNodeIds.push($(xmlNodes[j]).attr('name'));
                }

                // create an array of the attribute IDs
                for(var k = 0; k < attributeCount; k++){
                    attributeIds.push(attributes[k].name);
                }

                // remove 'type' from the array before sorting
                attributeIds = attributeIds.slice(1);
                // sort once to correctly set the order of the array
                xmlNodeIds.sort(function(a, b){
                    return attributeIds.indexOf(a) - attributeIds.indexOf(b);
                });

                // sort again to shift additional attributes to the end
                xmlNodeIds.sort(function(a,b){

                    var itemA = attributeIds.indexOf(a) == -1 ? 1 : 0,
                        itemB = attributeIds.indexOf(b) == -1 ? 1 : 0
                    ;

                    return itemA - itemB;
                });

                var xmlNodesArray = [];

                for (var i = 0; i < xmlNodeIds.length; i++){
                    xmlNodesArray.push($displayer.find('attribute[name="'+xmlNodeIds[i]+'"]'));
                    logInfo('sorted', 'item-display-config display-set', attributes[0], xmlNodeIds[i], $displayer.find('attribute[name="'+xmlNodeIds[i]+'"]').attr('label'));
                }

                $displayer.html('\n\t\t\t'+xmlNodesArray.join('\n\t\t\t')+'\n\t\t');

            },
            addAttributes = function($displaySet, attributes) {
                if($displaySet){
                    $displayer = $displaySet.find('displayer[category="AUTO"][type="2"]');
                    
                    var displayerCount = $displayer.length;

                    for (var i = 0; i < displayerCount; i++){
                        var $this = $($displayer[i]),
                            attributeCount = attributes.length
                        ;
                        for (var j = 0; j < attributeCount; j++){
                            var $xmlNode = $this.find('[name='+attributes[j].name+']');
                            if($xmlNode.length < 1) {
                                addXml( 'modified', attributes[0], attributes[j].name, attributes[j].label, attributes[j].valueOverrideType, attributes[j].computeAttrs, $displayer);

                            }
                        }
                        sortAttributes($this, attributes);
                    }
                } else {
                    $itemDisplay.append(
                        '\t<display-set id="'+attributes[0]+'">\n'+
                        '\t\t<displayer category="AUTO" type="2"></displayer>\n'+
                        '\t</display-set>\n'
                    );
                    $displayer = $itemDisplay.find('display-set[id="'+attributes[0]+'"] displayer[category="AUTO"][type="2"]');
                    attributeCount = attributes.length;
                    for (var i=0; i<attributeCount; i++){
                        addXml( 'added', attributes[0], attributes[i].name, attributes[i].label, attributes[i].valueOverrideType, attributes[i].computeAttrs, $displayer);

                    }
                }
            }
        ;
        if($titleSet.length < 1){
            addAttributes(null, titleAttributes);
        } else {
            addAttributes($titleSet, titleAttributes);
        }
        if($listingSet.length < 1){
            addAttributes(null, listingAttributes);
        } else {
            addAttributes($listingSet, listingAttributes);
        }
    },
    logInfo = function(info, type, x, y, z){
        var action = info.toUpperCase();

        if(type == 'preference'){
            console.log(action+' '+type+': '+x+' - '+y+' set to '+z);
        } else if(type == 'page'){
            console.log(action+' '+type+': '+x);
        } else {
            console.log(action+' '+type+': '+x+' - '+y+' - '+z);
        }
    };
    return {
        'config': editConfig,
        'display/item-display-config': updateItemDisplayConfig
    }
};
    
