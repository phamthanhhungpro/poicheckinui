const apiUrl = 'http://113.160.187.187:1118/';
const idFrontEndUrl = 'https://poiidui.vercel.app/';
const hrmFrontEndUrl = 'https://poihrmui.vercel.app';
const iOFrontEndUrl = 'https://poicheckinui.vercel.app';

export const environment = {
    production: true,
    signInUrl: idFrontEndUrl + 'sign-in',
    hrmFeUrl: hrmFrontEndUrl,
    ioFeUrl: iOFrontEndUrl,
    apiUrl: apiUrl,
    idApiUrl: apiUrl + 'id/api/',
    idApiUrlWithOutEndding: apiUrl + 'id',
    hrmApiUrl: apiUrl + 'hrm/api/',
};
