'use strict'

// blog
let hiddenMenuBlog = document.getElementById('down-menu-link');
let displayHiddenBlog = document.querySelector(".hidden-menu");

// pages
let hiddenMenuPages = document.getElementById('down-menu-link-pages');
let displayMenuPages = document.querySelector(".hidden-menu-elements");

// blog - display
hiddenMenuBlog.addEventListener('mouseover', () => displayHiddenBlog.classList.add('blog'));
displayHiddenBlog.addEventListener('mouseleave', () => displayHiddenBlog.classList.remove('blog'));

// pages - display
hiddenMenuPages.addEventListener('mouseover', () => displayMenuPages.classList.add('pages'));
displayMenuPages.addEventListener('mouseleave', () => displayMenuPages.classList.remove('pages'));