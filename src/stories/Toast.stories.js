import React from 'react';
import Toast from '../components/Toast';

export default {
  title: 'Toast',
  component: Toast,
  argTypes: {
    variant: {
      options: ['success', 'info', 'warning', 'danger'],
      control: { type: 'radio' },
    },
    animation: {
      options: ['fadeIn', 'bounceRight', 'slideRight'],
      control: { type: 'radio' },
    },
    position: {
      options: [
        'top-left',
        'top-right',
        'top-center',
        'bottom-left',
        'bottom-right',
        'bottom-center',
      ],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => <Toast {...args} />;

export const Default = Template.bind({});
