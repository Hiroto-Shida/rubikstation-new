import type { Meta, StoryFn } from '@storybook/react';
import Sample1 from './index';

export default {
	title: 'Components/Sample/Sample1',
	component: Sample1,
} as Meta<typeof Sample1>;

const Template: StoryFn<typeof Sample1> = () => <Sample1 />;

export const Default = Template.bind({});
