/*
 * File: app/view/MyList.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */



Ext.define('MyApp.view.MyList', {
    extend:  'Ext.navigation.View',
    /*pointe ver le controlleur quand on cliquez*/
    xtype:'MyList',
    requires:[
              'Ext.dataview.List',
              'Ext.data.proxy.JsonP',
              'Ext.data.Store'
              ],
    config: {
    	    	
        items: [
                {
                	/* type liste pour affichage*/
                	xtype:'list',
                	itemTpl:'{title}',   
                	/*pointe vers le store qui contient lurl*/
                	 store: 'MyJsonStore',
                }
                ]
    }
});
