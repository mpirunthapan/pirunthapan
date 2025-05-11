export const GA_TRACKING_ID = "G-75NYCV657M";

export const pageview = (url) => {
    window.gtag("config", GA_TRACKING_ID, {
        page_path: url,
    });
};