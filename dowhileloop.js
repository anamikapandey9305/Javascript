// Runs at least once, even if the condition is false (because the condition is checked after the loop body).
// let i = 1;
do {
  console.log("Hello", i);
  i++;
} while (i <= 3);

// let i = 40;
// while(i<10){
//     console.log("hello")
//     i++;
// 