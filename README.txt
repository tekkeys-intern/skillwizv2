SKILLWIZ 2.0 WEBSITE · CUSTOMER REVIEW BUILD
=============================================

FOLDER MAP
index.html ............ Page structure and all copy (headlines, paragraphs, stats, contact details)
assets/css/style.css .. All styling. Brand colours/fonts are in :root at the top
assets/js/main.js ..... Tab content: platform layers, journey stages, stakeholders, product portfolio
assets/images/ ........ hero/ platform/ journey/ karm-patri/ eutp/ proof/ logos/
assets/video/ ......... MP4/WebM, poster images, .vtt captions
assets/icons/ ......... favicons, official logo files
robots.txt, .htaccess . Hide from search engines, compression and caching

UPLOAD TO HOSTINGER
1. hPanel > Websites > Manage > File Manager > public_html
   (for a review subdomain: Domains > Subdomains > create e.g. review.yourdomain.com, then open its folder).
2. Upload skillwiz-site.zip into that folder, right-click > Extract, then move the contents
   so index.html sits directly in the folder root.
3. Show hidden files in File Manager so .htaccess is visible.
4. Optional: hPanel > Websites > Password protect directory, so only your customer can view it.
5. Open the URL and hard refresh (Ctrl+Shift+R).

REPLACING A PLACEHOLDER
In index.html, find the <div class="ph"> ... </div> block (search for "placeholder") and replace it with:
  Image: <img src="assets/images/eutp/bench-1600.webp" alt="Describe the image" width="1600" height="1200" loading="lazy" style="width:100%;height:auto;border-radius:20px;aspect-ratio:4/3;object-fit:cover">
  Video: <video poster="assets/video/hero-poster.webp" controls playsinline preload="none" style="width:100%;border-radius:20px;aspect-ratio:16/9"><source src="assets/video/hero-1080.mp4" type="video/mp4"><track kind="captions" src="assets/video/hero.vtt" srclang="en" label="English" default></video>

MEDIA SPECS (display / deliver at 2x)
Hero video 16:9 1920x1080 MP4 H.264 + 1280x720 poster WebP (loop under 5 MB, muted)
Platform visual 4:3 1200x900 SVG/WebP
Journey video 16:9 1920x1080 MP4 + poster
Karm-Patri illustration 1:1 1200x1200 SVG/PNG
EUTP photo 4:3 1600x1200 WebP (+JPG fallback), under 200 KB
Testimonial video 16:9 1920x1080 MP4 or embed
Logo wall / partner marks 760x380 one-colour SVG
Favicon 32 and 192 PNG; Apple icon 180; Social share 1200x630 JPG under 300 KB

BRAND RULES (Brand Bible Vol. II)
Five colours only (Saffron, Deep Forest, Warm Cream, Charcoal, Mustard max 5%). Anton uppercase for display, Manrope for body.
Replace the text logo with the official SVG; keep clear space of one W. Photos: Indian, unposed, real work. Illustration: flat, 2-4 colours.

BEFORE GOING LIVE
Delete robots.txt contents (or the file), remove the noindex meta tag in index.html, connect the contact form
(it currently only shows a confirmation; use Formspree, or Hostinger's PHP mail), add a privacy policy page.

FULL-SCREEN VIDEO CAROUSELS (added)
Hero (4 slides): assets/video/hero-1.mp4 ... hero-4.mp4 (1920x1080, H.264, 12-15 s loop, muted, under 5 MB each)
  Slide copy is in index.html (section id="hero"). Audiences: leadership, students, faculty/T&P, industry/founders.
Journey (8 stages over one background video): assets/video/journey-bg.mp4 (1920x1080, 20-30 s seamless loop, muted)
  Stage names and messages are in assets/js/main.js, array J.
TIMING: assets/js/main.js, top: CONFIG={heroSeconds:6, journeySeconds:3, autoplay:true}.
  Per-carousel override: add data-seconds="4" to the <section class="car"> tag.
Until a file exists, a "Video placeholder" tag shows on the slide; it disappears automatically once the video loads.
Video is shaded with a 55% charcoal layer so text stays readable; keep the footage free of on-screen text.
Slides pause when scrolled off-screen; viewers can use Prev / Pause / Next, the progress segments, or arrow keys.
If a visitor's device is set to reduce motion, autoplay is off by default.

MEDIA SOURCES (Pexels licence: free for commercial use, attribution not required; kept here for records)
hero-1  leadership: pexels.com/video/10150923 (man presenting to a boardroom team), trimmed to 12 s
hero-2  students: pexels.com/video/9198446 (student working on a laptop in a library)
hero-3  faculty and placement teams: pexels.com/video/7581174 (colleagues reviewing documents)
hero-4  industry and founders: pexels.com/video/7581216 (professionals reviewing a chart at their desks)
journey-bg  pexels.com/video/31575745 (students typing on laptops in a classroom)
testimonial strip  pexels.com/video/7581169 (administrator reviewing papers)
EUTP photo  Biyani Girls College, pexels.com/photos/18067562
Platform layers and Karm-Patri scroll: original SVG illustrations made for this site.
