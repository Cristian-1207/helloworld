function palindromeRearranging(inputString){
    var result=false;
    var almacen=[];
    for(var i=0;i<inputString.length;i++){
        if(almacen[inputString[i]]){
            almacen[inputString[i]]++;
        }
        else{
            almacen[inputString[i]]=1;
        }
    
    }
    var cantLetrasImpares=0;
    var vecKeys=Object.keys(almacen);
    vecKeys.forEach(key=>{if(almacen[key]%2!=0) cantLetrasImpares++});
    result=inputString.length%2==0? (cantLetrasImpares==0): (cantLetrasImpares==0||cantLetrasImpares==1);
    return result;
}

console.log(palindromeRearranging("oruro"));
