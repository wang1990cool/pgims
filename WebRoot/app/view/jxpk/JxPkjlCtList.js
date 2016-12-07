Ext.define('App.view.jxpk.JxPkjlCtList', {
	extend: 'Ext.grid.GridPanel',
	alias: 'widget.jxPkjlbCtList',
	
    columnLines: true,
    title: '排课信息',
//    frame: true,
    loadMask: true,
//    layout:'auto',
     autoScroll:true,
    viewConfig: { stripeRows: true },
    selModel: {  
        selType:'checkboxmodel'  
    }, 
	
	initComponent: function() {
        var me = this;
        
        var exportCols = {
        	id:'ID',kkkh:'开课课号',kch:'课程号',kcmc:'课程名称',kclb:'课程类别',ggkbz:'公共课标志',
        	jsmc:'教室名称',zjjs:'主讲教师',kczs:'课程周数',kcsj:'课程时间',dszbz:'单双周',
        	kcjc:'课程节次',kksj:'开课时间',xn:'学年',xq:'学期'
        };

        Ext.applyIf(me, {
        	exportCols:exportCols,
            columns: [
//              	 { text: exportCols['id'], width: 50, dataIndex: 'id', sortable:false},
                { text: exportCols['kkkh'], width: 180, dataIndex: 'kkkh', sortable:false,hidden:true},
               	{text:exportCols['kch'],width:90,dataIndex:'kch',sortable:true},
                { text: exportCols['kcmc'], width: 150, dataIndex: 'kcmc', sortable:false},
                { text: exportCols['kclb'], width: 100, dataIndex: 'kclb', sortable:false,hidden:true },
                { text: exportCols['ggkbz'], width: 80, dataIndex: 'ggkbz', sortable:false},
                { text: exportCols['jsmc'], width: 100, dataIndex: 'jsmc', sortable:false },
                { text: exportCols['zjjs'], width: 70, dataIndex: 'zjjs', sortable:false },
                { text: exportCols['kczs'], width: 100, dataIndex: 'kczs', sortable: false,hidden:true},
                { text: exportCols['kcsj'], width: 80, dataIndex: 'kcsj', sortable: false,hidden:true},
                { text: exportCols['dszbz'], width: 60, dataIndex: 'dszbz', sortable: false },
                { text: exportCols['kcjc'], width: 80, dataIndex: 'kcjc', sortable: false,hidden:true},
                { text: exportCols['kksj'], width: 180, dataIndex: 'kksj', sortable: false },
                {text:exportCols['xn'], width:90, dataIndex:'xn', sortable:false,hidden:false},
    			{text:exportCols['xq'], width:60, dataIndex:'xq', sortable:false,hidden:false}
		    ],
		    
			dockedItems:[{
        	            		dock: 'top',
   							    xtype: 'toolbar',
   							    items:[{
   							    	text:'详情',
   							    	itemId:'detailBtn',
   							    	iconCls:'detail_16',
   							    	action:'pkjlDetail',
   							    	listeners:{
						    		click:function(o,e,eOpts){
						    			var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
						    				if (recs.length == 0) {
													Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
												} else if (recs.length > 1) {
													Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
												} else if (recs.length == 1) {
											          var   win = new Ext.Window({
											            		itemId:'pkjlDetailWin',
											            		autoShow: true,
											            		title:'冲突课程详情',
											            		iconCls:'detail_16',
											                    width: 780,
																height: 350,
											                    closeAction:'destroy',
											            		resizable:false,
											            		shadow:true,
											            		modal:true,
											            		closable:true,
											            		constrainHeader:true,
											            		animCollapse:true,
											            		autoShow:true,
											            		bodyStyle:{
																	background: '#fff'
																},
											                    items: [Ext.create('App.view.jxpk.JxPkjlForm')],
											                    buttons: [{
														        	    text: '退出',
														        	    iconCls:'return_16',
														                handler: function () {
														                	var me = this;
														                    me.up('window').close();
														                }
														            }] 
											                });
									        	var detailForm = win.down('#jxPkjlForm');
									        	detailForm.loadForm(recs[0]);
									        	detailForm.setView();
									        	detailForm.down('#czsj').setValue((recs[0].data.czsj).replace('T',' '))
									        	 }
						    		}
						    	}
   							    },{
		  				  	text:'退出',
		  					 iconCls:'return_16',
			                handler: function () {
			                	var me = this;
			                    me.up('window').close();
			                }
  				  }]
   						}]
        });

        me.callParent(arguments);
    }
});
