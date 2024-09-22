import pay from "../../../../../src/assets/userBenifit/pay.png";
import support from "../../../../../src/assets/userBenifit/support.png";
import secure from "../../../../../src/assets/userBenifit/secure.png";
import quality from "../../../../../src/assets/userBenifit/quality.png";

const data = [
  {
    icon: pay,
    tittle: "Lowest Delivery Charge",
    details:
      "We offer the lowest delivery charges for express shipping options, so you can get your products faster without breaking the bank.",
    color: "#ebd3c5",
  },
  {
    icon: support,
    tittle: "24/7 Support",
    details:
      "Our 24/7 customer support team is always ready to assist you with any queries, from order tracking to product recommendations.",
    color: "#eaeed6",
  },
  {
    icon: secure,
    tittle: "Secure Payments",
    details:
      "Shop with confidence! We provide secure payment options to ensure your transactions are safe and protected.",
    color: "#ffe47f",
  },
  {
    icon: quality,
    tittle: "Quality Guarantee",
    details:
      "We only stock top-quality keyboards from the most reliable brands. If you're not satisfied, returns are easy and hassle-free!",
    color: "#e9effc",
  },
];

const getCustomerBenifitDemoData=()=>{
    return data
}

export default getCustomerBenifitDemoData
