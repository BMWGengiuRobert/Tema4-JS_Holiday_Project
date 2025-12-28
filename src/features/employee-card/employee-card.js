export function createEmployeeCard(employee, clickHandler) {
  const card = document.createElement('article');

  // creating button element
  const button = document.createElement('button');
  button.classList.add('employee-card-button');
  card.append(button);

  // creating span for employee name, add it to button
  const span = document.createElement('span');
  span.classList.add('employee-name');
  span.textContent = `${employee.name}`;
  button.append(span);

  // creating div for header right section, add it to button
  const div = document.createElement('div');
  div.classList.add('header-right');
  button.append(div);

  // creating span for status badge, add it to header right div
  const statusBadgeSpan = document.createElement('span');
  statusBadgeSpan.classList.add('status-badge');
  statusBadgeSpan.textContent = `${employee.status}`;
  div.append(statusBadgeSpan);

  // creating icon element, add it to header right div
  const icon = document.createElement('i');
  icon.classList.add('bi', 'bi-chevron-down', 'accordion-icon');
  div.append(icon);

  // creating div for employee details, add it to card
  const employeeDetailsDiv = document.createElement('div');
  employeeDetailsDiv.classList.add('employee-details');
  employeeDetailsDiv.id = `details-${employee.id}`;
  card.append(employeeDetailsDiv);

  // creating definition list for employee details, add it to employee details div
  const dl = document.createElement('dl');
  employeeDetailsDiv.append(dl);

  // creating and adding location details
  const dtLocation = document.createElement('dt');
  dtLocation.textContent = 'Location:';
  dl.append(dtLocation);
  const ddLocation = document.createElement('dd');
  ddLocation.textContent = `${employee.location}`;
  dl.append(ddLocation);

  // creating and adding desired present details
  const dtPresent = document.createElement('dt');
  dtPresent.textContent = 'Desired Present:';
  dl.append(dtPresent);
  const ddPresent = document.createElement('dd');
  const strongPresent = document.createElement('strong');
  strongPresent.textContent = `${employee.desiredPresent}`;
  ddPresent.append(strongPresent);
  dl.append(ddPresent);

  // creating and adding notes details
  const dtNotes = document.createElement('dt');
  dtNotes.textContent = 'Notes:';
  dl.append(dtNotes);
  const ddNotes = document.createElement('dd');
  ddNotes.textContent = `${employee.notes}`;
  dl.append(ddNotes);

  const header = card.querySelector('.employee-card-button');
  const details = card.querySelector('.employee-details');

  header.addEventListener('click', () => {
    toggleAccordion(header, details);
    if (clickHandler) {
      clickHandler(employee);
    }
  });

  return card;
}

function toggleAccordion(header, details) {
  const isHidden = details.classList.contains('hidden');
  if (isHidden) {
    details.classList.remove('hidden');
    header
      .querySelector('.accordion-icon')
      .classList.replace('bi-chevron-down', 'bi-chevron-up');
  } else {
    details.classList.add('hidden');
    header
      .querySelector('.accordion-icon')
      .classList.replace('bi-chevron-up', 'bi-chevron-down');
  }
}
