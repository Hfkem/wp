//5.
function vectorAdd(x,y)
{
    for(let i=0; i<x.length;i++)
    {
        x[i]+=y[i];
    }
    return x;
}
var x = [1,1],y = [1,1];
console.log(vectorAdd(x,y));

//6.
function sub(a, b) 
{
    var i, j, c = []
    for (i=0; i<a.length; i++) 
    {
        c[i] = []
        for (j=0; j<a[i].length; j++) 
        {
            c[i][j] = a[i][j] + b[i][j]
        }
    }
    return c
}
console.log(sub([[1,2],[3,4]], [[1,1],[1,1]]))

//7.
function take(n,l) 
{
    var i, j, c = []
    for (i=0; i<n.length; i++)
    {
        c[i] = []
        for (j=0; j<n[i].length; j++) 
        {
            c[i][j] = n[i][j] * l[i][j]
        }
    }
    return c
}
console.log(take([[1,2],[3,4]], [[2,2],[2,2]]))

//8.
const year = parseInt(prompt("請輸入一個年份："));
if (year%4==0 && year%100!=0 ||year%400==0) 
{
    console.log("366day")
}
else
{
    console.log("365day")
}
