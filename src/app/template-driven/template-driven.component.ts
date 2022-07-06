import { Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { RegistrationService } from '../registration.service';
@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  @ViewChild('f') signupForm: any; 
  @ViewChild('u') UpdateForm: any; 
 @Output() featureSelected = new EventEmitter<string>();
  genders = ['Male','Female'];
  hobbies = ['Cooking','Travelling','Dancing','Reading','Writting','Drawing'];
  code = ['+91', '+257', '+67'];
  qualification = ['MBA', 'B.Tech', 'BBA', 'Bsc', 'BCom', 'MBBS'];
  profession = ['Student', 'Employee'];
  visible = false;
  visible2 = false;
  editdata = false;
  fetchData:any = "";
  valueId="";
  editName ='';
  editEmail ='';
  editGender='';
  editPhone='';
 user ={
   email:'',
   password:'',
   birthday:'',
   gender:'',
   image:'',
   hobbies:'',
   phone:'',
   qualification:'',
   profession:'',
   description:''
 }
 submitted = false;
 public person2: any[] = [{
  id: 1,
  name: '',
  phone: ''
}];

 constructor(private registration: RegistrationService) { }

  ngOnInit(): void {
    this.fetchData = this.registration.Onget();
    console.log(this.fetchData);
    
  }
  onSubmit() {
    console.log("submitted");
    
    this.submitted = true;
    console.log(this.signupForm);
   
    this.user.email = this.signupForm.value.email;     
    this.user.password = this.signupForm.value.password;
    this.user.birthday = this.signupForm.value.birthday;
    this.user.gender = this.signupForm.value.gender;  
    this.user.image = this.signupForm.value.image;     
    this.user.hobbies = this.signupForm.value.hobbies;
    this.user.phone = this.signupForm.value.phone; 
    this.user.qualification = this.signupForm.value.qualification;     
    this.user.profession = this.signupForm.value.profession;
    this.user.description = this.signupForm.value.description;  
    this.registration.userDataInfo.push(this.signupForm.value);
    console.log(this.signupForm);   
    this.signupForm.reset();
   
    
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
  onupdate(data) {
    this.editdata = true;
    this.visible2 = false;
    // console.log(data.id);
    this.valueId = data;
    this.editName = data.name;
    this.editEmail = data.Email;
    this.editGender = data.Gender;
    this.editPhone = data.PhoneNumber;
    
  }
  onDelete(id) {
    this.registration.userData.splice(this.registration.userData.indexOf(id), 1);
    console.log("deleted");
  }
  onUpdate() {   
    console.log(this.UpdateForm);
    
   }

}
