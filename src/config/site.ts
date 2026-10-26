export const site = {
  name: "Eau BN Piscines",
  tagline: "Étanchéité, rénovation et accompagnement de votre projet",
  address: { street: "1595 route de Berre", city: "13510 Eguilles" },
  phone: "06 21 05 50 84",
  phoneHref: "tel:+33621055084",
  email: "contact.eaubn@gmail.com",
  nuancier: {
    label: "Nuancier PVC armé RENOLIT ALKORPLAN",
    shortLabel: "Nuancier PVC armé",
    url: "https://renolit-alkorplan.com/fr/collections",
  },
  instagramUrl:
    process.env.INSTAGRAM_URL || "https://www.instagram.com/eau_bn_piscine/",
  facebookUrl: process.env.FACEBOOK_URL || "",
};

export const navigation = [
  { label: "Projets", href: "/projet-conception" },
  { label: "Étanchéité", href: "/etancheite-pvc-arme" },
  { label: "Hydraulique", href: "/hydraulique" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Contact", href: "/contact" },
];
