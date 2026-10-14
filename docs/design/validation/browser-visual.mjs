/* global document, innerWidth */
import process from "node:process";
import console from "node:console";
import { URL } from "node:url";
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
import { fileURLToPath } from 'node:url';
const evidenceDir = fileURLToPath(new URL('./', import.meta.url));
const previewUrl = process.env.MVP_PREVIEW_URL || 'http://127.0.0.1:5173';
import { mkdir,writeFile } from 'node:fs/promises';
const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH ? {executablePath:process.env.CHROME_PATH} : {})});
await mkdir(evidenceDir,{recursive:true});
const results=[];
for(const [width,height] of [[390,844],[768,1024],[1440,900],[1920,1080]]){
 const page=await browser.newPage({viewport:{width,height}});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(previewUrl);await page.evaluate(()=>document.fonts.ready);
 await page.screenshot({path:`${evidenceDir}today-${width}.png`});
 const metrics=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,buttons:[...document.querySelectorAll('button:not(:disabled),label:has(input)')].filter(e=>e.getBoundingClientRect().width>0).map(e=>({text:e.textContent, width:e.getBoundingClientRect().width,height:e.getBoundingClientRect().height})).filter(e=>e.width<44||e.height<44)}));
 results.push({width,height,errors,...metrics});
 if(width===390){await page.getByRole('button',{name:'See reply',exact:true}).scrollIntoViewIfNeeded();await page.screenshot({path:evidenceDir+'today-390-bottom.png'});}
 await page.close();
}
await writeFile(evidenceDir+'visual-results.json',JSON.stringify(results,null,2));
console.log(JSON.stringify(results,null,2));await browser.close();
