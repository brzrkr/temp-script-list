module.exports = function(params){
	var themekit = params.themeKit,
		profileRef = params.profile,
		variation = params.variation,
		accountsArr = [
			{ "accountId": "dag_111_tristateaudidealers_aoa", "property": "tri-state" },
			{ "accountId": "dag_112_pittsburghaudidealers_aoa", "property": "pittsburgh" },
			{ "accountId": "dag_113_clevelandaudidealers_aoa", "property": "cleveland" },
			{ "accountId": "dag_114_cincinnatiaudidealers_aoa", "property": "cincinnati" },
			{ "accountId": "dag_115_sandiegoaudidealers_aoa", "property": "san-diego" },
			{ "accountId": "dag_116_twincitiesareaaudidealers_aoa", "property": "twin-cities" },
			{ "accountId": "dag_117_hartfordnewhavenaudidealers_aoa", "property": "hartford-new-haven" },
			{ "accountId": "dag_118_columbusaudidealers_aoa", "property": "columbus" },
			{ "accountId": "dag_119_northtexasaudidealers_aoa", "property": "north-texas" },
			{ "accountId": "dag_120_coloradoaudidealers_aoa", "property": "colorado" },
			{ "accountId": "dag_121_houstonareaaudidealers_aoa", "property": "houston" },
			{ "accountId": "dag_122_austinaudidealers_aoa", "property": "austin" },
			{ "accountId": "dag_123_lasvegasaudidealers_aoa", "property": "las-vegas" },
			{ "accountId": "dag_124_milwaukeeaudidealers_aoa", "property": "milwaukee" },
			{ "accountId": "dag_127_stlouisaudidealers_aoa", "property": "st-louis" },
			{ "accountId": "dag_220_arizonaaudidealers_aoa", "property": "arizona" },
			{ "accountId": "dag_225_utahaudidealers_aoa", "property": "utah" },
			{ "accountId": "dag_230_tampaareaaudidealers_aoa", "property": "tampa" },
			{ "accountId": "dag_235_triadaudidealers_aoa", "property": "triad" },
			{ "accountId": "dag_285_newenglandaudidealers_aoa", "property": "new-england" },
			{ "accountId": "dag_289_oregonaudidealers_aoa", "property": "oregon" },
			{ "accountId": "dag_290_pugetsoundareaaudidealers_aoa", "property": "puget-sound" },
			{ "accountId": "dag_320_delawarevalleyaudidealers_aoa", "property": "delaware-valley" },
			{ "accountId": "dag_340_atlantaaudidealers_aoa", "property": "atlanta" },
			{ "accountId": "dag_351_southerncaliforniaaudidealers_aoa", "property": "southern-california" },
			{ "accountId": "dag_441_fortmeyersnaplesaudidealers_aoa", "property": "fort-meyers-naples" },
			{ "accountId": "dag_445_centralfloridaaudidealers_aoa", "property": "central-florida" },
			{ "accountId": "dag_630_bayareaaudidealers_aoa", "property": "san-francisco" },
			{ "accountId": "dag_675_chicagolandaudidealers_aoa", "property": "chicagoland" },
			{ "accountId": "dag_680_southfloridaaudidealers_aoa", "property": "south-florida" },
			{ "accountId": "dag_685_sacramentoareaaudidealers_aoa", "property": "sacramento" },
			{ "accountId": "dag_719_charlotteaudidealers_aoa", "property": "charlotte" },
			{ "accountId": "dag_835_dcaudidealers_aoa", "property": "dc" },
			{ "accountId": "dag_836_marylandaudidealers_aoa", "property": "maryland" },
			{ "accountId": "dag_837_audihamptonroadsdealers_dag", "property": "hampton-roads" },
			{ "accountId": "dag_90_detroitareaaudidealers_aoa", "property": "detroit" }
		],
		configChanges = function($) {
			var configSiteID = $('site').attr('id'),  // Getting account
				accountsObj = accountsArr.filter(function(accountsObj){   // looping through account arry
			    	return accountsObj.accountId === configSiteID;
				})[0],
				propertyValue = accountsObj.property
			;
		    // Wiping out properties, sitemap, window-overrides
		    $('sitemap, window-overrides, properties').empty();

			// Set site propery based on array
			$('properties').append('<property name="Tier2Region" value="'+ propertyValue +'"/>');

			// Themekit Update
		    $('themekit').text(themekit);
		    console.log('Updated themekit');

		    // Variation Update
		    $('variation-ref').text(variation);
		    console.log('Updated variation-ref');

		    // Profile Update
		    if($('profile-ref').length < 1 ) {
		        $('variation-ref').after('<profile-ref>$profileRef</profile-ref>');
		        console.log('Added new profile-ref');
		    }else{
		    	$('profile-ref').text(profileRef);
		    	console.log('updated profile-ref');
		    }
		},
	cssChanges = function($) {
	    // Disabling custom css
	    $('content').attr('enabled','false');
	},
	jsChanges = function($) {
	    // Disabling custom css
	    $('section').attr('enabled','false');
	},
	metadataChanges = function($) {
	    // Wiping out metadata
	    $('meta-data').empty();
	};
	return {
		'config': configChanges,
		'css/custom': cssChanges,
		'javascript/sitewidejs': jsChanges
	}
};
