import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Item } from 'app/shared/models/item';
import { FoundedItem } from 'app/shared/models/founded_item/founded_item';
import { Person } from 'app/shared/models/person';
import { FoundedItemService } from 'app/shared/services/founded-item/founded-item.service';
import { Router } from '@angular/router';
import { CatagoryService } from 'app/shared/services/catagory/catagory.service';
import { Catagory } from 'app/shared/models/catagory';

export interface Subject{
  name: string;
}

@Component({
  selector: 'app-add-found-item',
  templateUrl: './add-found-item.component.html',
  styleUrls: ['./add-found-item.component.scss']
})
export class AddFoundItemComponent implements OnInit {
  Roles: any = ['Admin', 'Author', 'Reader'];
  checked = true;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  ownerKnown:boolean = false;
  itemForm : FormGroup;
  founderForm: FormGroup;
  ownerForm: FormGroup;
  myForm: FormGroup;
 isLoadingResults = false;
 gotError = false;

  @ViewChild('chipList', { static: true }) chipList: any;
  // @ViewChild(MatDatepicker)
  // picker: MatDatepicker<D>;
  catagories: Catagory[];

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  MOBILE_PATTERN = /[0-9\+\-\ ]/;

  constructor(public fb: FormBuilder, private router: Router,  private ngZone: NgZone, 
    private foundedItemService: FoundedItemService, private catagoryService: CatagoryService) {
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
    this.ownerForm = this.fb.group({
      firstName1: ['',{validators: [Validators.required]}],
      lastName1: ['',{validators: [Validators.pattern(this.MOBILE_PATTERN), Validators.maxLength(10), Validators.minLength(10)]}],
      phoneNumber1: [''],
      email1: ['',{validators: [Validators.email]} ],
    });
    this.ownerForm.disable();
    this.founderForm = this.fb.group({
      firstName: ['', {validators: [Validators.required]}],
      lastName: ['', {validators: [Validators.required]}],
      phoneNumber: ['', {validators: [Validators.required, Validators.pattern(this.MOBILE_PATTERN), Validators.maxLength(10), Validators.minLength(10)]}],
      email: ['', {validators: [Validators.email]}],
      foundedPlace: ['', {validators: [Validators.required]}],
      foundedDate:['', {validators: [Validators.required]}]
      // catagory: ['', {validators: [Validators.required]}],
      // lostPlace: [''],
      // lostDate: [''],
      // detail: [''],
    });
    this.itemForm = this.fb.group({
      catagory: ['', {validators: [Validators.required]}],
      lostPlace: [''],
      lostDate: [''],
      detail: [''],
    });
    
  }
  public tabIndex = 0;
public nextTab(){
  const tabCount = 4;
  this.tabIndex = (this.tabIndex + 1) % tabCount;
  console.log(this.tabIndex);
}

isownerKnown(ob: MatCheckboxChange){
  console.log(ob.checked + "and " + this.ownerKnown);
 ob.checked?  this.ownerForm.enable():this.ownerForm.disable();
}

  nextForm(){
this.nextTab();

    // console.log(this.itemForm.value);
  }
  /* Date */
  itemdate(e, field) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    if(field == 'lostDate'){
    if(this.itemForm.get('lostDate').value != null){
      this.itemForm.get('lostDate').setValue(convertDate, {
        onlyself: true,
      });

    } 
  } else if(field == 'foundedDate'){
    if(this.founderForm.get('foundedDate').value != null){
      this.founderForm.get('foundedDate').setValue(convertDate, {
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
    if(form=='item'){
      return this.itemForm.controls[control].hasError(error);
    }else if(form == 'founder'){
      return this.founderForm.controls[control].hasError(error);
    }else if (form =='owner'){
      return this.ownerForm.controls[control].hasError(error);
    }
    
  }

  getPerson(firstName:string, lastName: string, phoneNumber: string, email: string): Person{
    let person: Person = {};
    if(firstName) person.firstName = firstName;
    if(lastName) person.lastName = lastName;
    if(phoneNumber) person.phoneNumber = phoneNumber;
    if(email) person.email = email;
    // console.log('person is '+person.firstName + person.lastName + person.phoneNumber);
    return person;
  }
  getItem(catagory: string, lostPlace: string, lostDate: string, detail: string): Item{
    let item: Item = {};
    
    if(catagory) item.catagory = catagory;
    if(lostPlace) item.lostPlace = lostPlace;
    if(lostDate) {
     
      item.lostDate = new Date(lostDate);
    }
    if(detail) item.detail = detail;
    return item;
  }
  submitForm() {
    
    this.isLoadingResults = true;
   let foundedItem: FoundedItem = {};
    let item: Item;
    let founder: Person;
    let owner: Person;
owner = this.getPerson(this.ownerForm.get('firstName1').value, this.ownerForm.get('lastName1').value, this.ownerForm.get('phoneNumber1').value,  this.ownerForm.get('email1').value);
founder = this.getPerson(this.founderForm.get('firstName').value,this.founderForm.get('lastName').value,  this.founderForm.get('phoneNumber').value,this.founderForm.get('email').value);   
item = this.getItem(this.itemForm.get('catagory').value,this.itemForm.get('lostPlace').value, this.itemForm.get('lostDate').value,this.itemForm.get('detail').value)
//  let req = {
     
//       founder:founder,
//       item: item,
//       hasOwner: this.ownerKnown,
//       foundedPlace: this.founderForm.get('foundedPlace').value,
//       foundedDate: new Date(this.founderForm.get('foundedDate').value),
//     }
foundedItem.founder = founder;
foundedItem.item = item;
foundedItem.hasOwner = this.ownerKnown;
foundedItem.foundedPlace = this.founderForm.get('foundedPlace').value;
foundedItem.foundedDate =  new Date(this.founderForm.get('foundedDate').value);
    if(this.ownerKnown) {
     foundedItem.owner = owner;
    }
    
    // console.log(foundedItem.item);
    // console.log(foundedItem.item.lostDate );
    // console.log(foundedItem.founder);
    // console.log(foundedItem.hasOwner);
    // console.log(foundedItem.foundedPlace);
    this.foundedItemService.createFoundedItem(foundedItem).subscribe(res=>{
      console.log('doti: ' + res);
      this.itemForm.reset(),
      this.founderForm.reset(),
      this.ownerForm.reset(),

      this.isLoadingResults = false;
    }, err=>{
      this.isLoadingResults = false;
    });
   
  
  }

}
