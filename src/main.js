import employeesData from './data/employee-data.json';
import { initializeEmployeesState } from './state/state.js';
import { renderEmployeeList } from './features/employee-list/employee-list.js';

import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './styles/main.scss';
import { initializeFilters } from './features/filter-form/filter-form.js';
import { setStatistics } from './features/statistics/statistics.js';
import { initializePagination } from './features/pagination/pagination.js';

import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

initializeEmployeesState(employeesData);
renderEmployeeList();
initializeFilters();
setStatistics();
initializePagination();
