import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import About from '..';

//  this will ensure that after every test, we won't have any leftover memory data that could give us false results
afterEach(cleanup);

describe('About component', () => {
    // renders About test
    // First test
    it('renders', () => {
        render(<About/>);
    });
    // Second test
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })

})


