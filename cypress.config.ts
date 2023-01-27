import { defineConfig } from 'cypress';

export default defineConfig({
   viewportHeight: 1080,
   viewportWidth: 1920,

   e2e: {
      setupNodeEvents(on, config) {
         // implement node event listeners here
      },
      baseUrl: 'https://www.expedia.com',
      specPattern: '**/*.cy.ts',
   },
   env: {
      hideXHR: true
   }
});
