package com.skyway.entity;

public enum Location {
	
	LIVING("Living Area"),
	
	BATHROOM("Bathroom"),
	
	KITCHEN ("Kitchen"),
	
	BEDROOM("Bedroom"),
	
	LAUNDRY("Laundry");
	
	private final String desc;
	
	private Location(String locationDesc) {
		desc = locationDesc;
	}
	
	public String getDesc() {
		return desc;
	}
}
