import React from 'react'
import { Meta, Story } from '@storybook/react'

import { Button, PropsInt} from '../src/components/atoms/button/Button'
const meta: Meta = {
    title: 'Buttons',
    component: Button,
}

export default meta;


const Template: Story<PropsInt> = (args) => <Button {...args}/>

// export const Default = ()=> <Button variant='primary'>Click Msse</Button>
export const Default = Template.bind({});
export const Secondary = Template.bind({});
Default.args = {
    children: 'Primary Button',
    variant: 'primary'
}

Secondary.args = {
    children: 'Secondary Button',
    variant: 'secondary'
}