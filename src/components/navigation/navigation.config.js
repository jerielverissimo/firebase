import aboutThisSiteTemplate from '../about/about.view.html';
import homeTemplate from '../home/home.view.html';

const MAIN_CONTENT_SECTION = 'section-content';

export const navConfig = [
  ['Home', homeTemplate, MAIN_CONTENT_SECTION],
  ['About this site', aboutThisSiteTemplate, MAIN_CONTENT_SECTION],
];
