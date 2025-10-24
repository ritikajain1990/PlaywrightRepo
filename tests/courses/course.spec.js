import {test} from "../../fixtures/auth.fixture.js"
import { CoursePage } from "../../pages/CoursePage.js";     
import { HomePage } from "../../pages/HomePage.js";
import {LoginPage} from "../../pages/LoginPage.js"
import { expect } from "@playwright/test";
let homePage
let coursePage
test.beforeEach(async function({page,loginPage})
{
  
   homePage= new HomePage(page);
   coursePage= new CoursePage(page);
})


test("Login scenario with json",async function({page,loginPagewithJson,CoursePagewithJson})
{
  await page.waitForTimeout(2000);
  console.log("Running during test")
  console.log("Navigating to the course page")

  await homePage.clickManageButton();
  await homePage.clickManageCoursesButton();
  await page.waitForTimeout(2000);
    await coursePage.clickAddNewCourseButton();
    await coursePage.uploadThumbnail("./testdata/Sample.png");
    let courseName=CoursePagewithJson.courseName+Math.floor(Math.random()*1000);
    await coursePage.enterCourseName(courseName);
    await coursePage.enterDescription(CoursePagewithJson.description);
    await coursePage.enterInstructorName(CoursePagewithJson.instructorName);
    await coursePage.enterPrice(CoursePagewithJson.price);
    await coursePage.selectCategoryInput(CoursePagewithJson.category);
    await coursePage.clickSaveButton();
    expect(
  await coursePage.createdCourseVisible(courseName)).toBeVisible();
    await coursePage.deleteCourse(courseName);
     expect(
  await coursePage.createdCourseVisible(courseName)).not.toBeVisible();
  await homePage.clickMenuButton();
  
  await homePage.clickSignOutButton();
  await expect(page).toHaveURL(/loginasdasa/);
})