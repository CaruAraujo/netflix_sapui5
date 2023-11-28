sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JASONModel) {
        "use strict";

        return Controller.extend("projetonetflix.controller.Inicio", {
            onInit: function () {
                var menu = {
                    primeiro : "Begin",
                    segundo : "Movies"
                };

                // criar modelo e preencher com dados
                var menuModel = new JASONModel();
                menuModel.setData(menu);
                // atribuir o modelo na tela
                var tela = this.getView();
                tela.setModel(menuModel, "ModeloMenu");

                var resultados = {
                    titles : []
                };

            var filmesModel = new JASONModel();
            filmesModel.setData(resultados);
            tela.setModel(filmesModel, "APIFilmes");


            },
            onPressLinkInicio: function () {
                alert("Você clicou em inicio");
            },
            onPressLinkSeries: function () {
                alert("Você clicou em series");
            },
            
            onApertarBuscar: function(){
                // obter o vaçpr do campo de busca
                var filtro = this.byId("inputBuscar").getValue();
                // alert(query);

                const settings = {
                    async: true,
                    crossDomain: true,
                    url: 'https://netflix54.p.rapidapi.com/search/?query= '
                    
                    + filtro + '&offset=0&limit_titles=50&limit_suggestions=20&lang=en',
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '8f6fb8ebf4msh9456c1c48d870eap163cc4jsnffa454b9c362',
                        'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
                    }
                };
                
                $.ajax(settings).done(function (response) {
                    console.log(response);
                    // resgatar modelo e atualizar os dados
                    var view  = this.getView();
                    var model = view.getModel("APIFilmes");
                    var dados = model.getData();

                    // limpar a lista
                    dados.titles = [];
                    dados.titles = response.titles;
                    model.refresh();


                }.bind(this));

            }
        });    
    });


                    // equivale ao initialization no ABAP
                // evento de inicialização

                // variáveis de texto
                // var serie = "Os trapalhões";

                // variaveis numéricas
                // var ano = 1985;

                // variaveis de lista de valores
                // equivale a tabela interna ABAP
                // se chama array no JS
                // var elenco = ["Didi", "Dede", "Mussum", "Zacarias"]
                // console.log(serie);
                // console.log(ano);
                // console.log(elenco);
                
                //ferramentas do desenvolvedor - console

                // variavel do tipo objeto - variável composta por varias propriedades
                // equivale a estrutura no ABAP
                // var liveAction = {
                // nome: "One Piece",
                // ano: 2023;
                // elenco : ['Ana', 'Carol', 'Fe']
                //};

                // var minhaLista = [
                // {
                // nome : "Trapalhoes",
                // ano : "1985",
                // elenco : ["Didi","Dede","Mussum","Zacarias"]
                // }
                // ];
                // console.log (minhaLista);