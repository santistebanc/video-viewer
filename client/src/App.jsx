import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { BrowserRouter } from 'react-router-dom';

import Base from './containers/Base.jsx';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

ReactDom.render((
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <BrowserRouter>
      <Base />
    </BrowserRouter>
  </MuiThemeProvider>), document.getElementById('root'));
