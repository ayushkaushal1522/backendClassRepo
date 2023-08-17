let n = process.argv.pop();
console.log(n);

let i=3;
let j=5;
let k=1;
while(k<=n){
    if(k==i && k==j && i==j){
        console.log("fizzbuzz");
        i+=3;
        j+=5;
    }
    else if(k==i){
        console.log("fizz");
        i+=3;
    }
    else if(k==j){
        console.log("Buzz");
        j+=5;
    }
    else{
        console.log(k);
    }
    k++;
}