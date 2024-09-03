import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { DanhMucService } from '../../../danhmuc.service';
import { NotificationService } from '../../../notify.service';
import { HttpResponse } from '@angular/common/http';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'add-article',
  templateUrl: './add-article.component.html',
})
export class AddArticlePopup implements OnInit {
  @Input() data: any;
  readonly #modal = inject(NzModalRef);
  readonly nzModalData = inject(NZ_MODAL_DATA);
  REQUEST_URL_TYPE = '/type-material-editor';
  REQUEST_URL = '/materials';
  isLoading = false;
  title: any;
  typeId: any;
  description: any;
  listType: any[] = [];
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '5rem',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'no',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'open-sans', name: 'Open Sans' }, // Add Open Sans here
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };
  constructor(
    private formBuilder: FormBuilder,
    private dmService: DanhMucService,
    private notify: NotificationService
  ) {}
  ngOnInit(): void {
    this.getAllType();
    if (this.data) {
      this.title = this.data.title
      this.description = this.data.description
      this.typeId = this.data.type.id
    }
  }
  getAllType() {
    this.isLoading = true;
    this.dmService
      .get(this.REQUEST_URL_TYPE + '/get-all')
      .subscribe((res: HttpResponse<any>) => {
        if (res) {
          if (res.status === 200) {
            this.isLoading = false;
            this.listType = res.body;
          }
        }
      });
  }
  save() {
    const payload = {
      title: this.title,
      description: this.description,
      type: this.typeId,
    };
    if (!this.data) {
      this.dmService
        .postOption(payload, this.REQUEST_URL, '/create')
        .subscribe((res: HttpResponse<any>) => {
          if (res) {
            if (res.status == 201) {
              this.notify.success('Thêm mới bài viết thành công');
              this.#modal.close(true)
            }
          }
        });
    } else {
      this.dmService
        .putOption(payload, this.REQUEST_URL, '/update/' + this.data.id)
        .subscribe((res: HttpResponse<any>) => {
          if (res) {
            if (res.status == 200) {
              this.notify.success('Sửa bài viết thành công');
              this.#modal.close(true);
            }
          }
        });
    }
  }
}
