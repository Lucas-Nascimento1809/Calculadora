var result = document.getElementById("result");
var n1,n2
var operacao

function onNumberClicked(numberButton){
    
    if(result.innerHTML == "0"){
        result.innerHTML = numberButton.innerHTML;
    }
    else{
        result.innerHTML = result.innerHTML + numberButton.innerHTML;
    }
}



function onClearClicked(){
    result.innerHTML="0"
    n1=0 
    n2=0 
    
}

function onEqualsClicked(){
    n2= parseInt(result.innerHTML)
    if (operacao=="+"){
        result.innerHTML= n1+n2
    }
    if(operacao=="-"){
        result.innerHTML= n1-n2
    }
    if(operacao=="*"){
        result.innerHTML= n1*n2
    }
    if(operacao=="/"){
        
        if(n2>0){
            result.innerHTML= n1/n2
        }
        else{
            alert ("Não divisivel por ZERO!")
        }
    }
    
    
}

    function onDivideClicked(){
    n1 = parseInt(result.innerHTML)
    operacao="/"
    result.innerHTML="0"
    }
    
    
    function onSubtractClicked(){
        n1 = parseInt(result.innerHTML)
        operacao="-"
        result.innerHTML="0"
    }
    
    function onMultiplyClicked(){
        n1 = parseInt(result.innerHTML)
        operacao="*"
        result.innerHTML="0"
    }
    
    function onAddClicked(){
        n1 = parseInt(result.innerHTML)
        operacao="+"
        result.innerHTML="0"
    }
    function onRaizClicked(){
        n1 = parseInt(result.innerHTML)
        operacao = "√"
        result.innerHTML= n1*n1
    }
    function onSenClicked(){
        n1 = parseInt(result.innerHTML)
        operacao = "Sen"
        result.innerHTML= Math.sin(n1)
    }
    function onCosClicked(){
        n1 = parseInt(result.innerHTML)
        operacao = "Cos"
        result.innerHTML= Math.cos(n1)
    }
    function onFatorialClicked(){
        n1 = parseInt(result.innerHTML)
        operacao= "!*"
        
        for(i=0; i>1 ; i++) {
            result.innerHTML= n1*n1-1        
        }
    }
    
    
    