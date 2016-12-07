Ext.define('App.model.audit.ViewUserRoleModel', {
    extend: 'Ext.data.Model',
    fields: [
    	{ name: 'id'},{ name: 'username'},{ name: 'usercname'},{ name: 'rolecode'},
    	{name:'rolename'} ,{name:'szdwh'}	,{name:'szdw'},
    	{name:'xzzw'},{name:'zc'},{name:'zcm'},{name:'nextFlagCode'},
    	{name:'flowCode'},{name:'flagCode'},{name:'auditScope'},{name:'isPass'},
    	{name:'rightCode'},{name:'rightName'},{name:'condition'}
  	]
});