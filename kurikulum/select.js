const data = [
    {
        "sem": "sem1",
        "type": "Mandatory",
        "credit": 4,
        "subject": "Matematika Komputer I",
        "code": "IF230001",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor magna.",
    },
    {
        "sem": "sem1",
        "type": "Mandatory",
        "credit": 4,
        "subject": "Pemrograman I",
        "code": "IF230002",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },
    {
        "sem": "sem1",
        "type": "Mandatory",
        "credit": 4,
        "subject": "Teknologi Informasi dan Komunikasi",
        "code": "IF230003",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },
    {
        "sem": "sem1",
        "type": "Mandatory",
        "credit": 4,
        "subject": "Computer English",
        "code": "IF230004",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },
    {
        "sem": "sem1",
        "type": "Mandatory",
        "credit": 4,
        "subject": "Teknik Kolaborasi Efektif",
        "code": "IF230005",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },

    {
        "sem": "sem2",
        "type": "Mandatory",
        "credit": 4,
        "subject": "Matematika Komputer II",
        "code": "IF230011",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor magna.",
    },
    {
        "sem": "sem2",
        "type": "Mandatory",
        "credit": 4,
        "subject": "Pemrograman II",
        "code": "IF230012",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },
    {
        "sem": "sem2",
        "type": "Mandatory",
        "credit": 4,
        "subject": "Elektronika",
        "code": "IF230013",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },
    {
        "sem": "sem2",
        "type": "Mandatory",
        "credit": 4,
        "subject": "Pemrograman Web I",
        "code": "IF230014",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },
    {
        "sem": "sem2",
        "type": "Mandatory",
        "credit": 4,
        "subject": "Pengembangan Diri",
        "code": "IF230015",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },

    {
        "sem": "sem3",
        "type": "Mandatory",
        "credit": 4,
        "subject": "Statistika",
        "code": "IF230021",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor magna.",
    },
    {
        "sem": "sem3",
        "type": "Mandatory",
        "credit": 4,
        "subject": "Pemrograman III",
        "code": "IF230022",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },
    {
        "sem": "sem3",
        "type": "Mandatory",
        "credit": 4,
        "subject": "Pengembangan IoT dan Robotika",
        "code": "IF230023",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },
    {
        "sem": "sem3",
        "type": "Mandatory",
        "credit": 4,
        "subject": "Pemrograman Web II",
        "code": "IF230024",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },
    {
        "sem": "sem3",
        "type": "Mandatory",
        "credit": 4,
        "subject": "Design Thinking",
        "code": "IF230025",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },

    {
        "sem": "sem4",
        "type": "Mandatory",
        "credit": 4,
        "subject": "Pemrograman Game I",
        "code": "IF230031",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor magna.",
    },
    {
        "sem": "sem4",
        "type": "Mandatory",
        "credit": 4,
        "subject": "Kecerdasan Buatan & Pembelajaran Mesin",
        "code": "IF230032",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },
    {
        "sem": "sem4",
        "type": "Mandatory",
        "credit": 4,
        "subject": "Public Speaking",
        "code": "IF230033",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },
    {
        "sem": "sem4",
        "type": "Mandatory",
        "credit": 4,
        "subject": "Bisnis Digital",
        "code": "IF230034",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },
    {
        "sem": "sem4",
        "type": "Mandatory",
        "credit": 4,
        "subject": "Computational Thinking",
        "code": "IF230035",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },

    {
        "sem": "sem5",
        "type": "Mandatory",
        "credit": 4,
        "subject": "Pemrograman Game II",
        "code": "IF230041",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor magna.",
    },
    {
        "sem": "sem5",
        "type": "Mandatory",
        "credit": 4,
        "subject": "Deep Learning",
        "code": "IF230042",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },
    {
        "sem": "sem5",
        "type": "Mandatory",
        "credit": 4,
        "subject": "Metodologi Penelitian",
        "code": "IF230043",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },
    {
        "sem": "sem5",
        "type": "Mandatory",
        "credit": 4,
        "subject": "Startup",
        "code": "IF230044",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },
    {
        "sem": "sem5",
        "type": "Mandatory",
        "credit": 4,
        "subject": "Sistem Informasi",
        "code": "IF230045",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },

    {
        "sem": "sem6",
        "type": "Mandatory",
        "credit": 4,
        "subject": "Business English",
        "code": "IF230051",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor magna.",
    },
    {
        "sem": "sem6",
        "type": "Mandatory",
        "credit": 4,
        "subject": "Negosiasi",
        "code": "IF230052",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },
    {
        "sem": "sem6",
        "type": "Mandatory",
        "credit": 4,
        "subject": "Pilihan I",
        "code": "IF230053",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },
    {
        "sem": "sem6",
        "type": "Mandatory",
        "credit": 4,
        "subject": "Pilihan II",
        "code": "IF230054",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },
    {
        "sem": "sem6",
        "type": "Mandatory",
        "credit": 4,
        "subject": "Pilihan III",
        "code": "IF230055",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },

    {
        "sem": "sem7",
        "type": "Mandatory",
        "credit": 4,
        "subject": "Leadership",
        "code": "IF230061",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor magna.",
    },
    {
        "sem": "sem7",
        "type": "Mandatory",
        "credit": 4,
        "subject": "Komunikasi",
        "code": "IF230062",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },
    {
        "sem": "sem7",
        "type": "Mandatory",
        "credit": 4,
        "subject": "Pilihan I",
        "code": "IF230063",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },
    {
        "sem": "sem7",
        "type": "Mandatory",
        "credit": 4,
        "subject": "Pilihan II",
        "code": "IF230064",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },
    {
        "sem": "sem7",
        "type": "Mandatory",
        "credit": 4,
        "subject": "Pilihan III",
        "code": "IF230065",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },

    {
        "sem": "opt",
        "type": "Optional",
        "credit": 4,
        "subject": "Pemrograman Mobile",
        "code": "IF230101",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor magna.",
    },
    {
        "sem": "opt",
        "type": "Optional",
        "credit": 4,
        "subject": "Pemrograman Desktop",
        "code": "IF230102",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },
    {
        "sem": "opt",
        "type": "Optional",
        "credit": 4,
        "subject": "Assembly",
        "code": "IF230103",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },
    {
        "sem": "opt",
        "type": "Optional",
        "credit": 4,
        "subject": "UI/UX",
        "code": "IF230104",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },
    {
        "sem": "opt",
        "type": "Optional",
        "credit": 4,
        "subject": "Arsitektur Komputer",
        "code": "IF230105",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },
    {
        "sem": "opt",
        "type": "Optional",
        "credit": 4,
        "subject": "Cyber Security",
        "code": "IF230105",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },
    {
        "sem": "opt",
        "type": "Optional",
        "credit": 4,
        "subject": "Data Engineering",
        "code": "IF230106",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },
    {
        "sem": "opt",
        "type": "Optional",
        "credit": 4,
        "subject": "Research Writing",
        "code": "IF230107",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },
    {
        "sem": "opt",
        "type": "Optional",
        "credit": 4,
        "subject": "Java",
        "code": "IF230108",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis dolor condimentum, lacinia enim vitae, porttitor",
    },
];


const subjectCardGenerator = (data) => {
    let h3 = document.createElement("h3");
    h3.innerText = data.subject;

    let h4 = document.createElement("h4");
    h4.innerText = data.code;

    let divSubjectName = document.createElement("div");
    divSubjectName.classList.add("subject-name");
    divSubjectName.appendChild(h3);
    divSubjectName.appendChild(h4);

    let pdesc = document.createElement("p");
    pdesc.classList.add("description");
    pdesc.innerText = data.description;

    let pcredit = document.createElement("p");
    pcredit.classList.add("credit");
    pcredit.innerText = data.credit + " Credit" + (data.credit > 1 ? "s" : "");

    let divSubjectBody = document.createElement("div");
    divSubjectBody.classList.add("subject-body");
    divSubjectBody.appendChild(divSubjectName);
    divSubjectBody.appendChild(pdesc);
    divSubjectBody.appendChild(pcredit);

    let divSubjectHeader = document.createElement("div");
    divSubjectHeader.classList.add("subject-header");
    divSubjectHeader.classList.add("flex");
    divSubjectHeader.classList.add("flex-row");
    divSubjectHeader.classList.add("flex-center");
    divSubjectHeader.innerText = data.type;

    let divSubjectCard = document.createElement("div");
    divSubjectCard.classList.add("subject-card");
    divSubjectCard.appendChild(divSubjectHeader);
    divSubjectCard.appendChild(divSubjectBody);

    return divSubjectCard;
}


const selectItems = document.querySelectorAll(".selectable-item");
const contentDiv = document.getElementById("content");

let selectedId = "sem1";


const timeOuts = [];

const renderContainer = () => {
    timeOuts.forEach((timeOut) => {
        clearTimeout(timeOut);
    })
    contentDiv.innerHTML = null;
    let delay = 50;
    data.forEach((dat) => {
        if (dat.sem === selectedId) {
            let thisTimeout = setTimeout(() => {
                contentDiv.appendChild(subjectCardGenerator(dat));
            }, delay += 225);
            timeOuts.push(thisTimeout);
        }
    });
}

const rerender = (selectedId) => {
    selectItems.forEach((selectItem) => {
        if (selectItem.classList.contains("_child")) {
            selectItem = selectItem.parentElement;
        }
        if (selectItem.id === selectedId) {   
            selectItem.classList.add("selected");
        } else {
            if (selectItem.classList.contains("selected")) selectItem.classList.remove("selected");
        }
    });
    renderContainer(selectedId);
}

const fun = (e) => {
    selectedId = e.target.id;
    if (e.target.classList.contains("_child")) {
        selectedId = e.target.parentElement.id;
    }
    if (selectedId) {
        rerender(selectedId);
    }
}

selectItems.forEach((selectItem) => {
    selectItem.addEventListener('click', fun);
});


rerender(selectedId);
