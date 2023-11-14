sap.ui.define([
    'sap/ui/core/mvc/Controller',
    "sap/m/MessageToast"
],  (Controller,
	MessageToast)=> {
    'use strict';
    return Controller.extend("walkthrough.controller.HelloPanel", {
        
        onShowHello: function () {
            //read message from i18n
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);

            // show a native JavaScript alert
            MessageToast.show("Hello World");
        },

		onOpenDialog: function() {
			this.pDialog = this.loadFragment({
                name:"walkthrough.view.HelloDialog"
            });

            this.pDialog.then((oDialog)=>oDialog.open());
		},
        onCloseDialog:function(){
            this.byId("HelloDialog").close();
        }

    });
});