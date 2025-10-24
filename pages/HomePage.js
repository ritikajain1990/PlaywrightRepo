import { BasePage } from "./BasePage.js";

export class HomePage extends BasePage
{
    constructor(page)
    {
        super(page);
        this.page=page;
        //write xpath for manage button using //span[text()='Manage']
        this.manageButton=page.locator("//span[text()='Manage']");
        //write xpath manage courses button using //a[normalize-space()='Manage Courses']
        this.manageCoursesButton=page.locator("//a[normalize-space()='Manage Courses']");
        this.manageCategoryButton=page.locator("//a[normalize-space()='Manage Categories']");
        this.menuButton=page.locator("//img[@alt='menu']");   
        this.signOutButton=page.locator("//button[normalize-space()='Sign out']");


    }
    //write function to clickmanage button
    async clickManageButton()
    {
        await this.manageButton.click();
    }
    //write function to click manage courses button

    async clickManageCoursesButton()
    {
        await this.manageCoursesButton.click();
    }
    async clickOnManageCategory()
    {
        await this.manageButton.hover();
        await this.page.waitForTimeout(1000);
        await this.manageCategoryButton.click();
    }
    async clickMenuButton()
    {
        await this.menuButton.click();
    }
    async clickSignOutButton()
    {
        await this.signOutButton.click();
    }
}