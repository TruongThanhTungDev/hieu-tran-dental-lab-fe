import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { AddProductPopup } from "../../../shared/popup/add-product/add-product.component";
import { DanhMucService } from "../../../danhmuc.service";
import { HttpResponse } from "@angular/common/http";
import { NotificationService } from "../../../notify.service";
import moment from "moment";
import { OPERATIONS } from "../../../app.constants";
@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  listData: any[] = [];
  code: any;
  patientName: any;
  doctor: any;
  date: any;
  material: any;
  numberOfTeeth: any
  page = 1;
  limit = 10;
  listMaterial: any[] = [
    {
      name: 'Katana',
      type: 'KA',
    },
    {
      name: 'Venus',
      type: 'VE',
    },
    {
      name: 'Zirconia',
      type: 'Zi',
    },
    {
      name: 'Elitepress',
      type: 'EL',
    },
  ];
  REQUEST_URL = '/products';
  isLoading = false;
  constructor(
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef,
    private dmService: DanhMucService,
    private notify: NotificationService
  ) {}
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.isLoading = true;
    const payload = {
      limit: this.limit,
      page: this.page,
      code: this.code ? this.code : '',
      patientName: this.patientName ? this.patientName : '',
      doctorClinic: this.doctor ? this.doctor : '',
      numberOfTeeth: this.numberOfTeeth ? this.numberOfTeeth : '',
      material: this.material ? this.material : '',
      startDate: parseInt(moment(this.date[0]).format('YYYYMMHH000000')),
      endDate: parseInt(moment(this.date[1]).format('YYYYMMHH235959')),
    };
    this.dmService
      .getOption(payload, this.REQUEST_URL, '/search')
      .subscribe((res: HttpResponse<any>) => {
        if (res.status === 200) {
          this.listData = res.body.data;
          this.isLoading = false;
        }
      });
  }
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
          onClick: () => {
            const ref = modalRef.getContentComponent() as AddProductPopup;
            ref.submitForm();
          },
        },
      ],
    });
    modalRef.afterClose.subscribe((res: any) => {
      if (res) {
        this.getData();
      }
    });
  }
  editProduct(item: any) {
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
          onClick: () => {
            const ref = modalRef.getContentComponent() as AddProductPopup;
            ref.submitForm();
          },
        },
      ],
    });
    modalRef.componentInstance.data = item;
    modalRef.afterClose.subscribe((res: any) => {
      if (res) {
        this.getData();
      }
    });
  }
  deleteData(id: any) {
    const modalRef: NzModalRef = this.modal.create({
      nzTitle:
        '<div class="font-bold text-[20px] leading-30px">Xác nhận xóa</div>',
      nzContent: '<div>Bạn có chắc muốn xóa thông tin đơn này?</div>',
      nzViewContainerRef: this.viewContainerRef,
      nzCentered: true,
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
          onClick: () => {
            this.isLoading = true;
            this.dmService
              .delete(id, this.REQUEST_URL + OPERATIONS.DELETE)
              .subscribe((res: HttpResponse<any>) => {
                if (res.status === 200) {
                  modalRef.destroy();
                  this.notify.success('Xóa thành công');
                  this.isLoading = false;
                  this.getData();
                }
              });
          },
        },
      ],
    });
  }
  formatDate(date: any) {
    return date ? moment(date, 'YYYYMMDDHHmmss').format('DD/MM/YYYY') : '';
  }
}