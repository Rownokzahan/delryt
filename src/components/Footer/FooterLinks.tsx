import Link from "next/link";

interface LinkItem {
  label: string;
  url: string;
}

interface LinkGroup {
  title: string;
  links: LinkItem[];
}

const linkGroups: LinkGroup[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Privacy Policy", url: "/terms" },
      { label: "Terms & Conditions", url: "/terms" },
      { label: "Return Policy", url: "/terms" },
      { label: "Refund Policy", url: "/terms" },
      { label: "Cancellation Policy", url: "/terms" },
    ],
  },
  {
    title: "Our Story",
    links: [
      { label: "About Us", url: "/terms" },
      { label: "FAQs", url: "/faq" },
    ],
  },
  {
    title: "My Account",
    links: [
      { label: "Profile", url: "/profile" },
      { label: "Address", url: "/profile/manage-address" },
      { label: "My Orders", url: "/profile/my-orders" },
    ],
  },
  {
    title: "Delryt App",
    links: [
      { label: "Android", url: "/" },
      { label: "iOS", url: "/" },
    ],
  },
];

const FooterLinks = () => {
  return (
    <>
      {linkGroups.map(({ title, links }) => (
        <div key={title} className="space-y-4">
          {/* Group title */}
          <h2 className="text-lg text-nowrap font-semibold">{title}</h2>

          <ul className="space-y-2">
            {/* Rendering each link in the group */}
            {links.map(({ url, label }) => (
              <li key={label}>
                <Link href={url} className="text-uiWhite/70 hover:text-uiWhite">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default FooterLinks;
