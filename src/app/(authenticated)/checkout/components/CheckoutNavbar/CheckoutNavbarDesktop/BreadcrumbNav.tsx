import Link from "next/link";

const BreadcrumbNav = () => {
  return (
    <div className="py-4 bg-primary/5">
      <div className="ui-container">
        <Link href={"/"} className="text-uiBlack-light">
          Home
        </Link>
        <span className="text-uiBlack-light mx-2">{">"}</span>
        <Link href={"/checkout"}>Checkout</Link>
      </div>
    </div>
  );
};

export default BreadcrumbNav;