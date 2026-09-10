// assets/js/knowledge-data.js
// 陶藝與釉藥知識庫 - 分類樹狀結構 (終極升級版 - 支援深度錨點)

const knowledgeTree = [
    {
        category: "陶藝入門",
        icon: "fa-seedling",
        articles: [
            { id: "intro-1", title: "陶土與瓷土怎麼選？新手買泥全指南", tag: "陶土與材料", url: "./book/intro/intro-1.html" },
            { id: "intro-2", title: "陶藝是什麼？探索陶的起源與特性", tag: "陶土與材料", url: "./book/intro/intro-2.html" },
            { id: "intro-3", title: "陶藝是什麼？", tag: "認識陶藝", url: "./book/intro/intro-3.html" },
            { id: "intro-4", title: "陶瓷是什麼？", tag: "認識陶藝", url: "./book/intro/intro-4.html" },
            { id: "intro-5", title: "陶藝與陶瓷有什麼不同？", tag: "認識陶藝", url: "./book/intro/inrto-5.html" }
        ]
    },
    {
        category: "成型技法",
        icon: "fa-hands-holding",
        articles: [
            { id: "centering", title: "教你快速手拉坯定中心", url: "./book/centering.html" }
        ]
    },
    {
        category: "實用技巧",
        icon: "fa-lightbulb",
        articles: [
            { id: "dry_crack", title: "為什麼作品乾了總會裂開？", url: "./book/dry_crack.html" },
            { id: "recycle_clay", title: "乾掉的土千萬別丟！教你如何練土", url: "./book/recycle_clay.html" }
        ]
    },
    {
        category: "釉藥基礎",
        icon: "fa-flask",
        articles: [
            { id: "glaze_basics-1", title: "何謂釉藥、釉的本質？", tag: "認識釉藥", url: "./book/glaze_basics/glaze_basics-1.html" },
            { id: "glaze_basics-2", title: "認識釉藥三大元素", tag: "認識釉藥", url: "./book/glaze_basics/glaze_basics-2.html" },
            { id: "glaze_basics-3", title: "釉的種類？", tag: "認識釉藥", url: "./book/glaze_basics/glaze_basics-3.html" },
            { id: "glaze_basics-4", title: "玻璃質如何結合在陶瓷？揭開釉藥燒熔的奧秘？", tag: "認識釉藥", url: "./book/glaze_basics/glaze_basics-4.html" },
            { id: "glaze_basics-5", title: "上釉有那些方式？", tag: "認識釉藥", url: "./book/glaze_basics/glaze_basics-5.html" },
            { id: "glaze_basics-6", title: "何謂釉上彩與釉下彩？", tag: "認識釉藥", url: "./book/glaze_basics/glaze_basics-6.html" },
            { id: "glaze_basics-7", title: "金屬氧化物的發色：各種不同的金屬氧化物呈色", tag: "認識釉藥", url: "./book/glaze_basics/glaze_basics-7.html" }
        ]
    },
    {
        category: "窯燒知識",
        icon: "fa-fire-burner",
        articles: [
            { id: "firing-1", title: "燒窯溫度曲線設計", url: "./book/firing/firing-1.html" },
            { id: "firing-2", title: "什麼是素燒與釉燒？", url: "./book/firing/firing-2.html" },
            { id: "firing-3", title: "燒成技術~氧化燒", url: "./book/firing/firing-3.html" },
            { id: "firing-4", title: "燒成技術~還原燒", tag: "窯燒知識",url: "./book/firing/firing-4.html" }
        ]
    },
    {
        category: "配方實驗",
        icon: "fa-vial",
        articles: [
            { id: "experiments-1", title: "釉藥的奧秘~三角座標", url: "./book/experiments/experiments-1.html" }
        ]
    },
    {
        category: "陶釉講義 (黃老師編著)",
        icon: "fa-book-open-reader",
        articles: [
            { 
                id: "ch1_history", 
                title: "第一章 陶瓷的歷史和類型", 
                url: "./book/lecture/ch1_history.html",
                subTopics: [
                    { id: "ch1-1", title: "第一節 中國和世界陶瓷的歷史簡介" },
                    { id: "ch1-2", title: "第二節 各種陶瓷類型的探討" },
                    { id: "ch1-3", title: "第三節 陶瓷作品的時期和風格辨識" },
                    { id: "ch1-4", title: "第四節 不同文化中的陶瓷藝術" },
                    { id: "ch1-5", title: "第五節 陶瓷在不同時代和地區的重要性" }
                ]
            },
            { 
                id: "ch2_basics", 
                title: "第二章 基礎釉藥知識", 
                url: "./book/lecture/ch2_glaze_basics.html",
                subTopics: [
                    { id: "ch2-1", title: "第一節 釉藥的定義和功能" },
                    { id: "ch2-2", title: "第二節 陶瓷釉藥的常用原料" },
                    { id: "ch2-3", title: "第三節 釉藥的基本組成三大元素" },
                    { id: "ch2-4", title: "第四節 釉藥對作品的影響" },
                    { id: "ch2-5", title: "第五節 各種類型的釉藝方式" }
                ]
            },
            { 
                id: "ch3_mixing", 
                title: "第三章 釉藥調配基礎", 
                url: "./book/lecture/ch3_glaze_mixing.html",
                subTopics: [
                    { id: "ch3-1", title: "第一節 釉藥配方的基本結構瞭解" },
                    { id: "ch3-2", title: "第二節 重要材料的掌握" },
                    { id: "ch3-3", title: "第三節 三角座標法的運用" },
                    { id: "ch3-4", title: "第四節 賽格爾的計算運用" },
                    { id: "ch3-5", title: "第五節 三角座標法與賽格爾式" }
                ]
            },
            { 
                id: "ch4_application", 
                title: "第四章 釉藥施釉技術", 
                url: "./book/lecture/ch4_glaze_application.html",
                subTopics: [
                    { id: "ch4-1", title: "第一節 釉藥施釉方法的介紹" },
                    { id: "ch4-2", title: "第二節 釉藥彩繪方式的多樣性" },
                    { id: "ch4-3", title: "第三節 實際操作" }
                ]
            },
            { 
                id: "ch5_making", 
                title: "第五章 陶瓷製作與燒製過程", 
                url: "./book/lecture/ch5_pottery_making.html",
                subTopics: [
                    { id: "ch5-1", title: "第一節 陶瓷製作工具與設備" },
                    { id: "ch5-2", title: "第二節 陶瓷成形方式與技法" },
                    { id: "ch5-3", title: "第三節 釉料施加與彩繪裝飾" },
                    { id: "ch5-4", title: "第四節 乾燥與燒制" },
                    { id: "ch5-5", title: "第五節 出窯檢視與回顧" }
                ]
            },
            { 
                id: "ch6_safety", 
                title: "第六章 陶瓷工作安全與實踐環保", 
                url: "./book/lecture/ch6_safety_env.html",
                subTopics: [
                    { id: "ch6-1", title: "第一節 陶瓷作業的安全性" },
                    { id: "ch6-2", title: "第二節 可重複性原料再利用" },
                    { id: "ch6-3", title: "第三節 廢棄物處理和環境友好" }
                ]
            },
            { 
                id: "ch7_aesthetics", 
                title: "第七章 陶瓷的美學和創作", 
                url: "./book/lecture/ch7_aesthetics.html",
                subTopics: [
                    { id: "ch7-1", title: "第一節 鼓勵創意發揮" },
                    { id: "ch7-2", title: "第二節 展示和推廣陶瓷作品的討論" }
                ]
            }
        ]
    }
];

function findArticleById(articleId) {
    for (const group of knowledgeTree) {
        const found = group.articles.find(art => art.id === articleId);
        if (found) {
            return { ...found, category: group.category };
        }
    }
    return null;
}
