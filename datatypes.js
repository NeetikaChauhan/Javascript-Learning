let a = 5;
console.log("a : " +typeof(a)); // number

let b = 67363246823648236238764275426745264526425634527343288329843n;
console.log("b : " + typeof(b));

let c = "Nyla";
console.log("c : " + typeof(c));  // string

let d = true;
console.log("d : " + typeof(d)); // boolean

let e = null;
console.log("e : " + typeof(e)); // object

let f ;
console.log("f : " + typeof(f)); // undefined


let person = {
    name : "Nyla",
    age : 30 
}

console.log(person); // Object

let g = Symbol("id");
console.log(g);