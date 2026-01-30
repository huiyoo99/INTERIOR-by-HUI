import { Project, ProjectCategory } from './types';
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import img4 from './assets/4.jpg';
import p5_1 from './assets/project5/p5_1.jpg';
import p5_2 from './assets/project5/p5_2.jpg';
import p5_3 from './assets/project5/p5_3.jpg';
import p5_4 from './assets/project5/p5_4.jpg';
import p5_5 from './assets/project5/p5_5.jpg';
import p5_6 from './assets/project5/p5_6.jpg';
import p5_7 from './assets/project5/p5_7.jpg';

export const PROJECTS: Project[] = [
  {
    id: 1,
    titleZh: "谧光宅邸",
    titleEn: "The Lumina Residence",
    category: [ProjectCategory.MINIMALIST, ProjectCategory.RESIDENTIAL],
    image: img1,
    descriptionZh: "重新定义现代洋房：一场关于体量与虚空的博弈。",
    descriptionEn: "Redefining the modern bungalow through volume and void. ",
    behanceUrl: "https://www.behance.net/gallery/242071501/THE-LUMINA-RESIDENCE"

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
    titleZh: "工业巅峰，轮毂旗舰",
    titleEn: "The Apex of Wheel Artistry",
    category: [ProjectCategory.COMMERCIAL],
    image: img3,
    descriptionZh: "融合原始水泥肌理与利落的线性灯光，将汽车配件打造为如艺术馆般的展示体验。",
    descriptionEn: "gallery-like showroom blending raw concrete textures with sleek linear lighting to highlight automotive craftsmanship.",
    behanceUrl: "https://www.behance.net/gallery/241900451/RIM-Flagship"
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
    titleZh: "住宅新境",
    titleEn: "Reimagining Home",
    category: [ProjectCategory.RESIDENTIAL],
    image: p5_1,
    descriptionZh: "在这个住宅项目中，我们探讨了空间、光影与生活方式的平衡。通过大面积的留白与精致的材质触感，营造出一个静谧而充满力量的居住空间。",
    descriptionEn: "In this residential project, we explore the balance of space, light, and lifestyle. Through expansive voids and refined textures, we create a serene yet powerful living environment.",
    behanceUrl: "project/5",
    gallery: [p5_1, p5_2, p5_3, p5_4, p5_5, p5_6, p5_7]
  },
];