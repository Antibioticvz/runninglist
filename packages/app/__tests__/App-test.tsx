/**
 * @format
 */

import 'react-native';
import React from 'react/package';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer/package';

it('renders correctly', () => {
  renderer.create(<App />);
});