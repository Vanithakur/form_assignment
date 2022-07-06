import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  userData:any[] = [];

  constructor() { }
  Onget(){
    return this.userData = [
      {
        "id" : 1,
        "name": "Shivani",
        "Email": "shivani@gmail.com",
        "Gender": "Male",
        "DOB": "DD-MM-YYYY",
        "Profile Pic" : "xyz.jpg",
        "Hobiies": ["singing","Cooking","Reading"],
        "PhoneNumber": 1982635489,
        "Qualifiation":["Graduation","Post-Graduate"],
        "Profession": "Working",
        "Shortdescription" : "descriptionabout ur self",
        "Contact Person" : [{
                            "name":" contact person1",
                            "phone Number" : 145369875
               },
               { 
               "name":" contact person2",
                            "phone Number" : 145369875
                            }]
       
      },
      {
        "id" : 2,
        "name": "Nishi",
        "Email": "nishi@gmail.com",
        "Gender": "Female",
        "DOB": "DD-MM-YYYY",
        "Profile Pic" : "xyz.jpg",
        "Hobiies":["singing","Cooking","Reading"],
        "PhoneNumber": 1982635489,
        "Qualifiation":["Graduation","Post-Graduate"],
        "Profession": "Working",
        "Shortdescription" : "descriptionabout ur self",
        "Contact Person" : [{
                            "name":" contact person1",
                            "phone Number" : 2145369875
               },
               { 
               "name":" contact person2",
                            "phone Number" : 2145369875
                }]
       
      }
    ];

  }
  userDataInfo:any[] = [];
  onget(){
   this.userDataInfo;
   console.log(this.userDataInfo);
   
  }

}
