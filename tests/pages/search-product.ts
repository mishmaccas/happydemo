    import { Page, Locator } from '@playwright/test';

    export class SearchProductPage {
        readonly page: Page;
        readonly searchInput: Locator;
        

        constructor(page: Page) {
            this.page = page;
            this.searchInput = page.getByRole('textbox', { name: 'Search Keywords' });
        }

        
    }