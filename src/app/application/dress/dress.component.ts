import { Component, OnInit } from '@angular/core';
import { Produits } from '../Produits';
import { ProduitService } from '../produit.service';
@Component({
  selector: 'app-dress',
  templateUrl: './dress.component.html',
  styleUrls: ['./dress.component.css']
})
export class DressComponent implements OnInit {
  dre :any;
  constructor(private produitService:ProduitService) { }

  ngOnInit() {
this.dre = this.produitService.dress;

  }

}
