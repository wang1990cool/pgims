Ext.define('Ext.ux.extend.ExcelExport', {
    extend: 'Ext.button.Button',
    alias: 'widget.excelExport',
    
    text: '导出',
    tooltip: '导出数据',
	iconCls: 'export_excel',
	actionUrl:'',
	operation:'',
    initComponent: function() {
        var me = this;
        
        me.callParent(arguments);
    },

    afterRender: function(){
    	var me = this;
        this.callParent();
    },
    
    onClick: function(){
    	var me = this;
    	var exportForm = me.buildForm();
    	
	    var pGrid =me.up('gridpanel');
	    var sStore =exportForm.down('#aFieldsGrid').getStore();
	    if(pGrid != undefined){
	    	var exportCols = pGrid.exportCols;
	    	for(var i in exportCols){
	    		sStore.add({fieldName:i,fieldCName:exportCols[i]});
	    	}
	    }
    	
		var exportWin = new Ext.Window({
			itemId:'exportWin',
			height:380,
			width:580,
			layout:'fit',
			closeAction:'hide',
			iconCls:'export_excel',
			resizable:false,
			shadow:true,
			title:'数据导出',
			modal:true,
			closable:true,
			autoShow:true,
			actionUrl: me.actionUrl,
			operation:me.operation,
			pGrid: me.up('gridpanel'),
			items:[exportForm]
		}); 
    },

    buildForm : function(){
		var me = this;
		if(me.disabled) return;
	    var exportForm = Ext.create('Ext.form.Panel', {
	    	itemId:'exportForm',
			height:370,
			width:570,
			bodyStyle:'padding:5 5 5 5',
	        items: [{
        	    xtype: 'container',
                height: 300,
		        autoWidth:true,
		        frame:true,
		        layout:{type: 'column'},
		        items:[{
		        	itemId:'aFieldsGrid',
	                xtype: 'gridpanel',
	                header: false,
	                selModel: Ext.create('Ext.selection.RowModel',{mode:"SINGLE"}),
	                viewConfig: {stripeRows: true,enableTextSelection: true},
	                autoScroll:true,
	                store:Ext.create('Ext.data.Store', {
	                    fields:['fieldName', 'fieldCName'],
	                    data:[]
	                }),
	                height: 280,
	                columnWidth:0.35,
	                columns: [{
                    	text: '导出字段',
						dataIndex: 'fieldCName',
						flex:1
                    }]
                },{
		            xtype: 'container',
		            height: 280,
					columnWidth:0.18,
					border:true,
					layout:{type:'vbox',align:'center',pack:'center'},
		            items: [{
		                xtype: 'button',
		                margins: '5 5 5 5',
		                itemId: 'addAllBtn',
		                text: '添加所有',
		                iconCls: 'rightArrow',
		                handler: me.addAll
		              },{
		                xtype: 'button',
		                margins: '5 5 5 5',
		                itemId: 'addSelsBtn',
		                text: '添加字段',
		                iconCls: 'rightArrow2',
		                handler: me.addOne
		              },{
		                xtype: 'button',
		                margins: '5 5 5 5',
		                itemId: 'removSelsBtn',
		                text: '撤销字段',
		                iconCls: 'leftArrow2',
		                handler: me.cancelOne
		              },{
		                xtype: 'button',
		                margins: '5 5 5 5',
		                itemId: 'removeAllBtn',
		                text: '撤销所有',
		                iconCls: 'leftArrow',
		                handler: me.cancelAll
		              }]
		          },{
		        	itemId:'eFieldsGrid',
	                xtype: 'gridpanel',
	                header: false,
	                selModel: Ext.create('Ext.selection.RowModel',{mode:"SINGLE"}),
	                viewConfig: {stripeRows: true,enableTextSelection: true},
	                autoScroll:true,
	                store:Ext.create('Ext.data.Store', {
				        fields:['fieldName', 'fieldCName'],
				        data:[]
				    }),
	                height: 280,
	                columnWidth:0.35,
	                columns: [{
		            	text: '已选字段',
						dataIndex: 'fieldCName',
						flex:1
		            }]
	            },{
		            xtype: 'container',
		            height: 280,
					columnWidth:0.12,
					border:true,
					layout:{type:'vbox',align:'center',pack:'center'},
		            items: [{
		                xtype: 'button',
		                margins: '5 5 5 5',
		                itemId: 'topBtn',
		                text: '置顶',
		                iconCls: 'topArrow',
		                handler: me.setTop
		              },{
		                xtype: 'button',
		                margins: '5 5 5 5',
		                itemId: 'upBtn',
		                text: '上移',
		                iconCls: 'topArrow2',
		                handler: me.setPrev
		              },{
		                xtype: 'button',
		                margins: '5 5 5 5',
		                itemId: 'downBtn',
		                text: '下移',
		                iconCls: 'downArrow2',
		                handler: me.setNext
		              },{
		                xtype: 'button',
		                margins: '5 5 5 5',
		                itemId: 'bottomBtn',
		                text: '置底',
		                iconCls: 'downArrow',
		                handler: me.setBottom
		              }]
		          }]
	        }],
			dockedItems: [{
			    xtype: 'toolbar',
			    dock: 'bottom',
				style:'background:transparent;',
			    layout:{type:'hbox',align:'center',pack:'center'},		    
			    items: [{
	                xtype: 'FileDownloader',
	                itemId: 'downFile',
	                width: 0,
	                height: 0
	            },{
	                itemId: 'expBtn',
	                text: '数据导出',
	                tooltip: '数据导出',
	                iconCls: 'export',
	                handler: me.exportFile
	            },{
	                itemId: 'retBtn',
	                text: '返回',
	                tooltip: '撤销返回',
	                iconCls: 'return_16',
	                handler: me.close
	            }
			]}]
	    });
	    
	    return exportForm;
    },
    
    addAll: function(o,e){
    	var sStore = o.up('form').down('#aFieldsGrid').getStore();
    	var rStore =  o.up('form').down('#eFieldsGrid').getStore();
    	var records = sStore.getRange(0,sStore.getCount());
		sStore.remove(records);
		rStore.add(records);
    },
    
//    addOne: function(o,e){
//    	var sGrid = o.up('form').down('#aFieldsGrid');
//    	var sStore = sGrid.getStore();
//    	var rStore =  btn.up('form').down('#eFieldsGrid').getStore();
//    	var records = sGrid.getSelectionModel().getSelection();
//		sStore.remove(records);
//		rStore.add(records);
//    },
    
    addOne: function(o,e){
    	var sGrid = o.up('form').down('#aFieldsGrid');
    	var sStore = sGrid.getStore();
    	var rStore =  o.up('form').down('#eFieldsGrid').getStore();
    	var records = sGrid.getSelectionModel().getSelection();
		sStore.remove(records);
		rStore.add(records);
    },

    
    cancelAll: function(o,e){
    	var sStore = o.up('form').down('#aFieldsGrid').getStore();
    	var rStore =  o.up('form').down('#eFieldsGrid').getStore();
    	var records = rStore.getRange(0,rStore.getCount());
		rStore.remove(records);
		sStore.add(records);
    },
    
    cancelOne: function(o,e){
    	var rGrid = o.up('form').down('#eFieldsGrid');
    	var sStore = o.up('form').down('#aFieldsGrid').getStore();
    	var rStore =  rGrid.getStore();
    	var records = rGrid.getSelectionModel().getSelection();
		rStore.remove(records);
		sStore.add(records);
    },
    
    setPrev:function(o,e){
    	var rGrid = o.up('form').down('#eFieldsGrid');
    	var rStore =  rGrid.getStore();
    	var record = rGrid.getSelectionModel().getSelection()[0];
    	var index = rStore.indexOf(record);
    	if(index >0 ){
			rStore.removeAt(index);
			rStore.insert(--index,record);
    	}
		rGrid.getSelectionModel().select(index,true,false);
    },
    
    setTop: function(o,e){
    	var rGrid = o.up('form').down('#eFieldsGrid');
    	var rStore =  rGrid.getStore();
    	var record = rGrid.getSelectionModel().getSelection()[0];
		rStore.remove(record);
		rStore.insert(0,record);
		rGrid.getSelectionModel().select(0,true,false);
    },
    
    setNext:function(o,e){
    	var rGrid = o.up('form').down('#eFieldsGrid');
    	var rStore =  rGrid.getStore();
    	var record = rGrid.getSelectionModel().getSelection()[0];
    	var index = rStore.indexOf(record);
    	if(index < rStore.getCount() -1 ){
			rStore.removeAt(index);
			rStore.insert(++ index,record);
    	}
		rGrid.getSelectionModel().select(index,true,false);
    },
    
    setBottom: function(o,e){
    	var rGrid = o.up('form').down('#eFieldsGrid');
    	var rStore=  rGrid.getStore();
    	var record = rGrid.getSelectionModel().getSelection()[0];
    	var index = rStore.indexOf(record);
    	if(index < rStore.getCount() -1 ){
			rStore.remove(record);
			rStore.insert(rStore.getCount(),record);
    	}
		rGrid.getSelectionModel().select(rStore.getCount()-1,true,false);
    },
    
    exportFile: function(o,e){
    	var me = this;
    	
    	var excelParams = {
    		title:'',
    		order:'',
    		cols:[],
    		params:'',
    		operation:''
    	}
    	var pGrid = me.up('window').pGrid;
    	var store = pGrid.getStore(), sort = store.getSorters()[0];
    	
    	excelParams.params = store.proxy.extraParams.params;
    	excelParams.operation = me.up('window').operation;
    	excelParams.title = pGrid.title;
    	excelParams.order = sort==null?null:sort.property + ' ' + sort.direction;
    	
    	var rStore = me.up('form').down('#eFieldsGrid').getStore(),cols = {};
    	if(rStore.getCount()>0){
        	rStore.each(function(rec){
        		excelParams.cols.push({'fieldName':rec.data.fieldName,'fieldCName':rec.data.fieldCName});
        	});
        	
            var downloader = me.up('form').down('#downFile');
            downloader.load({
                params: {excelParams:Ext.JSON.encode(excelParams)},
                url: me.up('window').actionUrl
            });
        	
    	}else{
    		var errmsg = "请选择导出的字段！";
    		Ext.MessageBox.show({
	           title: '错误',
	           msg: errmsg,
	           buttons: Ext.MessageBox.OK,
	           icon: Ext.MessageBox.ERROR  
	       });
    	}
    },
    
    close: function(o,e){
    	o.up('window').close();
    }
});