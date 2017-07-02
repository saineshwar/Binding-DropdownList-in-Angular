import { Component } from '@angular/core';
import { CountryDataService } from '../app/Services/CountryDataService';
import { CountryMaster } from '../app/CountryMaster.Model';

@Component({
    templateUrl: 'app/Demo.html',
    providers: [CountryDataService]
})

export class DemoComponent
{
    countries: CountryMaster[];
    selectedCountry: number;

    constructor(private CountryService : CountryDataService)
    {
        this.CountryService.GetAllCountry().subscribe(data => this.countries = data,
            error => console.log(error),
            () => console.log('Get all complete'));
    }

    onSubmit() {
        console.log(this.selectedCountry);
        alert(this.selectedCountry);
    }
}