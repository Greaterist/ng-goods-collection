import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-date-control',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './date-control.component.html',
  styleUrl: './date-control.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateControlComponent),
      multi: true,
    },
  ],
})
export class DateControlComponent {
  protected months?: number;
  protected years?: string;

  public onChange: any = () => {};
  public onTouched: any = () => {};

  public set output(value: number) {
    this.onChange(value);
  }

  public writeValue(value: any): void {
    this.months = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public handleInputMonths(event: Event) {
    this.months = Number((event.target as HTMLInputElement).value);
    this.onChange(this.months);
    this.calculateYears();
  }

  private calculateYears() {
    this.years = 'Годы:' + Math.floor(this.months! / 12).toString() + ' Месяцы:' + (this.months! % 12);
  }
}
