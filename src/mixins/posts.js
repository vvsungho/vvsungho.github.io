const postsMixin = {
    data() {
        return {
            items: [
                // {
                //     key: '1',
                //     sort: 1,
                //     tags: ['JPA'],
                //     title: 'JPA 시작하기',
                //     content: require('../assets/md/jpa/start_jpa.md').default
                // },
                // {
                //     key: '2',
                //     sort: 2,
                //     tags: ['JAVA'],
                //     title: 'JAVA substring',
                //     content: require('../assets/md/java/substring.md').default
                // },
                // {
                //     key: '3',
                //     sort: 3,
                //     tags: ['JAVA'],
                //     title: 'JAVA indexOf',
                //     content: require('../assets/md/java/inderOf.md').default
                // },
                // {
                //     key: '4',
                //     sort: 4,
                //     tags: ['JPA'],
                //     title: 'JPA 공부 기록 2021-11-30',
                //     content: require('../assets/md/jpa/memo1.md').default
                // },
                // {
                //     key: '5',
                //     sort: 5,
                //     tags: ['JAVA'],
                //     title: 'JAVA StringBuilder',
                //     content: require('../assets/md/java/Stringbuilder.md').default
                // },
                // {
                //     key: '6',
                //     sort: 6,
                //     tags: ['JAVA'],
                //     title: 'JAVA Scanner',
                //     content: require('../assets/md/java/Scanner.md').default
                // },
                // {
                //     key: '7',
                //     sort: 7,
                //     tags: ['JAVA'],
                //     title: 'JAVA Character',
                //     content: require('../assets/md/java/Character.md').default
                // },
                // {
                //     key: '8',
                //     sort: 8,
                //     tags: ['알고리즘'],
                //     title: '특정문자 뒤집기',
                //     content: require('../assets/md/algorithm/inflearn/reverse_text.md').default
                // },
                // {
                //     key: '9',
                //     sort: 9,
                //     tags: ['알고리즘'],
                //     title: '직각 삼각형 별찍기..',
                //     content: require('../assets/md/algorithm/study/Chap01_Q15.md').default
                // },
                // {
                //     key: '10',
                //     sort: 10,
                //     tags: ['알고리즘'],
                //     title: '피라미드 삼각형 별찍기..',
                //     content: require('../assets/md/algorithm/study/Chap01_Q16.md').default
                // },
                // {
                //     key: '11',
                //     sort: 11,
                //     tags: ['JAVA'],
                //     title: '[Java]자바 진수변환(10진수->2진수,8진수,16진수)',
                //     content: require('../assets/md/java/ConvetBinary.md').default
                // },
                // {
                //     key: '12',
                //     sort: 12,
                //     tags: ['JAVA', 'Spring'],
                //     title: 'Spring 복습 1일차',
                //     content: require('../assets/md/java/spring/spring_1day.md').default
                // },
                {
                    key: '13',
                    sort: 13,
                    tags: ['JAVA', 'Spring', 'CS'],
                    title: '기술면접 질문 정리 - Spring',
                    content: require('../assets/md/java/spring/cs_spring.md').default
                },
                {
                    key: '14',
                    sort: 14,
                    tags: ['JAVA', 'CS'],
                    title: '기술면접 질문 정리 - Java 기본',
                    content: require('../assets/md/java/basic/cs_java.md').default
                },
                {
                    key: '15',
                    sort: 15,
                    tags: ['JAVA', 'JPA', 'CS'],
                    title: '기술면접 질문 정리 - JPA',
                    content: require('../assets/md/jpa/cs_jpa.md').default
                }
            ],
            viewItems: [],
            tags: []
        }
    },
    created() {
        this.postInit()
    },
    methods: {
        postInit() {
            // 내림차순
            this.items = this.items.sort(function (a, b) {
                return a.sort > b.sort ? -1 : a.sort < b.sort ? 1 : 0
            })

            this.viewItems = this.items

            // 태그 중복제거
            const tagsInItems = this.items.map(item => item.tags)

            this.tags.push('All')
            for (let i = 0; i < tagsInItems.length; i++) {
                this.tags = this.tags.concat(this.tags, tagsInItems[i])
            }
            this.tags = Array.from(new Set(this.tags))
        },
        doTagSearch(tag) {
            if (tag === 'All') {
                this.viewItems = this.items
            } else {
                this.viewItems = this.items.filter(item => item.tags.indexOf(tag) > -1)
            }
        }
    }
}

export default postsMixin
