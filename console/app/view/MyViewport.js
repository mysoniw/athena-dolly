/*
 * File: app/view/MyViewport.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('webapp.view.MyViewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.Img',
        'Ext.toolbar.Spacer',
        'Ext.button.Button',
        'Ext.form.Label',
        'Ext.toolbar.Toolbar',
        'Ext.form.FieldContainer',
        'Ext.form.field.Display',
        'Ext.panel.Tool',
        'Ext.grid.Panel',
        'Ext.grid.column.Action',
        'Ext.layout.container.Border',
        'Ext.layout.container.Card',
        'Ext.ux.GMapPanel',
        'Ext.util.Point',
        'Ext.chart.*',
        'Ext.data.*'
    ],

    layout: 'border',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    margins: '0 0 5 0',
                    region: 'north',
                    height: 50,
                    itemId: 'northPanel',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'image',
                            margins: '3 3 3 8',
                            height: 45,
                            itemId: 'logoImg',
                            margin: '',
                            width: 120,
                            src: 'resources/images/logo/osc-logo.png',
                            title: 'Open Source Consulting Co. ltd.'
                        },
                        {
                            xtype: 'image',
                            margins: '0 0 0 8',
                            height: 60,
                            itemId: 'dollyImg',
                            width: 60,
                            src: 'resources/images/logo/athena_dolly_2.png',
                            title: 'Athena Dolly'
                        },
                        {
                            xtype: 'tbspacer',
                            flex: 1,
                            width: 500
                        },
                        {
                            xtype: 'panel',
                            flex: 1,
                            layout: 'fit'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    region: 'west',
                    split: true,
                    itemId: 'menuPanel',
                    width: 250,
                    resizable: false,
                    bodyBorder: false,
                    collapsible: true,
                    title: 'MENU',
                    titleAlign: 'left',
                    titleCollapse: false,
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'button',
                            margins: '10 5 5 5',
                            id: 'dashboardBtn',
                            itemId: 'dashboardBtn',
                            enableToggle: true,
                            icon: 'resources/images/icon/dashboard.png',
                            iconAlign: 'right',
                            pressed: true,
                            scale: 'large',
                            text: 'Dashboard'
                        },
                        {
                            xtype: 'button',
                            margins: '5 5 5 5',
                            id: 'sessionDataBtn',
                            itemId: 'sessionDataBtn',
                            enableToggle: true,
                            icon: 'resources/images/icon/database2.png',
                            iconAlign: 'right',
                            scale: 'large',
                            text: 'Session Data List'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    margins: '5 0 0 0',
                    region: 'south',
                    height: 50,
                    itemId: 'southPanel',
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'label',
                            flex: 1,
                            itemId: 'footerLabel1',
                            style: '{text-align: center;}',
                            text: '© 2014 , Open Source Consulting, Inc. All rights reserved.'
                        },
                        {
                            xtype: 'label',
                            flex: 1,
                            itemId: 'footerLabel2',
                            style: '{text-align: center;}',
                            text: 'Gangnam Mirae Tower 805, Saimdang-ro 174(Seocho-dong), Seocho-gu, Seoul, Korea'
                        },
                        {
                            xtype: 'label',
                            flex: 1,
                            itemId: 'footerLabel3',
                            style: '{text-align: center;}',
                            text: '+ 82 (2) 516-0711, sales@osci.kr'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    region: 'center',
                    frame: false,
                    itemId: 'centerContainer',
                    layout: 'card',
                    items: [
                        {
                            xtype: 'panel',
                            itemId: 'dashboardPanel',
                            layout: 'border',
                            items: [
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    region: 'center',
                                    id: 'monitoringPanel',
                                    itemId: 'monitoringPanel',
                                    title: 'System Monitoring',
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'panel',
                                            flex: 1,
                                            id: 'memoryPanel',
                                            itemId: 'memoryPanel',
                                            layout: 'fit'
                                        },
                                        {
                                            xtype: 'panel',
                                            flex: 1,
                                            id: 'cpuPanel',
                                            itemId: 'cpuPanel',
                                            layout: 'fit'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    region: 'south',
                                    split: true,
                                    height: 150,
                                    id: 'statPanel',
                                    itemId: 'statPanel',
                                    collapsible: true,
                                    title: 'Infinispan Statistics',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'panel',
                                            margins: '5 5 5 5',
                                            layout: {
                                                type: 'vbox',
                                                align: 'stretch'
                                            },
                                            dockedItems: [
                                                {
                                                    xtype: 'toolbar',
                                                    flex: 1,
                                                    dock: 'top',
                                                    items: [
                                                        {
                                                            xtype: 'image',
                                                            height: 32,
                                                            width: 32,
                                                            src: 'resources/images/icon/session.png'
                                                        },
                                                        {
                                                            xtype: 'label',
                                                            id: 'totalField',
                                                            itemId: 'totalField',
                                                            style: '{text-align: center;font-size: 15pt;}',
                                                            text: 'Totally 0 Session Data Saved in Cache'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            flex: 2,
                                            margins: '5 5 5 5',
                                            itemId: 'statContainer',
                                            layout: {
                                                type: 'hbox',
                                                align: 'stretch'
                                            },
                                            items: [
                                                {
                                                    xtype: 'fieldcontainer',
                                                    flex: 1,
                                                    height: 120,
                                                    width: 400,
                                                    items: [
                                                        {
                                                            xtype: 'displayfield',
                                                            id: 'statField1',
                                                            itemId: 'statField1',
                                                            fieldLabel: 'Time Since Start(sec)',
                                                            labelWidth: 170
                                                        },
                                                        {
                                                            xtype: 'displayfield',
                                                            id: 'statField2',
                                                            itemId: 'statField2',
                                                            fieldLabel: 'Total Number of Entries',
                                                            labelWidth: 170
                                                        },
                                                        {
                                                            xtype: 'displayfield',
                                                            id: 'statField3',
                                                            itemId: 'statField3',
                                                            fieldLabel: 'Current Number of Entries',
                                                            labelWidth: 170
                                                        }
                                                    ]
                                                },
                                                {
                                                    xtype: 'fieldcontainer',
                                                    flex: 1,
                                                    height: 120,
                                                    width: 400,
                                                    items: [
                                                        {
                                                            xtype: 'displayfield',
                                                            id: 'statField4',
                                                            itemId: 'statField4',
                                                            fieldLabel: 'Stores'
                                                        },
                                                        {
                                                            xtype: 'displayfield',
                                                            id: 'statField5',
                                                            itemId: 'statField5',
                                                            fieldLabel: 'Retrivals'
                                                        },
                                                        {
                                                            xtype: 'displayfield',
                                                            id: 'statField6',
                                                            itemId: 'statField6',
                                                            fieldLabel: 'Hits'
                                                        }
                                                    ]
                                                },
                                                {
                                                    xtype: 'fieldcontainer',
                                                    flex: 1,
                                                    height: 120,
                                                    width: 400,
                                                    items: [
                                                        {
                                                            xtype: 'displayfield',
                                                            id: 'statField7',
                                                            itemId: 'statField7',
                                                            fieldLabel: 'Misses',
                                                            labelWidth: 130
                                                        },
                                                        {
                                                            xtype: 'displayfield',
                                                            id: 'statField8',
                                                            itemId: 'statField8',
                                                            fieldLabel: 'Remove Hits',
                                                            labelWidth: 130
                                                        },
                                                        {
                                                            xtype: 'displayfield',
                                                            id: 'statField9',
                                                            itemId: 'statField9',
                                                            fieldLabel: 'Remove Misses',
                                                            labelWidth: 130
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ],
                                    tools: [
                                        {
                                            xtype: 'tool',
                                            id: 'statRefreshTool',
                                            itemId: 'statRefreshTool',
                                            type: 'refresh'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            id: 'sessionDataPanel',
                            itemId: 'sessionDataPanel',
                            layout: 'border',
                            items: [
                                {
                                    xtype: 'gridpanel',
                                    flex: 1,
                                    region: 'center',
                                    id: 'sessionDataGrid',
                                    itemId: 'sessionDataGrid',
                                    autoScroll: true,
                                    title: 'Session List',
                                    emptyText: 'No Cache Keys',
                                    forceFit: true,
                                    store: 'sessionDataStore',
                                    columns: [
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'key',
                                            text: 'Key',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'actioncolumn',
                                            width: 50,
                                            align: 'center',
                                            menuDisabled: true,
                                            items: [
                                                {
                                                    handler: function(view, rowIndex, colIndex, item, e, record, row) {
                                                        var sessionDataGrid = Ext.getCmp('sessionDataGrid'),
                                                            detailPanel = Ext.getCmp('detailPanel');

                                                        Ext.Msg.confirm('Confirm', 'Are you sure you want to delete this session?', function(btn) {
                                                            if (btn == 'yes') {
                                                                sessionDataGrid.setLoading(true);

                                                                Ext.Ajax.request({
                                                                    url: GlobalData.urlPrefix + 'deleteSessionData?key=' + record.get('key'),
                                                                    params: {
                                                                    },
                                                                    success: function(response, opts){
                                                                        sessionDataGrid.setLoading(false);
                                                                        Ext.getCmp('refreshTool').fireEvent('click');
                                                                    },
                                                                    failure: function(response, opts) {
                                                                        sessionDataGrid.setLoading(false);
                                                                        Ext.Msg.alert('Error', 'Server-side failure with status code ' + response.status);
                                                                    }
                                                                });
                                                            }
                                                        });
                                                    },
                                                    icon: 'resources/images/icon/delete.png',
                                                    tooltip: 'Delete Session Data'
                                                }
                                            ]
                                        }
                                    ],
                                    tools: [
                                        {
                                            xtype: 'tool',
                                            id: 'refreshTool',
                                            itemId: 'refreshTool',
                                            type: 'refresh'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    region: 'east',
                                    split: true,
                                    id: 'detailPanel',
                                    itemId: 'detailPanel',
                                    width: 150,
                                    autoScroll: true,
                                    layout: 'fit',
                                    animCollapse: false,
                                    collapsed: false,
                                    collapsible: true,
                                    title: 'Session Detail',
                                    items: [
                                        {
                                            xtype: 'displayfield',
                                            itemId: 'sessionDataField',
                                            margin: '5 5 5 5',
                                            overflowX: 'auto',
                                            overflowY: 'auto'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});