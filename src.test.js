import React from 'react';
import {WelcomeScreen} from './app/auth/welcome.screen';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<WelcomeScreen />).toJSON();
    expect(rendered).toBeTruthy();
});
