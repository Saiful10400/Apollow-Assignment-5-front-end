import keyboard1 from "../../../assets/Hero/kb1.webp";
import keyboard2 from "../../../assets/Hero/kb2.webp";
import keyboard3 from "../../../assets/Hero/kb3.webp";
import keyboard4 from "../../../assets/Hero/kb4.webp";
import keyboard5 from "../../../assets/Hero/kb5.webp";
import keyboard6 from "../../../assets/Hero/kb6.webp";

import brand1 from "../../../assets/Hero/BrandLogo/brand1.webp"
import brand2 from "../../../assets/Hero/BrandLogo/brand1.webp"
import brand3 from "../../../assets/Hero/BrandLogo/brand3.webp"
import brand4 from "../../../assets/Hero/BrandLogo/brand4.webp"
import brand5 from "../../../assets/Hero/BrandLogo/brand5.webp"
import brand6 from "../../../assets/Hero/BrandLogo/brand6.webp"

type Tdata = {
  name: string;
  photo: string;
  status: string;
  brand:string
}[];

const KeyboardDAta: Tdata = [
  {
    name: "Discord TKL Keyboard",
    photo: keyboard1,
    status: "On Sale!",
    brand:brand1
  },
  {
    name: "Hot Docs V-2",
    photo: keyboard2,
    status: "Hot Deal!",
    brand:brand2
  },
  {
    name: "Hot Docs V-2",
    photo: keyboard3,
    status: "Hot Deal!",
    brand:brand3
  },
  {
    name: "Hot Docs V-2",
    photo: keyboard4,
    status: "Hot Deal!",
    brand:brand4
  },
  {
    name: "Hot Docs V-2",
    photo: keyboard5,
    status: "Hot Deal!",
    brand:brand5
  },
  {
    name: "Hot Docs V-2",
    photo: keyboard6,
    status: "Hot Deal!",
    brand:brand6
  },
];

const getKeyboardData = () => {
  return KeyboardDAta;
};

export default getKeyboardData;
