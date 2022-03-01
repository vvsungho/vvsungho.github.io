##  📢 시작하기

---
#### 특정문자 뒤집기  

***
설명

한 개의 문장이 주어지면 그 문장 속에서 가장 긴 단어를 출력하는 프로그램을 작성하세요.

문장속의 각 단어는 공백으로 구분됩니다.


입력
첫 줄에 길이가 100을 넘지 않는 한 개의 문장이 주어집니다. 문장은 영어 알파벳으로만 구성되어 있습니다.


출력
첫 줄에 가장 긴 단어를 출력한다. 가장 길이가 긴 단어가 여러개일 경우 문장속에서 가장 앞쪽에 위치한

단어를 답으로 합니다.


예시 입력 1 it is time to study  
예시 출력 1 study

``` java
import java.util.Scanner;

public class Main {
    // spilt
    public String solution1(String str) {
        String answer = "";
        int value = Integer.MIN_VALUE;
        String[] arr = str.split(" ");
        for (String s : arr) {
            if (s.length() > value) {
                value = s.length();
                answer = s;
            }
        }

        return answer;
    }

    // indexOf
    public String solution2(String str) {
        String answer = "";
        int value = Integer.MIN_VALUE, index;

        // str.indexOf(" ")) str에서 첫번째로 " "가 발견되는 index
        while ((index = str.indexOf(" ")) != -1) {
            // " "가 발견되지 않을 때 까지 반복

            // " "이 발견되기 전 str의 길이와 value값을 비교
            String s = str.substring(0, index);
            if (s.length() > value) {
                // " "이 발견되기 전 str의 길이가 길 경우 value에 길이 대입.
                value = index;
                answer = s;
            }
            // " "가 발견되는 index 다음 부터 끝까지 str 다시 셋팅.
            str = str.substring(index + 1);
        }

        // 마지막 str은 " "가 없으므로 위 로직을 체크하지 않고 반복문 종료됨. ex) it is time to study. study를 체크하지 못한 채 반복문 종료됨.
        // 마지막 단어가 value (반복문에서 발견된 가장 긴 단어 길이)보다 길 경우 마지막 단어를 리턴.
        if (str.length() > value) answer = str;

        return answer;
    }

    public static void main(String[] args) {
        Main main = new Main();
        Scanner kb = new Scanner(System.in);
        String str = kb.nextLine();
        System.out.println(main.solution1(str));
        System.out.println(main.solution2(str));
    }
}

```