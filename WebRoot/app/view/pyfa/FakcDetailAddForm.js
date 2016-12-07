   Ext.define('App.view.pyfa.FakcDetailAddForm',{
   				extend:'Ext.panel.Panel',
   				itemId:'fakcDetailAddForm',
   				width: 750,
   				height: 400,
   				border:'0 0 0 0',
   				items:[{
   						xtype:'fieldset',
   						title:'',
        	            border:'0 0 0 0',
        	         	margin:'0 0 0	 0',
        	            padding:"0 0 0 0",
        	            items: [
        	            Ext.create('App.view.pyfa.FAKCDetailList',{
        	            		itemId:'fakcDetailList',
        	            		title:'',
	        	        		store: 'FAKCAllStore',
	        	        		height:395
	        	           })]
	        	       }]
   	 });
