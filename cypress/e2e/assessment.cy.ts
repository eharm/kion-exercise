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
   
   it('Test Case 1', () => {
      home.enterLocationClickFirst('Universal Orlando Resort');
      home.enterDates();
      home.submitSearch();

      hotelSearch.checkUrl();
      cy.url()
         .then((url) => {
            searchUrl = url;
         })
   });

   it('Test Case 2', () => {
      cy.visit(searchUrl);
      hotelSearch.checkUrl();
      hotelSearch.addChildren(8, 10);
   })

   it('Test Case 3', () => {
      home.selectTab('Flights');
      home.verifyFlightDefaults();
      home.selectClass('first class');
   })

   it('Test Case 4', () => {
      home.selectTab('Flights');
      home.verifyOneWay();
   })

   it('Test Case 5', () =>
   {
      home.selectTab('Stays', 'Flights', 'Cars', 'Packages', 'Things to do', 'Cruises')
   })
});
