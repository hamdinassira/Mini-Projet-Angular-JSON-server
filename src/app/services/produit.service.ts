import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Produit} from '../models/produit';
import { Commande } from '../models/commande';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  host="http://localhost:5000";
  public currentCommande:string="commande1";
  public cmd:Map<number,Commande>=new Map();


  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<Produit[]>("http://localhost:5000/produits");
  }

  delete(id){
    return this.http.delete(`http://localhost:5000/produits/${id}`);
  }

  add(produit){
    return this.http.post<Produit>("http://localhost:5000/produits", produit);
  }

  update(produit){
    return this.http.put(`http://localhost:5000/produits/${produit.id}`, produit);
  }

  
  getCmd(id){
    this.ajouCommande(this.cmd);
    return this.http.get<Commande>(`http://localhost:5000/produits/${id}`);  
    
  }

  ajouCommande(cmd){
    //this.getCmd(cmd);
    return this.http.post<Produit>("http://localhost:5000/commandes", cmd);
  }

  getAllCommnde(){
    return this.http.get("http://localhost:5000/commandes");
  }

  deleteCmd(id){
    return this.http.delete(`http://localhost:5000/commandes/${id}`);
  }

  updateCmd(commande){
    return this.http.put(`http://localhost:5000/commandes/${commande.id}`, commande);
  }

}
