import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import {ProduitService} from './../../services/produit.service';
import { Produit } from 'src/app/models/produit';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Commande } from 'src/app/models/commande';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  
  editForm= false;
  showForm=false;

  monProduit : Produit = {
    nom: ' ',
    prix: ' ',
    quantite: ' '
  }
  produit: Produit;
  produits: Produit[]=[];

  constructor(private produitService: ProduitService, public router:Router) { }

  ngOnInit(): void {
    this.getProduit();
  }

  getProduit(){
    this.produitService.findAll().subscribe(produits => this.produits=produits);
   
  }
  deleteProduct(id){
    this.produitService.delete(id).subscribe(()=>{
      this.produits=this.produits.filter(produit=>produit.id != id)
    })
  }

  addProduct(){
    this.produitService.add(this.monProduit).subscribe((produit)=>{
      this.produits=[produit, ...this.produits];
      this.resetProduct();
      this.showForm=false;
    })
  }

  resetProduct(){
    this.monProduit= {
      nom:'',
      prix:'',
      quantite:''
    }
  }

  updateProduct(produit){
    this.monProduit=produit;
    this.editForm=true;
    this.showForm=true;

  }

  editProduct(){
    this.produitService.update(this.monProduit).subscribe((produit)=>{
      this.resetProduct();
      this.editForm=false;
      this.showForm=false;
    })
  }
  AjoutPanier(p:Produit){
    Swal.fire({
      title: 'Si vous voulez valider la commande merci de cliquer sur Valider Commande',
      showCancelButton: true,
      confirmButtonColor: 'mediumseagreen',
      cancelButtonColor: 'red',
      confirmButtonText: 'Valider'
    }).then((result) => {
      if(result.value){ 
       this.produitService.ajouCommande(p);
               
      }this.router.navigate(['/commandes/'+p.id]); 
    })  
    }

}
