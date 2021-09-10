const postsMixin = {
    data() {
        return {
            items: [],
            viewItems: [],
            tags: []
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

            this.viewItems = this.items

            // 태그 중복제거
            const tagsInItems = this.items.map(item => item.tags)

            for (let i = 0; i < tagsInItems.length; i++) {
                this.tags = this.tags.concat(this.tags, tagsInItems[i])
            }
            this.tags = Array.from(new Set(this.tags))
        },
        doTagSearch(tag) {
            this.viewItems = this.items.filter(item => item.tags.indexOf(tag) > -1)
        }
    }
}

export default postsMixin
