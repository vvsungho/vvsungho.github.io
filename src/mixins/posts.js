const postsMixin = {
    data() {
        return {
            items: [
                {
                    key: '1',
                    sort: 1,
                    tags: ['알고리즘', '백준', '자바'],
                    title: '백준 알고리즘 1966번',
                    content: '백준 알고리즘 1966번'
                },
                {
                    key: '2',
                    sort: 2,
                    tags: ['알고리즘', '자바'],
                    title: 'Java DFS(Depth First Search) 구현하기',
                    content: '<h3><strong>1. 그래프의 탐색</strong></h3>\n' +
                        '<ul>\n' +
                        '  <li>그래프의 탐색은 하나의 정점으로 부터 시작하여 모든 정점을 차례대로 한 번씩 방문하는 것을 의미한다. 예를 들어 특정 도시에서 다른 도시로의 이동 여부 판별이나 회로에서 단자와 단자의 연결 여부 확인 등에\n' +
                        '    사용된다.\n' +
                        '  </li>\n' +
                        '  <li>그래프 탐색에서 대중적으로 많이 알려진 알고리즘이 DFS와 BFS이다.</li>\n' +
                        '</ul><h4><br></h4><h3><strong>2. 깊이 우선 탐색 (DFS, Depth First Search)</strong></h3>\n' +
                        '<ul>\n' +
                        '  <li>DFS는 루트 노드와 임의 노드에서 시작하여 최대한 깊숙히 들어가서 탐색한 후 다시 원점으로 돌아가 다른 루트로 탐색하는 방식이다.</li>\n' +
                        '  <li>일반적으로 재귀호출을 사용하여 구현하며, 단순한 스택이나 인접 행렬, 인접 리스트를 이용하여 구현하기도 한다. 스택을 사용할 경우는 오버플로우를 유의해야 한다.</li>\n' +
                        '  <li>DFS는 자동 미로 생성 또는 미로 탐색에 사용되는데 다음과 같은 특징이 있다.</li>\n' +
                        '  <li class="ql-indent-1">미로 탐색시 한 방향으로 갈 수 있을 때 까지 계속 탐색.</li>\n' +
                        '  <li class="ql-indent-1">막다른 곳에 도달하면 막다른 길에 대한 표식을 남기고 가장 가까운 갈림길로 돌아와 다시 탐색을 진행. 이러한 방법으로 갈림길을 순차적으로 탐색하여 목적지까지의 경로를\n' +
                        '    구함.\n' +
                        '  </li>\n' +
                        '  <li class="ql-indent-1">넓게(BreadTh) 탐색하기 전에 깊게(Depth) 탐색함.</li>\n' +
                        '  <li class="ql-indent-1">모든 노드를 방문하고자 하는 경우에 사용.</li>\n' +
                        '  <li class="ql-indent-1">자기 자신을 호출하는 순환 알고리즘의 형태(재귀호출)</li>\n' +
                        '  <li class="ql-indent-1">노드 방문 여부를 반드시 검사해야함. 그렇지 않으면 무한 루프에 빠질 위험이 있음.</li>\n' +
                        '  <li>DFS 장점</li>\n' +
                        '  <li class="ql-indent-1">구현이 BFS보다 간단하다.</li>\n' +
                        '  <li class="ql-indent-1">현재 경로상의 노드들만 기억하면 되므로, 저장공간의 수요가 비교적 작음.</li>\n' +
                        '  <li class="ql-indent-1">목표 노드가 깊은 단계에 있는 경우 해를 빨리 구할 수 있음.</li>\n' +
                        '  <li>DFS 단점</li>\n' +
                        '  <li class="ql-indent-1">단순 검색 속도는 BFS보다 느림.</li>\n' +
                        '  <li class="ql-indent-1">해가 없는 경우에 빠질 가능성이 있음. 이러한 경우 사전에 임의의 깊이를 지정한 후 탐색하도록 하고, 목표 노드를 발견하지 못할 경우 다음 경로를 탐색하도록 함.\n' +
                        '  </li>\n' +
                        '  <li class="ql-indent-1">DFS는 해를 구하면 탐색이 종료되므로, 구한 해가 최단경로가 된다는 보장이 없음.</li>\n' +
                        '  <li class="ql-indent-1">목표에 이르는 경로가 다수인 경우 구한 해가 최적이 아닐 수 있음.</li>\n' +
                        '</ul><p><br></p><p><br></p><p><br></p>' +
                        '<template>\n' +
                        '  <div style="padding: 2rem">\n' +
                        '    <b-card-title class="text-left">Editor</b-card-title>\n' +
                        '    <editor\n' +
                        '        :initialValue="editorText"\n' +
                        '        :options="editorOptions"\n' +
                        '        height="auto"\n' +
                        '        initialEditType="wysiwyg"\n' +
                        '        previewStyle="vertical"\n' +
                        '        ref="toastuiEditor"\n' +
                        '    />\n' +
                        '    <!--    @change="getHtml"-->\n' +
                        '\n' +
                        '    <div style="margin-top: 1rem" class="text-right">\n' +
                        '      <b-button variant="primary" size="sm" @click="getHtml">HTML TO TEXT</b-button>\n' +
                        '    </div>\n' +
                        '\n' +
                        '    <div>\n' +
                        '      <b-card-title class="text-left" style="margin-top: 1rem">Text</b-card-title>\n' +
                        '      <b-card style="margin-top: 1rem">\n' +
                        '        <div class="text-left" v-html="htmlText" style="height: 300px">\n' +
                        '\n' +
                        '        </div>\n' +
                        '      </b-card>\n' +
                        '    </div>\n' +
                        '  </div>\n' +
                        '</template>\n' +
                        '<script>\n' +
                        'import \'codemirror/lib/codemirror.css\';\n' +
                        'import \'@toast-ui/editor/dist/toastui-editor.css\';\n' +
                        '\n' +
                        'import { Editor } from \'@toast-ui/vue-editor\';\n' +
                        '\n' +
                        'export default {\n' +
                        '  components: {\n' +
                        '    editor: Editor\n' +
                        '  },\n' +
                        '  data() {\n' +
                        '    return {\n' +
                        '      editorText: \'텍스트를 입력하세요.\',\n' +
                        '      editorOptions: {\n' +
                        '        hideModeSwitch: true\n' +
                        '      },\n' +
                        '      htmlText: \'텍스트를 입력하세요.\'\n' +
                        '    };\n' +
                        '  },\n' +
                        '  methods: {\n' +
                        '    getHtml() {\n' +
                        '      this.htmlText = this.$refs.toastuiEditor.invoke(\'getHtml\');\n' +
                        '    }\n' +
                        '  }\n' +
                        '};\n' +
                        '</script>\n' +
                        '\n' +
                        '<style>\n' +
                        '  .tui-editor-defaultUI {\n' +
                        '    text-align: left !important;\n' +
                        '  }\n' +
                        '</style>'
                },
                {
                    key: '3',
                    sort: 3,
                    tags: ['자바', '스프링'],
                    title: 'Java, Spring Framework 주요 개념 요약',
                    content: '<div class="tt_article_useless_p_margin"><p><b><span style="font-size: 18pt;">OOP란?</span></b><b><span style="font-size: 12pt;"></span></b></p>\n' +
                        '<p><span style="font-size: 12pt;">&nbsp;데이터를 객체로 취급하여 프로그램에 반영한 것이며, 순차적으로 프로그램이 동장하는 기존의 것들과 다르게 객체의 상호작용을 통해 프로그램이 동작하는 것을 말한다. 캡슐화, 다형성, 상속을 이용하여 코드 재사용성을 증가시키고, 유지보수를 손쉽게 하는&nbsp;장점을 얻기 위해서 객체들을 연결 시켜 프로그래밍 하는 것이다.&nbsp;</span></p>\n' +
                        '<p>&nbsp;</p>\n' +
                        '<p><b><span style="font-size: 18pt;">자바의 메모리 영역</span></b><b><span style="font-size: 14pt;"></span></b></p>\n' +
                        '<p><span style="font-size: 12pt;">1. 메서드(Method) 영역 ; static변수, 인스턴스 변수를 가리키는 전역변수와&nbsp;코드에서 사용되는 Class 정보등이 올라간다. 코드에서 사용되는 class를 로더로 읽어 클래스별로 필드에티ㅓ, 메서드 데이터 등을 분류해 저장한다.</span></p>\n' +
                        '<p><span style="font-size: 12pt;">2. 스택(Stack) : 지역변수, 함수(메서드) 등이 할당되는 LIFO 방식의 메모리.</span></p>\n' +
                        '<p><span style="font-size: 12pt;">3. 힙(Heap) : new 연산자를 통한 동적할당된 객체들이 저장되며, 가비지 컬렉션에 의해 메모리가 관리된다.</span></p>\n' +
                        '<p>&nbsp;</p>\n' +
                        '<p><b><span style="font-size: 18pt;">자바의 클래스 멤버 변수 초기화 순서</span></b><span style="font-size: 12pt;"></span></p>\n' +
                        '<p><span style="font-size: 12pt;">1. static 변수 선언부 : 클래스가 로드 될 때 변수가 제일 먼저 초기화 된다. 메모리 모델 상 Method area에 올라간다.</span></p>\n' +
                        '<p><span style="font-size: 12pt;">2. 필드 변수 선언부 : 객체생성 될 때 생성자 block 보다 앞서 초기화 된다.</span></p>\n' +
                        '<p><span style="font-size: 12pt;">3. 생성자 block : 객체생성 될 때 JVM이 내부적으로 locking 한다. 필드 변수 중 final 변수의 가시화(다른 스레드에 공개하는 시점)는 생성자 block이 끝난 다음이다.&nbsp;필드 변수 선언부에서 이미 초기화 되었다면 필드 변수 선언부에서 이미 초괴화 되었다면 그 값들은 덮어쓴다.&nbsp;&nbsp;</span></p>\n' +
                        '<p><span style="font-family: \'맑은 고딕\', sans-serif; font-size: 12pt;">&nbsp;</span><span style="font-family: \'맑은 고딕\', sans-serif; font-size: 12pt;">ㆍ초기화시점&nbsp;</span></p>\n' +
                        '<p><span style="font-family: \'맑은 고딕\', sans-serif; font-size: 12pt;">&nbsp;1) 클래스변수의 초기화 순서 : 기본값 -&gt; 명시적초기화 -&gt; 클래스초기화블럭</span></p>\n' +
                        '<p><span style="font-size: 12pt;">&nbsp;2) 인스턴스변수의 초기화 순서: 기본값 -&gt; 명시적초기화 -&gt; 인스턴스 초기화블럭 -&gt; 생성자</span></p>\n' +
                        '<p>&nbsp;</p>\n' +
                        '<p><b><span style="font-size: 18pt;">메모리 상수풀 영역이란?</span></b></p>\n' +
                        '<p><span style="font-size: 12pt;">&nbsp;힙역역에 생성되어 자바프로세스 종료까지 계속 유지되는 메모리 영역이다. 기본적으로 JVM이 관리하며 프로그래머가 작성한 상수에 대해 최우선적으로 찾아보고 없으면 상수풀에 추가한 이후 그 주소값을 리턴한다. 그로인해 메모리 절약 효과가 있다.&nbsp;</span></p>\n' +
                        '<p>&nbsp;</p>\n' +
                        '<p><b><span style="font-size: 18pt;">인터페이스란?</span></b></p>\n' +
                        '<p><span style="font-size: 12pt;">&nbsp;인터페이스는 모든 메서드가 구현부가 없는 추상메서드로 이루어진 클래스로, abstract 키워드를 붙이지 않아도 자동으로 모든 메서드는 추상메서드로 정의된다. 또한 변수도 자동으로&nbsp; final static키워드가 붙게 된다.</span></p>\n' +
                        '<p>&nbsp;</p>\n' +
                        '<p><span style="font-size: 14pt;"><b><span style="font-size: 18pt;">왜 인터페이스를 사용하는가?</span></b></span></p>\n' +
                        '<p><span style="font-size: 12pt;">&nbsp;팀 작업시 개발 코드 부분과 객체가 서로 통신하는 점점 역할을 지원하게 되는데, 이는 개발코드에선 객체의 내부구조를 모르더라도 인터페이스의 메서드 명만 알고 있으면 되기 때문이다. 이를 통해 얻을 수 있는 장점은 해당 메서드를 통해 나오는 결과물을 알고 있기 때문에 다른 팀의 작업을 기다리고 있지 않아도 되며, 또한 해당 객체가 수정될 경우 개발 코드 부분은 수정을 하지 않아도 된다. 또한, 부가적으로 객체를 파일에 쓰기 위해 Serializable 인터페이스를 구현하거나, Collection.sort()를 하기위해서 Comparable 인터페이스를 상속하는것, Cloneable을 구현하는 것처럼 특정 작업을 하겠다라는 \'Mark 역할을 해주기도 한다.</span></p>\n' +
                        '<p>&nbsp;</p>\n' +
                        '<p>&nbsp;</p>\n' +
                        '<p><b><span style="font-size: 18pt;">JDBC란 무엇인가?</span></b></p>\n' +
                        '<p><span style="font-size: 12pt;">자바에서 데이터베이스에 접속할 수 있도록 하는 자바 API이다. JDBC는 데이터베이스에서 자료를 쿼리하거나 업데이트 하는 방법을 제공한다.&nbsp;</span></p>\n' +
                        '<p>&nbsp;</p>\n' +
                        '<p>&nbsp;</p>\n' +
                        '<p><span style="font-size: 18pt;"><b>직렬화란 무엇인가?</b></span></p>\n' +
                        '<p><span style="font-size: 12pt;">&nbsp;자바에서 입출력에 사용되는 것은 스트림을 이용하고 데이터 통로를 통해 이동한다. 하지만 객체는 바이트형이 아니기 때문에 스트림을 통해 파일에 저장하거나 네트워크로 전송할 수 없다. 따라서 객체를 스트림을 통해 입출력 하려면 바이트 배열로 변환하는 것이 필요한데, 이를 직렬화라고 한다.반대로 스트림을 통해 받은 직력화 된 객체를 원래모양으로 만드는 과정을 역직렬화라고 한다.&nbsp;</span></p>\n' +
                        '<p>&nbsp;</p>\n' +
                        '<p><span style="font-size: 18pt;"><b>serialVersionUID를 선언해야 하는 이유</b></span></p>\n' +
                        '<p><span style="font-size: 12pt;">&nbsp;자바가상기계 (JVM)은 직렬화와 역직렬화를 하는 시점의 클래스에 대한 버전 번호를 부여한다. 만약 그 시점에 클래스의 정의가 바뀌어 있다면 새로운 버전 번호를 할당한다. 그래서 직렬화할 때의 버전 번호와 역직렬화를 할 때의 버전 번호가 다르면 역직렬화가 불가능하게 될 수 도 있다. 이런 문제를 해결하기 위해 serialVesionUID를 사용한다. 즉, seralVesionUID값을 저장할 때 클래스 버전이 맞는지 확인하기 위한 용도이다. 만약 직렬화 할 때 사용한 serialVersionUID의 값과 역직렬화 하기 위해 사용했던 seralVesionUID값이 다르다면 InvalidClassException이 발생할 수 있다.</span></p>\n' +
                        '<p>&nbsp;</p>\n' +
                        '<p>&nbsp;</p>\n' +
                        '<p><span style="font-size: 18pt;"><b>리플렉션이란 무엇인가?</b></span></p>\n' +
                        '<p><span style="font-size: 12pt;">&nbsp;리플렉션은 컴파일러를 무시하고 런타임 상황에서 메모리에 올라간 클래스나 메서드 등의 정의를 동적으로 찾아서 조작할 수 있는 일련의 행위를 말한다. 즉 동적인 언어ㅢ 특징이라 말 할 수 있다. 프레임워크에서 유연성이 있는 동작을 위해 자주 사용한다.&nbsp;</span></p>\n' +
                        '<p><span style="font-size: 12pt;">&nbsp;</span></p>\n' +
                        '<p><span style="font-size: 12pt;">&nbsp;</span></p>\n' +
                        '<p><span style="font-size: 16px;"><b><span style="font-size: 18pt;">제너릭</span></b></span></p>\n' +
                        '<p><span style="font-size: 12pt;">&nbsp;클래스를 선언할 때 타입을 결정하지 않고 객체를 생성할 때 유동적인 타입으로 재사용하기 위한 것이다. 형변환을 할 필요 없고, 타입 에러가 발생할 확률이 없어진다. 타입추론은 메서드를 호출하는 코드에서 타입인자가 정의한대로 제대로 쓰였는지 살펴보는 컴파일러의 능력이다.&nbsp;</span></p>\n' +
                        '<p>&nbsp;</p>\n' +
                        '<p><span style="font-size: 12pt;"><b><span style="font-size: 18pt;">컬렉션(collection) 클래스에서 제너릭을 사용하는 이유를 설명하시오.</span></b></span><span style="font-size: 12pt;"></span></p>\n' +
                        '<p><span style="font-size: 12pt;">&nbsp;<span style="font-size: 12pt;">컬렉션 클래스에서 제네릭을 사용하면 컴파일러는 특정타입만 포함될 수 있도록 컬렉션을 제한한다. 컬렉션 클래스에 저장하는 인스턴스 타입을 제한하여 런타임에 발생할 수 있는 잠재적인 모든 예외를 컴파일타임에 잡아낼 수 있도록 도와준다.&nbsp;</span></span></p>\n' +
                        '<p><span style="font-size: 12pt;">&nbsp;</span></p>\n' +
                        '<p><span style="font-size: 12pt;">&nbsp;</span></p>\n' +
                        '<p><span style="font-size: 16px;"><b><span style="font-size: 18pt;">박싱과 언박싱은 무엇인가?</span></b></span><span style="font-size: 16px;"></span></p>\n' +
                        '<p><span style="font-size: 12pt;">ㆍprimitive type : int, double과 같은 </span><span style="font-size: 12pt;">기본자료형</span></p>\n' +
                        '<p><span style="font-size: 12pt;">ㆍwrapper class : 객체 자료형. 참조 자료형.</span></p>\n' +
                        '<p><span style="font-size: 12pt;">&nbsp;wrapper class</span><span style="font-size: 12pt;">명은 int, char형을 제외하고 </span><span style="font-size: 12pt;">기본자료형의 첫 문자를 대문자로 바꾸면 된다.&nbsp;</span><span style="font-size: 12pt;"></span></p>\n' +
                        '<p></p><figure class="imageblock alignCenter" width="591" height="459" data-origin-width="591" data-origin-height="459" data-ke-mobilestyle="widthContent"><span data-url="https://t1.daumcdn.net/cfile/tistory/9917744A5C96220925" data-lightbox="lightbox" data-alt=""><img src="https://t1.daumcdn.net/cfile/tistory/9917744A5C96220925" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&amp;fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F9917744A5C96220925" width="591" height="459" data-origin-width="591" data-origin-height="459" data-ke-mobilestyle="widthContent"></span></figure><p></p>\n' +
                        '<p style="text-align: center;"><span style="font-size: 8pt;">[표1] </span><span style="font-size: 8pt;">출처:&nbsp;</span><span style="font-size: 16px;"><a class="tx-link" href="https://studymake.tistory.com/420" target="_blank" rel="noopener"><span style="font-size: 8pt;">https://studymake.tistory.com/420</span></a></span></p>\n' +
                        '<p>&nbsp;</p>\n' +
                        '<p><span style="font-size: 12pt;">1. 박싱 : 상자를 꾸리다. 기본형을 참조형으로 변환하는 것.</span></p>\n' +
                        '<p><span style="font-size: 12pt;">2. 언박싱 : 상자에서 꺼내다. 참조형을 기본형으로 변환하는</span><span style="font-size: 12pt;">&nbsp;것.</span></p>\n' +
                        '<p><span style="font-size: 12pt;">&nbsp;</span></p>\n' +
                        '<p></p><figure class="imageblock alignCenter" width="573" height="259" data-origin-width="573" data-origin-height="259" data-ke-mobilestyle="widthContent"><span data-url="https://t1.daumcdn.net/cfile/tistory/996574475C96252838" data-lightbox="lightbox" data-alt=""><img src="https://t1.daumcdn.net/cfile/tistory/996574475C96252838" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&amp;fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F996574475C96252838" width="573" height="259" data-origin-width="573" data-origin-height="259" data-ke-mobilestyle="widthContent"></span></figure><p></p>\n' +
                        '<p><span style="font-size: 12pt;">&nbsp;</span></p>\n' +
                        '<p style="margin-left: 2em;"><span style="font-size: 16px;">ㆍ묵시적박싱 = 오토박싱</span></p>\n' +
                        '<p style="margin-left: 2em;"><span style="font-size: 16px;">ㆍ명시적 = 직접 명시하여 박싱 or 언방</span></p>\n' +
                        '<p style="margin-left: 2em;">&nbsp;</p>\n' +
                        '<p style="margin-left: 2em;"><b><span style="font-size: 18pt;">데드락이란?</span></b></p>\n' +
                        '<p style="margin-left: 2em;">&nbsp;<span style="font-size: 12pt;">데드락이란, 둘 이상의 쓰레드가 lock을 획득하기 위해 기다리는데, 이 lock을 잡고 있는 쓰레드도 똑같이 다른 lock을 기다리며 서로 블록상태에 놓이는 것을 말한다. 데드락은 다수의 쓰레드가 같은 lock을, 동시에 다른 명령에 의해 획득하려 할 때 발생할 수 있다.&nbsp;</span></p>\n' +
                        '<p style="margin-left: 2em;"><span style="font-size: 12pt;">- 해결방안</span></p>\n' +
                        '<ul style="list-style-type: disc;">\n' +
                        '<ul style="list-style-type: disc;">\n' +
                        '<ul style="list-style-type: disc;">\n' +
                        '<li><span style="font-size: 12pt;">자원 유형에 따라 우선 순위를 선정하여 자원을 선점하게 한다.</span></li>\n' +
                        '<li><span style="font-size: 12pt;">공유 불가능한</span><span style="font-size: 12pt;">&nbsp;상호배제 조건을 제거한다.&nbsp;</span></li>\n' +
                        '</ul>\n' +
                        '</ul>\n' +
                        '</ul>\n' +
                        '<div>\n' +
                        '<p style="margin-left: 2em;"><span style="font-size: 24px;"><b>Spring에서 AOP란?</b></span></p>\n' +
                        '<p style="margin-left: 2em;">&nbsp;&nbsp;<span style="font-size: 16px;">AOP는 Aspect Orientd Programming, 관점 지향 프로그래밍의 약자로, 중복코드가 발생하는 해결하고자 나온 방식이다. 횡단 코드를 횡단관심사라고 표현하여 개발코드에서는 비지니스 로직에 집중하고 실행 시에 비지니스 로직 앞, 뒤 등 원하는 위치에 해당 공통 관심사를 수행할 수 있게 함으로써 중복 코드를 줄이는 방법이다.&nbsp;</span></p>\n' +
                        '<p style="margin-left: 2em;">&nbsp;</p>\n' +
                        '<p style="margin-left: 2em;"><span style="font-size: 16px;"><b><span style="font-size: 18pt;">의존성이란?&nbsp;</span></b></span></p>\n' +
                        '<p style="margin-left: 2em;">&nbsp; <span style="font-size: 16px;">사용할 작업 클래스에 의존하는 성격을 말합니다. 즉, 클래스에서 변경이 일어 났을 때 다른 클래스가 영향을 많이 받을 때, 의존성이 높다고 한다. 의존성을 낮추기 위해 interface를 사용한다.&nbsp;</span></p>\n' +
                        '<figure class="imageblock alignCenter" width="349" height="495" data-origin-width="349" data-origin-height="495" data-ke-mobilestyle="widthContent"><span data-url="https://t1.daumcdn.net/cfile/tistory/99A79B4B5C98A86837" data-lightbox="lightbox" data-alt=""><img src="https://t1.daumcdn.net/cfile/tistory/99A79B4B5C98A86837" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&amp;fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99A79B4B5C98A86837" width="349" height="495" data-origin-width="349" data-origin-height="495" data-ke-mobilestyle="widthContent"></span></figure>\n' +
                        '<p style="margin-left: 2em;"><span style="font-size: 16px;">&nbsp;위의 WorkClass는 ClassA에 매우 의존적이다. WorkClass는 ClassA 작업밖에 하지 못한다. 다른 작업을 원한다면 ClassA의 내용을 바꾸거나, 다른클래스를 생성해서 작업해야 한다. interface를 만들면 의존성을 보다 낮출 수 있다.&nbsp;</span><span style="font-size: 16px;"></span></p>\n' +
                        '<figure class="imageblock alignCenter" width="860" height="654" data-origin-width="860" data-origin-height="654" data-ke-mobilestyle="widthContent"><span data-url="https://t1.daumcdn.net/cfile/tistory/99765E445C98AA3537" data-lightbox="lightbox" data-alt=""><img src="https://t1.daumcdn.net/cfile/tistory/99765E445C98AA3537" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&amp;fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99765E445C98AA3537" width="860" height="654" data-origin-width="860" data-origin-height="654" data-ke-mobilestyle="widthContent"></span></figure>\n' +
                        '<p style="margin-left: 2em;"><span style="font-size: 16px;">&nbsp;메인클래스의 ClassInter inter 객체가 다른 작업을 하고 싶다면 new ClassA() 대신 ClassB()로&nbsp;바꾸면 된다. 객체를 사용하는 객체명을 하나하나&nbsp;바꿀 필요가 없다. 그러나 여전히 내부에서 선언한 내용을 수정해야하는 단점이 있다. (ClassA를 ClassB로)</span></p>\n' +
                        '<p style="margin-left: 2em;">&nbsp;</p>\n' +
                        '<p style="margin-left: 2em;"><b>Spring에서 IOC란?</b></p>\n' +
                        '<p style="margin-left: 2em;"><b>&nbsp;</b>&nbsp;<span style="font-size: 16px;">Inversion Of Control은 제어의 역전이라 한다. 스프링을 쓰기 전에는 개발자가 프로그램의 흐름을 제어하는 주체였다. 스프링에서는 프로그램의 흐름을 프레임워크가 주도하게 된다. \'@Autowired\' 등으로 Bean을 자동주입하고 객체의 생성의 생명주기 관리를 컨테이너가 도맡아한다. 즉 제어권이 컨테이너로 넘어가는 것을 말한다. 제어권이 컨테이너로 넘어옴으로써 DI, AOP등이 가능하게 된다.&nbsp;</span></p>\n' +
                        '<p style="margin-left: 2em;"><span style="font-size: 16px;">&nbsp;</span></p>\n' +
                        '<p style="margin-left: 2em;"><span style="font-size: 16px;">&nbsp;</span></p>\n' +
                        '<p style="margin-left: 2em;"><span style="font-size: 24px;"><b>Spring에서 DI란?</b></span></p>\n' +
                        '<ul style="list-style-type: disc;">\n' +
                        '<li><span style="font-size: 12pt;">각 클래스 간의 의존관계를 빈설정(xml 이나 annotation) 정보를 바탕으로 컨테이너가 자동으로 연결해주는 것을 말한다. 즉 클래스 간의 의존관계를 컨테이너가 주입한다.&nbsp;</span></li>\n' +
                        '<li><span style="font-size: 12pt;">DI는 Dependency Injection의 약자로, 객체들 간의 의존성을 줄이기 위해 사용되는 방식으로, 객체간의 의존성을 자신이 아닌 외부에서 주입하는 개념이다.&nbsp;</span></li>\n' +
                        '<li><span style="font-size: 12pt;">스프링은 다른 객체들이 사용하고, 다른 서비스를 위해 사용할 수 있는 클래스를 컨테이너 형태로 이 기능을 제공한다. A라는 객체에서 B, C객체를 사용(의존)할 때 A객체에서 직접 생성을 하는 것이 아닌 외부(IOC컨테이너)에서 생성된 B, C객체를 주입 시켜 setter 혹은 생성자를 통해 사용할 수 있다.</span></li>\n' +
                        '</ul>\n' +
                        '<ul style="list-style-type: disc;">\n' +
                        '<li><span style="font-size: 12pt;"><b>DI유형</b></span></li>\n' +
                        '</ul>\n' +
                        '<ol style="list-style-type: upper-roman;">\n' +
                        '<li><span style="font-size: 12pt;">Setter Injection</span></li>\n' +
                        '<li><span style="font-size: 16px;">Constuctor Injection</span></li>\n' +
                        '<li><span style="font-size: 16px;">Method Injection</span></li>\n' +
                        '</ol>\n' +
                        '<div><span style="font-size: 16px;">&nbsp;</span></div>\n' +
                        '<ul style="list-style-type: disc;">\n' +
                        '<li><span style="font-size: 12pt;"><b>Spring DI 컨테이너</b></span></li>\n' +
                        '</ul>\n' +
                        '<ol style="list-style-type: upper-roman;">\n' +
                        '<li><span style="font-size: 12pt;">spring DI 컨테이너가 관리하는 객체를 Bean이라고 하며 이 빈들을 관리한다는 의미로 컨테이너를 빈 팩토리라고 부른다.&nbsp;</span></li>\n' +
                        '<li><span style="font-size: 12pt;">빈팩토리는&nbsp;객체 등록, 생성, 조회, 반환을 관리한다.</span></li>\n' +
                        '<li><span style="font-size: 12pt;">보통은 빈팩토리를 바로 사용하지 않고 Application Context를 주로 사용한다.&nbsp;</span></li>\n' +
                        '</ol>\n' +
                        '<div>&nbsp;</div>\n' +
                        '<ul style="list-style-type: disc;">\n' +
                        '<li><span style="font-size: 12pt;"><b>Applcation Context</b></span></li>\n' +
                        '</ul>\n' +
                        '<ol style="list-style-type: upper-roman;">\n' +
                        '<li><span style="font-size: 12pt;">Bean을 등록, 생성, 조회, 반환 관리하는 기능은 BeanFactory와 같다.</span></li>\n' +
                        '</ol>\n' +
                        '<ul style="list-style-type: disc;">\n' +
                        '<li><span style="font-size: 16px;">@Component : 스프링프레임워크에게 너가 관리해야 하는 빈임을 알려줌.</span></li>\n' +
                        '<li><span style="font-size: 16px;">@Autowired : 스프링프레임워크에게 타입에 맞는 것을 찾아서 연결시켜달라는 것을 요청.</span></li>\n' +
                        '</ul>\n' +
                        '<div><span style="font-size: 16px;">&nbsp;</span></div>\n' +
                        '<div><span style="font-size: 16px;">&nbsp;</span></div>\n' +
                        '<div>\n' +
                        '<p><span style="font-family: \'맑은 고딕\', sans-serif; font-size: 12pt;"><b><span style="font-size: 18pt;">디자인 패턴 (Design Pattern)</span></b></span></p>\n' +
                        '<p><span style="font-family: \'맑은 고딕\', sans-serif; font-size: 12pt;">절차형 언어에서 객체지향 언어로 넘어오면서 설계의 중요성이 커졌습니다. 객체지향은 객체들이 서로 메시지를 주고 받고 서로를 사용하면서 작업을 수행하기 때문에 객체를 어떻게 설정하고 객체 간 관계를 어떻게 정할 것인지, 이런 설계 작업이 핵심적으로 중요해졌습니다.</span></p>\n' +
                        '<p style="margin: 1.7em 0px; padding: 0px; border: 0px; outline: 0px; font-family: \'Noto Sans KR\', sans-serif; font-size: 16px; vertical-align: baseline; color: #555555;"><span style="font-family: \'맑은 고딕\', sans-serif; font-size: 12pt;">객체지향을 처음 배우는 사람들에게 이런 설계 개념을 설명하기 위해서 기존 개발 건 중에 설계가 잘 된 케이스들을 뽑아서 가르치기 시작했습니다. 이런 케이스들을 이름을 붙이고 목적과 용도, 그리고 구현 방법을 잘 정리해놓은 것이 바로</span><span style="font-family: \'맑은 고딕\', sans-serif; font-size: 12pt;">&nbsp;</span><b><span style="font-family: \'맑은 고딕\', sans-serif; font-size: 12pt;">디자인 패턴</span></b><span style="font-family: \'맑은 고딕\', sans-serif; font-size: 12pt;">&nbsp;</span><span style="font-family: \'맑은 고딕\', sans-serif; font-size: 12pt;">입니다. 그래서 아무렇게나 설계하는 것이 아니라 필요한 디자인 패턴을 참고해서 설계하면 효율적으로 설계할 수가 있게 되었죠.</span></p>\n' +
                        '<p><span style="font-family: \'맑은 고딕\', sans-serif; font-size: 12pt;"><b><span style="font-size: 18pt;">&nbsp;</span></b></span></p>\n' +
                        '<p><span style="font-family: \'맑은 고딕\', sans-serif; font-size: 12pt;"><b><span style="font-size: 18pt;">라이브러리 (Library)</span></b></span></p>\n' +
                        '<p><span style="font-family: \'맑은 고딕\', sans-serif; font-size: 12pt;">라이브러리는 어떠한 기능을 다른 사람들도 사용할 수 있도록 만들어 놓은 것을 말합니다. 예를 들어, 내가 만드는 애플리케이션 안에 이미지 변환 기능이 필요하다고 합시다. 그러면 이미지 변환 기능이 필요한 사람들은 모두 기능을 각자 구현해야곘죠. 하지만 그렇게 하지 않고 이미지 변환 기능을 다른 사람들도 소스 안에서 사용할 수 있도록</span><span style="font-family: \'맑은 고딕\', sans-serif; font-size: 12pt;">&nbsp;</span><code style="margin: 0px 2px; padding: 3px 5px; border: 0px; outline: 0px; font-weight: inherit; font-style: inherit; font-family: \'IBM Plex Mono\', NanumSquareRound, Consolas; font-size: 0.8em; vertical-align: baseline; color: #990000; border-radius: 2px; background-color: #f8f8f8;"><span style="font-family: \'맑은 고딕\', sans-serif; font-size: 12pt;">jar</span></code><span style="font-family: \'맑은 고딕\', sans-serif; font-size: 12pt;">&nbsp;</span><span style="font-family: \'맑은 고딕\', sans-serif; font-size: 12pt;">형태로 묶어서 제공하는 것이 바로 라이브러리입니다.</span></p>\n' +
                        '</div>\n' +
                        '<div><span style="font-size: 16px;">&nbsp;</span></div>\n' +
                        '<div>&nbsp;</div>\n' +
                        '<div>\n' +
                        '<p><span style="font-family: \'맑은 고딕\', sans-serif;"><b><span style="font-size: 18pt;">프레임워크 = 디자인 패턴 + 라이브러리</span></b></span></p>\n' +
                        '<p><span style="font-family: \'맑은 고딕\', sans-serif;">프레임워크란 이름에서부터 알 수 있듯이 애플리케이션을 개발할 때 사용하는 일종의</span><span style="font-family: \'맑은 고딕\', sans-serif;">&nbsp;</span><b><span style="font-family: \'맑은 고딕\', sans-serif;">틀</span></b><span style="font-family: \'맑은 고딕\', sans-serif;">을 말합니다. 앞서 말한 디자인패턴과 라이브러리들을 모아서 프로그램 형태로 만들어놓은 겁니다. 그래서 프레임워크를 사용하면 여러가지 유용한 기능을 통해 개발자는 구현해야 하는 핵심 로직에 집중할 수가 있습니다.</span></p>\n' +
                        '</div>\n' +
                        '<div><span style="font-size: 16px;">&nbsp;</span></div>\n' +
                        '<div>\n' +
                        '<p><b><span style="font-size: 18pt;">스프링 핵심 기능</span></b></p>\n' +
                        '<p><span style="font-family: \'맑은 고딕\', sans-serif;">스프링의 핵심 기능은 다음과 같습니다. 각각에 대해서 설명하기에는 양이 너무 방대하니 자세한 내용은 다른 포스팅을 통해서 하나씩 알아보기로 하죠.</span></p>\n' +
                        '<ul style="margin: 1.7em 0px; padding: 0px; border: 0px; outline: 0px; font-family: \'Noto Sans KR\', sans-serif; font-size: 16px; vertical-align: baseline; list-style-position: inside; list-style-image: initial; line-height: 1.7em; color: #555555;">\n' +
                        '<li style="margin: 0px; padding: 0px; border: 0px; outline: 0px; font-weight: inherit; font-style: inherit; font-family: inherit; vertical-align: baseline;"><span style="font-family: \'맑은 고딕\', sans-serif;">의존 주입 (</span><i><span style="font-family: \'맑은 고딕\', sans-serif;">Dependency Injection</span></i><span style="font-family: \'맑은 고딕\', sans-serif;">)</span></li>\n' +
                        '<li style="margin: 0px; padding: 0px; border: 0px; outline: 0px; font-weight: inherit; font-style: inherit; font-family: inherit; vertical-align: baseline;"><span style="font-family: \'맑은 고딕\', sans-serif;">관점 지향 프로그래밍 (</span><i><span style="font-family: \'맑은 고딕\', sans-serif;">AOP; Aspect-Oriented Programming</span></i><span style="font-family: \'맑은 고딕\', sans-serif;">)</span></li>\n' +
                        '<li style="margin: 0px; padding: 0px; border: 0px; outline: 0px; font-weight: inherit; font-style: inherit; font-family: inherit; vertical-align: baseline;"><span style="font-family: \'맑은 고딕\', sans-serif;">스프링 MVC 웹 애플리케이션과 RESTful 웹 서비스 프레임워크 (</span><i><span style="font-family: \'맑은 고딕\', sans-serif;">Spring MVC web application and RESTful web service framework</span></i><span style="font-family: \'맑은 고딕\', sans-serif;">)</span></li>\n' +
                        '<li style="margin: 0px; padding: 0px; border: 0px; outline: 0px; font-weight: inherit; font-style: inherit; font-family: inherit; vertical-align: baseline;"><span style="font-family: \'맑은 고딕\', sans-serif;">JDBC, JPA, JMS 지원</span></li>\n' +
                        '</ul>\n' +
                        '</div>\n' +
                        '<div><span style="font-size: 16px;">&nbsp;</span></div>\n' +
                        '<div><figure class="imageblock alignCenter" width="780" height="545" data-origin-width="780" data-origin-height="545" data-ke-mobilestyle="widthContent"><span data-url="https://t1.daumcdn.net/cfile/tistory/99783C3D5C98BA4319" data-lightbox="lightbox" data-alt=""><img src="https://t1.daumcdn.net/cfile/tistory/99783C3D5C98BA4319" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&amp;fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99783C3D5C98BA4319" width="780" height="545" data-origin-width="780" data-origin-height="545" data-ke-mobilestyle="widthContent"></span></figure>\n' +
                        '<p>&nbsp;</p>\n' +
                        '</div>\n' +
                        '<div>&nbsp;</div>\n' +
                        '<p>&nbsp;<b>Spring Legacy, Spring Boot 차이점</b></p>\n' +
                        '<p style="margin-left: 2em;"><b>&nbsp;</b><span style="font-size: 12pt;">&nbsp;스프링</span><span style="font-size: 12pt;">부트 같은 경우 웹 컨테이너 (톰캣)을 내장하고 있고 최소한의 설정으로 쉽게 Spring Application을 만들기 위한 목적으로 설계된 프레임워크이라 할 수 있다. 그렇기 때문에 Spring boot로 Set up 할 경우 편리하게 Dependency 문제가 해결되고, 빠르게 웹 어플리케이션을 만들 수 있는 장점이 있다.&nbsp;</span></p>\n' +
                        '<ul style="margin: 1.7em 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; list-style-position: inside; list-style-image: initial; line-height: 1.7em; color: #555555;">\n' +
                        '<ul style="font-family: \'Noto Sans KR\', sans-serif; margin-top: 1.7em; margin-right: 0px; margin-bottom: 1.7em; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; list-style-position: inside; list-style-image: initial; line-height: 1.7em; color: #555555;">\n' +
                        '<li style="margin: 0px; padding: 0px; border: 0px; outline: 0px; font-weight: inherit; font-style: inherit; font-family: inherit; vertical-align: baseline;"><span style="font-family: \'맑은 고딕\', sans-serif;">내장 서버:&nbsp;</span><code style="margin: 0px 2px; padding: 3px 5px; border: 0px; outline: 0px; font-weight: inherit; font-style: inherit; font-family: \'IBM Plex Mono\', NanumSquareRound, Consolas; font-size: 0.8em; vertical-align: baseline; color: #990000; border-radius: 2px; background-color: #f8f8f8;"><span style="font-family: \'맑은 고딕\', sans-serif;">WAR</span></code><span style="font-family: \'맑은 고딕\', sans-serif;">&nbsp;</span><span style="font-family: \'맑은 고딕\', sans-serif;">파일을 배포할 필요 없이 내장된</span><span style="font-family: \'맑은 고딕\', sans-serif;">&nbsp;</span><code style="margin: 0px 2px; padding: 3px 5px; border: 0px; outline: 0px; font-weight: inherit; font-style: inherit; font-family: \'IBM Plex Mono\', NanumSquareRound, Consolas; font-size: 0.8em; vertical-align: baseline; color: #990000; border-radius: 2px; background-color: #f8f8f8;"><span style="font-family: \'맑은 고딕\', sans-serif;">Tomcat</span></code><span style="font-family: \'맑은 고딕\', sans-serif;">,</span><span style="font-family: \'맑은 고딕\', sans-serif;">&nbsp;</span><code style="margin: 0px 2px; padding: 3px 5px; border: 0px; outline: 0px; font-weight: inherit; font-style: inherit; font-family: \'IBM Plex Mono\', NanumSquareRound, Consolas; font-size: 0.8em; vertical-align: baseline; color: #990000; border-radius: 2px; background-color: #f8f8f8;"><span style="font-family: \'맑은 고딕\', sans-serif;">Jetty</span></code><span style="font-family: \'맑은 고딕\', sans-serif;">,</span><span style="font-family: \'맑은 고딕\', sans-serif;">&nbsp;</span><code style="margin: 0px 2px; padding: 3px 5px; border: 0px; outline: 0px; font-weight: inherit; font-style: inherit; font-family: \'IBM Plex Mono\', NanumSquareRound, Consolas; font-size: 0.8em; vertical-align: baseline; color: #990000; border-radius: 2px; background-color: #f8f8f8;"><span style="font-family: \'맑은 고딕\', sans-serif;">Unertow</span></code><span style="font-family: \'맑은 고딕\', sans-serif;">&nbsp;</span><span style="font-family: \'맑은 고딕\', sans-serif;">를 이용해 실행할 수 있습니다.</span></li>\n' +
                        '<li style="margin: 0px; padding: 0px; border: 0px; outline: 0px; font-weight: inherit; font-style: inherit; font-family: inherit; vertical-align: baseline;"><span style="font-family: \'맑은 고딕\', sans-serif;">간단한 라이브러리 관리: 많이 사용하는 라이브러리를 모아놓은 스타터 (Starter)</span><span style="font-family: \'맑은 고딕\', sans-serif;">&nbsp;</span><code style="margin: 0px 2px; padding: 3px 5px; border: 0px; outline: 0px; font-weight: inherit; font-style: inherit; font-family: \'IBM Plex Mono\', NanumSquareRound, Consolas; font-size: 0.8em; vertical-align: baseline; color: #990000; border-radius: 2px; background-color: #f8f8f8;"><span style="font-family: \'맑은 고딕\', sans-serif;">POM</span></code><span style="font-family: \'맑은 고딕\', sans-serif;">&nbsp;</span><span style="font-family: \'맑은 고딕\', sans-serif;">파일로 메이븐 설정이 쉬워집니다.</span></li>\n' +
                        '<li style="margin: 0px; padding: 0px; border: 0px; outline: 0px; font-weight: inherit; font-style: inherit; font-family: inherit; vertical-align: baseline;"><span style="font-family: \'맑은 고딕\', sans-serif;">자동 설정: 더 이상</span><span style="font-family: \'맑은 고딕\', sans-serif;">&nbsp;</span><code style="margin: 0px 2px; padding: 3px 5px; border: 0px; outline: 0px; font-weight: inherit; font-style: inherit; font-family: \'IBM Plex Mono\', NanumSquareRound, Consolas; font-size: 0.8em; vertical-align: baseline; color: #990000; border-radius: 2px; background-color: #f8f8f8;"><span style="font-family: \'맑은 고딕\', sans-serif;">XML</span></code><span style="font-family: \'맑은 고딕\', sans-serif;">&nbsp;</span><span style="font-family: \'맑은 고딕\', sans-serif;">설정이 필요하지 않습니다.</span></li>\n' +
                        '</ul>\n' +
                        '</ul>\n' +
                        '<div><span style="color: #555555;"><span style="font-size: 16px;">&nbsp;</span></span></div>\n' +
                        '</div>\n' +
                        '<div><span style="color: #555555;"><span style="font-size: 16px;">&nbsp;</span></span></div>\n' +
                        '<div><figure class="imageblock alignCenter" width="796" height="731" data-origin-width="796" data-origin-height="731" data-ke-mobilestyle="widthContent"><span data-url="https://t1.daumcdn.net/cfile/tistory/9966D2505C98BD6126" data-lightbox="lightbox" data-alt=""><img src="https://t1.daumcdn.net/cfile/tistory/9966D2505C98BD6126" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&amp;fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F9966D2505C98BD6126" width="796" height="731" data-origin-width="796" data-origin-height="731" data-ke-mobilestyle="widthContent"></span></figure>\n' +
                        '<p style="text-align: center; clear: none; float: none;">&nbsp;</p>\n' +
                        '<p>&nbsp;</p>\n' +
                        '<p>&nbsp;</p>\n' +
                        '<span style="color: #555555;"><span style="font-size: 16px;"><br></span></span></div>\n' +
                        '<p></p><figure class="imageblock alignCenter" width="819" height="479" data-origin-width="819" data-origin-height="479" data-ke-mobilestyle="widthContent"><span data-url="https://t1.daumcdn.net/cfile/tistory/99A9B64A5C98BDB112" data-lightbox="lightbox" data-alt=""><img src="https://t1.daumcdn.net/cfile/tistory/99A9B64A5C98BDB112" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&amp;fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99A9B64A5C98BDB112" width="819" height="479" data-origin-width="819" data-origin-height="479" data-ke-mobilestyle="widthContent"></span></figure><p></p>\n' +
                        '<p style="margin-left: 2em;">&nbsp;</p>\n' +
                        '<p style="margin-left: 2em;">&nbsp;</p>\n' +
                        '<p style="margin-left: 2em;">&nbsp;</p>\n' +
                        '<p style="margin-left: 2em;">&nbsp;</p>\n' +
                        '<p style="margin-left: 2em;"><span style="font-size: 18pt;"><b>JPA vs Mybatis</b></span></p>\n' +
                        '<p></p><figure class="imageblock alignCenter" width="816" height="795" data-origin-width="816" data-origin-height="795" data-ke-mobilestyle="widthContent"><span data-url="https://t1.daumcdn.net/cfile/tistory/99B8DE4A5C98BE6D27" data-lightbox="lightbox" data-alt=""><img src="https://t1.daumcdn.net/cfile/tistory/99B8DE4A5C98BE6D27" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&amp;fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99B8DE4A5C98BE6D27" width="816" height="795" data-origin-width="816" data-origin-height="795" data-ke-mobilestyle="widthContent"></span></figure><p></p>\n' +
                        '<p>&nbsp;</p>\n' +
                        '<p>&nbsp;</p>\n' +
                        '<p>&nbsp;</p>\n' +
                        '<p>&nbsp;</p>\n' +
                        '<p></p><figure class="imageblock alignCenter" width="783" height="692" data-origin-width="783" data-origin-height="692" data-ke-mobilestyle="widthContent"><span data-url="https://t1.daumcdn.net/cfile/tistory/998A784B5C98BF091F" data-lightbox="lightbox" data-alt=""><img src="https://t1.daumcdn.net/cfile/tistory/998A784B5C98BF091F" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&amp;fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F998A784B5C98BF091F" width="783" height="692" data-origin-width="783" data-origin-height="692" data-ke-mobilestyle="widthContent"></span></figure><p></p>\n' +
                        '<p>&nbsp;</p>\n' +
                        '<p>&nbsp;</p>\n' +
                        '<p></p><figure class="imageblock alignCenter" width="815" height="800" data-origin-width="815" data-origin-height="800" data-ke-mobilestyle="widthContent"><span data-url="https://t1.daumcdn.net/cfile/tistory/99EAD44F5C98BF3315" data-lightbox="lightbox" data-alt=""><img src="https://t1.daumcdn.net/cfile/tistory/99EAD44F5C98BF3315" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&amp;fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99EAD44F5C98BF3315" width="815" height="800" data-origin-width="815" data-origin-height="800" data-ke-mobilestyle="widthContent"></span></figure><p></p>\n' +
                        '<p>&nbsp;</p>\n' +
                        '<p></p><figure class="imageblock alignCenter" width="776" height="725" data-origin-width="776" data-origin-height="725" data-ke-mobilestyle="widthContent"><span data-url="https://t1.daumcdn.net/cfile/tistory/99D9CD465C98BF5B1C" data-lightbox="lightbox" data-alt=""><img src="https://t1.daumcdn.net/cfile/tistory/99D9CD465C98BF5B1C" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&amp;fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99D9CD465C98BF5B1C" width="776" height="725" data-origin-width="776" data-origin-height="725" data-ke-mobilestyle="widthContent"></span></figure><p></p>\n' +
                        '<p>&nbsp;</p>\n' +
                        '<p></p><figure class="imageblock alignCenter" width="860" height="880" data-origin-width="860" data-origin-height="880" data-ke-mobilestyle="widthContent"><span data-url="https://t1.daumcdn.net/cfile/tistory/9929EC485C98BF882B" data-lightbox="lightbox" data-alt=""><img src="https://t1.daumcdn.net/cfile/tistory/9929EC485C98BF882B" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&amp;fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F9929EC485C98BF882B" width="860" height="880" data-origin-width="860" data-origin-height="880" data-ke-mobilestyle="widthContent"></span></figure><p></p>\n' +
                        '<p>&nbsp;</p>\n' +
                        '<p>&nbsp;</p>\n' +
                        '<p></p><figure class="imageblock alignCenter" width="780" height="864" data-origin-width="780" data-origin-height="864" data-ke-mobilestyle="widthContent"><span data-url="https://t1.daumcdn.net/cfile/tistory/998C7C465C98BFC52B" data-lightbox="lightbox" data-alt=""><img src="https://t1.daumcdn.net/cfile/tistory/998C7C465C98BFC52B" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&amp;fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F998C7C465C98BFC52B" width="780" height="864" data-origin-width="780" data-origin-height="864" data-ke-mobilestyle="widthContent"></span></figure><p></p>\n' +
                        '<p>&nbsp;</p>\n' +
                        '<p>&nbsp;</p>\n' +
                        '<p>&nbsp;</p>\n' +
                        '<p>&nbsp;</p>\n' +
                        '<p></p><figure class="imageblock alignCenter" width="760" height="116" data-origin-width="760" data-origin-height="116" data-ke-mobilestyle="widthContent"><span data-url="https://t1.daumcdn.net/cfile/tistory/9981F24F5C98BFE31A" data-lightbox="lightbox" data-alt=""><img src="https://t1.daumcdn.net/cfile/tistory/9981F24F5C98BFE31A" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&amp;fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F9981F24F5C98BFE31A" width="760" height="116" data-origin-width="760" data-origin-height="116" data-ke-mobilestyle="widthContent"></span></figure><p></p></div>'
                }
            ]
        }
    },
    created() {
        this.init()
    },
    methods: {
        init() {
            // 내림차순
            this.items = this.items.sort(function (a, b) {
                return a.sort > b.sort ? -1 : a.sort < b.sort ? 1 : 0;
            })
        }
    }
}

export default postsMixin
