   Ext.define('App.view.pygrjh.AddGrjhkcForm',{
   				extend:'Ext.form.Panel',
   				alias:'widget.addGrjhkcForm',
   				itemId:'addGrjhkcForm',
//   				id:'addGrjhkcForm',
   			    width:785,
   				items:[{
   						xtype:'fieldset',
   						title:'',
        	            border:'0 0 0 0',
        	         	margin:'0 0 0 0',
        	            padding:"5 8 10 10",
        	            width:785,
        	            items: [
        	            Ext.create('App.view.pygrjh.PYGRJHKCList',{
        	            		itemId:'grjhkcList',
        	            		title:'',
//        	            		region:'center',
	        	        		store: 'PYGRJHKCAllStore',
//	        	        		minHeight:100,
      	        				height:365
//      	        				,
//	        	        		margin:'5 0 270 5'
	        	           })]
	        	       }]
   	 			});
