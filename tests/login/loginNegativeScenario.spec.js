import {test,expect} from "@playwright/test"
import { LoginPage } from "../../pages/LoginPage"
import { beforeEach } from "node:test"


test.describe("All negative scenarios for login",async function()
{
let loginPage
 test.beforeEach(async function({page})
 {
loginPage = new LoginPage(page);
await loginPage.gotoUrl();
 })


test("Login without username and password",async function ({page})
{

await loginPage.submit();
await expect(loginPage.errorMessage).toContainText("Email and Password is required")

})

test("Login without username",async function ({page})
{

await loginPage.fillEmail("admin@email.com");
await loginPage.submit();
await expect(loginPage.errorMessage).toContainText("Password is required")

})
test("Login without password",async function ({page})
{

await loginPage.fillPassword("admin@123");
await loginPage.submit();
await expect(loginPage.errorMessage).toContainText("Email is required")

})

test("Invalid email and password",async function ({page})
{

await loginPage.fillEmail("adminemsdds@sdsdail.com");
await loginPage.fillPassword("admidsadn@123");
await loginPage.submit();
await expect(loginPage.errorMessage).toContainText("USER Email Doesn't Exist")

})

})
