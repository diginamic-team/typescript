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
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService(sejour) {
        this.sejour = sejour;
        this.sejour.push(new Sejour('Paris', 150));
        this.sejour.push(new Sejour('Barcelone', 150));
        this.sejour.push(new Sejour('Londres', 250));
        this.sejour.push(new Sejour('Rome', 200));
    }
    SejourService.prototype.findSejourByName = function (nom) {
        return this.sejour.find(function (name) { return name.nom == nom; });
    };
    return SejourService;
}());
var sejour = new SejourService([]);
console.log(sejour.findSejourByName('Barcelone'));
