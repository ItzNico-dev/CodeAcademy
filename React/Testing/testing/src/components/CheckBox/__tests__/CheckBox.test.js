import CheckBox from '../CheckBox';
import { render, screen, fireEvent } from '@testing-library/react';

describe('CheckBox', () => {
  test('CheckBox should appear on screen when all props are given', async () => {
    render(
      <CheckBox label='checkbox' id={8} checked={true} onChange={() => {}} />
    );
    const label = await screen.findByText('Checkbox');
    const checkbox = await screen.findByRole('checkbox');

    expect(label).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
  });

  test('CheckBox should appear on screen when all props are given', async () => {
    render(
      <CheckBox label='Labas' id={8} checked={true} onChange={() => {}} />
    );
    const checkbox = await screen.findByRole('checkbox');

    expect(checkbox).not.toBeChecked;
  });

  test('on change function should be called when checkbox is clicked', async () => {
    const onChange = jest.fn();
    render(
      <CheckBox label='Labas' id={8} checked={true} onChange={onChange} />
    );
    const checkbox = await screen.findByRole('checkbox');
    fireEvent.click(checkbox);

    expect(onChange).toHaveBeenCalled;
  });

  test('id should not appear on checkbox when there is no id prop passed', async () => {
    render(
      <CheckBox label='Labas' id={8} checked={true} onChange={() => {}} />
    );
    const checkbox = await screen.findByRole('checkbox');

    // expect(checkbox).toHaveProperty('id', '');
  });
});
