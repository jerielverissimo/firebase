import aboutThisSiteTemplate from './components/about/about.view.html';
import homeTemplate from './components/home/home.view.html';

const MAIN_CONTENT_SECTION = 'section-content';

export const navConfig = [
  ['Home', homeTemplate, MAIN_CONTENT_SECTION],
  ['About this site', aboutThisSiteTemplate, MAIN_CONTENT_SECTION],
];
