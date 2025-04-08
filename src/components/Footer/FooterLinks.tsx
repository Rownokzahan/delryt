import Link from "next/link";

interface LinkItem {
  label: string;
  url: string;
};

interface LinkGroup {
  title: string;
  links: LinkItem[];
};

const linkGroups: LinkGroup[] = [
  {
    title: "Sure choice of Restaurants",
    links: [
      { label: "Sweet Truth", url: "/restaurant" },
      { label: "Lunchbox - Meals & Thalis", url: "/restaurant" },
      { label: "Veg Meals by LunchBox", url: "/restaurant" },
      { label: "Natural Ice Cream", url: "/restaurant" },
      { label: "Faasos' Signature Wraps & Rolls", url: "/restaurant" },
      { label: "Faasos", url: "/restaurant" },
      { label: "-1+ More", url: "/restaurant" },
    ],
  },
  {
    title: "Our Story",
    links: [
      { label: "About Us", url: "/about-us" },
      { label: "200+ stringent quality checks", url: "/" },
      { label: "No artificial colors or flavors", url: "/" },
      { label: "Double-sealed packaging", url: "/" },
      { label: "Know your food", url: "/" },
      { label: "FAQs", url: "/" },
    ],
  },
  {
    title: "My Account",
    links: [
      { label: "Profile", url: "/" },
      { label: "Address", url: "/" },
      { label: "My Order", url: "/" },
    ],
  },
  {
    title: "Delryt App",
    links: [
      { label: "Android", url: "/" },
      { label: "iOS", url: "/" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Help & Support", url: "/terms" },
      { label: "Privacy Policy", url: "/terms" },
      { label: "Terms & Conditions", url: "/terms" },
      { label: "Return Policy", url: "/terms" },
      { label: "Refund Policy", url: "/terms" },
      { label: "Cancellation Policy", url: "/terms" },
    ],
  },
];

const FooterLinks = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:flex justify-between gap-6">
      {linkGroups.map(({ title, links }) => (
        <div key={title} className="space-y-4">
          {/* Group title */}
          <h2 className="text-lg font-semibold">{title}</h2>

          <ul className="space-y-2">
            {/* Rendering each link in the group */}
            {links.map(({ url, label }) => (
              <li key={label}>
                <Link
                  href={url}
                  className="text-uiWhite/70 hover:text-uiWhite"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
