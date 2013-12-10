/* 
 * Copyright 2013 The Athena-Peacock Project.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Revision History
 * Author			Date				Description
 * ---------------	----------------	------------
 * Sang-cheon Park	2013. 12. 5.		First Draft.
 */
package com.athena.dolly.enhancer;

import java.util.Collections;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import org.infinispan.client.hotrod.RemoteCache;
import org.infinispan.client.hotrod.RemoteCacheManager;
import org.infinispan.client.hotrod.configuration.ConfigurationBuilder;

/**
 * <pre>
 * 
 * </pre>
 * @author Sang-cheon Park
 * @version 1.0
 */
public class DollyManager {

    private static DollyManager _instance;
	private static RemoteCache<String, Map<String, Object>> cache;

    public synchronized static DollyManager getInstance() {
        if (_instance == null) {
        	init();
            _instance = new DollyManager();
        }
        
        return _instance;
    }
    
    private static void init() {
		ConfigurationBuilder builder = new ConfigurationBuilder();
	    cache = new RemoteCacheManager(builder.withProperties(DollyConfig.properties).build()).getCache();
    }
    
    public synchronized void setValue(String cacheName, String key, Object value) {
    	
		System.out.println("This is setValue() => args(" + cacheName + ", " + key + ", " + value + ")");
		
    	Map<String, Object> attribute = cache.get(cacheName);
		
		if (attribute == null) {
			attribute = new HashMap<String, Object>();
		}
		
		attribute.put(key, value);
		cache.put(cacheName, attribute);
		printAllCache();
    }
    
    public Object getValue(String cacheName, String key) {
		System.out.println("This is getValue() => args(" + cacheName + ", " + key + ")");
		
		printAllCache();
		
    	Map<String, Object> attribute = cache.get(cacheName);
		
		if (attribute == null) {
			return null;
		} else {
			return attribute.get(key);
		}
    }
    
    public Enumeration<String> getValueNames(String cacheName) {
    	
		System.out.println("This is getValueNames() => args(" + cacheName + ")");
		
    	Map<String, Object> attribute = cache.get(cacheName);
		
		if (attribute == null) {
			return null;
		} else {
			return Collections.enumeration(attribute.keySet());
		}
    }
    
    public synchronized void removeValue(String cacheName, String key) {
    	
		System.out.println("This is removeValue() => args(" + cacheName + ", " + key + ")");
		
    	Map<String, Object> attribute = cache.get(cacheName);
		
		if (attribute != null) {
			attribute.remove(key);
		}
    }
    
    public void printAllCache() {
	    System.out.println("ProtocolVersion : " + cache.getProtocolVersion());
	    System.out.println("Version : " + cache.getVersion());
	    System.out.println("isEmpty : " + cache.isEmpty());
	    System.out.println("Size : " + cache.size());
	    
	    Enumeration<String> cacheKeys = Collections.enumeration(cache.keySet());
	    String cacheKey = null;
    	Map<String, Object> data = null;
    	Iterator<String> keys = null;
    	String key = null;
	    int i = 1;
	    while (cacheKeys.hasMoreElements()) {
	    	cacheKey = cacheKeys.nextElement();
    		System.out.println("================== Element index [" + i + "] ==================");
    		System.out.println("Cache Key : " + cacheKey);
	    	
	    	data = cache.get(cacheKey);
	    	
	    	if (data != null) {
		    	keys = data.keySet().iterator();
	    		
	    		while (keys.hasNext()) {
	    			key = keys.next();
	    			System.out.println("[Key] : " + key + ", [Value] : " + data.get(key));
	    		}
	    	} else {
	    		System.out.println("Cache Data is NULL.");
	    	}
    		
    		System.out.println("");
    		i++;  
	    }
    }
}
//end of DollyManager.java