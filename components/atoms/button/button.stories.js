import { storiesOf } from '@storybook/vue';
import DefaultButton from './default-button';

storiesOf('Button', module)
  .add('default button', () => ({
    components: { DefaultButton },
    template: `<default-button>hello</default-button>`
  }));
