let app = document.getElementById("app");

let pages = [
    { 
        name: "Trening", 
        id: "training", 
        icon: `<img src="https://previews.123rf.com/images/vladischern/vladischern1803/vladischern180300032/98008905-arm-bicep-strong-hand-holding-a-dumbbell-icon-cartoon-hand-drawn-vector-illustration-sketch.jpg" class="w-12 h-12 object-cover rounded-full">`
    },
    { 
        name: "Raspored", 
        id: "schedule", 
        icon: `<img src="https://static.thenounproject.com/png/2671530-200.png" class="w-12 h-12 object-cover rounded-full">`
    },
    { 
        name: "Pjesme", 
        id: "music", 
        icon: `<img src="https://static.thenounproject.com/png/2577569-200.png" class="w-12 h-12 object-cover rounded-full">`
    },
    { 
        name: "Prehrana", 
        id: "food", 
        icon: `<img src="https://thumbs.dreamstime.com/b/minimal-nutrition-icon-representing-healthy-eating-balanced-diet-food-science-wellness-concepts-nutrition-icon-healthy-food-381518157.jpg" class="w-12 h-12 object-cover rounded-full">`
    },
    { 
        name: "Profil", 
        id: "profile", 
        icon: `<img src="https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg" class="w-12 h-12 object-cover rounded-full">`
    },
    { 
        name: "O nama", 
        id: "about", 
        icon: `<img src="https://s22048.pcdn.co/wp-content/uploads/2024/03/information-icon-symbol-sign.jpg" class="w-12 h-12 object-cover rounded-full">`
    }
];

let songs = [
    { title: "Breaking Dishes – Rihanna", url: "https://www.youtube.com/watch?v=ZcJjMnHoIBI" },
    { title: "Silver Springs – Fleetwood Mac", url: "https://www.youtube.com/watch?v=WM7-PYtXtJM" },
    { title: "Party4u – Charli XCX", url: "https://www.youtube.com/watch?v=8d5ZQxjvCwY" },
    { title: "Pyramids – Frank Ocean", url: "https://www.youtube.com/watch?v=TmRsEHG2xjI" },
    { title: "Outside – Calvin Harris", url: "https://www.youtube.com/watch?v=J9NQFACZYEU" },
    { title: "The One That Got Away – Katy Perry", url: "https://www.youtube.com/watch?v=Ahha3Cqe_fk" },
    { title: "Beauty and the beat – Justin Bieber ft. Nicki Minaj", url: "https://youtu.be/Ys7-6_t7OEQ?si=bBaN8nRgZQGRmGNJ" },
    { title: "Shake it off – Taylor Swift ", url: "https://youtu.be/nfWlot6h_JM?si=vE6Y9slqeeEmg338" },
    { title: "Can't stop the felling! – Justin Timberlake ", url: "https://youtu.be/ru0K8uYEZWw?si=NEk50ialoJqLuOpj" }
];

let trainingVideos = [
    "https://www.youtube.com/watch?v=9Zx9XQe9G5E",
    "https://www.youtube.com/watch?v=4BOTvaRaDjI",
    "https://www.youtube.com/watch?v=1f8yoFFdkcY",
    "https://www.youtube.com/watch?v=0DSrudz6c6M",
    "https://www.youtube.com/watch?v=2MoGxae-zyo"
];

document.getElementById("homeBtn").addEventListener("click", loadHomePage);

function loadPage(pageId) {
    if (pageId === "training") loadTrainingPage();
    if (pageId === "schedule") loadSchedulePage();
    if (pageId === "music") loadMusicPage();
    if (pageId === "food") loadFoodPage();
    if (pageId === "profile") loadProfilePage();
    if (pageId === "about") loadAboutPage();
}

function loadHomePage() {
    app.innerHTML = "";

    const container = document.createElement("div");
    container.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16";

    pages.forEach(page => {
        const card = document.createElement("div");
        card.className =
            "card bg-base-100 shadow-xl cursor-pointer hover:scale-105 transition h-80 flex items-center justify-center";

        card.innerHTML = `
            <div class="card-body text-center p-4 flex flex-col items-center justify-center">
                <h2 class="text-5xl mb-3">${page.icon}</h2>
                <h2 class="card-title justify-center text-xl">${page.name}</h2>
            </div>
        `;

        card.addEventListener("click", () => loadPage(page.id));
        container.appendChild(card);
    });

    app.appendChild(container);
}



function loadTrainingPage() {
    app.innerHTML = "";

    const container = document.createElement("div");
    container.className = "grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-10";

    const options = [
        { name: "Treninzi s rekvizitima", id: "equipment" },
        { name: "Treninzi za djecu", id: "kids" },
        { name: "Prilagođeni treninzi", id: "custom" },
        { name: "Standardni treninzi", id: "standard" }
    ];

    options.forEach(opt => {
        const card = document.createElement("div");
        card.className = "card bg-base-100 shadow-xl p-10 h-72 flex items-center justify-center text-center cursor-pointer hover:scale-105 transition";

        card.innerHTML = `<h2 class="text-xl font-bold">${opt.name}</h2>`;
        card.addEventListener("click", () => loadTrainingSubPage(opt.id));

        container.appendChild(card);
    });

    app.appendChild(container);
}

function loadTrainingSubPage(type) {
    app.innerHTML = "";

    if (type === "equipment") return loadEquipmentPage();
    if (type === "kids") return loadKidsTrainingPage();
    if (type === "custom") return loadCustomTrainingPage();
    if (type === "standard") return loadStandardTrainingPage();
}



function loadStandardTrainingPage() {
    app.innerHTML = "";

    const bodyParts = [
        { name: "Noge", id: "legs" },
        { name: "Ruke", id: "arms" },
        { name: "Leđa", id: "back" },
        { name: "Kardio", id: "cardio" }
    ];

    const container = document.createElement("div");
    container.className = "grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-10";

    bodyParts.forEach(part => {
        const card = document.createElement("div");
        card.className = "card bg-base-100 shadow-xl p-10 h-72 flex items-center justify-center text-center cursor-pointer hover:scale-105 transition";

        card.innerHTML = `<h2 class="text-xl font-bold">${part.name}</h2>`;
        card.addEventListener("click", () => loadStandardDifficultyPage(part));

        container.appendChild(card);
    });

    app.appendChild(container);
}

function loadStandardDifficultyPage(bodyPart) {
    app.innerHTML = "";

    const difficulties = [
        { name: "Lako", id: "easy" },
        { name: "Srednje", id: "medium" },
        { name: "Teško", id: "hard" }
    ];

    const container = document.createElement("div");
    container.className = "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10";

    difficulties.forEach(diff => {
        const card = document.createElement("div");
        card.className = "card bg-base-100 shadow-xl p-10 h-72 flex items-center justify-center text-center cursor-pointer hover:scale-105 transition";

        card.innerHTML = `<h2 class="text-xl font-bold">${diff.name}</h2>`;
        card.addEventListener("click", () => loadStandardDurationPage(bodyPart, diff));

        container.appendChild(card);
    });

    app.appendChild(container);
}

function loadStandardDurationPage(bodyPart, difficulty) {
    app.innerHTML = "";

    const durations = [
        { name: "10 minuta", id: 10 },
        { name: "30 minuta", id: 30 },
        { name: "60 minuta", id: 60 }
    ];

    const container = document.createElement("div");
    container.className = "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10";

    durations.forEach(dur => {
        const card = document.createElement("div");
        card.className = "card bg-base-100 shadow-xl p-10 h-72 flex items-center justify-center text-center cursor-pointer hover:scale-105 transition";

        card.innerHTML = `<h2 class="text-xl font-bold">${dur.name}</h2>`;
        card.addEventListener("click", () => openStandardVideo(bodyPart.id, dur.id));

        container.appendChild(card);
    });

    app.appendChild(container);
}

function openStandardVideo(bodyPart, duration) {
    const videos = {
        legs: {
            10: "https://www.youtube.com/watch?v=nxi3dBw_JBQ",
            30: "https://www.youtube.com/watch?v=3MpUrM_z_Ws",
            60: "https://www.youtube.com/watch?v=emZ5lpruedA"
        },
        arms: {
            10: "https://www.youtube.com/watch?v=onLTHQ1KE50",
            30: "https://www.youtube.com/watch?v=vlDnJSBJJhQ",
            60: "https://www.youtube.com/watch?v=E_i3LShoUbA"
        },
        back: {
            10: "https://www.youtube.com/watch?v=1dJ-d7tVwEk",
            30: "https://www.youtube.com/watch?v=79Xln9LtaRU",
            60: "https://www.youtube.com/watch?v=zRP2A8gWZAA"
        },
        cardio: {
            10: "https://www.youtube.com/watch?v=PqqJBaE4srs",
            30: "https://www.youtube.com/watch?v=DVD_gIdPr-o",
            60: "https://www.youtube.com/watch?v=pB4Zr9ECN1g"
        }
    };

    window.open(videos[bodyPart][duration], "_blank");
}


function loadEquipmentPage() {
    app.innerHTML = "";

    const container = document.createElement("div");
    container.className = "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10";

    const equipment = [
        { name: "Bučice", id: "dumbbells" },
        { name: "Girije", id: "kettlebells" },
        { name: "Traka", id: "band" }
    ];

    equipment.forEach(eq => {
        const card = document.createElement("div");
        card.className = "card bg-base-100 shadow-xl p-10 h-72 flex items-center justify-center text-center cursor-pointer hover:scale-105 transition";

        card.innerHTML = `<h2 class="text-xl font-bold">${eq.name}</h2>`;
        card.addEventListener("click", () => loadEquipmentCategory(eq.id));

        container.appendChild(card);
    });

    app.appendChild(container);
}

function loadEquipmentCategory(type) {
    app.innerHTML = "";

    const categories = {
        dumbbells: [
            { name: "Noge", url: "https://www.youtube.com/watch?v=mQnSx58Iork" },
            { name: "Ruke", url: "https://www.youtube.com/watch?v=dZc_WIU99ZY" },
            { name: "Leđa", url: "https://www.youtube.com/watch?v=l9uguRbPRvI" },
            { name: "Kardio", url: "https://www.youtube.com/watch?v=Lm1-otxCXhA" }
        ],
        kettlebells: [
            { name: "Ruke", url: "https://www.youtube.com/watch?v=WGLmYPLGpDg" },
            { name: "Leđa", url: "https://www.youtube.com/shorts/fgTexBcnvRA" },
            { name: "Kardio", url: "https://www.youtube.com/watch?v=XyKll2wGYIM" }
        ],
        band: [
            { name: "Ruke", url: "https://www.youtube.com/watch?v=RqT0kT3up9c" },
            { name: "Noge", url: "https://www.youtube.com/watch?v=ntNrwD94b1M" },
            { name: "Leđa", url: "https://www.youtube.com/watch?v=IP4wM2JpDdQ" },
            { name: "Kardio", url: "https://www.youtube.com/watch?v=9qqnYOcSpY8" }
        ]
    };

    const container = document.createElement("div");
    container.className = "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-10";

    categories[type].forEach(cat => {
        const card = document.createElement("div");
        card.className = "card bg-base-100 shadow-xl p-10 h-72 flex items-center justify-center text-center cursor-pointer hover:scale-105 transition";

        card.innerHTML = `<h2 class="text-xl font-bold">${cat.name}</h2>`;
        card.addEventListener("click", () => window.open(cat.url, "_blank"));

        container.appendChild(card);
    });

    app.appendChild(container);
}



function loadKidsTrainingPage() {
    app.innerHTML = "";

    const videos = [
        "https://www.youtube.com/watch?v=kbaWouYP38&list=PL3sy64hTqfdBDeAivXPrjGHtR4rOaktr7",
        "https://www.youtube.com/watch?v=lYePZ7d8He8&index=2",
        "https://www.youtube.com/watch?v=POgefY_4G8w&index=3"
    ];

    const container = document.createElement("div");
    container.className = "flex flex-col gap-6 max-w-md mx-auto mt-10";

    videos.forEach((url, i) => {
        const card = document.createElement("div");
        card.className = "card bg-base-100 shadow-xl p-6 flex items-center justify-center text-center cursor-pointer hover:scale-105 transition";

        card.innerHTML = `<h2 class="text-xl font-bold">Video ${i + 1}</h2>`;
        card.addEventListener("click", () => window.open(url, "_blank"));

        container.appendChild(card);
    });

    app.appendChild(container);
}



function loadCustomTrainingPage() {
    app.innerHTML = "";

    const options = [
        { name: "Problemi s leđima", url: "https://www.youtube.com/watch?v=UZzysCeqUpA" },
        { name: "Problemi s koljenima", url: "https://www.youtube.com/watch?v=j9BIE5Pfpzw" },
        { name: "Problemi s ramenima", url: "https://www.youtube.com/watch?v=AMqT-3l0I6k" }
    ];

    const container = document.createElement("div");
    container.className = "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10";

    options.forEach(opt => {
        const card = document.createElement("div");
        card.className = "card bg-base-100 shadow-xl p-10 h-72 flex items-center justify-center text-center cursor-pointer hover:scale-105 transition";

        card.innerHTML = `<h2 class="text-xl font-bold">${opt.name}</h2>`;
        card.addEventListener("click", () => window.open(opt.url, "_blank"));

        container.appendChild(card);
    });

    app.appendChild(container);
}



function loadSchedulePage() {
    app.innerHTML = "";

    const container = document.createElement("div");
    container.className = "max-w-md mx-auto mt-10 card bg-base-100 p-6 shadow-xl";

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    const title = document.createElement("h2");
    title.className = "text-2xl font-bold mb-4 text-center";
    title.textContent = "Kalendar";
    container.appendChild(title);

    const nav = document.createElement("div");
    nav.className = "flex justify-between items-center mb-4";

    const prevBtn = document.createElement("button");
    prevBtn.className = "btn btn-outline";
    prevBtn.textContent = "<";

    const nextBtn = document.createElement("button");
    nextBtn.className = "btn btn-outline";
    nextBtn.textContent = ">";

    const monthLabel = document.createElement("h3");
    monthLabel.className = "text-xl font-semibold";

    nav.appendChild(prevBtn);
    nav.appendChild(monthLabel);
    nav.appendChild(nextBtn);

    container.appendChild(nav);

    const calendarGrid = document.createElement("div");
    calendarGrid.className = "grid grid-cols-7 gap-2 text-center";
    container.appendChild(calendarGrid);

    function renderCalendar() {
        calendarGrid.innerHTML = "";

        const months = [
            "Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj",
            "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"
        ];

        monthLabel.textContent = `${months[currentMonth]} ${currentYear}`;

        let firstDay = new Date(currentYear, currentMonth, 1).getDay();
        if (firstDay === 0) firstDay = 7;

        let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        for (let i = 1; i < firstDay; i++) {
            const empty = document.createElement("div");
            calendarGrid.appendChild(empty);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dayBox = document.createElement("div");
            dayBox.className = "p-2 border rounded cursor-pointer hover:bg-base-200";

            dayBox.textContent = day;

            let key = `${currentYear}-${currentMonth}-${day}`;
            let savedNote = localStorage.getItem(key);

            if (savedNote) {
                dayBox.classList.add("bg-primary", "text-white");
            }

            dayBox.addEventListener("click", () => {
                let note = prompt("Dodaj napomenu za ovaj dan:", savedNote || "");

                if (note) {
                    localStorage.setItem(key, note);
                    dayBox.classList.add("bg-primary", "text-white");
                } else {
                    localStorage.removeItem(key);
                    dayBox.classList.remove("bg-primary", "text-white");
                }
            });

            calendarGrid.appendChild(dayBox);
        }
    }

    prevBtn.addEventListener("click", () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar();
    });

    nextBtn.addEventListener("click", () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar();
    });

    renderCalendar();
    app.appendChild(container);
}



function loadMusicPage() {
    app.innerHTML = "";

    const list = document.createElement("div");
    list.className = "flex flex-col gap-4 max-w-md mx-auto mt-10";

    songs.forEach(song => {
        const card = document.createElement("div");
        card.className = "card bg-base-100 shadow-xl cursor-pointer";

        card.innerHTML = `
            <div class="card-body">
                <h2 class="card-title">${song.title}</h2>
            </div>
        `;

        card.addEventListener("click", () => window.open(song.url, "_blank"));

        list.appendChild(card);
    });

    app.appendChild(list);
}



function loadFoodPage() {
    app.innerHTML = "";

    const meals = [
        {
            name: "Piletina s povrćem na tavi",
            calories: "420 kcal",
            protein: "45 g proteina",
            ingredients: "piletina, paprika, tikvica, luk, maslinovo ulje, sol, papar",
            preparation: "Piletinu narežeš na trakice, začiniš i staviš na zagrijanu tavu. Kad se zazlati, dodaš papriku, tikvicu i luk te sve pržiš dok povrće ne omekša, ali ostane hrskavo.",
        },
        {
            name: "Losos iz pećnice s limunom",
            calories: "480 kcal",
            protein: "42 g proteina",
            ingredients: "losos, limun, maslinovo ulje, sol, papar",
            preparation: "Losos položiš na papir za pečenje, premažeš uljem, posoliš, popapriš i dodaš limun. Pečeš 15–18 minuta na 200°C dok meso ne postane mekano i sočno.",
        },
        {
            name: "Zobena kaša s borovnicama",
            calories: "350 kcal",
            protein: "15 g proteina",
            ingredients: "zob, mlijeko ili voda, borovnice, med",
            preparation: "Zob skuhaš u mlijeku ili vodi dok se ne zgusne, makneš s vatre i umiješaš borovnice. Po vrhu dodaš med i po želji cimet.",
        },
        {
            name: "Tofu stir-fry s povrćem",
            calories: "380 kcal",
            protein: "25 g proteina",
            ingredients: "tofu, brokula, mrkva, paprika, soja umak, sezam",
            preparation: "Tofu narežeš i prepržiš dok ne postane hrskav. Dodaš povrće i pržiš na jačoj vatri. Kad omekša, uliješ soja umak i sve sjediniš.",
        },
        {
            name: "Integralna tjestenina s tunom",
            calories: "520 kcal",
            protein: "40 g proteina",
            ingredients: "integralna tjestenina, tuna, maslinovo ulje, limun, peršin",
            preparation: "Tjesteninu skuhaš, ocijediš i pomiješaš s tunom, uljem i limunom. Po želji dodaš peršin.",
        },
        {
            name: "Omlet s povrćem",
            calories: "300 kcal",
            protein: "22 g proteina",
            ingredients: "jaja, paprika, špinat, sol, papar, ulje",
            preparation: "Na tavi popržiš papriku i špinat, zatim uliješ jaja. Kad se stisne, preklopiš i kratko dovršiš.",
        },
        {
            name: "Grčka salata s piletinom",
            calories: "450 kcal",
            protein: "38 g proteina",
            ingredients: "piletina, rajčica, krastavac, feta, masline, luk, ulje, limun",
            preparation: "Piletinu ispečeš i narežeš. U zdjeli pomiješaš povrće i fetu, dodaš piletinu i začiniš uljem i limunom.",
        },
        {
            name: "Chili od graha i puretine",
            calories: "500 kcal",
            protein: "42 g proteina",
            ingredients: "puretina, grah, rajčica, luk, paprika, čili, kumin",
            preparation: "Puretinu popržiš, dodaš luk i začine, zatim grah i rajčicu. Kuhaš 20 minuta.",
        },
        {
            name: "Quinoa bowl s povrćem",
            calories: "420 kcal",
            protein: "18 g proteina",
            ingredients: "quinoa, avokado, kukuruz, grah, cherry rajčice, limun",
            preparation: "Skuhanu quinou pomiješaš s povrćem i začiniš limunom i uljem.",
        },
        {
            name: "Pečeni batat s grčkim jogurtom",
            calories: "380 kcal",
            protein: "12 g proteina",
            ingredients: "batat, grčki jogurt, ulje",
            preparation: "Batat prerežeš i pečeš 30 minuta. Poslužiš s jogurtom.",
        },
        {
            name: "Rižoto s gljivama",
            calories: "450 kcal",
            protein: "16 g proteina",
            ingredients: "riža, gljive, luk, temeljac, maslac",
            preparation: "Na maslacu popržiš luk i gljive, dodaš rižu i postupno temeljac dok rižoto ne postane kremast.",
        },
        {
            name: "Pečena piletina s brokulom",
            calories: "400 kcal",
            protein: "45 g proteina",
            ingredients: "piletina, brokula, ulje",
            preparation: "Piletinu i brokulu začiniš i pečeš 25 minuta na 200°C.",
        },
        {
            name: "Tuna salata s jajima",
            calories: "420 kcal",
            protein: "38 g proteina",
            ingredients: "tuna, jaja, krastavac, kukuruz, jogurt",
            preparation: "Sve sastojke narežeš i pomiješaš u zdjeli.",
        },
        {
            name: "Smoothie od špinata i banane",
            calories: "250 kcal",
            protein: "12 g proteina",
            ingredients: "špinat, banana, jogurt",
            preparation: "Sve izmiksaš u blenderu.",
        },
        {
            name: "Pečeni oslić s povrćem",
            calories: "350 kcal",
            protein: "32 g proteina",
            ingredients: "oslić, mrkva, tikvica, ulje",
            preparation: "Ribu i povrće začiniš i pečeš 20 minuta.",
        },
        {
            name: "Curry od leće",
            calories: "420 kcal",
            protein: "22 g proteina",
            ingredients: "leća, kokosovo mlijeko, curry pasta, luk",
            preparation: "Leću skuhaš, zatim pirjaš luk i curry pastu, dodaš kokosovo mlijeko i leću te kuhaš dok se zgusne.",
        },
        {
            name: "Piletina u woku s rižom",
            calories: "500 kcal",
            protein: "40 g proteina",
            ingredients: "piletina, riža, povrće, soja umak",
            preparation: "Piletinu popržiš, dodaš povrće i rižu, začiniš soja umakom i kratko pržiš.",
        },
        {
            name: "Salata od kvinoje i tune",
            calories: "430 kcal",
            protein: "35 g proteina",
            ingredients: "quinoa, tuna, rajčica, limun",
            preparation: "Skuhanu quinou pomiješaš s tunom i povrćem.",
        },
        {
            name: "Zapečena zob s jabukama",
            calories: "320 kcal",
            protein: "10 g proteina",
            ingredients: "zob, jabuka, cimet, med",
            preparation: "Pomiješaš zob s jabukom i cimetom, dodaš med i pečeš 20 minuta.",
        },
        {
            name: "Pureći burger bez peciva",
            calories: "380 kcal",
            protein: "40 g proteina",
            ingredients: "pureće mljeveno, sol, papar",
            preparation: "Oblikuješ pljeskavice i ispečeš ih na tavi ili roštilju.",
        },
        {
            name: "Salata od slanutka",
            calories: "350 kcal",
            protein: "15 g proteina",
            ingredients: "slanutak, rajčica, krastavac, limun",
            preparation: "Sve pomiješaš i lagano začiniš.",
        },
        {
            name: "Tortilja s piletinom",
            calories: "480 kcal",
            protein: "35 g proteina",
            ingredients: "tortilja, piletina, povrće, jogurt",
            preparation: "Piletinu ispečeš, pomiješaš s povrćem, zamotaš u tortilju i kratko zapečeš.",
        },
        {
            name: "Pečeni tofu s batatom",
            calories: "420 kcal",
            protein: "22 g proteina",
            ingredients: "tofu, batat, ulje",
            preparation: "Tofu i batat narežeš, začiniš i pečeš 25 minuta.",
        },
        {
            name: "Jaja na oko s avokadom",
            calories: "320 kcal",
            protein: "18 g proteina",
            ingredients: "jaja, avokado",
            preparation: "Ispečeš jaja, avokado narežeš i poslužiš zajedno.",
        },
        {
            name: "Pečena cikla s fetom",
            calories: "300 kcal",
            protein: "12 g proteina",
            ingredients: "cikla, feta, ulje",
            preparation: "Ciklu oguliš i pečeš 30 minuta, zatim dodaš fetu.",
        },
        {
            name: "Riža s graškom i jajem",
            calories: "380 kcal",
            protein: "18 g proteina",
            ingredients: "riža, grašak, jaje, soja umak",
            preparation: "Na tavi popržiš jaje, dodaš rižu i grašak te začiniš soja umakom.",
        },
        {
            name: "Pečena skuša",
            calories: "450 kcal",
            protein: "40 g proteina",
            ingredients: "skuša, limun, ulje",
            preparation: "Skušu začiniš, dodaš limun i pečeš 20 minuta.",
        },
        {
            name: "Salata od bulgura",
            calories: "360 kcal",
            protein: "12 g proteina",
            ingredients: "bulgur, rajčica, peršin, limun",
            preparation: "Skuhani bulgur pomiješaš s povrćem i začiniš limunom.",
        },
        {
            name: "Proteinski smoothie s jagodama",
            calories: "280 kcal",
            protein: "25 g proteina",
            ingredients: "whey, jagode, voda ili mlijeko",
            preparation: "Sve izmiksaš u blenderu.",
        },
        {
            name: "Pečena pureća prsa",
            calories: "300 kcal",
            protein: "48 g proteina",
            ingredients: "pureća prsa, ulje, sol, papar",
            preparation: "Pureća prsa premažeš uljem i začinima, pečeš 25 minuta na 200°C.",
        }
    ];

    const container = document.createElement("div");
    container.className = "max-w-md mx-auto mt-10 flex flex-col gap-4";

    meals.forEach(meal => {
        const card = document.createElement("div");
        card.className = "card bg-base-100 shadow-xl p-4";

        card.innerHTML = `
            <h2 class="card-title">${meal.name}</h2>
            <p><strong>Kalorije:</strong> ${meal.calories}</p>
            <p><strong>Proteini:</strong> ${meal.protein}</p>
            <p><strong>Sastojci:</strong> ${meal.ingredients}</p>
            <p><strong>Priprema:</strong> ${meal.preparation}</p>
        `;

        container.appendChild(card);
    });

    app.appendChild(container);
}



function loadProfilePage() {
    app.innerHTML = "";

    const form = document.createElement("form");
    form.className = "card bg-base-100 shadow-xl p-6 max-w-md mx-auto mt-10 flex flex-col gap-3";

    form.innerHTML = `
        <input id="name" class="input input-bordered" placeholder="Ime">
        <input id="surname" class="input input-bordered" placeholder="Prezime">
        <input id="age" class="input input-bordered" placeholder="Godine" type="number">
        <input id="height" class="input input-bordered" placeholder="Visina (cm)" type="number">
        <input id="weight" class="input input-bordered" placeholder="Težina (kg)" type="number">

        <select id="gender" class="select select-bordered">
            <option>Muško</option>
            <option>Žensko</option>
        </select>

        <button class="btn btn-primary mt-4">Spremi</button>
    `;

    form.addEventListener("submit", e => {
        e.preventDefault();
        alert("Profil spremljen!");
    });

    app.appendChild(form);
}



function loadAboutPage() {
    app.innerHTML = "";

    const wrapper = document.createElement("div");
    wrapper.className = "max-w-4xl mx-auto mt-10 flex flex-col gap-10";

    const cardsRow = document.createElement("div");
    cardsRow.className = "grid grid-cols-1 md:grid-cols-2 gap-6";

    const osoba1 = document.createElement("div");
    osoba1.className = "card bg-base-100 shadow-xl flex flex-row";

    osoba1.innerHTML = `
        <div class="w-1/2">
            <img src="slike/osoba1.jpg" class="w-full h-full object-cover rounded-l-xl">
        </div>
        <div class="w-1/2 p-4">
            <h2 class="card-title mb-2">Ana Lubina</h2>
            <p>Pozdrav! Ja sam Ana Lubina. Imam 16 godina i učenica sam 2.c razreda Gimnazije dr. Mate Ujevića. Suosnivačica sam projekta FITNESS TRACKER. Najviše me privlače fizika, biologija i informatika, jer u njima pronalazim odgovore na pitanja o tome kako se tijelo kreće, kako funkcionira i što se događa “iza kulisa” svakog pokreta. Iz te je znatiželje nastala i ideja za aplikaciju.</p>
        </div>
    `;

    const osoba2 = document.createElement("div");
    osoba2.className = "card bg-base-100 shadow-xl flex flex-row";

    osoba2.innerHTML = `
        <div class="w-1/2">
            <img src="slike/osoba2.jpg" class="w-full h-full object-cover rounded-l-xl">
        </div>
        <div class="w-1/2 p-4">
            <h2 class="card-title mb-2">Petra Piplica</h2>
            <p>Pozdrav! Ja sam Petra Piplica. Imam 16 godina i učenica sam 2.c razreda Gimnazije dr. Mate Ujevića. Suosnivačica sam projekta FITNESS TRACKER. Najviše me privlače fizika, kemija i informatika, jer u njima pronalazim odgovore na pitanja o tome kako se tijelo kreće, kako funkcionira i što se događa “iza kulisa” svakog pokreta. Iz te je znatiželje nastala i ideja za aplikaciju.</p>
        </div>
    `;

    cardsRow.appendChild(osoba1);
    cardsRow.appendChild(osoba2);

    const descriptionBox = document.createElement("div");
    descriptionBox.className = "card bg-base-100 shadow-xl p-6";

    descriptionBox.innerHTML = `
        <h2 class="text-2xl font-bold mb-4">O aplikaciji</h2>
        <p class="text-lg">
           Aplikacija FITNESS TRACKER inovativna je aplikacija koja korisnike potiče na tjelovježbu. Ova
aplikacija nudi standardne treninge, treninge za djecu kao i treninge za osobe koje imaju
zdravstvene probleme i baš zato se smatra prigodnom za sve korisnike. Aplikaciju su izradile
učenice Ana Lubina i Petra Piplica. Prošle godine ove su se ove dvije učenice bavile izradom
web stranice s tematikom turizma u Imotskome, kao što su to već prošle godine rekle,
obožavaju putovati sa svojim obiteljima, a da bi sudjelovale na dugim putovanjima moraju
biti i u formi. Također Ana i Petra su ove godine sudjelovali na projektima iz biologije koji su
se bavili proučavanjem nedovoljne fizičke aktivnosti kod učenika, ali i kod onih starijih. Primjenjujući stečena iskustva i znanja došle su na ideju izrade aplikacije
FITNES TRACKER. Aplikacije su izradile zajedničkim radom pod mentorstvom profesorice
Martine Maršić koja ih je cijelo vrijeme bodrila.<br>
Ana i Petra preko ljetnih praznika žele nadoknađivati aplikaciju, a potom ju ponuditi lokalnoj teretani.
</p>
    `;

    wrapper.appendChild(cardsRow);
    wrapper.appendChild(descriptionBox);

    app.appendChild(wrapper);
}


loadHomePage();
