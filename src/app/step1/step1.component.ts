import { Component, ElementRef, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {
  @ViewChild('f') signupForm: any;
  defaultQuestion = 'pet';
 
  genders = ['Male','Female'];
 user ={
   email:'',
   password:'',
   birthday:'',
   gender:''
 }
 submitted = false;
 categories:any[] =[];
 loadedFeature = '';
 productCatName:any;
 // key:any='';
 constructor(private product_service: RegistrationService) { }
 @Output() featureSelected = new EventEmitter<string>();
 ngOnInit() {
   
 

 }
   onSubmit() {
     this.submitted = true;
     console.log(this.signupForm);
     
     this.user.email = this.signupForm.value.email;     
     this.user.password = this.signupForm.value.password;
     this.user.birthday = this.signupForm.value.birthday;
     this.user.gender = this.signupForm.value.gender;    
     this.signupForm.reset();
     const data = this.product_service.userDataInfo.push(this.signupForm.value);
     console.log(data);
     
   
   }
 }
