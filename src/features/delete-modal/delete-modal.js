import { deleteEmployeeFromState } from '../../state/state.js';
import { renderEmployeeList } from '../employee-list/employee-list.js';
import { setStatistics } from '../statistics/statistics.js';
import { updateRecentlyViewedList } from '../recently-viewed/recently-viewed.js';

export function openDeleteModal(employee) {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.id = 'delete-modal';

  // Create modal content wrapper
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  modal.appendChild(modalContent);

  // create modal title
  const title = document.createElement('h2');
  title.classList.add('text-color-red');
  title.textContent = `Delete Employee: ${employee.name}`;
  modalContent.appendChild(title);

  // create confirmation message
  const message = document.createElement('p');
  message.classList.add('modal-message');
  message.textContent = `Are you sure you want to delete ${employee.name}? This action cannot be undone.`;
  modalContent.appendChild(message);

  // create buttons
  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('form-buttons');
  modalContent.appendChild(buttonsDiv);
  const confirmButton = document.createElement('button');
  confirmButton.type = 'submit';
  confirmButton.textContent = 'Delete';
  buttonsDiv.appendChild(confirmButton);
  const cancelButton = document.createElement('button');
  cancelButton.type = 'button';
  cancelButton.textContent = 'Cancel';
  buttonsDiv.appendChild(cancelButton);

  document.body.appendChild(modal);

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      document.body.removeChild(modal);
    }
  });

  cancelButton.addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  confirmButton.addEventListener('click', () => {
    deleteEmployeeFromState(employee.id);
    renderEmployeeList();
    setStatistics();
    updateRecentlyViewedList();
    document.body.removeChild(modal);
  });
}
