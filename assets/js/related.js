// assets/js/related.js
// 陶藝與釉藥知識庫 - 自動化相關文章派發引擎 (含自動排版與頂部品牌橫幅自動路徑注入)

document.addEventListener("DOMContentLoaded", function() {
    // 0. 自動注入相關文章與頂部橫幅的樣式表
    if (!document.getElementById('dynamic-related-style')) {
        const styleEl = document.createElement('style');
        styleEl.id = 'dynamic-related-style';
        styleEl.innerHTML = `
            /* 頂部品牌導流橫幅樣式 */
            .top-brand-banner {
                background: linear-gradient(135deg, #14213d 0%, #1f365c 100%);
                color: white;
                padding: 12px 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                box-shadow: 0 2px 8px rgba(0,0,0,0.15);
                font-family: 'Microsoft JhengHei', sans-serif;
                margin-bottom: 25px;
                border-radius: 6px;
            }
            .top-brand-banner .brand-link {
                font-size: 0.95rem;
                font-weight: 700;
                letter-spacing: 0.5px;
                display: flex;
                align-items: center;
                gap: 8px;
                color: #e5e5e5;
                text-decoration: none;
            }
            .top-brand-banner .brand-link span {
                color: #fca311;
            }
            .top-brand-banner .home-btn {
                background-color: #fca311;
                color: #14213d;
                padding: 6px 14px;
                border-radius: 4px;
                font-size: 0.85rem;
                font-weight: 800;
                text-decoration: none;
                transition: all 0.2s ease;
                white-space: nowrap;
            }
            .top-brand-banner .home-btn:hover {
                background-color: #ffffff;
                transform: translateY(-1px);
            }

            /* 底部相關文章清單樣式 */
            .related {
                margin-top: 30px;
                padding: 20px;
                background-color: #f8f9fa;
                border-radius: 8px;
                border: 1px solid #e9ecef;
            }
            .related h3 {
                margin-top: 0;
                font-size: 1.1rem;
                color: #14213d;
                margin-bottom: 12px;
            }
            .related a {
                display: block !important;          /* 強制每個標題獨佔一行 */
                margin-top: 8px !important;         /* 上下間距 */
                text-decoration: none !important;   /* 移除預設底線 */
                color: #1565c0 !important;          /* 質感藍色 */
                font-weight: 600 !important;        /* 字體加粗 */
                font-size: 0.95rem !important;
            }
            .related a:hover {
                text-decoration: underline !important; /* 滑鼠移上去顯示底線 */
                color: #0d47a1 !important;
            }
        `;
        document.head.appendChild(styleEl);
    }

    // 0-1. 自動檢查：如果這篇文章是從搜尋引擎「獨立點擊」被打開（外面沒有包主框架 index.html）
    if (window.self === window.top) {
        // 動態判斷路徑深度，確保不管在 intro 還是 lecture 都能正確指回首頁
        let homeUrl = "../../index.html";
        const currentPath = window.location.pathname;
        if (currentPath.includes('/book/lecture/') || currentPath.includes('/book/intro/') || currentPath.includes('/book/')) {
            homeUrl = "../../index.html";
        } else {
            homeUrl = "./index.html";
        }

        const topBannerHtml = `
            <div class="top-brand-banner">
                <a href="${homeUrl}" class="brand-link">
                    <i class="fa-solid fa-jar" style="color: #fca311; font-size: 1.2rem;"></i>
                    <span>陶藝與釉藥調配</span> ｜ 專業教學與計算知識庫 (黃明文老師)
                </a>
                <a href="${homeUrl}" class="home-btn">返回首頁大廳</a>
            </div>
        `;
        document.body.insertAdjacentHTML('afterbegin', topBannerHtml);
    }

    // 1. 自動取得當前網頁的檔名
    const currentPath = window.location.pathname;
    
    if (typeof knowledgeTree === 'undefined') {
        console.warn("Knowledge base data (knowledgeTree) not found.");
        return;
    }

    // 2. 尋找目前文章在 knowledgeTree 中的身分與 Tag
    let currentArticle = null;
    let currentCategoryGroup = null;

    for (const group of knowledgeTree) {
        const found = group.articles.find(art => currentPath.includes(art.id) || currentPath.endsWith(art.url.replace('./', '')));
        if (found) {
            currentArticle = found;
            currentCategoryGroup = group;
            break;
        }
    }

    if (!currentArticle) return;

    // 3. 從所有分類中，篩選出與當前文章「擁有相同 Tag」且「不是自己」的其他文章
    let candidateArticles = [];
    
    knowledgeTree.forEach(group => {
        group.articles.forEach(art => {
            if (art.id !== currentArticle.id && art.tag === currentArticle.tag) {
                let adjustedUrl = art.url;
                if (currentPath.includes('/book/')) {
                    adjustedUrl = art.url.replace('./book/', '../');
                }
                candidateArticles.push({
                    ...art,
                    resolvedUrl: adjustedUrl
                });
            }
        });
    });

    // 4. 隨機選取最多 3 篇相關文章
    candidateArticles.sort(() => 0.5 - Math.random());
    const selectedArticles = candidateArticles.slice(0, 3);

    // 5. 動態產生 HTML 結構並塞入容器中
    const container = document.getElementById("dynamic-related-articles");
    if (!container) return;

    if (selectedArticles.length === 0) {
        container.innerHTML = `
            <div class="related">
                <h3>相關文章</h3>
                <p style="font-size: 0.9rem; color: #666;">目前此標籤下尚無其他相關文章，歡迎繼續探索其他分類！</p>
            </div>
        `;
        return;
    }

    let linksHtml = '';
    selectedArticles.forEach(art => {
        linksHtml += `<a href="${art.resolvedUrl}">👉 ${art.title}</a>\n`;
    });

    container.innerHTML = `
        <div class="related">
            <h3>相關文章 (${currentArticle.tag})</h3>
            ${linksHtml}
        </div>
    `;
});