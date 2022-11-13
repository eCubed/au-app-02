import { TreeNode } from 'models/treenode';

export function findTreeNode(treeNodes: Array<TreeNode>, id: number) {

  for(let i = 0; i < treeNodes.length; i++) {
    if (treeNodes[i].id === id) {
      return treeNodes[i];
    } else {
      const foundTreeNode = findTreeNode(treeNodes[i].children, id)
      if (foundTreeNode != null)
        return foundTreeNode;
    }
  }
}

export function containsDescendant(treeNode: TreeNode, descendantId: number) {
  if (treeNode.id === descendantId) {
    return true;
  } else {
    for(let i = 0; i < treeNode.children.length; i++) {
      const containsDesc = containsDescendant(treeNode.children[i], descendantId)
      if (containsDesc)
        return true
    }
    return false;
  }
}

export function findAscendant(treeNodes: Array<TreeNode>, descendantId: number) {
  for(let i = 0; i < treeNodes.length; i++) {
    if (containsDescendant(treeNodes[i], descendantId))
      return treeNodes[i];
  }

  return null
}
