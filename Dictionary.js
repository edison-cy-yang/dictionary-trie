const TreeNode = require('./TreeNode');
const util = require('util')

class Dictionary {
  
  constructor() {
    this.root = new TreeNode();
  }

  insert(word) {
    let children = this.root.children;
    for (let i = 0; i < word.length; i++) {
      const c = word.charAt(i);

      let temp = null;
      if (children.hasOwnProperty(c)) {
        temp = children[c];
      } else {
        temp = new TreeNode(c, i + 1);
        children[c] = temp;
      }

      children = temp.children;

      if (i === word.length - 1) {
        temp.isWord = true;
      }
    }
  }

  search(word) {
    let children = this.root.children;
    let node = null;

    for (let i = 0; i < word.length; i++) {
      let c = word.charAt(i);
      if (children.hasOwnProperty(c)) {
        node = children[c];
        children = node.children;
      } else {
        node = null;
        break;
      }
    } 

    if (node !== null && node.isWord) {
      console.log("this is a word");
      return true;
    } else {
      console.log("This is not a word");
      return false;
    }
  }
}

const dictionary = new Dictionary();
dictionary.insert("string");

dictionary.search("string"); //should output true
