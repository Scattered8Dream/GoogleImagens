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
                var imageList = {
                    Imagens : [
                    {
                        url : "https://cdn.albumoftheyear.org/album/78827-coisas.jpg",
                        thumbnail : "https://rapidapi.usearch.com/api/thumbnail/get?value=2725385943732621789",
                        title : "Moacir Santos - Coisas - Reviews - Album of The Year",
                        provider : {
                            name : "albumoftheyear"
                        }
                    },
                    {    

                        url : "https://cdn.albumoftheyear.org/album/78827-coisas.jpg",
                        thumbnail : "https://rapidapi.usearch.com/api/thumbnail/get?value=2725385943732621789",
                        title : "Moacir Santos - Coisas - Reviews - Album of The Year",
                        provider : {
                            name : "albumoftheyear"
                        }
                    }
                    ]
                }
            },
            
            
            onPressBuscar: function(){
            
                let inputBusca = this.byId("ip_busca");
                let query = inputBusca.getValue();
                alert(query);
            
            }
        });
    });
