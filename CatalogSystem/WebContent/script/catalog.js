isc.DataSource.create({
	ID: 'accountData',
    dataFormat: 'json',
    dataURL: purchaseOrderContextRoot+'data/accounts.json',
    fields:[
        { name: 'AccountId' },
        { name: 'AccountNumber' },
        { name: 'AccountName' },
        { name: 'DivisionNumber' }
    ]
});

isc.DataSource.create({
	ID: 'purchaseOrderLinesData',
    dataFormat: 'json',
    dataURL: purchaseOrderContextRoot+'data/purchaseOrderLines.json',
    fields:[
        { name: 'PurchOrderId' },
        { name: 'AccountNumber' },
        { name: 'PONumber' },
        { name: 'Recur' },
        { name: 'POSequence' }
    ]
});

isc.Canvas.create(
		{ID: 'someID', title: 'blah', members: 
			[isc.HLayout.create()]
		}
);

isc.VLayout.create({
	ID: 'ordersMainLayout',
	members: [
  	    isc.ToolStrip.create({
	  	    ID: 'ordersOptionsToolbar',
	  	    width: 1145,
	  	    members: [
  				isc.DynamicForm.create({
					ID: 'accountForm',
				    numCols: 7,
				    fields : [{
				    	ID: 'accountSelector',
				        name: 'accountSelector',
				        title: "Account #",
				        wrapTitle: false,
				        editorType: 'select',
				        width: 300,
				        autoDraw: true,
				        defaultToFirstOption: true,
				        optionDataSource: 'accountData',
				        displayField: 'AccountName',
				        valueField: 'AccountNumber',
				        changed: function(value) {
				        	searchCatalogGrid.setData([]);
				        }
				    }, {
				    	ID: 'purchaseLineSelector',
				        name: 'purchaseLineSelector',
				        title: "PO #",
				        wrapTitle: false,
				        editorType: 'select',
				        width: 150,
				        autoDraw: true,
				        defaultToFirstOption: true,
				        optionDataSource: 'purchaseOrderLinesData',
				        displayField: 'PONumber',
				        valueField: 'PurchOrderId',
				        changed: function(value) {
				        	$.getJSON(purchaseOrderContextRoot+'data/purchaseOrder.json', function(data) {
				        		purchaseOrdersGrid.setData(data);
				        	});
				        }
				    }, {
				    	ID: 'standingCheckbox',
				    	title: 'Standing',
				    	type: 'checkbox'
				    }]
				}),
				isc.LayoutSpacer.create({ width: 3}),
				"separator",
				isc.LayoutSpacer.create({ width: 3}),
				isc.ImgButton.create({
					ID: 'newIcon', 
					actionType: 'button', 
					height: 17, 
					width: 17, 
					src: purchaseOrderContextRoot+'resources/images/new_order.gif', 
				    click: function () {
				    	isc.warn('Creating new order...');
				    }
				}),
				isc.LayoutSpacer.create({ width: 5}),
				isc.ImgButton.create({
					ID: 'copyIcon', 
					actionType: 'button', 
					height: 20, 
					width: 20, 
					src: purchaseOrderContextRoot+'resources/images/copy_order.gif', 
				    click: function () {
				    	isc.warn('Copying order...');
				    }
				}),
				isc.LayoutSpacer.create({ width: 2}),
				isc.ImgButton.create({
					ID: 'changeIcon', 
					height: 20, 
					width: 20, 
					src: purchaseOrderContextRoot+'resources/images/insert_doc.gif', 
				    click: function () {
				    	isc.warn('Changing current PO number...');
				    }
				}),
				isc.LayoutSpacer.create({ width: 5}),
				"separator",
				isc.LayoutSpacer.create({ width: 3}),
				isc.ImgButton.create({
					ID: 'searchScreenIcon', 
					actionType: 'button', 
					height: 17, 
					width: 17, 
					src: purchaseOrderContextRoot+'resources/images/search_area.gif', 
				    click: function () {
				    	isc.warn('Maximizing Search Catalog...');
				    }
				}),
				isc.LayoutSpacer.create({ width: 5}),
				isc.ImgButton.create({
					ID: 'splitScreenIcon', 
					actionType: 'button', 
					height: 20, 
					width: 20, 
					src: purchaseOrderContextRoot+'resources/images/split_area.gif', 
				    click: function () {
				    	isc.warn('Splitting screen mode...');
				    }
				}),
				isc.LayoutSpacer.create({ width: 5}),
				isc.ImgButton.create({
					ID: 'orderScreenIcon', 
					height: 20, 
					width: 20, 
					src: purchaseOrderContextRoot+'resources/images/order_area.gif', 
				    click: function () {
				    	isc.warn('Maximizing Order...');
				    }
				})
	  	    ]
  	    }),
	    isc.VLayout.create({
	    	ID: 'searchCatalogLayout'
	    }),
	    isc.VLayout.create({
	    	ID: 'purchaseOrderLayout',
	    	members: [
				isc.ToolStrip.create({
					ID: 'purchaseOrdersToolbar',
					width: 1145,
					members: [
						isc.LayoutSpacer.create({ width: 2}),
						isc.Button.create({
							ID: 'sendPurchaseOrderBtn',
							title: 'Send',
							width: 60,
							click: function() {
								isc.warn('Sending Purchase Order...');
							}
						}),
						isc.LayoutSpacer.create({ width: 5}),
						isc.Button.create({
							ID: 'updatePurchaseOrderBtn',
							title: 'Update',
							width: 60,
							click: function() {
								isc.warn('Updating Purchase Order...');
							}
						}),
						isc.LayoutSpacer.create({ width: 5}),
						isc.Button.create({
							ID: 'quickAddPurchaseOrderBtn',
							title: 'Quick Add',
							width: 70,
							click: function() {
								isc.warn('Quick Add Purchase Order...');
							}
						}),
						isc.LayoutSpacer.create({ width: 5}),
						isc.Button.create({
							ID: 'deletePurchaseOrderBtn',
							title: 'Delete Order',
							width: 80,
							click: function() {
								isc.warn('Deleting Purchase Order...');
							}
						}),
						isc.LayoutSpacer.create({ width: 5}),
						isc.Button.create({
							ID: 'importPurchaseOrderBtn',
							title: 'Import',
							width: 60,
							click: function() {
								isc.warn('Importing Purchase Order...');
							}
						}),
						isc.LayoutSpacer.create({ width: 5}),
						isc.Button.create({
							ID: 'exportPurchaseOrderBtn',
							title: 'Export',
							width: 60,
							click: function() {
								isc.warn('Exporting Purchase Order...');
							}
						}),
						isc.LayoutSpacer.create({ width: 50}),
   	    				isc.Button.create({
    				    	ID: 'highlightPurchaseOrderBtn',
    				    	title: 'Highlight Results',
    				    	click: function() {
    				    		purchaseOrdersGrid.editHilites();
    				    	}
    				    }),
						isc.LayoutSpacer.create({ width: 5}),
						isc.ImgButton.create({
							ID: 'printPurchaseOrderBtn',
							height: 20,
							width: 20,
							src: purchaseOrderContextRoot+'resources/images/print.gif',
							click: function() {
									isc.Canvas.showPrintPreview(purchaseOrdersGrid, {}, {
										title: 'Some Report', showHeaderIcon: false,
										isModal: true,
										closeClick: function() {
// 											purchaseOrdersGrid.refreshFields();
											this.Super("closeClick", arguments);
										}
									});
							}
						})
			        ]
				}),
				isc.ListGrid.create({
					ID: 'purchaseOrdersGrid',
					autoFetchData: false,
					dataPageSize: 25,
					drawAheadRatio: 3,
					height: 248,
					autoFitData: 'horizontal',
					canEdit: true,
					autoSaveEdits: true,
					alwaysShowEditors: true,
 					canFreezeFields: false,
 					canReorderRecords: true,
				    fields: [
//				        { name: 'Actions', showTitle: false, width: 60, align: 'center', canHide: false, canEdit: false, showDefaultContextMenu: false },
				        { title: 'Item #', name: 'ItNum', width: 60, align: 'center',
							formatCellValue: function(value, record, rowNum, colNum, grid) {
								var itemNum = value;
								if (value.length < 7) itemNum = value.lpad('0', 7);
								return '<a href="javascript:void(0)">' + itemNum.substr(0, 3) + '-' + itemNum.substr(3) + '</a>';
							}
				        },
				        { name: 'MB', width: 20, align: 'center', canSort: false, showTitle: false, canHide: false, showDefaultContextMenu: false,
				            formatCellValue: function(value, record, rowNum, colNum, grid) {
								return value == '0' ? '' : '<img src="' + purchaseOrderContextRoot + 'resources/images/moneyBagGreen.gif">';
				            }
				        },
				        { title: 'Qty', name: 'Qty', width: 35, align: 'center', cellAlign: 'right', 
				            formatCellValue: function(value, record, rowNum, colNum, grid) {
				            	if (value == '1') return '';
				            	return value;
				            },
				            formatEditorValue: function(value, record, rowNum, colNum) {
				            	if (value == '1') return '';
				            	return value;
				            }
//				            editorProperties: {
//				            	keyPress: function(item, form, keyName, characterValue) {
//				            		alert('Old Value: ' + item.getValue() + ', Key Pressed: ' + keyName);
//				            		return true;
//				            	}
//				            },
//				            editorExit: function (editCompletionEvent, record, newValue, rowNum, colNum, grid) {
//				            	if (record.Stk < newValue) {
//				            		alert('Stock Available: ' + record.Stk + ', ' + 'Stock Requested: ' + newValue);
//				            		return false;
//				            	}
//				            	return true;
//				            }
				        },
				        { title: 'Alternates', name: 'Alt', width: 60, align: 'center', canSort: false,
				            formatCellValue: function(value, record, rowNum, colNum, grid) {
				            	var retVal = '';
								retVal += value ? '<a href="javascript:void(0)">A</a>' : 'A';
								retVal += '&nbsp;&nbsp;' + '$';
								retVal += '&nbsp;&nbsp;' + 'C';
								retVal += '&nbsp;&nbsp;' + 'G';
								return retVal;
				            }
				        },
				        { title: 'H', name: 'Hst', type: 'boolean', width: 20, align: 'center',
				            formatCellValue: function(value, record, rowNum, colNum, grid) {
								return value ? '<a href="javascript:void(0)">H</a>' : 'H';
				            }
				        },
				        { title: 'NDC', name: 'NDC', width: 80, align: 'center', cellAlign: 'left' }, 
				        { title: 'Description', name: 'Dsc', align: 'center', cellAlign: 'left', width: 200,
				            formatCellValue: function(value, record, rowNum, colNum, grid) {
				            	if (record.SpOrd == true) return '<a href="javascript:void(0)" style="color:blue;">' + value + '</a>';
								return '<a href="javascript:void(0)" style="color:black;">' + value + '</a>';
				            }
				        },
				        { title: 'Pack', name: 'Pck', width: 40, align: 'center', cellAlign: 'right' }, 
				        { title: 'MSQ', name: 'MSQ', width: 32, align: 'center', canSort: false },
				        { title: 'Stock', name: 'Stk', width: 40, align: 'center', cellAlign: 'right', canSort: false,
				            formatCellValue: function(value, record, rowNum, colNum, grid) {
				            	if (value == 0) return '<span style="color: red;">0</span>';
								return value;
				            }
				        },
				        { title: 'Contract', name: 'Cnt', width: 70, align: 'center' }, 
				        { title: 'C', name: 'CntT', width: 20, align: 'center', canEdit: false },
				        { title: 'Price', name: 'AqPrc', width: 60, align: 'center', cellAlign: 'right',
				            formatCellValue: function(value, record, rowNum, colNum, grid) {
				            	var formattedVal = formatAmount(value);
				            	return formattedVal;
				            },
				            formatEditorValue: function(value, record, rowNum, colNum, grid) {
				            	var formattedVal = formatAmount(value) + 'X';
				            	return formattedVal;
				            }
				        },
				        { title: 'AWP', name: 'AWP', width: 60, align: 'center', cellAlign: 'right',
				            formatCellValue: function(value, record, rowNum, colNum, grid) {
				            	return formatAmount(value);
				            }
				        },
				        { title: 'BA', name: 'BOA', type: 'text', width: 70, canSort: false, align: 'center',
				            formatCellValue: function(value, record, rowNum, colNum, grid) {
								return value == 'A' ? 'Acquire' : value == 'B' ? 'Backorder' : '';
				            },
				            valueMap: [
				                'Backorder', 'Acquire'
				            ],
				            parseEditorValue: function (value, record, rowNum, colNum, grid) {
				            	return value == 'Acquire' ? 'A' : value == 'Backorder' ? 'B' : '';
				            }
				        },
				        { title: 'Retail', name: 'RtPrc', width: 55, align: 'center', cellAlign: 'right', canSort: false,
				            formatCellValue: function(value, record, rowNum, colNum, grid) {
				            	return formatAmount(value);
				            }
				        },
				        { title: 'A/B', name: 'AB', width: 32, align: 'center', canSort: false },
				        { title: 'Strength', name: 'Str', width: 53, align: 'center', cellAlign: 'right', canSort: false },
				        { title: 'Extended', name: 'Ext', width: 60, align: 'center', cellAlign: 'right',
				            formatCellValue: function(value, record, rowNum, colNum, grid) {
								return formatAmount(value);
				            }
				        }
				    ],
		        	keyPress: function() {
		        		return true;
		        	},
		            canEditCell: function(rowNum, colNum) {
		            	if (this.getFieldName(colNum) == 'Qty') return true;
		            	if (this.getFieldName(colNum) == 'RtPrc') return true;
		            	var record = this.getEditedRecord(rowNum);
		            	if (record.Qty > record.Stk) {
		            		if (this.getFieldName(colNum) == 'BOA') return true;
		            	}
		            	return false;
		            },
		            showRecordComponents: true,
		            showRecordComponentsByCell: true,
		            createRecordComponent : function (record, colNum) {
		            	var fieldName = this.getFieldName(colNum);
		            	if (fieldName == 'Actions') {
		            		return isc.HLayout.create({
		            			height: 16,
		            			width: 60,
		            			align: 'center',
		            			members: [
	        				        isc.Button.create({
	        				        	title: 'Upd',
	        				        	height: 16,
	        				        	width: 30,
	        				        	click: function() {
	        				        		alert('Updating ' + record.ItNum);
	        				        	}
	        				        }),
	        				        isc.Button.create({
	        				        	title: 'Del',
	        				        	height: 16,
	        				        	width: 30,
	        				        	click: function() {
	        				        		alert('Deleting ' + record.ItNum);
	        				        	}
	        				        })
				            	]
		            		});
		            	}
		            	return null;
		            }
				})
            ]
	    })
	]
});

$(document).ready(function() {
    isc.ToolStrip.create({
		ID: 'searchCatalogToolbar',
		width: 1145,
		members: [
			isc.DynamicForm.create({
				ID: 'searchCatalogForm',
			    numCols: 7,
			 	saveOnEnter: true,
			 	itemKeyPress: function(item, keyName, characterValue) {
			 		if (keyName == 'Enter') {
			 			$.getJSON(purchaseOrderContextRoot+'data/purchaseOrder.json', function(data) {
			 				searchCatalogGrid.setData(data);
			 			});
			 		}
			 	},
			    fields : [{
			    	ID: 'searchTextInput',
			        name: 'searchTextInput',
			        title: "Search",
			        wrapTitle: false,
			        editorType: 'text',
			        changeOnKeypress: false,
			        width: 300
			    }, {
			    	ID: 'searchTypeSelector',
			        name: 'searchTypeSelector',
			        showTitle: false,
			        editorType: 'select',
			        width: 150,
			        autoDraw: true,
			        defaultToFirstOption: true,
			        valueMap: {
			        	"intellisearch" : "Intellisearch",
			        	"begins with" : "begins with",
			        	"contains" : "contains"
			        }
			    }, {
			    	ID: 'synonymCheckbox',
			    	title: 'Synonym',
			    	type: 'checkbox'
			    }]
			})
		]
    });
    
	isc.ListGrid.create({
		ID: 'searchCatalogGrid',
		autoFetchData: false,
		dataPageSize: 50,
		drawAheadRatio: 2,
		height: 360,
		autoFitData: 'horizontal',
		canEdit: true,
		autoSaveEdits: true,
		alwaysShowEditors: true,
		canFreezeFields: false,
        fields:[
                { title: 'Item #', name: 'ItNum', width: 60, align: 'center', canEdit: false,
        			formatCellValue: function(value, record, rowNum, colNum, grid) {
        				var itemNum = value;
        				if (value.length < 7) itemNum = value.lpad('0', 7);
        				return '<a href="javascript:void(0)">' + itemNum.substr(0, 3) + '-' + itemNum.substr(3) + '</a>';
        			}
                },
                { title: 'Qty', name: 'Qty', width: 35, align: 'center', cellAlign: 'right', canEdit: true,
                    formatCellValue: function(value, record, rowNum, colNum, grid) {
        				return value == '0' ? '' : value;
                    }
                },
                { title: 'Alternates', name: 'Alt', width: 60, canSort: false, align: 'center', canEdit: false,
                    formatCellValue: function(value, record, rowNum, colNum, grid) {
                    	var retVal = '';
        				retVal += value ? '<a href="javascript:void(0)">A</a>' : 'A';
        				retVal += '&nbsp;&nbsp;' + '$';
        				retVal += '&nbsp;&nbsp;' + 'C';
        				retVal += '&nbsp;&nbsp;' + 'G';
        				return retVal;
                    }
                },
                { title: 'H', name: 'Hst', type: 'boolean', width: 20, align: 'center', canEdit: false,
                    formatCellValue: function(value, record, rowNum, colNum, grid) {
        				return value ? '<a href="javascript:void(0)">H</a>' : 'H';
                    }
                },
                { title: 'NDC', name: 'NDC', width: 70, align: 'center', cellAlign: 'left', canEdit: false },
                { title: 'H. D. Smith Item Description', name: 'Dsc', align: 'center', cellAlign: 'left', width: 230, canEdit: false,
                    formatCellValue: function(value, record, rowNum, colNum, grid) {
                    	if (record.SpOrd == true) return '<a href="javascript:void(0)" style="color:blue;">' + value + '</a>';
        				return '<a href="javascript:void(0)" style="color:black;">' + value + '</a>';
                    }
                },
                { title: 'Pack', name: 'Pck', width: 40, align: 'center', cellAlign: 'right', canEdit: false },
        		{ title: 'UD', name: 'UD', width: 32, align: 'center', canSort: false, canEdit: false },
                { title: 'MSQ', name: 'MSQ', width: 32, align: 'center', canSort: false, canEdit: false },
                { title: 'MC', name: 'MC', width: 28, align: 'center', canSort: false, canEdit: false },
                { title: 'Stock', name: 'Stk', width: 40, align: 'center', cellAlign: 'right', canSort: false, canEdit: false,
                    formatCellValue: function(value, record, rowNum, colNum, grid) {
                    	if (value == 0) return '<span style="color: red;">0</span>';
        				return value;
                    }
                },
                { title: 'Contract', name: 'Cnt', width: 70, align: 'center', canEdit: false },
                { title: 'C', name: 'CntT', width: 20, align: 'center', canEdit: false },
                { title: 'Price', name: 'Prc', width: 60, align: 'center', cellAlign: 'right', canEdit: false,
                    formatCellValue: function(value, record, rowNum, colNum, grid) {
                    	return formatAmount(value);
                    }
                },
                { title: 'AWP', name: 'AWP', width: 60, align: 'center', cellAlign: 'right', canEdit: false,
                    formatCellValue: function(value, record, rowNum, colNum, grid) {
                    	return formatAmount(value);
                    }
                },
                { title: 'BA', name: 'BOA', width: 70, align: 'center', canSort: false, canEdit: true,
                    formatCellValue: function(value, record, rowNum, colNum, grid) {
        				return value == 'A' ? 'Acquire' : value == 'B' ? 'Backorder' : '';
                    }
                },
                { title: 'Retail', name: 'RtPrc', width: 55, align: 'center', cellAlign: 'right', canSort: false, canEdit: true,
                    formatCellValue: function(value, record, rowNum, colNum, grid) {
                    	return formatAmount(value);
                    }
                },
                { title: 'A/B', name: 'AB', width: 32, align: 'center', canSort: false, canEdit: false },
                { title: 'Strength', name: 'Str', width: 53, align: 'center', cellAlign: 'right', canSort: false, canEdit: false }
            ]
	});
	
	searchCatalogToolbar.addMember(
		isc.Button.create({
	    	ID: 'highlightCatalogBtn',
	    	title: 'Highlight Results',
	    	click: function() {
	    		searchCatalogGrid.editHilites();
	    	}
	    })
	);
	
	searchCatalogToolbar.addMember(
		isc.LayoutSpacer.create({ width: 5})
	);
	
	searchCatalogToolbar.addMember(
		isc.ImgButton.create({
			ID: 'printCatalogBtn',
			height: 20,
			width: 20,
			src: purchaseOrderContextRoot+'resources/images/print.gif',
			click: function() {
				isc.Canvas.showPrintPreview(searchCatalogGrid, {}, {
					title: 'H. D. Smith - Reports', showHeaderIcon: false,
					isModal: true,
					showModalMask: true,
					closeClick: function() {
						searchCatalogGrid.refreshFields();
						this.Super("closeClick", arguments);
					},
					membersChanged: function() {
						searchCatalogGrid.refreshFields();
					}
				});
			}
		})
	);
	
	searchCatalogToolbar.addMember(
		isc.LayoutSpacer.create({ width: 5})
	);
	
	searchCatalogToolbar.addMember(
		isc.Button.create({
			ID: 'printCatalogServerBtn',
			title: 'Print Serverside',
			click: function() {
				var test = isc.JSON.decode(searchCatalogGrid.getViewState());
				$.post(purchaseOrderContextRoot+'control/printPreview', 
					{
						viewState: JSON.stringify({field: isc.JSON.decode(test.field), sort: isc.JSON.decode(test.sort)}), 
						filterCriteria: JSON.stringify(searchCatalogGrid.getFilterEditorCriteria())
					},
					'json'
				);
			}
		})
	);
	
	searchCatalogLayout.addMember(searchCatalogToolbar);
	searchCatalogLayout.addMember(searchCatalogGrid);
});

function formatAmount(value) {
	if (value == null) return "";
	value = value.toString().replace(/\$|\,/g,'');
	if (isNaN(value)) value = "0";
	sign = (value == (value = Math.abs(value)));
	value = Math.floor(value * 100 + 0.50000000001);
	cents = value % 100;
	value = Math.floor(value/100).toString();
	if(cents < 10) cents = "0" + cents;
	for (var i = 0; i < Math.floor((value.length - (1 + i)) / 3); i++)
	value = value.substring(0, value.length - (4 * i + 3))+','+
	value.substring(value.length - (4 * i + 3));
	return (((sign) ? '' : '-') + value + '.' + cents);
}