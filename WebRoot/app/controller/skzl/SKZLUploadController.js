Ext.define('App.controller.skzl.SKZLUploadController', {
	extend : 'Ext.app.Controller',
	
//	models : ['skzl.SKZLModel'],
	stores : ['zd.ZdWjlxmStore'],
	views:['skzl.SKZLUploadForm'],
	
	
	
	init : function() {
		this.control({
				'skzlUploadForm  button[action=save]':{
					click : this.saveSkzl
				}
			})
	},
	
	saveSkzl:function(o, e, eOpts){
		var me = this;
		var win = o.up('window');
		var form = win.down('#uploadForm');
		
		var recs = win.recs;
		var skzlList = win.skzlList;
		
		var zllxm = recs[0].get('zllxm');
		var zllx = recs[0].get('zllx');
		
		var zlJson = {};		
		var jsonObject = JSON.parse(Ext.encode(recs[0].data));
		for(var item in jsonObject){
			zlJson[item] = jsonObject[item];
		}
		zlJson['zlscsj'] =  Ext.Date.format(new Date(), 'Y-m-d H:i:s');
		zlJson['zlscr'] = xm;
		
		zlJson['zlwj'] = recs[0].get('kkkh') + '-' + zllxm;
//		zlJson['zlwjmc'] = recs[0].get('kcmc') + '(' + recs[0].get('kch') + ')' + zllx;
		zlJson['ztm'] = '1';
		zlJson['zt'] = '草稿状态';
		
		var wjml = me.getWjml(zllxm);
		
	    var params = { datas: Ext.encode(zlJson), wjml:wjml};
	    if (form.isValid()) {
	        form.submit({
	            clientValidation: true,
	            url: 'skzlFileUploadZl.action',
	            actionMethods: 'post',
	            params: params,
	            waitTitle: '请稍候...',
	            waitMsg: '正在上传资料请稍候...',
	            success: function (form, action) {
	            	if (action.result.success) {
//	            		var result = action.result.fileResult;
	            		skzlList.getStore().load();
	            		win.close();
	            	 }
	            },
	            failure: function (form, action) {
	            	if(action.result.msg != null)
	            		Ext.Msg.show({title:"提示",msg:action.result.msg,buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
	            	else{
	                    var fileName = form.findField('upload').value;
	                    Ext.Msg.show({title:"提示",msg:'文件： ' + fileName + ' 上传失败！',buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
	            	}
	            }
	        });
	    }
	},
			
	getWjml:function(zllxm){
		var me = this;
		var wjml = '';
		var wjlxmStore = me.getStore('ZdWjlxmStore')
		var index = wjlxmStore.find('wjlxm',zllxm);
		if(index != -1){
			wjml = wjlxmStore.getAt(index).get('wjml');
		}
		return wjml;
	},

	onLaunch : function(o) {
		var me = this;
		var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
		var skzlList = o.ownerCt.ownerCt;
		var win = Ext.create('Ext.window.Window',{
				alias: 'widget.skzlUploadWin',
				iconCls:'add_16',
				layout:'fit',
				width:380,
				closeAction:'destroy',
				height:150,
				resizable:false,
				shadow:true,
				autoShow:true,
				title:'教学资料上传',
				modal:true,
				closable:true,
				recs:recs,
				skzlList:skzlList,
				bodyStyle:'padding:5 5 5 5',
				animCollapse:true,
				items: [
						Ext.create('App.view.skzl.SKZLUploadForm',{
							itemId: 'uploadForm'
						})
					]
				});
			}
		})