import React from 'react';
import renderer from 'react-test-renderer';

import { Loading } from '.';

test('Validate render Loading component', () => {
    const component = renderer.create(<Loading />);

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});
