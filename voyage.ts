class Sejour {

    constructor(private _nom:string, private _prix:number) {
    }

    get nom() : string {
        return this._nom;
    }

    get prix() : number {
       return this._prix;
    }

    set nom(nom : string) {
        this._nom = nom;
    }

    set prix(prix : number) {
        this._prix = prix;
    }
}

class SejourService {

    constructor(private sejour : Array<Sejour>) {
        this.sejour.push(new Sejour('Paris', 150));
        this.sejour.push(new Sejour('Barcelone', 150));
        this.sejour.push(new Sejour('Londres', 250));
        this.sejour.push(new Sejour('Rome',200));
    }

    findSejourByName(nom:string) : Sejour | void {
        return this.sejour.find(name => name.nom == nom);
    }
}


let sejour = new SejourService([]);

console.log(sejour.findSejourByName('Barcelone'));

