console.log(("****************************** Continue statement example ***********************"))
let i = 0;
while (i < 11) {
    i++;
    if (i % 2 == 0) continue;
    console.log(i);
}

console.log(("****************************** Break statement example ***********************"))
let j = 0;
while (j < 11) {
    j++;
    if (j % 2 == 0) break;
    console.log(j);
}