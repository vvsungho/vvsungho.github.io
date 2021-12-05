##  📢 시작하기

---
#### 특정문자 뒤집기  

***
영어 알파벳과 특수문자로 구성된 문자열이 주어지면 영어 알파벳만 뒤집고,
특수문자는 자기 자리에 그대로 있는 문자열을 만들어 출력하는 프로그램을 작성하세요.


입력  
첫 줄에 길이가 100을 넘지 않는 문자열이 주어집니다.


출력  
첫 줄에 알파벳만 뒤집힌 문자열을 출력합니다.

예시입력:
a#b!GE*T@S  

예시출력:
S#T!EG*b@a

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