Ext.define('App.view.cjdy.CjList',{
	extend: 'Ext.grid.Panel',
	store:'ViewJxCjcxAllStore',
	columnLines: true,
	itemId:'cjList',
    loadMask: true,
    autoScroll:true,
//        frame:true,
    viewConfig: { 
   		 stripeRows: true 
    },
    selModel:{
    	selType:'checkboxmodel'
    },
     
	 initComponent: function(){
		var me = this;
		
		var exportCols = {
			id:'序号',kch:'课程号',kcmc:'课程',kccj:'成绩',kclb:'课程类别',kcxf:'课程学分',xn:'学年',xq:'学期',ksxz:'备注'      	            	        	          
		};
		
		Ext.applyIf(me,{
			exportCols:exportCols,
			columns: [
			
				{ text: exportCols['kch'], width: 90, dataIndex: 'kch', sortable: false },
                { text: exportCols['kcmc'], width: 200, dataIndex: 'kcmc', sortable: false},
                { text: exportCols['kccj'], width: 70, dataIndex: 'kccj', sortable: false },
                { text: exportCols['kclb'], width:80, dataIndex: 'kclb', sortable: false },
                { text: exportCols['kcxf'], width: 70, dataIndex: 'kcxf', sortable: false },
                { text: exportCols['xn'], width: 90, dataIndex: 'xn', sortable: false },
                { text: exportCols['xq'], width: 40, dataIndex: 'xq', sortable: false },
                { text: exportCols['ksxz'], width: 50, dataIndex: 'ksxz', sortable: true,
                	renderer: function (value, cellmeta, record, rowIndex, columnIndex, store) 
                	{
                		if(value == '免修'){
              				return  "免修";
                		}else{
                			return null;
                		}
              	}
                }
			]
			
        });
        me.callParent(arguments);
        }
});