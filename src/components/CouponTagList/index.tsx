import { Coupon } from "@/types";
import CouponTagListDesktop from "./CouponTagListDesktop";
import CouponTagListMobile from "./CouponTagListMobile";

const coupons: Coupon[] = [
  {
    id: 7155948,
    code: "PARTY",
    description: "Get FLAT 25% off",
  },
  {
    id: 7987325,
    code: "STEALDEAL",
    description: "Get upto 30% off",
  },
  {
    id: 8003717,
    code: "WELCOME",
    description: "Get upto 60% off",
  },
  {
    id: 8022222,
    code: "SMALLBITE",
    description: "Get FLAT ₹50 off",
  },
  {
    id: 8070456,
    code: "FREEPANEERTIKKAWRAP",
    description: "Masala Paneer Tikka Wrap for just FREE <s>189</s>",
  },
  {
    id: 8070457,
    code: "FREERAJMACHAPATI",
    description: "Rajma & Chapati Lunchbox for just FREE <s>199</s>",
  },
  {
    id: 8070572,
    code: "FOODIE",
    description: "Get upto 28% off",
  },
  {
    id: 8071646,
    code: "FLAT150",
    description: "Get FLAT ₹150 off",
  },
  {
    id: 8071739,
    code: "ES90",
    description: "Get FLAT ₹90 off",
  },
  {
    id: 8071742,
    code: "BIGSAVE",
    description: "Get upto 30% off",
  },
  {
    id: 8079780,
    code: "ES50",
    description: "Get upto 50% off",
  },
];

const CouponTagList = () => {
  if (coupons.length === 0) return null;

  return (
    <>
      <div className="md:hidden">
        <CouponTagListMobile coupons={coupons} />
      </div>

      <div className="hidden md:block">
        <CouponTagListDesktop coupons={coupons} />
      </div>
    </>
  );
};

export default CouponTagList;
