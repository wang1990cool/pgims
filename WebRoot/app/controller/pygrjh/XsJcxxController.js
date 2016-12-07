Ext.define('App.controller.pygrjh.XsJcxxController',{
	extend:'Ext.app.Controller',
	
	models:['pygrjh.ViewXsJcxxModel'],	
    stores: ['pygrjh.ViewXsJcxxStore'],
	
	init:function(){
		this.control({
				'xsJcxxDialog button[action=search]':{
					click:this.search
				},
				'xsJcxxDialog button[action=searchAll]':{
					click:this.searchAll
				},
				'viewXsJcxxList  button[action=ok]':{
					click:this.addXsJcxx
				}
		});
	},
	
			search:function(o, e, eOpts){
					var xsJcxxDialog = o.up('#xsJcxxDialog');
					var searchForm = xsJcxxDialog.down('#searchForm');
					var searchParams = {
						start : 0,
						limit : 15,
						page : 1,
						searchMode : 'simple',
						fieldNames : [],
						order : '',
						search : {}
					};
					var pGrid = xsJcxxDialog.down('#viewXsJcxxList');
					var store = pGrid.getStore();
					for (var col in pGrid.exportCols) {
						searchParams.fieldNames.push(col);
					}
	
					var tFields = searchForm.query('textfield(true)');
					for (var i in tFields) {
						if (tFields[i].value)
							searchParams.search[tFields[i].name] = "#like '%" + tFields[i].value + "%'";
					}

					var fymcValue = searchForm.down('#fymc').getValue();
					if(fymcValue){
						searchParams.search['yxsh']="#= '" + fymcValue + "'";
					}
					
					var zydmValue = searchForm.down('#zymc').getValue();
					if(zydmValue){
						searchParams.search['zydm']="#= '" + zydmValue + "'";
					}
					
					var proxy = store.getProxy();
					proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
					store.load();
			},
			
			searchAll:function(o, e, eOpts){
				var xsJcxxDialog = o.up('#xsJcxxDialog');
				var searchForm = xsJcxxDialog.down('#searchForm');
            	var pGrid = xsJcxxDialog.down('#viewXsJcxxList');
            	
            	searchForm.getForm().reset();
            	searchForm.down('#xwlb').setText('',true);
            	
            	var store = pGrid.getStore(), proxy = store.getProxy();
            	proxy.setExtraParam('params', '');
            	store.load();
			},
			
          addXsJcxx:function( o, e, eOpts ){
          	 	var me = this;
          		var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				} else if (recs.length > 1) {
					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
				} else if (recs.length == 1) {
					var xh = recs[0].data.xh;
					Ext.Ajax.request({
						url:'pygrjhCheckByXh.action?xh='+xh,
						method : 'post',
						success : function(response, opts) {
							var result = Ext.decode(response.responseText);
							var success = result.result.success;
							if(success){
								Ext.MessageBox.alert('提示', '该学生已经存在！');
							}else{
								 var xsjcxxForms = Ext.ComponentQuery.query('#xsJcxxForm');
						    	 var xsJcxxForm = xsjcxxForms[xsjcxxForms.length - 1];
						    	 var recJSON = Ext.encode(recs[0].data) ;
						    	 var jsonObject =  JSON.parse(recJSON);
						    	 for(var item in jsonObject){
						    	 	var itemId = "#" + item + "";
							    	 if(xsJcxxForm.down(itemId) == null || item == 'id')
							    		continue;
						    	 	xsJcxxForm.down(itemId).setValue(jsonObject[item]);
						    	 }
						    	 me.setView(xsJcxxForm)
						    	 var xsJcxxWin = o.up('#xsJcxxWin');
						    	 xsJcxxWin.close();
							}
						}
					})
				}
          },
          
          setView:function(xsJcxxForm){
				var textfields =  xsJcxxForm.query('textfield');
				for(var i in textfields){
					if(textfields[i].itemId == 'xh' || textfields[i].itemId == 'pyfah')
						continue;
//					if(textfields[i].itemId == 'fymc')
//						textfields[i].setWidth(300)
					textfields[i].setReadOnly(true);
					var style = "background:none; border:0px";
					textfields[i].setFieldStyle(style);
				}
          },
          
			onLaunch : function(record) {
			     var xsJcxxWin = new Ext.Window({
				   		itemId:'xsJcxxWin',
						title:'学生信息',
						iconCls:'add_16',
						width: 625,
						height: 560,
						x:620,
						y:20,
						constrainHeader:true,
						layout:'fit',
						closeAction:'hide',
						resizable:false,
						shadow:true,
						modal:true,
						closable:true,
						animCollapse:true,
						autoScroll:true,
						autoShow:true,
						items:[Ext.create('App.view.pygrjh.XSJCXXDialog',{
							itemId:'xsJcxxDialog'
						})]
					});
				var pGrid = xsJcxxWin.down('xsJcxxDialog').down('#viewXsJcxxList');
	            var store = pGrid.getStore(), proxy = store.getProxy();
	            proxy.setExtraParam('params', '');
	            store.load();
			}
})
