const carTable = document.querySelector('table');

export function generateTableRow(car) {
  const tr = document.createElement('tr');

  const tdBrand = document.createElement('td');
  tdBrand.textContent = car.brand;
  const tdModel = document.createElement('td');
  tdModel.textContent = car.model;

  tr.append(tdBrand, tdModel);
  carTable.append(tr);
}