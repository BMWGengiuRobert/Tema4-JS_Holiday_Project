import {
  getAllEmployees,
  resetState,
  setFilteredEmployees,
} from '../../state/state.js';
import { renderEmployeeList } from '../employee-list/employee-list.js';

const form = document.getElementById('filter-form');
const statusFilter = document.getElementById('status-filter');
const searchFilter = document.getElementById('search-filter');
const resetButton = document.getElementById('reset-filters');
const minimumSearchLength = 2;

function applyFilters() {
  const employees = getAllEmployees();
  const searchFilterValue = searchFilter.value;
  const statusFilterValue = statusFilter.value.trim();

  let filteredEmployees = employees;

  if (statusFilterValue !== '') {
    filteredEmployees = filteredEmployees.filter((employee) => {
      if (statusFilterValue === 'positive') {
        return employee.status === 'good';
      } else if (statusFilterValue === 'negative') {
        return employee.status === 'naughty';
      }
    });
  }

  if (searchFilterValue.length >= minimumSearchLength) {
    filteredEmployees = filteredEmployees.filter((employee) => {
      const nameMatch = employee.name
        .toLowerCase()
        .includes(searchFilterValue.toLowerCase());
      const presentMatch = employee.desiredPresent
        .toLowerCase()
        .includes(searchFilterValue.toLowerCase());
      return nameMatch || presentMatch;
    });
  }

  setFilteredEmployees(filteredEmployees);
  renderEmployeeList();
}

function handelFormReset() {
  form.reset();
  resetState();
  renderEmployeeList();
}

export function initializeFilters() {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    applyFilters();
  });

  resetButton.addEventListener('click', handelFormReset);
}
