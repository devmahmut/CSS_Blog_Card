 // Create an array of objects, each representing the data for one card
 const cards = [
    {
        title: "FIRST", // Card title
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error hic doloremque. Cum sint id error. Eos, laboriosam!", // Card description text
        imageClass: "image1", // Class to be added for the background image
        link: "#" // URL for the "Read More" link
    },
    {
        title: "SECOND",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error hic doloremque. Cum sint id error. Eos, laboriosam!",
        imageClass: "image2",
        link: "#"
    },
    {
        title: "THIRD",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error hic doloremque. Cum sint id error. Eos, laboriosam!",
        imageClass: "image3",
        link: "#"
    },
    {
        title: "FOURTH",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error hic doloremque. Cum sint id error. Eos, laboriosam!",
        imageClass: "image4",
        link: "#"
    }
];

// Get the container where all the cards will be appended
const container = document.getElementById('card-container');

// Iterate through the 'cards' array to dynamically create each card
cards.forEach(card => {
    // Create the main div for the card item
    const cardItem = document.createElement('div');
    cardItem.classList.add('card-item'); // Add the 'card-item' class for styling

    // Create the div for the image, assign appropriate classes for styling
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('image', card.imageClass); // Add both 'image' and dynamic 'imageClass'

    // Create the content container div
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content'); // Add 'content' class for styling

    // Create the title element and set its text content
    const title = document.createElement('h1');
    title.classList.add('title'); // Add the 'title' class for styling
    title.textContent = card.title; // Set the title text dynamically from the array

    // Create the paragraph element for the card's description
    const description = document.createElement('p');
    description.textContent = card.description; // Set the description text dynamically from the array

    // Create the anchor (link) element for the "Read More" button
    const link = document.createElement('a');
    link.href = card.link; // Set the href attribute for the link
    link.classList.add('button'); // Add the 'button' class for styling
    link.textContent = 'Read More'; // Set the link's display text

    // Append the title, description, and link to the content div
    contentDiv.appendChild(title);
    contentDiv.appendChild(description);
    contentDiv.appendChild(link);

    // Append the image div and content div to the main card item
    cardItem.appendChild(imageDiv);
    cardItem.appendChild(contentDiv);

    // Finally, append the complete card item to the container in the DOM
    container.appendChild(cardItem);
});