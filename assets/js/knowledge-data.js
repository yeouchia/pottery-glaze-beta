// assets/js/knowledge-data.js
// 陶藝與釉藥知識庫 - 分類樹狀結構

const knowledgeTree = [
    {
        category: "陶藝入門",
        icon: "fa-seedling",
        articles: [
            { id: "buy_clay", title: "陶土與瓷土怎麼選？新手買泥全指南", url: "./book/buy_clay.html" }
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
            { id: "glaze_nature", title: "何謂釉藥、釉的本質？", url: "./book/What is glaze.html" },
            { id: "glaze_elements", title: "認識釉藥三大元素", url: "./book/glaze_elements.html" },
            { id: "types_of_glazes", title: "釉的種類？", url: "./book/Types of glazes.html" }
        ]
    },
    {
        category: "窯燒知識",
        icon: "fa-fire-burner",
        articles: [
            { id: "bisque_glaze", title: "什麼是素燒與釉燒？", url: "./book/bisque_glaze.html" },
            { id: "kiln_atmosphere", title: "氧化與還原的魔術、窯爐氣氛控制", url: "./book/Oxidation.html" },
            { id: "kiln_curve", title: "燒窯溫度曲線設計", url: "./book/Kiln temperature curve design.html" }
        ]
    },
    {
        category: "配方實驗",
        icon: "fa-vial",
        articles: [
            { id: "triaxial_mystery", title: "釉藥的奧秘~三角座標", url: "./book/triaxial_mystery.html" }
        ]
    },
    {
        category: "陶釉講義 (黃老師編著)",
        icon: "fa-book-open-reader",
        articles: [
            { id: "ch1_history", title: "第一章 陶瓷的歷史和類型", url: "./book/ch1_history.html" },
            { id: "ch2_basics", title: "第二章 基礎釉藥知識", url: "./book/ch2_glaze_basics.html" },
            { id: "ch3_mixing", title: "第三章 釉藥調配基礎", url: "./book/ch3_glaze_mixing.html" },
            { id: "ch4_application", title: "第四章 釉藥施釉技術", url: "./book/ch4_glaze_application.html" },
            { id: "ch5_making", title: "第五章 陶瓷製作與燒製過程", url: "./book/ch5_pottery_making.html" },
            { id: "ch6_safety", title: "第六章 陶瓷工作安全與實踐環保", url: "./book/ch6_safety_env.html" },
            { id: "ch7_aesthetics", title: "第七章 陶瓷的美學和創作", url: "./book/ch7_aesthetics.html" }
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
