////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step = 1) {
  let result = [];

  // Handle case where start and end are the same
  if (start === end) {
    return result;
  }
  // Determine direction of range based on step value
  if (step > 0) {
    // Positive step: iterate from start to end
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  } else {
    // Negative step: iterate from start to end (reverse)
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  }

  return result;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(arr) {
  // Use reduce to sum up all elements in the array, starting from 0
  return arr.reduce((acc, current) => acc + current, 0);
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arr) {
  let reversed = [];
  // Iterate through the input array in reverse order
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]); // Push each element to reversed array
  }
  return reversed; // Return the reversed array
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(arr) {
  // Swap elements from start to middle with corresponding elements from end to middle
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i]; // Store current element in temp variable
    arr[i] = arr[arr.length - 1 - i]; // Assign corresponding end element to current index
    arr[arr.length - 1 - i] = temp; // Assign temp variable to corresponding end element
  }
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(arr) {
  let list = null;
  // Iterate over the input array in reverse to build the nested list
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list }; // Create a new object with current value and previous list as rest
  }
  return list; // Return the nested list structure
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  // Initialize an empty array to hold the values from the list
  const array = [];
  // Start with the head of the list
  let currentNode = list;
  // Traverse the list until the end (when currentNode is null)
  while (currentNode !== null) {
    // Push the current node's value to the array
    array.push(currentNode.value);
    // Move to the next node in the list
    currentNode = currentNode.rest;
  }
  // Return the resulting array
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
  return { value, rest: list };
}
////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
  // If the list is empty (null), return undefined
  if (!list) return undefined;
  // If n is 0, return the current node's value
  if (n === 0) return list.value;
  // Recursively call nth with the rest of the list and n - 1
  return nth(list.rest, n - 1);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(a, b) {
  if (a === b) return true; // Check if both values are identical
  if (
    typeof a !== "object" ||
    typeof b !== "object" ||
    a === null ||
    b === null
  ) {
    return false; // If either value is not an object or one is null, they're not equal
  }
  let keysA = Object.keys(a),
    keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false; // Check if objects have the same number of properties
  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false; // Check if objects have the same properties and values
    }
  }
  return true; // Objects are deeply equal
}
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
}
