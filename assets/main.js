const app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        images: [
            "./assets/img/animali.jpg",
            "./assets/img/panorama.jpg",
            "./assets/img/pc.jpg",
            "./assets/img/cane.jpg",
        ],
    },
    methods:{
        prev(){
        //Click su freccia sx
            if(this.counter === 0){   
                return this.counter = this.images.length -1
            }
            return this.counter -= 1
        },
        //Click su freccia dx
        next(){
            if(this.counter === this.images.length -1){
                return this.counter = 0
            }
            return this.counter += 1
        }
    },
    mounted(){
        document.addEventListener("keyup",(event)=>{
            if(event.key=="ArrowLeft"){
                this.prev();
            }else if(event.key=="ArrowRight"){
                this.next()
            }
        })
    }
})