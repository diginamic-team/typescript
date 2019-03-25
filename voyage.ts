class Sejour{

    constructor(private _nom:string,private _prix:number){

    }

    public get nom():string {
        return this._nom;
    }

    public get prix():number{
        return this._prix;
    }
}

class SejourService{

    private _sejours:Sejour[];

    constructor(){
        this._sejours=[new Sejour('sejour1',200),new Sejour('sejour2',400),new Sejour('sejour3',700)]
    }

    findTripByName(nomSejour:string):Sejour | void{

        let sejourTrouve = undefined;

        this._sejours.forEach(e => {
            if(e.nom === nomSejour){
                sejourTrouve = e;   
            }
        });
        
        return sejourTrouve;
    }

}

let sejourService = new SejourService();

console.log(sejourService.findTripByName('sejour2'));