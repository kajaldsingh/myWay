function pizzBuzz(phoneNum){
    let output = "";
    for(let i=0;i<phoneNum;i++){
        if(i%3 === 0 && i%4 ===0){
            output += `${i} FizzBuzz`;
        }
        else if(i%3 === 0){
            output += `${i} Fizz`;
        }
        else if(i%4 === 0){
            output += `${i} Buzz`;
        }
        else{
            output += `${i} Pizz`;
        }
    }
    console.log(output);
}
pizzBuzz(9000000007);
