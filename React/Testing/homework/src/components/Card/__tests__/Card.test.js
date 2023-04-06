import Card from '../Card';
import { render, screen } from '@testing-library/react';

describe('Card', () => {
  test('should have rendered when the application starts', async () => {
    render(<Card />);

    const h1Tag = await screen.findByText('Lorem');

    expect(h1Tag).toBeInTheDocument();
  });
  test('should have rendered when the application starts', async () => {
    render(<Card />);

    const btns = await screen.findAllByRole('button');

    expect(btns[0]).toBeInTheDocument();
    expect(btns[1]).toBeInTheDocument();
    expect(btns.length).toBe(2);
  });
});
