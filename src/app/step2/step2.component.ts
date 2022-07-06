import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {
  @ViewChild('f') signupForm: any;
  hobbies = ['Cooking','Travelling','Dancing','Reading','Writting','Drawing'];
  code = ['+91', '+257', '+67']
  user ={
    image:'',
    hobbies:'',
    phone:'',

  }
  submitted = false;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.signupForm);
    
    this.user.image = this.signupForm.value.image;     
    this.user.hobbies = this.signupForm.value.hobbies;
    this.user.phone = this.signupForm.value.phone;  
    this.signupForm.reset();
  }
}
