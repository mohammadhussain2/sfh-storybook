import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

import { Thing } from '../src/Thing'

describe('Thing', () => {
  it('renders without crashing', () => {
    const {getByText} = render(<Thing>Hello</Thing>)
    const helloNode = getByText('Hello')
    expect(helloNode).toBeInTheDocument()
  });
});


// import { render, screen } from '@testing-library/react'
// import App from 'src/App';

// describe('App', () => {
//     test('renders home page', () => {
//         render(<App />);
//         const text = screen.getByText(/Running Finance /i);
//         expect(text).toBeInTheDocument();
//     });
// });
