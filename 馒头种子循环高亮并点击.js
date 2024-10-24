//延迟
async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//改颜色
async function highlightElement(row, color='yellow') {
    // 1. 选中元素
    //const element = document.querySelector(selector);
    const element = row
    if (element) {
        // 2. 设置背景色
        element.style.backgroundColor = color;
        console.log("设置背景色")
        //点击下载
        let targetButton = row.querySelector("td:nth-child(2) > div.flex.flex-nowrap > div:nth-child(2) > div.flex.rows-center.justify-end.flex-nowrap > div > button.ant-btn.css-lr0xxo.ant-btn-circle.ant-btn-primary.ant-btn-color-primary.ant-btn-variant-solid.ant-btn-sm.ant-btn-icon-only.ant-btn-background-ghost.mr-2")
        let downloading = row.querySelector("td:nth-child(2) > div.ant-progress.ant-progress-status-success.ant-progress-line.ant-progress-line-align-end.ant-progress-line-position-outer.ant-progress-show-info.ant-progress-default.mb-0.css-lr0xxo")
        //如果下载按钮存在
        if (targetButton) {
            if (!downloading) {
                targetButton.click();
                console.log("成功点击")
            } else {
                console.warn("正在下载");
            }
        } else {
            console.warn("下载按钮不存在");
        }
        console.log(row);
        // Example: Log each row element to the console

        // 3. 下载完延迟后清除背景色
        await delay(5000);
        element.style.backgroundColor = '';
        console.log("清除颜色")

    } else {
        console.warn(`元素 ${row} 未找到`);
    }
}

async function loopWithDelay() {
    // Loop through each row with delay
    for (const row of rows) {
        highlightElement(row);
        // Highlight the current row
        await delay(5000);
    }
}

// Select all matching table rows
const rows = document.querySelectorAll("#app-content > div > div.mt-4.app-content__inner > div > div > div.ant-spin-nested-loading.css-lr0xxo > div > div > table > tbody > tr");
loopWithDelay();

// rows = document.querySelectorAll("#app-content > div > div.mt-4.app-content__inner > div > div > div.ant-spin-nested-loading.css-lr0xxo > div > div > table > tbody > tr");
// row= document.querySelectorAll("#app-content > div > div.mt-4.app-content__inner > div > div > div.ant-spin-nested-loading.css-lr0xxo > div > div > table > tbody > tr")[0];
// row.querySelector("td:nth-child(2) > div.ant-progress.ant-progress-status-success.ant-progress-line.ant-progress-line-align-end.ant-progress-line-position-outer.ant-progress-show-info.ant-progress-default.mb-0.css-lr0xxo")
//如果存在则不点击，console，已经下载
//document.querySelector("#app-content > div > div.mt-4.app-content__inner > div > div > div.ant-spin-nested-loading.css-lr0xxo > div > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > div.ant-progress.ant-progress-status-success.ant-progress-line.ant-progress-line-align-end.ant-progress-line-position-outer.ant-progress-show-info.ant-progress-default.mb-0.css-lr0xxo")
//console.log("已经下载")
