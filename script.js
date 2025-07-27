//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    const quantityInputs = document.querySelectorAll('input[type="number"]');
    const totalCell = document.querySelector('tbody tr:last-child td:last-child strong');
    
    quantityInputs.forEach(input => {
        input.addEventListener('input', updateTotal);
    });
    
    function updateTotal() {
        let total = 0;
        const rows = document.querySelectorAll('tbody tr');
        
        rows.forEach(row => {
            const price = parseFloat(row.cells[1].textContent.replace('$', ''));
            const quantity = parseInt(row.querySelector('input[type="number"]').value);
            if (!isNaN(price) && !isNaN(quantity)) {
                total += price * quantity;
            }
        });
        
        totalCell.textContent = `$${total.toFixed(2)}`;
    }
});