"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var CountryDataService_1 = require("../app/Services/CountryDataService");
var DemoComponent = (function () {
    function DemoComponent(CountryService) {
        var _this = this;
        this.CountryService = CountryService;
        this.CountryService.GetAllCountry().subscribe(function (data) { return _this.countries = data; }, function (error) { return console.log(error); }, function () { return console.log('Get all complete'); });
    }
    DemoComponent.prototype.onSubmit = function () {
        console.log(this.selectedCountry);
        alert(this.selectedCountry);
    };
    return DemoComponent;
}());
DemoComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/Demo.html',
        providers: [CountryDataService_1.CountryDataService]
    }),
    __metadata("design:paramtypes", [CountryDataService_1.CountryDataService])
], DemoComponent);
exports.DemoComponent = DemoComponent;
//# sourceMappingURL=Demo.Component.js.map