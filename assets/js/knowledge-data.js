// assets/js/knowledge-data.js
// 陶藝與釉藥知識庫 - 分類樹狀結構 (扁平化資料夾 + Tag 標籤系統)

const knowledgeTree = [
    {
        category: "陶藝入門",
        icon: "fa-seedling",
       articles: [
            { id: "buy_clay", title: "陶土與瓷土怎麼選？新手買泥全指南", tag: "陶土與材料", url: "./book/intro/buy_clay.html" },
            { id: "what_is_pottery", title: "陶藝是什麼？", tag: "認識陶藝", url: "./book/intro/what_is_pottery.html" },
            { id: "what_is_ceramics", title: "陶瓷是什麼？", tag: "認識陶藝", url: "./book/intro/what_is_ceramics.html" },
            { id: "what_is_the_difference_between_pottery_and_ceramics", title: "陶藝與陶瓷有什麼不同？", tag: "認識陶藝", url: "./book/intro/what_is_the_difference_between_pottery_and_ceramics.html" }
        ]
    },
    {
        category: "成型技法",
        icon: "fa-hands-holding",
        articles: [
            // 目前此資料夾為空，未來新增文章可放在這裡
        ]
    },
    {
        category: "實用技巧",
        icon: "fa-lightbulb",
        articles: [
            { id: "dry_crack", title: "為什麼作品乾了總會裂開？", tag: "乾燥技巧", url: "./book/skills/dry_crack.html" }
        ]
    },
    {
        category: "釉藥基礎",
        icon: "fa-flask",
        articles: [
            { id: "what_is_glaze", title: "何謂釉藥、釉的本質？", tag: "認識釉藥", url: "./book/glaze_basics/what_is_glaze.html" },
            { id: "glaze_elements", title: "認識釉藥三大元素", tag: "釉藥組成", url: "./book/glaze_basics/glaze_elements.html" },
            { id: "types_of_glazes", title: "釉的種類？", tag: "釉藥種類", url: "./book/glaze_basics/types_of_glazes.html" },
            { id: "glass_bonded", title: "玻璃與陶瓷的鍵結", tag: "釉藥特性", url: "./book/glaze_basics/Glass_bonded_ceramics.html" },
            { id: "glazing_type", title: "施釉技法種類", tag: "上釉方法", url: "./book/glaze_basics/Glazing_type.html" },
            { id: "overglaze_underglaze", title: "釉上彩與釉下彩", tag: "色釉基礎", url: "./book/glaze_basics/Overglaze_and_underglaze.html" },
            { id: "reduction_firing_glaze", title: "還原燒的影響", tag: "釉藥特性", url: "./book/glaze_basics/Reduction_firing.html" },
            { id: "color_of_oxides", title: "金屬氧化物的發色", tag: "色釉基礎", url: "./book/glaze_basics/The_color_of_oxides.html" }
        ]
    },
    {
        category: "窯燒知識",
        icon: "fa-fire-burner",
        articles: [
            { id: "bisque_glaze", title: "什麼是素燒與釉燒？", tag: "燒成基礎", url: "./book/firing/bisque_glaze.html" },
            { id: "oxidation", title: "氧化與還原的魔術、窯爐氣氛控制", tag: "燒成氣氛", url: "./book/firing/Oxidation.html" },
            { id: "kiln_curve", title: "燒窯溫度曲線設計", tag: "燒成曲線", url: "./book/firing/kiln_curve.html" }
        ]
    },
    {
        category: "配方實驗",
        icon: "fa-vial",
        articles: [
            { id: "triaxial_mystery", title: "釉藥的奧秘~三角座標", tag: "配方分析", url: "./book/experiments/triaxial_mystery.html" }
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
                    { id: "ch6-3", title: "第三節 廢棄物處理和環境友好" },
                    { id: "ch6-4", title: "第四節 創新的環保技術和研究" }
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
