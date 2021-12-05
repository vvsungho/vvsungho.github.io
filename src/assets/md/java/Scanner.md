##  📢 시작하기

---
##### JAVA Scanner 함수
***
* next(), nextLine() 차이.

    * next => 띄어쓰기 기준으로 값을 읽는다.

      입력값: ABC DEF GHI
  ```java
      System.out.println(kb.next());
      System.out.println("=====");
      System.out.println(kb.next());
      System.out.println("----");
      System.out.println(kb.next());
  ```
  출력값:  
      ABC  
      DEF  
      GHI  
  <br>
* nextLine => 개행문자 (엔터) 기준으로 값을 읽는다.  
    입력값:  
    ABC DEF GHI  
    JKL  
    MNO  
  ```java
      System.out.println(kb.nextLine());
      System.out.println("=====");
      System.out.println(kb.nextLine());
      System.out.println("----");
      System.out.println(kb.nextLine());
  ```
  출력값:  
  ABC DEF GHI  
  JKL  
  MNO
