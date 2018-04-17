import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
 dta;
 index;
 editselected:boolean=false;
 formArray:any[]=[];
 eventObj={
  firstName:"",lastName:"",email:"",contactNumber:"",dropdown:[""]
 };
 valueArray:any=[{
   firstName:"Abc",lastName:"Lorem",email:"abc@domain.com",contactNumber:"1234567890",dropdown:["Active"]
 },
 {
  firstName:"Xyz",lastName:"Lorem",email:"xyz@domain.com",contactNumber:"1234567890",dropdown:["InActive"]
}

];
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 
  status:any=[
    {id:1, method:'Active'},
    {id:2, method:'InActive'}
  ];
 
  constructor(private router:Router) { }

  ngOnInit() {
  }
  editFormDetails(event){
   console.log("event=== ",event);
   this.eventObj.firstName=event.firstName;
   this.eventObj.lastName=event.lastName;
   this.eventObj.email=event.email;
   this.eventObj.contactNumber=event.contactNumber;
   this.eventObj.dropdown=event.dropdown;
  }
  submit(f){
   this.formArray=f.form.value;
   if(this.editselected==true){
    this.valueArray[this.index]=this.formArray;
    console.log("Edited data",this.valueArray[this.index]);
   }
   else{
    
    this.valueArray.push(this.formArray);
    console.log("valueArray",this.valueArray);
   }
   this.editselected=false;
   this.eventObj={
    firstName:"",lastName:"",email:"",contactNumber:"",dropdown:[""]
   }
  // console.log("this.data",this.dta);
  //  this.router.navigate(['/new']);
  }
  flagSelected(event){
    this.editselected=event;
  }
  indexSelected(event){
   this.index=event;
  }
  // Remove(event){
  //   console.log("delete",event);
  //   // this.eventObj={
  //   //   firstName:"",lastName:"",email:"",contactNumber:"",dropdown:[""]
  //   //  }
  // }
}
