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
                    key: '1',
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
                        '</ul><p><br></p><p><br></p><p><br></p>'
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
