// SCRIPT METADATA BLOCK - USED BY TDD FOR SCRIPT CUSTOMIZATION AND EXECUTION
const scriptMeta = {
	title: 'Add a Single Site Property',
	description: 'Add a single site property to a site config.',
	allowMultiple: false,
	fields: [{
			name: 'propertyName',
			label: 'Property Name',
			type: 'text',
			required: true
		},
		{
			name: 'propertyValue',
			label: 'Property Value',
			type: 'text',
			required: true
		}
	}
};
// END SCRIPT METADATA BLOCK

const scriptFunc = (params) => {
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

export default {metadata: scriptMeta, func: scriptFunc};
