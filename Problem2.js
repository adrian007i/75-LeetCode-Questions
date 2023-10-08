// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// input : prices : int array
// output : max_profit : int



// 7,1,5,3,6,4
// 7,2,5,1,6,4



const maxProfit = function(prices) {

    let max_profit = 0;
    let smallest_stock = prices[0];

    // iterate the prices
    for (let i = 1; i < prices.length; i++) { 
        
        // check for if selling the ith stock makes the largest profit and update max_profit
        if(prices[i] - smallest_stock > max_profit )
            max_profit = prices[i] - smallest_stock; 

        // check if the current stock is the smallest and update  smallest_stock 
        if(prices[i] < smallest_stock)
            smallest_stock = prices[i];
    }

    return max_profit;
    
};

console.log(maxProfit([7,6,4,3,1]));