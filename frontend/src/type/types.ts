export type TCategory =
  | "semua_kelas"
  | "pemasaran"
  | "desain"
  | "pengembangan_diri"
  | "bisnis"
  | null;

export type TfilteredCourses = {
  id: number;
  title: string;
  description: string;
  instructor: {
    name: string;
    position: string;
    avatar: string;
  };
  thumbnail: string;
  rating: number;
  totalReviews: number;
  price: number;
  category: TCategory;
}[];

export type user = {
  name: string;
  email: string;
  countryCode: "+62" | "+1" | "+44" | "+91" | "+81";
  phoneNumber: string;
  password: string;
};

export type userWithId = {
  id: string;
  name: string;
  email: string;
  countryCode: "+62" | "+1" | "+44" | "+91" | "+81";
  phoneNumber: string;
  password: string;
};

export type userWihtoutPassword = {
  name: string;
  email: string;
  countryCode: "+62" | "+1" | "+44" | "+91" | "+81";
  phoneNumber: string;
};
