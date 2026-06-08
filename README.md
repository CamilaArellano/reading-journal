# Reading Journal

A personal reading journal built with **HTML, CSS, and JavaScript** and hosted on Neocities.

**Live site:** https://readingtimecam.neocities.org/

## Overview

Reading Journal is a lightweight static website for tracking books, reviews, ratings, favorite quotes, and reading progress. All reading data is stored in a simple JavaScript file, making it easy to update and maintain without a database or backend services.

The project focuses on simplicity, customization, and long-term preservation of reading records.

## Features

* Personal book library
* Book ratings and reviews
* Favorite books collection
* Favorite quotes archive
* Reading history and monthly tracking
* Reading challenge progress
* Individual review pages for each book
* Custom book cover support
* Fully static website hosted on Neocities

## Project Structure

```text
/
├── covers/          # Book cover images
├── css/             # Stylesheets
├── js/              # JavaScript files and book database
├── stickers/        # Decorative assets
├── index.html       # Home page
├── my-books.html    # Books library
├── favorites.html   # Favorite books
├── quotes.html      # Quotes collection
├── book-review.html # Individual review page
├── favicon.png
└── README.md
```

## Data Management

Book information is stored in:

```text
js/books.js
```

Each book is represented as an object inside the `BOOKS` array.

Example:

```javascript
{
  id: "example-book",
  title: "Book Title",
  author: "Author Name",
  genre: "Fantasy",
  format: "Paperback",
  pages: 350,
  status: "finished",
  rating: 5
}
```

## Book Covers

Book covers can be loaded from:

* Open Library Covers API
* Google Books API
* Local images stored in the `/covers` folder

Using local images is recommended for long-term reliability.

## Technologies

* HTML5
* CSS3
* Vanilla JavaScript

No frameworks, build tools, or external dependencies are required.

## Hosting

The website is published through Neocities:

https://readingtimecam.neocities.org/

GitHub is used for version control, documentation, and project backup.

## Future Improvements

* Additional reading statistics
* Search and filtering options
* Enhanced challenge tracking
* Improved mobile experience

## License

This project is licensed under the MIT License. See the LICENSE file for details.

### Content Notice

This repository contains both source code and personal reading content.

The MIT License applies only to the website's source code, including HTML, CSS, JavaScript, and other technical assets created for this project.

Book titles, cover images, quotations, summaries, reviews, and other literary content remain the property of their respective authors, publishers, or copyright holders and are included for personal, educational, or archival purposes only.

This project claims no ownership of third-party literary works.
