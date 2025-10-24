import { BasePage } from "./BasePage.js";

export class CategoryPage extends BasePage 
{
    constructor(page)
    {    
        super(page)
        this.page=page
        this.addNewCategory=page.locator("//button[normalize-space()='Add New Category']")
        this.deleteConfirmationButton=page.locator("//button[normalize-space()='Delete'][@class='action-btn']")
    }

    async clickOnAddNewCategory()
    {
        await this.addNewCategory.click();
    }
    async  verifyCategoryisPresent(categoryName)
    {
        return await this.page.locator(`//tr//td[normalize-space()='${categoryName}']`);
    }
    async  deleteCategory(categoryName)
    {
        await this.page.locator(`//td[normalize-space()='${categoryName}']//following::button[1]`).click()
        await this.deleteConfirmationButton.click()

    }
    async  updateCategory(categoryName)
    {
        await this.page.locator(`//td[normalize-space()='${categoryName}']//following::button[2]`).click()

    }
}