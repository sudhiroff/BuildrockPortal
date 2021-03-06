import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { SalesService } from 'src/app/sales/sales.service';
import { SharedService } from 'src/app/shared/shared.service';
import { ctrls } from './item.ctrl';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  public form:FormGroup;
  public formCtrls:Array<any>=ctrls;
  public mode:String="Add";
  public Id;
  public Model:Object;
  constructor(private fb:FormBuilder,private sharedSvc:SharedService,
    private router:Router,private route:ActivatedRoute,private _snackBar: MatSnackBar) {
    if(router.url.includes("view-item")){
      this.mode="View";
    }
    if(router.url.includes("edit-item")){
      this.mode="Update";
    }
 }

  ngOnInit() {
    this.prepareForm();
    if (this.mode == "View" || this.mode == "Update") {
      this.route.params.subscribe(res => {
        this.Id = res.Id;
        console.log(this.Id);
        this.loadData();
      });     
    }
  }
  loadData() {
    this.sharedSvc.ItemById(this.Id)
      .subscribe((response: any) => {
        this.Model = response;
        this.formCtrls.forEach(sec => {
          this.form.controls[sec.id].setValue(response[sec.id]);
          if (this.mode == 'View') {
            this.form.disable();
          }
        })
      });
  }
  prepareForm() {
    let obj={};
    this.formCtrls.forEach(x => {
      if (x.isRequired) {
        obj[x.id] = ['', [Validators.required]]
      }
      if(x.isNumeric){
        obj[x.id] = ['', [Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
      } else {
        obj[x.id] = '';
      }
    });
    this.form=this.fb.group(obj);
  }

  public save(){
    if(this.form.valid){
      this.sharedSvc.IsProgress(true);
      let payload=this.form.value;
      payload['SellingPrice']=parseInt(payload['SellingPrice']);
      payload['CostPrice']=parseInt(payload['CostPrice']);
      payload['Gst']=parseInt(payload['Gst']);
      payload['Igst']=parseInt(payload['Igst']);
      this.sharedSvc.addItem(payload)
      .subscribe(res=>{
        this.sharedSvc.IsProgress(false);
        this.router.navigateByUrl('/logistic/items');
      },(ex)=>{
        this.sharedSvc.IsProgress(false);
        console.log(ex);
        this.openSnackBar(ex['message'],'');
      })
    }
  }

  public update(){
    if(this.form.valid){
      this.sharedSvc.IsProgress(true);
      let form=this.form.value;
      for(let x in form){
        this.Model[x]=form[x];
      }
      this.Model['SellingPrice']=parseInt(this.Model['SellingPrice']);
      this.Model['CostPrice']=parseInt(this.Model['CostPrice']);
      this.Model['Gst']=parseInt(this.Model['Gst']);
      this.Model['Igst']=parseInt(this.Model['Igst']);
      console.log(this.Model);
      this.sharedSvc.updateItem(this.Id,this.Model)
      .subscribe(res=>{
        this.sharedSvc.IsProgress(false);
        this.router.navigateByUrl('/logistic/items');
      },(ex)=>{
        this.sharedSvc.IsProgress(false);
        console.log(ex);
      })
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
    });
  }
}
