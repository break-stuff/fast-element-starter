import { FASTElement, html, attr, customElement } from '@microsoft/fast-element';
import { styles } from './styles';

const template = html<MyCounter>`
  <template>
    <div class="total-label">
      <slot></slot>:
    </div>
  
    <span class="controls">
      <button class="control" @click="${x => x.decrement()}" aria-label="decrease">
        -
      </button>
      <span class="count">${x => x.value}</span>
      <button class="control" @click="${x => x.increment()}" aria-label="increase">
        +
      </button>
    </span>
    <button class="reset" @click="${x => x.reset()}">
      Reset
    </button>
  </template>
`;

@customElement({
  name: 'my-counter',
  template,
  styles
})
export class MyCounter extends FASTElement {
  @attr value: number = 0;

  increment(): void {
    this.value += 1;
    this.sendUpdate();
  }

  decrement(): void {
    this.value -= 1;
    this.sendUpdate();
  }

  reset(): void {
    this.value = 0;
    this.sendUpdate();
  }

  private sendUpdate() {
    this.$emit('updated', this.value);
  }
}
