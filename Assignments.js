const { LinkedList } = require('./LInkedList');
const linkedList = new LinkedList;

////1
//Complete, see LinkedList.js

////2

function main() {
  let SLL = new LinkedList;
  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  // SLL.remove('squirrel');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 3);
  SLL.remove('Tauhida');
  // display(SLL);
  // console.log(size(SLL));
  // console.log(isEmpty(SLL));
  // console.log(findPrevious(SLL, 'Husker'));
  // console.log(findLast(SLL));
  //console.log(reverseList(SLL));
  // reverseList(SLL);
  // reverseListTwo(SLL);
  display(SLL);

  console.log(thirdFromEnd(SLL))
}

///3
function display(list) {
  if (!!list.head) {
    list = list.head;
  }
  console.log(list.value);
  list.next !== null ? display(list.next) : null;
}

function size(list) {
  if (!!list.head) {
    list = list.head;
  }
  if (list.next !== null) {
    return 1 + size(list.next);
  }
  return 1;
}

const isEmpty = list => !!list.head && !!list.head.value;

function findPrevious(list, item) {
  if (!list.head) {
    return null;
  }
  let current = list.head;
  let previous = list.head;

  while ((current !== null) && (current.value !== item)) {
    previous = current;
    current = current.next;
  }
  if (current === null) {
    console.log('Cannot find search value');
    return;
  }
  return previous;
}

function findLast(list) {
  if (!!list.head) {
    list = list.head;
  }
  if (list.next !== null) {
    return findLast(list.next);
  }
  return list;
}

// function reverseList(list, ref = null) {
//   let current = list.head;

//   if (list.head.next !== null) {
//     reverseList(list.head.next, current);
//   } else {
//     list.head = current;
//   }
//   return list;
// }

function reverseListTwo(list) {

  let current = list.head;
  let target = current.next;

  list.head.next = null;

  while (target !== null) {
    let newCur = target.next;
    target.next = current;
    current = target;
    target = newCur;
  }

  list.head = current;
  return list;
}

function thirdFromEnd(list) {
  let current = list.head;
  while (current.next.next.next !== null) {
    current = current.next;
  }
  return current;
}

main();

////4
// Complexity - O(n^2) - double while loop
// Will remove duplicated within a sorted list



