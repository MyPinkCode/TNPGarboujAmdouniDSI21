import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { ProduitService } from '../produit.service';
@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  productForm:FormGroup;
  myDate =  new Date().toLocaleDateString();
  constructor(private produitService:ProduitService,private formBuilder:FormBuilder) { }
  submitted:boolean = false;
  
  message ="";
  ajout:boolean;
  
  ngOnInit() {this.productForm = this.formBuilder.group(
    {ref:['', Validators.required],
    type:['', Validators.required],
    nom:['', [Validators.required, Validators.minLength(5)]],
    src:['', Validators.required],
    prix:['', Validators.required],
    promo:['', Validators.required]
  }
    )
    
   
  }
  public get ref()
  { return this.productForm.get('ref'); }

  public get nom()
  { return this.productForm.controls.nom; }

  public get src()
  { return this.productForm.controls.src; }

  public get prix()
  { return this.productForm.controls.prix; }

  public get promo()
  { return this.productForm.controls.promo; }
  public get type()
  { return this.productForm.controls.type; }
  
  onSubmit()
  {
    this.submitted =true;
    if(this.type.value==1)
     this.ajout = this.produitService.addMakeup(this.nom.value,this.ref.value,this.src.value.replace("C:\\fakepath\\", "../assets/"),this.prix.value,this.promo.value,this.myDate);
     else 
     this.ajout = this.produitService.addDress(this.nom.value,this.ref.value,this.src.value.replace("C:\\fakepath\\", "../assets/"),this.prix.value,this.promo.value,this.myDate);
    if(this.ajout)
      this.message="Votre nouveau produit:" +this.nom.value + " a bien été ajouté";
    else
      this.message="Le produit d'id "+ this.ref.value +" existe déjà !";
  }
 

}
