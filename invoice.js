document.addEventListener('DOMContentLoaded', () => {
    // Function to generate a random invoice number
    function generateRandomInvoiceNumber() {
        return Math.floor(Math.random() * 900000) + 100000;
    }

    // Function to get the current date in YYYY-MM-DD format
    function getCurrentDate() {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    // Set the invoice number
    const invoiceNumberElement = document.getElementById('invoiceNumber');
    invoiceNumberElement.textContent = generateRandomInvoiceNumber();

    // Set the invoice date
    const invoiceDateElement = document.getElementById('invoiceDate');
    invoiceDateElement.textContent = getCurrentDate();

    // Sample invoice items
    // const invoiceItems = [
    //     { description: 'Item 1', amount: 100.00 },
    //     { description: 'Item 2', amount: 200.00 },
    //     { description: 'Item 3', amount: 150.00 }
    // ];

    const invoiceItemsContainer = document.getElementById('invoiceItems');
    let subtotal = 0;

    invoiceItems.forEach(item => {
        const row = document.createElement('tr');
        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = item.description;
        const amountCell = document.createElement('td');
        amountCell.textContent = `R${item.amount.toFixed(2)}`;
        row.appendChild(descriptionCell);
        row.appendChild(amountCell);
        invoiceItemsContainer.appendChild(row);
        subtotal += item.amount;
    });

    const subtotalElement = document.getElementById('subtotal');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');

    const tax = subtotal * 0.15;
    const total = subtotal + tax;

    subtotalElement.textContent = subtotal.toFixed(2);
    taxElement.textContent = tax.toFixed(2);
    totalElement.textContent = total.toFixed(2);
});
