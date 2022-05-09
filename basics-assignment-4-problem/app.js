const app = Vue.createApp({
    data() {
        return {
             inputClass: '',
             paragraphIsVisible: true,
             inputBackgroundColor: ''
        };
    },
    methods:{
        togglePrargraphvisibility() {
            this.paragraphIsVisible = !this.paragraphIsVisible;
        }
    },
    computed: {
        parasClass(){
            return {
                user1 : this.inputClass === 'user1', user2 : this.inputClass === 'user2',
                visible: this.paragraphIsVisible,
                hidden: !this.paragraphIsVisible
            };
        }
    }

})

app.mount('#assignment');
