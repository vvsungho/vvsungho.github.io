const postsMixin = {
    data() {
        return {
            items: [
                {
                    key: '1',
                    sort: 1,
                    tags: ['JPA'],
                    title: 'JPA 시작하기',
                    content: require('../assets/md/jpa/start_jpa.md').default
                },
                {
                    key: '2',
                    sort: 2,
                    tags: ['JAVA'],
                    title: 'JAVA substring',
                    content: require('../assets/md/java/substring.md').default
                },
                {
                    key: '3',
                    sort: 3,
                    tags: ['JAVA'],
                    title: 'JAVA indexOf',
                    content: require('../assets/md/java/inderOf.md').default
                },
                {
                    key: '4',
                    sort: 4,
                    tags: ['JPA'],
                    title: 'JPA 공부 기록 2021-11-30',
                    content: require('../assets/md/jpa/memo1.md').default
                },
                {
                    key: '5',
                    sort: 5,
                    tags: ['JAVA'],
                    title: 'JAVA StringBuilder',
                    content: require('../assets/md/java/Stringbuilder.md').default
                },
                {
                    key: '6',
                    sort: 6,
                    tags: ['JAVA'],
                    title: 'JAVA Scanner',
                    content: require('../assets/md/java/Scanner.md').default
                },
                {
                    key: '7',
                    sort: 7,
                    tags: ['JAVA'],
                    title: 'JAVA Character',
                    content: require('../assets/md/java/Character.md').default
                },
                {
                    key: '8',
                    sort: 8,
                    tags: ['알고리즘'],
                    title: '특정문자 뒤집기',
                    content: require('../assets/md/algorithm/inflearn/reverse_text.md').default
                },
                {
                    key: '9',
                    sort: 9,
                    tags: ['알고리즘'],
                    title: '직각 삼각형 별찍기..',
                    content: require('../assets/md/algorithm/study/Chap01_Q15.md').default
                },
                {
                    key: '10',
                    sort: 10,
                    tags: ['알고리즘'],
                    title: '피라미드 삼각형 별찍기..',
                    content: require('../assets/md/algorithm/study/Chap01_Q16.md').default
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
