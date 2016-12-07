   Ext.define('App.view.cjlr.DisAddCjmxForm',{
   				extend:'Ext.panel.Panel',
   				itemId:'disAddCjmxForm',
   				
   				initComponent: function(){
					var me = this;
					
					Ext.applyIf(me,{
						items:[
							Ext.create('App.view.cjlr.DisCjmxList',{
				                 itemId: 'disCjmxList'
				            })
						]
					});
					
					me.callParent(arguments);
				}
//   				items:[{
//   						xtype:'fieldset',
//   						title:'',
//        	            border:'0 0 0 0',
//        	         	margin:'0 0 0 0',
//        	         	padding:'0 0 0 0',
//        	            items: [
//        	            
//        	            Ext.create('App.view.cjlr.CJMXList',{
//        	            		itemId:'cjmxList'
////        	            		store: 'ViewJxCjmxStore'
//	        	           })]
//	        	       }]
   	 			});
