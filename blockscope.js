// A block means { }

//Variables declared with let or const inside { } are block-scoped.
{
  let y = 30;
  const z = 40;
}

console.log(y); // ❌ Error
console.log(z); // ❌ Error
