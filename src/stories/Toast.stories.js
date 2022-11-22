import Main from '@components/Main';

export default {
  title: 'Toasts',
  component: Main,
  argTypes: {
    text: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
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
    bgColor: {
      control: 'color',
    },
    iconAndTextColor: {
      control: 'color',
    },
    spacing: {
      control: 'number',
    },
    id: {
      control: true,
    },
  },
};

const Template = (args) => <Main {...args} />;
export const Toasts = Template.bind({});
