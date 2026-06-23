//Flatten a deeply nested array without flat().
let array = [1, [2, [3, [4, [5]]]]];
function flatten(a,result=[]){
    for(let i of a){
        Array.isArray(i)?
        flatten(i,result):result.push(i)
    }
    return result;
}
console.log(flatten(array))

//Print a spiral matrix.
function Matrix(n) {
    var matrix = [];
   for (var i = 0; i < n; i++) {
        matrix[i] = [];
    }
    var top = 0;
    var bottom = n - 1;
    var left = 0;
    var right = n - 1;
    var num = 1;
   while (num <= n * n) {
       for (var i = left; i <= right; i++) {
            matrix[top][i] = num++;
        }
        top++;
        for (var i = top; i <= bottom; i++) {
            matrix[i][right] = num++;
        }
        right--;
        for (var i = right; i >= left; i--) {
            matrix[bottom][i] = num++;
        }
        bottom--;
        for (var i = bottom; i >= top; i--) {
            matrix[i][left] = num++;
        }
        left++;
    }
   return matrix;
}
console.log(Matrix(3));

//Sequential async loop.
const Ids = [1, 2, 3, 4, 5];
async function Users() {
    for (const id of Ids) {
        const result = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const user = await result.json();
        console.log(user);
        document.getElementById("users").innerHTML += `
            <div class="card">
                <h3>${user.name}</h3>
                <p>${user.email}</p>
                <p>${user.address.city}</p>
            </div>
        `;
    }
}
Users();
