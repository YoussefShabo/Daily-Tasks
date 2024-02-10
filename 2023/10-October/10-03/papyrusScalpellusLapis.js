function cookingTime(eggs) {
  // TODO
  if (eggs > 0) {
    const time = Math.ceil(eggs / 8) * 5;
    console.log(time);
  }
}

let eggs = 9;
cookingTime(eggs);
