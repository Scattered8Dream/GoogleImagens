sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("imagecatch.controller.Index", {
            onInit: function () {

            },
            
            
            onPressBuscar: function(){
            
                let inputBusca = this.byId("ip_busca");
                let query = inputBusca.getValue();
                alert(query);
            
            }
        });
    });
