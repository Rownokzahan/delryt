const Section3 = () => {
  return (
    <section
      className="p-4 sm:p-10 bg-cover"
      style={{
        backgroundImage:
          "url('https://assets.faasos.io/eatsure/production/crimsonRedPattern.svg')",
      }}
    >
      <div className="max-w-[600px] px-4 py-6 sm:px-6 sm:py-8 mx-auto bg-uiWhite space-y-6">
        <div className="flex items-center">
          <div>
            <h3 className="mb-4 text-3xl sm:text-5xl font-semibold">
              0% Hype. 100% Hygiene
            </h3>
            <p>
              Each person that comes in contact with your meal is medically
              certified and adheres to strict hygiene, safety and sanitisation
              protocols.
            </p>
          </div>
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="112"
              fill="none"
              viewBox="0 0 70 112"
            >
              <g fill="#c60e0e" clipPath="url(#clip0)">
                <path d="M31.892 18.572h-6.364v6.167h6.364v-6.167zM19.091 18.572h-6.364v6.167h6.364v-6.167zM19.091 31.048h-6.364v6.167h6.364v-6.167zM19.091 6.167h-6.364v6.167h6.364V6.167zM6.364 0H0v6.167h6.364V0zM6.364 12.334H0v6.167h6.364v-6.167zM6.364 24.668H0v6.167h6.364v-6.167zM6.364 37.286H0v6.167h6.364v-6.167zM38.255 49.691H63.71v-6.167h-6.364V31.048h-6.364V18.572H38.255V31.048h-6.364v12.476h-6.363v6.167h12.727zm0-6.238v-6.237h12.727v6.308H38.255v-.07zM25.528 99.666V49.69h-6.364V105.833h6.364v-6.167zM63.636 49.762v56.071H25.528V112H63.71v-6.096H70V49.762h-6.364z" />
                <path d="M47.764 68.405H41.4v12.476h6.364V68.405z" />
                <path d="M47.764 74.714H41.4V87.19h6.364V74.714z" />
                <path d="M41.418 74.704v6.167h12.874v-6.167H41.418z" />
                <path d="M34.897 74.693v6.167H47.77v-6.167H34.897z" />
              </g>
              <defs>
                <clipPath id="clip0">
                  <path fill="#fff" d="M0 0H70V112H0z" />
                </clipPath>
              </defs>
            </svg>
          </i>
        </div>

        <div className="flex">
          <div className="space-y-4">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="98"
                height="101"
                fill="none"
                viewBox="0 0 98 101"
              >
                <path
                  fill="#c60e0e"
                  d="M75.369 85.096h-7.562v7.771H30.123v7.771H67.93v-7.77h7.438v-7.772h7.561v-7.77H75.37v7.77zM90.368 30.828v38.726H82.93v7.771h7.562v-7.643h7.438V30.828h-7.562zM60.37 0H30.122v7.77H67.93V0h-7.562zM7.562 69.491V30.765H0v38.854h7.438v7.643h7.561v-7.77H7.562zM15.122 23.185h7.438v-7.707h7.437V7.707h-7.561v7.707h-7.438v7.58H7.56v7.77h7.562v-7.58z"
                />
                <path
                  fill="#c60e0e"
                  d="M75.544 15.865l-.13 7.437 7.706.134-.13 7.437 7.77.135.132-7.56-7.706-.135.13-7.436-7.579-.133.13-7.436-7.77-.136-.131 7.56 7.578.133zM14.659 77.763l-.13 7.437 7.706.134-.13 7.437 7.77.135.131-7.56-7.706-.135.13-7.436-7.578-.133.13-7.436-7.77-.136-.132 7.56 7.579.133zM45.14 27.267v30.247h7.772V19.706H45.14v7.561z"
                />
                <path
                  fill="#c60e0e"
                  d="M52.707 57.048H60.148V64.489H52.707zM60.148 64.489H67.589V71.93H60.148z"
                />
              </svg>
            </i>
            <p>
              Every EatSure order undergoes 200+ quality checks before it’s
              delivered. Our partner restaurants ensure that your meal comes
              with the EatSurance of taste, freshness, safety and hygiene.
            </p>
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold">
            200+ Quality Checks. Still delivered on time.
          </h2>
        </div>

        <div className="ms-auto w-max">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="62"
            height="16"
            viewBox="0 0 62 16"
            fill="none"
          >
            <rect width="7.75" height="8" fill="#c60e0e" />
            <rect x="7.75" y="8" width="7.75" height="8" fill="#c60e0e" />
            <rect x="15.5" width="7.75" height="8" fill="#c60e0e" />
            <rect x="23.25" y="8" width="7.75" height="8" fill="#c60e0e" />
            <rect x="31" width="7.75" height="8" fill="#c60e0e" />
            <rect x="38.75" y="8" width="7.75" height="8" fill="#c60e0e" />
            <rect x="46.5" width="7.75" height="8" fill="#c60e0e" />
            <rect x="54.25" y="8" width="7.75" height="8" fill="#c60e0e" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Section3;
