import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Catagory } from 'app/shared/models/catagory';
import { Inquiry } from 'app/shared/models/inquiry/inquiry';
import { Item } from 'app/shared/models/item';
import { Person } from 'app/shared/models/person';
import { CatagoryService } from 'app/shared/services/catagory/catagory.service';
import { InquiryService } from 'app/shared/services/inquiry/inquiry.service';

@Component({
  selector: 'app-inquiry-action',
  templateUrl: './inquiry-action.component.html',
  styleUrls: ['./inquiry-action.component.scss']
})
export class InquiryActionComponent implements OnInit {
  inquiry: Inquiry ;
  isLoadingResults = true;
  gotError = false;

  inquiryForm: FormGroup;
  catagories: Catagory[];
  MOBILE_PATTERN = /[0-9\+\-\ ]/;
  disableButton: true;
  constructor(public fb: FormBuilder, private catagoryService: CatagoryService, private inquiryService: InquiryService, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: Inquiry) { 
    this.isLoadingResults = true;
    this.catagoryService.getCatagories().subscribe(res=>{
      this.catagories = res;
    });
    this.isLoadingResults = false;
   
  }
  ngOnInit(): void {
    this.reactiveForm();
  }
  /* Reactive form */
  reactiveForm() {
    this.inquiryForm = this.fb.group({
      firstName: [""],
      lastName: [""],
      phoneNumber: [
        "",
        {
          validators: [
         
            Validators.pattern(this.MOBILE_PATTERN),
            Validators.maxLength(10),
            Validators.minLength(10),
          ],
        },
      ],
      email: ["", { validators: [Validators.email] }],
   
      catagory: [""],
      lostPlace: [""],
      lostDate: [""],
      detail: [""],
    });
  }
  itemdate(e) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
   
      if (this.inquiryForm.get("lostDate").value != null) {
        this.inquiryForm.get("lostDate").setValue(convertDate, {
          onlyself: true,
        });
      }
    }
    public errorHandling = (control: string, error: string) => {

        return this.inquiryForm.controls[control].hasError(error);
      
    };

    
  getPerson(
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string
  ): Person {
    let person: Person = {};
    if (firstName) person.firstName = firstName;
    if (lastName) person.lastName = lastName;
    if (phoneNumber) person.phoneNumber = phoneNumber;
    if (email) person.email = email;
    // console.log('person is '+person.firstName + person.lastName + person.phoneNumber + person.email);
    return person;
  }
  getItem(
    catagory: string,
    lostPlace: string,
    lostDate: string,
    detail: string
  ): Item {
    let item: Item = {};

    if (catagory) item.catagory = catagory;
    if (lostPlace) item.lostPlace = lostPlace;
    if (lostDate) {
      item.lostDate = new Date(lostDate);
    }
    if (detail) item.detail = detail;
    return item;
  }
  submitForm() {
    this.isLoadingResults = true;
    let inquiry: Inquiry = {
      item: null,
     
      

    };
    let item: Item;
    
    let owner: Person;
    owner = this.getPerson(
      this.inquiryForm.get("firstName").value,
      this.inquiryForm.get("lastName").value,
      this.inquiryForm.get("phoneNumber").value,
      this.inquiryForm.get("email").value
    );
    item = this.getItem(
      this.inquiryForm.get("catagory").value,
      this.inquiryForm.get("lostPlace").value,
      this.inquiryForm.get("lostDate").value,
      this.inquiryForm.get("detail").value
    );
    //  
  if(Object.keys(item).length > 0){

    inquiry.item = item;
  }else{
    delete inquiry.item;
  }
if(Object.keys(owner).length>0)
inquiry.owner = owner;
if(Object.keys(inquiry).length>0){
    this.inquiryService.updateInquiry(this.data.id, inquiry).subscribe(
      (res) => {
          this.inquiryForm.reset(),
          this.dialog.closeAll();
          (this.isLoadingResults = false);
        
      }
    );
  }
  this.isLoadingResults = false;
} 
  }

