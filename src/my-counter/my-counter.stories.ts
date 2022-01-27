import "./index";

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
    title: 'Example/My Counter',
    component: 'my-counter',
};

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = ({ value, slot }: any) => `
    <my-counter value="${value}">${slot}</my-counter>
`;

export const Primary: any = Template.bind({});
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
Primary.args = {
    value: 6
};

export const BadInput: any = Template.bind({});
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
BadInput.args = {
    value: 'Test'
};
