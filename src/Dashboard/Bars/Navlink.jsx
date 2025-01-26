import {
  faPlus,
  faUsers,
  faBook,
  faPersonChalkboard,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";

export const Links = [

  {
    name: "Add user",
    path: "/dashboard/user/add",
    icon: faPlus,
    role: "2001",
  },
  {
    name: "Users",
    path: "users",
    icon: faUsers,
    role: "2001",
  },
  {
    name: "Add job",
    path: "/dashboard/job/add",
    icon: faPlus,
    role: ["2001"],
  },
  {
    name: "Jobs",
    path: "jobs",
    icon: faPersonChalkboard,
    role: ["2001"],
  },

  {
    name: "job requests",
    path: "/dashboard/job/jobrequests",
    icon: faReceipt,
    role: ["2001"],
  },

  {
    name: "Add category1",
    path: "/dashboard/addcategoery1",
    icon: faPlus,
    role: ["2001"],
  },

  {
    name: "Category1",
    path: "/dashboard/categoery1",
    icon: faReceipt,
    role: ["2001"],
  },

  {
    name: "Add course",
    path: "/dashboard/product/add",
    icon: faPlus,
    role: ["2001"],
  },
  {
    name: "Courses",
    path: "/dashboard/products",
    icon: faBook,
    role: ["2001"],
  },

];
