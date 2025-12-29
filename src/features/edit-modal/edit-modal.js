import { updateEmployeeInState } from '../../state/state.js';
import { renderEmployeeList } from '../employee-list/employee-list.js';
import { setStatistics } from '../statistics/statistics.js';

export function openEditModal(employee) {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.id = 'edit-modal';

  // Create modal content wrapper
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  modal.appendChild(modalContent);

  // create modal title
  const title = document.createElement('h2');
  title.classList.add('text-color-green');
  title.textContent = `Edit Employee: ${employee.name}`;
  modalContent.appendChild(title);

  // create form
  const form = document.createElement('form');
  form.id = 'edit-employee-form';
  modalContent.appendChild(form);

  // create name input
  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Name:';
  form.appendChild(nameLabel);
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.name = 'name';
  nameInput.value = employee.name;
  form.appendChild(nameInput);

  // create location input
  const locationLabel = document.createElement('label');
  locationLabel.textContent = 'Location:';
  form.appendChild(locationLabel);
  const locationInput = document.createElement('input');
  locationInput.type = 'text';
  locationInput.name = 'location';
  locationInput.value = employee.location;
  form.appendChild(locationInput);

  // create desired present input
  const presentLabel = document.createElement('label');
  presentLabel.textContent = 'Desired Present:';
  form.appendChild(presentLabel);
  const presentInput = document.createElement('input');
  presentInput.type = 'text';
  presentInput.name = 'desiredPresent';
  presentInput.value = employee.desiredPresent;
  form.appendChild(presentInput);

  // create notes input
  const notesLabel = document.createElement('label');
  notesLabel.textContent = 'Notes:';
  form.appendChild(notesLabel);
  const notesInput = document.createElement('textarea');
  notesInput.name = 'notes';
  notesInput.value = employee.notes;
  form.appendChild(notesInput);

  // create status select
  const statusLabel = document.createElement('label');
  statusLabel.textContent = 'Status:';
  form.appendChild(statusLabel);
  const statusSelect = document.createElement('select');
  statusSelect.name = 'status';
  const goodOption = document.createElement('option');
  goodOption.value = 'good';
  goodOption.textContent = 'Good';
  const naughtyOption = document.createElement('option');
  naughtyOption.value = 'naughty';
  naughtyOption.textContent = 'Naughty';
  statusSelect.appendChild(goodOption);
  statusSelect.appendChild(naughtyOption);
  statusSelect.value = employee.status;
  form.appendChild(statusSelect);

  // create form buttons
  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('form-buttons');
  const saveButton = document.createElement('button');
  saveButton.type = 'submit';
  saveButton.textContent = 'Save';
  buttonsDiv.appendChild(saveButton);
  const cancelButton = document.createElement('button');
  cancelButton.type = 'button';
  cancelButton.textContent = 'Cancel';
  buttonsDiv.appendChild(cancelButton);
  form.appendChild(buttonsDiv);
  document.body.appendChild(modal);

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      document.body.removeChild(modal);
    }
  });

  cancelButton.addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const updatedEmployee = {
      ...employee,
      name: nameInput.value,
      location: locationInput.value,
      desiredPresent: presentInput.value,
      notes: notesInput.value,
      status: statusSelect.value,
    };
    updateEmployeeInState(updatedEmployee);
    renderEmployeeList();
    setStatistics();
    document.body.removeChild(modal);
  });
}
