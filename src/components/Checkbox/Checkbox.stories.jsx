import React from 'react';
import  Checkbox from './Checkbox';

export default {
    component: Checkbox,
    title: 'component/Checkbox'
};

const Template = (args) => <Checkbox {...args} />

export  const Default = Template.bind({});

Default.args = {
    label: 'Label Checkbox',
    checkChange: (event) => console.log(event.target.checked)
}
