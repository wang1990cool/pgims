Ext.define('App.view.jxpk.JxPkjlList', {
	extend: 'Ext.grid.GridPanel',
	
	store: 'JxPkjlStore',
    columnLines: true,
    title: '排课信息',
//    frame: true,
    loadMask: true,
//    layout:'auto',
     autoScroll:true,
    viewConfig: { stripeRows: true ,
     	     getRowClass : function(record,rowIndex,rowParams,store){
     	     	var ggkbzm = record.get('ggkbzm');
     	     	if(roleCode == 'Academy' && ggkbzm == '1'){
     	     		  return 'x-grid-record-ggk-color ';
     	     	}
		 }
    },
    selModel: {  
        selType:'checkboxmodel'  
    }, 
	
	initComponent: function() {
        var me = this;
        
        var exportCols = {
        	kkkh:'开课课号',kch:'课程号',kcmc:'课程名称',kclb:'课程类别',ggkbz:'公共课标志',
        	jsmc:'教室名称',zjjs:'主讲教师',kczs:'课程周数',kcsj:'课程时间',dszbz:'单双周',
        	kcjc:'课程节次',kksj:'开课时间',xn:'学年',xq:'学期'
        };

        Ext.applyIf(me, {
        	exportCols:exportCols,
            columns: [
            	Ext.create('Ext.grid.RowNumberer',{width:30}),
                { text: exportCols['kkkh'], width: 180, dataIndex: 'kkkh', sortable: true},
               	{text:exportCols['kch'],width:90,dataIndex:'kch',sortable:true,hidden:true},
                { text: exportCols['kcmc'], width: 150, dataIndex: 'kcmc', sortable: true},
                { text: exportCols['kksj'], width: 180, dataIndex: 'kksj', sortable: false },
                { text: exportCols['kclb'], width: 100, dataIndex: 'kclb', sortable: true,hidden:true },
                { text: exportCols['jsmc'], width: 100, dataIndex: 'jsmc', sortable: true },
                { text: exportCols['zjjs'], width: 70, dataIndex: 'zjjs', sortable: true },
                { text: exportCols['kczs'], width: 100, dataIndex: 'kczs', sortable: false,hidden:true},
                { text: exportCols['kcsj'], width: 80, dataIndex: 'kcsj', sortable: false,hidden:true},
                { text: exportCols['dszbz'], width: 60, dataIndex: 'dszbz', sortable: false },
                { text: exportCols['kcjc'], width: 80, dataIndex: 'kcjc', sortable: false,hidden:true},
                { text: exportCols['ggkbz'], width: 80, dataIndex: 'ggkbz', sortable: true},
                { text:exportCols['xn'], width:90, dataIndex:'xn', sortable: true,hidden:false},
    			{ text:exportCols['xq'], width:60, dataIndex:'xq', sortable: true,hidden:false},
    			{ text:'是否冲突', width:80, dataIndex:'ctid', sortable: true,hidden:false,
    					renderer:function(value){
							if(value !=null){
									return "<a style=' text-decoration:none' href='#'><span style='color:red'>显示冲突</span></a>";
							}else{
									return "<span style='color:green'>未冲突</span>";
							}
    					}
    					
    			}
		    ],
		    
		   clickId:-1,
		   listeners:{
				cellClick: function (view, cell, cellIdx, record, row, rowIdx, eOpts) {
					if(this.headerCt.getHeaderAtIndex(cellIdx).dataIndex == "ctid"
							&& record.get('ctid') != null){
						var me = this;
						var pkjlStore = me.store;
						if(record.get('id') == me.clickId){
							for(var i = 0;i < pkjlStore.getCount();i++){
								me.getView().removeRowCls(i,'x-grid-record-red-color')
							 	var ggkbzm = pkjlStore.getAt(i).get('ggkbzm');
				     	     	if(roleCode == 'Academy' && ggkbzm == '1'){
				     	     		 me.getView().addRowCls(i,'x-grid-record-ggk-color');
				     	     	}
							}
							me.clickId = -1
						}else{
							for(var i = 0;i < pkjlStore.getCount();i++){
								 me.getView().removeRowCls(i,'x-grid-record-red-color')
								  me.getView().removeRowCls(i,'x-grid-record-ggk-color')
							}
							var ctid = record.get('ctid').split(',');
							for(var i = 0;i < ctid.length;i++){
								for(var j = 0;j < pkjlStore.getCount();j++){
									var pkjlRec = pkjlStore.getAt(j)
									if(ctid[i] == pkjlRec.get('id')){
										me.getView().addRowCls(j,'x-grid-record-red-color');
									}
								}
							}
								me.clickId = record.get('id');
						}
						 win = new Ext.Window({
								itemId:'pkjlCtWin',
								title:'冲突课程',
								iconCls:'detail_16',
								width: 925,
								height: 450,
								constrainHeader:true,
								layout:'fit',
								closeAction:'hide',
								resizable:false,
								shadow:true,
								modal:true,
								closable:true,
								animCollapse:true,
					//			autoScroll:true,
								autoShow:true,
								bodyStyle:{
									background: '#fff'
								},
								items:[Ext.create('App.view.jxpk.JxPkjlCtList',{
									itemId:'jxPkjlCtList',
									title:'',
									margin:'0 0 0 0'
								})]
						})
						var jxPkjlCtList = win.down('#jxPkjlCtList');
						var jxPkjlCtStore = jxPkjlCtList.getStore();
						jxPkjlCtStore.removeAll();
						var pkjlAllStore =  Ext.data.StoreManager.lookup('JxPkjlAllStore')
						pkjlAllStore.load({callback:function(){
						 	var ctid = record.get('ctid').split(',');
							for(var i = 0;i < ctid.length;i++){
								var index = pkjlAllStore.find('id',ctid[i]);
								var ctRec = pkjlAllStore.getAt(index);
								jxPkjlCtStore.insert(0,ctRec);
							}
						 	
						 }});

					}
				}
		   },
			dockedItems:[{
        	            		dock: 'top',
   							    xtype: 'toolbar',
   							    items:[{
					              xtype: 'FileDownloader',
					              itemId: 'fileDownloader',
					              width: 0,
					              height: 0
					     		  },{
   							    	text:'详情',
   							    	itemId:'detailBtn',
   							    	iconCls:'detail_16',
   							    	action:'pkjlDetail'
   							    },{
   							    	text:'修改',
   							    	itemId:'editBtn',
   							    	iconCls:'edit_16',
   							    	action:'pkjlEdit'
   							    },{
   							    	text:'删除',
   							    	itemId:'deleteBtn',
   							    	iconCls:'delete_16',
   							    	action:'delete'
   							    },{
   							    	text:'课表导出',
   							    	itemId:'exportBtn',
   							    	iconCls:'excel_16',
   							    	hidden:true,
   							    	action:'exportCourse'
   							    }]
   						}]
        });

        me.callParent(arguments);
    }
});
