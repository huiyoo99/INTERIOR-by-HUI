import { Project, ProjectCategory } from './types';
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import img4 from './assets/4.jpg';

export const PROJECTS: Project[] = [
  {
    id: 1,
    titleZh: "工业巅峰，轮毂旗舰",
    titleEn: "The Apex of Wheel Artistry",
    category: [ProjectCategory.COMMERCIAL],
    image: img1,
    descriptionZh: "融合原始水泥肌理与利落的线性灯光，将汽车配件打造为如艺术馆般的展示体验。",
    descriptionEn: "gallery-like showroom blending raw concrete textures with sleek linear lighting to highlight automotive craftsmanship.",
    behanceUrl: "https://www.behance.net/gallery/241900451/RIM-Flagship"
  },
  {
    id: 2,
    titleZh: "光影律动，驭见未来",
    titleEn: "Future Motion: Immersive Flagship",
    category: [ProjectCategory.COMMERCIAL],
    image: img2,
    descriptionZh: "流线型灯光与沉浸式展区交织，打破传统陈列束缚，为您开启极具未来感的改装美学之旅。",
    descriptionEn: "Where linear lighting meets immersive displays, breaking traditional retail boundaries to embark on a futuristic journey of modification aesthetics.",
    behanceUrl: "https://www.behance.net/gallery/241950939/RIM-Flagship-AT-MALAYSIA"
  },
  {
    id: 3,
    titleZh: "谧光宅邸",
    titleEn: "The Lumina Residence",
    category: [ProjectCategory.MINIMALIST, ProjectCategory.RESIDENTIAL],
    image: img3,
    descriptionZh: "重新定义现代洋房：一场关于体量与虚空的博弈。",
    descriptionEn: "Redefining the modern bungalow through volume and void. ",
    behanceUrl: "https://www.behance.net/gallery/242071501/THE-LUMINA-RESIDENCE"
  },
  {
    id: 4,
    titleZh: "现代南洋叙事",
    titleEn: "A Contemporary Nanyang Story",
    category: [ProjectCategory.COMMERCIAL],
    image: img4,
    descriptionZh: "在干练的工业建筑框架内，重塑马来西亚茶室的灵魂本质。",
    descriptionEn: "Reimagining the soulful essence of the Malaysian Kopitiam within a sleek, industrial architectural framework.",
    behanceUrl: "https://www.behance.net/gallery/241980847/NANYANG-KOPITIAM"
  },
  {
    id: 5,
    titleZh: "现代南洋叙事",
    titleEn: "A Contemporary Nanyang Story",
    category: [ProjectCategory.COMMERCIAL],
    image: img4,
    descriptionZh: "在干练的工业建筑框架内，重塑马来西亚茶室的灵魂本质。",
    descriptionEn: "Reimagining the soulful essence of the Malaysian Kopitiam within a sleek, industrial architectural framework.",
    behanceUrl: "https://www.behance.net/gallery/241980847/NANYANG-KOPITIAM"
  },
];