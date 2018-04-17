import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Output, EventEmitter  } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.css']
})
export class FormTableComponent implements OnInit {
@Input()formData;
@Output()editForm=new EventEmitter();
@Output()editSelectedFLag=new EventEmitter();
@Output()index=new EventEmitter();
@Output()removedata=new EventEmitter();

editSelected:boolean;
// @Output() update: EventEmitter<any> = new EventEmitter<any>();
  constructor(private route:ActivatedRoute) { 

  //   this.route.params.subscribe(params => {
  //     console.log(params);}
  //   )
  }

  ngOnInit() {
  }

  editData(data){
    this.editSelected=true;
    let index=this.formData.indexOf(data);
    console.log("index",index)
    this.editForm.emit(this.formData[index]);
    this.editSelectedFLag.emit(this.editSelected);
    this.index.emit(index);
    // this.formData[index].firstName;
   console.log(this.formData);
  }


removeData(data){
console.log("data",data);
let index=this.formData.indexOf(data);
this.formData.splice(index,1)
// this.removedata.emit(this.formData);
}
}
