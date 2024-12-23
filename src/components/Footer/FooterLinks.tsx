import Link from "next/link";

type LinkItem = {
  label: string;
  url: string;
};

type LinkGroup = {
  title: string;
  links: LinkItem[];
};

const linkGroups: LinkGroup[] = [
  {
    title: "Sure choice of Restaurants",
    links: [
      { label: "Sweet Truth", url: "/" },
      { label: "Lunchbox - Meals & Thalis", url: "/" },
      { label: "Veg Meals by LunchBox", url: "/" },
      { label: "Natural Ice Cream", url: "/" },
      { label: "Faasos' Signature Wraps & Rolls", url: "/" },
      { label: "Faasos", url: "/" },
      { label: "-1+ More", url: "/" },
    ],
  },
  {
    title: "Our Story",
    links: [
      { label: "About Us", url: "/" },
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
      { label: "Help & Support", url: "/" },
      { label: "Privacy Policy", url: "/" },
      { label: "Terms & Conditions", url: "/" },
      { label: "Return Policy", url: "/" },
      { label: "Refund Policy", url: "/" },
      { label: "Cancellation Policy", url: "/" },
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
                  className="text-ui-gray-light hover:text-white"
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
