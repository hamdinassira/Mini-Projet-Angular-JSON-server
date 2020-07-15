import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit';
import { Commande } from 'src/app/models/commande';
import { ProduitService } from 'src/app/services/produit.service';


@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {

  cmd: Commande[]=[];
  date=new Date();
  commande: Commande={
    nom:'',
    date:this.date,
    prixTotal:'',
    montant:''
  }
  produit: Produit;
  

  constructor(public produitService: ProduitService) { }

  ngOnInit(): void {
   this.produitService.getCmd(this.cmd).subscribe((data)=>{
      this.commande=data;
    });
    }
     }


