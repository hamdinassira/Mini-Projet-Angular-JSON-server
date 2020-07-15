import { Produit } from './produit';

export class Commande {
    
    constructor( nom: string, prix: string){
        this.nom=nom;
        this.prixTotal+=prix;
        this.montant+=this.prixTotal;
    }
    public id?: number;
    public nom: string;
    public date: Date;
    public prixTotal: string;
    public montant: string;
 

}
