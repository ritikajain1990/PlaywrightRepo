import { BasePage } from "./BasePage.js"
export class CoursePage extends BasePage
{
    constructor(page)
    {
        super(page);
        this.page=page;
        //write xpath for add new course //button[normalize-space()='Add New Course']
        this.addNewCourseButton=page.locator("//button[normalize-space()='Add New Course']");
        this.thumbnailInput=page.locator("//input[@id='thumbnail']");
        this.courseNameInput=page.locator("//input[@id='name']");
        this.descriptionInput=page.locator("//textarea[@id='description']");
        this.instructorInput=page.locator("//input[@id='instructorNameId']");
        this.priceInput=page.locator("//input[@id='price']");
        this.startDateInput=page.locator("//input[@name='startDate']");
        this.endDateInput=page.locator("//input[@name='endDate']");
        this.selectCategory=page.locator("//div[normalize-space()='Select Category']");
        this.saveButton=page.locator("//button[normalize-space()='Save']");
    }

    //function to click on add new course button
    async clickAddNewCourseButton()
    {
        await this.addNewCourseButton.click();
    }       
    //function to upload thumbnail
    async uploadThumbnail(filePath)
    {
        await this.thumbnailInput.setInputFiles(filePath);
    }
    //function to enter course name
    async enterCourseName(courseName)
    {
        await this.courseNameInput.fill(courseName);
    }
    //function to enter description
    async enterDescription(description)
    {
        await this.descriptionInput.fill(description);
    }
    //fumction to enter instructor name

    async enterInstructorName(instructorName)
    {
        await this.instructorInput.fill(instructorName);
    }
    //function to enter price after clearing the existing value
    async enterPrice(price)
    {
        await this.priceInput.fill('');
        await this.priceInput.fill(price);
    }
    //function 
    async selectCategoryInput(category)
    {
        await this.selectCategory.click();  
        await this.page.waitForTimeout(2000);
         this.categoryOptions=this.page.locator(`//button[normalize-space()='${category}']`);
        await this.categoryOptions.click();
    }
    async clickSaveButton()
    {
        await this.saveButton.click();
    }
   async createdCourseVisible(courseName)
   {
    return await this.page.locator(`//td[normalize-space()='${courseName}']`);
   }
   async deleteCourse(courseName)
   {
    this.deleteButton=this.page.locator(`//td[normalize-space()='${courseName}']/following-sibling::td//button`);
    await this.deleteButton.click();
    await this.page.waitForTimeout(2000);
   
   }
 

}