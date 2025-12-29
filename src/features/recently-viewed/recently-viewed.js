import { getEmployeeById, getState } from '../../state/state.js';

const recentlyViewedList = document.getElementById('recent-employees');

export function updateRecentlyViewedList() {
  recentlyViewedList.replaceChildren();
  const recentIds = getState().recentlyViewed;

  recentIds.forEach((id) => {
    const currentEmployee = getEmployeeById(id);

    if (!currentEmployee) {
      return;
    }

    const li = document.createElement('li');
    li.textContent = `${currentEmployee.name}`;
    recentlyViewedList.append(li);
  });
}
