import { Page } from '@playwright/test';
import { BaseClass } from '../utils/BaseClass';

export class DashboardPage extends BaseClass {
    private greetingText: string;

    constructor(page: Page) {
        super(page);
        this.greetingText = 'h1.greeting';
    }

    async getGreetingText(): Promise<string> {
        return await this.getText(this.greetingText);
    }
}
