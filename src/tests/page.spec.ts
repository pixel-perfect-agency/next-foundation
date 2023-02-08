import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('/');

    // Expect that the page has an h1 with the text "Next Foundation"
    expect(await page.textContent('h1')).toBe('Next Foundation');
});
