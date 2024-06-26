import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { TbShirt } from "react-icons/tb";
import { BsBoxSeam, BsCreditCard } from "react-icons/bs";
import { RiCoupon2Line } from "react-icons/ri";

export const MenuTopList = [
  {
    title: "Home",
    links: "/",
    icon: <HomeOutlinedIcon />,
  },
  {
    tittle: "Product",
    links: "/Product",
    icon: <TbShirt />,
  },
  {
    tittle: "Order",
    links: "/Order",
    icon: <BsBoxSeam />,
  },
  {
    tittle: "Couponds",
    links: "/Coupon",
    icon: <RiCoupon2Line />,
  },
  {
    tittle: "Payment",
    links: "/Payment",
    icon: <BsCreditCard />,
  },
];
