# Partner & Sponsor Logos

Add your partner and sponsor logos to this folder.

## File Format
- **Format:** PNG or SVG (SVG preferred for scalability)
- **Background:** Transparent
- **Size:** At least 400x400px
- **Color:** Can be color or grayscale (grayscale filter applied on hover)

## Naming Convention
```
partner-1.png
partner-2.png
partner-3.png
...etc
```

Or use descriptive names:
```
romanian-athenaeum.png
national-opera.png
ministry-culture.png
```

## Example
Once you add logos, update the `partners` array in:
`src/components/sections/PartnersSponsors.tsx`

```tsx
const partners = [
  { name: 'Romanian Athenaeum', logo: '/images/sponsors/romanian-athenaeum.png' },
  { name: 'National Opera', logo: '/images/sponsors/national-opera.png' },
  // ...add more
];
```

Then uncomment the Image component in the component file.






