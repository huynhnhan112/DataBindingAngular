import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BTDataBindingComponent } from './BaiTapDataBinding.component';



@NgModule({
    declarations: [BTDataBindingComponent],
    imports: [CommonModule, FormsModule],
    exports: [BTDataBindingComponent],
})
export class BTDataBindingModule { }
