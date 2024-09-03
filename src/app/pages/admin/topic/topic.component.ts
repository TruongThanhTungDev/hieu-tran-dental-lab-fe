import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { NzModalRef, NzModalService } from "ng-zorro-antd/modal";
import { AddTopicPopupComponent } from "../../../shared/popup/add-topic/add-topic.component";
import moment from "moment";
import { NotificationService } from "../../../notify.service";
import { DanhMucService } from "../../../danhmuc.service";
import { HttpResponse } from "@angular/common/http";
import { OPERATIONS } from "../../../app.constants";

@Component({
  selector: 'topic',
  templateUrl: './topic.component.html',
})
export class TopicComponent implements OnInit {
  isLoading = false;
  listData: any[] = [];
  page = 1;
  totalPages = 0;
  REQUEST_URL = '/type-material-editor';
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
    this.dmService
      .get(this.REQUEST_URL + '/get-all')
      .subscribe((res: HttpResponse<any>) => {
        if (res) {
          if (res.status === 200) {
            this.isLoading = false;
            this.listData = res.body;
          }
        }
      });
  }
  addData() {
    const modalRef: NzModalRef = this.modal.create({
      nzTitle:
        '<div class="font-bold text-[20px] leading-30px">Thêm chủ đề bài viết</div>',
      nzContent: AddTopicPopupComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzCentered: true,
      nzWidth: '300px',
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
            const ref =
              modalRef.getContentComponent() as AddTopicPopupComponent;
            ref.save();
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
  editData(item: any) {
    const modalRef: NzModalRef = this.modal.create({
      nzTitle:
        '<div class="font-bold text-[20px] leading-30px">Sửa thông tiêu đề</div>',
      nzContent: AddTopicPopupComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzCentered: true,
      nzWidth: '300px',
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
            const ref =
              modalRef.getContentComponent() as AddTopicPopupComponent;
            ref.save();
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
      nzContent: '<div>Bạn có chắc muốn xóa thông tin bài viết này?</div>',
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
  changePage(event: any) {
    this.page = event;
    this.getData();
  }
  formatDate(date: any) {
    return date ? moment(date, 'YYYYMMDDHHmmss').format('DD/MM/YYYY') : '';
  }
}