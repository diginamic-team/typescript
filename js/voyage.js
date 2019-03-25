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
        set: function (nom) {
            this._nom = nom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "prix", {
        get: function () {
            return this._prix;
        },
        set: function (prix) {
            this._prix = prix;
        },
        enumerable: true,
        configurable: true
    });
    Sejour.prototype.toString = function () {
        return this._nom + " - " + this._prix + "\u20AC";
    };
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService(_sejours) {
        this._sejours = _sejours;
        this._sejours = [new Sejour('paris', 200),
            new Sejour('marseille', 150),
            new Sejour('londres', 450),
            new Sejour('pologne', 800),
        ];
    }
    SejourService.prototype.findSejour = function (nom) {
        return this._sejours.find(function (sejour) { return sejour.nom == nom; });
    };
    return SejourService;
}());
var tableaudesejours = [];
var ss = new SejourService(tableaudesejours);
console.log(ss.findSejour('paris'));
