
const calculateTemp=()=>{
    const numtemp =document.getElementById('temp').value;
    
     
    const tempSelected =document.getElementById('tempoptions');
    const valTemp = tempoptions.options[tempSelected.selectedIndex].value;


    const celToFah =(cel) =>{
        let fahrenheit =Math.round((cel*9/5)+32);
        return fahrenheit;
    } 
    const fahToCel =(fah) =>{
        let celsius =Math.round((fah -32)+5/9);
        return celsius;
    }  
    
    let result ;

    if(valTemp == 'cel' ){
        result = celToFah(numtemp);
        document.getElementById("resultContainer").innerHTML= `= ${result}  º Celsius`;
        
    }
    else
    {
        result = fahToCel(numtemp);
        document.getElementById("resultContainer").innerHTML= `=${result}  º Fahrenheit`;
    }
    
}