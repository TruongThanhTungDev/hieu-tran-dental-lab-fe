import { Component, OnInit } from "@angular/core";
import { DanhMucService } from "../../danhmuc.service";
import moment from 'moment'
import { HttpResponse } from "@angular/common/http";
import { ActivatedRoute, Route } from "@angular/router";
import { NotificationService } from "../../notify.service";
@Component({
  selector: 'tra-cuu-bao-hanh',
  templateUrl: './tra-cuu-bao-hanh.component.html',
})
export class TraCuuBaoHanh implements OnInit {
  code: any;
  data: any;
  REQUEST_URL = '/products';
  constructor(
    private dmService: DanhMucService,
    private route: ActivatedRoute,
    private notify: NotificationService
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      if (params.code) {
        this.code = params.code;
        this.search();
      }
    });
  }
  search() {
    this.dmService
      .get(this.REQUEST_URL + '/search-by-code?code=' + this.code)
      .subscribe(
        (res: HttpResponse<any>) => {
          if (res.status === 200) {
            this.data = res.body;
          } else {
            this.data = null;
          }
        },
        (err) => {
          // this.notify.error(err.error.message)
          this.data = null;
        }
      );
  }
  formatDate(date: any) {
    return date ? moment(date, 'YYYYMMDDHHmmss').format('DD/MM/YYYY') : '';
  }
}