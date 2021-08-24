import { renderHtmlTemplate } from '../../render.js';
import { navConfig } from './navigation.config.js';

const handleNavClick = (template, id) => {
  return (event) => {
    event.preventDefault();
    renderHtmlTemplate(template, id);
  };
};

export function makeNavLink(navItem) {
  const [label, template, id] = navItem;

  const link = document.createElement('button');

  link.textContent = label;
  link.addEventListener('click', handleNavClick(template, id));
  link.setAttribute('class', 'btn btn-warning');
  link.setAttribute('style', 'margin: 5px;');

  return link;
}

export function makeNavView() {
  const wrapper = document.createElement('div');

  navConfig.forEach((navItem) => {
    const navLink = makeNavLink(navItem);
    wrapper.appendChild(navLink);
  });

  return wrapper;
}
