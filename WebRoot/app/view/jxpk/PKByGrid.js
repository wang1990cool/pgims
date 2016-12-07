Ext.define('App.view.jxpk.PKByGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.pkgrid',
	frame:true,
    config:{
        kch:'',  // 当前排课课程号
        kcmc:'',  // 当前排课课程名
    	weekNum: 0,
    	curJc: 0,
    	jc: new Array(11),
    	rowIndex: 0,
    	cellIndex: 0
    },
   orgPkGridArr:new Array(11),
   
    selModel: {  
        selType:'cellmodel'  
    }, 
    
    week :[ '1', '2', '3', '4', '5', '6', '7'],
    
    columnLines: true,
    initComponent: function() {
        var me = this;
        
        var orgPkGridArr = me.orgPkGridArr;
        for(var i = 0; i < orgPkGridArr.length;i++){
        	orgPkGridArr[i] = new Array();
        	for(var j = 0 ;j < 7 ;j++){
        		orgPkGridArr[i][j] = null;
        	}
        }
        
        var occupyAction = Ext.create('Ext.Action', {
        	iconCls:'add_16',
        	text: '占用',
            disabled: true,
            handler: function(widget, event) {
                var rec = me.getSelectionModel().getSelection()[0];
                if (rec) {
                	var rowIndex = me.getRowIndex();
                	var cellIndex = me.getCellIndex();
        			if((rowIndex == 3 && me.getJc()[4])||(rowIndex == 4 && me.getJc()[3])){
                		Ext.Msg.confirm('排课提示', '确定该课程在上午第4节和下午第5节排课？', function(e){if(e == 'yes'){
                			me.setCurJc(rowIndex), me.getJc()[rowIndex] = rowIndex + 1;
                			if(!me.getWeekNum()) me.setWeekNum(cellIndex);
                			rec.set(me.week[cellIndex - 1],me.getKcmc());
                		}});
        			}else if((rowIndex == 7 && me.getJc()[8])||(rowIndex == 8 && me.getJc()[7])){
                		Ext.Msg.confirm('排课提示', '确定该课程在下午第8节和晚上第9节排课？', function(e){if(e == 'yes'){
                			me.setCurJc(rowIndex), me.getJc()[rowIndex] = rowIndex + 1;
                			if(!me.getWeekNum()) me.setWeekNum(cellIndex);
                			rec.set(me.week[cellIndex - 1],me.getKcmc());
                		}});
        			}else{
            			me.setCurJc(rowIndex), me.getJc()[rowIndex] = rowIndex + 1;
            			if(!me.getWeekNum()) me.setWeekNum(cellIndex);
                		rec.set(me.week[cellIndex - 1],me.getKcmc());
        			}
                }
            }
        });
        var freeAction = Ext.create('Ext.Action', {
            iconCls: 'delete_16',
            text: '释放',
            disabled: true,
            handler: function(widget, event) {
                var rec = me.getSelectionModel().getSelection()[0];
                if (rec) {
                	var rowIndex = me.getRowIndex();
                	var cellIndex = me.getCellIndex();
                	rec.set(me.week[cellIndex - 1], null);
            		me.getJc()[rowIndex] = null;
            		var arr = new Array(11);
            		if(me.getJc().toString()== arr.toString())
            			me.setWeekNum(0);
                }
            }
        });

        var contextMenu = Ext.create('Ext.menu.Menu', {
            items: [occupyAction,freeAction]
        });

        var pkStore = Ext.create('Ext.data.Store', {
            storeId:'pkStore',
            fields:['1', '2', '3','4','5','6','7'],
            data:{'isOccupied':[
                { '1': null, '2':null, '3':null, '4':null, '5':null , '6':null, '7':null },
                { '1': null, '2':null, '3':null, '4':null, '5':null , '6':null, '7':null },
                { '1': null, '2':null, '3':null, '4':null, '5':null , '6':null, '7':null },
                { '1': null, '2':null, '3':null, '4':null, '5':null , '6':null, '7':null },
                { '1': null, '2':null, '3':null, '4':null, '5':null , '6':null, '7':null },
                { '1': null, '2':null, '3':null, '4':null, '5':null , '6':null, '7':null },
                { '1': null, '2':null, '3':null, '4':null, '5':null , '6':null, '7':null },
                { '1': null, '2':null, '3':null, '4':null, '5':null , '6':null, '7':null },
                { '1': null, '2':null, '3':null, '4':null, '5':null , '6':null, '7':null },
                { '1': null, '2':null, '3':null, '4':null, '5':null , '6':null, '7':null },
                { '1': null, '2':null, '3':null, '4':null, '5':null , '6':null, '7':null }
            ]},
            proxy: {
                type: 'memory',
                reader: {
                    type: 'json',
                    root: 'isOccupied'
                }
            }
        });
        
        Ext.applyIf(me, {
            columns: [new Ext.grid.RowNumberer(),
                { text: '周一',  dataIndex: '1' , width:119, sortable: false, renderer:function(value, cellmeta, rec, rowIndex, columnIndex, store){
                	if(value) return '<div><span style="color:red">' + value + '</span></div>';
                	else return '<span style="color:green">空闲</span>';
                }},
                { text: '周二', dataIndex: '2' , width:119, sortable: false, renderer:function(value, cellmeta, rec, rowIndex, columnIndex, store){
                	if(value) return '<div><span style="color:red">' + value + '</span></div>';
                	else return '<span style="color:green">空闲</span>';
                }},
                { text: '周三', dataIndex: '3' , width:119, sortable: false, renderer:function(value, cellmeta, rec, rowIndex, columnIndex, store){
                	if(value) return '<div><span style="color:red">' + value + '</span></div>';
                	else return '<span style="color:green">空闲</span>';
                }},
                { text: '周四', dataIndex: '4' , width:119, sortable: false, renderer:function(value, cellmeta, rec, rowIndex, columnIndex, store){
                	if(value) return '<div><span style="color:red">' + value + '</span></div>';
                	else return '<span style="color:green">空闲</span>';
                }},
                { text: '周五', dataIndex: '5' , width:118, sortable: false, renderer:function(value, cellmeta, rec, rowIndex, columnIndex, store){
                	if(value) return '<div><span style="color:red">' + value + '</span></div>';
                	else return '<span style="color:green">空闲</span>';
                }},
                { text: '周六', dataIndex: '6' , width:118, sortable: false, renderer:function(value, cellmeta, rec, rowIndex, columnIndex, store){
                	if(value) return '<div><span style="color:red">' + value + '</span></div>';
                	else return '<span style="color:green">空闲</span>';
                }},
                { text: '周日', dataIndex: '7' , width:118, sortable: false, renderer:function(value, cellmeta, rec, rowIndex, columnIndex, store){
                	if(value) return '<div><span style="color:red">' + value + '</span></div>';
                	else return '<span style="color:green">空闲</span>';
                }}
            ],
            store:pkStore,
            listeners:{
            	'viewready': function (grid) {
                    var view = grid.view;
                    
                    grid.mon(view, {
                        uievent: function (type, view, cell, recordIndex, cellIndex, e) {
                            grid.cellIndex = cellIndex;
                            grid.recordIndex = recordIndex;
                        }
                    });
                    
                    grid.tip = Ext.create('Ext.tip.ToolTip', {
                        target: view.el,
                        delegate: '.x-grid-cell',
                        trackMouse: true,
                        renderTo: Ext.getBody(),
                        listeners: {
                            beforeshow: function updateTipBody(tip) {
                                if (!Ext.isEmpty(grid.cellIndex) && grid.cellIndex !== -1 && 
                                		grid.getStore().getAt(grid.recordIndex) != undefined) {
                                    header = grid.headerCt.getGridColumns()[grid.cellIndex];
                                    var val = grid.getStore().getAt(grid.recordIndex).get(header.dataIndex);
                                    if(val) tip.update(val);
                                    else tip.update('空闲');
                                }
                            }
                        }
                    });

                },
            	
                'cellclick': function( tb, td, cellIndex, rec, tr, rowIndex, e, eOpts){
                	var me = this;
                	if(me.getWeekNum() && me.getWeekNum() != cellIndex){  // 不在同一天
                		Ext.Msg.show({
                		     title:'排课提示',
                		     msg: '请在同一天排课！',
                		     buttons: Ext.Msg.OK,
                		     icon: Ext.Msg.WARNING
                		});
                	}else{ 	// 同一天排课
                		if(!rec.get(me.week[cellIndex - 1])){  // 该节未排
                			if((rowIndex == 3 && me.getJc()[4])||(rowIndex == 4 && me.getJc()[3])){
                        		Ext.Msg.confirm('排课提示', '确定该课程在上午第4节和下午第5节排课？', function(e){if(e == 'yes'){
                        			me.setCurJc(rowIndex), me.getJc()[rowIndex] = rowIndex + 1;
                        			if(!me.getWeekNum()) me.setWeekNum(cellIndex);
                            		rec.set(me.week[cellIndex - 1],me.getKcmc());
                        		}});
                			}else if((rowIndex == 7 && me.getJc()[8])||(rowIndex == 8 && me.getJc()[7])){
                        		Ext.Msg.confirm('排课提示', '确定该课程在下午第8节和晚上第9节排课？', function(e){if(e == 'yes'){
                        			me.setCurJc(rowIndex), me.getJc()[rowIndex] = rowIndex + 1;
                        			if(!me.getWeekNum()) me.setWeekNum(cellIndex);
                            		rec.set(me.week[cellIndex - 1],me.getKcmc());
                        		}});
                			}else{
                    			me.setCurJc(rowIndex), me.getJc()[rowIndex] = rowIndex + 1;
                    			if(!me.getWeekNum()) me.setWeekNum(cellIndex);
                        		rec.set(me.week[cellIndex - 1],me.getKcmc());
                			}
                		}else{ // 该节已排
                			if(rec.get(me.week[cellIndex - 1])!= me.kcmc ){ // 已排其他课程 
                				if(me.kcmc + ',' + orgPkGridArr[rowIndex][cellIndex-1] == rec.get(me.week[cellIndex - 1])){
                					  //取消当前排课
                					rec.set(me.week[cellIndex - 1], orgPkGridArr[rowIndex][cellIndex-1]);
	                        		me.getJc()[rowIndex] = null;
	                        		var arr = new Array(11);
	                        		if(me.getJc().toString()== arr.toString())
	                        			me.setWeekNum(0);
                				}else{
	                				Ext.MessageBox.confirm("确认",  "该时间已排课程<br/>" + 
	                					rec.get(me.week[cellIndex - 1])  + "<br/>确定继续排课？",
										function(btn){
											if(btn == 'yes'){
												var store  = me.getStore();
												orgPkGridArr[rowIndex][cellIndex-1] = store.getAt(rowIndex).get(cellIndex)
												me.setCurJc(rowIndex), me.getJc()[rowIndex] = rowIndex + 1;
	                    						if(!me.getWeekNum()) me.setWeekNum(cellIndex);
												rec.set(me.week[cellIndex - 1],me.getKcmc() + ',' + store.getAt(rowIndex).get(cellIndex) );
											}
									})
                				}
                			}else{  //取消当前排课
                					rec.set(me.week[cellIndex - 1], orgPkGridArr[rowIndex][cellIndex-1]);
	                        		me.getJc()[rowIndex] = null;
	                        		var arr = new Array(11);
	                        		if(me.getJc().toString()== arr.toString())
	                        			me.setWeekNum(0);
                        	}
                		}
                	}
            	},
            	
            	'cellcontextmenu': function( tb, td, cellIndex, rec, tr, rowIndex, e, eOpts){
            		var me = this;
            		occupyAction.disable();
            		freeAction.disable();
            		
            		e.stopEvent();
            		
            		if(me.getWeekNum() && me.getWeekNum() != cellIndex){  // 不在同一天
            			Ext.Msg.show({
	               		     title:'排课提示',
	               		     msg: '请在同一天排课！',
	               		     buttons: Ext.Msg.OK,
	               		     icon: Ext.Msg.WARNING
            			});
            		}else{ 	// 同一天排课
                		if(!rec.get(me.week[cellIndex - 1])){  // 该节未排
                			me.setRowIndex(rowIndex);
                			me.setCellIndex(cellIndex);
                    		occupyAction.enable();
                    		freeAction.disable();
                		}else{ // 该节已排
                			if(rec.get(me.week[cellIndex - 1])== me.kcmc){ // 取消当前排课 
                    			me.setRowIndex(rowIndex);
                    			me.setCellIndex(cellIndex);
                        		occupyAction.disable();
                        		freeAction.enable();
                			}
                		}
                        contextMenu.showAt(e.getXY());
                        return false;
            		}
            	}
            }
        });

        me.callParent(arguments);
    }
});