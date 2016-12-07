Ext.define('App.model.system.UserModel', {
    extend: 'Ext.data.Model',
    fields: [{ name: 'userName'}, { name: 'userCName' }, { name: "userPwd" }, 
    		{ name:'roleName',mapping:"webRole.roleName"},
             { name: "mobile"},{ name: "email"},{name:'gh'},
             {name:'xm'},{name:'szdwh'},{name:'szdw'}]
});