// Your code here


function mapToNegativize(arr){
    let newArr = []
    for(let i =0; i < arr.length; i++){
        newArr.push(arr[i] * (-1) )
    }
    return newArr
}

function mapToDouble (arr) {
    let newArr = []
    for(let i =0; i < arr.length; i++){
        newArr.push(arr[i] * 2 )
    }
    return newArr
}

function mapToSquare (arr){
    let newArr = []
    for(let i =0; i < arr.length; i++){
        newArr.push(arr[i] ** 2 )
    }
    return newArr
}

function mapToNoChange(arr){
    let newArr = [...arr]
    return newArr
}

function reduceToTotal (arr, starting=0){
    let total = starting
    for(let i=0; i < arr.length; i++ ){
        total += arr[i]
    }
    return total
}


function reduceToAllTrue (arr){
    let boolean = true
    for(let i=0; i < arr.length; i++ ){
        if(!arr[i]){
            boolean = false
        }
    }
    return boolean
}

function reduceToAnyTrue (arr){
    let boolean = false
    for(let i=0; i < arr.length; i++ ){
        if(arr[i]){
            boolean = true
        }
    }
    return boolean

}
