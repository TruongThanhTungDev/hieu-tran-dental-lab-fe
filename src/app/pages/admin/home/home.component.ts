import { Component, ViewContainerRef } from "@angular/core";
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { AddProductPopup } from "../../../shared/popup/add-product/add-product.component";
@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  listOfData: any[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
  constructor(
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef
  ) {}
  addNewProduct() {
    const modalRef: NzModalRef = this.modal.create({
      nzTitle:
        '<div class="font-bold text-[20px] leading-30px">Thêm sản phẩm mới</div>',
      nzContent: AddProductPopup,
      nzViewContainerRef: this.viewContainerRef,
      nzCentered: true,
      nzWidth: '828px',
      nzData: {
        favoriteLibrary: 'angular',
        favoriteFramework: 'angular',
      },
      nzFooter: [
        {
          label: 'Hủy',
          onClick: () => modalRef.destroy(),
        },
        {
          label: 'Xác nhận',
          type: 'primary',
          autoLoading: false,
          onClick: () => {},
        },
      ],
    });
  }
  editProduct() {
    const modalRef: NzModalRef = this.modal.create({
      nzTitle:
        '<div class="font-bold text-[20px] leading-30px">Sửa thông tin sản phẩm</div>',
      nzContent: AddProductPopup,
      nzViewContainerRef: this.viewContainerRef,
      nzCentered: true,
      nzWidth: '828px',
      nzData: {
        favoriteLibrary: 'angular',
        favoriteFramework: 'angular',
      },
      nzFooter: [
        {
          label: 'Hủy',
          onClick: () => modalRef.destroy(),
        },
        {
          label: 'Xác nhận',
          type: 'primary',
          autoLoading: false,
          onClick: () => {},
        },
      ],
    });
  }
}