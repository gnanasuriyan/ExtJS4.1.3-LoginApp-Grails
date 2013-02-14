/*Ext.Loader.setConfig({
	enabled : true
});

Ext.application({
	name : 'LoginApp',
	controllers : ['Login'],
	launch : function() {
		//Ext.Msg.alert('Succcess','Basic setup have completed');
		/*
		Ext.create('Ext.container.Viewport',{
					items: [
						{
							xtype: 'loginform',
						}
					]
				});*/
		
		/*Ext.create('Ext.container.Viewport', {
		    layout: 'border',
		    items: [{
		        region: 'north',
		        html: '<h1 class="x-panel-header">Page Title - North Region</h1>',
		        border: false,
		        margins: '0 0 5 0'
		    }, {
		        region: 'west',
		        collapsible: true,
		        title: 'Navigation - West Region',
		        width: 150
		        // could use a TreePanel or AccordionLayout for navigational items
		    }, {
		        region: 'south',
		        title: 'South Panel',
		        collapsible: true,
		        html: 'Information goes here',
		        split: true,
		        height: 100,
		        minHeight: 100
		    }, {
		        region: 'east',
		        title: 'East Panel',
		        collapsible: true,
		        split: true,
		        width: 150
		    }, {
		        region: 'center',
		        xtype: 'tabpanel', // TabPanel itself has no title
		        activeTab: 0,      // First tab active by default
		        items: {
		            title: 'Default Tab',
		            html: 'The first tab\'s content. Others may be added dynamically'
		        }
		    }]
		});
	}
});*/


/*function checkServerStatus()
{
    var img = document.createElement("img");
    img.src = window.location.protocol + '//' + window.location.host + "/homepage.nsf/homePage.gif?OpenImageResource";
    img.onload = function()
    {
        alert("Server is up");
        
    };
    img.onerror = function()
    {
        alert("Server is down");
    };
}*/

function checkServerStatus()
{
    var jsonData = [];
    jsonData.splice(0,0,{firstName : 'Mahe'})
    for(var i=0;i<jsonData.length;i++) {
    	alert(jsonData[i]['firstName']);
    }
}