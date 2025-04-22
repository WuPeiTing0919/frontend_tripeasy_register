export function updateOptions(selects) {
    // 抓目前選擇的下拉式選單內容，並存成陣列
    const selectedValues = Array.from(selects).map(sel => sel.value);

    selects.forEach(select => {
        // 抓取目前選單選擇的值
        const currentValue = select.value;
        const options = select.querySelectorAll('option');

        options.forEach(option => {
            // 如果下拉式選單項目中是空、等於目前選擇內容，那可以點選
            if (option.value === "" || option.value === currentValue) {
                option.disabled = false;
            } else {
                // 如果有在先前選擇的項目內，就不可點選
                option.disabled = selectedValues.includes(option.value);
            }
        });
    });
}

export function passwordShow(pwdBtn,eyeBtn){
    if (eyeBtn.getAttribute("class") == "fa-solid fa-eye-slash"){
        eyeBtn.setAttribute("class","fa-solid fa-eye");
        pwdBtn.setAttribute("type","text");
    }else{
        eyeBtn.setAttribute("class","fa-solid fa-eye-slash");
        pwdBtn.setAttribute("type","password");
    }
}

