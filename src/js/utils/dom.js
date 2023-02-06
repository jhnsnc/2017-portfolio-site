import crelns from 'crelns';

export function fragFromStr(html) {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content;
}

// just exporting a few namespace utils; no need yet for heavy SVG manipulation
export const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
export const XLINK_NAMESPACE = 'http://www.w3.org/1999/xlink';

export const crsvg = crelns.bind(null, 'http://www.w3.org/2000/svg');
