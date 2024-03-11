// Icon.tsx
import { Skeleton } from "@chakra-ui/react";
import { CSSProperties, Suspense, lazy } from "react";
import { FiFileText, FiMenu } from "react-icons/fi";
import {
  RiHome6Line,
  RiLogoutCircleRLine,
  RiMoonFill,
  RiSunLine,
  RiStarLine,
  RiChat2Line,
  RiRouteLine,
} from "react-icons/ri";
import { FaMoneyBillWave } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";

const Logo = lazy(() => import("./images/Logo"));

const icons = {
  Menu: FiMenu,
  Dashboard: RiHome6Line,
  Documents: FiFileText,
  Logout: RiLogoutCircleRLine,
  Moon: RiMoonFill,
  Sun: RiSunLine,
  Star: RiStarLine,
  Chats: RiChat2Line,
  Route: RiRouteLine,
  MoneyBill: FaMoneyBillWave,
  GraphUp: BsGraphUp,

  Logo,
};

export type IconNames = keyof typeof icons;

export type IconProps = {
  name: IconNames;
  className?: string;
  style?: CSSProperties;
};

export const Icon = ({ name, ...props }: IconProps) => {
  const IconComponent = icons[name];
  return (
    <Suspense fallback={<Skeleton {...props} />}>
      <IconComponent {...props} />
    </Suspense>
  );
};

export default Icon;
