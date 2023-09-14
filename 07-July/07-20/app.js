function descendingOrder(n) {
  //...
  //use .toString() method to convert to a sting
  const string = n.toString();
  //use .split() method to split string into an array
  const split = string.split("");
  //use .sort().reverse() methods to sort in a descending order
  const sort = split.sort().reverse();
  //use .join to joing the array into a string
  const join = sort.join("");
  return join;
}
console.log(descendingOrder(5462251));
