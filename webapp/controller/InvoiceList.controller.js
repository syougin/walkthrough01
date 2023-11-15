sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    "../model/formatter"
],  (Controller, JSONModel,formatter)=> {
    'use strict';
    return Controller.extend("walkthrough.controller.InvoiceList", {
        // object formatter is defined in the model/formatter.js file
        formatter: formatter,
        
        // currency is defined as a global variable in the controller
        onInit(){
            const oViewModel = new JSONModel({
                currency :'EUR'
            });
            this.getView().setModel(oViewModel,"view")
        }
    });
});