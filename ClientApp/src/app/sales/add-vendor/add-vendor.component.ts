import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import { SalesService } from '../sales.service';
import { ctrls } from './vendor.field';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {
  @ViewChild('stepper') stepper;
  public form:FormGroup;
  public formCtrls:Array<any>=ctrls;
  public mode:String="Add";
  public vendorId;
  public vendorModel:Object;
  constructor(private fb:FormBuilder,private salesService:SalesService,
    private sharedSvc:SharedService,private router:Router,private route:ActivatedRoute) {
    if(router.url.includes("view-vendor")){
      this.mode="View";
    }
    if(router.url.includes("edit-vendor")){
      this.mode="Update";
    }
 }

  ngOnInit() {
    this.prepareForm();
    if (this.mode == "View" || this.mode == "Update") {
      this.route.params.subscribe(res => {
        this.vendorId = res.id;
        this.loadVendorData();
      });     
    }
  }
  loadVendorData() {
    this.salesService.VendorById(this.vendorId)
    .subscribe((response:any)=>{
      this.vendorModel=response;
      this.formCtrls.forEach(sec=>{
        sec['items'].forEach(ctrl => {
          this.form.controls[ctrl.id].setValue(response[ctrl.id]);
          if(this.mode=='View'){
            this.form.disable();
          }
        });       
     })
    });
  }
  prepareForm() {
    let obj={};
    this.formCtrls.forEach(sec=>{
       sec['items'].forEach(x => {
         if(x.isRequired){
          obj[x.id]=['',[Validators.required]]
         }else{
          obj[x.id]='';
         }         
       });       
    });
    this.form=this.fb.group(obj);
  }

  public saveCustomer(){
    if(this.form.valid){
      //this.sharedSvc.IsProgress(true);
      this.salesService.addVendor(this.form.value)
      .subscribe(res=>{
       // this.sharedSvc.IsProgress(false);
        this.router.navigateByUrl('/sales/vendors');
      },(ex)=>{
       // this.sharedSvc.IsProgress(false);
        console.log(ex);
      })
    }
  }

  public updateCustomer(){
    if(this.form.valid){
     // this.sharedSvc.IsProgress(true);
      let form=this.form.value;
      for(let x in form){
        this.vendorModel[x]=form[x];
      }
      //console.log(this.vendorModel);
      this.salesService.updateVendor(this.vendorId,this.vendorModel)
      .subscribe(res=>{
       // this.sharedSvc.IsProgress(false);
        this.router.navigateByUrl('/sales/vendors');
      },(ex)=>{
      //  this.sharedSvc.IsProgress(false);
        console.log(ex);
      })
    }
  }

  onNext(step: string) {
    if (this.mode != 'View') {
      if (step == 'step1') {
        if (this.form.controls['VendorName'].valid
          && this.form.controls['VendorPhone'].valid
          && this.form.controls['ContactPersonName'].valid
          && this.form.controls['ContactPersonPhone'].valid)
          this.stepper.next();
      }
    } else {
      this.stepper.next();
    }
  }

}
