function reverseInParentheses(inputString){
    var outputString=reverseInParenthesesRecursive(inputString,false);

    return outputString;
}

function reverseInParenthesesRecursive(cad,reverse){
    var output="";
    var parentesisEncontrado=false;
    var cantidadDeParentesis=0;
    do{
        parentesisEncontrado=false;
        cantidadDeParentesis=0;
        for(let i=0;i<cad.length;i++){
            if(cad[i]=='('){
                parentesisEncontrado=true;
                cantidadDeParentesis++;
            }
            if(cad[i]==')'){
                cantidadDeParentesis--;
                if(cantidadDeParentesis==0&&parentesisEncontrado){
                let posicionInicial=cad.indexOf('(');
                cad=cad.substring(0,posicionInicial)+reverseInParenthesesRecursive(cad.substring(posicionInicial+1,i),true)+cad.substring(i+1);
                break;
                }
            }
        }    
    }while(parentesisEncontrado)
    if(reverse){
        output=cad.split('').reverse().toString().replace(/,/g,'');
    }
    else{
        output=cad;
    }


    return output;
}
console.log(reverseInParentheses("foo(bar)baz(blim)"))