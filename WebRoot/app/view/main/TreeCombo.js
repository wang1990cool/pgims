Ext.define('Ext.ux.extend.TreeCombo', {
    extend: 'Ext.form.field.Picker',
    xtype: 'treeCombo',
    
    uses: ['Ext.tree.Panel'],

    params:'',
    callback : Ext.emptyFn, 
    triggerCls: Ext.baseCSSPrefix + 'form-arrow-trigger',

    config: {
        /**
         * @cfg {Ext.data.TreeStore} store
         * A tree store that the tree picker will be bound to
         */
        store: null,

        /**
         * @cfg {String} displayField
         * The field inside the model that will be used as the node's text.
         * Defaults to the default value of {@link Ext.tree.Panel}'s `displayField` configuration.
         */
        displayField: null,

        /**
         * @cfg {Array} columns
         * An optional array of columns for multi-column trees
         */
        columns: null,

        /**
         * @cfg {Boolean} selectOnTab
         * Whether the Tab key should select the currently highlighted item. Defaults to `true`.
         */
        selectOnTab: true,

        /**
         * @cfg {Number} maxPickerHeight
         * The maximum height of the tree dropdown. Defaults to 300.
         */
        maxPickerHeight: 300,

        /**
         * @cfg {Number} minPickerHeight
         * The minimum height of the tree dropdown. Defaults to 100.
         */
        minPickerHeight: 100,    
        
        /**
         * @cfg {Number} maxPickerHeight
         * The maximum height of the tree dropdown. Defaults to 300.
         */
        maxPickerWidth: 300,

        /**
         * @cfg {Number} minPickerHeight
         * The minimum height of the tree dropdown. Defaults to 100.
         */
        minPickerWidth: 200
    },
   
    editable: false,

    initComponent: function() {
        var me = this;
        me.callParent(arguments);

        me.addEvents(
            /**
             * @event select
             * Fires when a tree node is selected
             * @param {Ext.ux.TreePicker} picker        This tree picker
             * @param {Ext.data.Model} record           The selected record
             */
            'select'
        );

        me.mon(me.store, {
            scope: me,
            load: me.onLoad,
            update: me.onUpdate
        });
    },

    /**
     * Creates and returns the tree panel to be used as this field's picker.
     */
    createPicker: function() {
        var me = this,
            picker = new Ext.tree.Panel({
                shrinkWrapDock: 2,
                store: me.store,
                floating: true,
                rootVisible: false,
                autoScroll : true,
                displayField: me.displayField,
                columns: me.columns,
                minHeight: me.minPickerHeight,
                maxHeight: me.maxPickerHeight,
				minWidth: me.minPickerWidth,
                maxWidth: me.maxPickerWidth,
                manageHeight: false,
                shadow: false,
                listeners: {
                    scope: me,
                    itemclick: me.onItemClick,
                    itemdblclick:function(View,record){
        			 	me.ondbItemClick(View,record);
        			 },
        			 checkchange:function(node, checked) {
        						me.onCheckChange(node,checked);
        			 }
    			},
                viewConfig: {
                    listeners: {
                        scope: me,
                        render: me.onViewRender
                    }
                },
                dockedItems: [{
                    xtype: 'toolbar',
                    dock: 'bottom',
                    layout:{pack: 'center'},
                    items: [{
                        text: '全选',
                        iconCls:'add_16',
                        listeners: {
                            scope: me,
                            click: me.selectAll
            			}
                    },{
                        text: '清空',
                        iconCls:'delete_16',
                        listeners: {
                            scope: me,
                            click: me.clearAll
            			}
                    },{
                        text: '确定',
                        iconCls:'ok_16',
                        listeners: {
                            scope: me,
                            click: me.close
            			}
                    }]
                }]
            }),
            view = picker.getView();

        if (Ext.isIE9 && Ext.isStrict) {
            // In IE9 strict mode, the tree view grows by the height of the horizontal scroll bar when the items are highlighted or unhighlighted.
            // Also when items are collapsed or expanded the height of the view is off. Forcing a repaint fixes the problem.
            view.on({
                scope: me,
                highlightitem: me.repaintPickerView,
                unhighlightitem: me.repaintPickerView,
                afteritemexpand: me.repaintPickerView,
                afteritemcollapse: me.repaintPickerView
            });
        }
        return picker;
//        return comboPanel;
    },
    
    onViewRender: function(view){
        view.getEl().on('keypress', this.onPickerKeypress, this);
    },

    /**
     * repaints the tree view
     */
    repaintPickerView: function() {
        var style = this.picker.getView().getEl().dom.style;

        // can't use Element.repaint because it contains a setTimeout, which results in a flicker effect
        style.display = style.display;
    },

    /**
     * Aligns the picker to the input element
     */
    alignPicker: function() {
        var me = this,
            picker;

        if (me.isExpanded) {
            picker = me.getPicker();
            if (me.matchFieldWidth) {
                // Auto the height (it will be constrained by max height)
                picker.setWidth(me.bodyEl.getWidth());
            }
            if (picker.isFloating()) {
                me.doAlign();
            }
        }
    },
    
    /**
     * Handles a click even on a tree node
     * @private
     * @param {Ext.tree.View} view
     * @param {Ext.data.Model} record
     * @param {HTMLElement} node
     * @param {Number} rowIndex
     * @param {Ext.EventObject} e
     */
    onItemClick: function(view, record, node, rowIndex, e) {
    	var me = this,
    		picker = me.getPicker();
    	 
    	picker.fireEvent('checkchange',record,!record.get('checked'));
    },

    /**
     * Handles a keypress event on the picker element
     * @private
     * @param {Ext.EventObject} e
     * @param {HTMLElement} el
     */
    onPickerKeypress: function(e, el) {
        var key = e.getKey();

        if(key === e.ENTER || (key === e.TAB && this.selectOnTab)) {
            this.selectItem(this.picker.getSelectionModel().getSelection()[0]);
        }
    },

    /**
     * Changes the selection to a given record and closes the picker
     * @private
     * @param {Ext.data.Model} record
     */
    selectItem: function(record) {
        var me = this;
//        me.params = record.raw.params;
//        me.setValue(record.getId());
//        me.picker.hide();
//        me.inputEl.focus();
//        me.fireEvent('select', me, record);
//		me.callback();
    },

    /**
     * Runs when the picker is expanded.  Selects the appropriate tree node based on the value of the input element,
     * and focuses the picker so that keyboard navigation will work.
     * @private
     */
    onExpand: function() {
        var me = this,
            picker = me.picker,
            store = picker.store,
            value = me.value,
            node;

        
        if (value) {
            node = store.getNodeById(value);
        }
        
        if (!node) {
            node = store.getRootNode();
        }
        
        picker.selectPath(node.getPath());

        Ext.defer(function() {
            picker.getView().focus();
        }, 1);
    },

    /**
     * Sets the specified value into the field
     * @param {Mixed} value
     * @return {Ext.ux.TreePicker} this
     */
    setValue: function(value) {
        var me = this;

	    me.value = value;
	    return me;
    },
    
    getSubmitValue: function(){
        return this.value;  
    },
    
    /**
     * Returns the current data value of the field (the idProperty of the record)
     * @return {Number}
     */
    getValue: function() {
        return this.value;
    },
    
    getRowValue:function(){
    	return this.rawValue;
    },
    
    loadValue: function(value){
    	var me = this,
			picker = me.getPicker(),
			root = picker.getRootNode();
	
	    if (value) {
	    	var arr = value.replace(/\//g,',').split(',');
	    	
	    	me.clearAll();
	    	me.loadTree(root,arr);
	    }
    },
    
    loadTree: function(node,arr){
    	var me = this,
    		picker = me.getPicker();
    	
    	if(node){
        	if(arr.contains(node.get('id')))
        		picker.fireEvent('checkchange',node,true);
        	
        	node.eachChild(function (child) {
        		me.loadTree(child,arr);
            });
    	}
	 
        return me;
    },
    
    /**
     * Handles the store's load event.
     * @private
     */
    onLoad: function() {
        var value = this.value;
        
        if (value)
            this.setValue(value);
    },
    
    onUpdate: function(store, rec, type, modifiedFieldNames){
        var display = this.displayField;
        
        if (type === 'edit' && modifiedFieldNames && Ext.Array.contains(modifiedFieldNames, display) && this.value === rec.getId()) {
            this.setRawValue(rec.get(display));
        }
    },
    
    onCheckChange: function(node, checked){
    	var me = this,
    		root = me.picker.getRootNode();
    	
    	me.emptyValue();
    	me.selectParent(node, checked);
    	me.setTreeValue(root);
    	me.setRawValue(me.rawValue.substr(1).replace(/,/g,'/'));
    	me.setValue(me.getValue().substr(1).replace(/,/g,'/'));
    },
    
    emptyValue:function(){
    	var me = this;
    	
    	me.setRawValue('');
    	me.setValue('');
    },
    
	 /**
	  * 双击节点
	  * @param {} view
	  * @param {} item
	  */
	 ondbItemClick:function(view,record){
	 },
	 /**
	 * 选择父节点,自动选中所有的子节点
	 * @param {} node
	 * @param {} checked
	 */
	 selectParent: function(node, checked) { 
 		 var me=this;
 		 
 		 if(node){
 			node.set('checked',checked);
 			
 			if(node.hasChildNodes())
 		     	node.eachChild(function (child) {
 		     		me.selectParent(child,checked);
 		        });
 		 }
	 },
	 
    setTreeValue: function(node) {
    	var me = this,
    		picker = me.picker;
    	 
    	node.eachChild(function (child) {
    		if(child.get('checked')){ 
    			me.setRawValue(me.rawValue + ',' + child.raw.text);
    			me.setValue(me.getValue() + ',' + child.raw.id)
    		}
    		
    		if(child.hasChildNodes())
    			me.setTreeValue(child);
        });
	 
        return me;
    },
    
    selectAll: function(){
    	var me = this, 
			picker = me.getPicker(),
			root = picker.getRootNode();
    	
    	me.emptyValue();
    	me.selectParent(root,true);
    	me.setTreeValue(root);
    	me.setRawValue(me.rawValue.substr(1).replace(/,/g,'/'));
    	me.setValue(me.getValue().substr(1).replace(/,/g,'/'));
    },
    
    clearAll: function(){
    	var me = this, 
			picker = me.getPicker();
    	me.selectParent(picker.getRootNode(),false);
    	me.emptyValue();
    },
    
    close: function(){
    	var me =this,
    		picker = me.getPicker();
      	picker.hide();
      	me.inputEl.focus();
		me.callback();
    }
});

