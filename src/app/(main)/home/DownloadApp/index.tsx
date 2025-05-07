import Image from "next/image";

const DownloadApp = () => {
  return (
    <section
      className="bg-primary bg-blend-overlay bg-cover bg-center"
      style={{
        backgroundImage: `url("https://assets.faasos.io/eatsure/production/downloadAppPattern-mini.png")`,
      }}
    >
      <div className="py-16 ui-container flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1 lg:min-w-96 space-y-6">
          <div className="space-y-2">
            <h3 className="text-uiWhite text-4xl">
              <span className="fon-medium">Downoload</span> <br />
              <span className="font-semibold">EatSure App</span>
            </h3>
            <p className="text-[#cacaca]">
              EatSure, when you want to enjoy multiple cuisines from different
              trusted restaurants in one single order. Become an EatSure Elite,
              unlock FREE dishes on orders above ৳299 and pay ZERO delivery fees
              for orders above ৳199.
            </p>
          </div>

          <div className="flex gap-8">
            <div className="space-y-6">
              <a
                target="_blank"
                href=""
                className="block hover:scale-[1.02] duration-300"
              >
                <Image
                  width={176}
                  height={48}
                  src="https://assets.faasos.io/eatsure/production/play-store.svg"
                  alt="Play Store Image"
                />
              </a>
              <a
                target="_blank"
                href=""
                className="block hover:scale-[1.02] duration-300"
              >
                <Image
                  width={176}
                  height={48}
                  src="https://assets.faasos.io/eatsure/production/app-store.svg"
                  alt="App Store Image"
                />
              </a>
            </div>

            <figure>
              <Image
                width={2000}
                height={2000}
                src="https://product-assets.faasos.io/eatsure/production/es_home_page_aug_24.jpeg"
                alt="Scan Code"
                className="w-28 aspect-square"
              />
              <p className="mt-1 text-uiWhite text-sm">Scan To Download</p>
            </figure>
          </div>
        </div>

        <div className="h-max grid grid-cols-2 md:grid-cols-3 gap-8">
          <Image
            width={242}
            height={387}
            src="https://product-assets.faasos.io/eatsure/production/download-img-01-min.jpeg"
            alt="download-eatsure-app"
            className="w-full aspect-5/8"
          />
          <Image
            width={242}
            height={387}
            src="https://product-assets.faasos.io/eatsure/production/download-img-02-min.jpeg"
            alt="download-eatsure-app"
            className="w-full aspect-5/8"
          />

          {/* Keeping it hidden in mobile screen */}
          <Image
            width={242}
            height={387}
            src="https://product-assets.faasos.io/eatsure/production/download-img-03-min.jpeg"
            alt="download-eatsure-app"
            className="w-full aspect-5/8 hidden sm:block"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
