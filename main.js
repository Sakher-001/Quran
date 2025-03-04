// Get ele
let surahList = document.querySelector('.surah-list') ;
// obj for surahs 
const quranSurahs = [
        { title: "(الفاتحة) Al-Fatiha", ayatCount: 7 },
        { title: "(البقرة) Al-Baqarah", ayatCount: 286 },
        { title: "(آل عمران) Aal-E-Imran", ayatCount: 200 },
        { title: "(النساء) An-Nisa", ayatCount: 176 },
        { title: "(المائدة) Al-Ma'idah", ayatCount: 120 },
        { title: "(الأنعام) Al-An'am", ayatCount: 165 },
        { title: "(الأعراف) Al-A'raf", ayatCount: 206 },
        { title: "(الأنفال) Al-Anfal", ayatCount: 75 },
        { title: "(التوبة) At-Tawbah", ayatCount: 129 },
        { title: "(يونس) Yunus", ayatCount: 109 },
        { title: "(هود) Hud", ayatCount: 123 },
        { title: "(يوسف) Yusuf", ayatCount: 111 },
        { title: "(الرعد) Ar-Ra'd", ayatCount: 43 },
        { title: "(إبراهيم) Ibrahim", ayatCount: 52 },
        { title: "(الحجر) Al-Hijr", ayatCount: 99 },
        { title: "(النحل) An-Nahl", ayatCount: 128 },
        { title: "(الإسراء) Al-Isra", ayatCount: 111 },
        { title: "(الكهف) Al-Kahf", ayatCount: 110 },
        { title: "(مريم) Maryam", ayatCount: 98 },
        { title: "(طه) Ta-Ha", ayatCount: 135 },
        { title: "(الأنبياء) Al-Anbiya", ayatCount: 112 },
        { title: "(الحج) Al-Hajj", ayatCount: 78 },
        { title: "(المؤمنون) Al-Mu'minun", ayatCount: 118 },
        { title: "(النور) An-Nur", ayatCount: 64 },
        { title: "(الفرقان) Al-Furqan", ayatCount: 77 },
        { title: "(الشعراء) Ash-Shu'ara", ayatCount: 227 },
        { title: "(النمل) An-Naml", ayatCount: 93 },
        { title: "(القصص) Al-Qasas", ayatCount: 88 },
        { title: "(العنكبوت) Al-Ankabut", ayatCount: 69 },
        { title: "(الروم) Ar-Rum", ayatCount: 60 },
        { title: "(لقمان) Luqman", ayatCount: 34 },
        { title: "(السجدة) As-Sajda", ayatCount: 30 },
        { title: "(الأحزاب) Al-Ahzab", ayatCount: 73 },
        { title: "(سبأ) Saba", ayatCount: 54 },
        { title: "(فاطر) Fatir", ayatCount: 45 },
        { title: "(يس) Ya-Sin", ayatCount: 83 },
        { title: "(الصافات) As-Saffat", ayatCount: 182 },
        { title: "(ص) Sad", ayatCount: 88 },
        { title: "(الزمر) Az-Zumar", ayatCount: 75 },
        { title: "(غافر) Ghafir", ayatCount: 85 },
        { title: "(فصلت) Fussilat", ayatCount: 54 },
        { title: "(الشورى) Ash-Shura", ayatCount: 53 },
        { title: "(الزخرف) Az-Zukhruf", ayatCount: 89 },
        { title: "(الدخان) Ad-Dukhan", ayatCount: 59 },
        { title: "(الجاثية) Al-Jathiya", ayatCount: 37 },
        { title: "(الأحقاف) Al-Ahqaf", ayatCount: 35 },
        { title: "(محمد) Muhammad", ayatCount: 38 },
        { title: "(الفتح) Al-Fath", ayatCount: 29 },
        { title: "(الحجرات) Al-Hujurat", ayatCount: 18 },
        { title: "(ق) Qaf", ayatCount: 45 },
        { title: "(الذاريات) Adh-Dhariyat", ayatCount: 60 },
        { title: "(الطور) At-Tur", ayatCount: 49 },
        { title: "(النجم) An-Najm", ayatCount: 62 },
        { title: "(القمر) Al-Qamar", ayatCount: 55 },
        { title: "(الرحمن) Ar-Rahman", ayatCount: 78 },
        { title: "(الواقعة) Al-Waqi'a", ayatCount: 96 },
        { title: "(الحديد) Al-Hadid", ayatCount: 29 },
        { title: "(المجادلة) Al-Mujadila", ayatCount: 22 },
        { title: "(الحشر) Al-Hashr", ayatCount: 24 },
        { title: "(الممتحنة) Al-Mumtahanah", ayatCount: 13 },
        { title: "(الصف) As-Saff", ayatCount: 14 },
        { title: "(الجمعة) Al-Jumu'ah", ayatCount: 11 },
        { title: "(المنافقون) Al-Munafiqun", ayatCount: 11 },
        { title: "(التغابن) At-Taghabun", ayatCount: 18 },
        { title: "(الطلاق) At-Talaq", ayatCount: 12 },
        { title: "(التحريم) At-Tahrim", ayatCount: 12 },
        { title: "(الملك) Al-Mulk", ayatCount: 30 },
        { title: "(القلم) Al-Qalam", ayatCount: 52 },
        { title: "(الحاقة) Al-Haqqah", ayatCount: 52 },
        { title: "(المعارج) Al-Ma'arij", ayatCount: 44 },
        { title: "(نوح) Nuh", ayatCount: 28 },
        { title: "(الجن) Al-Jinn", ayatCount: 28 },
        { title: "(المزمل) Al-Muzzammil", ayatCount: 20 },
        { title: "(المدثر) Al-Muddathir", ayatCount: 56 },
        { title: "(القيامة) Al-Qiyamah", ayatCount: 40 },
        { title: "(الإنسان) Al-Insan", ayatCount: 31 },
        { title: "(المرسلات) Al-Mursalat", ayatCount: 50 },
        { title: "(النبأ) An-Naba", ayatCount: 40 },
        { title: "(النازعات) An-Nazi'at", ayatCount: 46 },
        { title: "(عبس) Abasa", ayatCount: 42 },
        { title: "(التكوير) At-Takwir", ayatCount: 29 },
        { title: "(الانفطار) Al-Infitar", ayatCount: 19 },
        { title: "(المطففين) Al-Mutaffifin", ayatCount: 36 },
        { title: "(الانشقاق) Al-Inshiqaq", ayatCount: 25 },
        { title: "(البروج) Al-Buruj", ayatCount: 22 },
        { title: "(الطارق) At-Tariq", ayatCount: 17 },
        { title: "(الأعلى) Al-A'la", ayatCount: 19 },
        { title: "(الغاشية) Al-Ghashiyah", ayatCount: 26 },
        { title: "(الفجر) Al-Fajr", ayatCount: 30 },
        { title: "(البلد) Al-Balad", ayatCount: 20 },
        { title: "(الشمس) Ash-Shams", ayatCount: 15 },
        { title: "(الليل) Al-Layl", ayatCount: 21 },
        { title: "(الضحى) Ad-Duha", ayatCount: 11 },
        { title: "(الشرح) Ash-Sharh", ayatCount: 8 },
        { title: "(التين) At-Tin", ayatCount: 8 },
        { title: "(العلق) Al-Alaq", ayatCount: 19 },
        { title: "(القدر) Al-Qadr", ayatCount: 5 },
        { title: "(البينة) Al-Bayyinah", ayatCount: 8 },
        { title: "(الزلزلة) Az-Zalzalah", ayatCount: 8 },
        { title: "(العاديات) Al-Adiyat", ayatCount: 11 },
        { title: "(القارعة) Al-Qari'ah", ayatCount: 11 },
        { title: "(التكاثر) At-Takathur", ayatCount: 8 },
        { title: "(العصر) Al-Asr", ayatCount: 3 },
        { title: "(الهمزة) Al-Humazah", ayatCount: 9 },
        { title: "(الفيل) Al-Fil", ayatCount: 5 },
        { title: "(قريش) Quraysh", ayatCount: 4 },
        { title: "(الماعون) Al-Ma'un", ayatCount: 7 },
        { title: "(الكوثر) Al-Kawthar", ayatCount: 3 },
        { title: "(الكافرون) Al-Kafirun", ayatCount: 6 },
        { title: "(النصر) An-Nasr", ayatCount: 3 },
        { title: "(المسد) Al-Masad", ayatCount: 5 },
        { title: "(الإخلاص) Al-Ikhlas", ayatCount: 4 },
        { title: "(الفلق) Al-Falaq", ayatCount: 5 },
        { title: "(الناس) An-Nas", ayatCount: 6 }
    ];
// https://server12.mp3quran.net/maher/001.mp3
for(let i = 0 ; i < quranSurahs.length ; i++){
    // create Elements

    let surahItem   = document.createElement("div") ;
    let surahNumber = document.createElement("span") ; 
    let surahTitle  = document.createElement("span") ; 
    let ayatCount   = document.createElement("span") ; 
    // add classes

    surahItem.className = 'surah-item' ;
    surahNumber.className = 'surah-number' ;
    surahTitle.className = 'surah-title' ;
    ayatCount.className  = 'ayat-count' ;

    // append item 
    surahList.appendChild(surahItem) ;
    surahItem.appendChild(surahNumber) ;
    surahItem.appendChild(surahTitle) ;
    surahItem.appendChild(ayatCount) ; 

    // add items to page
    surahNumber.innerHTML = i + 1 ;
    surahTitle.innerHTML  = quranSurahs[i].title ;
    ayatCount.innerHTML   = `Ayat ${quranSurahs[i].ayatCount}`;
    // Add url 
    let surahURL
    if (i >= 10) {
        surahURL = `https://server12.mp3quran.net/maher/0${i+1}.mp3`
    }else if (i >= 100){
        surahURL = `https://server12.mp3quran.net/maher/${i+1}.mp3`
    }else{
        surahURL = `https://server12.mp3quran.net/maher/00${i+1}.mp3`
    }
    surahItem.onclick = function addUrl(){
        window.open(surahURL , "_blank")
    }
}