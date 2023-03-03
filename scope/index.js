

global scope

module scope






//block scope
function test() {
  const funcVar = "Func"

  if (true) {
    const ifVar = "If"
    console.log(funcVar, ifVar)   // Prints: "Func", "If"
  }

  console.log(funVar, ifVar)  // Throws Uncaught Reference Error: ifVar is not defined
}  
