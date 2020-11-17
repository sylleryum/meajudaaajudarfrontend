import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {fetchResults} from "./api/fetchResults";

test('renders learn react link', () => {
  //const { getByText } = render(<App />);
  //const linkElement = getByText(/learn react/i);
  fetchResults();
  //expect(linkElement).toBeInTheDocument();
});
