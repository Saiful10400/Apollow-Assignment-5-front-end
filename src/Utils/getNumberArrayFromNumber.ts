const getNumberArrayFromNumber=(number)=>{
    let numberArray=[]
    for (let i = 1; i <= number; i++){
        numberArray.push(i)
    }
    return numberArray
}

export default getNumberArrayFromNumber