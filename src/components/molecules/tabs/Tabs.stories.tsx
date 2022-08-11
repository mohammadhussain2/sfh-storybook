import React from 'react'
import { Meta, Story } from '@storybook/react'

import { Tabs} from './Tabs'
const meta: Meta = {
    title: 'Tabs',
    component: Tabs,
}

export default meta;


const Template: Story = (args) => <Tabs {...args}/>

// export const Default = ()=> <Button variant='primary'>Click Msse</Button>
export const Default = Template.bind({});

Default.args = {}