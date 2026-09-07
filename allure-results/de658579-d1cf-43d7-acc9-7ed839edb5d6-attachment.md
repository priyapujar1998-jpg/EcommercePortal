# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: googleSearch.spec.ts >> Search for iPhone 16 on Google and assert the page
- Location: tests/googleSearch.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[name="q"]')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e3]:
    - link "About" [ref=e4] [cursor=pointer]:
      - /url: https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header
    - link "Store" [ref=e5] [cursor=pointer]:
      - /url: https://store.google.com/IN?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN
    - generic [ref=e7]:
      - generic [ref=e8]:
        - link "Gmail" [ref=e10] [cursor=pointer]:
          - /url: https://mail.google.com/mail/&ogbl
        - link "Search for Images" [ref=e12] [cursor=pointer]:
          - /url: https://www.google.com/imghp?hl=en&ogbl
          - text: Images
      - button "Google apps" [ref=e15] [cursor=pointer]:
        - img [ref=e16]
      - link "Sign in" [ref=e20] [cursor=pointer]:
        - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
  - img "Google" [ref=e23]
  - search [ref=e31]:
    - generic [ref=e33]:
      - generic [ref=e35]:
        - button "Add files and tools" [ref=e40] [cursor=pointer]:
          - img [ref=e42]
        - combobox "Search" [active] [ref=e45]
        - generic [ref=e46]:
          - generic [ref=e47]:
            - button "Search by voice" [ref=e50] [cursor=pointer]:
              - img [ref=e51]
            - button "Search by image" [ref=e55] [cursor=pointer]:
              - img [ref=e56]
          - link "AI Mode" [ref=e58] [cursor=pointer]:
            - generic [ref=e60]:
              - img [ref=e62]
              - generic [ref=e69]: AI Mode
      - generic [ref=e72]:
        - button "Create images" [ref=e73] [cursor=pointer]:
          - generic [ref=e74]: 🍌
          - generic [ref=e75]: Create images
        - button "Ask about files" [ref=e76] [cursor=pointer]:
          - img [ref=e78]
          - generic [ref=e80]: Ask about files
        - button "Brainstorm" [ref=e81] [cursor=pointer]:
          - img [ref=e83]
          - generic [ref=e85]: Brainstorm
        - button "I am feeling lucky" [ref=e86] [cursor=pointer]:
          - generic [ref=e87]: I am feeling lucky
  - generic [ref=e90]:
    - text: "Google offered in:"
    - link "हिन्दी" [ref=e91] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_01bhr6Aa9ib84iOwV4PY1YErV0o%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwirp67k09yWAxWIieEIHfuYEIkQ2ZgBCCk
    - link "বাংলা" [ref=e92] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_01bhr6Aa9ib84iOwV4PY1YErV0o%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwirp67k09yWAxWIieEIHfuYEIkQ2ZgBCCo
    - link "తెలుగు" [ref=e93] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_01bhr6Aa9ib84iOwV4PY1YErV0o%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwirp67k09yWAxWIieEIHfuYEIkQ2ZgBCCs
    - link "मराठी" [ref=e94] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_01bhr6Aa9ib84iOwV4PY1YErV0o%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwirp67k09yWAxWIieEIHfuYEIkQ2ZgBCCw
    - link "தமிழ்" [ref=e95] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_01bhr6Aa9ib84iOwV4PY1YErV0o%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwirp67k09yWAxWIieEIHfuYEIkQ2ZgBCC0
    - link "ગુજરાતી" [ref=e96] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_01bhr6Aa9ib84iOwV4PY1YErV0o%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwirp67k09yWAxWIieEIHfuYEIkQ2ZgBCC4
    - link "ಕನ್ನಡ" [ref=e97] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_01bhr6Aa9ib84iOwV4PY1YErV0o%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwirp67k09yWAxWIieEIHfuYEIkQ2ZgBCC8
    - link "മലയാളം" [ref=e98] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_01bhr6Aa9ib84iOwV4PY1YErV0o%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwirp67k09yWAxWIieEIHfuYEIkQ2ZgBCDA
    - link "ਪੰਜਾਬੀ" [ref=e99] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_01bhr6Aa9ib84iOwV4PY1YErV0o%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwirp67k09yWAxWIieEIHfuYEIkQ2ZgBCDE
  - contentinfo [ref=e101]:
    - generic [ref=e102]: India
    - generic [ref=e103]:
      - generic [ref=e104]:
        - link "Advertising" [ref=e105] [cursor=pointer]:
          - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
        - link "Business" [ref=e106] [cursor=pointer]:
          - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
        - link "How Search works" [ref=e107] [cursor=pointer]:
          - /url: https://google.com/search/howsearchworks/?fg=1
      - generic [ref=e108]:
        - link "Privacy" [ref=e109] [cursor=pointer]:
          - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
        - link "Terms" [ref=e110] [cursor=pointer]:
          - /url: https://policies.google.com/terms?hl=en-IN&fg=1
        - button "Settings" [ref=e114] [cursor=pointer]:
          - generic [ref=e115]: Settings
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Search for iPhone 16 on Google and assert the page', async ({ page }) => {
  4  |   // Navigate to Google
  5  |   await page.goto('https://www.google.com');
  6  | 
  7  |   // Accept cookies if prompted (optional, depending on region)
  8  |   const acceptCookiesButton = page.locator('button:has-text("Accept")');
  9  |   if (await acceptCookiesButton.isVisible()) {
  10 |     await acceptCookiesButton.click();
  11 |   }
  12 | 
  13 |   // Search for "iPhone 16"
> 14 |   await page.fill('input[name="q"]', 'iPhone 16');
     |              ^ Error: page.fill: Test timeout of 30000ms exceeded.
  15 |   await page.press('input[name="q"]', 'Enter');
  16 | 
  17 |   // Wait for search results to load
  18 |   await page.waitForSelector('#search');
  19 | 
  20 |   // Click on the first search result
  21 |   const firstResult = page.locator('#search a').first();
  22 |   await firstResult.click();
  23 | 
  24 |   // Assert the page title contains "iPhone 16"
  25 |   await expect(page).toHaveTitle(/iPhone 16/i);
  26 | });
```