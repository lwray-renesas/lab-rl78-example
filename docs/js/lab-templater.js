/* TODO: populate - The title of the lab*/
const lab_title = "Introduction to the RL78/G23 development tools";

/* TODO: populate -
* array of string representing lab pages used to populate side navigation bar.
* Format of array:
* html-page-name, text-to-represent-page,
* ...
*/
const pages_in_lab = [
"index.html",                   "Home",
"1-Download-And-Install.html",  "1. Download & Install e<sup>2</sup>studio",
"2-First-Time-Launch.html",     "2. Launching e<sup>2</sup>studio for RL78",
"3-Project-Creation.html",      "3. Creating a Project",
"4-Project-Configuration.html", "4. Configuring a Project",
"5-Project-Build.html",         "5. Building a Project",
"6-Project-Debug.html",         "6. Debugging a Project"];

/** Class for fulfilling the templating requirements of lab creation */
class Lab_templater {
    #next_page_name;

    constructor() {
        /* Do Nothing*/
    }

    /* Function to populate the pages header*/
    populate_header() {
        var html = `<header class="banner">
                    </header>`;
        
        /* Add the header element to the document*/
        this.append_html(document.getElementsByTagName('body')[0], html); /* Append html to body*/

        /* populate the banner and side navigation panes*/
        this.populate_banner();
        this.populate_sidenav();
    }
    /* End of function*/

    /* Function to populate the header banner
    * str is the string for the title of the lab
    */
    populate_banner() {
        var html = `<span class="banner-menu-button" onclick="Open_sidenav()">&#9776;</span>
		            <h2 class="banner-heading">` + lab_title + `</h2>
		            <a href="https://www.renesas.com" target="_blank"><img class="banner-logo"
		            src="img/renesas_logo_white.png" /></a>`;

        this.append_html(document.getElementsByTagName('header')[0], html); /* Append html to header*/
    }
    /* End of function*/

    /* Function to create the sidenav - note this function must be called before calling the populate_next_page_button function.*/
    populate_sidenav() {
        var side_nav_links = "";
        var current_page = window.location.pathname.split("/").pop();

        for (let index = 0; index < pages_in_lab.length; index+=2) {
            const page = pages_in_lab[index];
            const name = pages_in_lab[index+1];

            /* Set the active page*/
            if(page == current_page) {
                side_nav_links += '<a class="active" href=' + page + '>' + name + '</a>';

                /* If we are on the last page*/
                if((index+2) >= pages_in_lab.length) {
                    this.#next_page_name = pages_in_lab[0]; /* Save the first page for the next page button*/
                    console.log(this.#next_page_name);
                }
                else {
                    this.#next_page_name = pages_in_lab[index+2]; /* Save the next page for the next page button*/
                }
            }
            else {
                side_nav_links += '<a href=' + page + '>' + name + '</a>';
            }
        }

        var html = `<div id="local-side-nav" class="sidenav">
                        <a href="javascript:void(0)" class="sidenav-close-button" onclick="Close_sidenav()">&#10006;</span>`
                        + side_nav_links +
                    `</div>`;

        this.append_html(document.getElementsByTagName('header')[0], html); /* Append html to header*/
    }
    /* End of function*/

    /* Function to popuate the next page button - txt = text inside button
    *  Note before calling this function, the populate_sidenav function must be called.
    */
    populate_next_page_button(txt) {
        var html = `<button class="next-page-button" onclick="document.location='` + this.#next_page_name + `'">` + txt + `</button>`;

        this.append_html(document.getElementsByClassName('main-content')[0], html); /* Append html to the end of main-content*/
    }
    /* End of function*/

    /* Function to append html to an element*/
    append_html(el, str) {
        var div = document.createElement('div');
        div.innerHTML = str;
        while (div.children.length > 0) {
            el.appendChild(div.children[0]);
        }
    }
    /* End of function*/

}

/* Instantiation of templating class*/
var lab_templater = new Lab_templater();

