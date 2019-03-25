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
        this._sejours = [new Sejour('sejour1', 200), new Sejour('sejour2', 400), new Sejour('sejour3', 700)];
    }
    SejourService.prototype.findTripByName = function (nomSejour) {
        var sejourTrouve = undefined;
        this._sejours.forEach(function (e) {
            if (e.nom === nomSejour) {
                sejourTrouve = e;
            }
        });
        return sejourTrouve;
    };
    return SejourService;
}());
var sejourService = new SejourService();
console.log(sejourService.findTripByName('sejour2'));
