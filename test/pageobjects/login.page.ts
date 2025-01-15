import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername () {
        return $('#main-wrapper > div > div > div > div.col-lg-4.d-flex.align-items-center.bg-logincontent.right-section.login-content > div > div > div > ng-component > div.login-form.ng-tns-c233-1.ng-trigger.ng-trigger-routerTransition > form > div:nth-child(1) > input');
    }

    public get inputPassword () {
        return $('#main-wrapper > div > div > div > div.col-lg-4.d-flex.align-items-center.bg-logincontent.right-section.login-content > div > div > div > ng-component > div.login-form.ng-tns-c233-1.ng-trigger.ng-trigger-routerTransition > form > div:nth-child(2) > input');
    }

    public get btnSubmit () {
        return $('#main-wrapper > div > div > div > div.col-lg-4.d-flex.align-items-center.bg-logincontent.right-section.login-content > div > div > div > ng-component > div.login-form.ng-tns-c233-1.ng-trigger.ng-trigger-routerTransition > form > div.pb-lg-0.py-auto.login-button.ng-tns-c233-1');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
