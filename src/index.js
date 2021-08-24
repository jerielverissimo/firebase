import './styles/main.scss';

import { makeNavView } from './components/navigation/navigation.js';
import { renderHtmlTemplate } from './render.js';
import homeTemplate from './components/home/home.view.html';

function run() {
  const navSection = document.getElementById('section-nav');
  const navView = makeNavView();
  navSection.appendChild(navView);
  renderHtmlTemplate(homeTemplate, 'section-content');
}

run();
