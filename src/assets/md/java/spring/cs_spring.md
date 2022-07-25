## **기술 면접 정리 - Spring**
---
⭐⭐⭐
#### <span style="color: green">**Spring FrameWork에 대해 설명해주세요.**</span>
자바의  오픈소스 애플리케이션 프레임워크 중 하나로 스프링의 기본철학은 특정 기술에 종속되지 않고 객체를 관리할 수 있는 프레임워크를 제공하는 것 입니다.

스프링 컨테이너로 자바 객체를 관리하면서 DI와 IoC를 통해 결합도를 낮추게 됩니다.  
<br/>

⭐⭐⭐
#### <span style="color: green">**DI (Depedency Injection)에 대해 설명해주세요.**</span>
DI는 의존성 주입을 의미합니다.

객체간의 의존관계를 미리 설정해두면 스프링 컨테이너가 의존관계를 자동으로 연결해줍니다.

이렇게 되면 직접 의존하는 객체를 생성하는 일이 없기 때문에 결합도가 낮아지는 장점이 있습니다.

의존성 주입은 생성자 주입, 필드 주입, 세터 주입의 3가지 방법이 있는데 Spring에서 가장 권장하는 의존성 주입 방법은 생성자를 통한 주입 방법 인데

그 이유는 순환 참조를 방지하고, 불변성을 가지며 테스트에 용이하기 때문입니다.

**[[Spring] 의존성 주입 3가지 방법 - (생성자 주입, Field 주입, Setter 주입) 참고자료](https://dev-coco.tistory.com/70)**  
<br/>

⭐⭐⭐
#### <span style="color: green">**IoC에 대해 아는대로 설명해주세요.**</span>
IoC는 제어의 역전을 의미합니다.

제어권이 개발자에게 있지 않고, 프레임워크에 있어서 필요에 따라서 사용자의 코드를 호출하게 됩니다.

스프링에서는 인스턴스의 생성부터 소멸까지 개발자가 아닌 컨테이너에서 대신 관리하게 됩니다.

**[[Spring] IoC 컨테이너 (Inversion of Control) 참고자료](https://dev-coco.tistory.com/80)**  
<br/>

⭐
#### <span style="color: green">**라이브러리가 무엇일까요?**</span>
자바에서 직접 제공하지 않고 외부에서 가져와 사용하는 것을 라이브러리라고 부릅니다.

라이브러리는 프로그램의 제어권이 개발자에게 있습니다.  
<br/>

⭐
#### <span style="color: green">**프레임워크가 무엇일까요?**</span>
프로그램의 흐름을 제공하는 기본 틀을 말합니다.  
<br/>

⭐⭐
#### <span style="color: green">**AOP (Aspect Oriented Programming)에 대해 설명해주세요.**</span>
트랜잭션이나 로깅, 보안과 같이 공통적으로 사용하는 기능의 경우 해당 기능을 분리하여 관리할 수 있습니다.  
<br/>

⭐
#### <span style="color: green">**POJO에 대해서 아는대로 설명해주세요.**</span>
스프링에서 생성되어 관리되는 POJO 기반의 객체를 Spring Bean이라고 합니다.

여기서 POJO는 단순 getter, setter만으로 구성되어 있으며 단순히 new를 통해서 생성 가능한 형태를 말합니다.

핵심은 특정 기술에 종속되는 어떤 클래스도 상속하지 않고 있고, 어떠한 인터페이스도 구현하고 있지 않은 자바 클래스입니다.  
<br/>

⭐⭐
#### <span style="color: green">**Spring Container 생성 과정을 설명해주세요.**</span>
애플리케이션이 실행되면 비어있는 스프링 컨테이너가 생성되고 스프링 설정 파일을 기반으로 컨테이너에 스프링 빈이 등록되고 스프링 빈의 의존관계가 주입됩니다.  
<br/> 

⭐
#### <span style="color: green">**Spirng, SpringBoot 차이를 설명해주세요.**</span>
가장 큰 차이점은 Auto Configuration의 차이인 것 같습니다. Spring은 프로젝트 초기에 다양한 환경설정을 해야 하지만,

Spring Boot는 설정의 많은 부분을 자동화하여 사용자가 편하게 스프링을 활용할 수 있도록 돕습니다.

spring boot starter dependency만 추가해주면 설정은 끝나고, 내장된 톰캣을 제공해 서버를 바로 실행할 수 있습니다.  
<br/>

⭐
#### <span style="color: green">**WAS (Web Application Server)와 WS (Web Server)의 차이를 설명해주세요.**</span>
WAS는 비즈니스 로직을 넣을 수 있고, 대표적으로 Tomcat, PHP, ASP 등이 있습니다. 반대로 WS는 비즈니스 로직을 넣을 수 없으며 Nginx, Apache 등이 있습니다.  
<br/>

⭐
#### <span style="color: green">**@RequestBody, @RequestParam, @ModelAttribute의 차이를 설명해주세요.**</span>
**@RequestBody**는 <u>클라이언트가 전송하는 JSON 형태의 HTTP Body내용을 MessageConverter를 통해 Java Object로 변환시켜주는 역할을 합니다.</u>  
값을 주입하지 않고도 값을 변환시키므로 (Reflection을 사용해 할당), 변수들의 생성자, getter, stter가 없어도 정상적으로 할당됩니다.

**@RequestParam**은 <u>1개의 HTTP 요청 파라미터를 받기 위해 사용합니다.</u> @RequestParam은 필수 여부가 true이기 때문에, 기본적으로 반드시 해당 파라미터가 전송되어야 합니다.
전송되지 않으면 400Error를 유발할 수 있고, 반드시 필요한 변수가 아니면 required의 값을 false로 설정해야 합니다.

**@ModelAttribute**는 <u>HTTP Body 내용과 HTTP 파라미터의 값들을 생성자, Getter, Setter를 통해 주입하기 위해 사용합니다.</u>
값 변환이 아닌 값을 주입시키므로 변수들의 생성자나 getter, setter가 없으면 변수들이 저장되지 않습니다.  
<br/>

#### <span style="color: red">**보충 필요 내용**</span>
- AOP 구성요소 (filter 등등)
- 싱글톤
- 스프링 빈의 라이프사이클
- Lombok
- 서블릿
- VO와 BO, DAO, DTO
- 대용량 트래픽 장애 대응
- 스코프 프로토 타입 빈
- @Transaction 동작 원리

<br/>

#### <span style="">**참고 자료**</span>
[Spring 관련 CS 질문](https://dev-coco.tistory.com/163?category=1056309)
<br/>
<br/>
<br/>
<br/>


