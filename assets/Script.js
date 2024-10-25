function Calc() {
     
    let Number01 = document.getElementById("txtNumber01").value;

    
    // let Number02 = Number(document.getElementById("txtNumber02").value);
    // let operator = document.getElementById("operator").value;
    let lbloutput = document.getElementById("lbloutput");
    let sum = eval(Number01 );
    // console.log("Number 01 -"+Number01+"| Number 02 -"+Number02+"| Operator -"+operator);

    // lbloutput.innerHTML = "Number 01 -"+Number01+"| Number 02 -"+Number02+"| Operator -"+operator;
    
    // let cal;
    // if(operator === "+"){
    //     cal = Number01 + Number02;
    // }else if(operator === "-"){
    //     cal = Number01 - Number02;
    // }else if(operator === "*"){
    //     cal = Number01 * Number02;
    // }else if(operator === "/"){
    //     cal = Number01 / Number02;
    // }

    lbloutput.innerHTML = sum ;


    
}