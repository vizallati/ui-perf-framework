import lighthouse from "lighthouse";
import {lighthouseConfig, lighthouseFlags, pages} from "./config";
import fs from "fs";


export async function lighthouseAudit(url: string): Promise<object> {
    // @ts-ignore
    const lighthouseReport = await lighthouse(url, lighthouseFlags, lighthouseConfig);
    // const reportName = url.split("/")[3] + '-' + 'lighthouse-report.html'
    // @ts-ignore
    // fs.writeFileSync(reportName, lighthouseReport.report[0]);
    // @ts-ignore
    const auditData = JSON.parse(lighthouseReport.report)
    return auditData.categories.performance;
}