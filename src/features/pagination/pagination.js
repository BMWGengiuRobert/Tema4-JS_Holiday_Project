import {
  getFilteredEmployees,
  getItemsPerPage,
  setCurrentPage,
  getCurrentPage,
} from '../../state/state.js';
import { renderEmployeeList } from '../employee-list/employee-list.js';

const prevButtonTop = document.getElementById('prev-page-top');
const nextButtonTop = document.getElementById('next-page-top');
const pageInfoTop = document.getElementById('page-info-top');

const prevButtonBottom = document.getElementById('prev-page-bottom');
const nextButtonBottom = document.getElementById('next-page-bottom');
const pageInfoBottom = document.getElementById('page-info-bottom');

function getTotalPages() {
  const filteredEmployees = getFilteredEmployees();
  const itemsPerPage = getItemsPerPage();
  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);
  return totalPages > 0 ? totalPages : 1;
}

function goToNextPage() {
  const currentPage = getCurrentPage();
  const totalPages = getTotalPages();

  if (currentPage < totalPages) {
    setCurrentPage(currentPage + 1);
    renderEmployeeList();
    updatePagination();
  }
}

function goToPrevPage() {
  const currentPage = getCurrentPage();
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
    renderEmployeeList();
    updatePagination();
  }
}

export function updatePagination() {
  const currentPage = getCurrentPage();
  const totalPages = getTotalPages();

  pageInfoTop.textContent = `Page ${currentPage} of ${totalPages}`;
  pageInfoBottom.textContent = `Page ${currentPage} of ${totalPages}`;

  prevButtonTop.disabled = currentPage === 1;
  prevButtonBottom.disabled = currentPage === 1;

  nextButtonTop.disabled = currentPage >= totalPages;
  nextButtonBottom.disabled = currentPage >= totalPages;
}

export function initializePagination() {
  prevButtonTop.addEventListener('click', goToPrevPage);
  nextButtonTop.addEventListener('click', goToNextPage);

  prevButtonBottom.addEventListener('click', goToPrevPage);
  nextButtonBottom.addEventListener('click', goToNextPage);
  updatePagination();
}
