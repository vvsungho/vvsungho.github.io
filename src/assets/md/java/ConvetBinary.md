##  📢 시작하기

---
##### [Java]자바 진수변환(10진수->2진수,8진수,16진수)
***
Integer 클래스의 toBinaryString, toOctalString, toHexString 함수를 사용하면 각각 2진수,8진수 16진수로 변환해준다.
***
* Integer.toBinaryString(int value) => 2진수
* Integer.toBinaryString(int value) => 8진수
* Integer.toBinaryString(int value) => 16진수

해당 함수는 String으로 return 된다.

```java
    int value = 93;

    String 이진수 = Integer.toBinaryString(value);
    String 팔진수 = Integer.toOctalString(value);
    String 십육진수 = Integer.toHexString(value);

    System.out.println(이진수); // 1011101
    System.out.println(팔진수); // 135
    System.out.println(십육진수); // 5d
```
<br/>
2진수, 8진수, 16진수 -> 10진수 또한 Integer 클래스 parseInt(String value, n진수) 함수로 변환 가능하다.    

```java
    int 이진수변환 = Integer.parseInt(이진수, 2);
    int 팔진수변환 = Integer.parseInt(팔진수, 8);
    int 십육진수변환 = Integer.parseInt(십육진수, 16);

    System.out.println(이진수변환); // 93
    System.out.println(팔진수변환); // 93
    System.out.println(십육진수변환); // 93
```
<br/>


