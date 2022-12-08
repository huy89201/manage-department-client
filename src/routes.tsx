import { Icon } from "@chakra-ui/react";
import { MdBarChart, MdPerson, MdHome, MdLock, MdBook } from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import RTL from "views/admin/rtl";

// Auth Imports
import SignInCentered from "views/auth/signIn";
import SubjectPage from "views/admin/subjects";
import StudentPage from "./views/admin/student/index";
import TeacherPage from "./views/admin/teacher/index";
import ClassroomPage from "views/admin/classrooms";
import DetailClassroom from "views/admin/DetailClassroom";

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
  {
    name: "Quản lý lớp học",
    layout: "/admin",
    path: "/classroom",
    icon: <Icon as={MdBook} width="20px" height="20px" color="inherit" />,
    component: ClassroomPage,
  },
  {
    name: "Chi tiết lớp học",
    layout: "/admin",
    path: "/detail-classroom-id=:id",
    icon: <Icon as={MdBook} width="20px" height="20px" color="inherit" />,
    component: DetailClassroom,
  },
];

export const sidebarRoutes = [
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
  {
    name: "Quản lý lớp học",
    layout: "/admin",
    path: "/classroom",
    icon: <Icon as={MdBook} width="20px" height="20px" color="inherit" />,
    component: ClassroomPage,
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
