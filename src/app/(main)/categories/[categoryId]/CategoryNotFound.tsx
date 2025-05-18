import { TbReportSearch } from "react-icons/tb";

const CategoryNotFound = () => {
  return (
    <section className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="flex flex-col items-center gap-2">
        <TbReportSearch className="text-5xl sm:text-6xl" aria-hidden="true" />
        <h2 className="text-2xl font-semibold">Category Not Found</h2>
        <p className="text-base text-uiBlack-light max-w-md">
          This category doesn’t exist or couldn’t be loaded. Please try again
          later.
        </p>
      </div>
    </section>
  );
};

export default CategoryNotFound;