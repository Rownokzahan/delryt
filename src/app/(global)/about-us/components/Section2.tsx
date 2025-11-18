const Section2 = () => {
  return (
    <section
      className="p-4 sm:p-10 bg-cover"
      style={{
        backgroundImage:
          "url('https://assets.faasos.io/eatsure/production/orangePattern.svg')",
      }}
    >
      <div className="max-w-[600px] px-4 py-6 sm:px-6 sm:py-8 mx-auto bg-uiWhite relative">
        <div className="space-y-4 text-balance relative">
          <h3 className="text-3xl sm:text-5xl font-semibold">
            Brainwashing kills zero germs
          </h3>

          <div className="bg-primary p-4 me-20 relative">
            <p className="py-5 text-uiWhite">
              Everyone tells us what to eat. No one tells us what it is that
              we’re eating. EatSure changes that. It tells you exactly what goes
              inside your food, who makes it, where it is made and how it will
              be delivered. We’re putting facts on the table. And goodness back
              on the menu. Take back control of what you eat.
            </p>

            <p className="absolute h-max -right-20 top-1/2 -translate-y-1/2 vertical-text text-xs">
              100% Bio-secured. 0% BS.
            </p>

            <span className="block absolute left-0 top-0 w-full border-16 border-x-uiWhite border-t-uiWhite border-b-transparent"></span>

            <span className="block absolute left-0 bottom-0 w-full border-16 border-x-uiWhite border-b-uiWhite border-t-transparent"></span>
          </div>
        </div>

        <span className="absolute top-2 right-2 flex gap-1">
          {[...Array(4)].map((_, index) => (
            <span key={index} className="block size-1.5 bg-primary" />
          ))}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="68"
            height="148"
            fill="none"
            viewBox="0 0 68 148"
          >
            <path stroke="#c60e0e" d="M.5 1H38l29 29v117.5" />
          </svg>
        </span>
      </div>
    </section>
  );
};

export default Section2;