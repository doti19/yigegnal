import { Component, NgZone, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatCheckboxChange } from "@angular/material/checkbox";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Catagory } from "app/shared/models/catagory";
import { FoundedItem } from "app/shared/models/founded_item/founded_item";
import { Inquiry } from "app/shared/models/inquiry/inquiry";
import { Item } from "app/shared/models/item";
import { Person } from "app/shared/models/person";
import { CatagoryService } from "app/shared/services/catagory/catagory.service";
import { InquiryService } from "app/shared/services/inquiry/inquiry.service";

@Component({
  selector: "app-add-inquiry-dialog",
  templateUrl: "./add-inquiry-dialog.component.html",
  styleUrls: ["./add-inquiry-dialog.component.scss"],
})
export class AddInquiryDialogComponent implements OnInit {
  ownerKnown: boolean = false;
  itemForm: FormGroup;
  founderForm: FormGroup;
  ownerForm: FormGroup;
  myForm: FormGroup;
  isLoadingResults = false;
  gotError = false;
  catagories: Catagory[];
  MOBILE_PATTERN = /[0-9\+\-\ ]/;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private dialog: MatDialog,
    private ngZone: NgZone,
    private inquiryService: InquiryService,
    private catagoryService: CatagoryService
  ) {
    this.isLoadingResults = true;
    this.catagoryService.getCatagories().subscribe((res) => {
      this.catagories = res;
    });
    this.isLoadingResults = false;
  }
  ngOnInit(): void {
    this.reactiveForm();
  }
  /* Reactive form */
  reactiveForm() {
    this.ownerForm = this.fb.group({
      firstName: ["", { validators: [Validators.required] }],
      lastName: ["", { validators: [Validators.required] }],
      phoneNumber: [
        "",
        {
          validators: [
            Validators.required,
            Validators.pattern(this.MOBILE_PATTERN),
            Validators.maxLength(10),
            Validators.minLength(10),
          ],
        },
      ],
      email: ["", { validators: [Validators.email] }],
    });
    // this.ownerForm.disable();
    this.itemForm = this.fb.group({
      catagory: ["", { validators: [Validators.required] }],
      lostPlace: ["", { validators: [Validators.required] }],
      lostDate: ["", { validators: [Validators.required] }],
      detail: [""],
    });
  }
  public tabIndex = 0;
  public nextTab() {
    const tabCount = 3;
    this.tabIndex = (this.tabIndex + 1) % tabCount;
    console.log(this.tabIndex);
  }

  nextForm() {
    this.nextTab();

    // console.log(this.itemForm.value);
  }
  /* Date */
  itemdate(e, field) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    if (field == "lostDate") {
      if (this.itemForm.get("lostDate").value != null) {
        this.itemForm.get("lostDate").setValue(convertDate, {
          onlyself: true,
        });
      }
    } 
  }

  // get item(){
  //   return {
  //   catagory: this.itemForm.get('catagory').value,
  //   lostPlace: this.itemForm.get('lostPlace').value,
  //   lostDate: this.itemForm.get('lostDate').value,
  //   detail: this.itemForm.get('detail').value,
  //   }
  // }

  // get founder(){
  //   return {
  //     firstName: this.founderForm.get('firstName').value,
  //     lastName: this.founderForm.get('lastName').value,
  //     phoneNumber: this.founderForm.get('phoneNumber').value,
  //     email: this.founderForm.get('email').value,
  //     foundedPlace: this.founderForm.get('foundedPlace').value,
  //     foundedDate: this.founderForm.get('foundedDate').value,
  //   }
  // }

  // get owner(){
  //   return {
  //     firstName: this.founderForm.get('firstName').value,
  //     lastName: this.founderForm.get('lastName').value,
  //     phoneNumber: this.founderForm.get('phoneNumber').value,
  //     email: this.founderForm.get('email').value,
  //   }
  // }

  /* Handle form errors in Angular 8 */
  public errorHandling = (control: string, error: string, form: string) => {
    if (form == "item") {
      return this.itemForm.controls[control].hasError(error);
    } else if (form == "owner") {
      return this.ownerForm.controls[control].hasError(error);
    }
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
      item: {},
     
      registeredBy: "change this later to the user"

    };
    let item: Item;
    
    let owner: Person;
    owner = this.getPerson(
      this.ownerForm.get("firstName").value,
      this.ownerForm.get("lastName").value,
      this.ownerForm.get("phoneNumber").value,
      this.ownerForm.get("email").value
    );
    item = this.getItem(
      this.itemForm.get("catagory").value,
      this.itemForm.get("lostPlace").value,
      this.itemForm.get("lostDate").value,
      this.itemForm.get("detail").value
    );
    //  
inquiry.item = item;
inquiry.owner = owner;
    console.log(inquiry);

    this.inquiryService.createInquiry(inquiry).subscribe(
      (res) => {
      
        this.itemForm.reset(),
          this.ownerForm.reset(),
          this.dialog.closeAll();
          (this.isLoadingResults = false);
        
      },
      (err) => {
        this.isLoadingResults = false;
      }
    );
  }
}
