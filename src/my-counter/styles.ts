import { css } from '@microsoft/fast-element'

export const styles = css`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 150px;
    text-align: center;
  }

  .controls {
    display: flex;
    justify-content: space-between;
    border-radius: 50%;
    border: solid 1px black;
    border-radius: 10rem;
    display: inline-flex;
    overflow: hidden;
    margin-bottom: 1rem;
  }

  .control {
    font-size: 1.5rem;
    padding: 0.75rem 1rem;
    margin: -1px;
  }

  .count {
    font-size: 1.5rem;
    padding: 0.75rem 1.5rem;
  }

  .reset {
    padding: 0.75rem;
  }

  button {
    line-height: 1;
    cursor: pointer;
  }
`;
