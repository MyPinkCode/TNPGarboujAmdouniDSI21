import { Injectable } from '@angular/core';
import { Produits } from './produits';
import {Validators,AbstractControl} from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
 locked:boolean;
  makeup =[
    new Produits('ROUGE À LÈVRES','e7f8','../assets/rouge.PNG', 20,false,'10/11/2019'),
    new Produits('LIP CREAM','ec18','../assets/lip_cream.PNG',12.5,true,'10/11/2019'),
    new Produits('CRAYON YEUX','imp88','../assets/crayon.PNG',35,false,'10/11/2019'),
    new Produits('CORRECTEUR', 'hp58','../assets/correcteur.PNG',56.8,true,'10/11/2019'),
    new Produits('PINCEAUX', 'hkg58','../assets/ff.jpg',80,true,'10/11/2019'),
    new Produits('PALETTE', 'sp58','../assets/pal.jpg',56.8,false,'10/11/2019'),
  ]
  dress =[
    new Produits('red flowers','v5cx64','../assets/im1.jpg', 480,false,'10/11/2019'),
    new Produits('fairy','gd66','../assets/im3.jpg',578,true,'10/11/2019'),
    new Produits('magical','zcf21','../assets/im4.jpg',320,false,'10/11/2019'),
    new Produits('princess', 'uj52','../assets/im5.jpg',600,false,'10/11/2019')
  ]
  
  public getMakeupByID(ref:string):Produits
  {
    for(let p of this.makeup)
    {
      if(p.ref===ref)
      return p;
    }

  }
  public getDressByID(ref:string):Produits
  {
    for(let p of this.dress)
    {
      if(p.ref===ref)
      return p;
    }

  }

  public addMakeup(nom:string,ref:string,src:string,prix:number,promo:boolean,date:string):boolean
  {
   if(this.getMakeupByID(ref)==null)
      {this.makeup.push(new Produits(nom,ref,src,prix,promo,date));
        return true;
      }    
      return false;
  }

  public addDress(nom:string,ref:string,src:string,prix:number,promo:boolean,date:string):boolean
  {
   if(this.getDressByID(ref)==null)
      {this.dress.push(new Produits(nom,ref,src,prix,promo,date));
        return true;
      }    
      return false;
  }
  
  public supprimer(ref:string){
    if(this.getMakeupByID(ref)!=null){
      {for(let i=0;i<this.makeup.length;i++){
        if (ref==this.makeup[i].ref){
          this.makeup.splice(i,1);
        }
      }
  }
}
else{
  {for(let i=0;i<this.dress.length;i++){
    if (ref==this.dress[i].ref){
      this.dress.splice(i,1); }
  }
}
}
  }

  


 constructor() { }

}
