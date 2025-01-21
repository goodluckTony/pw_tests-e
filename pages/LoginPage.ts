import { Page } from '@playwright/test';
import { BaseClass } from '../utils/BaseClass';

export class LoginPage extends BaseClass {
    private usernameInput: string;
    private passwordInput: string;
    private loginButton: string;

    constructor(page: Page) {
        super(page);
        this.usernameInput = 'input[name="username"]';
        this.passwordInput = 'input[name="password"]';
        this.loginButton = 'button[type="submit"]';
    }

    async login(username: string, password: string): Promise<void> {
        await this.fillInput(this.usernameInput, username);
        await this.fillInput(this.passwordInput, password);
        await this.clickElement(this.loginButton);
    }
}
