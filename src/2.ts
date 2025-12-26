// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let list = new ListNode(0);
  let curr = list;

  let l1Node = l1;
  let l2Node = l2;
  let carry = 0;

  while (l1Node || l2Node || carry) {
    const sum = (l1Node?.val || 0) + (l2Node?.val || 0) + carry;

    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;

    l1Node = l1Node?.next || null;
    l2Node = l2Node?.next || null;
  }

  return list.next;
}

console.log(
  addTwoNumbers(
    new ListNode(2, new ListNode(4, new ListNode(3))),
    new ListNode(5, new ListNode(6, new ListNode(4)))
  )
);
