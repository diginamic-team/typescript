"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Object.defineProperty(Sejour.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "prix", {
        get: function () {
            return this._prix;
        },
        enumerable: true,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejours = [];
        this._sejours.push(new Sejour("sejour1", 200));
        this._sejours.push(new Sejour("sejour2", 300));
        this._sejours.push(new Sejour("sejour3", 300));
    }
    SejourService.prototype.findByName = function (nomSejour) {
        var sejourTrouve = new Sejour("blabla", 2000);
        this._sejours.forEach(function (e) {
            if (e.nom === nomSejour) {
                sejourTrouve = e;
            }
        });
        return sejourTrouve;
    };
    return SejourService;
}());
var SejourService1 = new SejourService();
console.log(SejourService1.findByName("sejour2"));
