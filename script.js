'use strict';
var date = new Date();
$('#birth').datetimepicker({
	pickTime: false,
	maxDate: date
});

(function () {
	var form = [
		{
			type: 'text',
			label: 'Name',
			id: "name"
		},
		{
			type: 'date',
			label: 'Birth',
			id: 'bdate'
		},
		{
			type: 'number',
			label: 'Age',
			id: 'age'
		},
		{
			type: 'text',
			label: 'Birth place',
			id: 'bplace'
		},
		{
			label: 'Reset'
		},
		{
			label: 'Sibmit'
		},
	];

	for (var i = 0; i < form.length; i++) {
		var obj = form[i];
		var element = document.createElement("div");
		switch (obj.type) {
			case "text":
				var label = document.createElement("label");
				var attrLabel = document.createAttribute("for");
                var textLabel = document.createTextNode(obj.label);
                label.appendChild(textLabel);
                attrLabel.value = obj.id;
				label.setAttributeNode(attrLabel);


                var input = document.createElement("input");
                input.type = obj.type;
                input.id = obj.id;

                element.appendChild(label);
                element.appendChild(input);

				break;
		}
        var div = document.getElementById("form");
        div.appendChild(element);
	}

})();