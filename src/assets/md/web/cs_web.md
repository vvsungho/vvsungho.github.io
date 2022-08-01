## **기술 면접 정리 - Web**
---
⭐⭐
#### <span style="color: green">**REST API**</span>
REST API는 웹상에서 사용되는 여러 리소스를 HTTP URL로 표현하고,  
해당 리소스에 대한 행위를 HTTP Method로 정의하는 방식을 말합니다.  
또한 RESTful 규약을 지켜서 개발하는 것을 REST API라고 합니다.  
RESTful은 REST 아키텍처의 제약 조건을 준수하는 것을 말하며,
API를 설계할 때 URL에 동사를 사용하지 않고 명사를 사용하는 등의 REST API 디자인 가이드가 있습니다.  
규약에는 대표적으로 self-descriptive와 hateos가 있습니다.  
</br>

⭐⭐
#### <span style="color: green">**API개발을 하면서 신경쓰는부분 (경험)**</span>
REST API 디자인 가이드, self-descriptive, hateos 등을 준수해서 API 개발 시 고려했던 경험 얘기..
<br/>

⭐
#### <span style="color: green">**HTTP Method**</span>
**GET** : 서버로 부터 데이터를 취득  
**POST** : 서버에 데이터를 추가, 작성  
**PUT** : 서버의 데이터를 생성, 갱신  
**DELETE** : 서버의 데이터를 삭제  
**PATCH** : 서버 리소스의 일부분을 수정  
**HEAD** : 서버 리소스의 헤더 (메타 데이터의 취득)  
**OPTIONS** : 리소스가 지원하고 있는 메서드의 취득  
**CONNECT** : 프록시 동작의 터널 접속을 변경
<br/>

⭐⭐
#### <span style="color: green">PUT vs PATCH</span>
비교 및 예시  
</br>

⭐⭐
#### <span style="color: green">JSONPatch vs JSONMergePatch</span>
JSONPatch 방식은 커맨드 방식으로 동작하고. op, path, value 3개의 항목으로 구성되어있습니다.
**op**는 작업유형을 말합니다. (add, remove, replace, move, copy or test 중에 하나만 사용가능)
</br>

⭐⭐
#### <span style="color: green">**HTTP vs HTTPS**</span>
HTTP는 평문 데이터를 전송하는 프로토콜이기 때문에 HTTP로 중요한 정보를 주고 받으면 제 3자에 의해 조회될 수 있습니다.  
이러한 문제를 해결하기 위해 HTTP에 암호화가 추가된 프로토콜이 HTTPS입니다.  
HTTPS는 SSL 프로토콜을 사용해 사용자가 데이터를 보내는 경우 암호화되어 전송됩니다.  
HTTP는 원래 TCP와 직접 통신했지만, HTTPS에서 HTTP는 SSL과 통신하고 SSL이 TCP와 통신함으로써 암호호와 증명성, 안정성 보호를 이용할 수 있습니다.  
<br/>

⭐⭐
#### <span style="color: green">**쿠키**</span>
사용자의 PC에 저장하는 작은 기록 정보 파일 입니다.  
HTTP에서 클라이언트의 상태 정보를 PC에 저장하였다가 필요할 때 정보를 참조하거나 재사용 할 수 있습니다.  
<br/>

⭐⭐
#### <span style="color: green">**세션**</span>
세션은 일정 시간 동안 같은 사용자로부터 들어오는 일련의 요구를 하나의 상태로 보고, 그 상태를 유지시키는 기술 입니다.  
방문자가 웹서버에 접속해 있는 상태를 하나의 단위라고 보고 그것을 세션이라고 합니다.    
<br/>

⭐⭐
#### <span style="color: green">**쿠키 vs 세션**</span>
쿠키와 세션은 정보를 저장하기위해 사용된다는 공통점이 있지만, 큰 차이점은 쿠키의 저장위치는 사용자의 PC이며, 세션의 저장위치는 웹서버 입니다.
쿠키는 클라이언트 PC에 저장되기 때문에 데이터가 변조될 우려가 있지만 세션은 session-id만 쿠키에 저장하고 그것을 구분하여 서버에서 처리하기 때문에 비교적 보안성이 높습니다.  
그리고 쿠키는 브라우저가 종료되도 만료시간이 지나지 않으면 삭제되지 않지만 세션은 브라우저 종료시 삭제됩니다.  
마지막으로 쿠키는 쿠키자체에 정보가 있기 때문에 session-id를 통해 서버에서 정보를 가져오는 세션보다 속도면에서 우수합니다.  
<br/>

⭐
#### <span style="color: green">**캐시**</span>
캐시는 웹 페이지 요소를 저장하기 위한 임시 저장소이고, 같은 웹 페이지에 접속할 때 클라이언트 PC에서 로드 하므로 웹 페이지를 빠르게 렌더링 할 수 있도록 도와줍니다.
이전에 사용된 데이터가 다시 사용될 가능성이 많으면 캐시 서버에 있는 데이터가 사용되고, 보통 이미지, css, js 파일 등의 리소스 파일들이 캐시로 사용됩니다.  
<br/>

⭐⭐
#### <span style="color: green">**TCP vs UDP**</span>
TCP는 연결형 서비스로 3-way-handshaking 과정을 통해 연결을 설정하기 때문에 높은 신뢰성을 보장하지만, 속도가 비교적 느리다는 단점이 있습니다.  
UDP는 비연결형 서비스로 3-way-handshaking을 사용하지 않기 때문에 신뢰성이 떨어지는 단점이 있지만, 데이터 수신 여부를 확인하지 않기 때문에 속도가 빠르다는 장점이 있습니다.  
이러한 특성으로 TCP는 신뢰성이 중요한 데이터 교환가 같은 경우에 쓰이고 UDP는 실시간성이 중요한 스트리밍에 자주 사용됩니다.  
<br/>

⭐
#### <span style="color: green">**3-way-handshaking**</span>
3-way-handshaking은 TCP 네트워크에서 통신 하는 장치가 서로 연결이 잘 되어있는지 확인하는 방법 입니다.    
송신자와 수신자는 총 3번에 걸쳐 데이터를 주고 받으며 통신이 가능한 상태인지 확인합니다.    
<br/>

⭐
#### <span style="color: green">**4-way-handshaking**</span>
4-way-handshaking은 TCP 네트워크에서 통신 하는 장치의 연결을 해제하는 방법입니다.  
송신자와 수신자는 총 4번에 걸쳐 데이터를 주고 받으며 연결을 끊습니다.
<br/>
<br/>
<br/>
<br/>
