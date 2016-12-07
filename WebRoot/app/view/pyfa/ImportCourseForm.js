   Ext.define('App.view.pyfa.ImportCourseForm',{
   				extend:'Ext.panel.Panel',
//   				width: 750,
//   				height: 400,
//   				border:'0 0 0 0',
   				itemId:'importCourseForm',
   				initComponent: function(){
						var	me = this;
						Ext.applyIf(me,{
						items: [{
		   						xtype:'fieldset',
		   						title:'',
		        	            border:'0 0 0 0',
		        	         	margin:'0 0 0	 0',
		        	            padding:"0 0 0 0",
		        	            items: [
		        	            Ext.create('App.view.pyfa.FAKCList',{
		        	            		itemId:'fakcList',
		        	            		title:'',
			        	        		store: 'FAKCAllStore',
			        	        		height:395
			        	           })]
			        	       }]
						});
						me.callParent(arguments);
					}
   	 });
