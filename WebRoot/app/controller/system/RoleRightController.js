Ext.define('App.controller.system.RoleRightController',{
	extend:'Ext.app.Controller',
	
	models:['system.RoleRightModel'],
	stores:['system.RoleRightStore'],
	init:function(){
		this.control({
				'roleRightPanel  button[action=detail]':{
					click:this.detailRight
				},
				'roleRightPanel  button[action=add]':{
					click:this.addRight
				}
			});
	},

          addRight:function( o, e, eOpts ){
          	 	var me = this;
          		var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
          		
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				}else{
					var forms = Ext.ComponentQuery.query('#roleForm');
				    var form = forms[forms.length - 1];
					var right = '';
				    for(var i=0;i<recs.length;i++ ){
				    	if(i == recs.length -1 ){
				    		right += recs[i].data.rightCode;
				    	}else{
				    		right += recs[i].data.rightCode + ',';
				    	}
				    }
				 	form.down('#rightCode').setValue(right);
				 	o.up('window').close();
				}
          },
         
          
			onLaunch : function(o) {
				var roleRightWins = Ext.ComponentQuery.query('#roleRightWin');
	        	if(roleRightWins.length > 0) {
	        		var win = roleRightWins[0];
	        		win.setTitle('修改权限');
	        		win.setIconCls('add_16');
	        		win.show();
	        	}else{
					var win = new Ext.Window({
				   		itemId:'roleRightWin',
						title:'权限信息',
						iconCls:'add_16',
						width: 625,
						height: 430,
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
						items:[Ext.create('App.view.system.RoleRightPanel',{
							itemId:'roleRightPanel'
						})]
					});
	        	}
					
				  var pGrid = win.down('#roleRightPanel').down('#roleRightList');
				  var store = pGrid.getStore(), proxy = store.getProxy();
          		  proxy.setExtraParam('params', '');
				  store.load();
			}
	})
