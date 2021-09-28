const Tree = require("./tree");

let grandma = new Tree("grandma");
let one = new Tree("one");
let two = new Tree("two");
let three = new Tree("three");
let four = new Tree("four");
let five = new Tree("five");
let six = new Tree("six");
let seven = new Tree("seven");
let eight = new Tree("eight");
let nine = new Tree("nine");
let ten = new Tree("ten");
let eleven = new Tree("eleven");
let twelve = new Tree("twelve");
let disconected = new Tree("disconected");

grandma.addChild(two);
two.addChild(three);
two.addChild(four);
four.addChild(five);
five.addChild(six);
six.addChild(seven);
six.addChild(eight);
one.addChild(nine);
nine.addChild(ten);
ten.addChild(eleven);
ten.addChild(twelve);
two.addChild(one);

let node1, node2;

test("node1 and node2 sould be different", () => {
  node1 = one;
  node2 = one;
  expect(grandma.commonAncestor(node1, node2)).toEqual("Es el mismo nodo");
});

test("nodes sould not be trees", () => {
  node1 = grandma;
  node2 = one;
  expect(grandma.commonAncestor(node1, node2)).toEqual("Los árboles no valen");
});

test("nodes sould not be mother and daughter", () => {
  node1 = two;
  node2 = four;
  expect(grandma.commonAncestor(node1, node2)).toEqual("Son madre e hija");
});

test("nodes sould not be disconnected", () => {
  node1 = two;
  node2 = disconected;
  expect(grandma.commonAncestor(node1, node2)).toEqual("Están desconectadas");
});

test("two connected elements have a common antecesor", () => {
  node1 = seven;
  node2 = eight;
  expect(grandma.commonAncestor(node1, node2)).toEqual("six");
});
