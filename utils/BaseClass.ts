import { Page } from '@playwright/test';

export class BaseClass {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async waitForElement(selector: string): Promise<void> {
        await this.page.waitForSelector(selector);
    }

    async getText(selector: string): Promise<string> {
        return await this.page.textContent(selector) || '';
    }

    async clickElement(selector: string): Promise<void> {
        await this.page.click(selector);
    }

    async fillInput(selector: string, text: string): Promise<void> {
        await this.page.fill(selector, text);
    }
}