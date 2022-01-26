import "./index";

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
    title: 'Example/My Counter',
    component: 'my-counter',
    // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
    argTypes: {
        onUpdated: { action: 'onUpdated' },
        value: {
            control: { type: 'number' }
        },
        slot: {
            control: { type: 'string' }
        },

    },
};

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = ({ value, slot }: any) => `
    <my-counter value="${value}">${slot}</my-counter>
`;

export const Primary: any = Template.bind({});
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
Primary.args = {
    value: 0,
    slot: 'My Count'
};

export const BadInput: any = Template.bind({});
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
BadInput.args = {
    value: 'Test'
};
