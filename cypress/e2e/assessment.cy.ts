import { Home } from '../pages/Home';
import { HotelSearch } from '../pages/HotelSearch';

describe('Kion assessment', () => {
   const home = new Home();
   const hotelSearch = new HotelSearch();

   beforeEach(() => {
      home.navigate();
      home.checkUrl();
   })

   let searchUrl: string;
   
   // it('Test Case 1', () => {
   //    home.enterLocationClickFirst('Universal Orlando Resort');
   //    home.enterDates();
   //    home.submitSearch();

   //    hotelSearch.checkUrl();
   //    cy.url()
   //       .then((url) => {
   //          searchUrl = url;
   //       })
   // });

   // it('Test Case 2', () => {
   //    // cy.visit(searchUrl);
   //    cy.visit('https://www.expedia.com/Hotel-Search?adults=2&d1=2023-02-02&d2=2023-02-09&destination=Orlando%2C%20FL%2C%20United%20States%20of%20America%20%28MCO-Orlando%20Intl.%29&endDate=2023-02-09&latLong=28.431185%2C-81.307915&pwaDialog=travelerPicks&regionId=5194573&rooms=1&semdtl=&sort=RECOMMENDED&startDate=2023-02-02&theme=&useRewards=false&userIntent=')
   //    hotelSearch.checkUrl();
   //    hotelSearch.addChildren(8, 10);
   // })

   it('Test Case 3', () => {
      home.selectTab('Flights');
      home.verifyFlightDefaults();
   })
});
