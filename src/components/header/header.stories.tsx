import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Header, HeaderInterface } from './index';

export default {
    title: 'Boiler/Header',
    component: Header
} as Meta;

const HeaderBase: Story<HeaderInterface> = args => <Header {...args} />;

export const Default = HeaderBase.bind({});

HeaderBase.args = {
    title: 'Título do projeto'
};
