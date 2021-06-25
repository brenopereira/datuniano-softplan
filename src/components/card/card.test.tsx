import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Card } from '.';

test('Validate render Card component', () => {
    const component = renderer.create(
        <Card country='Brazil' capital='Brasília' flag='🇧🇷' />
    );

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});
