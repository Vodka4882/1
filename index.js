(function () {

    var a = [
        {
            type: "text",
            label: "Name: ",
            id: "name"
        },

        {
            type: "text",
            label: "Surname: ",
            id: "surname"
        },

        {
            type: "text",
            label: "Password: ",
            id: "password"
        },

        {
            type: "text",
            label: "Email: ",
            id: "email"
        },

        {
            type: "text",
            label: "Telephone: ",
            id: "tele"
        },

        {
            type: "checkbox",
            label: "I have read the License Agreement: ",
            id: "licence"
        }

            ];
    var div = document.getElementById("form");

    for (i = 0; i < a.length; i++) {
        var elem = document.createElement('div');
    obj = a[i];
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

                elem.appendChild(label);
                elem.appendChild(input);
                break;


            case "checkbox":
                var label = document.createElement("label");
                var attrLabel = document.createAttribute ("for");
                var textLabel = document.createTextNode(obj.label);
                label.appendChild(textLabel);
                attrLabel.value = obj.id;
                label.setAttributeNode(attrLabel);

                var input = document.createElement("checkbox");
                input.type = obj.type;
                input.id = obj.id;

                elem.appendchild(label);
                elem.appendchild(input);
                break;

        }
        div.appendChild(elem);
    }
    console.log(a);
})();

