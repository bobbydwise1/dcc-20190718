/*
This problem was asked by Google.

An XOR linked list is a more memory efficient doubly linked list. Instead of each node holding next and prev fields, it holds a field named both, which is an XOR of the next node and the previous node. Implement an XOR linked list; it has an add(element) which adds the element to the end, and a get(index) which returns the node at index.

If using a language that has no pointers (such as Python), you can assume you have access to get_pointer and dereference_pointer functions that converts between nodes and memory addresses.
*/

//Note, this is done in javascript.

//XOR: f(0,0)=false, f(0,1)=true, f(1,0)=true, f(1,1)=false

const makeRandomNumber = () => {
  return Math.ceil(Math.random()*10);
}

class linkedList {
  constructor() {
    this.index = 0;
    this.both = [];
    this.previous = 'null';
    this.next = 'null';
  };

  add(element) {
    this.both.push([this.previous,'null']);
    this.both[this.index] = this.previous + '-' + element;
    this.previous = element;
    this.index++;
    return 1;
  };

  get(index) {
    return this.both[index];
  };
}

testList = new linkedList();
testList.add('first');
testList.add('second');
testList.add('third');
console.log(testList);
console.log(testList.get(0));
console.log(testList.get(1));
console.log(testList.get(2));
console.log(testList.get(3));

$(document).ready(function() {
  $('#output-section-1').text(JSON.stringify(testList));
  $('#output-section-2').text(testList.get(1));
  $('#output-section-3').text(testList.get(2));
  $('#output-section-4').text(testList.get(3));
  });
