import { BasePage } from "./BasePage.js";

class RegistrationPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;

        //write xpath for first name using xpath #name with name locator
        this.firstName = page.locator("//input[@name='firstName']");
        //write xpath for email using xpath #email with name locator
        this.email = page.locator("//input[@name='email']");
        //write xpath for password using xpath #password with name locator
        this.password = page.locator("//input[@name='password']");
        //write xpath for interest using xpath //div[@class='interest-div'] with name locator
        this.interest = page.locator("//div[@class='interest-div']//input[@type='checkbox']/..//following-sibling::label");
        // write xpath for gender radio button with xpath //input[@name='gender']//following-sibling::label
        this.gender = page.locator("//input[@name='gender']//following-sibling::label");
         //write xpath for state selection option using xpath #state with name locator
        this.state = page.locator("//select[@id='state']");
        //write xpath for hobbies selection option using xpath #hobbies with name locator
        this.hobbies = page.locator("//select[@id='hobbies']");
        //write xpath for submit button using xpath #submit with name locator
        this.submitButton = page.locator("//button[@type='submit']");
    }

    //write a function for first name taking it as parameter
    async enterFirstName(firstName) {
        await this.firstName.fill(firstName);
    }
    //write a function for email taking it as parameter
    async enterEmail(email) {
        await this.email.fill(email);
    }
    //write a function for password taking it as parameter
    async enterPassword(password) {
        await this.password.fill(password);
    }
    //write a function for interest taking it as parameter
    async selectInterest(interestName) {
        const interests = await this.page.locator("//div[@class='interest-div']//input[@type='checkbox']/..//following-sibling::label").all();
        for (const interest of interests) {
            const text = await interest.textContent();
            if (text.trim() === interestName) {
                await interest.click();
                break;
            }
        }
    }
    //write a function for gender taking it as parameter
    async selectGender(gender) {
        const genders = await this.page.locator("//input[@name='gender']//following-sibling::label").all();
        for (const g of genders) {
            const text = await g.textContent();
            if (text.trim() === gender) {
                await g.click();
                break;
            }
        }
    }
    //write a function for state locator where you pass wrgument as state name and selection option
    async selectState(stateName) {
        await this.state.selectOption(stateName);
    }
    //write a function for hobbies locator where you pass argument as hobby name and select option
    async selectHobby(hobbyName) {
        await this.hobbies.selectOption(hobbyName);
    }   
    //write a function for submit button
    async clickSubmit() {
        await this.submitButton.click();
    }
}

