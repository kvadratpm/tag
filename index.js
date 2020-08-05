const table = document.body.querySelector('.table-bordered');
const clicker = () => {
    const target = event.target;
    const row = target.parentNode.rowIndex;
    const cell = target.cellIndex;
    if([...target.classList].includes('table-active')) {
        return;
    }
    if (target.nextElementSibling && [...target.nextElementSibling.classList].includes('table-active')) {
        const next = target.nextElementSibling;
        next.innerHTML = target.innerHTML;
        target.innerHTML = '';
        next.classList.remove('table-active');
        target.classList.add('table-active');
    }
    if (target.previousElementSibling && [...target.previousElementSibling.classList].includes('table-active')) {
        const next = target.previousElementSibling;
        next.innerHTML = target.innerHTML;
        target.innerHTML = '';
        next.classList.remove('table-active');
        target.classList.add('table-active');
    }
    if (table.rows[row - 1] && [...table.rows[row - 1].cells[cell].classList].includes('table-active')) {
        const next = table.rows[row-1].cells[cell];
        next.innerHTML = target.innerHTML;
        target.innerHTML = '';
        next.classList.remove('table-active');
        target.classList.add('table-active');
    }
    if (table.rows[row + 1] && [...table.rows[row + 1].cells[cell].classList].includes('table-active')) {
        const next = table.rows[row + 1].cells[cell];
        next.innerHTML = target.innerHTML;
        target.innerHTML = '';
        next.classList.remove('table-active');
        target.classList.add('table-active');
    }
    event.stopImmediatePropagation();
};
table.addEventListener ('click', clicker);
