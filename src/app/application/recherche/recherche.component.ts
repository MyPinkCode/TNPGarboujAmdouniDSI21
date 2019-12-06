import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { ProduitService } from '../produit.service';
import { Produits } from '../produits';
@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  submitted:boolean = false;
  productForm:FormGroup;
  all:Produits[];
  show:boolean;
  maq:any;
  dre:any;
  


  onSubmit()
  {
    this.submitted =true;}
  constructor(private produitService:ProduitService,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.dre = this.produitService.dress;
    this.maq = this.produitService.makeup;
    this.all=this.dre.concat(this.maq);
    this.productForm = this.formBuilder.group(
      {
      type:['', Validators.required],
      nom:['', [Validators.required, Validators.minLength(5)]],
      prix:['', Validators.required],
      promo:['', Validators.required]
    }
      )
      console.log(this.all.length);
  }

  public get nom()
  { return this.productForm.controls.nom; }

  public get prix()
  { return this.productForm.controls.prix; }

  public get promo()
  { return this.productForm.controls.promo; }
  public get type()
  { return this.productForm.controls.type; }
  
  recherche(){
    this.submitted=true;

    for(let a of this.maq){
      var test:boolean=true;
     if(this.type==undefined){
       if(this.type.value!=1) test=false;
     }
     if(this.prix!=undefined){
      if(this.prix.value>=a.prix) test=false;
    }
    if(this.promo!=undefined){
      if(this.promo.value==a.promo) test=false;
    }
    if(this.nom!=undefined){
      if(a.nom.includes(this.nom.value)) test=false;
    }
    if(test==true) this.all.splice(this.all.findIndex((element) => element.ref==a.ref),1);
    }
    for(let a of this.dre){
      var test:boolean=true;
      if(this.type==undefined){
        if(this.type.value!=1) test=false;
      }
      if(this.prix!=undefined){
       if(this.prix.value>=a.prix) test=false;
     }
     if(this.promo!=undefined){
       if(this.promo.value==a.promo) test=false;
     }
     if(this.nom!=undefined){
       if(a.nom.includes(this.nom.value)) test=false;
     }
     if(test==true) this.all.splice(this.all.findIndex((element) => element.ref==a.ref),1);
     }
  }
}
