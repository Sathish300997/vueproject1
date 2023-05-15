<script>
define([
'vue',
  'vueloader!apps/components/CheckDataProcess'
], function (Vue, CheckDataProcess) {


  return Vue.component('CheckData', {
    
    template: `  <v-app>
                  <v-main>
                    <CheckDataProcess></CheckDataProcess>
                  </v-main>
                </v-app>`,

                
    data: function () {
      return {
       
      };
     
    },
    mounted: function () {

     

    },
    methods: {},
    computed: {},
    watch: {}
    })
});
</script>
