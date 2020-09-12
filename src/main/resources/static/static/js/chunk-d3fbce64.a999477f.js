(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d3fbce64"],{"0310":function(e,t,a){},"58b2":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"searchBody"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.searchForm},nativeOn:{submit:function(e){e.preventDefault()}}},[a("el-form-item",[a("el-button",{attrs:{type:"success",icon:"el-icon-plus"},on:{click:e.showAddDialog}},[e._v("添加服务器")])],1)],1)],1),a("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:e.tableData,"row-key":"id",border:"","tree-props":{children:"children",hasChildren:"hasChildren"}}},[a("el-table-column",{attrs:{label:"行号",type:"index",width:"50"}}),a("el-table-column",{attrs:{label:"服务器名称",prop:"serverName"}}),a("el-table-column",{attrs:{label:"地址",prop:"host"}}),a("el-table-column",{attrs:{label:"端口",prop:"port"}}),a("el-table-column",{attrs:{label:"用户名",prop:"username"}}),a("el-table-column",{attrs:{label:"密码",prop:"password"}}),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit",circle:"",title:"编辑"},on:{click:function(a){return e.showEditDialog(t.row)}}}),a("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-close",circle:"",title:"删除"},on:{click:function(a){return e.deleteData(t.row)}}})]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"","page-sizes":[10,20,50],"page-size":e.pageSize,"current-page":e.pageNum,layout:"total, sizes, prev, pager, next, jumper",total:e.dataTotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),a("el-dialog",{attrs:{title:"添加服务器",visible:e.addDialog,width:"30%"},on:{"update:visible":function(t){e.addDialog=t}}},[a("el-form",{ref:"addForm",attrs:{model:e.addForm,rules:e.addFormRules,"label-width":"80px",size:"small"}},[a("el-form-item",{attrs:{label:"名称",prop:"serverName"}},[a("el-input",{attrs:{size:"mini"},model:{value:e.addForm.serverName,callback:function(t){e.$set(e.addForm,"serverName",t)},expression:"addForm.serverName"}})],1),a("el-form-item",{attrs:{label:"地址",prop:"host"}},[a("el-input",{attrs:{size:"mini"},model:{value:e.addForm.host,callback:function(t){e.$set(e.addForm,"host",t)},expression:"addForm.host"}})],1),a("el-form-item",{attrs:{label:"端口",prop:"port",rules:[{required:!0,message:"端口不能为空"},{type:"number",message:"端口必须为数字值"}]}},[a("el-input",{attrs:{size:"mini"},model:{value:e.addForm.port,callback:function(t){e.$set(e.addForm,"port",e._n(t))},expression:"addForm.port"}})],1),a("el-form-item",{attrs:{label:"用户名",prop:"username"}},[a("el-input",{attrs:{size:"mini"},model:{value:e.addForm.username,callback:function(t){e.$set(e.addForm,"username",t)},expression:"addForm.username"}})],1),a("el-form-item",{attrs:{label:"密码",prop:"password"}},[a("el-input",{attrs:{size:"mini"},model:{value:e.addForm.password,callback:function(t){e.$set(e.addForm,"password",t)},expression:"addForm.password"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.addDialog=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.confirmAddForm}},[e._v("确 定")])],1)],1)],1)},o=[],i=a("b775");function s(e){return Object(i["a"])({url:"/server/getPage",method:"post",data:e})}function n(e){return Object(i["a"])({url:"/server/delete",method:"get",params:e})}function l(e){return Object(i["a"])({url:"/server/save",method:"post",data:e})}var d={data:function(){return{tableData:[],dataTotal:null,searchForm:{pageSize:10,pageNum:1},addForm:{serverName:null,addType:"add",password:null},addFormRules:{serverName:[{required:!0,trigger:"blur",message:"必需项"}],host:[{required:!0,trigger:"blur",message:"必需项"}],username:[{required:!0,trigger:"blur",message:"必需项"}]},addDialog:!1}},mounted:function(){this.getData()},methods:{getData:function(){var e=this;s(this.searchForm).then((function(t){e.tableData=t.data.list,e.dataTotal=t.data.total}))},deleteData:function(e){var t=this;this.$confirm("确认删除?",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then((function(){n({id:e.id}).then((function(e){t.$notify({message:"删除成功",type:"success"}),t.getData()}))}))},confirmAddForm:function(){var e=this;this.$refs["addForm"].validate((function(t){if(t){if("add"===e.addForm.addType&&!e.addForm.password)return void e.$notify({message:"密码不能为空",type:"warning"});l(e.addForm).then((function(t){e.$notify({message:"保存成功",type:"success"}),e.addDialog=!1,e.getData()}))}}))},handleSizeChange:function(e){this.searchForm.pageSize=e,this.getData()},handleCurrentChange:function(e){this.searchForm.pageNum=e,this.getData()},showAddDialog:function(){this.addDialog=!0,this.addForm.addType="add"},showEditDialog:function(e){this.addDialog=!0,this.addForm=e,this.addForm.password=null,this.addForm.addType="edit"}}},u=d,c=(a("9dba"),a("2877")),m=Object(c["a"])(u,r,o,!1,null,"5a1b94be",null);t["default"]=m.exports},"9dba":function(e,t,a){"use strict";var r=a("0310"),o=a.n(r);o.a}}]);