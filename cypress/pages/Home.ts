import { PageBase } from "../support/page/PageBase";

export class Home extends PageBase {
   public pageUrl = '/';

   public enterLocationClickFirst(location: string): void {
      cy.get('button[data-stid="location-field-destination-menu-trigger"]')
         .click();

      cy.get('input[data-stid="location-field-destination-menu-input"]')
         .type(location);
         
      cy.get('ul[data-stid="location-field-destination-results"] button')
         .first()
         .click();
   }

   public enterDates(): void {
      function addDays(date: Date, days: number): Date {
         return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
      }

      function formatDateString(date: Date): string {
         const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
         return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
      }
      
      const checkInDate = addDays(new Date(), 7);
      const checkOutDate = addDays(checkInDate, 7);

      cy.get('button#d1-btn')
         .click();

      cy.get(`button[aria-label="${formatDateString(checkInDate)}"]`)
         .click();

      cy.get(`button[aria-label="${formatDateString(checkOutDate)}"]`)
         .click();

      cy.get('button[data-stid="apply-date-picker"]')
         .click();
   }

   public submitSearch(): void {
      cy.get('button[data-testid="submit-button"]')
         .click();
   }

   public selectTab(...tabNames: string[]): void {
      tabNames.forEach((tab) => {
         cy.contains('span', tab, { matchCase: false })
            .click()
            .parent('a')
            .should('have.class', 'uitk-tab-anchor-selected');
         
         cy.contains('form button', 'Search')
            .should('be.visible');
      })
      
   }

   public verifyFlightDefaults(): void {
      cy.get('form')
         .within(() => {
            // Roundtrip should be default selection
            cy.contains('span', 'Roundtrip')
               .parents('li')
               .should('have.class', 'active');            

            const defaultLabels = ['Leaving from', 'Going to', 'Departing', 'Returning'];
            defaultLabels.forEach((label) => {
               cy.contains('span', label)
                  .parent()
                  .should('be.visible')
                  .then(($el) => {
                     console.log(label);
                     console.log($el.prev().prop('nodeName'));
                     const elType = $el.prev().prop('nodeName');
                     // if the parent element is a button make sure it has the label set as an attribute
                     if (elType === 'button') {
                        expect($el.attr('aria-label'), 'Button label attribute is set').to.contain(label);
                     }
                  });
            });
         })
   }

   public selectClass(prefferedClass: string): void {
      cy.get('button#preferred-class-input-trigger')
         .click()
         .next()
         .contains('span', prefferedClass, { matchCase: false })
         .click();

      cy.get('button#preferred-class-input-trigger')
         .then(($btn) => {
            expect($btn.text(), 'Verify preffered class').to.match(new RegExp(prefferedClass, 'i'));
         })
   }

   public verifyOneWay(): void {
      cy.contains('One-way')
         .click();

      cy.get('button#d2-btn')
         .should('not.exist');

      cy.contains('Roundtrip')
         .click();

      cy.get('button#d2-btn')
         .should('be.visible')
   }
}