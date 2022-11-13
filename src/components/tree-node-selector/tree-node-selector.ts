import { findAscendant } from 'utils/treeutils';
import { bindable, bindingMode } from 'aurelia-framework';
import { TreeNode } from 'models/treenode';


export class TreeNodeSelector {
  
  @bindable()
  selectedTreeNodeId: number;
  
  @bindable()
  treeNodes: Array<TreeNode>

  selectedTreeNodeAtLevel: TreeNode

  @bindable()
  selectedTreeNodeChanged: (arg: any) => void

  attached() {
    this.selectedTreeNodeAtLevel = findAscendant(this.treeNodes, this.selectedTreeNodeId)
  }

  onSelectionChanged(treeNode: TreeNode) {
      this.selectedTreeNodeChanged?.({treeNode: treeNode})
  }

  onSelectedTreeNodeChanged(treeNode: TreeNode) {
    this.selectedTreeNodeChanged?.({ treeNode: treeNode})
  }

}
