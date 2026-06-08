// ============================================================
//  READING JOURNAL — books.js
//
//  Main data source for the Reading Journal.
//
//  Add every book entry to the BOOKS array following the
//  structure shown in the example below.
//
//  Notes:
//  - All dates should use the YYYY-MM-DD format.
//  - Ratings are based on a 0–5 scale.
//  - Use null for unknown or unavailable values.
//  - The "month" field should contain the month number (1–12) in which the book was finished.
//  - The "id" must be unique and URL-friendly.
//  - Reviews, favorite quotes, and personal thoughts should be written manually.
//  - Covers can be sourced from OpenLibrary when available.
//  - If no online cover is available, a locally stored image may be used instead.
// ============================================================

const BOOKS = [

  {
    id: "example-1", // Unique identifier used in URLs and lookups
    title: "Example Book",
    author: "Jane Doe",
    genre: "Memoir",
    format: "Ebook", // Hardcover, Paperback, Ebook, Audiobook, etc.
    pages: 130,
    released: 0, // Publication year
    status: "tbr", // tbr | reading | finished
    rating: 0, // Rating from 0 to 5
    startDate: null,
    finishedDate: null,
    month: null,
    cover: "https://covers.openlibrary.org/b/isbn/8439739451-L.jpg", // OpenLibrary cover or local image path
    favorite: false, // Mark as favorite book
    quote: "Favorite quote",
    summary: "Summary of the example.",
    thoughts: "The review"
  },

];

// ============================================================
//  ADDITIONAL QUOTES
//
//  Quotes that are not associated with a specific book can be stored here.
// ============================================================
const EXTRA_QUOTES = [];

// ============================================================
//  HELPERS
//
//  Utility functions used throughout the Reading Journal.
// ============================================================
function getBookById(id) {
  return BOOKS.find(b => b.id === id) || null;
}

function getBooksByStatus(status) {
  return BOOKS.filter(b => b.status === status);
}

function getBooksByMonth(month) {
  return BOOKS.filter(b => b.month === month && b.status === 'finished');
}

function getFavorites() {
  return BOOKS.filter(b => b.favorite);
}

function getAllQuotes() {
  const fromBooks = BOOKS
    .filter(b => b.quote && b.quote.trim() !== '')
    .map(b => ({ text: b.quote, book: b.title, author: b.author }));
  return [...fromBooks, ...EXTRA_QUOTES];
}

function renderStars(rating, max = 5) {
  let html = '<span class="stars">';
  for (let i = 1; i <= max; i++) {
    html += `<span class="star ${i <= rating ? 'filled' : 'empty'}">★</span>`;
  }
  html += '</span>';
  return html;
}

function renderBookCard(book, showDetails = false) {
  const stars = renderStars(book.rating);
  const coverFallback = `<div class="cover-placeholder"><span>📖</span></div>`;
  const coverHtml = book.cover
    ? `<img src="${book.cover}" alt="${book.title}" class="book-cover" onerror="this.parentElement.innerHTML='${coverFallback.replace(/'/g, "\'")}'">` 
    : coverFallback;
  const link = `book-review.html?id=${book.id}`;
  return `
    <a href="${link}" class="book-card ${book.favorite ? 'is-favorite' : ''}">
      <div class="card-cover">${coverHtml}</div>
      ${book.rating > 0 ? `<div class="card-stars">${stars}</div>` : ''}
      ${showDetails ? `
        <div class="card-meta">
          <span class="meta-tag">Genre: ${book.genre}</span>
          <span class="meta-tag">Format: ${book.format}</span>
        </div>` : ''}
    </a>`;
}
