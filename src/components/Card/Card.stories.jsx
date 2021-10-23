import React from 'react';
import Card from './Card';

export default {
    component: Card,
    title: 'Component/Card',
};

const Template = (args) => <Card {...args} />;

export const Red = Template.bind({});

Red.args = {
    color: 'red',
}

export const Bisque = Template.bind({});

Bisque.args = {
    color: 'bisque',
}

export const Blue = Template.bind({});

Blue.args = {
    color: 'blue',
}

