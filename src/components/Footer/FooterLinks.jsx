import Link from "next/link";

const linkGroups = [
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
      { label: "Sure Points FAQs", url: "/" },
      { label: "Terms & Conditions", url: "/" },
    ],
  },
  {
    title: "EatSure Initiatives",
    links: [
      { label: "Party Orders", url: "/" },
      { label: "Oven Story Franchise Enquiry", url: "/" },
    ],
  },
  {
    title: "EatSure App",
    links: [
      { label: "Android", url: "/" },
      { label: "iOS", url: "/" },
    ],
  },
  {
    title: "Important Links",
    links: [
      { label: "Order Biryani Online", url: "/" },
      { label: "Order Dessert Online", url: "/" },
      { label: "Order Cake Online", url: "/" },
      { label: "Order Pizza Online", url: "/" },
      { label: "Chicken Biryani Online", url: "/" },
      { label: "Order Chinese near me", url: "/" },
      { label: "Veg Biryani Online", url: "/" },
      { label: "Order Cheese Burst Pizza Online", url: "/" },
    ],
  },
];

const FooterLinks = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:flex justify-between gap-6">
      {linkGroups.map((group, index) => (
        <div key={index} className="space-y-4">
          {/* Group title */}
          <h2 className="text-lg font-semibold">{group.title}</h2>

          <ul className="space-y-2">
            {/* Rendering each link in the group */}
            {group.links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.url}
                  className="text-ui-gray-light hover:text-white"
                >
                  {link.label}
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
