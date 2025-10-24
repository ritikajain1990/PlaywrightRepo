import { HomePage } from "../../pages/HomePage.js"
import { test, expect } from "..//..//fixtures/auth.fixture.js"
import { CategoryPage } from "../../pages/CategoryPage.js";

test("Verify user should be able to create category", async function ({ page, context, loginPagewithJson }) {
    const homePage = new HomePage(page);
    const categoryName = `PlaywrightRitika_${Date.now()}`;
    const updateCategoryName=`UpdatedPlaywrightRitika_${Date.now()}`;
    const newPage = await homePage.navigateToNewPage(context,()=>homePage.clickOnManageCategory());
    const categoryPage = new CategoryPage(newPage);
    categoryPage.handleAlerts(newPage, "accept", categoryName);
    await categoryPage.clickOnAddNewCategory();
    await newPage.waitForTimeout(5000);
    await expect(await categoryPage.verifyCategoryisPresent(categoryName)).toBeVisible();
    await categoryPage.handleAlerts(newPage,"accept",updateCategoryName)
    await categoryPage.updateCategory(categoryName);
    await newPage.waitForTimeout(5000);
    await categoryPage.deleteCategory(updateCategoryName);
    await expect(await categoryPage.verifyCategoryisPresent(updateCategoryName)).not.toBeVisible();
    await newPage.close();

    await homePage.clickMenuButton();
    await homePage.clickSignOutButton();

})