import Button from "@/components/ui/Button";
import Image from "next/image";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const EliteBanner = () => {
  return (
    <div className="md:ui-container mb-6">
      <div
        className="pt-6 rounded-md bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://product-assets.faasos.io/eatsure/production/desktopHomeCardTexturePhase4.svg')",
        }}
      >
        <div className="ui-container">
          <Image
            width="137"
            height="110"
            src="images/elite-logo.svg"
            alt="Banner Logo"
            className="mx-auto w-28"
          />

          <div className="w-max mx-auto mt-4">
            <div
              className="p-4 md:px-12 pb-6 pt-0 rounded-t-lg"
              style={{
                backgroundImage:
                  "linear-gradient(rgb(255, 245, 213), rgb(252, 217, 108))",
              }}
            >
              <p className="w-max mb-4 mx-auto p-1 px-6 border border-[#F0C952] rounded-b-full text-xs font-bold">
                Redeem SurePoints to be an Elite
              </p>

              <div className="flex items-center justify-center gap-1 md:gap-8">
                <div className="flex items-center gap-1 md:gap-3">
                  <i>
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="17"
                        cy="17"
                        r="16.5"
                        fill="#FFF6D9"
                        stroke="#F0C952"
                      ></circle>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21.737 11.41a1.882 1.882 0 1 1-3.614-1.052 1.882 1.882 0 0 1 3.614 1.053zm-4.766 6.015c1.372 1.508 2.001 3.648 1.532 5.713a1.156 1.156 0 1 1-2.254-.512c.34-1.495-.24-3.093-1.42-4.055-.847-.69-1.345-2.162-.405-3.274l1.338-1.584.002-.002c1.125-1.327 3.055-1.06 4.004.139.658.831 1.343 1.368 2.524 1.623a1.156 1.156 0 1 1-.489 2.26c-1.535-.332-2.573-1.029-3.409-1.934l-1.423 1.626zm7.47 4.301a1.734 1.734 0 1 1-3.468 0 1.734 1.734 0 0 1 3.467 0zm1.54 0a3.275 3.275 0 1 1-6.55 0 3.275 3.275 0 0 1 6.55 0zM12.304 23.46a1.734 1.734 0 1 0 0-3.467 1.734 1.734 0 0 0 0 3.467zm0 1.541a3.275 3.275 0 1 0 0-6.55 3.275 3.275 0 0 0 0 6.55zm.761-15.52a1.349 1.349 0 0 0-1.897.188l-1.862 2.269a1.348 1.348 0 0 0 .187 1.897l2.269 1.862a1.348 1.348 0 0 0 1.898-.187l1.861-2.269a1.349 1.349 0 0 0-.187-1.898l-2.269-1.861z"
                        fill="#616161"
                      ></path>
                    </svg>
                  </i>
                  <div className="font-bold">
                    <h3 className="text-sm">FREE Delivery</h3>
                    <p className="text-xs">above ₹199</p>
                  </div>
                </div>

                <div className="h-8 w-px bg-uiBlack/70" />

                <div className="flex items-center gap-1 md:gap-3">
                  <i>
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="17"
                        cy="17"
                        r="16.5"
                        fill="#FFF6D9"
                        stroke="#F0C952"
                      ></circle>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.888 17.01v-2.838h-1.584v2.838H9.707c-.411-.072-.707-.404-.707-.784v-1.262c0-.219.096-.417.254-.561a.913.913 0 0 1 .611-.231h4.15a21.798 21.798 0 0 1-.126-.085c-.744-.514-1.44-1.113-1.919-1.712-.572-.715-.857-1.46-.64-2.152.062-.198.167-.388.319-.568.262-.32.592-.515.97-.602.6-.141 1.262.008 1.91.37.552.309 1.11.78 1.603 1.347a7.755 7.755 0 0 1 1.192 1.836 6.906 6.906 0 0 1 1.068-1.057c.513-.411 1.065-.727 1.58-.91.63-.22 1.235-.252 1.737-.04a1.548 1.548 0 0 1 .938 1.238c.068.643-.304 1.247-.919 1.78-.225.192-.484.38-.766.555h3.173c.237 0 .45.09.609.231l.002.005c.158.142.254.34.254.556v1.262c0 .38-.302.71-.707.784h-6.405zm6.407 1.445v5.8c0 .205-.09.39-.239.527a.84.84 0 0 1-.575.218h-5.593v-6.545h6.407zm-5.973-4.633c.262-.095.532-.206.8-.329.583-.267 1.136-.586 1.521-.92.277-.24.451-.456.437-.6a.117.117 0 0 0-.017-.04l-.014-.026c-.09-.039-.273-.008-.507.074-.344.124-.733.35-1.107.65-.417.332-.81.741-1.113 1.191zm-2.015 4.633V25h-5.782a.857.857 0 0 1-.578-.218.694.694 0 0 1-.152-.198.686.686 0 0 1-.085-.33v-5.8h6.597zm-1.465-5.515c.414.288.842.545 1.245.754-.248-.736-.685-1.445-1.19-2.026-.382-.443-.797-.795-1.188-1.016-.293-.162-.538-.244-.694-.208a.223.223 0 0 0-.112.08.282.282 0 0 0-.05.092c-.069.219.095.545.39.913.384.48.967.974 1.598 1.411z"
                        fill="#616161"
                      ></path>
                    </svg>
                  </i>
                  <div className="font-bold">
                    <h3 className="text-sm">FREE Dishes</h3>
                    <p className="text-xs">above ₹299</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FFF7DF] p-4 md:px-12 py-6 rounded-b-lg">
              <Button className="w-[90%] mx-auto">Login To Delryt</Button>
            </div>

            <button className="w-full mt-4 px-4 py-3 rounded-t-md flex justify-between items-center text-xs text-uiWhite bg-primary">
              <p>No joining fees required</p>
              <p className="flex items-center gap-2">
                <span>Know more</span>
                <IoIosArrowDroprightCircle />
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EliteBanner;
