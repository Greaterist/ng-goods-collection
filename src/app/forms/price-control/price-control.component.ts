import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-price-control',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './price-control.component.html',
  styleUrl: './price-control.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PriceControlComponent),
      multi: true,
    },
  ],
})
export class PriceControlComponent {
  protected price: string = ''
  public output?: number
  public onChange: any = () => {};
  public onTouched: any = () => {};

  public writeValue(value: any): void {
    this.price = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }


  public  onInput(event: Event): void {
    const savedInput: string = (event.target as HTMLInputElement).value
    const output: number = parseFloat(savedInput.replace(/[^0-9.]/g, ''));
    this.price = output.toString()
    this.onChange(output);
  }
}
