import {describe, expect, test} from "vitest";
import {lighthouseAudit} from "../src/utils";
import {pages} from "../src/config";


const defaultTimeout: number = 60000;


describe('Performance', () => {
    test('homepage', async () => {
        const audit = await lighthouseAudit(pages.homepage)
        // @ts-ignore
        expect(audit.score, 'Performance threshold not met').toBeGreaterThan(0.80);
    }, defaultTimeout);
    test('activity-feed', async () => {
        const audit = await lighthouseAudit(pages.activityFeed)
        // @ts-ignore
        expect(audit.score, 'Performance threshold not met').toBeGreaterThan(0.80);
    }, defaultTimeout);
    test('projects', async () => {
        const audit = await lighthouseAudit(pages.projects)
        // @ts-ignore
        expect(audit.score, 'Performance threshold not met').toBeGreaterThan(0.80);
    }, defaultTimeout);
    test('test-automation-journey', async () => {
        const audit = await lighthouseAudit(pages.testAutomationJourney)
        // @ts-ignore
        expect(audit.score, 'Performance threshold not met').toBeGreaterThan(0.70);
    }, defaultTimeout);
    test('devops-journey', async () => {
        const audit = await lighthouseAudit(pages.devopsJourney)
        // @ts-ignore
        expect(audit.score, 'Performance threshold not met').toBeGreaterThan(0.70);
    }, defaultTimeout);
    test('other-interest', async () => {
        const audit = await lighthouseAudit(pages.otherInterest)
        // @ts-ignore
        expect(audit.score, 'Performance threshold not met').toBeGreaterThan(0.80);
    }, defaultTimeout);
    test('about', async () => {
        const audit = await lighthouseAudit(pages.about)
        // @ts-ignore
        expect(audit.score, 'Performance threshold not met').toBeGreaterThan(0.80);
    }, defaultTimeout);

});

