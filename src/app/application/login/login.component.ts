import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { ProduitService } from '../produit.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loged:boolean=true;
  signForm:FormGroup;
  constructor(private router:Router,private formBuilder:FormBuilder,private produitService:ProduitService) { }

  ngOnInit() {
    this.signForm= this.formBuilder.group(
      {
      mail: ['', Validators.required],
      mdp: ['', Validators.required]
      }
      )
  }
  
    app()
    {
      this.router.navigate(['./acceuil']);
    }

}
