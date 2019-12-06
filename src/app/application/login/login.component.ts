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
  confirmPass :string="22898972";
  confirmMail :string="sarra.mouna@gmail.com";
  constructor(private router:Router,private formBuilder:FormBuilder,private produitService:ProduitService) { }

  ngOnInit() {
    this.signForm= this.formBuilder.group(
      {
      mail: ['', Validators.required],
      mdp: ['', Validators.required]
      }
      )
  }
  public get mdp()
  { return this.signForm.controls.mdp; }

  public get mail()
  { return this.signForm.controls.mail; }

    app()
    {
      this.router.navigate(['./acceuil']);
    }
run(){
  if(this.confirmPass ==this.mdp.value)
 {
   this.app();
 }    
 else {
   alert("can't identify you");
   this.signForm.reset();
 }
}
}
