import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = [
    { name: "Tv", price: "1200", desc: "tv", details: [{ name: "Tv", price: "1200" }] },
    { name: "phone", price: "1400", desc: "talaphon", details: [{ name: "phone", price: "1400" }] },
    { name: "Tv", price: "1200", desc: "tiiiviii", details: [{ name: "Tv", price: "1200" }] },
    { name: "Tv", price: "1200", desc: "other tv ", details: [{ name: "Tv", price: "1200" }] },
    { name: "Tv", price: "1200", desc: "tv tv tv ", details: [{ name: "Tv", price: "1200" }] },
    { name: "phone", price: "1400", desc: "", details: [{ name: "phone", price: "1400" }] },
    { name: "PC", price: "2200", desc: "pc 2200", details: [{ name: "PC", price: "2200" }, { name: "PC", price: "2200" }, { name: "PC", price: "2200" }, { name: "PC", price: "2200" }] }
  ]
  productForm : FormGroup;
  myModal : any;
  constructor(private modalService: NgbModal) { 
    this.productForm = new FormGroup({
      name : new FormControl(),
      price : new FormControl(),
      desc : new FormControl(),
      details : new FormArray([
        this.newFormDetail()
      ])
    })

  }

  ngOnInit() {
  }

  openModal(content) {
    this.myModal=this.modalService.open(content)
  }
newFormDetail():FormGroup{
  return   new FormGroup({
    name : new FormControl(),
    price : new FormControl()
  })
}

  saveProduct() {
    console.log(this.productForm)
    this.myModal.close();
  }
  addDetail(){
    let a =this.productForm.get('details') as FormArray
    a.push(this.newFormDetail())
    this.productForm.controls.details = a
    console.log(this.productForm)
  }
}
