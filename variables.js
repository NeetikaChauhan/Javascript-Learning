//*************************************** Variable var ***************************************

// function example() {
//     if (true) {
//       var x = 10;
//       console.log(x); // Output: 10
//     }
//     console.log(x); // Output: 10
//   }
  
//   example();



  // *************************************** Variable Let ***************************************


//   function example() {
//     if (true) {
//       let y = 20;
//       console.log(y); // Output: 20
//     }
//     console.log(y); // ReferenceError: y is not defined
//   }
  
//   example();


   // *************************************** Variable Const ***************************************

   function example() {
    const z = 30;
    console.log(z); // Output: 30
  
    z = 40; // TypeError: Assignment to constant variable
  }
  
  example();