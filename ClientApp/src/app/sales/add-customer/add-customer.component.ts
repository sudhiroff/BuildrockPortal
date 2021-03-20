import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import { SalesService } from '../sales.service';
import { ctrls } from './customer.field';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  @ViewChild('stepper') stepper;
  public form:FormGroup;
  public formCtrls:Array<any>=ctrls;
  public mode:String="Add";
  public customerId;
  public customerModel:Object;
  constructor(private fb:FormBuilder,private salesService:SalesService,
    private sharedSvc:SharedService,private router:Router,private route:ActivatedRoute) {
    if(router.url.includes("view-customer")){
      this.mode="View";
    }
    if(router.url.includes("edit-customer")){
      this.mode="Update";
    }
 }

  ngOnInit() {
    this.prepareForm();
    if (this.mode == "View" || this.mode == "Update") {
      this.route.params.subscribe(res => {
        this.customerId = res.id;
        this.loadCustomerData();
      });     
    }
  }
  loadCustomerData() {
    this.salesService.CustomerById(this.customerId)
    .subscribe((response:any)=>{
      this.customerModel=response;
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
    let obj = {};
    this.formCtrls.forEach(sec => { sec['items'].forEach(x => { obj[x.id] = '' }) });
    this.form=this.fb.group(obj);
    this.formCtrls.forEach(sec => {
      sec['items'].forEach(x => {
        if (x.isRequired) {
          this.form.controls[x.id].setValidators(Validators.required);
        }
        if (x.isEmail) {
          this.form.controls[x.id].setValidators(Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"));
        }
      })
    });
  }

  public saveCustomer(){
    if(this.form.valid){
      //this.sharedSvc.IsProgress(true);
      this.salesService.addCustomer(this.form.value)
      .subscribe(res=>{
        //this.sharedSvc.IsProgress(false);
        this.router.navigateByUrl('/sales/customers');
      },(ex)=>{
        //this.sharedSvc.IsProgress(false);
        console.log(ex);
      })
    }
  }

  public updateCustomer(){
    if(this.form.valid){
      //this.sharedSvc.IsProgress(true);
      let form=this.form.value;
      for(let x in form){
        this.customerModel[x]=form[x];
      }
      console.log(this.customerModel);
      this.salesService.updateCustomer(this.customerId,this.customerModel)
      .subscribe(res=>{
        //this.sharedSvc.IsProgress(false);
        this.router.navigateByUrl('/sales/customers');
      },(ex)=>{
       // this.sharedSvc.IsProgress(false);
        console.log(ex);
      })
    }
  }

  onNext(step: string) {
    if (this.mode != 'View') {
      if (step == 'step1') {
        let allValid = true;
        this.formCtrls[0].items.forEach(element => {
          if (this.form.controls[element.id].invalid) {
            allValid = false;
          }
        });
        allValid ? this.stepper.next() : false
      }
    } else {
      this.stepper.next();
    }
  }
}
