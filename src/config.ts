
export const lighthouseConfig = {
    extends: 'lighthouse:default',
    settings: {
        formFactor: 'desktop',
        screenEmulation: {
            mobile: false,
            width: 1920,
            height: 1080,
            deviceScaleFactor: 1,
            disabled: false
        }
    }
};


export const lighthouseFlags = {
    output: ["json"],
    logLevel: 'info'
};

const url = "https://blog.vizallati.guru";

export const pages = {
    homepage: url + '/#',
    activityFeed: url + '/activity-feed',
    projects: url + '/projects',
    testAutomationJourney: url + '/test-automation-journey',
    devopsJourney: url + '/devops-journey',
    otherInterest: url + '/other-interest',
    about: url + '/about'
}