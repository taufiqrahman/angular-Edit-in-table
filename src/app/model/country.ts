export interface Country {
  isSelected: boolean;
  id: number;
  name: string;
  capital: string;
  iso2: string;
  iso3: string;
  isEdit: boolean;
}

export const CountryTableHeaders = [
    {
    key: 'isSelected',
    type: 'isSelected',
    label: '',
  },
  {
    key: 'name',
    type: 'text',
    label: 'Name',
    required: true,
  },
  {
    key: 'capital',
    type: 'text',
    label: 'Capital',
  },
  {
    key: 'iso2',
    type: 'text',
    label: 'Iso 2',
    required: true,
  },
  {
    key: 'iso3',
    type: 'text',
    label: 'Iso 3',
  },
  {
    key: 'isEdit',
    type: 'isEdit',
    label: '',
  },
];


export const CountryData: any[] = [
  {
    id: 1,
      name: "Afghanistan",
      capital: "Kabul",
      iso2: "AF",
      iso3: "AFG"
},
{
  id: 2,
      name: "Aland Islands",
      capital: "Mariehamn",
      iso2: "AX",
      iso3: "ALA"
},
{
  id: 3,
      name: "Albania",
      capital: "Tirana",
      iso2: "AL",
      iso3: "ALB"
},
{
  id: 4,
      name: "Algeria",
      capital: "Algiers",
      iso2: "DZ",
      iso3: "DZA"
},
{
  id: 5,
      name: "American Samoa",
      capital: "Pago Pago",
      iso2: "AS",
      iso3: "ASM"
},
{
  id: 6,
      name: "Andorra",
      capital: "Andorra la Vella",
      iso2: "AD",
      iso3: "AND"
},
{
  id: 7,
      name: "Angola",
    capital: "Luanda",
      iso2: "AO",
      iso3: "AGO"
},
{
  id: 8,
      name: "Anguilla",
      capital: "The Valley",
      iso2: "AI",
      iso3: "AIA"
},
{
  id: 9,
      name: "Antarctica",
      capital: "",
      iso2: "AQ",
      iso3: "ATA"
},
{
  id: 10,
      name: "Antigua and Barbuda",
      capital: "St. John's",
      iso2: "AG",
      iso3: "ATG"
}

];