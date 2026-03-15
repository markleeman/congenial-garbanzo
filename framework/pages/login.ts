import { type Locator, type Page } from '@playwright/test';
import {User} from "../data/user";

export class LoginPage {

    readonly page: Page;

    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.username = this.page.getByRole('textbox', { name: 'username' });
        this.password = this.page.getByRole('textbox', { name: 'password' });
        this.loginButton = this.page.getByRole('button', { name: 'Log In' });
    }

    async goto() {
        await this.page.goto('/login/');
    }

    async loginAs(user: User) {

        // Fill in out login details from our user object
        await this.username.pressSequentially(user.email);
        await this.password.pressSequentially(user.password);

        // Click login button and wait for the login request to complete
        const responsePromise = this.page.waitForResponse('**/svc/shreddit/account/login');
        await this.loginButton.click();
        await responsePromise;

    }
}