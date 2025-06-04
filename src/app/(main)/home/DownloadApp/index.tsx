import Image from "next/image";

const DownloadApp = () => {
  return (
    <section className="bg-primary">
      <div className="py-16 ui-container flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1 lg:min-w-96 space-y-6">
          <div className="space-y-2">
            <h3 className="text-uiWhite text-4xl">
              <span className="fon-medium">Downoload</span> <br />
              <span className="font-semibold">Delryt App</span>
            </h3>
            <p className="text-uiWhite/80">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
              maiores praesentium quis vitae error, laborum ipsa, eos enim nisi
              cumque quas earum. Praesentium ducimus expedita, et at similique
              illo porro debitis esse nulla voluptates nisi tempore nemo
              perferendis molestias minima!
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
                  src="/images/app/google-play.svg"
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
                  src="/images/app/app-store.svg"
                  alt="App Store Image"
                />
              </a>
            </div>

            <figure>
              <Image
                width={400}
                height={400}
                src="/images/app/QR-code.webp"
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
            height={388}
            src="/images/app/app-image-1.webp"
            alt="download-eatsure-app"
            className="w-full aspect-5/8"
          />
          <Image
            width={242}
            height={388}
            src="/images/app/app-image-2.webp"
            alt="download-eatsure-app"
            className="w-full aspect-5/8"
          />

          {/* Keeping it hidden in mobile screen */}
          <Image
            width={242}
            height={388}
            src="/images/app/app-image-3.webp"
            alt="download-eatsure-app"
            className="w-full aspect-5/8 hidden sm:block"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
