package com.catalog.system.domain;

import java.util.List;

public class ListGridSort {

	private String fieldName;
	
	private Boolean sortDir;
	
	private List<ListGridSortSpecifiers> sortSpecifiers;
	
	public String getFieldName() {
		return fieldName;
	}

	public void setFieldName(String fieldName) {
		this.fieldName = fieldName;
	}

	public Boolean getSortDir() {
		return sortDir;
	}

	public void setSortDir(Boolean sortDir) {
		this.sortDir = sortDir;
	}

	public List<ListGridSortSpecifiers> getSortSpecifiers() {
		return sortSpecifiers;
	}

	public void setSortSpecifiers(List<ListGridSortSpecifiers> sortSpecifiers) {
		this.sortSpecifiers = sortSpecifiers;
	}
	
}