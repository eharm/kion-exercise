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

   public selectTab(tabName: string): void {
      cy.contains('span', tabName, { matchCase: false })
         .click();
   }

   public verifyFlightDefaults(): void {
      cy.get('form')
         .within(($form) => {
            cy.contains('span', 'Roundtrip')
               .parents('li')
               .should('have.class', 'active')
         })
   }


}