/*
This problem was asked by Google.

An XOR linked list is a more memory efficient doubly linked list. Instead of each node holding next and prev fields, it holds a field named both, which is an XOR of the next node and the previous node. Implement an XOR linked list; it has an add(element) which adds the element to the end, and a get(index) which returns the node at index.

If using a language that has no pointers (such as Python), you can assume you have access to get_pointer and dereference_pointer functions that converts between nodes and memory addresses.
*/

//Note, this is done in javascript.
const makeRandomNumber = () => {
  return Math.ceil(Math.random()*10);
}

class linkedList {
  constructor() {
    this.index = 0;
    this.both = ['head'];
  };

  add(element) {
    this.both.push(this.both[0]+'-'+element);
    this.index++;
    return 1;
  };

  get(index) {
    return this.both[index];
  };
}

$(document).ready(function() {
  $('#output-section-1').text(1);
  $('#output-section-2').text(2);
  $('#output-section-3').text(3);
  $('#output-section-4').text(4);
  });
