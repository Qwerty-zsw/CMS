const xAxisData = [
  {
    name: "Jan",
    Sale: 99_346,
  },
  {
    name: "Feb",
    Sale: 53_000,
  },
  {
    name: "Mar",
    Sale: 80_456,
  },
  {
    name: "Apr",
    Sale: 73_345,
  },
  {
    name: "May",
    Sale: 97_456,
  },
  {
    name: "Jun",
    Sale: 49_975,
  },
  {
    name: "Jul",
    Sale: 66_789,
  },
  {
    name: "Agu",
    Sale: 75_534,
  },
  {
    name: "Sep",
    Sale: 90_456,
  },
  {
    name: "Oct",
    Sale: 145_457,
  },
  {
    name: "Nov",
    Sale: 89_045,
  },
  {
    name: "Dec",
    Sale: 48_070,
  },
];

const newMembers = [
  {
    id: 1,
    username: "Masoud Hajiloo",
    title: "Developer",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  },
  {
    id: 2,
    username: "Example Example",
    title: "Example",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  },
  {
    id: 3,
    username: "Random Random",
    title: "Random",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  },
  {
    id: 4,
    username: "Again Again",
    title: "Again",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  },
];

const transActions = [
  {
    id: 1,
    customer: "Masoud Hajiloo",
    date: "01 May 2023",
    amount: 164.99,
    status: "Approved",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  },
  {
    id: 2,
    customer: "Random Random",
    date: "26 Feb 2023",
    amount: 199.99,
    status: "Declined",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  },
  {
    id: 3,
    customer: "Again Again",
    date: "07 Jul 2023",
    amount: 96.99,
    status: "Pending",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  },
  {
    id: 4,
    customer: "Example Example",
    date: "18 Dec 2023",
    amount: 256.99,
    status: "Approved",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  },
];

const userRows = [
  {
    id: 1,
    username: "Masoud Hajiloo",
    avatar:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    status: "active",
    transaction: "$146.32",
    email: "example@gmail.com",
  },
  {
    id: 2,
    username: "Random Random",
    avatar:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    status: "non-active",
    transaction: "$84.99",
    email: "example@gmail.com",
  },
  {
    id: 3,
    username: "Again Again",
    avatar:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    status: "active",
    transaction: "$543.76",
    email: "example@gmail.com",
  },
  {
    id: 4,
    username: "Example Example",
    avatar:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    status: "non-active",
    transaction: "$745.45",
    email: "example@gmail.com",
  },
  {
    id: 5,
    username: "Zzz Zzz",
    avatar:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    status: "active",
    transaction: "$745.45",
    email: "example@gmail.com",
  },
  {
    id: 6,
    username: "Boy Boy",
    avatar:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    status: "non-active",
    transaction: "$234.69",
    email: "example@gmail.com",
  },
  
];

export { xAxisData, newMembers, transActions, userRows };
