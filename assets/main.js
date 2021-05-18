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
            // do something
            console.log('Cliccato su prev');
            if(this.counter === 0){   
                return this.counter = this.images.length -1
            }
            return this.counter -= 1

        },
        next(){
            // do something
            console.log('Cliccato su next');
            
            if(this.counter === this.images.length -1){
               
                return this.counter = 0
            }
            return this.counter += 1

        }

    }
})