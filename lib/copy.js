// lib/copy.js — todo el copy visible de la landing. Lituano, adaptado para
// loncherafeliz.aprende-hoy.shop. Cualquier cambio de texto ocurre čia (aquí).

export const copy = {
  metadata: {
    title:
      "Sveiki užkandžiai vaikams | 500 greitų ir skanių receptų",
    description:
      "Atraskite 500 sveikų vaikiškų užkandžių receptų, paruošiamų greičiau nei per 15 minučių. Pridedami 9 nemokami priedai. Ypatingas pasiūlymas: 8.90 €.",
    productName: "Sveikų vaikiškų užkandžių vadovas",
  },

  hero: {
    urgencyBar:
      "⚡ RIBOTO LAIKO PASIŪLYMAS! Tik šiandien: 95% nuolaida",
    badge: "Paruošiama greičiau nei per 15 min.",
    headline: {
      before: "Pakeiskite savo vaikų mitybą ",
      accent: "sveikais užkandžiais",
      after: ", kurie yra ir greitai paruošiami, ir be galo skanūs",
    },
    subheadline:
      "Lengvi ir maistingi receptai, kuriuos jūsų mažieji pamils – puikiai tiks ir mokyklai, ir namams. 500 idėjų, kaip pasirūpinti jų sveikata negaištant brangaus laiko!",
    ctaLabel: "Pirkite dabar ir sutaupykite 95%!",
    starsAriaLabel: "5 Å¾vaigÅ¾dutÄs",
    socialProof: "+5 000 patenkintÅ³ Å¡eimÅ³",
    trustChips: [
      { icon: "🥗", text: "500 receptų" },
      { icon: "🎁", text: "Dovanų priedų už daugiau nei 90 €" },
      { icon: "🛡️", text: "14 dienų pinigų grąžinimo garantija" },
    ],
    image: {
      src: "/hero-snacks.webp",
      alt: "Transformacija nuo greitojo maisto prie sveikų užkandžių per mažiau nei 15 minučių",
    },
    floatingBadges: {
      speed: { icon: "⏱️", top: "Paruošiama per", bottom: "15 min." },
      discount: { icon: "💚", top: "95%", bottom: "nuolaida" },
    },
  },

  story: {
    kicker: "Mūsų istorija",
    paragraphs: [
      "Jūsų vaikas valgo kelis kartus per dieną, o tai, ką jis suvalgo, tiesiogiai veikia jo sveikatą, energiją ir nuotaiką.",
      "Retkarčiais suvalgytas sausainis nėra bėda. Problema atsiranda tada, kai dėl laiko ar idėjų trūkumo tai tampa kasdienybe.",
      "Ne todėl, kad jums nerūpėtų. Tiesiog po ilgos dienos, tarp nuovargio, namų ruošos ir tūkstančio kitų darbų, kartais norisi ko nors greito ir paprasto.",
      "„SVEIKI UŽKANDŽIAI VAIKAMS“ buvo sukurtas būtent tokiems tėvams, kurie rūpinasi savo vaikų sveikata, tačiau ieško praktiškų sprendimų, o ne sudėtingų receptų ir neįgyvendinamų idėjų.",
    ],
  },

  benefits: {
    kicker: "Pagrindiniai privalumai",
    headline: "Su Sveikų vaikiškų užkandžių vadovu visam laikui atsisveikinsite su...",
    items: [
      {
        icon: "🍪",
        title: "Nesveiku maistu",
        desc: "Greiti receptai iš natūralių ingredientų, be dirbtinių priedų ir konservantų.",
      },
      {
        icon: "⏱️",
        title: "Laiko trūkumu",
        desc: "Receptai, paruošiami vos per 15 minučių, idealiai tinkantys užimtiems žmonėms.",
      },
      {
        icon: "🥦",
        title: "Nerimu dėl vaikų mitybos",
        desc: "Užkandžiai, kupini svarbiausių vitaminų ir mineralų, kuriuos visi tiesiog dievins.",
      },
      {
        icon: "😩",
        title: "Stresu gaminant sudėtingus patiekalus",
        desc: "Gardūs receptai, dėl kurių jūsų artimieji su nekantrumu lauks jūsų paruošto maisto.",
      },
    ],
  },

  transformation: {
    kicker: "Transformacija, kurios ieškote",
    headline: "Pamatykite, kaip pasikeis jūsų vaikų mityba ir energijos lygis",
    before: {
      tag: "PRIEŠ",
      title: "Jokios energijos ir maistinės vertės",
      desc: "Perdirbtas maistas, pilnas cukraus ir priedų, neduodantis jokios naudos",
    },
    after: {
      tag: "PO",
      title: "Laimingi, gyvybingi ir kupini energijos",
      desc: "Natūralūs, skanūs ir maistingi užkandžiai, kuriuos vaikai tiesiog dievina",
    },
    image: {
      src: "/kids-transformation.webp",
      alt: "Transformacija: liūdnas vaikas valgantis nesveiką maistą, ir laimingas vaikas su sveikais užkandžiais",
    },
  },

  samples: {
    headline: "Atsispirti neįmanomi receptai, kuriuos jie pamils",
    subheadline:
      "Pažvelkite į nedidelę dalį gardžių receptų, kuriuos rasite šioje elektroninėje knygoje",
    items: [
      {
        image: "/recipe-pancakes.webp",
        title: "Sveiki blynai",
        desc: "Purūs ir auksiniai, su šviežiais vaisiais ir tikru medumi",
      },
      {
        image: "/recipe-pizza.webp",
        title: "Pica be glitimo",
        desc: "Skani pica su šviežiomis daržovėmis ir lydytu sūriu",
      },
      {
        image: "/recipe-smoothies.webp",
        title: "Natūralūs glotnučiai",
        desc: "Spalvingi vaisių glotnučiai, kurie juos sužavės",
      },
      {
        image: "/recipe-cookies.webp",
        title: "Avižiniai sausainiai",
        desc: "Traškūs naminiai sausainiai su avižiniais dribsniais ir migdolais",
      },
    ],
    footnote: "Visi 500 receptų laukia jūsų pilnoje elektroninėje knygoje",
  },

  testimonials: {
    kicker: "ĮRODYTI REZULTATAI",
    headline: "Daugiau nei 5000 šeimų jau pakeitė savo mitybos įpročius",
    subheadline:
      "Prisijunkite prie tūkstančių tėvų, kurie jau mėgaujasi sveikesniu maistu be jokio streso",
    rating: 5,
    ratingLabel: "5/5",
    reviewCount: "150 atsiliepimų",
    items: [
      {
        initial: "G",
        name: "Giedrė",
        role: "dviejų mažų vaikų mama",
        quote:
          "Niekada netikėjau, kad mano sūnus taip greitai pamėgs sveikus užkandžius! Receptai ne tik labai paprasti, bet ir beprotiškai jam patinka. Ačiū, kad palengvinote mano gyvenimą! Geriausia investicija, kokią esu padariusi.",
      },
      {
        initial: "T",
        name: "Tomas",
        role: "trijų vaikų tėtis",
        quote:
          "Anksčiau labai jaudinausi dėl to, ką duodu savo vaikams, bet su šia knyga atradau neįtikėtinai skanių ir sveikų alternatyvų. Dabar visi maitinamės pilnavertiškiau ir esu kur kas ramesnis!",
      },
      {
        initial: "E",
        name: "Eglė",
        role: "mitybos specialistė ir mama",
        quote:
          "Kaip specialistė galiu patvirtinti, kad šie receptai yra idealiai subalansuoti. Mano vaikai juos dievina, o aš esu rami, žinodama, kad jie valgo sveikai. Nuoširdžiai rekomenduoju kiekvienam tėvui!",
      },
      {
        initial: "D",
        name: "Dovilė",
        role: "dirbanti mama",
        quote:
          "Dėl įtempto grafiko neturėjau jokio laiko gaminti. Ši knyga pakeitė viską: receptai per 15 minučių, kurių vaikai prašo vėl ir vėl. Verta kiekvieno cento! Jau rekomendavau ją visoms savo draugėms.",
      },
    ],
  },

  whatYouGet: {
    kicker: "KAS ĮSKAIČIUOTA?",
    headline: "Viskas, ką rasite šioje nuostabioje elektroninėje knygoje",
    subheadline: "Išsamus sveikos vaikų mitybos vadovas",
    items: [
      "500 greitų ir maistingų receptų pusryčiams, pietums, vakarienei ir mokyklos užkandžiams",
      "Paruošti savaitės valgiaraščiai ir ekonomiški pirkinių sąrašai",
      "Idėjos idealiam pusryčių, užkandžių ir vakarienės derinimui",
      "Lengvai suprantamos gaminimo instrukcijos žingsnis po žingsnio",
      "Sveikų alternatyvų sąrašas, kai po ranka neturite reikiamo ingrediento",
      "Nemokami atnaujinimai su naujais receptais ir valgiaraščiais",
      "Ir dar daug visko…",
    ],
    footnote: {
      line1: "Ir tai dar ne viskas...",
      line2: "Yra ir daugiau!",
      line3: "Taip pat gausite...",
    },
  },

  bonuses: {
    flagline: "🔥 TIK ŠIANDIEN!",
    headline: "Pirkdami dabar, gaukite NEMOKAMŲ priedų už daugiau nei 90 €",
    subheadline:
      "Bendra 92.95 € vertė — visiškai JŪSŲ DOVANA su šios dienos pirkiniu!",
    badgeLabel: "NEMOKAMAI",
    valueLabel: "Vertė:",
    items: [
      {
        value: "27.99 €",
        title: "Keksiukų ir picų be cukraus ir glitimo receptai",
        desc: "Paruoškite sveikas jų mėgstamo maisto versijas be pridėtinio cukraus ir glitimo – vos per kelias minutes.",
      },
      {
        value: "19.99 €",
        title: "Praktinis maisto planavimo ir šaldymo vadovas",
        desc: "Išmokite pasiruošti viską iš anksto ir turėti paruoštą maistą visai savaitei, skirdami tam mažiau nei 30 minučių per dieną.",
      },
      {
        value: "14.99 €",
        title: "Specialūs receptai alergiškiems vaikams",
        desc: "Saugūs ir skanūs receptai, pritaikyti prie dažniausiai pasitaikančių alergijų (pienui, kiaušiniams, sojai, žemės riešutams).",
      },
      {
        value: "14.99 €",
        title: "Gardžių ir sveikų desertų receptai",
        desc: "Pakeiskite pramoninius saldumynus sveikais skanėstais, pagamintais išimtinai iš natūralių ingredientų.",
      },
      {
        value: "14.99 €",
        title: "Sveikos ir lengvai paruošiamos šviežios sultys",
        desc: "Praktiški natūralių, maistingų ir skanių sulčių receptai, kurie atgaivins jūsų artimųjų dieną.",
      },
    ],
    totalLabel: "🎁 Bendra priedų vertė: 92.95 €",
    totalCta: "GAUSITE JUOS VISIŠKAI NEMOKAMAI SU SAVO ŠIOS DIENOS PIRKINIU!",
  },

  exclusiveBonuses: {
    kicker: "BE TO... ⭐ EKSKLIUZYVINIAI PRIEDAI!",
    headline: "Tik šiandien! Gaukite ir šiuos papildomus ekskliuzyvinius priedus",
    subheadline: "kad transformuotumėte savo vaikų sveikatą",
    badgeLabel: "NEMOKAMAI",
    valueLabel: "Vertė:",
    items: [
      {
        value: "18.99 €",
        title: "Naminiai vaisiniai guminukai, turtingi vitamino C",
        desc: "Išmokite gaminti natūralius guminukus, kupinus vitamino C, kad smagiai ir skaniai sustiprintumėte savo vaikų imunitetą. Be pridėtinio cukraus, 100 % natūralūs ir kupini maistingųjų medžiagų!",
      },
      {
        value: "19.99 €",
        title: "Kaip priversti vaikus pamilti daržoves",
        desc: "Paverskite daržoves skaniu ir smagiu nuotykiu savo vaikams. Lengvi receptai, padėsiantys jiems valgyti daržoves su didžiausiu malonumu.",
      },
      {
        value: "17.99 €",
        title: "Greitų užkandžių vadovas nevalgiems vaikams",
        desc: "Atraskite lengvus ir maistingus užkandžius, tobulai tinkančius išrankiems valgytojams – jie padės vaikams maitintis sveikai ir skaniai.",
      },
      {
        value: "17.99 €",
        title: "Supermaisto vadovas vaikams",
        desc: "Sužinokite, kaip įtraukti supermaistą, kuris pagerins jūsų vaikų sveikatą ir energijos lygį, pasitelkiant paprastus receptus, aprūpinančius svarbiausiomis maistinėmis medžiagomis.",
      },
    ],
    totalLabel: "🎁 Bendra VISŲ priedų vertė: 167.91 €",
    totalCta: "GAUSITE JUOS VISIŠKAI NEMOKAMAI SU SAVO ŠIOS DIENOS PIRKINIU!",
  },

  finalCta: {
    flagline: "⏰ PASIŪLYMAS GALIOJA TIK ŠIANDIEN!",
    headline: "Pilnas paketas, kurio vertė 201 €",
    subheadline: "Šiandien įsigykite jį su net 95% nuolaida",
    regularPriceLabel: "Įprasta kaina:",
    regularPrice: "201.00 €",
    offerPrice: "8.90 €",
    bundleList: [
      "✅ 500 sveikų užkandžių receptų (vertė 34 €)",
      "✅ 9 ekskliuzyviniai priedai, kurių vertė 167.91 € — VISIŠKAI NEMOKAMAI!",
      "✅ Receptai, paruošiami greičiau nei per 15 minučių",
      "✅ Momentinė prieiga visam gyvenimui",
      "✅ 14 dienų pinigų grąžinimo garantija",
    ],
    button: "Pirkite dabar ir sutaupykite 95%!",
    trustRow: "🔒 100% saugus mokėjimas • ⚡ Momentinė prieiga • ✅ 14 dienų garantija",
    bonusesBadge: "✓ 9 NEMOKAMI PRIEDAI",
    discountStickerLabel: "Tik šiandien",
    discountStickerValue: "-95%",
    imageAlt:
      "Pilnas paketas: Elektroninė knyga Sveiki užkandžiai vaikams + 9 Priedai",
    image: "/mockup-cta.webp",
  },

  guarantee: {
    headline: "Jūsų pirkinys 100% apsaugotas mūsų 14 dienų garantija",
    tag: "JOKIOS RIZIKOS",
    body: "Esame tokie tikri, kad šis vadovas jums patiks, jog siūlome besąlygišką 14 dienų garantiją. Jei dėl kokios nors priežasties nebūsite 100% patenkinti, grąžinsime jums kiekvieną centą. Jokių papildomų klausimų ir jokių problemų.",
    footer: "✅ Garantuotas pilnas pinigų grąžinimas • ✅ Jokių papildomų klausimų • ✅ Momentinis procesas",
  },

  faq: {
    kicker: "DUK",
    headline: "Dažniausiai užduodami klausimai",
    items: [
      {
        q: "Kokiai amžiaus grupei skirtas šis vadovas?",
        a: "Vadovas skirtas vaikams nuo 2 iki 12 metų, nors receptus galima lengvai pritaikyti absoliučiai bet kokiam amžiui.",
      },
      {
        q: "Ar tinka alergiškiems vaikams?",
        a: "Taip! Siūlome receptus, pritaikytus prie dažniausiai pasitaikančių alergijų, tokių kaip pienui, kiaušiniams, sojai ir žemės riešutams, kad visi vaikai galėtų mėgautis skaniu ir sveiku maistu.",
      },
      {
        q: "Ar turiu mokėti gerai gaminti?",
        a: "Ne, receptai sukurti taip, kad juos būtų kuo lengviau sekti, naudojant mažai ingredientų ir paprastus žingsnius. Net jei nesate virtuvės šefas, jums puikiai pavyks!",
      },
      {
        q: "Ar ingredientai brangūs?",
        a: "Ne, visi ingredientai yra prieinami ir lengvai randami bet kuriame standartiniame prekybos centre. Jums nereikės ieškoti brangių ar sunkiai randamų produktų.",
      },
      {
        q: "Kiek laiko trunka paruošti užkandžius?",
        a: "Receptai yra itin greiti, o dauguma užkandžių paruošiami greičiau nei per 15 minučių.",
      },
      {
        q: "Ar galiu mokėti savo vietine valiuta?",
        a: "Taip! Mūsų mokėjimo sistema automatiškai konvertuoja sumą pagal jūsų vietinės valiutos kursą. Pereidami prie apmokėjimo matysite kainą, pritaikytą jūsų valiutai, todėl nereikės jaudintis dėl papildomų valiutos keitimo mokesčių. Garantuojame, kad mokėjimo procesas bus paprastas ir visiškai skaidrus, nepriklausomai nuo jūsų buvimo vietos.",
      },
    ],
  },

  closing: {
    kicker: "PASKUTINIS ŠANSAS! ⚡ Šis pasiūlymas netrukus baigsis",
    headline:
      "Nepraleiskite šios unikalios progos transformuoti savo šeimos mitybą!",
    subheadline:
      "Pilnas vadovas + 9 Priedai, kurių vertė 167.91 €, DOVANŲ! Visa tai už vienos vakarienės mieste kainą",
    regularPrice: "201.00 €",
    offerPrice: "8.90 €",
    ctaLabel: "TAIP, NORIU SAVO VADOVO DABAR!",
    trustRow:
      "🔒 100% saugus mokėjimas • ⚡ Momentinė prieiga • ✅ 14 dienų pinigų grąžinimo garantija be jokios rizikos",
  },

  footer: {
    madeWith: "Sukurta su",
    forWho: "sveikoms šeimoms",
    copyright: "© 2026 Sveiki užkandžiai. Visos teisės saugomos.",
  },

  stickyCta: {
    label: "8.90 €",
    ctaLabel: "Pirkite dabar ir sutaupykite 95%!",
    urgency: "⚡ Riboto laiko pasiūlymas",
  },
};