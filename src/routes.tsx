import { Icon } from "@chakra-ui/react";
import { MdBarChart, MdPerson, MdHome, MdLock, MdBook } from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import RTL from "views/admin/rtl";
import UserPage from "views/admin/user";
import { UserForm } from "views/admin/user/userForm";

// Auth Imports
import SignInCentered from "views/auth/signIn";
import SubjectPage from "views/admin/subjects";
import StudentPage from './views/admin/student/index';
import TeacherPage from './views/admin/teacher/index';

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  // {
  //   name: "NFT Marketplace",
  //   layout: "/admin",
  //   path: "/nft-marketplace",
  //   icon: (
  //     <Icon
  //       as={MdOutlineShoppingCart}
  //       width="20px"
  //       height="20px"
  //       color="inherit"
  //     />
  //   ),
  //   component: NFTMarketplace,
  //   secondary: true,
  // },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: "/data-tables",
    component: DataTables,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: Profile,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: SignInCentered,
  },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "/rtl-default",
  //   icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  //   component: RTL,
  // },
  {
    name: "Quản lý tài khoản",
    layout: "/admin",
    path: "/user",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: UserPage,
  },
];

export const adminRoutes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: "/data-tables",
    component: DataTables,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: Profile,
  },
  // {
  //   name: "Quản lý tài khoản",
  //   layout: "/admin",
  //   path: "/user",
  //   icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  //   component: UserPage,
  // },
  {
    name: "Quản lý học sinh",
    layout: "/admin",
    path: "/student",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: StudentPage,
  },
  {
    name: "Quản lý giáo viên",
    layout: "/admin",
    path: "/teacher",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: TeacherPage,
  },
  {
    name: "Quản lý môn học",
    layout: "/admin",
    path: "/subject",
    icon: <Icon as={MdBook} width="20px" height="20px" color="inherit" />,
    component: SubjectPage,
  },
];

export const authRoutes = [
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: SignInCentered,
  },
];
