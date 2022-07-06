import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders = ['Male','Female'];
  hobbies = ['Cooking','Travelling','Dancing','Reading','Writting','Drawing'];
  code = ['+91', '+257', '+67'];
  qualification = ['MBA', 'B.Tech', 'BBA', 'Bsc', 'BCom', 'MBBS'];
  profession = ['Student', 'Employee'];
  signupForm: FormGroup;
  UpdateForm: FormGroup;
  visible=false;
  visible2 = false;
  editdata= false;
  dataId="";
  fetchData:any='';
  valueId="";
  name="";
  email='';
  phone='';
  gender='';
  public person2: any[] = [{
    id: 1,
    name: '',
    phone: ''
  }];
  editName ='';
  editEmail ='';
  editGender='';
  editPhone='';
  constructor(private registration: RegistrationService) { }
  ngOnInit() {
   this.signupForm = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, Validators.required),
    'gender': new FormControl('Female', Validators.required),
    'birthday': new FormControl(null, Validators.required ),
    'image': new FormControl(null, Validators.required),
    'hobbies': new FormControl(null, Validators.required ),
    'phone': new FormControl(null, Validators.required),
    'qualification': new FormControl(null, Validators.required ),
    'profession': new FormControl(null, Validators.required),
    'description': new FormControl(null, Validators.required )
   });   
   this.UpdateForm = new FormGroup({
    'name': new FormControl(null, Validators.required),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'gender': new FormControl(null, [Validators.required]),
    'phone': new FormControl(null, Validators.required)
   });
   this.fetchData = this.registration.Onget();
  }
  onSubmit() {
    console.log(this.signupForm);
    
  }
  showData() {
    this.visible = true;
    //  this.fetchData = this.registration.onget();
    // console.log(this.fetchData);
  }
  addAddress() {
    this.person2.push({
      id: this.person2.length + 1,
      address: '',
      street: '',
      city: '',
      country: ''
    });
  }

  removeAddress(i: number) {
    this.person2.splice(i, 1);
  }

  logValue() {
    console.log(this.person2);
  }
  editData() {
    this.visible2 = true;
    this.editdata = false;
  }
  
  onDelete(id) {
    this.registration.userData.splice(this.registration.userData.indexOf(id), 1);
    console.log("deleted");
    
  }
  onupdate(data) {
    this.editdata = true;
    this.visible2 = false;
    // console.log(data.id);
    this.valueId = data;
    this.dataId = data.id;
    this.editName = data.name;
    this.editEmail = data.Email;
    this.editGender = data.Gender;
    this.editPhone = data.PhoneNumber;
    
  }
  onUpdate(data) {  
    console.log(data.id);
      console.log(this.dataId);
      
    const dataform = this.registration.userData.findIndex((obj => obj.id == this.dataId));
    // console.log(dataform);
    if(this.dataId === data.id){
        if((this.name.length !== 0)){
        
          this.fetchData[dataform].name = this.name;
        }else{
          this.fetchData[dataform].name = data.name;
        }
        if((this.email.length !== 0)){
        
          this.fetchData[dataform].Email = this.email;
        }else{
          this.fetchData[dataform].Email = data.Email;
        }
        if((this.gender.length !== 0)){       
          this.fetchData[dataform].Gender = this.gender;
        }else{
          this.fetchData[dataform].Gender = data.Gender;
        }
        if((this.phone.length !== 0)){
          this.fetchData[dataform].PhoneNumber = this.phone;
        }else{
          this.fetchData[dataform].PhoneNumber = data.PhoneNumber; 
        }      
  }
    // console.log(this.fetchData[dataform].name);
   
    this.visible2 = true;
    this.editdata = false;
  }
  getName(event:Event) {
    this.name = (<HTMLInputElement>event.target).value;
  }
  getEmail(event:Event) {
    // console.log(event);
    this.email = (<HTMLInputElement>event.target).value;
  }
  getGender(event:Event) {
    this.gender = (<HTMLInputElement>event.target).value;
  }
  getPhone(event:Event) {
    this.phone = (<HTMLInputElement>event.target).value;
  }
}
