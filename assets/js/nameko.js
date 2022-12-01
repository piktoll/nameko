/*
    arrays containing Korean name elements with Korean hangul and romanization listed below
*/

const korean = [
    ["김", "이", "박", "정", "최", "조", "강", "장", "윤", "임", "신", "유", "한", "오", "서", "전"],
    ["감", "건", "경", "국", "규", "근", "금", "기", "길", "계", "관", "광", "나", "남", "노", "내", "다", "도", "돈", "동", "대", "령", "력", "래", "명", "무", "미", "민", "범", "병", "본", "봉", "상", "서", "석", "선", "성", "소", "수", "순", "승", "시", "신", "세", "아", "여", "연", "영", "오", "용", "우", "유", "육", "윤", "웅", "응", "은", "익", "인", "일", "완", "원", "예", "의", "장", "정", "조", "종", "주", "준", "중", "지", "진", "재", "차", "찬", "창", "천", "청", "춘", "충", "치", "채", "태", "택", "평", "필", "하", "학", "한", "헌", "혁", "현", "형", "호", "홍", "효", "훈", "흠", "해", "혜", "화", "휘", "희"],
    ["강", "걸", "결", "경", "구", "국", "군", "규", "균", "근", "기", "길", "관", "권", "나", "남", "녕", "내", "동", "득", "라", "란", "락", "렬", "룡", "리", "린", "림", "래", "망", "목", "문", "미", "민", "매", "복", "봉", "빈", "배", "삼", "상", "석", "선", "섭", "성", "송", "순", "숙", "수", "승", "식", "아", "양", "언", "억", "연", "엽", "영", "열", "옥", "용", "우", "운", "욱", "울", "윤", "애", "은", "응", "익", "인", "일", "완", "왕", "원", "의", "전", "정", "종", "주", "준", "중", "지", "직", "진", "재", "제", "찬", "철", "춘", "태", "택", "표", "하", "한", "헌", "혁", "현", "형", "협", "홍", "호", "훈", "혜", "화", "환", "회", "희"]
];

const romanized = [
    ["Kim", "Lee", "Park", "Jeong", "Choi", "Cho", "Kang", "Jang", "Yoon", "Lim", "Shin", "Yoo", "Han", "Oh", "Seo", "Jeon"],
    ["Gam", "Geon", "Gyeong", "Guk", "Gyu", "Geun", "Geum", "Gi", "Gil", "Gye", "Gwan", "Gwang", "Na", "Nam", "No", "Nae", "Da", "Do", "Don", "Dong", "Dae", "Ryeong", "Ryeok", "Rae", "Myeong", "Mu", "Mi", "Min", "Beom", "Byeong", "Bon", "Bong", "Sang", "Seo", "Seok", "Seon", "Seong", "So", "Su", "Sun", "Seung", "Shi", "Shin", "Se", "Ah", "Yeo", "Yeon", "Yeong", "Oh", "Yong", "U", "Yu", "Yuk", "Yun", "Ung", "Eung", "Eun", "Ik", "In", "Il", "Wan", "Won", "Ye", "Eui", "Jang", "Jeong", "Jo", "Jong", "Ju", "Jun", "Jung", "Ji", "Jin", "Jae", "Cha", "Chan", "Chang", "Cheon", "Cheong", "Chun", "Chung", "Chi", "Chae", "Tae", "Taek", "Pyeong", "Pil", "Ha", "Hak", "Han", "Heon", "Hyeok", "Hyeon", "Hyeong", "Ho", "Hong", "Hyo", "Hun", "Heum", "Hae", "Hye", "Hwa", "Hwi", "Hui"],
    ["gang", "geol", "gyeol", "gyeong", "gu", "guk", "gun", "gyu", "gyun", "geun", "gi", "gil", "gwan", "gwon", "na", "nam", "nyeong", "nae", "dong", "deuk", "ra", "ran", "rak", "ryeol", "ryong", "ri", "rin", "rim", "rae", "mang", "mok", "mun", "mi", "min", "mae", "bok", "bong", "bin", "bae", "sam", "sang", "seok", "seon", "seop", "seong", "song", "sun", "suk", "su", "seung", "shik", "ah", "yang", "eon", "eok", "yeon", "yeop", "yeong", "yeol", "ok", "yong", "u", "un", "uk", "ul", "yun", "ae", "eun", "eung", "ik", "in", "il", "wan", "wang", "won", "ui", "jeon", "jeong", "jong", "ju", "jun", "jung", "ji", "jik", "jin", "jae", "je", "chan", "cheol", "chun", "tae", "taek", "pyo", "ha", "han", "heon", "hyeok", "hyeon", "hyeong", "hyeop", "hong", "ho", "hun", "hye", "hwa", "hwan", "hoi", "hui"]
];

window.onload = function() {
    let webUi = {
        generateBtn: document.querySelector("#generate-btn"),
        massGenerateBtn: document.querySelector("#mass-generate-btn"),
        clearListBtn: document.querySelector("#clear-list-btn"),
        listEl: document.querySelector("#list-el"),
        nameEl: document.querySelector("#name-el"),
        romajaEl: document.querySelector("#romaja-el"),
        familyEl: document.querySelector("#family-el"),
        headingEl: document.querySelector("#heading-el"),
        formatter: new Intl.NumberFormat("en-US", {
            maximumFractionDigits: 0
        }),

        clearEcho: function() {
            webUi.nameEl.innerHTML = "";
            webUi.romajaEl.innerHTML = "";
        },

        generateName: function() {
            webUi.clearEcho();

            if (webUi.familyEl.checked) {
                let pr = Math.floor(Math.random() * (korean[0].length - 1));
                webUi.nameEl.innerHTML = korean[0][pr];
                webUi.romajaEl.innerHTML = romanized[0][pr] + "&nbsp;";
            }

            let sr = Math.floor(Math.random() * (korean[1].length - 1));
            let tr = Math.floor(Math.random() * (korean[2].length - 1));

            webUi.nameEl.innerHTML += korean[1][sr] + korean[2][tr];
            webUi.romajaEl.innerHTML += romanized[1][sr] + "-" + romanized[2][tr];
        },

        clearList: function() {
            webUi.listEl.innerHTML = "";
        },

        massGenerate: function(n) {
            webUi.clearList();

            for (i = 0; i < n; i++) {
                let pr = Math.floor(Math.random() * (korean[0].length - 1));
                let sr = Math.floor(Math.random() * (korean[1].length - 1));
                let tr = Math.floor(Math.random() * (korean[2].length - 1));

                webUi.familyEl.checked
                    ? (webUi.listEl.innerHTML += korean[0][pr] + korean[1][sr] + korean[2][tr] + "&nbsp;<span class=\"romaja\">(" + romanized[0][pr] + "&nbsp;" + romanized[1][sr] + "-" + romanized[2][tr] + ")" + "</span><br>")
                    : (webUi.listEl.innerHTML += korean[1][sr] + korean[2][tr] + "&nbsp;<span class=\"romaja\">(" + romanized[1][sr] + "-" + romanized[2][tr] + ")" + "</span><br>");
            }
        }
    };
    
    let combinations = webUi.formatter.format(korean[0].length * korean[1].length * korean[2].length);
    webUi.headingEl.innerHTML = `Korean Name Generator with ${combinations} possible name combinations`;
    webUi.generateBtn.addEventListener("click", webUi.generateName);
    webUi.massGenerateBtn.addEventListener("click", function(n) {
        webUi.massGenerate(15);
    });
    webUi.clearListBtn.addEventListener("click", webUi.clearList);
}
