# Daybreak Studios — Game Developer Portfolio

A three-page portfolio website created to present creative and technical work related to game development, programming, digital art, and interactive storytelling. The design uses a dark purple and wine-colored palette with bright pink accents, geometric background details, and a vaporwave-inspired identity.

## About the Website

The portfolio is organized into three main pages:

- **Home (`index.html`)** — Introduces the portfolio and highlights areas of interest, including programming, digital art, and game design. It also features selected projects and links visitors to the other sections.
- **Projects (`projects.html`)** — Displays sample creative projects in separate categories. Visitors can filter the project cards by Game Design, Digital Art, or Programming and open a details window for additional information.
- **About & Contact (`abtme.html`)** — Presents a short developer introduction, profile photograph, contact form, and links to social media profiles.

## Main Features

- Responsive navigation bar with links between the three pages.
- Bootstrap-based layout and components.
- Project cards with category filters.
- Project detail modals showing descriptions and tools or skills.
- Contact form that prepares a message in the visitor's email application.
- Social media links for Facebook, GitHub, Instagram, and email.
- Automatically updated copyright year.
- Custom visual styling using a purple, burgundy, and pink color scheme.

## Technologies and Resources

- **HTML5** for page structure and content.
- **CSS3** for layout, colors, typography, and responsive styling.
- **JavaScript** for project filtering, modal content, contact-form behavior, and the copyright year.
- **Bootstrap 5.3.8** for responsive components and layout.
- **Google Fonts** — Inter and Space Grotesk.
- Local image assets for the logo, profile photograph, and project artwork.

Bootstrap and Google Fonts are loaded from external CDNs, so an internet connection is needed for those resources to load when viewing the site.

## Project Structure

```text
TyroneJedTumbaga_FinalsLabExam_CC211/
├── index.html
├── projects.html
├── abtme.html
├── CSS/
│   └── styles.css
├── JavaScript/
│   ├── main.js
│   └── projects.js
├── assets/
│   ├── Main/
│   │   ├── LogoPlaceholder.svg
│   │   ├── Profile.JPG
│   │   └── TJ_Logo.png
│   ├── AbtMe/
│   │   └── Profile.JPG
│   └── Projects/
│       ├── FNF_DB.png
│       ├── OS.jpg
│       └── PR.png
└── Prompt_Log.md.txt
```

## Running the Website

1. Download or clone the repository.
2. Extract the project folder if it was downloaded as a ZIP archive.
3. Open the project folder in Visual Studio Code or another code editor.
4. Open the website through a local development server, such as the VS Code Live Server extension.
5. Start with `index.html` and use the navigation bar to visit the Projects and About & Contact pages.

You can also open the HTML files directly in a browser for a quick preview. A local development server is recommended while working on the site.

## Configuration Before Publishing

Review these items and update them with the correct information before making the website public:

1. In `JavaScript/main.js`, replace `your-email@example.com` with the email address that should receive portfolio inquiries.
2. In `abtme.html`, update the Email link so that it uses the same address.
3. Check the social media URLs in `abtme.html` and change them if your preferred profile links are different.
4. Review the project descriptions and images to ensure that they accurately represent the work you want to showcase.
5. Check all navigation and asset paths after uploading the website.

### Source-path checks

The supplied project archive stores its scripts in a folder named `JavaScript/`, while the HTML pages currently refer to `js/main.js` and `js/projects.js`. Update those script paths to `JavaScript/main.js` and `JavaScript/projects.js`, or rename the folder to `js`, so the browser can find the JavaScript files.

The Home page's “Meet the Developer” link currently points to `about.html`, while the supplied About page is named `abtme.html`. Update that link to `abtme.html` so it opens the correct page.

For consistency across hosting platforms, use forward slashes in the stylesheet path, for example `CSS/styles.css`.

## Contact Form Behavior

The contact form uses a `mailto:` link to prepare an email containing the visitor's name, email address, and message. It relies on the visitor having an email application configured on their device. It does not send or store messages on a server. To accept messages directly through the website, a backend or a trusted form-processing service would be required.

## Notes on the Prompt Log

The uploaded archive includes `Prompt_Log.md.txt`, but that file is empty. For that reason, this README describes the website based on the HTML, CSS, JavaScript, and asset files present in the archive rather than attributing specific development steps or requirements to prompts that were not included.

---

**Project:** Daybreak Studios — Game Developer Portfolio  
**Course context:** CC211  
**Author:** Tyrone Jed Tumbaga
