import React from 'react';
import  Button from './Button';

export default {
    component: Button,
    title: 'component/Button'
};

const Template = (args) => <Button {...args} />

export  const Default = Template.bind({});

Default.args = {
    text: 'Button',
}

export const Loading = Template.bind({});

Loading.args = {
    loading: true,
}

export const Disabled = Template.bind({});

Disabled.args = {
    disabled: true,
}
