import { Component, inject, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NZ_MODAL_DATA, NzModalRef } from "ng-zorro-antd/modal";
import { DanhMucService } from "../../../danhmuc.service";
import moment from "moment";
import { HttpResponse } from "@angular/common/http";
import { NotificationService } from "../../../notify.service";

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
})
export class AddProductPopup implements OnInit {
  @Input() data: any
  readonly #modal = inject(NzModalRef);
  readonly nzModalData = inject(NZ_MODAL_DATA);
  productInformation: FormGroup;
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
  isLoading = false;
  isDisable = true
  count = 0;
  REQUEST_URL = '/products';
  constructor(
    private formBuilder: FormBuilder,
    private dmService: DanhMucService,
    private notify: NotificationService
  ) {
    this.productInformation = this.formBuilder.group({
      code: [
        { value: 'XX-0000000000', disabled: this.isDisable },
        Validators.required,
      ],
      patientName: ['', Validators.required],
      sex: [0],
      doctorClinic: [''],
      numberOfTeeth: [''],
      material: ['', Validators.required],
      startDate: [null],
      endDate: [null],
    });
  }
  ngOnInit(): void {
    if (this.data) {
      this.productInformation.patchValue({
        code: this.data.code,
        patientName: this.data.patientName,
        sex: 0,
        doctorClinic: this.data.doctorClinic,
        numberOfTeeth: this.data.numberOfTeeth,
        material: this.data.material,
        startDate: moment(this.data.startDate, 'YYYYMMDDHHmmss').toDate(),
        endDate: moment(this.data.endDate, 'YYYYMMDDHHmmss').toDate(),
      });
    } else {
      this.countProduct();
    }
  }
  submitForm() {
    if (!this.productInformation.value.material) {
      this.notify.warning('Vui lòng chọn vật liệu');
      return
    }
    this.isLoading = true;
    const payload = {
      ...this.productInformation.getRawValue(),
      startDate: this.productInformation.value.startDate
        ? parseInt(
            moment(this.productInformation.value.startDate).format(
              'YYYYMMDD000000'
            )
          )
        : '',
      endDate: this.productInformation.value.endDate
        ? parseInt(
            moment(this.productInformation.value.endDate).format(
              'YYYYMMDD000000'
            )
          )
        : '',
    };
    if (!this.data) {
      this.dmService.postOption(payload, this.REQUEST_URL, '/create').subscribe(
        (res: HttpResponse<any>) => {
          if (res.status === 201) {
            this.active();
            this.isLoading = false;
            this.notify.success('Thêm mới thành công');
          } else {
            this.notify.error('Thêm mới thất bại');
          }
        },
        (err) => {
          this.notify.error('Thêm mới thất bại');
          this.isLoading = false;
        }
      );
    } else {
      this.dmService.putOption(payload, this.REQUEST_URL, '/update/' + this.data.id).subscribe(
        (res: HttpResponse<any>) => {
          if (res.status === 200) {
            this.active();
            this.isLoading = false;
            this.notify.success('Cập nhật thành công');
          } else {
            this.notify.error('Cập nhật thất bại');
          }
        },
        (err) => {
          this.notify.error('Cập nhật thất bại');
          this.isLoading = false;
        }
      );
    }
  }
  changeMaterial(event: any) {
    let codeSplit = this.productInformation.getRawValue().code.split('-');
    const textUpcase = event.slice(0, 2).toUpperCase()
    codeSplit[0] = textUpcase;
    const result = codeSplit.map((item: any) => item).join('-');
    this.productInformation.patchValue({
      code: result,
    });
  }
  countProduct() {
    this.dmService
      .get(this.REQUEST_URL + '/count-all-product')
      .subscribe((res: HttpResponse<any>) => {
        if (res.status === 200) {
          this.count = res.body;
          this.processNumberCode(this.count + 1);
        }
      });
  }
  processNumberCode(count: number) {
    const numberLength = count.toString().length
    let codeSplit = this.productInformation.getRawValue().code.split('-');
    let numberRegix = codeSplit[1];
    numberRegix = numberRegix.slice(0, 10 - numberLength);
    numberRegix += count.toString();
    codeSplit[1] = numberRegix;
    const result = codeSplit.map((item: any) => item).join('-');
    this.productInformation.patchValue({
      code: result,
    });
  }
  closeModal() {
    this.#modal.close(false)
  }
  active() {
    this.#modal.close(true)
  }
}