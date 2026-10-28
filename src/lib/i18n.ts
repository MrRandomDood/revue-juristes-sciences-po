export type Lang = 'fr' | 'en';

// URL paths are kept identical to the old Wix site so existing links and search results keep working.
export const PATHS = {
  home: '',
  issues: 'nos-revues-semestrielles',
  blog: 'blog',
  submit: 'critères-de-soumission',
  prizes: 's-projects-basic',
  prizeRjsp: 'about-5-1',
  prizeBclp: 'about-5',
  team: 'l-équipe',
} as const;

export const url = (lang: Lang, path = '') => {
  const p = path.replace(/^\/+/, '');
  return lang === 'en' ? `/en${p ? '/' + p : ''}` : `/${p}`;
};

export const t = {
  fr: {
    siteName: 'Revue des Juristes de Sciences Po',
    nav: { home: 'Accueil', issues: 'Nos Revues semestrielles', blog: 'Le Blog', prizes: 'Prix et Distinctions', team: "L'équipe", submit: 'Publier sur le blog' },
    hero: {
      lead: 'Revue bilingue entièrement conçue par les étudiants de l’École de droit de Sciences Po, publiée par LexisNexis.',
      allIssues: 'Toutes nos revues',
      stats: { founded: 'Année de fondation', issues: 'Numéros publiés', bilingual: 'Revue bilingue' },
    },
    about: 'À propos',
    blogName: 'Le Blog de la RJSP',
    blogTeaser: 'Découvrez aussi notre blog : des articles d’actualité juridique rédigés par des étudiants.',
    readBlog: 'Lire le blog',
    langFilter: { label: 'Langue des articles', all: 'Tous' },
    latestIssue: 'Dernier numéro',
    allPosts: 'Tous les articles',
    archives: 'Les Archives',
    issueNo: 'N°',
    downloadPdf: 'Lire le PDF',
    notOnline: 'PDF non disponible en ligne',
    browse: 'Feuilleter',
    flipbook: { loading: 'Chargement de la revue…', failed: 'Impossible d’afficher la revue. Ouvrez le PDF.', prev: 'Page précédente', next: 'Page suivante', of: 'sur', fullscreen: 'Plein écran', download: 'Télécharger le PDF' },
    by: 'Par',
    minRead: 'min de lecture',
    backToBlog: '← Retour au blog',
    langLabel: { fr: 'Français', en: 'Anglais' },
    team: { editorsInChief: 'Rédacteurs en chef', editorialBoard: 'Comité de Rédaction', scientificCommittee: 'Comité Scientifique' },
    prizes: { rjsp: 'Prix RJSP', bclp: 'Prix RJSP/BCLP', legalChange: 'Prix RJSP/Legal Change' },
    footer: { partners: 'Nos Partenaires', contact: 'Contact' },
    notFound: 'Page introuvable',
  },
  en: {
    siteName: 'Sciences Po Law Review',
    nav: { home: 'Home', issues: 'Our Biannual Issues', blog: 'The Blog', prizes: 'Prizes and Awards', team: 'The Team', submit: 'Write for the blog' },
    hero: {
      lead: 'A bilingual journal run entirely by students of Sciences Po Law School, published by LexisNexis.',
      allIssues: 'All our issues',
      stats: { founded: 'Founded', issues: 'Issues published', bilingual: 'Bilingual' },
    },
    about: 'About',
    blogName: 'The RJSP Blog',
    blogTeaser: 'Also check out our blog: articles on current legal issues, written by students.',
    readBlog: 'Read the blog',
    langFilter: { label: 'Article language', all: 'All' },
    latestIssue: 'Latest issue',
    allPosts: 'All posts',
    archives: 'Archives',
    issueNo: 'No.',
    downloadPdf: 'Read the PDF',
    notOnline: 'PDF not available online',
    browse: 'Browse',
    flipbook: { loading: 'Loading the issue…', failed: 'The issue could not be displayed. Open the PDF instead.', prev: 'Previous page', next: 'Next page', of: 'of', fullscreen: 'Full screen', download: 'Download the PDF' },
    by: 'By',
    minRead: 'min read',
    backToBlog: '← Back to the blog',
    langLabel: { fr: 'French', en: 'English' },
    team: { editorsInChief: 'Editors-in-Chief', editorialBoard: 'Editorial Board', scientificCommittee: 'Scientific Committee' },
    prizes: { rjsp: 'RJSP Award', bclp: 'RJSP/BCLP Prize', legalChange: 'RJSP/Legal Change Prize' },
    footer: { partners: 'Our Partners', contact: 'Contact' },
    notFound: 'Page not found',
  },
} as const;

export const formatDate = (date: Date, lang: Lang) =>
  date.toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
