Ext.define('App.model.audit.AuditFlowLinkModel', {
    extend: 'Ext.data.Model',
    fields: [
    	{ name: 'id'},{ name: 'oid'},{ name: 'flowCode'},{ name: 'flagCode'},
    	{ name: 'nextFlagCode'},{ name: 'auditRole'},{ name: 'auditScope'},{ name: 'isPass'},
    	{ name: 'memo'},	{ name: 'nodeName'}
  	]
});