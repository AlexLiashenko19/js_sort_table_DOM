'use strict';

// write code here
const thElements = document.querySelectorAll('th');

thElements.forEach((th) => {
  th.addEventListener('click', (e) => {
    const index = Array.from(thElements).indexOf(e.target);
    const rows = Array.from(document.querySelectorAll('tbody tr'));

    rows.sort((a, b) => {
      const cellA = a.children[index].textContent.trim();
      const cellB = b.children[index].textContent.trim();

      const cleanCellA = cellA.replace(/[^0-9.-]+/g, '');
      const cleanCellB = cellB.replace(/[^0-9.-]+/g, '');

      const numA = Number(cleanCellA);
      const numB = Number(cleanCellB);

      if (!isNaN(numA) && !isNaN(numB)) {
        return numA - numB;
      } else {
        return cellA.localeCompare(cellB);
      }
    });

    const tbody = document.querySelector('tbody');

    tbody.innerHTML = '';

    rows.forEach((row) => tbody.appendChild(row));
  });
});
