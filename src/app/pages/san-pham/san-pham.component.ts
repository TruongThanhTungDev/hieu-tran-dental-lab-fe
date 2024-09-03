import { Component, OnInit } from "@angular/core";
import { DanhMucService } from "../../danhmuc.service";
import { HttpResponse } from "@angular/common/http";

@Component({
  selector: 'san-pham',
  templateUrl: './san-pham.component.html',
})
export class SanPhamComponent implements OnInit {
  isLoading = false
  listData: any[] = [];
  content: any
  REQUEST_URL = '/type-material-editor';
  REQUEST_URL_MATERIAL = '/materials'
  constructor(private dmService: DanhMucService) { }
  ngOnInit(): void {
    this.getData()
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
  getDataContentArticle(id: any) {
    this.dmService
      .get(this.REQUEST_URL_MATERIAL + '/detail/' + id)
      .subscribe((res: HttpResponse<any>) => {
        if (res) {
          if (res.status === 200) {
            this.isLoading = false;
            this.content = res.body;
          }
        }
      });
  }
}