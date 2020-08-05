const table = document.body.querySelector('.table-bordered');
const clicker = () => {
    const target = event.target;
    const rowT = target.parentNode.rowIndex;
    const cellT = target.cellIndex;
    const active = document.body.querySelector('.table-active');
    const rowA = active.parentNode.rowIndex;
    const cellA = active.cellIndex;
    const dist = Math.abs(cellT - cellA) + Math.abs(rowT - rowA);
    if (dist > 1) {
        return;
    } else {
        active.innerHTML = target.innerHTML;
        target.innerHTML = '';
        active.classList.remove('table-active');
        target.classList.add('table-active');
    }
};
table.addEventListener ('click', clicker);
