import {test} from "../../fixtures/auth.fixture.js"
import {LoginPage} from "../../pages/LoginPage.js"



test.skip("Login scenario",async function({page,loginPage})
{
  await page.waitForTimeout(2000);
  console.log("Running during test")
})

test("Login scenario with json",async function({page,loginPagewithJson})
{
  await page.waitForTimeout(2000);
  console.log("Running during test")
})