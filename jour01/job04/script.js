function bisextile (année){
    // On vérifie si l'année est divisible par 4 (année bisextile)
    if (année %4 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(bisextile(2024)); // true
console.log(bisextile(2023)); // false
