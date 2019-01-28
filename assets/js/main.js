var app = new Vue({
    el: "#termulator",
    data: {
        user: "",
        pc: "",
        userInput : '',
        pcInput: '',
        content: '',
        term: document.getElementById('term-body'),
        showModal: false
    },
    methods: {
        showOutput(){
            //
        },
        bindValues(){
            if(this.userInput == '' && this.pcInput == ''){
                this.user = 'ilyes';
                this.pc = 'jarvis'

            }else{
                this.user = this.userInput;
                this.pc = this.pcInput;
            }
            this.showModal = true;
        },
        focusElement(){
            document.querySelector('#caret').focus()
        }
    }
})