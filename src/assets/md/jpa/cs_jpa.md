## **기술 면접 정리 - JPA**  
---

⭐
#### <span style="color: green;">**JPA**</span>
자바 ORM 기술에 대한 API 표준 명세를 의미합니다.  
<br/>

⭐
#### <span style="color: green;">**ORM (Object Relational Mapping)**</span>
객체지향 프로그래밍은 클래스를 사용하고, 관계형 데이터 베이스는 테이블을 사용하는데, 객체와 관계형 데이터베이스의 데이터를 자동으로 매핑해주는 것을 말합니다.  
<br/>

⭐⭐⭐
#### <span style="color: green;">**JPA 특징**</span>
JPA는 영속성 컨텍스트라는 속성을 가지고 즉시 로딩과 지연 로딩이라는 기능을 가지고 있습니다.  
<br/>

⭐⭐⭐
#### <span style="color: green;">**영속성 컨텍스트**</span>
영속성 컨텍스트는 엔티티를 영구 저장하는 환경입니다. 엔티티 매니저가 생성되면 자동으로 영속성 컨텍스트가 생성되고 그 안에 엔티티를 관리하거나 보관할 수 있습니다.  
영속성 컨텍스트의 속성으로는 **비영속, 영속, 준영속, 삭제**가 있습니다.  
**비영속 상태**는 영속성 컨텍스트와 무관한 상태로 순수한 객체의 상태 입니다.  
**영속 상태**는 영속성 컨텍스트에 저장된 상태 입니다.  
**준영속 상태**는 영속성 컨텍스트에서 관리되다 분리된 상태 입니다.
**삭제 상태**는 영속성 컨텍스트에서 삭제된 상태 입니다.
그리고 영속성 컨텍스트의 특징으로는 대표적으로 **1차캐시, 동일성 보장, 쓰기 지연, 변경감지**가 있습니다.  
**1차캐시**는 영속성 컨텍스트 내부의 캐시 입니다.  
영속상태의 엔티티는 모두 1차 캐시에 저장되고, 1차캐시는 id를 가지고 있는 Map이 존재합니다.  
엔티티를 조회할 때 바로 DB에 접근하는 것이 아니라, 1차 캐시에 있는 데이터를 먼저 조회한 후 없는 경우에만 DB에 접근하여 다시 1차캐시에 저장합니다.  
먼저 DB에 접근하는 것이 아니기 때문에 데이터의 결과를 더 빠르게 가져올 수 있습니다.  
또 하나의 특징으로 **동일성 보장**이라는 특징이 있습니다.  
동일성 보장은 1차캐시와 연관되며 모든 엔티티들은 1차캐시에 저장되어지기 때문에 식별자가 동일한 엔티티의 경우 동일성이 보장됩니다. 여기서 동일성은 같은 객체를 참조하는 것을 말합니다.
또 다른 특징으로는 **쓰기 지연**이 있습니다.  
쓰기 지연 쓰기 작업이 발생했을 때, 영속성 컨텍스트의 쓰기지연 저장소에 모아둔 쿼리들을 모아두었다가 트랜잭션이 커밋될 때 모아둔 쿼리를 DB에 반영합니다.  
마지막으로 **변경감지**라는 특징이 있습니다.  
1차 캐시 안에는 스냅샷을 통해 엔티티의 변경을 감지합니다.

트랜잭션이 커밋 되면 flush가 호출되고, 엔티티와 스탭샷을 비교해서 변경된 엔티티를 찾고, 이에 맞는 알맞은 쿼리를 생성해줍니다.  
<br/>

⭐
#### <span style="color: green;">**즉시 로딩과 지연 로딩**</span>
즉시 로딩은 엔티티를 조회할 때 연관된 엔티티도 함께 조회하는 것을 말하고, 지연 로딩은 연관된 엔티티를 실제로 사용할 때 조회됩니다.  
<br/>

⭐
#### <span style="color: green;">**JPA 장점**</span>
CRUD 같은 반복적인 코드를 줄일 수 있고 테이블이나 컬럼정보가 변경되었을 때 발생할 수 있는 쿼리에 대한 수정을 하지 않아도 되므로 프로그램의 생산성이 보다 향상될 수 있고, 특정 데이터베이스에 종속되지 않는다는 장점이 있습니다.  
또한 자바는 객체지향 패러다임으로 만들어졌고, 관계형 데이터베이스는 데이터를 정규화해서 잘 보관하는 것을 목표로 하는데, 객체를 데이터 베이스에 넣기 위해서는 SQL문을 통해 변환해서 처리해야하고, 반대로 데이터베이스에서 객체를 다시 꺼내오기 위해서도 SQL문을 작성해야 합니다. JPA를 사용함으로써 앞서 말한 객체, 데이터베이스 간의 패러다임 불일치를 해결할 수 있습니다.  
<br/>

⭐
#### <span style="color: green;">**JPA 단점**</span>
어느 정도의 학습시간이 필요하고, 복잡한 쿼리처리가 어렵고, 객체 간의 매핑 설계가 잘못되었을 때 성능저하가 발생될 수 있습니다.  
<br/>

⭐
#### <span style="color: green;">**트랜잭션**</span>
트랜잭션은 작업의 완정성을 보장하는 것이고 논리적인 작업의 단위를 말합니다.
트랜잭션을 사용할 때 주의할 점은 첫 번째 데이터 베이스의 커넥션 수는 한정적이기 때문에 커넥션을 보유하는 시간을 최소화할 필요가 있습니다. 그렇지 않으면, 해당 커넥션을 사용하기위해 대기해야하는 상황이 있을 수 있습니다.  
또한 두 개 이상의 트랜잭션이 엔티티에 대한 잠금을 보유하면 서로의 자원에 대해 접근했을 때 교착상태가 발생할 수 있습니다.  
<br/>

⭐
#### <span style="color: green;">**N+1 문제**</span>
하나의 쿼리를 수항하는데 N개의 쿼리가 더 수행된다는 의미입니다.  
Member 객체와 Team 객체가 연관되어 있다고 가정하고, 즉시로딩 일 경우 10명의 Member를 조회할 때 무조건 값이 실제 10명 조회에 대한 쿼리가 발생한다.  
지연 로딩일 경우 프록시 객체를 사용하고 직접 DB에 조회하지 않는다.  
<br/>

⭐
#### <span style="color: green;">**지연로딩의 N+1 문제 해결 방법**</span>
지연로딩으로 설정해도 엔티티에 접근하게 되면 N+1 문제가 발생합니다.
대표적인 해결방법으로 Fetch Join과 Batch Size 설정이 있습니다.  
Fetch Join은 JPQL을 사용하여 DB에서 데이터를 가져올 때 처음부터 연관된 데이터까지 같이 가져오게 하는 방법입니다.  
Batch Size 설정은 N+1 문제가 발생하더라고 N+1번의 쿼리 발생이 아닌 Where 조건으로 변경하여 1번만 더 조회하는 방식입니다.    
기본적으로 Batch Size 값을 1000이하로 설정합니다. (대부분의 DB에서 IN절의 최대 개수 값 1000개)
연관관계에 대한 설정이 필요하다면 FetchType을 성능 최적화 하기 어려운 즉시 로딩 대신, 지연 로딩으로 사용하고 성능 최적화가 필요한 부분에서는 Fetch조인을 사용한다.  
연관관계를 끊어버리고 사용 하는 것도 하나의 방법이다.  
<br/>

⭐
#### <span style="color: green;">**쿼리가 복잡해질 경우 해결 방법**</span>
JPA 자체는 정적인 상황에서 사용하는걸 권장하기 때문에 복잡한 쿼리와 동적인 쿼리에 대한 문제가 발생하게됩니다.  
그렇기 때문에 이러한 문제를 해결하기 위해 경우에 따라 JPQL, Querydsl 아니면 일부만 MyBatis를 채택하는 방법이 있습니다.   
(MyBatis는 쿼리 기반 웹 애플리케이션을 개발할 때 가장 많이 사용되는 SQL 매퍼(Mapper) 프레임워크를 뜻한다.)  
<br/>

#### <span style="color: red;">**보충 필요 내용**</span>

- 준영속상태 전환 시점
- 준영속 상태 vs 삭제 상태
- JPA의 동일성 보장으로 인해 발생하는 데이터 동기화 문제 [https://devhyogeon.tistory.com/6](https://devhyogeon.tistory.com/6)
- 1차캐시 삭제 시점
- flush vs commit
- 트랜잭션 주의사항 및 특징
- Redis
<br/>
<br/>
<br/>
<br/>

