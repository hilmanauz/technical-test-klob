let clothes = []
clothes[0] = ["JakartaJS"]
clothes[1] = ["AWSome Day", "Elixir"]
clothes[2] = ["GoJakarta", "Elixir"]
// clothes[0] = ["JakartaJS", "Elixir"]
// clothes[1] = ["Elixir"]
// clothes[2] = ["JakartaJS ","Elixir"]
let temp = ""
let tempClothes = []
let isDifferent = true
let isAllDifferent = true
let similarCount = 0

for ( let i = 0; i < clothes.length; i++ ) {
    for ( let j = 0; j < clothes[i].length; j++) {
        if (tempClothes.length === 0){
            tempClothes.push(clothes[i][j])
        } else {
            for ( let k = 0; k < tempClothes.length; k++ ) {
                if (tempClothes[k] === clothes[i][j]){
                    similarCount += 1
                    isDifferent = false
                    break;
                }
            }
            if (isDifferent){
                tempClothes.push(clothes[i][j])
            }
        }
    }
    if (clothes[i].length === similarCount && i !== 0){
        isAllDifferent = false
    }
    similarCount = 0
}

if (isAllDifferent) {
    console.log(`${isAllDifferent}. Example of possible combination: ${JSON.stringify(tempClothes)}`)
} else {
    console.log(isAllDifferent)
}