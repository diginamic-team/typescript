class Sejour{
    constructor(private _nom: string, private _prix: number){

    }
    get nom():string{
        return this._nom;
    }

    set nom(nom:string){
        this._nom = nom;
    }

    get prix():number{
    return this._prix;
    }

    set prix(prix: number) {
        this._prix = prix;
    }
    toString(): string {
        return `${this._nom} - ${this._prix}€`
    }
}

class SejourService {
    constructor(private  _sejours : Sejour[]){
        this._sejours = [new Sejour('paris', 200),
            new Sejour('marseille', 150),
            new Sejour('londres', 450),
            new Sejour('pologne', 800),
        ]
    }
    findSejour(nom:string): Sejour | void{
       return this._sejours.find(sejour => sejour.nom == nom);
    }
}
let tableaudesejours: Array<Sejour> = [];
let ss: SejourService = new SejourService(tableaudesejours);
console.log(ss.findSejour('paris'))