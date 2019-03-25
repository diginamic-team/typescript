class Sejour {
    constructor(private _nom:string, private _prix:number){

    }
get nom(){
    return this._nom;
}

get prix(){
    return this._prix;
}
}

class SejourService{
    private _sejours :Sejour[] = [] ;
    constructor(){
this._sejours.push( new Sejour ("sejour1",200));
this._sejours.push (new Sejour ("sejour2",300));
this._sejours.push (new Sejour ("sejour3",300));
    }

findByName (nomSejour:string):Sejour{
    let sejourTrouve:Sejour = new Sejour ("blabla",2000);
    this._sejours.forEach (e =>{
        if(e.nom === nomSejour){
            sejourTrouve = e
        }
    });
    return sejourTrouve
}

}

let SejourService1 = new SejourService();
console.log(SejourService1.findByName("sejour2"));