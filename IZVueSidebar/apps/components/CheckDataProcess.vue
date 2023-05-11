<style>
/* Google Font Link */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
@import url("https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css");

.sidebar {
  position: relative;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  min-height: min-content;
  width: 78px;
  background: var(--bg-color);
   z-index: 99;
  transition: all 0.5s ease;
}
.sidebar.open {
  width: 250px;
}
.sidebar .logo-details {
  height: 60px;
  display: flex;
  align-items: center;
  position: relative;
}
.sidebar .logo-details .logo_name {
  color: var(--logo-title-color);
  font-size: 20px;
  font-weight: 600;
  opacity: 0;
  transition: all 0.5s ease;
}
.sidebar.open .logo-details .logo_name {
  opacity: 1;
}
.sidebar .logo-details #btn {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  font-size: 22px;
  transition: all 0.4s ease;
  font-size: 23px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s ease;
}
.sidebar i {
  color: var(--icons-color);
  height: 60px;
  min-width: 50px;
  font-size: 28px;
  text-align: center;
  line-height: 60px;
}
.sidebar li {
  position: relative;
  margin: 8px 0;
  list-style: none;
}
.sidebar input {
  font-size: 15px;
  color: var(--serach-input-text-color);
  font-weight: 400;
  outline: none;
  height: 50px;
  width: 100%;
  width: 50px;
  border: none;
  border-radius: 12px;
  transition: all 0.5s ease;
  background: var(--secondary-color);
}
.sidebar.open input {
  padding: 0 20px 0 50px;
  width: 100%;
}
.sidebar .bx-search {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  font-size: 22px;
  background: var(--secondary-color);
  color: var(--icons-color);
}
.sidebar li a {
  display: flex;
  height: 100%;
  width: 100%;
  border-radius: 12px;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  background: var(--bg-color);
}
.sidebar li a:hover {
  background: var(--menu-items-hover-color);
}
.sidebar li a .links_name {
  color: var(--menu-items-text-color);
  font-size: 15px;
  font-weight: 400;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: 0.4s;
}
.sidebar.open li a .links_name {
  opacity: 1;
  pointer-events: auto;
}
.sidebar li a:hover .links_name,
.sidebar li a:hover i {
  transition: all 0.5s ease;
  color: var(--bg-color);
}
.sidebar li i {
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  border-radius: 12px;
}
.center {
  text-align: center;
 font-size: 18px;
 
}
.tablesize {
   margin-left: 30vh;
   transition: all 0.5s ease;
  
}
.tablesize1 {

   margin-left: 9.6vh;
   transition: all 0.5s ease;
   
}


form {
  padding: 10px;
  border: 2px solid black;
  border-radius: 5px;
}
input {
  padding: 4px 8px;
  border: 1px solid black;
  margin: 4px;
}
select {
  padding: 4px 8px;
  border: 1px solid black;
  margin: 4px;
}


.moduleContent1 {
  
  height: 94vh;
 
    
}
.moduleContent3 {
  
  padding: 7px;
    background: #015685;
 
  }
  @media screen and (max-width: 600px) {
.tablesize {
   margin-left: 90vh;
   transition: all 0.5s ease;
  
}
.tablesize1 {
   margin-left: 4.3vh;
   transition: all 0.5s ease;
   
}
}
 

</style>

<script>
define([
  'DS/WAFData/WAFData',
  'agGrid',
  'vue',
  'DS/i3DXCompassServices/i3DXCompassServices',
  'DS/DataDragAndDrop/DataDragAndDrop',
  



], function (
  WAFData,
  agGrid,
  Vue,
  i3DXCompassServices,
  DataDragAndDrop,


) {
  return Vue.component("CheckDataProcess", {
    template: ` <v-app class="parameterDiv">
      <v-container fluid>
      <div>
      <div
    class="sidebar"
    :class="isOpened ? 'open' : ''"
    :style="cssVars"
  >
    <div
      class="logo-details"
      style="margin: 6px 14px 0 14px"
    >
     
      <div class="logo_name">
        {{ menuTitle }}
      </div>
      <i
        class="bx"
        :class="isOpened ? 'bx-menu-alt-right' : 'bx-menu'"
        id="btn"
        @click="isOpened = !isOpened"
      />
    </div>
      <li
            id="links_search"
            v-if="isSearch"
            @click="isOpened = true"
          >
            <i class="bx bx-search" />
            <input
              type="text"
              :placeholder="searchPlaceholder"
              @input="$emit('search-input-emit', $event.target.value)"
            >
            
          </li>
          
          <li
            v-for="(menuItem, index) in menuItems"
       
            
          >
           
            <a
            v-if="isUsedVueRouter"
              
              @click="handleClick(menuItem.name)"
             
            >
              <i
                class="bx"
                :class="menuItem.icon || 'bx-square-rounded'"
              />
              <span class="links_name">{{ menuItem.name }}</span>
            </a>

          </li>
           
      </div>

    
      


  
             
                
                <div :class="isOpened ? 'tablesize' : 'tablesize1'">
                <div ref="myGrid" class="ag-theme-alpine moduleContent1" v-if="isLoadTable02" >
                <nav>
 <v-toolbar  dark color="#015685">
 <v-toolbar-title >
 <span class="font-weight-light">Tool Bar</span>
 </v-toolbar-title>
  <v-spacer></v-spacer>
    <v-btn icon class="hidden-xs-only">
<v-icon>mdi-arrow-left</v-icon>
 </v-btn>
 <v-btn icon>
 <v-icon>mdi-magnify</v-icon>
 </v-btn>
 <v-btn icon @click="showAlert">
 <v-icon>mdi-dots-vertical</v-icon>
  </v-btn>
 <v-btn icon>
 <v-icon>mdi-heart</v-icon>
</v-btn>
 <v-btn icon>
 <v-icon>mdi-filter</v-icon>
  </v-btn>
<v-btn icon>
<v-icon>mdi-reply</v-icon>
</v-btn>
 </v-toolbar>
  </nav>
                   </div>

          </div>
          

                   </div>  
                   
                   
                   <v-row justify="center">
    <v-dialog
      v-model="isLoadTable"
      width="600"
     
    >
    <v-card class="center" >
      
      <v-row v-if="isLoadTable">
        <form>  
          
 Name <input type="text" v-model="testing1">
  <v-btn
            color="primary"
           
            @click="getData02()"
          >
            click
          </v-btn>
        </form>
</v-row>
</v-dialog>
</v-card>



      <v-row justify="center">
    <v-dialog
      v-model="formSubmitted"
      width="700"
    >
    <v-card>
  <form  v-if="formSubmitted">
     
    Type<br> <input type="text" v-model="type"><br>
    Name<br> <input type="text" v-model="name"><br>
    Revision<br> <input type="text" v-model="revision"><br>
    Policy<br> <input type="text" v-model="policy"><br>
    Vault  <br> <select v-model="vault">
  <option disabled value="">select vault </option>
  <option>SIXW</option>
  <option>eService Sample</option>
  <option>eService Administration</option>
  <option>eService Production</option>
  <option>vplm</option>
  </select>
<v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="default"
           
            @click="formSubmitted = false"
          >
            Close
          </v-btn>
          <v-btn
            color="primary"
            
            @click="postData()"
          >
            Create
          </v-btn>
        </v-card-actions>



    </form>
    </v-card>
  </v-dialog>
  </v-container>
    </v-app>
  `,

    data() {
      return {
        isOpened: false,
        formSubmitted: false,
        type:'',
        name:'',
        revision:'',
        policy:'',
        vault:'',
        isLoadTable: false,
        testing1:'',
        isLoadTable02: false,
        busType:'',
        busName:'',
        busId:'',
        busDataArray:[],
        data: null,
       
      };
    },


    mounted() {
        const checktheInput = widget.body.querySelector('.parameterDiv');
        const that = this;
        DataDragAndDrop.droppable(checktheInput, {
          drop(data) {
            that.data = data;
            alert(data)
            alert("mm")
           // that.callData(JSON.parse(data));       //  called callData(data){}
            
          }
        });
      },

    props: {
      //! Menu settings
      isMenuOpen: {
        type: Boolean,
        default: true,
      },
      
      isUsedVueRouter: {
        type: Boolean,
        default: true,
      },
      menuTitle: {
        type: String,
        default: "Side Bar",
      },

     

      menuItems: {
        type: Array,
        default: () => [
          {
            name: "Dashboard",
            icon: "bx-grid-alt",
          },
          {
            name: "User",
            icon: "bx-user",
          },
          {
           
            name: "Create",
            icon: "bx bx-plus",
          },
          {
            name: "Show Data",
            icon: "bx bx-data",
          },
        ],
      },

      //! Search
      isSearch: {
        type: Boolean,
        default: false,
      },
      searchPlaceholder: {
        type: String,
        default: "Search...",
      },

      //! Styles
      bgColor: {
        type: String,
        default: "#015685",
      },
      secondaryColor: {
        type: String,
        default: "#1d1b31",
      },
      homeSectionColor: {
        type: String,
        default: "#3337b0",
      },
      logoTitleColor: {
        type: String,
        default: "#fff",
      },
      iconsColor: {
        type: String,
        default: "#fff",
      },
      itemsTooltipColor: {
        type: String,
        default: "#e4e9f7",
      },
      searchInputTextColor: {
        type: String,
        default: "#fff",
      },
      menuItemsHoverColor: {
        type: String,
        default: "#fff",
      },
      menuItemsTextColor: {
        type: String,
        default: "#fff",
      },
      menuFooterTextColor: {
        type: String,
        default: "#7cd3eb",
      },
    },


    beforeMount() {
       
  
       this.columnDefs = [
         { headerName: 'BusType', field: 'oType',sortable:true,floatingFilter: true,filter: 'agNumberColumnFilter', pinned: 'left',lockPinned: true,checkboxSelection:true,editable:true,rowGroup: true,enablePivot:true,rowDrag: true },
         { headerName: 'BusName', field: 'oName',sortable:true,filter: 'agTextColumnFilter',floatingFilter: true,editable:true,groupDisplayType : 'singleColumn' ,rowDrag: true,enablePivot:true }, // editable: (params) => params.data.id > 20
         { headerName: 'BusId', field: 'oId',sortable:true,filter:true,editable: true,resizable: true,animateRows:true }
       ];

     },


    mounted() {
       this.isOpened = this.isMenuOpen
    },
    computed: {
      cssVars() {
        return {
         
          "--bg-color": this.bgColor,
          "--secondary-color": this.secondaryColor,
           "--logo-title-color": this.logoTitleColor,
          "--icons-color": this.iconsColor,
         "--serach-input-text-color": this.searchInputTextColor,
          "--menu-items-hover-color": this.menuItemsHoverColor,
          "--menu-items-text-color": this.menuItemsTextColor,
         
        };
      },
     
    },

    methods: {

      

      handleClick: function (a) {
       
        if(a==="Create"){
                this.isLoadTable02=false;
                this.formSubmitted=true;
               
                }

      if(a==="Show Data"){
        this.isLoadTable02=false;
        this.isLoadTable=true;
       // widget.body.style.backgroundColor = "#E4E7F0";

        }
        
      },
      showAlert() {

   alert('You clicked the dots vertical icon!');

  },
      
      postData: function(){
        this.formSubmitted=false;
       

          var type=this.type;
          var name=this.name;
          var revision=this.revision;
          var policy=this.policy;
          var vault=this.vault;

        i3DXCompassServices.getServiceUrl({
    serviceName: '3DSpace', 
        platformId: widget.getValue('x3dPlatformId'),
    onComplete : function (URLResult){
       var ruvith=URLResult;
	   
	   
	   
	   
  var urlWAF= ruvith+"/resources/WidgetServiceModelerDemoRu/CreateObj";
  
    
    var dataWAF={
    
    "type":type,
    "name":name,
    "revision":revision,
    "policy":policy,
    "vault":vault
    };
	
	  console.log(dataWAF)

    var methodWAF="POST";
    WAFData.authenticatedRequest(urlWAF,
    {
    method:methodWAF,
    data: dataWAF,
    type:'json',
    onComplete:function (dataResp)
    {
        
    if(dataResp.msg==="OK"){
    alert("Object Created Successfully");
   
    
   
    }
    else
    {
    alert("Opportunity Object creation failed,Error in webservice");
    
    }
    },
    onFailure: function(error){
    widget.body.innerHTML +="<p>Call Faillure</p>";
    widget.body.innerHTML +="<p>"+JSON.stringify(error)+"</p>";
    }
    });
            },
            
        });		
       

      },


      getData02: function(){

        this.isLoadTable=false;
        this.callData();
        
      },
      callData() {
         
         const that = this;
     

         let URLResult= '';
         const toConsiderplatformId =widget.getValue('x3dPlatformId');
       
         i3DXCompassServices.getPlatformServices({
     
             onComplete: function (dataplatform) {
         
             
       for(let i=0;i<dataplatform.length;i++){
       
               if(dataplatform[i].platformId === toConsiderplatformId) {
       
                 URLResult =dataplatform[i]['3DSpace'];
         
                 that.Passport_URL = dataplatform[i]['3DPassport'] + '/3DPassport/login?service=INTF';
         
                 const urlWAFid = that.Passport_URL;
                 const methodWAFid = 'GET';
         
                 WAFData.authenticatedRequest(urlWAFid, {
                   method: methodWAFid,
                  async: false,
         
                   onComplete: function (dataresp) {
                     var data = JSON.parse(dataresp);
                   },
                   onFailure: function (error) {}
                 })
               }
             }   
                that.tableData(URLResult);
         },
         onFailure: function (error) {
           alert("error_3DX")
         }
           });
       },


       tableData: function (URLResult) {
         
         
         const that = this;
        
         that.URLResult = URLResult;
         const ctxurl1 = URLResult +'/resources/WidgetServiceModelerDemo/GetData?type='+ that.testing1;
       
        

         var ctxOptions = {
             method: 'GET',
            headers: {Accept: that.headerValue},
       
            onComplete: function(dataResp){
            
             const busData = JSON.parse(dataResp);
          
   
                     if(true){
          
            var busObjVal=busData.data
            
            that.isLoadTable02=true;
           
              for (var i=0; i<busObjVal.length; i++) {
                       
              that.busType=busObjVal[i].type
              that.busName=busObjVal[i].name
              that.busId=busObjVal[i].id
             
              const obj1={'oType':that.busType,'oName':that.busName,'oId':that.busId};
              that.busDataArray.push(obj1);
          
             
             
                      }
             
                     const table = {list: that.busDataArray};
                    
                    
             that.getTable(table); 
            
                     }
                     else{
                       alert("not working")
                     }
   
               },
           onFailure: function () {

             alert("not working")
           }
         };
         
        
         WAFData.authenticatedRequest(ctxurl1, ctxOptions);
       
       },

      getTable(table) {


const that = this;
that.isLoadTable02 = true;

if (true) {

  that.gridOptions = {
    columnDefs: that.columnDefs,
    rowData: that.setRowData(table),
    enableCharts:true,
    enableRangeSelection:true,
    pagination: true,
    paginationAutoPageSize: true,
   
    rowSelection:'multiple',
    sideBar:['columns','filters',],

    suppressRowClickSelection: true,
   
    statusBar : {
statusPanels: [
{
  statusPanel: 'agAggregationComponent',
  statusPanelParams: {
     
      aggFuncs: ['min', 'max', 'avg','count',]
  },
  align: 'left',

}
]
},
getContextMenuItems: function(params) {
 var result = [
 {
name: 'Edit',
  action: function() {
 alert("inside the Edit right click menu")
 },
 icon: '<i class="fa fa-edit"></i>' 
 },
 {
  name: 'Delete',
 action: function() {
 alert("inside the Delete right click menu")
},
 icon: '<i class="fa fa-trash"></i>' 
 },
 'separator', 
 {
 name: 'Copy',
 action: function() {
  },
 icon: '<i class="fa fa-copy"></i>' 
 }
 ];
 return result;
}
  
  };
  this.$nextTick(() => {
    new agGrid.Grid(that.$refs.myGrid, that.gridOptions );
  });
}

},


setRowData(table) {
          const data = table.list;
         
          return data;
        },



    },
  });
});
</script>
