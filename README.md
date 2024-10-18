# Pokémon Data Visualization with Pandas and Matlotib

## Overview

Pokémon Data Visualization is a web application that visualizes Pokémon data using SVG files. The application displays top 10 and average statistics for various Pokémon attributes.

## Features

- Visualize top 10 Pokémon statistics.
- Visualize average Pokémon statistics.
- Interactive and responsive design.

## Project Structure

- `index.html`: The main HTML file that structures the web page.
- `styles.css`: The CSS file that styles the web page.
- `scripts.js`: The JavaScript file that dynamically loads and displays the SVG files.
- `SVGraphs/`: The folder containing the SVG files for visualization.

## Getting Started

### Prerequisites

- A web browser (e.g., Chrome, Firefox, Safari).

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/pokemon-data-visualization.git
    ```
2. Navigate to the project directory:
    ```sh
    cd pokemon-data-visualization
    ```

### Usage

1. Open `index.html` in your web browser:
    ```sh
    open index.html
    ```
    or
    ```sh
    xdg-open index.html
    ```

## Project Files

### 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokémon Data Visualization</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Pokémon Data Visualization</h1>
    </header>
    <main>
        <section id="top10">
            <h2>Top 10 Files</h2>
            <ul id="top10-list"></ul>
        </section>
        <section id="avg">
            <h2>Average Files</h2>
            <ul id="avg-list"></ul>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 sekkensn</p>
    </footer>
    <script src="scripts.js"></script>
</body>
</html>