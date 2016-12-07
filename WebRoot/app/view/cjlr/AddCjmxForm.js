   Ext.define('App.view.cjlr.AddCjmxForm',{
   				extend:'Ext.panel.Panel',
   				itemId:'addCjmxForm',
   				
   				initComponent: function(){
					var me = this;
					
					var grid  = Ext.create('App.view.cjlr.JxCjmxList',{
				                 itemId: 'cjmxList',
				                 kkkh: me.kkkh
				            })
				    
					Ext.applyIf(me,{
						items:[
						  	grid
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
