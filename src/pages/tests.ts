import { bindable, bindingMode } from 'aurelia-framework';
import { TreeNode } from './../models/treenode';
export class Tests {

  @bindable({  bindingMode: bindingMode.twoWay})
  selectedTreeNodeId: number

  treeNodes: TreeNode[] = [
    { id: 1, name: 'Animals', children: [
      { id: 2, name: 'Cats', children: [
        { id: 3, name: 'Tabby', children: []},
        { id: 4, name: 'Calico', children: []}
      ]},
      { id: 5, name: 'Dogs', children: [
        { id: 6, name: 'German Shepherd', children: []},
        { id: 7, name: 'Pomeranian', children: []}
      ]},
    ]},
    { id: 10, name: 'Food', children: [
      { id: 12, name: 'Main Course', children: [
        { id: 13, name: 'Bistek Tagalog', children: []},
        { id: 14, name: 'Sinigang', children: []}
      ]},
      { id: 15, name: 'Dessert', children: [
        { id: 16, name: 'Turon', children: []},
        { id: 17, name: 'Sapin Sapin', children: []}
      ]},
    ]},
  ]


  constructor() {
    this.selectedTreeNodeId = 5;
    
  }

  onSelectedTreeNodeChanged(treeNode: TreeNode) {
    console.log(`OnSelectedTreeNodeChanged handler: ${treeNode.id }`)
    this.selectedTreeNodeId = treeNode.id;
  }
}
