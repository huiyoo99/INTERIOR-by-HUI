import { Project, ProjectCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    titleZh: "云端公寓",
    titleEn: "Cloud Apartment",
    category: ProjectCategory.RESIDENTIAL,
    image: "https://picsum.photos/id/10/800/600",
    descriptionZh: "位于市中心的现代简约公寓，强调自然光线的运用。",
    descriptionEn: "Modern minimalist apartment in the city center, emphasizing natural light.",
    behanceUrl: "https://www.behance.net/"
  },
  {
    id: 2,
    titleZh: "静谧茶室",
    titleEn: "Serenity Tea House",
    category: ProjectCategory.COMMERCIAL,
    image: "https://picsum.photos/id/24/800/800",
    descriptionZh: "融合传统与现代元素的商业茶室设计，营造禅意空间。",
    descriptionEn: "Commercial tea house design fusing traditional and modern elements to create a Zen space.",
    behanceUrl: "https://www.behance.net/"
  },
  {
    id: 3,
    titleZh: "北欧极简别墅",
    titleEn: "Nordic Villa",
    category: ProjectCategory.MINIMALIST,
    image: "https://picsum.photos/id/42/800/600",
    descriptionZh: "纯白与原木色调的完美结合，打造温馨的家庭氛围。",
    descriptionEn: "Perfect combination of pure white and wood tones, creating a warm family atmosphere.",
    behanceUrl: "https://www.behance.net/"
  },
  {
    id: 4,
    titleZh: "老洋房新生",
    titleEn: "Heritage Reborn",
    category: ProjectCategory.RENOVATION,
    image: "https://picsum.photos/id/56/800/600",
    descriptionZh: "保留历史痕迹的同时注入现代生活机能的改造项目。",
    descriptionEn: "Renovation project injecting modern living functions while preserving historical traces.",
    behanceUrl: "https://www.behance.net/"
  },
  {
    id: 5,
    titleZh: "科技创业办公室",
    titleEn: "Tech Start-up Office",
    category: ProjectCategory.COMMERCIAL,
    image: "https://picsum.photos/id/60/800/500",
    descriptionZh: "开放式办公环境，促进协作与创新的空间布局。",
    descriptionEn: "Open office environment promoting collaboration and innovation.",
    behanceUrl: "https://www.behance.net/"
  },
  {
    id: 6,
    titleZh: "海滨度假屋",
    titleEn: "Seaside Retreat",
    category: ProjectCategory.RESIDENTIAL,
    image: "https://picsum.photos/id/20/800/700",
    descriptionZh: "将海景引入室内的全景落地窗设计。",
    descriptionEn: "Panoramic floor-to-ceiling window design bringing the seascape indoors.",
    behanceUrl: "https://www.behance.net/"
  }
];