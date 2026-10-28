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
    nav: { home: 'Accueil', issues: 'Nos Revues semestrielles', blog: 'Blog', prizes: 'Prix et Distinctions', team: "L'équipe", submit: 'Publier' },
    latestIssue: 'Dernier numéro',
    discover: 'Découvrir',
    editorials: 'Éditoriaux',
    read: 'Lire',
    allPosts: 'Tous les articles',
    archives: 'Les Archives',
    issueNo: 'N°',
    downloadPdf: 'Lire le PDF',
    notOnline: 'Disponible auprès de LexisNexis',
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
    nav: { home: 'Home', issues: 'Our Biannual Issues', blog: 'Blog', prizes: 'Prizes and Awards', team: 'The Team', submit: 'Submit' },
    latestIssue: 'Latest issue',
    discover: 'Discover',
    editorials: 'Editorials',
    read: 'Read',
    allPosts: 'All posts',
    archives: 'Archives',
    issueNo: 'No.',
    downloadPdf: 'Read the PDF',
    notOnline: 'Available from LexisNexis',
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
