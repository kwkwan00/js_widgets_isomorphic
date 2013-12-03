package com.catalog.system.domain;

import java.util.List;

public class ListGridState {

	private String selected;
	
	private List<ListGridField> field;
	
	private ListGridSort sort;
	
	public String getSelected() {
		return selected;
	}

	public void setSelected(String selected) {
		this.selected = selected;
	}

	public List<ListGridField> getField() {
		return field;
	}

	public void setFields(List<ListGridField> field) {
		this.field = field;
	}

	public ListGridSort getSort() {
		return sort;
	}

	public void setSort(ListGridSort sort) {
		this.sort = sort;
	}

}