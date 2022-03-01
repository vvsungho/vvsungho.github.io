##  📢 시작하기

---
#### 피라미드 삼각형 별찍기..

***

```java
    static void triangle1(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n-i+1; j++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= (i-1) * 2 + 1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
```
<br/>
[해설]

1번째 for문

- 입력값(n) 만큼 행 루프



2번째 for문 : j <= n-i+1

- 공백은 5행 기준으로, 1행 = 4 , 2행 = 3.... 즉 공백은 한개씩 줄어간다.



3번째 for문 : j  <=  (i-1) * 2 + 1

- 별(*) 1개 시작으로 2개씩 증가, 즉 별의 개수는 홀수
<br/>