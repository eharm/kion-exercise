import { IPage } from './IPage';

export abstract class PageBase implements IPage {
   public pageUrl = '';

   private _checkUrlSet(): void {
      if (!this.pageUrl)
         throw new Error('pageUrl is not defined, this must be set in the child class');
   }

   public navigate(): void {
      this._checkUrlSet();
      cy.visit(this.pageUrl);
   }

   public checkUrl(): void {
      this._checkUrlSet();
      const urlRegex = new RegExp(
         '^'                             // anchor from start of string
         + Cypress.config().baseUrl      // start with domain
         + this.pageUrl                  // concatenate the current page
         , 'i'                           // case-insensitive search
      );
      cy.url().should('match', urlRegex);
   }
}
