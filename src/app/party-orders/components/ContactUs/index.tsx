import ContactUsForm from "@/forms/ContactUsForm";

const ContactUs = () => {
  return (
    <section className="py-8 md:py-16 bg-linear-to-b from-primary/10 overflow-hidden">
      <div className="ui-container grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-12 relative">
        <div className="relative grid place-items-center">
          <div className="h-max lg:w-64 text-center lg:text-left space-y-4">
            <h4 className="text-3xl font-medium">Get in touch</h4>
            <p>Fill this form or write to us on celebrations@rebelfoods.com</p>
            <p className="text-black">
              We will get back to you in less than 6 hours
            </p>
          </div>

          {/* Decorative background pattern */}
          <span
            className="hidden m-10 lg:block absolute -z-10 inset-0 bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://product-assets.faasos.io/smoor/production/pattern.png')",
            }}
          />
        </div>

        {/* Contact form container */}
        <div
          id="contact-us"
          className="lg:max-w-md py-6 px-5 sm:py-8 sm:px-9 border-2 border-primary rounded-2xl bg-uiWhite relative"
        >
          <h3 className="mb-4 text-xl font-medium text-pretty">
            Help us delight you by filling this.
          </h3>
          {/* Contact form */}
          <ContactUsForm />

          {/* Decorative images */}
          <span
            className="absolute -z-10 block size-48 bg-contain bg-no-repeat bottom-0 -left-32"
            style={{
              backgroundImage:
                "url('https://product-assets.faasos.io/eatsure/production/sideImage1.png')",
            }}
          />
          <span
            className="absolute -z-10 block size-48 bg-contain bg-no-repeat top-1/2 -translate-y-1/2 -right-32"
            style={{
              backgroundImage:
                "url('https://product-assets.faasos.io/eatsure/production/sideImage2.png')",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
