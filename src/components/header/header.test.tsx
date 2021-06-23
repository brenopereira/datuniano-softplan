import React from 'react';
import renderer from 'react-test-renderer';

import { Header } from '.';

test('Validate render Header component', () => {
    const component = renderer.create(<Header title='Softplan' />);

    console.log(component.toJSON());
});
