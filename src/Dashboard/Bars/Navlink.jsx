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
    name: "Job requests",
    path: "/dashboard/job/jobrequests",
    icon: faReceipt,
    role: ["2001"],
  },

  {
    name: "Add categories",
    path: "/dashboard/addcategory",
    icon: faPlus,
    role: ["2001"],
  },

  {
    name: "Categories",
    path: "/dashboard/categories",
    icon: faReceipt,
    role: ["2001"],
  },

  {
    name: "Add subcategories",
    path: "/dashboard/addsubcategory",
    icon: faPlus,
    role: ["2001"],
  },

  {
    name: "Subcategories",
    path: "/dashboard/subcategories",
    icon: faReceipt,
    role: ["2001"],
  },

  {
    name: "Add course",
    path: "/dashboard/addcourse",
    icon: faPlus,
    role: ["2001"],
  },
  {
    name: "Courses",
    path: "/dashboard/courses",
    icon: faBook,
    role: ["2001"],
  },
];