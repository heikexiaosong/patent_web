package com.gavel.plugins.database.opentsdb;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class Metric {

	private String metric;

	private long timestamp;

	private Object value;

	private Map<String, String> tags = new HashMap<String, String>();


	public Metric(String metric) {
		this.metric = metric;
	}

	public Metric addTag(String name, String value) {
		tags.put(name, value);
		return this;
	}

	public Metric setDataPoint(long value) {
		return innerAddDataPoint(System.currentTimeMillis(), value);
	}

	public Metric setDataPoint(long timestamp, long value) {
		return innerAddDataPoint(timestamp, value);
	}

	public Metric setDataPoint(float value) {
		return innerAddDataPoint(System.currentTimeMillis(), value);
	}

	public Metric setDataPoint(long timestamp, float value) {
		return innerAddDataPoint(timestamp, value);
	}

	public Metric setDataPoint(String value) {
		return innerAddDataPoint(System.currentTimeMillis(), value);
	}

	public Metric setDataPoint(long timestamp, String value) {
		return innerAddDataPoint(timestamp, value);
	}

	private Metric innerAddDataPoint(long timestamp, long value) {
		this.timestamp = timestamp;
		this.value = value;
		return this;
	}

	private Metric innerAddDataPoint(long timestamp, float value) {
		this.timestamp = timestamp;
		this.value = value;
		return this;
	}

	private Metric innerAddDataPoint(long timestamp, String value) {
		this.timestamp = timestamp;
		this.value = value;
		return this;
	}

	public String getMetric() {
		return metric;
	}

	public long getTimestamp() {
		return timestamp;
	}

	public Object getValue() {
		return value;
	}

	public Map<String, String> getTags() {
		return Collections.unmodifiableMap(tags);
	}



}
