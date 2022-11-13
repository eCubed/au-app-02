import { bindable } from 'aurelia-framework';

export class PhysicalBox {
  @bindable widthPx = 500
  @bindable heightPx = 50
  
  styleString: string

  constructor() {
    //
    this.anyCssChanged()
  }

  anyCssChanged() {
    this.styleString = `width: ${this.widthPx}px; 
      height: ${this.heightPx}px; 
      background-color: #cccccc`
  }

  widthPxChanged() {
    this.anyCssChanged()
  }

  heightPxChanged() {
    this.anyCssChanged()
  }
}
