export type HomePage = {
  _type: "homePage";
};

export type SearchPage = {
  _type: "searchPage";
};

export type Page = {
  _type: "page";
  slug: {
    current: string;
  };
};

export type Department = {
  _type: "department";
  slug: {
    current: string;
  };
  departmentId: string;
};
