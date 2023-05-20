import { PageBase } from "../support/page/PageBase";

export class HotelSearch extends PageBase {
   public pageUrl = '/Hotel-Search?';

   public addChildren(...childAges: number[]): void {
      cy.get('button[data-stid="open-room-picker"]')
         .click({ force: true });

      let queryString = 'adults=2&children='

      childAges.forEach((childAge, i, arr) => {
         if (childAge > 17)
            throw new Error('A child must be under 18 years old');

         cy.contains('Increase children in room')
            .click();
         
         cy.get(`select#age-${i}`)
            .select(childAge)

         queryString += `1_${childAge}` + (arr.length > i + 1 ? encodeURIComponent(',') : '')
      })

      cy.get('button[data-stid="apply-room-picker"]')
         .click()

      cy.url()
         .should('contain', queryString);
   }
}