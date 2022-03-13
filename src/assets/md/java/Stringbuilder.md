##  📢 시작하기

---
##### JAVA StringBuilder 함수
***
* reverse(str) => str을 뒤집어 저장.


```java
String str = "ABCDEFG";
StringBuilder sb = new StringBuilder();

System.out.println(sb.reverse(str).toString());
// 결과값: GFEDCBA
```

* String vs StringBuilder   
  * String Class는 값 변경이 일어날 때 새로운 객체가 생성되고 변경된 객체가 기존 객체 대입되어 메모리 낭비가 일어나지만, StringBuilder는 처음에 생성된 객체로 계속 사용한다.
