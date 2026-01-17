# Google Analytics Setup Guide

This website now includes Google Analytics 4 tracking to monitor visitor behavior and material usage.

## What Gets Tracked

The website automatically tracks the following events:

1. **Page Views** - Every time someone visits the website
2. **Lesson Views** - When a student opens a lesson modal
3. **Material Clicks** - When students click on:
   - Theory (Nazariya)
   - Video lessons
   - Tests
   - Presentations
   - Additional materials
4. **Search Activity** - Search queries and results count
5. **Semester Switches** - When users switch between semesters
6. **Lesson Completion** - When students mark lessons as complete/incomplete

## Setup Instructions

### Step 1: Create a Google Analytics Account

1. Go to [https://analytics.google.com](https://analytics.google.com)
2. Sign in with your Google account
3. Click "Start measuring"
4. Enter an account name (e.g., "3rd Year Faculty Website")
5. Click "Next"

### Step 2: Create a Property

1. Enter a property name (e.g., "3-kurs Website")
2. Select your time zone and currency
3. Click "Next"

### Step 3: Set Up Data Stream

1. Select "Web" as the platform
2. Enter your website URL (e.g., https://yourdomain.com)
3. Enter a stream name (e.g., "Main Website")
4. Click "Create stream"

### Step 4: Get Your Measurement ID

1. After creating the stream, you'll see your **Measurement ID** (format: G-XXXXXXXXXX)
2. Copy this ID

### Step 5: Add Measurement ID to Website

1. Open the file `index.html`
2. Find these two lines (around line 11 and 16):
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   ```
   and
   ```javascript
   gtag('config', 'G-XXXXXXXXXX');
   ```
3. Replace **both** instances of `G-XXXXXXXXXX` with your actual Measurement ID

### Example:
If your Measurement ID is `G-ABC123DEF456`, change:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
</script>
```

To:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123DEF456"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-ABC123DEF456');
</script>
```

### Step 6: Deploy and Test

1. Upload your website to your hosting service
2. Visit your website
3. Go back to Google Analytics (analytics.google.com)
4. Click on "Reports" → "Realtime"
5. You should see your own visit in real-time!

## Viewing Analytics Data

### Dashboard
- Go to [https://analytics.google.com](https://analytics.google.com)
- Select your property
- Navigate through the reports:

### Reports Available:

1. **Realtime** - See who's on your site right now
2. **Overview** - General statistics about visitors
3. **Events** - Custom events like:
   - `lesson_view` - Which lessons are viewed most
   - `material_click` - Which materials are clicked most (theory, video, tests, etc.)
   - `search` - What students are searching for
   - `lesson_complete` - Lesson completion tracking
   - `semester_switch` - Semester navigation patterns

### Most Useful Reports for Your Website:

1. **Which lessons are most popular?**
   - Go to: Reports → Engagement → Events
   - Look for `lesson_view` events
   - Check the `lesson_id` and `lesson_title` parameters

2. **Which materials get clicked most?**
   - Go to: Reports → Engagement → Events
   - Look for `material_click` events
   - Check the `material_type` parameter (theory/video/tests/presentation/additional)

3. **How many visitors?**
   - Go to: Reports → Life cycle → Acquisition → Overview
   - See total users, sessions, and page views

4. **What are students searching for?**
   - Go to: Reports → Engagement → Events
   - Look for `search` events
   - Check the `search_term` parameter

## Privacy Note

Google Analytics is GDPR compliant and only tracks anonymous usage data. No personal information is collected without consent.

## Need Help?

If you need assistance:
- Google Analytics Help: [https://support.google.com/analytics](https://support.google.com/analytics)
- Video tutorial: Search for "How to set up Google Analytics 4" on YouTube
