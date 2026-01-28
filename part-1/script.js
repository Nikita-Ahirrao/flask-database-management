/**
 * Part 1: DOM Selection Basics
 *
 * Open index.html in your browser
 * Press F12 → Console to see output
 */

// ============================================
// EXAMPLE: How to select and log elements
// ============================================

// Selecting by ID
const titleExample = document.getElementById('title');
console.log('Example - Title element:', titleExample);

// Selecting by query selector
const firstParagraph = document.querySelector('p');
console.log('Example - First paragraph text:', firstParagraph.textContent);


// ============================================
// EXERCISE 1: Basic Selection
// ============================================

// Task 1.1: Select the element with ID 'list-title' and log it
const listTitle = document.getElementById('list-title');
console.log('Task 1.1 - List Title:', listTitle.textContent);

// Task 1.2: Select the first element with class 'box' and log it
const firstBox = document.querySelector('.box');
console.log('Task 1.2 - First Box:', firstBox);

// Task 1.3: Select ALL list items and log how many there are
const allListItems = document.querySelectorAll('.list-item');
console.log('Task 1.3 - Total list items:', allListItems.length);


// ============================================
// EXERCISE 2: Exploring Properties
// ============================================

// Task 2.1: Select the image and log its src
const image = document.getElementById('sample-image');
console.log('Task 2.1 - Image src:', image.src);

// Task 2.2: Select the link and log its href
const link = document.getElementById('sample-link');
console.log('Task 2.2 - Link href:', link.href);

// Task 2.3: Select shopping list and log innerHTML
const shoppingList = document.getElementById('shopping-list');
console.log('Task 2.3 - Shopping List HTML:', shoppingList.innerHTML);


// ============================================
// EXERCISE 3: Multiple Selections
// ============================================

// Task 3.1: Select all elements with class 'highlight'
const highlights = document.querySelectorAll('.highlight');
console.log('Task 3.1 - Highlighted elements:', highlights.length);

// Task 3.2: Loop and log text content
highlights.forEach((element, index) => {
    console.log(`Task 3.2 - Highlight ${index + 1}:`, element.textContent);
});

// Task 3.3: Log list items in UPPERCASE
allListItems.forEach(item => {
    console.log('Task 3.3 - Uppercase Item:', item.textContent.toUpperCase());
});


// ============================================
// BONUS CHALLENGE
// ============================================

// Select container div and count children
const container = document.querySelector('.container');
console.log('Bonus - Container child count:', container.children.length);


// ============================================
// EXTRA FEATURES (Visible & Attractive)
// ============================================

// 1️⃣ Change title color & style
titleExample.style.color = 'purple';
titleExample.style.textAlign = 'center';
titleExample.style.fontWeight = 'bold';

// 2️⃣ Style all boxes
document.querySelectorAll('.box').forEach((box, index) => {
    box.style.border = '2px solid green';
    box.style.padding = '12px';
    box.style.borderRadius = '8px';
    box.style.marginBottom = '10px';
    box.style.backgroundColor = '#f8f9fa';
});

// 3️⃣ Highlight elements background
highlights.forEach(el => {
    el.style.backgroundColor = '#fff3cd';
    el.style.borderRadius = '5px';
});

// 4️⃣ Hover effect on list items
allListItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = 'green';
        item.style.fontWeight = 'bold';
    });

    item.addEventListener('mouseout', () => {
        item.style.color = 'black';
        item.style.fontWeight = 'normal';
    });
});

// 5️⃣ Click effect on image
image.addEventListener('click', () => {
    image.style.border = '3px solid purple';
    image.style.transform = 'scale(1.05)';
    image.style.transition = '0.3s';
    console.log('Image clicked!');
});

// 6️⃣ Console success message
console.log(
    '%cAll DOM selection & interaction tasks completed successfully ✅',
    'color: green; font-size: 14px; font-weight: bold;'
);
