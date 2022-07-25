## **기술 면접 정리 - Spring**
---
⭐⭐⭐
#### <span style="color: green">**Spring FrameWork**</span>
자바의  오픈소스 애플리케이션 프레임워크 중 하나로 스프링의 기본철학은 특정 기술에 종속되지 않고 객체를 관리할 수 있는 프레임워크를 제공하는 것 입니다.  
스프링 컨테이너로 자바 객체를 관리하면서 DI와 IoC를 통해 결합도를 낮추게 됩니다.  
<br/>

⭐⭐⭐
#### <span style="color: green">**DI (Depedency Injection)**</span>
DI는 의존성 주입을 의미합니다.  
객체간의 의존관계를 미리 설정해두면 스프링 컨테이너가 의존관계를 자동으로 연결해줍니다.  
이렇게 되면 직접 의존하는 객체를 생성하는 일이 없기 때문에 결합도가 낮아지는 장점이 있습니다.
의존성 주입은 생성자 주입, 필드 주입, 세터 주입의 3가지 방법이 있는데 Spring에서 가장 권장하는 의존성 주입 방법은 생성자를 통한 주입 방법 인데  
그 이유는 순환 참조를 방지하고, 불변성을 가지며 테스트에 용이하기 때문입니다.

**[[Spring] 의존성 주입 3가지 방법 - (생성자 주입, Field 주입, Setter 주입) 참고자료](https://dev-coco.tistory.com/70)**  
<br/>

⭐⭐⭐
#### <span style="color: green">**IoC에 대해 아는대로 **</span>
IoC는 제어의 역전을 의미합니다.  
제어권이 개발자에게 있지 않고, 프레임워크에 있어서 필요에 따라서 사용자의 코드를 호출하게 됩니다.  
스프링에서는 인스턴스의 생성부터 소멸까지 개발자가 아닌 컨테이너에서 대신 관리하게 됩니다.

**[[Spring] IoC 컨테이너 (Inversion of Control) 참고자료](https://dev-coco.tistory.com/80)**  
<br/>

⭐⭐
#### <span style="color: green">**AOP (Aspect Oriented Programming)**</span>
트랜잭션이나 로깅, 보안과 같이 공통적으로 사용하는 기능의 경우 해당 기능을 분리하여 관리할 수 있습니다.  
**[[Spring] AoP (Aspect Oriented Programming) 참고자료](https://dev-coco.tistory.com/81)**  
<br/>

⭐⭐
#### <span style="color: green">**Spring Container**</span>
애플리케이션이 실행되면 비어있는 스프링 컨테이너가 생성되고 스프링 설정 파일을 기반으로 컨테이너에 스프링 빈이 등록되고 스프링 빈의 의존관계가 주입됩니다.  
<br/>

⭐⭐
#### <span style="color: green">**Spring MVC**</span>
MVC는 Model, View, Controller의 약자이며, 각 계층간의 기능을 구분하는데 중점을 둔 디자인 패턴 입니다.  
MVC패턴을 사용하는 이유는 비즈니스 로직과 UI 로직을 분리하여 유지보수를 독립적으로 수행할 수 있습니다.  
Model과 View가 다른 컴포넌트들에 종속되지 않아 애플리케이션의 확장성, 유연성에 유리하고 중복코드를 제거할 수 있습니다.    
Model은 <u>데이터 관리 및 비즈니스 로직을 처리하는 부분 입니다.</u>  (DAO, DTO, Service)  
View는 <u>비즈니스 로직의 처리 결과를 통해 유저 인터페이스가 표현되는 구간 입니다.</u>  
Controller는 <u>사용자의 요청을 처리하고 Model과 View를 중개하는 역할을 합니다.</u>  
<br/>

⭐⭐
#### <span style="color: green">**@Transactional의 동작 원리**</span>
**@Transactional**을 메서드 또는 클래스에 명시하면, AOP를 통해 Target이 상속하고 있는 인터페이스 혹은 Target 객체를 상속한 Proxy 객체가 생성되며,  
Proxy 객체의 메서드를 호출하면 Target 메서드 전 후로 트랜잭션 처리를 수행합니다.  
**[[Spring] Transaction 참고자료](https://steady-coding.tistory.com/610)**  
<br/>

⭐
#### <span style="color: green">**라이브러리**</span>
자바에서 직접 제공하지 않고 외부에서 가져와 사용하는 것을 라이브러리라고 부릅니다.  
라이브러리는 프로그램의 제어권이 개발자에게 있습니다.  
<br/>

⭐
#### <span style="color: green">**프레임워크**</span>
프로그램의 흐름을 제공하는 기본 틀을 말합니다.  
<br/>

⭐
#### <span style="color: green">**싱글톤 패턴**</span>
싱글톤 패턴은 하나의 인스턴스만 생성하여 사용하는 디자인 패턴입니다.  
스프링에서 bean 생성 시 별다른 설정이 없으면 default로 싱글톤이 적용됩니다.  
요청이 들어올 때마다 매번 객체를 생성하지 않고, 이미 만들어진 객체를 공유하기 때문에 효율적인 사용이 가능합니다.  
싱글톤 패턴으로 다음과 같은 장점을 얻을 수 있습니다.
* static 메서드나 생성자 등을 사용하지 않아 객체지향적 개발을 할 수 있다.
* 테스트하기가 편리하다.
<br/>

⭐
#### <span style="color: green">**Spring의 스코프 프로토타입 빈**</span>
프로토타입 빈은 싱글톤빈과는 달리 컨테이너에게 빈을 요청할 때마다 매번 새로운 객체를 생성하여 반환해줍니다.  
<br/>

⭐
#### <span style="color: green">**POJO**</span>
스프링에서 생성되어 관리되는 POJO 기반의 객체를 Spring Bean이라고 합니다.

여기서 POJO는 단순 getter, setter만으로 구성되어 있으며 단순히 new를 통해서 생성 가능한 형태를 말합니다.

핵심은 특정 기술에 종속되는 어떤 클래스도 상속하지 않고 있고, 어떠한 인터페이스도 구현하고 있지 않은 자바 클래스입니다.  
<br/>

⭐
#### <span style="color: green">**서블릿**</span>
서블릿은 자바를 사용해 웹을 만들기 위해 필요한 기술 입니다.  
클라이언트의 요청을 처리하고, 그 결과를 반환하는 Servlet 클래스의 구현 규칙을 지킨 자바 웹 프로그래밍 기술 입니다.
Spring MVC에서 Controller로 이용되며, 사용자의 요청을 받아 처리한 후에 결과를 반환합니다.  
<br/>

⭐
#### <span style="color: green">**Spring, SpringBoot 차이**</span>
가장 큰 차이점은 Auto Configuration의 차이인 것 같습니다. Spring은 프로젝트 초기에 다양한 환경설정을 해야 하지만,

Spring Boot는 설정의 많은 부분을 자동화하여 사용자가 편하게 스프링을 활용할 수 있도록 돕습니다.

spring boot starter dependency만 추가해주면 설정은 끝나고, 내장된 톰캣을 제공해 서버를 바로 실행할 수 있습니다.  
<br/>

⭐
#### <span style="color: green">**WAS (Web Application Server)와 WS (Web Server) 차이**</span>
WAS는 비즈니스 로직을 넣을 수 있고, 대표적으로 Tomcat, PHP, ASP 등이 있습니다.  
반대로 WS는 비즈니스 로직을 넣을 수 없으며 Nginx, Apache 등이 있습니다.  
<br/>

⭐
#### <span style="color: green">**@RequestBody, @RequestParam, @ModelAttribute 차이**</span>
**@RequestBody**는 <u>클라이언트가 전송하는 JSON 형태의 HTTP Body내용을 MessageConverter를 통해 Java Object로 변환시켜주는 역할을 합니다.</u>  
값을 주입하지 않고도 값을 변환시키므로 (Reflection을 사용해 할당), 변수들의 생성자, getter, setter가 없어도 정상적으로 할당됩니다.

**@RequestParam**은 <u>1개의 HTTP 요청 파라미터를 받기 위해 사용합니다.</u> @RequestParam은 필수 여부가 true이기 때문에, 기본적으로 반드시 해당 파라미터가 전송되어야 합니다.
전송되지 않으면 400Error를 유발할 수 있고, 반드시 필요한 변수가 아니면 required의 값을 false로 설정해야 합니다.

**@ModelAttribute**는 <u>HTTP Body 내용과 HTTP 파라미터의 값들을 생성자, Getter, Setter를 통해 주입하기 위해 사용합니다.</u>
값 변환이 아닌 값을 주입시키므로 변수들의 생성자나 getter, setter가 없으면 변수들이 저장되지 않습니다.  
<br/>

⭐
#### <span style="color: green">**VO, BO, DAO, DTO 차이**</span>
**DAO**(Data Access Object)는 DB 데이터에 접근하기 위한 객체를 말합니다. (Repository, Mapper)  
**BO**(Business Object)는 여러 DAO를 활용해 비즈니스 로직을 처리하는 객체를 말합니다. (Service)  
**DTO**(Data Transfer Object) 각 계층간의 데이터 교환을 위한 객체를 말합니다.  
**VO**(Value Object) 실제 데이터만을 저장하는 객체를 말합니다.    
**[[Spring] DTO, VO, Entity의 차이점 참고자료](https://dev-coco.tistory.com/87)**  
<br/>

⭐
#### <span style="color: green">**대용량 트래픽에서 장애가 발생 시 대응 방법**</span>
Scale-Up을 통해 하드웨어 스펙을 향상시키거나, Scale-Out을 통해 서버를 어러대 추가해 시스템을 증가시키는 방법이 있습니다.  
**[[Spring] 스케일 업과 스케일 아웃 참고자료](https://dev-coco.tistory.com/143)**  
<br/>


#### <span style="color: red">**보충 필요 내용**</span>
- 스프링 빈 라이프 사이클 관리
- MVC 패턴 흐름

<br/>

#### <span style="">**참고 자료**</span>
[Spring 관련 CS 질문](https://dev-coco.tistory.com/163?category=1056309)
<br/>
<br/>
<br/>
<br/>


