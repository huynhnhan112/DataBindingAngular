import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-databinding',
    template: `
        <div class="container">
            <h1 class="text-center">Register Form</h1>
            <div class="form-group">
                <h4><b>Email: </b></h4>
                <input class="form-control" [(ngModel)]="email"  />
            </div>
            <div class="form-group">
                <h4><b>FullName:</b> </h4>
                <input class="form-control" #tagInput />
            </div>
            <div class="form-group">
                <button class="btn btn-success" (click)="changeFullname(tagInput.value)">Submit</button>
            </div>
            <div class="mt-5">
                <h5><b>Email:</b> {{email}}</h5>
                <h5><b>FullName:</b> {{fullname}}</h5>
            </div>
        </div>
    `
})

export class BTDataBindingComponent implements OnInit {
    email:string = 'Dùng [(ngModel)]';
    fullname:string = 'Dùng event binding';

    changeFullname(newFullname:string) {
        this.fullname = newFullname
    }
    constructor() { }

    ngOnInit() { }
}