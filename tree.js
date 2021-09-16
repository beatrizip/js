"use strict";

// Common ancestor (60 mins)

// Write a function that takes two nodes of a tree and returns the
// closest common ancestor, or returns null if there isn't any.
// It should also handle edge cases, for example when either of the
// nodes is the tree itself, or both nodes are the same. For example:
//
// let grandma = new Tree('grandma');
// let mom = new Tree('mom');
// let ant = new Tree('ant');
// grandma.addChild(mom);
// grandma.addChild(ant);
// grandma.commonAncestor(mom, ant) -> grandma

function Tree(value) {
  this.children = [];
  this.value = value;
}

Tree.prototype.addChild = function (node) {
  if (!this.isDescendant(node)) this.children.push(node);
  else throw new Error(`The node "${node.value}" already exists in this tree`);
  return this;
};

Tree.prototype.isDescendant = function (node) {
  if (this.children.indexOf(node) !== -1) return true;
  // "node" is an immediate child of this tree
  else {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(node)) return true; // "node" is descendant of this tree
    }
    return false;
  }
};

Tree.prototype.path = function (node, path) {
  if (this.isDescendant(node)) {
    path.push(this.value);
  } else {
    return; //condición de parada de la recursividad
  }

  let childrenLength = this.children.length;
  for (let i = 0; i < childrenLength; i++) {
    if (this.children[i].isDescendant(node)) {
      this.children[i].path(node, path);
      return;
    }
  }
};

Tree.prototype.sameNode = function (node1, node2) {
  return node1 === node2;
};

Tree.prototype.isTree = function (node) {
  return this === node;
};

Tree.prototype.isChild = function (node) {
  return this.children.indexOf(node) !== -1;
};

Tree.prototype.disconected = function (node) {
  return !this.isDescendant(node);
};

Tree.prototype.commonAncestor = function (node1, node2) {
  if (this.sameNode(node1, node2)) {
    return "Es el mismo nodo";
  }

  if (this.isTree(node1) || this.isTree(node2)) {
    return "Los árboles no valen";
  }

  if (node2.isChild(node1) || node1.isChild(node2)) {
    return "Son madre e hija";
  }

  if (this.disconected(node1) || this.disconected(node2)) {
    return "Están desconectadas";
  }

  let path1 = [];
  let path2 = [];
  this.path(node1, path1);
  this.path(node2, path2);

  let antecesors = path1.filter((value) => path2.includes(value));
  return antecesors.pop();
};

Tree.prototype.paint = function (level) {
  //Metodín de mierda para aclararme con el árbol
  if (level === undefined) level = "";
  console.log(`${level}${this.value}`);

  for (let i = 0; i < this.children.length; i++) {
    if (this.children[i] !== undefined) {
      this.children[i].paint(level.replace("└", " ") + " └");
    }
  }
};

module.exports = Tree;
