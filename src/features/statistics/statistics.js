import { getAllEmployees } from '../../state/state.js';

const totalCountSpan = document.getElementById('total-count');
const positiveCountSpan = document.getElementById('positive-count');
const negativeCountSpan = document.getElementById('negative-count');

export function setStatistics() {
  totalCountSpan.textContent = getAllEmployees().length;
  positiveCountSpan.textContent = getAllEmployees().filter(
    (employee) => employee.status === 'good'
  ).length;
  negativeCountSpan.textContent = getAllEmployees().filter(
    (employee) => employee.status === 'naughty'
  ).length;
}
