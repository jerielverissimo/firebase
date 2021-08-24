export function renderHtmlTemplate(template, id) {
  const wrapper = document.getElementById(id);
  if (wrapper) {
    wrapper.innerHTML = template;
  }
}
