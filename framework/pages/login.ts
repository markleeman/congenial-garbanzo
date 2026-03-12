import { type Locator, type Page } from '@playwright/test';
import {User} from "../data/user";

export class LoginPage {

    readonly page: Page;

    readonly username: Locator;
    readonly password: Locator;

    constructor(page: Page) {
        this.page = page;

        this.username = this.page.getByRole('textbox', { name: 'username' });
        this.password = this.page.getByRole('textbox', { name: 'password' })
    }

    async goto() {
        await this.page.goto('/login/');
    }

    async loginAs(user: User) {
        await this.username.fill(user.email);
        await this.password.fill(user.password);
    }
}