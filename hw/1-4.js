//1.
console.log("hello,你好");

//2.
function printodd(num)
{
    for(var i=1;i<=num;i+=2)
    {
        console.log(i);
    }
}
printodd(15);

//3.
function isprime(num)
{
    if (num<=1)
    {
        return false;
    }

    for (let i=2;i<=num;i++)
    {
        if (num%i==0)
        {
            return false;
        }
    return true;
    }
}
const number = prompt("請輸入一個正整數：");
if (isprime(parseInt(number))) 
{
    console.log(`${number} 是質數。`);
}
 else 
{
    console.log(`${number} 不是質數。`);
}


//4.
function isprimesum(num) 
{
    if (num <= 1) 
    {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) 
    {
        if (num % i === 0) 
        {
            return false;
        }
    }
    return true;    
}

function sum(n) 
{
    let sum = 0;
    for (let i = 2; i < n; ++i) 
    {
        if (isprimesum(i)) 
        { 
            sum += i;
        }
    }
    return sum;
}

const n = parseInt(prompt("請輸入一個正整數 n："));
const result = sum(n);
console.log(`小於 ${n} 的質數總和為 ${result}。`);
