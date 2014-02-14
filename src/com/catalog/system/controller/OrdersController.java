package com.catalog.system.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.google.gson.Gson;
import com.catalog.system.domain.Customer;
import com.catalog.system.domain.ListGridState;
import com.catalog.system.domain.OrdersFilter;

@Controller("catalogController")
public class CatalogController {
	
	private static final Gson gsonService = new Gson();
	
	public CatalogController() { }
	
	@RequestMapping(value = "/printPreview", method = RequestMethod.POST)
	public void printOrders(@RequestParam(value = "viewState") String viewState,
			@RequestParam(value = "filterCriteria") String filterState, HttpServletResponse response) throws Exception {
		ListGridState gridState = gsonService.fromJson(viewState, ListGridState.class);
		OrdersFilter gridFilters = gsonService.fromJson(filterState, OrdersFilter.class);
		response.getWriter().print("line to set breakpoint at...");
	}
	
	@RequestMapping(value = "/customer/{id}/{name}", method = RequestMethod.GET)
	public com.catalog.system.domain.Customer getBooksByAuthor(@PathVariable("id") Integer id, @PathVariable("name") String name) {
		return new Customer(id, name);
	}
	
}