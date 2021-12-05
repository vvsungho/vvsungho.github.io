### 📢 시작하기

---
##### JPA의 객체 그래프 탐색


1. SQL에서의 객체 그래프 탐색
SQL에서는 실행하는 SQL에 따라 객체 그래프를 어디까지 탐색할 수 있는 지 정해진다.


```java
class service {
    public void do() {
        Product product = productDao.find(productId);
        product.getOption() // product -> option 객체 그래프 탐색이 가능한가?
    }
}
```

Product 객체와 연관된 Option 객체를 사용할 수 있는 지 없는 지는 전적으로 사용하는 SQL에 달려 있다.

SQL 방식의 가장 큰 문제점은 객체 그래프가 어디까지 탐색되는지를 확인하기 위해선 DAO에서 실행되는 SQL을 확인해야한다는 점이다.


```java
class service {
    public void do() {
        productDao.find(productId);
        productDao.findProductWithOption(productId);
    }
}
```

product를 조회할 때 상황에 따라 Dao에 옵션도 조회하는 쿼리를 만들어 사용해야 한다.


##### JPA의 객체 그래프 탐색
JPA를 사용하면 객체 그래프를 자유롭게 탐색 할 수 있다.






