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
        'webapp.view.MyTreePanel29',
        'Ext.Img',
        'Ext.toolbar.Spacer',
        'Ext.button.Button',
        'Ext.form.Label',
        'Ext.toolbar.Toolbar',
        'Ext.form.FieldContainer',
        'Ext.form.field.Display',
        'Ext.panel.Tool',
        'Ext.tree.Panel',
        'Ext.form.Panel',
        'Ext.tree.View',
        'Ext.selection.RowModel',
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer',
        'Ext.grid.column.Action',
        'Ext.form.field.TextArea',
        'Ext.layout.container.Border',
        'Ext.layout.container.Card',
        'Ext.ux.GMapPanel',
        'Ext.util.Point',
        'Ext.chart.*',
        'Ext.data.*',
        'Ext.layout.container.Absolute'
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
                            margins: '3 3 3 8',
                            itemId: 'dollyImg',
                            src: 'resources/images/logo/athena_dolly.png',
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
                        },
                        {
                            xtype: 'button',
                            margins: '5 5 5 5',
                            hidden: true,
                            id: 'viewListBtn',
                            itemId: 'viewListBtn',
                            enableToggle: true,
                            icon: 'resources/images/icon/views.png',
                            iconAlign: 'right',
                            scale: 'large',
                            text: 'Views'
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
                                                            fieldLabel: 'Retrievals'
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
                                    xtype: 'panel',
                                    region: 'center',
                                    layout: 'border',
                                    title: 'Session List',
                                    items: [
                                        {
                                            xtype: 'treepanel',
                                            region: 'west',
                                            split: true,
                                            id: 'viewTreePanel1',
                                            itemId: 'viewTreePanel1',
                                            width: 150,
                                            autoScroll: true,
                                            collapsed: false,
                                            store: 'viewTreeStore',
                                            rootVisible: false,
                                            dockedItems: [
                                                {
                                                    xtype: 'form',
                                                    dock: 'top',
                                                    hidden: true,
                                                    id: 'emptyViewPanel',
                                                    itemId: 'emptyViewPanel',
                                                    width: 100,
                                                    layout: 'fit',
                                                    bodyPadding: 10,
                                                    items: [
                                                        {
                                                            xtype: 'label',
                                                            html: '<font size=\'4pt\'><b>View(s) does not exist.</b></font>',
                                                            width: 100
                                                        }
                                                    ]
                                                }
                                            ],
                                            viewConfig: {
                                                id: 'viewTreeView1',
                                                itemId: 'viewTreeView1',
                                                autoScroll: true,
                                                preserveScrollOnRefresh: true
                                            },
                                            selModel: Ext.create('Ext.selection.RowModel', {
                                                listeners: {
                                                    select: {
                                                        fn: me.onRowModelSelect,
                                                        scope: me
                                                    }
                                                }
                                            })
                                        },
                                        {
                                            xtype: 'gridpanel',
                                            flex: 1,
                                            region: 'center',
                                            id: 'sessionDataGrid',
                                            itemId: 'sessionDataGrid',
                                            autoScroll: true,
                                            emptyText: 'No Cache Keys',
                                            forceFit: true,
                                            store: 'sessionDataStore',
                                            columns: [
                                                {
                                                    xtype: 'rownumberer',
                                                    width: 45,
                                                    text: 'No'
                                                },
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

                                                                                var store = Ext.data.StoreManager.lookup('sessionDataStore');
                                                                                store.removeAt(rowIndex);

                                                                                //Ext.getCmp('refreshTool').fireEvent('click');
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
                        },
                        {
                            xtype: 'panel',
                            id: 'viewsPanel',
                            itemId: 'viewsPanel',
                            layout: 'border',
                            title: 'Views',
                            items: [
                                {
                                    xtype: 'panel',
                                    region: 'west',
                                    split: true,
                                    width: 250,
                                    collapsible: false,
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    dockedItems: [
                                        {
                                            xtype: 'toolbar',
                                            flex: 1,
                                            dock: 'top',
                                            items: [
                                                {
                                                    xtype: 'tbspacer',
                                                    flex: 1
                                                },
                                                {
                                                    xtype: 'button',
                                                    id: 'viewCreateBtn',
                                                    itemId: 'viewCreateBtn',
                                                    text: 'Create'
                                                },
                                                {
                                                    xtype: 'button',
                                                    id: 'viewDeleteBtn',
                                                    itemId: 'viewDeleteBtn',
                                                    text: 'Delete'
                                                }
                                            ]
                                        }
                                    ],
                                    items: [
                                        {
                                            xtype: 'mytreepanel29',
                                            flex: 1
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    region: 'center',
                                    split: false,
                                    collapsible: false,
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },
                                    dockedItems: [
                                        {
                                            xtype: 'toolbar',
                                            dock: 'top',
                                            items: [
                                                {
                                                    xtype: 'tbspacer',
                                                    flex: 1
                                                },
                                                {
                                                    xtype: 'button',
                                                    id: 'viewSaveBtn',
                                                    itemId: 'viewSaveBtn',
                                                    text: 'Save'
                                                }
                                            ]
                                        }
                                    ],
                                    items: [
                                        {
                                            xtype: 'panel',
                                            flex: 1,
                                            id: 'mapPanel',
                                            itemId: 'mapPanel',
                                            layout: 'fit',
                                            title: 'Map',
                                            items: [
                                                {
                                                    xtype: 'textareafield',
                                                    id: 'mapTextArea',
                                                    itemId: 'mapTextArea',
                                                    margin: '5 5 5 5',
                                                    overflowX: 'auto',
                                                    overflowY: 'auto'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'panel',
                                            flex: 1,
                                            id: 'reducePanel',
                                            itemId: 'reducePanel',
                                            layout: 'fit',
                                            title: 'Reduce',
                                            items: [
                                                {
                                                    xtype: 'textareafield',
                                                    id: 'reduceTextArea',
                                                    itemId: 'reduceTextArea',
                                                    margin: '5 5 5 5',
                                                    overflowX: 'auto',
                                                    overflowY: 'auto'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            tools: [
                                {
                                    xtype: 'tool',
                                    id: 'viewRefreshTool',
                                    itemId: 'viewRefreshTool',
                                    type: 'refresh'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onRowModelSelect: function(rowmodel, record, index, eOpts) {
        if (record.data.leaf === true) {
            var sessionDataGrid = Ext.getCmp("sessionDataGrid");
            var detailPanel = Ext.getCmp("detailPanel");

            if (detailPanel.collapsed === false) {
                detailPanel.toggleCollapse();
            }

            Ext.Ajax.request({
                url: GlobalData.urlPrefix + 'getSessionKeyList?viewName=' + record.data.id,
                params: {
                },
                success: function(response, opts) {
                    sessionDataGrid.setLoading(false);
                    var obj = Ext.decode(response.responseText);
                    var store = Ext.data.StoreManager.lookup('sessionDataStore');
                    store.loadData(obj);
                    sessionDataGrid.update();
                },
                failure: function(response, opts) {
                    sessionDataGrid.setLoading(false);
                    Ext.Msg.alert('Error', 'Server-side failure with status code ' + response.status);
                }
            });
        }
    }

});