import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Contact from './Contact';
import { useLanguage } from '../context/LanguageContext';

// Images
import heroImg from '../assets/project6/6_1_1.jpg';
import img1 from '../assets/project6/1.jpg';
import panoramicImg from '../assets/project6/5_3.jpg';
import img7_2 from '../assets/project6/7_2.jpg';
import img11 from '../assets/project6/11.jpg';
import img10 from '../assets/project6/10.jpg';
import img8 from '../assets/project6/8.jpg';
import img9 from '../assets/project6/9.jpg';

const Project6: React.FC = () => {
    const { language } = useLanguage();

    const t6 = {
        zh: {
            subtitle: "零售与体验设计",
            heroTitle: "POKÉMON PLAY LAB",
            heroDesc: "连接数字图鉴与物理现实。专为新一代训练师打造的沉浸式零售游乐场。",
            meta: {
                role: ["空间设计", "3D 可视化"],
                tools: ["3ds Max", "Corona Renderer"],
                focus: ["品牌体验", "零售动线"],
                year: "2025"
            },
            concept: {
                title: "设计理念",
                p1: "捕捉实验室不仅仅是一家商店，它被定义为一个充满活力的社区中心。设计理念围绕‘能量流导’展开——通过贯穿天顶的动态霓虹线条，将访客从零售入口引导至核心游戏竞技场。",
                p2: "鲜艳的主打色彩、标志性的角色符号以及模块化家具，营造出一个既让资深玩家感到情怀、又让新晋训练师感到亲切的空间。"
            },
            spatial: {
                title: "空间连续性",
                desc: "布局采用开放式设计，确保零售区、社交策略区和游戏竞技场三大区域之间的视觉贯通。"
            },
            zone1: {
                tag: "01. 策略对战区",
                title: "社交互动",
                desc: "宝可梦体验的核心在于集换式卡牌游戏（TCG）。我们设计了带内置对战垫的定制游戏桌，周围环绕着极具氛围的角色灯光，激发策略对战的无限热情。",
                card1Title: "实战模拟环境",
                card1Desc: "人体工学座椅与主题美学完美契合。",
                card2Title: "收藏家之墙",
                card2Desc: "发光的稀有卡牌展示架，成为空间的视觉锚点。"
            },
            zone2: {
                tag: "02. 竞技场",
                title: "数字互动",
                desc: "MezaStar 竞技场区域色调转变。灯光转为清冷的电蓝色与紫色。柔软的模块化座椅（豆袋）为观众营造出休闲的聚会氛围，而街机设备则已准备就绪。",
                list: ["+ 声学减震地板", "+ 动态 RGB 灯光集成", "+ 模块化“休息室”配置"]
            },
            final: {
                title: "“去吧！就决定是你了”",
                desc: "一个庆祝游戏快乐的目的地。"
            }
        },
        en: {
            subtitle: "Retail & Experience Design",
            heroTitle: "POKÉMON PLAY LAB",
            heroDesc: "Bridging the gap between the digital Pokédex and physical reality. An immersive retail playground designed for the next generation of trainers.",
            meta: {
                role: ["Spatial Design", "3D Visualization"],
                tools: ["3ds Max", "Corona Renderer"],
                focus: ["Brand Experience", "Retail Flow"],
                year: "2025"
            },
            concept: {
                title: "The Concept",
                p1: "The Pokémon Play Lab is conceptualized not just as a store, but as a vibrant community hub. The design philosophy centers on \"Energy Flow\"—visualized through the dynamic neon ribbons that traverse the ceiling, guiding visitors from the retail entrance to the heart of the gaming arena.",
                p2: "Bright primary colors, iconic character motifs, and modular furniture create a space that feels both nostalgic for veterans and welcoming for new trainers."
            },
            spatial: {
                title: "Spatial Continuity",
                desc: "The layout is designed with an open-plan approach, allowing visibility across the distinct zones: Retail, Social Strategy, and Arcade."
            },
            zone1: {
                tag: "01. THE STRATEGY ZONE",
                title: "Social Interaction",
                desc: "At the core of the Pokémon experience is the Trading Card Game (TCG). We designed bespoke gaming tables featuring integrated playmats, surrounded by ambient character lighting to inspire strategic battles.",
                card1Title: "Battle Ready Environment",
                card1Desc: "Ergonomic seating meets thematic aesthetics.",
                card2Title: "The Collector's Wall",
                card2Desc: "Illuminated rare card display serving as a visual anchor."
            },
            zone2: {
                tag: "02. THE ARENA",
                title: "Digital Engagement",
                desc: "The MezaStar Stadium area shifts the tone. The lighting cools down to electric blues and purples. Soft modular seating (bean bags) creates a casual lounge vibe for spectators, while the arcade cabinets stand ready for action.",
                list: ["+ Acoustic damping flooring", "+ Dynamic RGB lighting integration", "+ Modular \"Lounge\" configuration"]
            },
            final: {
                title: "\"Catch 'em All\"",
                desc: "A destination that celebrates the joy of play."
            }
        }
    };

    const content = t6[language];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white dark:bg-[#0F0F0F] text-stone-900 dark:text-white font-sans overflow-x-hidden min-h-screen selection:bg-yellow-400 selection:text-black transition-colors duration-500">
            <Navbar />

            {/* Hero Section */}
            <header className="relative w-full h-screen flex flex-col justify-end pb-20 px-6 md:px-20 fade-in-up">
                <div className="absolute inset-0 z-0">
                    <img src={heroImg} alt="Pokemon Play Lab Hero" className="w-full h-full object-cover opacity-60 dark:opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0F0F0F] via-transparent to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-5xl">
                    <span className="text-yellow-600 dark:text-yellow-400 font-bold tracking-widest uppercase text-sm mb-4 block">{content.subtitle}</span>
                    <h1 className="text-5xl md:text-8xl font-grotesk font-bold leading-tight mb-6">
                        POKÉMON <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300 dark:from-yellow-400 dark:to-yellow-200">PLAY LAB</span>
                    </h1>
                    <p className="text-stone-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
                        {content.heroDesc}
                    </p>
                </div>
            </header>

            {/* Project Metadata */}
            <section className="border-t border-stone-200 dark:border-gray-800 py-12 px-6 md:px-20 grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 font-grotesk">
                <div>
                    <h3 className="text-stone-400 dark:text-gray-500 text-xs uppercase tracking-widest mb-2">{language === 'zh' ? '角色' : 'Role'}</h3>
                    <p className="font-medium">{content.meta.role[0]}<br />{content.meta.role[1]}</p>
                </div>
                <div>
                    <h3 className="text-stone-400 dark:text-gray-500 text-xs uppercase tracking-widest mb-2">{language === 'zh' ? '工具' : 'Tools'}</h3>
                    <p className="font-medium">{content.meta.tools[0]}<br />{content.meta.tools[1]}</p>
                </div>
                <div>
                    <h3 className="text-stone-400 dark:text-gray-500 text-xs uppercase tracking-widest mb-2">{language === 'zh' ? '重点' : 'Focus'}</h3>
                    <p className="font-medium">{content.meta.focus[0]}<br />{content.meta.focus[1]}</p>
                </div>
                <div>
                    <h3 className="text-stone-400 dark:text-gray-500 text-xs uppercase tracking-widest mb-2">{language === 'zh' ? '年份' : 'Year'}</h3>
                    <p className="font-medium">{content.meta.year}</p>
                </div>
            </section>

            {/* Concept Section */}
            <section className="px-6 md:px-20 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-5 space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold font-grotesk">{content.concept.title}</h2>
                        <div className="w-12 h-1 bg-yellow-500 dark:bg-yellow-400"></div>
                        <p className="text-stone-600 dark:text-gray-400 leading-loose">
                            {content.concept.p1}
                        </p>
                        <p className="text-stone-600 dark:text-gray-400 leading-loose">
                            {content.concept.p2}
                        </p>
                    </div>
                    <div className="md:col-span-7 image-container overflow-hidden rounded-lg group">
                        <img src={img1} alt="Central Hub Design" className="image-hover w-full h-auto shadow-2xl shadow-yellow-900/10 dark:shadow-yellow-900/20 transition-transform duration-500 group-hover:scale-105" />
                        <p className="mt-4 text-xs text-stone-400 dark:text-gray-600 font-mono text-right">FIG 01. CENTRAL MERCHANDISE HUB</p>
                    </div>
                </div>
            </section>

            {/* Panoramic View */}
            <section className="w-full mb-32 relative">
                <div className="px-6 md:px-20 mb-8">
                    <h2 className="text-3xl font-bold font-grotesk">{content.spatial.title}</h2>
                </div>
                <div className="w-full h-[60vh] overflow-hidden group">
                    <img src={panoramicImg} alt="Panoramic View of the Lab" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="px-6 md:px-20 mt-4 flex justify-between items-start">
                    <p className="text-xs text-stone-400 dark:text-gray-500 max-w-md">{content.spatial.desc}</p>
                </div>
            </section>

            {/* Zone Breakdown: Social Strategy */}
            <section className="px-6 md:px-20 mb-32">
                <div className="mb-16">
                    <span className="text-cyan-600 dark:text-cyan-400 font-mono text-sm mb-2 block">{content.zone1.tag}</span>
                    <h2 className="text-4xl font-bold mb-6 font-grotesk">{content.zone1.title}</h2>
                    <p className="text-stone-600 dark:text-gray-400 max-w-2xl text-lg">
                        {content.zone1.desc}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div className="overflow-hidden rounded-lg image-container group">
                            <img src={img7_2} alt="Gaming Tables" className="image-hover w-full h-auto transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <h4 className="text-lg font-bold font-grotesk">{content.zone1.card1Title}</h4>
                        <p className="text-sm text-stone-400 dark:text-gray-500">{content.zone1.card1Desc}</p>
                    </div>
                    <div className="space-y-4 mt-12 md:mt-24">
                        <div className="overflow-hidden rounded-lg image-container group">
                            <img src={img11} alt="Card Wall Display" className="image-hover w-full h-auto transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <h4 className="text-lg font-bold font-grotesk">{content.zone1.card2Title}</h4>
                        <p className="text-sm text-stone-400 dark:text-gray-500">{content.zone1.card2Desc}</p>
                    </div>
                </div>
            </section>

            {/* Zone Breakdown: Arcade */}
            <section className="bg-stone-50 dark:bg-[#151515] py-24 mb-20 transition-colors duration-500">
                <div className="px-6 md:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                        <div className="md:col-span-4 flex flex-col justify-center">
                            <span className="text-red-600 dark:text-red-500 font-mono text-sm mb-2 block">{content.zone2.tag}</span>
                            <h2 className="text-4xl font-bold mb-6 font-grotesk">{content.zone2.title}</h2>
                            <p className="text-stone-600 dark:text-gray-400 leading-relaxed mb-8">
                                {content.zone2.desc}
                            </p>
                            <ul className="space-y-4 text-stone-400 dark:text-gray-500 text-sm border-l border-stone-200 dark:border-gray-700 pl-6">
                                {content.zone2.list.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:col-span-8 grid grid-cols-1 gap-6">
                            <img src={img10} alt="Mezastar Machines" className="rounded-lg shadow-lg w-full" />
                            <img src={img8} alt="Gaming Lounge" className="rounded-lg shadow-lg w-full" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Visual */}
            <section className="px-6 md:px-20 mb-32 text-center">
                <div className="max-w-4xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-grotesk">{content.final.title}</h2>
                    <p className="text-stone-500 dark:text-gray-400">{content.final.desc}</p>
                </div>
                <div className="w-full overflow-hidden rounded-xl group">
                    <img src={img9} alt="Play Lab Interior Wide" className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
            </section>

            {/* Footer - Integrated Contact Component */}
            <Contact />

            <style dangerouslySetInnerHTML={{
                __html: `
                .fade-in-up {
                    animation: fadeInUp 0.8s ease-out forwards;
                    opacity: 0;
                    transform: translateY(20px);
                }
                @keyframes fadeInUp {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                ::-webkit-scrollbar {
                    width: 8px;
                }
                ::-webkit-scrollbar-track {
                    background: transparent; 
                }
                .dark ::-webkit-scrollbar-track {
                    background: #0F0F0F;
                }
                ::-webkit-scrollbar-thumb {
                    background: #ccc; 
                    border-radius: 4px;
                }
                .dark ::-webkit-scrollbar-thumb {
                    background: #333; 
                }
                ::-webkit-scrollbar-thumb:hover {
                    background: #F2C94C; 
                }
            `}} />
        </div>
    );
};

export default Project6;
