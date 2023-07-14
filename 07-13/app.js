function whoIsPaying(name) {
  //your code here

  // create an empty array to stora the result to contain (name, truncated name)

  // first variable takes the input

  //name.slice(0,2) for second variable
  let truncated = name.slice(0, 2);
  //join the 2 indice for the second variable

  console.log(truncated);
  //name.split() to create an array
  //while (name.length > 2) {
  // name.pop()
  //}

  //merge()
  console.log([name, truncated]);
  //
}

whoIsPaying("Youssef");
