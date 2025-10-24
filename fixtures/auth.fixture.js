import {test as base} from "@playwright/test"
import {LoginPage} from '../pages/LoginPage.js'
import { readJson } from "../utils/readjson.js";


export const test = base.extend(
    {
        loginPage: async function ({page}, use)
        {
            console.log("Running before test")  
            const loginPage = new LoginPage(page);
            await loginPage.gotoUrl();
            await loginPage.fillEmail("admin@email.com");
            await loginPage.fillPassword("admin@123");
            await loginPage.submit();
            await use(loginPage);
            console.log("Running after test")
        },
        loginPagewithJson: async function ({page}, use)
        {
            console.log("Running before test with Json")
            const loginPage = new LoginPage(page);
            await loginPage.gotoUrl();
            const data=readJson("./testdata/users.json");
            await loginPage.fillEmail(data.username);
            await loginPage.fillPassword(data.password);
            await loginPage.submit();
            await use(loginPage);
            console.log("Running after test")
        },
         CoursePagewithJson: async function ({page}, use)
        {
            console.log("Running before test with Course Json")
            const data=readJson("./testdata/manageCourse.json");
            
            await use(data);
        
        },

          page: async function ({page}, use,testInfo)
        {
          
            
            await use(page);
            if(testInfo.status!=testInfo.expectedStatus)
            {
                const path =await page.screenshot({path:`screenshots/${testInfo.title}_${Date.now}.png`})
                testInfo.attach('screenshot',{body:path,contentType:"image/png"})
            }

        
        }
      
    }
   
)
 export const expect = test.expect;