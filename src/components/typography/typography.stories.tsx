import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from './'

const meta = {
    argTypes: {
        variant: {
            control: { type: 'radio' },
            options: ['H1', 'H2', 'H3', 'H4', 'Body1', 'Subtitle1', 'Body2', 'Subtitle2', 'Caption', 'Overline', 'Link1', 'Link2'],
        },
    },
    component: Typography,
    tags: ['autodocs'],
    title: 'Components/Typography',
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = {
    args: {
        children: 'Hello friend',
        variant: 'H1',
    },
}

export const H2: Story = {
    args: {
        children: 'Hello friend',
        variant: 'H2',
    },
}
export const H3: Story = {
    args: {
        children: 'Hello friend',
        variant: 'H3',
    },
}

export const H4: Story = {
    args: {
        children: 'Hello friend',
        variant: 'H4',
    },
}
export const Body1: Story = {
    args: {
        children: 'Hello friend',
        variant: 'Body1',
    },
}
export const Subtitle1: Story = {
    args: {
        children: 'Hello friend',
        variant: 'Subtitle1',
    },
}
export const Body2: Story = {
    args: {
        children: 'Hello friend',
        variant: 'Body2',
    },
}
export const Subtitle2: Story = {
    args: {
        children: 'Hello friend',
        variant: 'Subtitle2',
    },
}
export const Caption: Story = {
    args: {
        children: 'Hello friend',
        variant: 'Caption',
    },
}
export const Overline: Story = {
    args: {
        children: 'Hello friend',
        variant: 'Overline',
    },
}
export const Link1: Story = {
    args: {
        as: 'a',
        children: 'Hello friend',
        href: 'https://www.google.com',
        variant: 'Link1',
    },
}
export const Link2: Story = {
    args: {
        as: 'a',
        children: 'Hello friend',
        href: 'https://www.google.com',
        variant: 'Link2',
    },
}
