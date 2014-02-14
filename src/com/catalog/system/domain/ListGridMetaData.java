package com.catalog.system.domain;

public class ListGridMetaData {

	private ListGridState viewState;
	
	private String filterCriteria;
	
	public ListGridState getViewState() {
		return viewState;
	}

	public void setViewState(ListGridState viewState) {
		this.viewState = viewState;
	}

	public String getFilterCriteria() {
		return filterCriteria;
	}

	public void setFilterCriteria(String filterCriteria) {
		this.filterCriteria = filterCriteria;
	}
	
}