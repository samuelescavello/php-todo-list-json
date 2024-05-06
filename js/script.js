

const {createApp} = Vue ;
createApp({
    data(){
        return{
            todo:[],
            itemText:'',
            apiUrl: 'server.php',
            lastId: 5,
        }
    },
    methods:{
        getData(){
            axios.get(this.apiUrl).then((res)=>{
                 this.todo = res.data;
                console.log(res.data)
            })
        },
        toggleDone(id){
            const item = this.todo.find((el)=>{
                return el.id === id;
            })
            console.log(item);
            if(item){
                item.done = !item.done;
            }

        },
        removeItem(id){
            const i = this.todo.findIndex((el)=> el.id === id)
            if(i !== -1)
            this.todo.splice(i,1);
        },
        addTodo(){
            const nweObj = {
                id: null,
                text: this.itemText,
                done: false
            }
            let nextId = 0;
            this.todo.forEach((el)=>{
                if(nextId < el.id){
                    nextId = el.id;
                }
            });
            nweObj.id = nextId + 1;
            this.todo.push(nweObj);
            this.itemText = ''
            console.log(this.todo)
        }
    },
    mounted(){
        // console.log(this.todo)
        this.getData();
    }
}).mount('#app')