const TermsPage = () => {
  return (
    <main className="ui-container mt-4 mb-10">
      <h2 className="mb-3 font-medium text-2xl sm:text-4xl">
        Terms and Conditions
      </h2>
      <p className="text-uiBlack-light text-pretty text-sm sm:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga,
        doloremque perferendis consectetur quo sequi enim? Deleniti voluptatem
        illum laboriosam, voluptatibus deserunt dignissimos inventore vel
        laborum doloremque quisquam amet perspiciatis labore corrupti tempore.
        Facere fugit omnis culpa quisquam ipsam sunt.
      </p>

      <div className="mt-6 space-y-6">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="space-y-3">
            <h3 className="font-medium sm:text-xl">
              {index + 1}. Lorem ipsum dolor sit amet consectetur.
            </h3>

            {[...Array(3)].map((_, index) => (
              <p
                key={index}
                className="text-sm sm:text-base text-uiBlack-light text-pretty"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                reprehenderit excepturi eos repellat dolor, ea praesentium
                minima laboriosam recusandae cupiditate voluptates reiciendis
                quas inventore fuga ipsam aliquid molestias saepe odio.
              </p>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
};

export default TermsPage;
