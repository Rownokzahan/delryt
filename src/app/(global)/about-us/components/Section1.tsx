import Image from "next/image";

const Section1 = () => {
  return (
    <section
      className="p-4 sm:p-10 bg-cover"
      style={{
        backgroundImage:
          "url('https://assets.faasos.io/eatsure/production/greenPattern.svg')",
      }}
    >
      <div className="max-w-[600px] px-4 py-6 sm:px-6 sm:py-8 mx-auto bg-uiWhite space-y-8">
        <div className="pr-10 space-y-4 text-balance relative">
          <h3 className="text-3xl sm:text-5xl font-semibold">
            Artificial Intelligence. Not Artificial Flavours.
          </h3>
          <p>
            Delryt doesn&apos;t sugarcoat or add artificial flavours to your
            meal. It tells you exactly what you are eating so that everything is
            transparent and above board.
          </p>
          <p>
            Everything on our menu from a delectable chocolate cake to an
            indulgent pizza or biryani is 100% free of anything artificial - no
            artificial colours and flavours.
          </p>

          <i className="absolute -top-2 right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="269"
              fill="none"
              viewBox="0 0 44 269"
            >
              <path
                fill="#C60E0E"
                d="M38.608 32.013V24H35.94v8.013h2.667zm-5.334 2.654h2.667v-2.654h-2.667v2.654zM35.94 24v-2.654h-2.667V24h2.667zm-5.334 13.346h2.667v-2.68h-2.667v2.68zm-2.667-16h5.334v-2.68H27.94v2.68zm-10.668 13.32h2.68v-2.653h-5.347v5.333H6.604V40h24.003v-2.654H17.272v-2.68zm8-18.666H22.62v2.667h5.32v-5.334h-2.666V16zm-2.653 0V7.987H19.95V16h2.668zM19.95 7.987V5.333h-2.68v2.654h2.68zm-2.68-5.333h-2.666V0h-2.667v2.654H9.27v2.68h8v-2.68zm-8 16.013H6.604v2.679H9.27v-2.68zm0-13.334H6.604v2.654H9.27V5.333zM3.937 34.667v2.679h2.667v-2.68H3.937zM6.604 8H3.937v8.013h2.667V8zm0 16.013v-2.667H3.937V16H1.272v18.667h2.665V24l2.667.013zM35.941 10.667h-2.667v2.666h2.667v-2.666zM27.94 0v2.654h10.668v10.68h2.664V0H27.94z"
              />
              <path
                fill="#C60E0E"
                d="M38.608 13.333h-2.667V16h2.667v-2.667zM35.941 16h-2.667v2.667h2.667V16zM35.941 5.333h-2.667v2.654h2.667V5.333zM32.725 8.54h-2.118v2.127h2.118V8.54zM30.607 10.667H27.94v2.666h2.667v-2.666zM27.94 7.987h-2.667v2.68h2.667v-2.68zM27.94 2.654h-2.667v2.68h2.667v-2.68z"
              />
              <path
                fill="#C60E0E"
                d="M25.273 5.333H22.62v2.654h2.654V5.333zM13.065 183.308h2.345v-2.345h-2.345v2.345zm-2.345-4.69v2.345h2.345v-2.345H10.72zm-2.345-2.345v2.345h2.345v-2.345H8.375zM6.03 173.86v2.346h2.345v-2.346H6.03zm32.897-23.517v4.69h2.346v-4.69h-2.346zm-2.345 7.102h2.345V155.1h-2.345v2.345zm-2.345-9.447v2.345h4.69v-2.345h-4.69zm-2.345 9.447h2.345v-7.102h-2.345v7.102zm0 11.725v-4.69h-2.345v4.69h2.345zm-2.345-9.38h2.345v-2.345h-2.345v2.345zm-4.69 11.792h4.69v-2.345h-4.69v2.345zm0-9.447h2.345v2.345h2.345v-4.69h-4.69v2.345zm-2.412 11.725h2.345v-2.345h-2.345v2.345zm2.412-4.69v-2.345h-2.345v2.345h2.345zm0-11.725h-4.69v2.345h4.69v-2.345zM20.1 178.618h2.345v-4.691H20.1v4.691zm0-7.036h2.345v-2.345H20.1v2.345zm2.345-4.757v-2.345H20.1v2.345h2.345zm-4.69 7.035H20.1v-2.345h-2.345v2.345zm2.345-7.035h-2.345v2.345H20.1v-2.345zm0-7.035h-2.345v4.69H20.1v-4.69zm-4.69 21.173h4.69v-2.345h-4.69v2.345zm0-11.793v2.345h2.345v-2.345H15.41zm2.345-4.69H15.41v2.345h2.345v-2.345zm-2.345 14.138v-2.345h-2.345v2.345h2.345zm0-11.793h-4.69v2.345h4.69v-2.345zm-2.345 9.448v-2.346H10.72v2.346h2.345zm-2.345-7.103H8.375v4.69h2.345v-4.69zm-4.69 14.138h2.345v-2.345H6.03v2.345zm-2.345 2.345H6.03v-2.345H3.685v2.345zm-2.413 2.345h2.346v-2.345H1.272v2.345z"
              />
              <path
                stroke="#C60E0E"
                strokeWidth="2"
                d="M1.273 237.548v4.5h41.063v-4.5M2.4 236.423h39.374M19.273 235.298v-3.937h6.188v3.937M4.648 243.173v20.25m2.25 0v2.813m1.125 1.125h28.125M39.525 243.173v20.25M37.272 263.423v2.812M10.273 245.985v14.625M13.085 260.61v2.813M40.18 94.077v8.036M4.822 90.863v12.321M15 83.362h16.07M12.858 113.363h18.214M0 85.505h7.5M0 109.077h7.5M38.036 91.398v2.678M38.036 102.113v2.678M35.893 104.791v2.679M35.893 88.72v2.678M33.75 107.469v2.679M33.75 86.041v2.679M31.607 110.148v2.678M31.607 83.362v2.68M14.463 83.362v2.68M12.32 86.041v2.679M12.32 109.612v2.679M10.176 88.184v2.679M10.176 107.469v2.679M8.036 86.041v2.679M8.036 105.327v2.678M19.822 102.649v2.678M29.465 91.398v2.678M21.964 105.327v2.678M24.108 102.113v8.571M2.679 88.184v2.679M2.679 103.184v2.678M1.071 85.505v2.679M1.071 105.862v2.679M20.362 48.181v25.454M20.362 124.634v25.454M20.362 192.634v28"
              />
            </svg>
          </i>
        </div>

        <div className="space-y-4 relative">
          <h3 className="text-3xl sm:text-5xl font-semibold">
            Trust the process. Not the
          </h3>
          <h3 className="absolute right-0 top-14 sm:top-16 text-3xl sm:text-5xl font-semibold vertical-text">
            processed.
          </h3>

          <Image
            width={180}
            height={361}
            src="https://product-assets.faasos.io/eatsure/production/promise_dsp.jpeg"
            alt=""
            className="w-[80%] -ms-4 sm:-ms-6"
          />

          <p className="text-balance">
            From our kitchen to your home, we ensure that your meal is safe,
            hygienic, and most of all, delicious. It gets triple-checked and
            double-sealed with a single minded focus on safety.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section1;