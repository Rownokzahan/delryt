import Image from "next/image";
import payment from "../../../public/images/secure-payment.png";

const FooterBottomSection = () => {
  return (
    <div className="bg-primary-dark py-8">
      <div className="ui-container flex flex-col lg:flex-row justify-between items-center gap-3">
        {/* Secure Payment with image */}
        <div className="flex items-center gap-1">
          <p>Secure Payment</p>
          <Image
            width={513}
            height={72}
            src={payment.src}
            alt="Payments"
            className="w-36 lg:w-40"
          />
        </div>

        {/* Copyright and Terms */}
        <p className="text-center sm:text-right">
          Copyright © {new Date().getFullYear()}. Delryt - All Rights Reserved .
          Terms of use Privacy
        </p>
      </div>
    </div>
  );
};

export default FooterBottomSection;
