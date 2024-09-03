import { Component } from "@angular/core";
import { NzDrawerPlacement } from "ng-zorro-antd/drawer";

@Component({
  selector: 'admin-layout',
  templateUrl: './admin-layout.component.html',
})
export class AdminLayoutComponent {
  visible = false;
  placement: NzDrawerPlacement = 'left';
  close(): void {
    this.visible = false;
  }
  open(): void {
    console.log('1 :>> ', 1);
    this.visible = true;
  }
}