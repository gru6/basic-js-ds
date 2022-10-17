const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */


function removeKFromList(l, k) {
  let list = l; //clone list
  let prevEl;
  while (list) {
    if (list.value === k) {    //находим k 
      if (prevEl) {             // если есть prevEl перебрасываем связь 
        prevEl.next = list.next;    // list.next это цепочка листа (вложенного объекта от листа и до конца... весь хвост)    
      } else {                 // случай когда k 1-й эл в списке. в l запихиваем весь хвост списка 
        l = list.next;
      }
      list = l;
    }
    prevEl = list; // запоминаем цепочку от предыдущего значения
    list = list.next;  // откидываем из листа первое значение которое проверили

  }
  return l;
}

module.exports = {
  removeKFromList
};
