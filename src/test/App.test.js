import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

test('Renders all the elements', () => {
  render(<App />);
  const title = screen.getByText('Pomodoro Timer');
  const taskTimerLabel = screen.getByText('Task time(seconds):');
  const breakTimerLabel = screen.getByText('Break time(seconds):');
  const timeInput = screen.getByTestId('taskTime');
  const breakInput = screen.getByTestId('breakTime');
  const setBTN = screen.getByText('Set');
  const resetBTN = screen.getByText('Reset');
  const startPauseBTN = screen.getByText('Start/Pause');
  const timer = screen.getByText(/remaining time/i)
  expect(title).toBeInTheDocument();
  expect(taskTimerLabel).toBeInTheDocument();
  expect(timeInput).toBeInTheDocument();
  expect(breakTimerLabel).toBeInTheDocument();
  expect(breakInput).toBeInTheDocument();
  expect(setBTN).toBeInTheDocument();
  expect(resetBTN).toBeInTheDocument();
  expect(startPauseBTN).toBeInTheDocument();
  expect(timer).toBeInTheDocument();
});

test('change values on timePicker', () => {
  render(<App />);
  const timeInput = screen.getByTestId('taskTime');
  const breakInput = screen.getByTestId('breakTime');

  fireEvent.change(timeInput, { target: { value: 8 } })
  fireEvent.change(breakInput, { target: { value: 3 } })

  const timeInput2 = screen.getByTestId('taskTime');
  const breakInput2 = screen.getByTestId('breakTime');

  expect(timeInput2).toHaveValue(8);
  expect(breakInput2).toHaveValue(3);
});
