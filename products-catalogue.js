// Navbar creation with footer
document.addEventListener('DOMContentLoaded', function() {
    // Create header
    const header = document.createElement('header');
    header.classList.add('header');

    const companyName = document.createElement('h1');
    companyName.textContent = 'Coslife M';
    header.appendChild(companyName);

    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    const menuItems = ['Home', 'About', 'Services', 'Contact'];
    menuItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item;
        a.href = `#${item.toLowerCase()}`;
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    header.appendChild(nav);

    // Create main content
    const main = document.createElement('main');
    main.classList.add('main');
    
    const content = document.createElement('p');
    content.textContent = 'Welcome to Coslife M, your one-stop solution for all your service needs.';
    main.appendChild(content);

    // Create footer
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    footer.textContent = '© 2024 Coslife M. All rights reserved.';

    // Append to root
    const root = document.getElementById('root');
    root.appendChild(header);
    root.appendChild(main);
    root.appendChild(footer);
});


// End Of Navbar

document.addEventListener('DOMContentLoaded', function() {
    const services = [
        {
            title: "Simple Website",
            cost: "R300",
            details: "A simple website with basic features.",
            button: "Buy Now"
        },
        {
            title: "Basic Website",
            cost: "R500",
            details: "A basic website with additional features.",
            button: "Buy Now"
        },
        {
            title: "Advanced Website",
            cost: "R1000",
            details: "An advanced website with premium features.",
            button: "Buy Now"
        },
        {
            title: "Business Website",
            cost: "R1500",
            details: "A business website with custom solutions.",
            button: "Buy Now"
        },
        {
            title: "E-commerce Website",
            cost: "R2000",
            details: "An e-commerce website for online sales.",
            button: "Buy Now"
        },
        {
            title: "Community Website",
            cost: "R2500",
            details: "A community website for social interaction.",
            button: "Buy Now"
        },
        {
            title: "Landing Page",
            cost: "R100",
            details: "A landing page for marketing campaigns.",
            button: "Buy Now"
        }
    ];

    const root = document.getElementById('root');
    const main = document.createElement('main');
    main.classList.add('main');

    services.forEach(service => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        const cardTitle = document.createElement('h3');
        cardTitle.textContent = service.title;
        card.appendChild(cardTitle);
        
        const cardCost = document.createElement('p');
        cardCost.textContent = `Cost: ${service.cost}`;
        card.appendChild(cardCost);
        
        const cardDetails = document.createElement('p');
        cardDetails.textContent = service.details;
        card.appendChild(cardDetails);
        
        const button = document.createElement('button');
        button.textContent = service.button;
        button.addEventListener('click', () => {
            window.location.href = `invoice.html?service=${encodeURIComponent(service.title)}&cost=${encodeURIComponent(service.cost)}`;
        });
        card.appendChild(button);
        
        main.appendChild(card);
    });

    root.appendChild(main);
});
