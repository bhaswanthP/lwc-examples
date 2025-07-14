({
    init : function(component, event, helper) {
        let allowed = $A.get("$Label.c.AllowedCountries").split(';');
        component.set("v.countries", allowed);
    },

    handleChange : function(component, event) {
        let selected = event.getSource().get("v.value");
        let allowed = component.get("v.countries");

        if (!allowed.includes(selected)) {
            component.set("v.selectedCountry", "");
            component.set("v.errorMessage", "Selected country is not supported.");
        } else {
            component.set("v.selectedCountry", selected);
            component.set("v.errorMessage", "");
        }
    },

    handleSave : function(component, event, helper) {
        let action = component.get("c.saveCountry");
        action.setParams({
            contactId: component.get("v.recordId"),
            country: component.get("v.selectedCountry")
        });

        action.setCallback(this, function(response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                alert("Country saved successfully!");
                // Optionally refresh or fire event
            } else {
                let errMsg = response.getError()[0]?.message || "Unknown error";
                component.set("v.errorMessage", errMsg);
            }
        });

        $A.enqueueAction(action);
    }
})
