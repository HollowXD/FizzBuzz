// Write your solution below this line:
for (let i = 0; i < 51; i++){
    if(i % 3 == 0 && i % 5 === 0){
        console.log('fizzbuzz')
    } else if(i % 3 === 0){
        console.log('fizz')
    } else if(i % 5 === 0){
        console.log('buzz')
    }
    console.log(i)
}