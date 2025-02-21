import lighthouse from 'lighthouse';
import {describe, test} from "vitest";
import fs from "fs";
import {lighthouseConfig, lighthouseFlags} from '../src/config'

const defaultTimeout: number = 60000;



describe('Performance', () => {
    test('homepage', async () => {
        const homePage = "https://blog.vizallati.guru"
        // @ts-ignore
        const lighthouseReport = await lighthouse(homePage, lighthouseFlags, lighthouseConfig);
        // @ts-ignore
        fs.writeFileSync('lighthouse-report.html', lighthouseReport.report);

    }, defaultTimeout)

});

