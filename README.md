# Rkisoner

Rkisoner is a Chrome extension that helps users control YouTube content by blurring videos based on user-defined keywords.  
The extension is designed to improve focus and reduce exposure to distracting or unwanted content while browsing YouTube.

## Problem
Video recommendation platforms often surface content that can be distracting and difficult to avoid manually.  
Users lack simple, lightweight tools to control what appears on their feed without blocking the platform entirely.

## Solution
Rkisoner provides a client-side content filtering mechanism that dynamically scans YouTube pages and applies a blur effect to videos whose titles or metadata match selected keywords.  
The extension works entirely within the browser and does not rely on external servers or APIs.

## Features
- Keyword-based video blurring on YouTube
- Real-time DOM monitoring using MutationObserver
- User-configurable keyword list via options page
- Lightweight and privacy-friendly (no data collection)
- Runs fully client-side

## Tech Stack
- JavaScript
- HTML
- CSS
- Chrome Extensions API (Manifest V3)

## Architecture Overview
- A content script observes changes in the YouTube DOM and scans video elements
- Matching videos are blurred dynamically based on stored keywords
- User preferences are stored using Chrome Storage API
- An options page allows users to manage keywords easily

## Privacy & Security
- No external API calls
- No user data is collected or transmitted
- All processing is performed locally in the browser

## Status
Actively maintained and improved as a learning-focused project.

## Chrome Web Store
Live extension link:  
https://chromewebstore.google.com/detail/onpohibngdfiglkfmlbkecfbbdngdapd?utm_source=item-share-cb
