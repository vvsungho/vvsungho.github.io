##  📢 시작하기

---
#### 직각 삼각형 별찍기

***

``` java
    /**
     * 오른쪽 위가 직각인 이등변 삼각형 출력
     */
    static void triangle3(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                System.out.print(i<= j ? "*" : " ");
            }
            System.out.println();
        }
    }
```

<img src="./img/triangle2.png" width="100" height="100">

``` java
    /**
     * 오른쪽 아래가 직각인 이등변 삼각형 출력
     */
    static void triangle4(int n) {
        //        for (int i = 1; i <= n; i++) {
        //            for (int j = n; j >= 1; j--) {
        //                if (i >= j) {
        //                    System.out.print("*");
        //                } else {
        //                    System.out.print(" ");
        //                }
        //            }
        //            System.out.println();
        //        }
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                System.out.print(i+j > n ? "*" : " ");
            }
            System.out.println();
        }
    }
```
<img src="./img/triangle1.png" width="100" height="100">