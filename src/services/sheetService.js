const SHEET_URL = 'https://api.codetabs.com/v1/proxy?quest=' + encodeURIComponent('https://docs.google.com/spreadsheets/d/1ITTzfICPKixkr7fWIlox9UUcN4ySPdR62e79MgjzCkw/gviz/tq?tqx=out:json');

const convertToDirectUrl = (url, size = 'w800') => {
  if (!url) return '';
  const match = url.match(/file\/d\/([a-zA-Z0-9_-]+)/);
  if (match) {
    return `https://drive.google.com/thumbnail?id=${match[1]}&sz=${size}`;
  }
  return url;
};

const FALLBACK_DATA = [
  { src: 'https://drive.google.com/thumbnail?id=1YdbjjfsZg4cVQiRQvpdfyEtwib9XB9BH&sz=w800', title: 'The Aurora Bodice', category: 'Hand-Beaded', colSpan: 'md:col-span-7 lg:col-span-5', isFeatured: true },
  { src: 'https://drive.google.com/thumbnail?id=1lK_Cm9p5pwUt_YRtBW0KHLiNHbvlz93D&sz=w800', title: 'Floating Garden Veil', category: 'Seed Pearl Finish', colSpan: 'md:col-span-5 lg:col-span-7 lg:pt-24' },
  { src: 'https://drive.google.com/thumbnail?id=1VzQwPgKYDgcwtMgwKpdVFyf_pptK3VGW&sz=w800', title: 'Tapestry Cuffs', category: 'Silver Threading', colSpan: 'md:col-span-6 lg:col-span-4' },
  { src: 'https://drive.google.com/thumbnail?id=1DVbtppwRELl5olt8eRi_fUFaNkNnN9C3&sz=w1200', title: 'The Ethereal Gown', category: 'Textural Layering', colSpan: 'md:col-span-6 lg:col-span-8' },
  { src: 'https://drive.google.com/thumbnail?id=19KOX4dN_CS31gZyOx_VGKcDJY_pGGpBW&sz=w800', title: 'Process & Perfection', category: 'Atelier Craftsmanship', colSpan: 'md:col-span-12 lg:col-start-3 lg:col-span-8', isFeatured: true },
  { src: 'https://drive.google.com/thumbnail?id=1wSA-Ympc0Mw0cF23w-d-Fa_x4X9PZpBR&sz=w800', title: 'Floral Relief Scarf', category: 'Hand-Cut Appliqué', colSpan: 'md:col-span-5 lg:col-span-4' },
  { src: 'https://drive.google.com/thumbnail?id=1SrmBzUmUfQHifwKQTWoEVjs35usn0O7U&sz=w800', title: 'Midnight in Paris Kaftan', category: 'Chantilly Overlay', colSpan: 'md:col-span-7 lg:col-span-8 lg:-mt-32' }
];

export const fetchGalleryData = async () => {
  try {
    const response = await fetch(SHEET_URL);
    if (!response.ok) {
      return FALLBACK_DATA.map((item, i) => ({ ...item, id: i + 1 }));
    }
    
    const text = await response.text();
    
    if (!text || !text.includes('google.visualization')) {
      return FALLBACK_DATA.map((item, i) => ({ ...item, id: i + 1 }));
    }
    
    const json = text.replace(/^google\.visualization\.Query\.setResponse\(/, '').replace(/\);$/, '');
    const data = JSON.parse(json);
    const rows = data.table.rows;
    
    return rows.slice(1).map((row, index) => ({
      id: index + 1,
      src: convertToDirectUrl(row.c[0]?.v || '', row.c[5]?.v || 'w800'),
      title: row.c[1]?.v || '',
      category: row.c[2]?.v || '',
      colSpan: row.c[3]?.v || 'md:col-span-6',
      isFeatured: (row.c[4]?.v || '').toString().toUpperCase() === 'TRUE'
    })).filter(item => item.src);
  } catch (error) {
    return FALLBACK_DATA.map((item, i) => ({ ...item, id: i + 1 }));
  }
};
