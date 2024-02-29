BJ = () => it(og, {
    children: [it(bi.div, {
        variants: gw(),
        children: [le("span", {
            className: "hash-span",
            id: "examples",
            children: " "
        }), le("h2", {
            className: `${pr.sectionHeadText}`,
            children: "Portofolio."
        })]
    }), le("div", {
        className: "w-full flex",
        children: it(bi.p, {
            variants: Qg("", "", .1, 1),
            className: "mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]",
            children: ["Die folgenden Projekte sind einige frühere Arbeiten unseres Teams. Dies sind nur wenige Beispiele aus unserem umfangreichen Portfolio, in dem wir mit Kunden aus der ganzen Welt zusammengearbeitet haben.", le("br", {}), "Unser Team verfügt über viele Jahre Erfahrung in verschiedenen Programmiersprachen."]
        })
    }), le("div", {
        className: "mt-20 flex flex-wrap",
        children: jj.map((n, e) => le(TJ, {
            index: e,
            ...n
        }, `project-${e}`))
    })]
}),
PJ = tc(BJ),
RJ = ({
    index: n,
    name: e,
    description: t,
    package_01: i,
    package_01_price: r,
    package_02: s,
    package_02_price: o,
    points_heading: a,
    points: l
}) => le(bi.div, {
    variants: Qg("up", "spring", n * .5, .75),
    className: "w-full xl:w-1/3 lg:w-1/3 md:w-2/4 sm:w-full md:px-4 p-0 w-full mb-6",
    children: it("div", {
        className: "bg-tertiary rounded-2xl p-5",
        children: [it("div", {
            className: "mb-3",
            children: [le("h3", {
                className: "text-white font-bold text-[24px]",
                children: e
            }), le("p", {
                className: "mt-2 text-white text-[14px]",
                children: t
            })]
        }), it("div", {
            className: "flex justify-between mb-2 pb-2",
            children: [le("p", {
                className: "font-bold text-[#D0B870] text-[16px] pr-4",
                children: i
            }), le("span", {
                className: "text-white text-[14px]",
                children: r
            })]
        }), le("hr", {}), it("div", {
            className: "flex justify-between mt-2 mb-2 pb-2",
            children: [le("p", {
                className: "font-bold text-[#D0B870] text-[16px]",
                children: s
            }), le("span", {
                className: " text-white text-[14px]",
                children: o
            })]
        }), le("h3", {
            className: "text-white font-bold text-[20px] mb-4",
            children: a
        }), le("ul", {
            className: "mt-5 list-disc ml-5 packages_options",
            children: l.map((c, d) => le("li", {
                className: "text-white-100 text-[14px] pl-1 tracking-wider",
                children: c
            }, `packages-point-${d}`))
        })]
    })
})

jj = [{
    name: "Boxa Travel",
    description: "Boxatravel ist eine auf Web 3.0 basierende Reisebuchungsmaschine, die Krypto-Zahlungen sowie ein Empfehlungssystem zum Sammeln von Punkten unterstützt.",
    tags: [{
        name: "PHP",
        color: "blue-text-gradient"
    }, {
        name: "MYSQL",
        color: "green-text-gradient"
    }, {
        name: "tailwind",
        color: "pink-text-gradient"
    }],
    image: kj,
    source_code_link: "https://www.boxatravel.com/"
}, {
    name: "Farmateket",
    description: "Farmateket ist der norwegische Online-Shop Nr. 1 für Nahrungsergänzungsmittel mit fast allen verfügbaren Zahlungsoptionen, darunter Paypal, Klarna, Swrill usw.",
    tags: [{
        name: "PHP",
        color: "blue-text-gradient"
    }, {
        name: "MYSQL",
        color: "green-text-gradient"
    }, {
        name: "Bootstrap",
        color: "pink-text-gradient"
    }],
    image: Nj,
    source_code_link: "https://www.farmateket.no/nettbutikk/Give/"
}, {
    name: "Valley of Health",
    description: "Valley of Health ist ein einzigartiger Superstore für Nahrungsergänzungsmittel mit Sitz in den USA. Die komplette E-Commerce-Lösung wird in WordPress entwickelt und in alle wichtigen Zahlungsgateways integriert.",
    tags: [{
        name: "WordPress",
        color: "blue-text-gradient"
    }, {
        name: "WooCommerce",
        color: "green-text-gradient"
    }, {
        name: "Elementor",
        color: "pink-text-gradient"
    }],
    image: Oj,
    source_code_link: "https://valleyofhealth.net/"
}, {
    name: "Early Birds Properties",
    description: "Ein umfassendes Immobilienportal auf Basis von WordPress, das alle Bedürfnisse von Immobilieneigentümern und Kunden abdeckt. Es handelt sich um ein in Dubai ansässiges Unternehmen.",
    tags: [{
        name: "WordPress",
        color: "blue-text-gradient"
    }, {
        name: "MYSQL",
        color: "green-text-gradient"
    }, {
        name: "Elementor",
        color: "pink-text-gradient"
    }],
    image: Uj,
    source_code_link: "https://earlybirdsproperties.com/"
}, {
    name: "Car Help Line",
    description: "Ein einzigartiges Konzept für Pannenhilfe und Autoreparaturen. Zusammen mit den iPhone- und Andriod-Anwendungen wird eine umfassende Laravel-basierte Web-App entwickelt.",
    tags: [{
        name: "PHP",
        color: "blue-text-gradient"
    }, {
        name: "MYSQL",
        color: "green-text-gradient"
    }, {
        name: "Bootstrap",
        color: "pink-text-gradient"
    }],
    image: zj,
    source_code_link: "https://www.carhelpline.pk/"
}, {
    name: "Photo Boost",
    description: "Ein Snippet, mit dem Sie die Fotos bearbeiten können, ohne die Qualität zu beeinträchtigen. Wir haben die Software auf Basis von Laravel und Python entwickelt.",
    tags: [{
        name: "WordPress",
        color: "blue-text-gradient"
    }, {
        name: "Ocean Wp Theme",
        color: "green-text-gradient"
    }, {
        name: "Elementor",
        color: "pink-text-gradient"
    }],
    image: Gj,
    source_code_link: "https://photoboost.co/"
}]
