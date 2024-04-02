import { FakerHelper } from "../main.js";

const Users = {};

const Events = {
  id: 1,
  thumbnail: "thumbnail",
  title: "product",
  summary: "sentence",
  date: "dateShort",
  time: "timeShort",
  venue: "address",
  user: {
    id: "uuid",
    avatar: "avatar",
    surname: "surname",
    other_names: "otherNames",
  },
  attendance: {
    total: "reviews",
    male: 0,
    female: 0,
  },
  created_at: "date",
};

const Attendance = {
  id: 1,
  avatar: "avatar",
  name: "otherNames",
  sex: "sex",
  email: "email",
  status: "booleanInt",
  created_at: "date",
};

export default Attendance;
