const stats = [
  {
    id: "01",
    value: "10 lac+",
    description: "Customers",
  },
  {
    id: "02",
    value: "1000+",
    description: "Corporates On Board",
  },
  {
    id: "03",
    value: "13k+",
    description: "Meals in bulk orders getting served every month",
  },
];

const Numbers = () => {
  return (
    <section className="py-8 md: bg-primary/5 text-center">
      <div className="ui-container">
        <h3 className="mb-3 text-2xl md:text-3xl lg:text-4xl font-medium">
          The Numbers Talk
        </h3>
        <p className="text-sm md:text-base text-uiBlack-light text-pretty">
          Not Bragging, just saying!
        </p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 items-center gap-8">
          {stats.map(({ id, value, description }) => (
            <div key={id} className="space-y-px">
              <h5 className="text-2xl md:text-3xl lg:text-4xl font-medium">
                {value}
              </h5>
              <p className="text-sm md:text-base text-uiBlack-light text-pretty">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Numbers;
