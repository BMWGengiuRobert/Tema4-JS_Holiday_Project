import employeesData from './data/employee-data.json';
import { initializeEmployeesState } from './state/state.js';
import { renderEmployeeList } from './features/employee-list/employee-list.js';

import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './styles/main.scss';
import { initializeFilters } from './features/filter-form/filter-form.js';
import { setStatistics } from './features/statistics/statistics.js';
import { initializePagination } from './features/pagination/pagination.js';

initializeEmployeesState(employeesData);
renderEmployeeList();
initializeFilters();
setStatistics();
initializePagination();
