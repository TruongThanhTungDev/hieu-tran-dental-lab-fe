import { Component, inject } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { NZ_MODAL_DATA, NzModalRef } from "ng-zorro-antd/modal";

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
})
export class AddProductPopup {
  readonly #modal = inject(NzModalRef);
  readonly nzModalData = inject(NZ_MODAL_DATA);
  productInformation: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.productInformation = this.formBuilder.group({
      
    })
  }
}