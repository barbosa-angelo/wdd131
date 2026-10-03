const hamButton = document.querySelector('#menu');

hamButton.addEventListener('click', () => {
    document.querySelector("h1").classList.toggle("open");
    document.querySelector(".navigation").classList.toggle("open");
    hamButton.classList.toggle('open');
});

function toggleActive(element) {
    document.querySelectorAll("a").forEach(link => {
        link.classList.remove("active");
    })
    element.classList.add("active");
}

document.querySelector("#all").addEventListener("click", () => {
    toggleActive(document.querySelector("#all"));
    createTempleCard(templos);
});

document.querySelector("#old").addEventListener("click", () => {
    toggleActive(document.querySelector("#old"));
    createTempleCard(templos.filter(templo => new Date(templo.consagracao) < new Date("1900-01-01")));
});

document.querySelector("#new").addEventListener("click", () => {
    toggleActive(document.querySelector("#new"));
    createTempleCard(templos.filter(templo => new Date(templo.consagracao) >= new Date("2000-01-01")));
});

document.querySelector("#large").addEventListener("click", () => {
    toggleActive(document.querySelector("#large"));
    createTempleCard(templos.filter(templo => templo.area >= 90000));
});

document.querySelector("#small").addEventListener("click", () => {
    toggleActive(document.querySelector("#small"));
    createTempleCard(templos.filter(templo => templo.area < 10000));
});

const templos = [
    {
        nomeDoTemplo: "Aba Nigeria",
        localizacao: "Aba, Nigéria",
        consagracao: "2005-08-07",
        area: 11500,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Manti Utah",
        localizacao: "Manti, Utah, Estados Unidos",
        consagracao: "1888-05-21",
        area: 74792,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Payson Utah",
        localizacao: "Payson, Utah, Estados Unidos",
        consagracao: "2015-06-07",
        area: 96630,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Yigo Guam",
        localizacao: "Yigo, Guam",
        consagracao: "2020-05-02",
        area: 6861,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        nomeDoTemplo: "Washington D.C.",
        localizacao: "Kensington, Maryland, Estados Unidos",
        consagracao: "1974-11-19",
        area: 156558,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        nomeDoTemplo: "Lima Peru",
        localizacao: "Lima, Peru",
        consagracao: "1986-01-10",
        area: 9600,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Cidade do México, México",
        localizacao: "Cidade do México, México",
        consagracao: "1983-12-02",
        area: 116642,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "São Paulo, Brasil",
        localizacao: "São Paulo, Brasil",
        consagracao: "1978-10-30",
        area: 59246,
        urlDaImagem:
            "https://churchofjesuschristtemples.org/assets/img/temples/sao-paulo-brazil-temple/sao-paulo-brazil-temple-46816.jpg"
    },
    {
        nomeDoTemplo: "Recife, Brasil",
        localizacao: "Recife, Pernambuco, Brasil",
        consagracao: "2000-12-15",
        area: 37200,
        urlDaImagem:
            "https://churchofjesuschristtemples.org/assets/img/temples/recife-brazil-temple/recife-brazil-temple-54574.jpg"
    },
    {
        nomeDoTemplo: "Belém, Brasil",
        localizacao: "Belém, Pará, Brasil",
        consagracao: "2022-11-20",
        area: 28675,
        urlDaImagem:
            "https://churchofjesuschristtemples.org/assets/img/temples/belem-brazil-temple/belem-brazil-temple-31310.jpg"
    },
];

createTempleCard(templos);

function createTempleCard(templos) {
    document.querySelector(".galery").innerHTML = "";

    templos.forEach(templo => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = templo.nomeDoTemplo;
        location.innerHTML = `<span class="label">Localização:</span> ${templo.localizacao}`;
        dedication.innerHTML = `<span class="label">Dedicação:</span> ${templo.consagracao}`;
        area.innerHTML = `<span class="label">Tamanho:</span> ${templo.area} sq ft`;
        img.setAttribute("src", templo.urlDaImagem);
        img.setAttribute("alt", `Templo ${templo.nomeDoTemplo}`);
        img.setAttribute("loading", "lazy");

        card.classList.add("card")
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".galery").appendChild(card);
    });
}


