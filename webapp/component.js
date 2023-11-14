sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
],  (UIComponent,JSONModel,ResourceModel) => {
   "use strict";
   // call the init function
   return UIComponent.extend("walkthrough.component", {
      metadata: {
         interfaces: ["sap.ui.core.IAsyncContentCreation"],
         manifest: "json"

      },
      init: function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
         // set data model
         const oData = {
            recipient: {
               name: "World"
            }
         };
         const oModel = new JSONModel(oData);
         this.setModel(oModel);

         const i18nModel = new ResourceModel({
            bundleName:"walkthrough.i18n.i18n"
         });
         this.setModel(i18nModel,"i18n")
      }
   });
});
