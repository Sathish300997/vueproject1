require.config({
    
    paths: {
        Jquery:"./apps/libs/jquery/jquery-3.2.1.min",
        agGrid: "./apps/libs/agGrid/ag-grid-enterprise.min",
        vue: "./apps/libs/vue",
        Vuetify: "./apps/libs/vuetify",
        Gantt: "./apps/libs/agGrid/chart.min",
        vueloader: "./apps/libs/requirejs-vue",
        ColorsForGraph: "./apps/libs/colors",
        CSSAgGrid: "./apps/libs/agGrid/ag-grid",
        CSSAgGridAlpine: "./apps/libs/agGrid/ag-theme-alpine",
        CSSMaterial: "./apps/styles/material-icons",
        CSSVuetify: "./apps/libs/vuetify.min",
        CSSGantt: "./apps/libs/agGrid/frappe-gantt.min",
        
    }
});

let vueApp;

function executeWidgetCode() {
    require([
        "UWA/Drivers/jQuery",
        //"jquery",

        "agGrid",
        "vue",
        "Vuetify",
        //"vueloader",
        "ColorsForGraph",
        "DS/WAFData/WAFData",
        "DS/DataDragAndDrop/DataDragAndDrop",
        "DS/i3DXCompassServices/i3DXCompassServices",
        "css!CSSAgGrid",
        "css!CSSAgGridAlpine",
        "css!CSSMaterial",
        "css!CSSVuetify",
        "css!CSSGantt",
       

    ], function ($, agGrid, Vue, Vuetify, cfg, WAFData, DataDragAndDrop, i3DXCompassServices) {
      
       Vue.use(Vuetify);
       
        require(["vueloader!apps/components/CheckData"], (
            CheckData
        ) => {
            
            const myComponent1 = Vue.component("main-component", {
                template: '<CheckData></CheckData>',
      
               
                data: function () {
                  
                    return {
                         
                    };

                },
                mounted: function () {
                     
                },
                watch: {},
                computed: {},
                methods: {},
                
            });
           

            vueApp = new Vue({
                el:"#main-component",
                vuetify: new Vuetify(),
                components: {
                    "main-component": CheckData
                },
            });
       
            
        });
        var $wdgBody = $(widget.body);
                
               
        $wdgBody.html(
             "<div id='main-component' class='widget-content'><main-component ref='main'></main-component></div>"
         );

        var myWidget = {
           
            onRefreshWidget: function () {
              
               var $wdgBody = $(widget.body);
                
               
               $wdgBody.html(
                    "<div id='main-component' class='widget-content'><main-component ref='main'></main-component></div>"
                );



                Vue.use(Vuetify);
                require(["vueloader!apps/components/CheckData"], (
                    CheckData
                ) => {
                    const myComponent = Vue.component("main-component", {
                        template: "<CheckData></CheckData>",
                        data: function () {
                            return {
                            };

                        },
                        mounted: function () {


                        },
                        watch: {},
                        computed: {},
                        methods: {},
                    });

                    vueApp = new Vue({
                        el: "#main-component",
                        vuetify: new Vuetify(),
                        components: {
                            "main-component": CheckData,
                        },
                        data: function () {
                            return {
                               
                            };

                        }
                    });
                });
            
            },
              
           
        };
        widget.addEvent("onRefresh", myWidget.onRefreshWidget);
    });
}
