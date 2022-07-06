import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {
  @ViewChild('f') signupForm: any;
  qualification = ['MBA', 'B.Tech', 'BBA', 'Bsc', 'BCom', 'MBBS'];
  profession = ['Student', 'Employee'];
  user ={
    qualification:'',
    profession:'',
    description:'',

  }
  submitted = false;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.signupForm);
    
    this.user.qualification = this.signupForm.value.qualification;     
    this.user.profession = this.signupForm.value.profession;
    this.user.description = this.signupForm.value.description;  
    this.signupForm.reset();
  }
}
