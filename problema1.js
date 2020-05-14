function allLongestString(inputArray){
    var outputArray=[];

    var mayor=0;
    for(var i=0;i<inputArray.length;i++)
        if(inputArray[i].length>mayor)
        mayor=inputArray[i].length

    for(var i=0;i<inputArray.length;i++)
        if(inputArray[i].length==mayor)
            outputArray.push(inputArray[i])
    return outputArray;
}


console.log(allLongestString(["enyky",
"benyky",
"yely",
"varennyky"]))