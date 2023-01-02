 const randomArr = [
    11,
    'cat',
    true,
    4,
    'mouse',
    5,
    9,
    5,
    76,
    false
 ]
 function getArrayByData(array, dataType){
    if( typeof randomArr === 'string'){
        for (let i = 0; i < randomArr.length; i++) {
            console.log(randomArr[i])
        } else if( typeof randomArr === 'number'){
            console.log()
        }
    }
    
 }