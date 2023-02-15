type ImageSize = "small" | "medium" | "original" | "big";

interface IImage {
  height: number;
  width: number;
  uri: string;
}

export interface IProductPublicList {
  id: number;
  name: string;
  category: {
    id: number;
    name: string;
    slug: string;
  };
  images: Record<ImageSize, IImage>;
}

export const productsPublic: IProductPublicList[] = [
  {
    id: 1,
    name: "Выключатель ВКЭ-М-10",
    category: {
      id: 1,
      name: "МАСЛЯННЫЕ ВЫКЛЮЧАТЕЛИ",
      slug: "maslyannie_vikluchateli",
    },
    images: {
      small: {
        height: 48,
        width: 48,
        uri: "./src/assets/images/vikluchatel_vk_10.jpg",
      },
      medium: {
        height: 320,
        width: 252,
        uri: "./src/assets/images/vikluchatel_vk_10.jpg",
      },
      original: {
        height: 720,
        width: 360,
        uri: "./src/assets/images/vikluchatel_vk_10.jpg",
      },
      big: {
        height: 1280,
        width: 1280,
        uri: "./src/assets/images/vikluchatel_vk_10.jpg",
      },
    },
  },
  {
    id: 2,
    name: "Выключатель ВКЭ-М-10",
    category: {
      id: 1,
      name: "МАСЛЯННЫЕ ВЫКЛЮЧАТЕЛИ",
      slug: "maslyannie_vikluchateli",
    },
    images: {
      small: {
        height: 48,
        width: 48,
        uri: "./src/assets/images/vikluchatel_vk_10.jpg",
      },
      medium: {
        height: 320,
        width: 252,
        uri: "./src/assets/images/vikluchatel_vk_10.jpg",
      },
      original: {
        height: 720,
        width: 360,
        uri: "./src/assets/images/vikluchatel_vk_10.jpg",
      },
      big: {
        height: 1280,
        width: 1280,
        uri: "./src/assets/images/vikluchatel_vk_10.jpg",
      },
    },
  },
  {
    id: 3,
    name: "Выключатель ВКЭ-М-10",
    category: {
      id: 1,
      name: "МАСЛЯННЫЕ ВЫКЛЮЧАТЕЛИ",
      slug: "maslyannie_vikluchateli",
    },
    images: {
      small: {
        height: 48,
        width: 48,
        uri: "./src/assets/images/vikluchatel_vk_10.jpg",
      },
      medium: {
        height: 320,
        width: 252,
        uri: "./src/assets/images/vikluchatel_vk_10.jpg",
      },
      original: {
        height: 720,
        width: 360,
        uri: "./src/assets/images/vikluchatel_vk_10.jpg",
      },
      big: {
        height: 1280,
        width: 1280,
        uri: "./src/assets/images/vikluchatel_vk_10.jpg",
      },
    },
  },
  {
    id: 4,
    name: "Выключатель ВКЭ-М-10",
    category: {
      id: 1,
      name: "МАСЛЯННЫЕ ВЫКЛЮЧАТЕЛИ",
      slug: "maslyannie_vikluchateli",
    },
    images: {
      small: {
        height: 48,
        width: 48,
        uri: "./src/assets/images/vikluchatel_vk_10.jpg",
      },
      medium: {
        height: 320,
        width: 252,
        uri: "./src/assets/images/vikluchatel_vk_10.jpg",
      },
      original: {
        height: 720,
        width: 360,
        uri: "./src/assets/images/vikluchatel_vk_10.jpg",
      },
      big: {
        height: 1280,
        width: 1280,
        uri: "./src/assets/images/vikluchatel_vk_10.jpg",
      },
    },
  },
  {
    id: 5,
    name: "Выключатель ВКЭ-М-10",
    category: {
      id: 1,
      name: "МАСЛЯННЫЕ ВЫКЛЮЧАТЕЛИ",
      slug: "maslyannie_vikluchateli",
    },
    images: {
      small: {
        height: 48,
        width: 48,
        uri: "./src/assets/images/vikluchatel_vk_10.jpg",
      },
      medium: {
        height: 320,
        width: 252,
        uri: "./src/assets/images/vikluchatel_vk_10.jpg",
      },
      original: {
        height: 720,
        width: 360,
        uri: "./src/assets/images/vikluchatel_vk_10.jpg",
      },
      big: {
        height: 1280,
        width: 1280,
        uri: "./src/assets/images/vikluchatel_vk_10.jpg",
      },
    },
  },
  {
    id: 6,
    name: "Выключатель ВКЭ-М-10",
    category: {
      id: 1,
      name: "МАСЛЯННЫЕ ВЫКЛЮЧАТЕЛИ",
      slug: "maslyannie_vikluchateli",
    },
    images: {
      small: {
        height: 48,
        width: 48,
        uri: "./src/assets/images/vikluchatel_vk_10.jpg",
      },
      medium: {
        height: 320,
        width: 252,
        uri: "./src/assets/images/vikluchatel_vk_10.jpg",
      },
      original: {
        height: 720,
        width: 360,
        uri: "./src/assets/images/vikluchatel_vk_10.jpg",
      },
      big: {
        height: 1280,
        width: 1280,
        uri: "./src/assets/images/vikluchatel_vk_10.jpg",
      },
    },
  },
];

export interface IProductFull {
  id: number;
  name: string;
  category: {
    id: number;
    name: number;
    slug: string;
  };
  images: {
    size: {
      height: number;
      width: number;
      uri: string;
    };
  };
  description: string;
  attributes: IAttribute[];
  seo?: {
    keywords?: string;
    description?: string;
  };
}

export interface IAttribute {
  id: number;
  name: string;
  value_type: string | boolean;
  value: (string | number | boolean)[];
}

export interface ICategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  seo?: {
    keywords?: string;
    description?: string;
  };
}

export const categories: ICategory[] = [
  {
    id: 1,
    name: "Трансформаторы",
    slug: "transformatory",
    description:
      "vhdklsajckjsadljsal as dsaidioiajdio aspod asoijd sajiodsaoihsauihsadhuisad",
  },
  {
    id: 2,
    name: "Не Трансформаторы",
    slug: "ne_transformatory",
    description:
      "vhdklsajckjsadljsal as dsaidioiajdio aspod asoijd sajiodsaoihsauihsadhuisad",
  },
  {
    id: 3,
    name: "Транзисторы",
    slug: "transistory",
    description:
      "vhdklsajckjsadljsal as dsaidioiajdio aspod asoijd sajiodsaoihsauihsadhuisad",
  },
  {
    id: 4,
    name: "Не Транзисторы",
    slug: "ne_transistory",
    description: "qwdqdwqdqw",
  },
  {
    id: 5,
    name: "Электросчетчики",
    slug: "electroschetchiki",
    description: "dsasdadsadsa",
  },
  {
    id: 6,
    name: "Электросчетчики",
    slug: "electroschetchiki",
    description: "dsasdadsadsa",
  },
];
