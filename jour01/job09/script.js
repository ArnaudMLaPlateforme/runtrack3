function tri (numbers, order){
    if (order === "asc") { // Tri croissant
        numbers.sort(function(a,b){
            return a-b;
        })
    } else if (order === "desc") { // Tri décroissant
        numbers.sort(function(a,b){
            return b-a;
        })
    } 
    return numbers;
}

console.log(tri([1, 2, 3, 4, 5, 6], "asc"));
console.log(tri([1, 2, 3, 4, 5, 6], "desc"));
