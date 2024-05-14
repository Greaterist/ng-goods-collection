import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PriceControlComponent } from 'src/app/forms/price-control/price-control.component';
import { DateControlComponent } from 'src/app/forms/date-control/date-control.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-goods',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PriceControlComponent,
    DateControlComponent,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './goods.component.html',
  styleUrl: './goods.component.scss',
})
export class GoodsComponent {
  private readonly NUMERIC_REGEX = /^[0-9]*$/;

  public goodsCollection!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  private ngOnInit(): void {
    this.goodsCollection = this.formBuilder.group({
      goods: this.formBuilder.array([this.createGoodsFormGroup()]),
    });
  }

  public addGoods(): void {
    this.getGoodsArray().push(this.createGoodsFormGroup());
  }

  public removeGoods(index: number): void {
    this.getGoodsArray().removeAt(index);
  }

  protected getGoodsArray(): FormArray {
    return this.goodsCollection.get('goods') as FormArray;
  }

  private createGoodsFormGroup(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.pattern(this.NUMERIC_REGEX)]],
      months: ['', [Validators.required, Validators.pattern(this.NUMERIC_REGEX)]],
    });
  }

  public logResult() {
    console.log(this.goodsCollection);
  }
}
