
import myAlert from './myAlert';



export default (vm)=>{
    console.log(12345,myAlert.name)
    vm.component(myAlert.name,myAlert)


}