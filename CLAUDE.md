# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio and blog site for jimwithington.com, built with Eleventy (11ty) static site generator and Tailwind CSS.

## Commands

- `npm run dev` - Run development server (Eleventy + Tailwind watcher in parallel)
- `npm start` - Run Eleventy serve mode only
- `npm run start-tailwind` - Run Tailwind CSS watcher only

Output is generated to `_site/` directory.

## Architecture

### Templates (Nunjucks)
- `_includes/layout.html` - Base layout wrapper used by all pages
- `_includes/post.html` - Layout for blog posts (extends layout.html)

### Content
- `posts/` - Blog posts as Markdown files; `posts.json` auto-applies post.html layout and "post" tag to all files in this directory
- Root-level `.md` and `.html` files are standalone pages (index.html, about.md, work.md)

### Styling
- `bundle.css` - Tailwind input file
- `output.css` - Compiled Tailwind output (generated, committed)
- Custom color palettes defined in tailwind.config.js: `wild-strawberry`, `gravel`, `summer-green`, `azure-radiance`
- Uses @tailwindcss/typography plugin for prose styling

### Static Assets
- `img/` - Images, passed through to _site via eleventy.config.cjs

## Collections

Posts are collected via the "post" tag (set in posts.json) and displayed on the homepage using `collections.post`.

## Configuration Files

- `eleventy.config.cjs` - Eleventy config (CommonJS format)
- `tailwind.config.js` - Tailwind config with custom colors
- `.eleventyignore` - Excludes README.md and _drafts/ from build
