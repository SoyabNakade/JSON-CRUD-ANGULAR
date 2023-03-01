import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  formgroup: any;
  editedid:any;
  datas: any = [] = []  ;

  constructor(private api: ApiService) {
  }

  load() {
    this.formgroup = new FormGroup({
      id:new FormControl(""),
      name: new FormControl(""),
      email: new FormControl(""),
      mobileno: new FormControl("")
    });
    this.api.get("posts").subscribe((result) => {
      this.datas = result;

    })
  }

  ngOnInit(): void {
    this.load();
  }


  submit(data: any) {
    if(data.id == ""){
      this.api.post("posts", data).subscribe((result: any) => {
        this.load();
      })
    }
      else{
        this.api.put("posts/"+this.editedid, data).subscribe((result: any) => {
          this.load();
        });
        this.load();
      }
    
    }
      // console.log(data);
      
  deleteData(data: any) {

    if (confirm("Sure To Delete")) {
      this.api.delete("posts", data).subscribe((result: any) => {
        this.load()
      })
    }
  }

  editData(data: any) {
    // console.log(data);
    this.editedid = data.id;
    console.log(this.editedid);

    this.formgroup = new FormGroup({
      id: new FormControl(data.id),
      name: new FormControl(data.name),
      email: new FormControl(data.email),
      mobileno: new FormControl(data.mobileno)
    });
  }

  }
 

