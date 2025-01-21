import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

test('Login and navigate to dashboard', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    // Navigate to the login page
    await loginPage.navigateTo('https://example.com/login');

    // Perform login
    await loginPage.login('testuser', 'password123');

    // Verify redirection to the dashboard
    await expect(page).toHaveURL('https://example.com/dashboard');

    // Verify greeting text
    const greeting = await dashboardPage.getGreetingText();
    expect(greeting).toBe('Welcome, Test User!');
});