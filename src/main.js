import employeesData from './data/employee-data.json';
import { initializeEmployeesState } from './state/state.js';
import { renderEmployeeList } from './features/employee-list/employee-list.js';

import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './styles/main.css';
import './styles/variables.css';
import { initializeFilters } from './features/filter-form/filter-form.js';

initializeEmployeesState(employeesData);
renderEmployeeList();
initializeFilters();
