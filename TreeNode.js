class TreeNode {
  constructor(character, depth) {
    this.character = character;
    this.depth = depth;
    this.isWord = false;
    this.children = {};
  }
}

module.exports = TreeNode;