import { Component, inject, Input, OnInit } from "@angular/core";
import { NZ_MODAL_DATA, NzModalRef } from "ng-zorro-antd/modal";
import { DanhMucService } from "../../../danhmuc.service";
import { NotificationService } from "../../../notify.service";

@Component({
  selector: 'add-topic',
  templateUrl: './add-topic.component.html',
})
export class AddTopicPopupComponent implements OnInit{
  @Input() data: any
  readonly #modal = inject(NzModalRef);
  readonly nzModalData = inject(NZ_MODAL_DATA);
  isLoading = false;
  title: any;
  REQUEST_URL = '/type-material-editor';
  constructor(private dmService: DanhMucService, private notify: NotificationService) { }
  ngOnInit(): void {
    if (this.data) {
      this.title = this.data.title
    }
  }
  public save() {
    if (!this.title) {
      this.notify.warning('Vui lòng nhập tiêu đề')
      return
    }
    const payload = {
      title: this.title
    }
    this.isLoading = true
    if (!this.data) {
      this.dmService
        .postOption(payload, this.REQUEST_URL, '/create')
        .subscribe((res: any) => {
          if (res) {
            if (res.status === 201) {
              this.isLoading = false;
              this.notify.success('Thêm mới chủ đề thành công');
              this.#modal.close(true)
            } else {
              this.isLoading = false
              this.notify.error(res.data.message)
            }
          }
        },
          (err) => {
            this.isLoading = false
            this.notify.error(err.error.message);
        }
      );
    } else {
      this.dmService.putOption(payload, this.REQUEST_URL, '/update/' + this.data.id).subscribe(
        (res: any) => {
          if (res) {
            if (res.status === 200) {
              this.isLoading = false;
              this.notify.success('Sửa chủ đề thành công');
              this.#modal.close(true);
            } else {
              this.isLoading = false;
              this.notify.error(res.data.message);
            }
          }
        },
        (err) => {
          this.isLoading = false;
          this.notify.error(err.error.message);
        }
      );
    }
  }
}