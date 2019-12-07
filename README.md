# Markdown Links

## Index

* [1. Product Backlog](#1-product-backlog)
* [2.Install](#1-install)
* [3. CLI (Command Line Interface)](#3-command-line-interface)


***

## 1. Product Backlog

In this project, it was created a library that can be acessed by a command line interface (CLI). The module can be imported in Node.js, and it offers an interface where you can follow an .md file to print an array with objects containing:

a. a text: text inside the Markdown;

b. an href: the found URL.

## 2. Install

One of the requisites to use this library is to previously install Node.js on your computer. It can be acessed by https://nodejs.org/en/.  

Then, the installation can be made by acessing the link ```npm install -g vhcaldas/SAP003-md-links```.

This module can also be imported by ```require```, as on this example:

```sh
> const mdlinks = require('mdlinks');
> mdlinks('path/mdfile.md')
  .then((link) => {
  console.log(`${text}: ${href}`)
})
  //returns 'title: link'
```

## 3. CLI (Command Line Interface)

This application can be executed by terminal as the following example:

```
md-links <path-to-file>
```
```
$ md-Links ./some/example.md
```
