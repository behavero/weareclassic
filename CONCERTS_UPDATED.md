# 🎻 We Are Classics - Chamber Music Series Updated!

**Date:** November 22, 2025  
**Status:** Real Concert Data Integrated ✅

---

## 🎼 Concert Series Information

**Series Name:** We Are Classics - Chamber Music Series  
**Location:** Amfiteatrul Cornel Țăranu, Academia Națională de Muzică "Gheorghe Dima", Cluj-Napoca  
**Time:** 19:00  

**Mission:** Bring high-quality classical music to the community of Cluj-Napoca through intimate, elegant chamber concerts featuring top national and international artists.

**Special Features:**
- High-level chamber recitals
- Full professional video production (2 cameramen, 1 photographer + aftermovie)
- Refined artistic experience accessible to the general public

---

## 📅 December 2024 Concert Schedule

### 1️⃣ December 6 - Opening Concert ⭐

**Artists:**
- **Răzvan Suma** - Cello
- **Oana Crișu** - Piano

**Description:**  
Chamber recital from two of the most known and admired musicians from Romania.

**Featured:** Yes (Opening Concert)

---

### 2️⃣ December 13 - Piano Recital

**Artist:**
- **Horia Mihail** - Piano

**Description:**  
One of Romania's most respected pianists.

---

### 3️⃣ December 20 - Chamber Quartet

**Artists:**
- **Răzvan Dumitru** - Violin
- **Horia Haplea** - Piano
- **Mihaela Maxim** - Voice
- **Vlad Câmpean** - Cello

**Description:**  
An exceptional chamber quartet performance.

---

## ✅ What Was Updated

### 1. **Translation Files (EN & RO)** ✅

Updated both English and Romanian translation files with:

- ✅ New series title: "We Are Classics - Chamber Music Series"
- ✅ Accurate subtitle describing the venue and mission
- ✅ All 3 December concerts with real dates
- ✅ Artist names and instruments
- ✅ Venue: Amfiteatrul Cornel Țăranu
- ✅ Location: Academia Națională de Muzică "Gheorghe Dima", Cluj-Napoca
- ✅ Time: 19:00 for all concerts
- ✅ Descriptions for each concert
- ✅ Ticket information: "Contact for tickets" / "Contactați pentru bilete"

---

### 2. **FutureConcerts Component** ✅

Enhanced the component to display:

**New Artist Section:**
```tsx
{/* Highlighted artist info box */}
<div className="mb-6 p-4 bg-beige/30 rounded-md border-l-4 border-orange">
  <div className="flex items-start gap-3">
    <svg className="music-icon">...</svg>
    <div>
      <p className="ARTISTS label">Artists</p>
      <p className="artist-names">
        Răzvan Suma (cello) & Oana Crișu (piano)
      </p>
    </div>
  </div>
</div>
```

**Features:**
- ✅ Beige background with orange left border
- ✅ Music note icon
- ✅ "ARTISTS" label in uppercase, orange color
- ✅ Clear display of all performers and instruments
- ✅ Responsive design

---

## 🎨 Concert Card Design

### Featured Concert (December 6 - Opening)

```
┌─────────────────────────────────────────────┐
│                                             │
│  [LARGE IMAGE/VIDEO PLACEHOLDER]            │
│                                             │
│  🏷️ "Opening Concert" badge (top right)    │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  Opening Concert - Răzvan Suma & Oana Crișu│
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ 🎵 ARTISTS                          │   │
│  │ Răzvan Suma (cello) &               │   │
│  │ Oana Crișu (piano)                  │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  📅 December 6, 2024 • 19:00               │
│  📍 Amfiteatrul Cornel Țăranu              │
│     Academia Națională de Muzică           │
│  🎫 Contact for tickets                    │
│                                             │
│  [Book Tickets Button]                     │
│                                             │
└─────────────────────────────────────────────┘
```

### Regular Concerts (December 13 & 20)

Smaller cards with the same information structure.

---

## 📝 Translation Keys Structure

### English (en.json)

```json
"concerts": {
  "future": {
    "title": "We Are Classics - Chamber Music Series",
    "subtitle": "High-quality chamber concerts...",
    "featured": "Opening Concert",
    "bookNow": "Book Tickets",
    "viewAll": "View Full Concert Schedule",
    "concert1": {
      "title": "Opening Concert - Răzvan Suma & Oana Crișu",
      "date": "December 6, 2024",
      "time": "19:00",
      "venue": "Amfiteatrul Cornel Țăranu",
      "location": "Academia Națională de Muzică...",
      "artists": "Răzvan Suma (cello) & Oana Crișu (piano)",
      "description": "Chamber recital from two of the most known...",
      "price": "Contact for tickets"
    }
  }
}
```

### Romanian (ro.json)

```json
"concerts": {
  "future": {
    "title": "We Are Classics - Seria de Muzică de Cameră",
    "subtitle": "Concerte de cameră de înaltă calitate...",
    "featured": "Concert de Deschidere",
    "concert1": {
      "artists": "Răzvan Suma (violoncel) & Oana Crișu (pian)",
      "description": "Recital de cameră prezentat de doi dintre...",
      "price": "Contactați pentru bilete"
    }
  }
}
```

---

## 🎯 Visual Enhancements

### Artist Information Box

**Design:**
- Background: Beige with 30% opacity (`bg-beige/30`)
- Border: 4px orange left border (`border-l-4 border-orange`)
- Padding: 16px (`p-4`)
- Rounded corners: Medium (`rounded-md`)

**Typography:**
- Label: Orange, uppercase, small, tracked (`text-orange uppercase tracking-wide`)
- Artists: Black with 80% opacity, small, relaxed leading

**Icon:**
- Music note icon (SVG)
- Orange color matching the border
- 20px × 20px size

---

## 📱 Responsive Behavior

### Desktop (1024px+)
- Featured concert: Full-width card with 2-column layout
- Regular concerts: 3-column grid
- All information clearly visible

### Tablet (768px - 1023px)
- Featured concert: Full-width, single column
- Regular concerts: 2-column grid
- Maintained readability

### Mobile (< 768px)
- All concerts: Single column, stacked
- Artist box: Full width
- Touch-friendly buttons

---

## 🚀 Test Your Updates

```bash
npm run dev
```

Open **http://localhost:3000** and scroll to the **Upcoming Concerts** section.

### Visual Checklist

#### Section Header
- [ ] Title: "We Are Classics - Chamber Music Series"
- [ ] Subtitle describes the venue and series mission
- [ ] Left-aligned
- [ ] GFS Didot font for title

#### Concert Cards
- [ ] **3 concerts** displayed
- [ ] **December 6** card is featured (larger, has badge)
- [ ] All cards show **artist information** in highlighted box
- [ ] Orange "Opening Concert" badge on first card
- [ ] Dates: December 6, 13, 20, 2024
- [ ] Time: 19:00 for all concerts
- [ ] Venue: Amfiteatrul Cornel Țăranu
- [ ] Location: Academia details shown

#### Artist Information
- [ ] Highlighted beige box with orange border
- [ ] Music note icon visible
- [ ] "ARTISTS" label in orange, uppercase
- [ ] All artist names and instruments shown
- [ ] Easy to read and understand

#### Language Switching
- [ ] Switch to Romanian (RO)
- [ ] All concert info translates correctly
- [ ] Artist names remain the same
- [ ] Descriptions translate properly
- [ ] Switch back to English (EN)

---

## 🎨 Styling Details

### Color Scheme
- **Beige background:** `#ffeccb` with 30% opacity
- **Orange border:** `#e2a347`
- **Blue accents:** `#154363` (icons, price)
- **Black text:** `#121212`

### Spacing
- Card padding: `p-6` (regular), `lg:p-8` (featured)
- Artist box margin: `mb-6`
- Space between elements: `gap-3`
- Grid gaps: `gap-8 lg:gap-12`

### Typography
- Concert title: `font-headline` (GFS Didot), `text-2xl lg:text-3xl`
- Featured title: `text-3xl lg:text-4xl`
- Artist label: `text-sm font-semibold uppercase tracking-wide`
- Details: `font-sans text-sm`

---

## 📊 Concert Information Summary

| Concert | Date | Artists | Venue |
|---------|------|---------|-------|
| **Opening Concert** | Dec 6 | Răzvan Suma (cello), Oana Crișu (piano) | Amfiteatrul Cornel Țăranu |
| **Piano Recital** | Dec 13 | Horia Mihail (piano) | Amfiteatrul Cornel Țăranu |
| **Chamber Quartet** | Dec 20 | R. Dumitru, H. Haplea, M. Maxim, V. Câmpean | Amfiteatrul Cornel Țăranu |

**All concerts:**
- Time: 19:00
- Location: Academia Națională de Muzică "Gheorghe Dima", Cluj-Napoca
- Tickets: Contact for booking

---

## 🎯 Next Steps

### 1. Add Booking Links

Update the `bookingUrl` in the component:

```tsx
const upcomingConcerts: Concert[] = [
  {
    id: '1',
    // ...
    bookingUrl: 'https://your-booking-platform.com/december-6',
  },
  // ... other concerts
];
```

### 2. Add Concert Images

Add high-quality images to:
```
/public/images/concerts/
  - concert-1.jpg (Opening Concert)
  - concert-2.jpg (Horia Mihail)
  - concert-3.jpg (Chamber Quartet)
```

Recommended sizes:
- Featured concert: 1920×800px
- Regular concerts: 800×600px

### 3. Update After Each Concert

After each concert, you can:
1. Move concert data to "Previous Concerts" section
2. Add photos/videos from the event
3. Add the next upcoming concert

---

## ✨ Before & After

### Before
- Generic placeholder concerts
- No artist information
- Generic venues (Bucharest, Timișoara)
- March/April dates

### After ✅
- **Real We Are Classics series concerts**
- **All artist names and instruments displayed**
- **Actual venue in Cluj-Napoca**
- **December 2024 dates**
- **Professional artist information boxes**
- **Bilingual support (EN/RO)**

---

## 🎉 Summary

Your "Upcoming Concerts" section now features:

✅ **Real concert series:** "We Are Classics - Chamber Music Series"  
✅ **3 December concerts** with actual dates and times  
✅ **All artist names** prominently displayed  
✅ **Venue information:** Amfiteatrul Cornel Țăranu  
✅ **Professional design** with highlighted artist boxes  
✅ **Bilingual content** (English & Romanian)  
✅ **Opening concert** featured with special badge  

**Your website now showcases the actual concert series!** 🎻✨

Test it now:
```bash
npm run dev
```










