
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
    output: "html",
    logLevel: 'info'
};
