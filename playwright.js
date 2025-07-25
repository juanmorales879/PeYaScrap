const playwright = require('playwright');

(async () => {
  const labels = ['Venezuela', 'Mi Perfil', 'Iniciar sesión']
  const browser = await playwright.chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://pedidosya.com');
  for (const label of labels){
    await page.click(`text=${label}`, {delay:2500});
  }

  //await page.waitForTimeout(10000);
  //await browser.close();
  
})();
