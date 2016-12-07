Ext.define('App.model.docu.DocuModel',{
	extend: 'Ext.data.Model',
	fields:[{name: 'id'},{name: 'fileNo'},{name:'fileTypeCode'},{name: 'fileName'},
			{name: 'fileCName'},{name: 'fileUrl'},{name: 'fileAbstract'},{name: 'fileUnit'},
			{name: 'fileTime'}]
});