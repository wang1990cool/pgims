Ext.define('App.model.audit.AuditDetailModel', {
    extend: 'Ext.data.Model',
    fields: [
    	{ name: 'userName'},{ name: 'userCname'},{ name: 'proNo'},{ name: 'auditOpinion'},
    	{name:'auditDate'},{name:'flagCode'},{name:'flowCode'}
  	]
});