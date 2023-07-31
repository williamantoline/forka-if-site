const autoScroll = (containerId, timeout = 25, reverseTimeout = 500, axis = "x") => {
    const container = document.getElementById(containerId);

    let direction = 1;
    self.setInterval(() => {
        if ((axis === "x" ? container.offsetWidth : container.offsetHeight) + (axis === "x" ? container.scrollLeft : container.scrollTop) + 0.5 >= (axis === "x" ? container.scrollWidth : container.scrollHeight)) {
            self.setTimeout(() => {
                direction = -1;
            }, reverseTimeout);
        }
        if ((axis === "x" ? container.scrollLeft : container.scrollTop) === 0) {
            self.setTimeout(() => {
                direction = 1;
            }, reverseTimeout);
        }
        if (axis === "x") {
            container.scrollTo(container.scrollLeft + direction, 0);
        } else {
            container.scrollTo(0, container.scrollTop + direction);
        }
    }, timeout);
}


window.addEventListener('load', () => {
    autoScroll("curriculumContainerWrapper", 25, 200, "x");
    autoScroll("alumniOccupationContainerWrapper", 25, 200, "x");
    autoScroll("reviewLeftContainerWrapper", 20, 400, "y");
    autoScroll("reviewCenterContainerWrapper", 22, 400, "y");
    autoScroll("reviewRightContainerWrapper", 24, 400, "y");
});



// kurikulum
const curriculumData = [
    {
        "subject": {
            "en": "Computer Mathematics",
            "id": "Matematika Komputer",
        },
        "image": "curriculum-math.jpg"
    },
    {
        "subject": {
            "en": "Programming",
            "id": "Pemrograman",
        },
        "image": "curriculum-coding.jpg",
    },
    {
        "subject": {
            "en": "ICT",
            "id": "TIK",
        },
        "image": "curriculum-ict.jpg"
    },
    {
        "subject": {
            "en": "Computer English",
            "id": "Bahasa Inggris Komputer",
        },
        "image": "curriculum-english.jpg"
    },
    {
        "subject": {
            "en": "Collaboration Techn.",
            "id": "Teknik Kolaborasi",
        },
        "image": "curriculum-collab.jpg"
    },
    {
        "subject": {
            "en": "Electronics",
            "id": "Elektronika",
        },
        "image": "curriculum-electronics.jpg"
    },
    {
        "subject": {
            "en": "Web Programming",
            "id": "Pemrograman Web",
        },
        "image": "curriculum-web-programming.jpg"
    },
    {
        "subject": {
            "en": "Mobile Programming",
            "id": "Pemrograman Mobile",
        },
        "image": "curriculum-mobile-programming.jpg"
    },
    {
        "subject": {
            "en": "Desktop Programming",
            "id": "Pemrograman Desktop",
        },
        "image": "curriculum-desktop-programming.jpg"
    },
];


{/* <div class="curriculum-item">
    <div class="curriculum-item-body">
        <img src="" alt="">
    </div>
    <div class="curriculum-item-footer">
        <p class="en">Artificial Intelligence</p>
        <p class="id">Kecerdasan Buatan</p>
    </div>
</div> */}

const createHtmlElement = (tag, classNames = [], id = undefined) => {
    let el = document.createElement(tag);
    classNames.forEach((className) => {
        el.classList.add(className);
    });
    if (id !== undefined) el.id = id;
    return el;
}


const curriculumItemBuilder = (dat) => {
    let img = createHtmlElement("img");
    img.setAttribute("src", "landing-page/assets/" + dat.image);

    let div1 = createHtmlElement("div", ["curriculum-item-body"]);
    div1.appendChild(img);

    let p1 = createHtmlElement("p", ["en"]);
    p1.innerText = dat.subject.en;

    let p2 = createHtmlElement("p", ["id"]);
    p2.innerText = dat.subject.id;

    let div2 = createHtmlElement("div", ["curriculum-item-footer"]);
    div2.appendChild(p1);
    div2.appendChild(p2);

    let div3 = createHtmlElement("div", ["curriculum-item"]);
    div3.appendChild(div1);
    div3.appendChild(div2);

    return div3;
}

const curriculumContainer = document.getElementById("curriculumContainer");

curriculumData.forEach((dat) => {
    curriculumContainer.appendChild(curriculumItemBuilder(dat));
});



{/* <div class="profession-item">
    Technoprenuer
</div> */}

const professionData = [
    {
        "label": "Technoprenuer",
    },
    {
        "label": "Business Owner",
    },
    {
        "label": "Software Engineer",
    },
    {
        "label": "Data Analyst",
    },
    {
        "label": "QA Enginner",
    },
    {
        "label": "IT Consultant",
    },
    {
        "label": "Cyber Security",
    },
    {
        "label": "Database Administrator",
    },
    {
        "label": "UI Designer",
    },
];

const professionItemBuilder = (dat) => {
    let div = createHtmlElement("div", ["profession-item"]);
    div.innerHTML = dat.label;
    return div;
}

const professionGroupContainer = document.getElementById("professionGroupContainer");

professionData.forEach((dat) => {
    professionGroupContainer.appendChild(professionItemBuilder(dat));
});




const achievementData = [
    {
        "title": "Juara I",
        "type": "mhs",
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
        "type": "mhs",
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
        "type": "mhs",
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
        "type": "mhs",
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
        "type": "mhs",
        "competition": "IoT Development",
        "event": "Manacomp 2023",
        "time": "12 Juni 2023",
        "participants": [
            "220010201 - Kasih Aminah",
            "220011503 - Zulfikar Jamilah",
            "220000223 - Anwar Agung",
        ],
    },
    {
        "title": "Honorable Mention",
        "type": "mhs",
        "competition": "IoT Development",
        "event": "Manacomp 2023",
        "time": "12 Juni 2023",
        "participants": [
            "220020222 - Yuda Nirmala",
            "220015900 - Putra Irfan",
            "220012469 - Irfan Daud",
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
        let member1 = createHtmlElement("div", ["member-group"]);
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

