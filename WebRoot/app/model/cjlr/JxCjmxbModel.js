//Ext.define('App.model.cjlr.JxCjmxbModel', {
//    extend: 'Ext.data.Model',
//    fields: [{ name: 'id'},{ name: 'xh'},{ name: 'kkkh'},
//		{ name: 'xm'},{ name: 'ksxzm'},{ name: 'ksxz'},{ name: 'pscj'},{ name: 'fslkscj'},
//		{ name: 'kcdjcjm'},{ name: 'djlkscj'},{ name: 'kccj'}
//		]
//});

Ext.define('App.model.cjlr.JxCjmxbModel',{
	extend:'Ext.data.Model',
	fields:[
		{ name: 'id'},{ name: 'kkkh'},{ name: 'xh'},{ name: 'xm'},{ name: 'ksxzm'},
		{ name: 'ksxz'},{ name: 'pscj'},{ name: 'fslkscj'},{ name: 'kcdjcjm'},
		{ name: 'djlkscj'},{ name: 'kccj'},{ name: 'bz'}
	]
})