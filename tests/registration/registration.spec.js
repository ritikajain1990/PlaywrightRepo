import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../../pages/RegistrationPage';
import registrationData from '../../testdata/registration.json';

test.describe('User Registration Tests', () => {
    
    test('Register multiple users from JSON', async ({ page }) => {
        const registrationPage = new RegistrationPage(page);
        
        // Loop through all users in the JSON file
        for (const userData of registrationData) {
            // Go to registration page for each user
            await page.goto('https://freelance-learn-automation.vercel.app/signup');
            
            // Fill in registration form
            await registrationPage.enterFirstName(userData.firstName);
            await registrationPage.enterEmail(userData.email);
            await registrationPage.enterPassword(userData.password);
            await registrationPage.selectInterest(userData.interest);
            await registrationPage.selectGender(userData.gender);
            await registrationPage.selectState(userData.state);
            await registrationPage.selectHobby(userData.hobbies);
            
            // Submit the form
            await registrationPage.clickSubmit();
            
            // Add assertions here as needed
            // For example, check if registration was successful
            // await expect(page.locator('.success-message')).toContainText('Registration successful');
        }
    });
});
