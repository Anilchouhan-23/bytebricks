const fs = require('fs');
const path = require('path');

const directoryPath = __dirname;
const ignoreDirs = ['.git', 'node_modules', '.next', 'images'];

const mapUrlOld = /https:\/\/www\.google\.com\/maps\/embed\?pb=[^"]+/g;
const mapUrlNew = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112328.01633519842!2d76.9531792!3d28.4229575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000