const createHtmlElement = (tag, classNames = [], id = undefined) => {
    let el = document.createElement(tag);
    classNames.forEach((className) => {
        el.classList.add(className);
    });
    if (id !== undefined) el.id = id;
    return el;
}

const achievementData = [
    {
        "title": "Juara I",
        "type": "Mahasiswa",
        "competition": "UI/UX Design",
        "event": "Forkafest 2023",
        "time": "16 Juni 2023",
        "participants": [
            "220010071 - Andi Susilo",
            "220011202 - Slamet Sulaiman",
            "220010651 - Jusuf",
        ],
    },
    {
        "title": "Juara II",
        "type": "Mahasiswa",
        "competition": "Web Design",
        "event": "Forkafest 2023",
        "time": "16 Juni 2023",
        "participants": [
            "220010288 - Iskandar Budi",
            "220000020 - Latifah Imam",
            "220030633 - Tri Idris",
        ],
    },
    {
        "title": "Juara I",
        "type": "Mahasiswa",
        "competition": "Web Development",
        "event": "Forkafest 2023",
        "time": "16 Juni 2023",
        "participants": [
            "220010071 - Tirta Wira",
            "220011202 - Slamet Sulaiman",
        ],
    },
    {
        "title": "Juara II",
        "type": "Mahasiswa",
        "competition": "Essay Competition",
        "event": "Manacomp 2023",
        "time": "12 Juni 2023",
        "participants": [
            "220010555 - Yusuf Umar",
            "220011909 - Bima Abdullah",
            "220000401 - Jusuf Dwi",
        ],
    },
    {
        "title": "Juara I",
        "type": "Mahasiswa",
        "competition": "IoT Development",
        "event": "Manacomp 2023",
        "time": "12 Juni 2023",
        "participants": [
            "220010201 - Kasih Aminah",
            "220011503 - Zulfikar Jamilah",
            "220000223 - Anwar Agung",
        ],
    },
];

const achievementItemBuilder = (dat) => {
    let h3 = createHtmlElement("h3", []);
    h3.innerHTML = dat.title;
    let p1 = createHtmlElement("p", []);
    p1.innerHTML = dat.type;
    let div1 = createHtmlElement("div", ["achievement-item-header"]);
    div1.appendChild(h3);
    div1.appendChild(p1);

    let p_comp = createHtmlElement("p", ["comp"]);
    p_comp.innerHTML = dat.competition;
    let div_organizer = createHtmlElement("div", ["organizer"]);
    div_organizer.innerHTML = dat.event;
    let p_date = createHtmlElement("p", ["date"]);
    p_date.innerHTML = dat.time;
    let div2 = createHtmlElement("div", ["achievement-item-body"]);
    div2.appendChild(p_comp);
    div2.appendChild(div_organizer);
    div2.appendChild(p_date);

    let div3 = createHtmlElement("div", ["member-group"]);
    dat.participants.forEach((part) => {
        let member1 = createHtmlElement("div", ["member-item"]);
        member1.innerHTML = part;

        div3.appendChild(member1);
    });

    let div4 = createHtmlElement("div", ["achievement-item-footer"]);
    div4.appendChild(div3);

    let div5 = createHtmlElement("div", ["achievement-item"]);
    div5.appendChild(div1);
    div5.appendChild(div2);
    div5.appendChild(div4);

    return div5;
}

const achievementContainer = document.getElementById("achievementContainer");

achievementData.forEach((dat) => {
    achievementContainer.appendChild(achievementItemBuilder(dat));
});
