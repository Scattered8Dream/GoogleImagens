sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("imagecatch.controller.Index", {
            onInit: function () {
                var imageList = {
                    Imagens : []
                };

                let ImageModel = new JSONModel(imageList);
                let view = this.getView();
                view.setModel(ImageModel, "ModeloImagem");

            },
            
            
            onPressBuscar: function(){
            
                let inputBusca = this.byId("ip_busca");
                let query = inputBusca.getValue();
                //alert(query);

                const settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q="+ query +"&pageNumber=1&pageSize=10&autoCorrect=true",
                    "method": "GET",
                    "headers": {
                        "X-RapidAPI-Key": "2ba6856604mshfdcdb090da42fd7p1c1152jsnc7a4b11453e3",
                        "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
                    }
                };
                
                $.ajax(settings).done(function (response) {
                    console.log(response);
                
                    let oImageModel = this.getView().getModel("ModeloImagem");
                    let oDadosImage = oImageModel.getData();
                
                    //Limpando o array
                    oDadosImage.Imagens = [];


                    let listaResultados = response.value ;
                    let newItem;

                    for(let i = 0; i < listaResultados.length; i++){

                        newItem = listaResultados[i];
                        oDadosImage.Imagens.push(newItem);
                    }

                    oImageModel.refresh();
                }.bind(this));
            
            }
        });
    });
