<script>
export default {
    name:"aa",
    data(){
        return{
            "render":"",
        }
    },
    methods: {
       
    },
     render(){
            let a = 666;
            let b = 123;
            return(
            <section class="tc">
            <h3 class='tc fs18'>test {a}</h3>
            <h3 class="tc fs18">test {b}</h3>
            <div>render函数直接放回数据值</div>
            </section>
            )
        

        }
    
}
</script>