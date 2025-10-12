const myNums=[1,2,3,4]

//Reduce: Combines all elements into a single value (sum, product, object, etc.)

// const newTotal=myNums.reduce(function(acc,curr_val){
//     console.log(`acc:${acc} and currval:${curr_val}`);
//     return acc+curr_val;
// },0)

// const newTotal=myNums.reduce((acc,curr_val)=>acc+curr_val,0);
// console.log(newTotal);

const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"py course",
        price:1999
    },
    {
        itemName:"Dsa course",
        price:3999
    },
    {
        itemName:"WEB-DEV course",
        price:4999
    }
]

const total_price=shoppingCart.reduce((acc, item)=>(acc+item.price),0)

console.log(total_price);
