import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme/mainTheme';
import GlobalTheme from '../src/theme/GlobalTheme';

function loadStories() {
  const req = require.context('../src/components', true, /\.stories\.js$/);
  req.keys().forEach((filename) => req(filename));
}

addDecorator((story) => (
  <>
    <GlobalTheme />
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  </>
));

configure(loadStories, module);
