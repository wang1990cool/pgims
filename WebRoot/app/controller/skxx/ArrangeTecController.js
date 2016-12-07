Ext.define('App.controller.skxx.ArrangeTecController',{
	extend:'Ext.app.Controller',
	
	models : ['rs.JgxxModel'],
	stores : ['rs.JgxxStore','zd.ZdXzqhmStore','zd.ZdXbmStore',
			          'zd.ZdMzmStore','zd.ZdZzmmmStore','zd.ZdXlmStore',
			          'zd.ZdXwmStore','zd.ViewXxDwxxStore','zd.ZdSfzjlxmStore'],
	refs: [{  
        selector: 'arrangeTecWindow',  
        ref: 'arrangeTecWindow'  
    }],
    
	init:function(){
		this.control({
				'arrangeTecWindow button[action=searchZjjs]':{
					click:this.searchZjjs
				},
				'arrangeTecWindow button[action=searchZkjs]':{
					click:this.searchZkjs
				},
				'arrangeTecWindow  button[action=searchSyjs]':{
					click:this.searchSyjs
				},
				'arrangeTecWindow  button[action=save]':{
					click:this.addJs
				}
			});
		},
			searchZjjs:function(o, e, eOpts){
				var me = this
				var form = o.up('#arrangeTecForm');
				var application = me.getApplication();
		        var controller = application.getController('App.controller.skxx.JGXXController');
				 controller.onLaunch(o,'zjjs',form);
			},
			
			searchZkjs:function(o, e, eOpts){
				var me = this;
				var form = o.up('#arrangeTecForm');
				var application = me.getApplication();
		        var controller = application.getController('App.controller.skxx.JGXXController');
				 controller.onLaunch(o,'zkjs',form);
			},
			
			searchSyjs:function(o, e, eOpts){
				var me = this
				var form = o.up('#arrangeTecForm');
				var application = me.getApplication();
		        var controller = application.getController('App.controller.skxx.JGXXController');
				 controller.onLaunch(o,'syjs',form);
			},
			 
		addJs:function(o, e, eOpts){
			var me = this;
			var win = o.up('window');
			var skxxList = win.skxxList;
			var form = win.down('#arrangeTecForm');
			var JSONobj = []
			values = form.getValues();
		    JSONobj.push(JSON.stringify(values));
			 Ext.Ajax.request({
				url : 'skxxEdit.action',
				waitTitle : '提示',
				method : 'post',
				params:{datas:JSONobj},
				success : function(response, opts) {
					var result = Ext.decode(response.responseText);
					var success = result.result.success;
					var id = result.id;
					if(success){
						var msg = "保存成功！";
						Ext.MessageBox.show({
				           title: '提示',
				           msg: msg,
				           buttons: Ext.MessageBox.OK,
				           icon: Ext.MessageBox.INFO,
					       fn: function(id, msg){
					    	 	 skxxList.getStore().load()
				        			win.close();
							    } 
				        });
					}else{
						var errmsg = "保存失败！";
						Ext.MessageBox.show({
				           title: '错误',
				           msg: errmsg,
				           buttons: Ext.MessageBox.OK,
				           icon: Ext.MessageBox.ERROR,
				           fn: function(id, msg){  
				        	   me.getForm().reset();
						    }  
				        });
					}
				}
			});
		},
			
  		detailJs:function(o, e, eOpts){
				var rec = getSelRec(o.up('gridpanel'));
				if (rec != undefined) {
					var xnjgbWins = Ext.ComponentQuery.query('#xnjgbWin1');
					if (xnjgbWins.length > 0) {
						var win = xnjgbWins[0];
						win.setTitle('教师详情');
						win.setIconCls('edit_16');
						win.show();
					} else {
						var win = new Ext.Window({
									itemId : 'xnjgbWin1',
									title : '教师详情',
									iconCls : 'add_16',
									layout : 'fit',
									width : 900,
									height : 600,
									closeAction : 'hide',
									resizable : false,
									shadow : true,
									modal : true,
									closable : true,
									animCollapse : true,
									autoShow : true,
									items : [Ext.create(
											'App.view.rs.XnjgbForm', {
												autoScroll : true,
												isAdd : false,// 测试
												imgUrl : 'XnjgbgetImage.action',
												imgId : 'gh',
												postUrl : "xnjgb"
											})],
									buttons : [{
												itemId : 'cancelBtn',
												text : '取消',
												handler : function() {
													this.up('window').close();
												}
											}]
								});
					}
					var xnjgbForm = win.down('form');
					xnjgbForm.edit(rec);
					xnjgbForm.loadForm(rec);
					xnjgbForm.down('#upImgBtn').hide();
					
					var textfields = xnjgbForm.query('textfield');
					for (var i in textfields) {
						textfields[i].setReadOnly(true);
						var style = "background:none; border : 0px;";
						textfields[i].setFieldStyle(style);
					}
				}
			},
		
			onLaunch : function(o,skxxList) {
				var win;
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				var win = Ext.create('App.view.skxx.ArrangeTecWindow',{
						skxxList:skxxList
				});
				win.down('#arrangeTecForm').loadForm(recs[0])
				win.down('#arrangeTecForm').setViewForm();
				win.show();
			}
	})
