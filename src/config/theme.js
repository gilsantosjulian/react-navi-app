import theme from 'styled-theming';

// define background colours for `mode` theme
export const backgroundColor = theme('mode', {
  light: '#fafafa',
  dark: '#222',
});

// define text color for `mode` theme
export const textColor = theme('mode', {
  light: '#000',
  dark: '#fff',
});

export const colors = {
  primary: 'rgb(46, 65, 109)',
  secondary: 'rgb(90, 191, 237)',
};
