import { Component, OnInit } from '@angular/core';
//import { Produits } from '../application/Produits';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../application/produit.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-see-more',
  templateUrl: './see-more.component.html',
  styleUrls: ['./see-more.component.css']
})
export class SeeMoreComponent implements OnInit {
  p:any;
  see:boolean=false;
  seen:boolean=false;
  clicked:boolean=false;
  constructor(private activatedRoute:ActivatedRoute,private produitService:ProduitService,private router:Router) { }
  
  ngOnInit() {
    if(this.produitService.getDressByID(this.activatedRoute.snapshot.params['ref'])!=null)
 this.p = this.produitService.getDressByID(this.activatedRoute.snapshot.params['ref']);
 else 
 this.p = this.produitService.getMakeupByID(this.activatedRoute.snapshot.params['ref']);
  }
 
  back(r: string) {
    if(this.produitService.getDressByID(r)!=null)
    this.router.navigate(['./dress']);
    else 
    this.router.navigate(['./makeup']);
  }
  deleted(){
    this.produitService.supprimer(this.p.ref);
  }
}
