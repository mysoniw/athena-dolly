athena-dolly
============
Athena-Dolly는 Infinispan Data Grid를 이용한 WAS에 비종속적인 세션 클러스터링 솔루션으로 현재 Apache Tomcat 6/7, JBoss EAP 6, WebLogic 11이 지원 가능하며 추후 Jeus, WebSphere등 다양한 WAS로도 지원을 확대할 계획이다.

1. Athena-Dolly의 설치
   - mvn install을 수행하게 되면 target 디렉토리에 athena-dolly-0.0.1-SNAPSHOT-bin.zip 파일이 생성되며, 해당 파일을 설치하고자 하는 서버로 복사한다.
   - athena-dolly-0.0.1-SNAPSHOT-bin.zip 파일을 압축 해제하게 되면 dolly-agent 라는 디렉토리가 생성되고, 하위에 dolly.properties 파일 및 lib 디렉토리가 존재하며 lib 디렉토리 안에 관련 라이브러리 파일들이 존재한다.
   - dolly.properties 파일에는 BCI를 위한 타깃 클래스 목록 및 Infinispan 관련 설정이 포함되며, infinispan.client.hotrod.server_list 항목은 ";" 구분자를 이용하여 현재 동작하고 있는 Infinispan hotrod 서버 목록으로 수정해야 한다.
     
2. dolly.properties 수정
   - _**dolly.verbose**_ : Verbosity 여부
   - _**dolly.session.timeout**_ : 세션 만료 시간 설정(분)
   - _**dolly.enableSSO**_ : SSO 사용 여부
   - _**dolly.sso.domain.list**_ : SSO 사용 대상 도메인 목록
   - _**dolly.sso.parameter.key**_ : SSO 사용 시 다른 도메인에 Session ID를 넘겨줄 때 사용하는 Query Parameter Key
   - _**dolly.instrument.target.class**_ : WAS 및 SSO 사용 여부에 따라 선택하여 주석 해제
   - _**infinispan.client.hotrod.xxx**_ : Infinispan Hotrod Client 설정(기본 값으로 사용 권고)
   - _**infinispan.client.hotrod.server_list**_ : Infinispan Hotrod Server 목록
   - _**maxActive, maxTotal, maxIdle, testOnBorrow**_ : Infinispan Connection Pool 관련 설정(기본 값으로 사용 권고)
     
3. Athena-Dolly 실행을 위한 WAS 구동 옵션 추가
   - Athena-Dolly 실행을 위해서 dolly.properties에 해당하는 System Property 및 javaagent 옵션이 필요하다.
     (eg) -Ddolly.properties=/opt/dolly-agent/dolly.properties 
          -javaagent:/opt/dolly-agent/lib/athena-dolly-0.0.1-SNAPSHOT.jar
   - JBoss EAP 6 버전에서는 jboss.modules.system.pkgs 옵션에 com.athena.dolly 추가
     (eg) -Djboss.modules.system.pkgs=org.jboss.byteman,com.athena.dolly
   - Weblogic 11 버전에서는 commons-pool 라이브러리의 충돌로 boot classpath를 지정한다.
     (eg) -Xbootclasspath/p:/opt/dolly-agent/lib/commons-pool-1.6.jar 
        
4. 상태정보 확인
   - WAS 구동 후 http://${SERVER_IP}:${SERVER_PORT}/${CONTEXT}/dolly_stats.jsp 파일을 호출하면 Infinispan Properties, Infinispan Stats, Cache Data List 조회 화면이 표시된다.
     단, WAS에 따라서 표시가 되지 않을 수 있으며 athena-dolly-0.0.1-SNAPSHOT.jar 파일 내의 /META-INF/resources/dolly_stats.jsp 파일을 WebRoot로 복사하면 호출 가능하다.
     
5. Infinispan file-store 활성화
   - Infinispan 서버에 Eviction과 Expiration 관련 옵션이 주어지지 않을 경우 데이터가 무한 적재되면서 OutOfMemory가 발생할 가능성이 있기 때문에 다음과 같이 캐시에 eviction 설정을 추가하고 evict 된 데이터를 파일로 저장할 수 있도록 file-store 설정을 추가한다.

```     
 <distributed-cache name="default" mode="SYNC" segments="20" owners="2" remote-timeout="30000" start="EAGER">
    <locking isolation="READ_COMMITTED" acquire-timeout="30000" concurrency-level="1000" striping="false"/>
    <transaction mode="NONE"/>
    <eviction strategy="LRU" max-entries="8192"/>
    <!-- expiration은 dolly.properties 파일의 dolly.session.timeout 값으로 대체하여 설정된다.(lifespan은 -1, max-idle은 ${dolly.session.timeout}) --> 
    <file-store passivation="true" path="dolly" purge="false" preload="true" shared="true" />
</distributed-cache>
```

* file-store에 포함될 수 있는 Attributes는 다음과 같다.
    
    - _**max-entries**_ : Sets the maximum number of in-memory mappings between keys and their position in the store. Normally this is unlimited, but to avoid excess memory usage, an upper bound can be configured. If this limit is exceeded, entries are removed permanently using the LRU algorithm both from the in-memory index and the underlying file based cache store. Warning: setting this value may cause data loss.
    - _**relative-to**_ : The base directory in which to store the cache state.
    - _**path**_ : The path within "relative-to" in which to store the cache state. If undefined, the path defaults to the cache container name.
    - _**write-behind**_ : Configures a cache store as write-behind instead of write-through.
    - _**property**_ : A cache store property with name and value.
    - _**name**_ : Uniquely identifies this store.
    - _**shared**_ : This setting should be set to true when multiple cache instances share the same cache store (e.g., multiple nodes in a cluster using a JDBC-based CacheStore pointing to the same, shared database.) Setting this to true avoids multiple cache instances writing the same modification multiple times. If enabled, only the node where the modification originated will write to the cache store. If disabled, each individual cache reacts to a potential remote update by storing the data to the cache store.
    - _**preload**_ : If true, when the cache starts, data stored in the cache store will be pre-loaded into memory. This is particularly useful when data in the cache store will be needed immediately after startup and you want to avoid cache operations being delayed as a result of loading this data lazily. Can be used to provide a 'warm-cache' on startup, however there is a performance penalty as startup time is affected by this process.
    - _**passivation**_ : If true, data is only written to the cache store when it is evicted from memory, a phenomenon known as 'passivation'. Next time the data is requested, it will be 'activated' which means that data will be brought back to memory and removed from the persistent store. If false, the cache store contains a copy of the contents in memory, so writes to cache result in cache store writes. This essentially gives you a 'write-through' configuration.
    - _**fetch-state**_ : If true, fetch persistent state when joining a cluster. If multiple cache stores are chained, only one of them can have this property enabled.
    - _**purge**_ : If true, purges this cache store when it starts up.
    - _**singleton**_ : If true, the singleton store cache store is enabled. SingletonStore is a delegating cache store used for situations when only one instance in a cluster should interact with the underlying store.
    - _**read-only**_ : If true, the cache store will only be used to load entries. Any modifications made to the caches will not be applied to the store.
    
# +:+:+:+: Appendix +:+:+:+:

A. SSO 처리를 위한 jsp 페이지 추가 / 수정
   1. 웹사이트 웰컴 페이지를 index.jsp, 로그인 처리 후 리턴 페이지를 login_result.jsp 라고 했을 때, login_result.jsp 에서 SSO 대상 각각의 도메인으로 초기 1회 요청을 수행해야 한다.
      - 요청 시 현재 생성된 JSESSIONID를 파라메타로 넘겨야 하며, 요청 방법은 iframe, Ajax 중 선택하여 호출한다.  

* iframe 사용
```
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head></head>
	<body>
		<iframe src="http://www.domain1.com/index.jsp?ATHENA_DOLLY_SESSION_ID=<%= request.getSession().getId() %>" style="visibility:hidden;display:none"></iframe>
		<iframe src="http://www.domain2.com/index.jsp?ATHENA_DOLLY_SESSION_ID=<%= request.getSession().getId() %>" style="visibility:hidden;display:none"></iframe>
		<iframe src="http://www.domain3.com/index.jsp?ATHENA_DOLLY_SESSION_ID=<%= request.getSession().getId() %>" style="visibility:hidden;display:none"></iframe>
		<iframe src="http://www.domain4.com/index.jsp?ATHENA_DOLLY_SESSION_ID=<%= request.getSession().getId() %>" style="visibility:hidden;display:none"></iframe>
	</body>
</html>
```

* Ajax 사용
```
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<script type="text/javascript" src="http://code.jquery.com/jquery-1.8.0.min.js"></script>
	    <script>
			$(document).ready(function() {
				var sessionId = "<%= request.getSession().getId() %>";
	
				var urls = ["http://www.domain1.com/index.jsp?ATHENA_DOLLY_SESSION_ID=", 
							"http://www.domain2.com/index.jsp?ATHENA_DOLLY_SESSION_ID=", 
							"http://www.domain3.com/index.jsp?ATHENA_DOLLY_SESSION_ID=", 
							"http://www.domain4.com/index.jsp?ATHENA_DOLLY_SESSION_ID="];
				
				for (var i = 0; i < urls.length; i++) {
					$.ajax({
					      type: 'GET',
					      dataType: 'jsonp',
					      url: urls[i] + sessionId
					 });
				}
			});
		</script>
	</head>
	<body></body>
</html>
```

B. SSO 사용 시 Internet Explorer 설정 : IE는 기본적으로 개인정보취급방침(P3P)이 없는 타 도메인에 대한 쿠키를 허용하지 않는다. 따라서 브라우저 설정에서 SSO 대상 도메인에 대한 쿠키를 허용하도록 다음과 같이 설정한다.
   1. 도구 - 인터넷 옵션을 선택한다.
   2. 개인정보 탭을 선택한다.
   3. 설정 필드의 사이트 버튼을 클릭한다.
   ![ScreenShot](https://raw.githubusercontent.com/OpenSourceConsulting/athena-dolly/master/img/ie1.png?token=2142732__eyJzY29wZSI6IlJhd0Jsb2I6T3BlblNvdXJjZUNvbnN1bHRpbmcvYXRoZW5hLWRvbGx5L21hc3Rlci9pbWcvaWUxLnBuZyIsImV4cGlyZXMiOjE0MDE3NTU4Mzd9--5712ddbe4d24c2f69a49cd97c53cc85f583ce6db)
   4. SSO 대상 각각의 도메인을 입력하고 허용 버튼을 클릭한다.
   ![ScreenShot](https://raw.githubusercontent.com/OpenSourceConsulting/athena-dolly/master/img/ie2.png?token=2142732__eyJzY29wZSI6IlJhd0Jsb2I6T3BlblNvdXJjZUNvbnN1bHRpbmcvYXRoZW5hLWRvbGx5L21hc3Rlci9pbWcvaWUyLnBuZyIsImV4cGlyZXMiOjE0MDE3NTU4ODh9--57ced5c0dad3c4aecec7f4eda48cae8e68a91542)
      - 주의 : 포트 번호는 입력하지 않는다.
   5. 확인 버튼을 클릭한다.
   
C. SSO 사용 시 Safari 설정 : IE와 마찬가지로 타 도메인에 대한 쿠키를 허용하지 않으며, 다음과 같이 설정한다.
   1. Safari - 환경설정을 선택한다.
   2. 개인 정보 탭을 선택한다.
   3. 쿠키 및 웹사이트 데이터 차단 항목을 "안함"으로 선택한다.
   ![ScreenShot](https://raw.githubusercontent.com/OpenSourceConsulting/athena-dolly/master/img/safari.png?token=2142732__eyJzY29wZSI6IlJhd0Jsb2I6T3BlblNvdXJjZUNvbnN1bHRpbmcvYXRoZW5hLWRvbGx5L21hc3Rlci9pbWcvc2FmYXJpLnBuZyIsImV4cGlyZXMiOjE0MDE3NTU5MDJ9--37b6130df1c71fddfc209e4d92543b2074f02fe4)
