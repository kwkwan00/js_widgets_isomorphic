isc.VLayout.create({
	ID: 'myMainLayout',
	members: [
	    isc.VLayout.create({
	    	ID: 'mySubLayout',
	    	members: [
				isc.ToolStrip.create({
					ID: 'myToolbar',
					width: 278,
					members: [
						isc.Button.create({
							ID: 'populateGridBtn',
							title: 'Populate Grid',
							click: function() {
				        		myGrid.setData(myData);
							}
						})
			        ]
				}),
				isc.ListGrid.create({
					ID: 'myGrid',
					autoFetchData: false,
					height: 245,
					width: 278,
					canEdit: true,
					rowEndEditAction: 'next',
//					alwaysShowEditors: true,
				    fields: [
				        { title: 'Qty', name: 'Qty', width: 35, align: 'center', cellAlign: 'right', validateOnChange: true,
				            formatCellValue: function(value, record, rowNum, colNum, grid) {
				            	if (value == 1) return '';
				            	return value;
				            },
				            formatEditorValue: function(value, record, rowNum, colNum) {
				            	if (value == 1) return '';
				            	return value;
				            }
				        },
				        { title: 'Stock', name: 'Stk', width: 40, align: 'center', cellAlign: 'right', canSort: false,
				            formatCellValue: function(value, record, rowNum, colNum, grid) {
				            	if (value == 0) return '<span style="color: red;">0</span>';
								return value;
				            }
				        },
				        { title: 'Price', name: 'AqPrc', width: 60, align: 'center', cellAlign: 'right',
				            formatCellValue: function(value, record, rowNum, colNum, grid) {
				            	var formattedVal = formatAmount(value) + 'Y';
				            	return formattedVal;
				            },
				            formatEditorValue: function(value, record, rowNum, colNum, grid) {
				            	var formattedVal = formatAmount(value) + 'X';
				            	return formattedVal;
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
				            },
				            validators: [{
			            		clientOnly: true,
			            		condition: function (item, validator, value, record) {
			            			if (value > record.AqPrc) {
			            				return true;
			            			}
			            			else return false;
			            		}
			            	}]
				        }
				    ],
		            canEditCell: function(rowNum, colNum) {
		            	if (this.getFieldName(colNum) == 'Qty') return true;
		            	if (this.getFieldName(colNum) == 'RtPrc') return true;
		            	if (this.getFieldName(colNum) == 'AqPrc') return true;
		            	var record = this.getEditedRecord(rowNum);
		            	if (record.Qty > record.Stk) {
		            		if (this.getFieldName(colNum) == 'BOA') return true;
		            	}
		            	return false;
		            }
				})
            ]
	    })
	]
});

function formatAmount(value) {
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