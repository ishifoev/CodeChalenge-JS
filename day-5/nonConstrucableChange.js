//For example if you are given coins = [1, 2, 5], the minimum
//amount of change that you can create is 4. If you can't given
//coins the minimum amount change that you can't create will be 1

function nonConstrucableChange(coins) {
    let result = coins.sort(function(a, b){
        return a - b
    });

    let currentChange = 0;
    for(let i = 0; i < result.length; i++) {
        if(result[i] > currentChange + 1) return currentChange + 1

        currentChange += result[i];
    }
    return currentChange + 1;
}
nonConstrucableChange([5, 7, 1, 1, 2, 3, 22])//Answer 20