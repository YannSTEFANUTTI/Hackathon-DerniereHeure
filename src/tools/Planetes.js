import dagoba from "../assets/img/planetes/dagoba/dagoba_planete.png";
import dagobahPays01 from "../assets/img/planetes/dagoba/dagoba_pic2.jpeg";
import dagobahPays02 from "../assets/img/planetes/dagoba/dagoba_pic4.jpeg";
import grogu from "../assets/img/planetes/dagoba/grogu.png";
import etoilenoire from "../assets/img/planetes/Etoile_noire/etoile_noire_planete.png";
import etoilenoirePays01 from "../assets/img/planetes/Etoile_noire/etoile_noire_pic3.jpeg";
import etoilenoirePays02 from "../assets/img/planetes/Etoile_noire/etoile_noire_pic4.jpeg";
import stormt from "../assets/img/planetes/Etoile_noire/stormt.png";
import miller from "../assets/img/planetes/miller/miller_planete.png";
import millerPays01 from "../assets/img/planetes/miller/miller_pic1.jpeg";
import millerPays02 from "../assets/img/planetes/miller/miller_pic3.webp";
import millerPerso from "../assets/img/planetes/miller/miller_perso.png";
import pandora from "../assets/img/planetes/Pandora/pandora_planete.png";
import pandoraPays01 from "../assets/img/planetes/Pandora/pandora_pic2.jpg";
import pandoraPays02 from "../assets/img/planetes/Pandora/pandora_pic5.jpeg";
import avatars from "../assets/img/planetes/Pandora/avatars.png";
import tatooine from "../assets/img/planetes/Tatooine/tatooine_planete.png";
import tatooinePays01 from "../assets/img/planetes/Tatooine/tatooine_pic1.jpeg";
import tatooinePays02 from "../assets/img/planetes/Tatooine/tatooine_pic4.webp";
import Tusken from "../assets/img/planetes/Tatooine/Tusken.png";
import lv426 from "../assets/img/planetes/LV426/LV-426Plan.png";
import lv426Paysage01 from "../assets/img/planetes/LV426/lv426Paysage01.png";
import lv426Paysage02 from "../assets/img/planetes/LV426/LV426Paysage02.png";
import plan01 from "../assets/img/planetes/plan01/plan01.png";
import plan01Perso from "../assets/img/planetes/plan01/perso06.png";
import plan01Pays01 from "../assets/img/planetes/plan01/plan01Pays01.jpg";
import plan01Pays02 from "../assets/img/planetes/plan01/plan01Pays02.jpg";
import plan02 from "../assets/img/planetes/plan02/plan02.png";
import plan02Perso from "../assets/img/planetes/plan02/perso03.webp";
import plan02Pays01 from "../assets/img/planetes/plan02/plan02Pays01.jpg";
import plan02Pays02 from "../assets/img/planetes/plan02/plan02Pays02.jpg";
import plan03 from "../assets/img/planetes/plan03/plan03.png";
import plan03Perso from "../assets/img/planetes/plan03/perso01.webp";
import plan03Pays01 from "../assets/img/planetes/plan03/plan03Pays01.jpg";
import plan03Pays02 from "../assets/img/planetes/plan03/plan03Pays02.jpg";
import plan04 from "../assets/img/planetes/plan04/plan04.png";
import plan04Perso from "../assets/img/planetes/plan04/perso07.png";
import plan04Pays01 from "../assets/img/planetes/plan04/plan04Pays01.jpg";
import plan04Pays02 from "../assets/img/planetes/plan04/plan04Pays02.jpg";
import plan05 from "../assets/img/planetes/plan05/plan05.png";
import plan05Perso from "../assets/img/planetes/plan05/perso04.webp";
import plan05Pays01 from "../assets/img/planetes/plan05/plan05Pays01.jpg";
import plan05Pays02 from "../assets/img/planetes/plan05/plan05Pays02.png";
import plan06 from "../assets/img/planetes/plan06/plan06.png";
import plan06Perso from "../assets/img/planetes/plan06/perso02.webp";
import plan06Pays01 from "../assets/img/planetes/plan06/plan06Pays01.jpg";
import plan06Pays02 from "../assets/img/planetes/plan06/plan06Pays02.jpg";
import alien01 from "../assets/img/planetes/LV426/alien_01.png";

const Planetes = [
  {
    id: 1,
    planetName: "Tatooine",
    img: tatooine,
    isHidden: false,
    darkFriday: false,
    soldOut: false,
    perso: Tusken,
    photo01: tatooinePays01,
    photo02: tatooinePays02,
    price: 150000,
    stat: [
      { category: "Places restantes", level: 25 },
      { category: "Danger", level: 70 },
      { category: "R??sistance ?? l'Homme", level: 90 },
      { category: "Habitabilit?? - Confort", level: 40 },
    ],
    txt: "Climat et relief : La plan??te ??tait autrefois recouverte d???eau. De nos jours le climat est tr??s sec, la journ??e la temp??rature peut atteindre les 65??C tandis que les soir??es sont tr??s fra??ches, avoisinant les 0??C. Les temp??tes de sables sont fr??quentes et l???eau est rare ce qui oblige l???exploitation de fermes hydroponiques. Ces fermes consistent ?? extraire l???humidit?? de l???atmosph??re (comme Owen Lars et sa femme Beru). Tatooine est parsem??e de d??serts et de canyons o?? vivent les hommes des sables (Tusken) et le Jawas. Les plus c??l??bres sont : La Mer de dune, o?? vivait Ma??tre Kenobi, la Fosse de Carkoon o?? se trouve le Sarlacc, le Jundland, qui est un d??sert rocailleux au bord de la mer de dune, la voie de Xelric (canyon profond pr??s de Mochot), Mochot Steep, (formation rocheuse ch??re aux jawas), la Passe d'Arnthout (une route ?? travers le d??sert de Jundland), Bildor's et Beggar's Canyon (compos?? de Dead Man's Turn, de Diablo's cut et de Eye of the Needle, il s'agit de plusieurs canyons o?? beaucoup testent leur habilet?? ?? piloter un Skyhopper), Desolation Canyon, Ja-mero Ridge, Metta Drop, les Gorges de Jag Crag et Mospic High Range (barri??re rocheuse pr??s de Mos Espa). Les villes et les m??urs : Tatooine compte quelques grandes villes, m??me si la plan??te reste que tr??s peu peupl??e ?? cause de son climat. Les villes sont les centres de repaire des malfrats en tout genre : chasseurs de primes, contrebandiers et autre... Mos Esley est tr??s r??put?? pour sa Cantina (Cantina de Chalmun). On trouve aussi pas mal d???animation sur Mos Espa et Bestine. Les habitants ont ??t?? habitu??s aux courses de Pod (plus tard interdites par l???empire elles seront remplac??es par des combats sur v??hicules ?? le D??molition ??) Anchorhead, Fort Tusken et Motesta ont jou?? un r??le dans l???histoire de la plan??te. Histoire de Tatooine : Les premiers habitants de Tatooine furent des pirates et des contrebandiers (environs en -5000). 800 ans plus tard (-4200) des mineurs d??barqu??rent et fond??rent Ancheread, mais les mines s?????puis??rent et la plan??te tomba ?? l???abandon. En -700 les moines B???Omarr ??tablissent un temple, celui-ci deviendra par la suite le palais de Jabba le Hutt. 100 ans BY les premi??res fermes hydroponiques se construisirent sur Tatooine. Les Jawas nomment ?? la plan??te : Tah Doo Eene, qui sera repris plus commun??ment sous son nom actuel. Bestine est fond?? par Melnea Arnthout et deviendra la capitale officielle de la plan??te. D???autres villes se construisent sur des ruines ou dans le d??sert, comme Fort Tusken (dans le d??sert de Jundland), Motesta (sur les ruines d???Anchorhead), Mos Esley et Mos Espa. 5 ans apr??s l???explosion de la station orbitale Tatoo III (construite par des colons) avec le Obvious Nrivana, les Hutts font leur arriv??e sur Tatooine (-65) et investissent Mos Espa puis chassent les Tusken. Jabba le Hutt fini par h??riter du monast??re B???Omarr et le modifiera constamment (-57). 11ans avant Yavin, l???Empire prendra le contr??le de la plan??te et Tour Aryon sera nomm??e pr??fet. L???Empire rendra Tatooine ?? l???Alliance Rebelle et aux Hutt 12 ans apr??s. Quelques personnages importants sont originaires de Tatooine : Obi-Wan Kenobi (-56, ma??tre Jedi), Anakin Skywalker (-41 connu aussi pour sa victoire ?? la Boonta Eve) ainsi que Gavin et Biggs tous les deux participeront ?? l???Alliance Rebelle.",
  },
  {
    id: 2,
    planetName: "Lea-452",
    img: plan05,
    isHidden: false,
    darkFriday: false,
    soldOut: false,
    perso: plan05Perso,
    photo01: plan05Pays01,
    photo02: plan05Pays02,
    price: 150000,
    stat: [
      { category: "Places restantes", level: 22 },
      { category: "Danger", level: 50 },
      { category: "R??sistance ?? l'Homme", level: 22 },
      { category: "Habitabilit?? - Confort", level: 62 },
    ],
    txt: "L???industrialisation de Lea-452 date de plusieurs si??cles. A sa surface, on peut trouver des mines, des usines, des bureaux et des logements pour les ouvriers. Le sous-sol de la plan??te ressemble ?? un vrai labyrinthe fait de tunnels. C???est Fondor qui eut le privil??ge de construire le premier mod??le du Super Destroyer Stellaire pour l???Empire, apr??s la Bataille de Yavin, au d??triment des chantiers navals de Kuat, habitu?? ?? travailler avec le R??gime de Palpatine. Ce vaisseau allait devenir le croiseur personnel de Darth Vader ; il s???agit de l???Executor. La discr??tion fut de mise pour cette construction ; on ferma tout trafic non militaire, emp??chant les clients habituels de fr??quenter ces chantiers. Apr??s avoir d??sapprouv?? cette action, ils se pli??rent tout de m??me ?? l???exigence du Seigneur Vader. Pouvoir prendre le dessus sur l???industrie de Kuat fut ??galement une motivation. Certains Amiraux de l???Empire d??sapprouv??rent ce projet, assurant qu???il s???agissait d un caprice de Darth Vader. Un conspirateur du nom de Griff, proposa ?? l???Alliance Rebelle de faire entrer un saboteur sur les chantiers de Fondor. S???ils parvenaient ?? d??truire l???Executor, cela an??antirai l???un des plus grands projets du Seigneur Sith.",
  },
  {
    id: 3,
    planetName: "Dagobah",
    img: dagoba,
    isHidden: false,
    darkFriday: false,
    soldOut: false,
    perso: grogu,
    photo01: dagobahPays01,
    photo02: dagobahPays02,
    price: 200000,
    stat: [
      { category: "Places restantes", level: 60 },
      { category: "Danger", level: 50 },
      { category: "R??sistance ?? l'Homme", level: 20 },
      { category: "Habitabilit?? - Confort", level: 70 },
    ],
    txt: "C'est une apparition de Ben Kenobi au jeune Luke Skywalker qui incitera ce dernier ?? aller trouver le vieux Maitre pour suivre une formation de Jedi. Les plus c??l??bres endroits de cette plan??te restent la hutte de Yoda et la Grotte envahie par le c??t?? obscur et o?? Luke ??choua dans son entrainement en se laissant aller ?? la col??re. Dagobah se situe dans le secteur de Sluis dans les territoires de la Bordure Ext??rieure. La plan??te la plus proche est Sluis Van. Sa population est principalement compos??e d???animaux tels que les dragons des marais, les limaces des marais, les champignons carnivores, les punaises-bouchers et les chauves-souris. Il y a aussi les araign??es blanches ?? bosse. Cette esp??ce a une vie qui est vraiment tr??s int??ressante : pendant un moment elles sont des araign??es blanches ?? bosse et un jour elles prennent racines et devint un arbre gnarl. Il n???y a pas de langue puisque les animaux ne parlent pas. Un jour dure vingt-trois heures standards et son ann??e est de trois cent quarante et un jours locaux. C???est un monde oubli?? et qui ne figure pas sur les cartes. Les personnes qui s???y sont rendu disent que c???est un monde hant??. La plan??te est en tr??s grande partie recouverte de marais et d???immenses jungles. Elle a un climat tr??s chaud et tr??s humide. Les pluies constantes maintiennent cet ??cosyst??me en place.",
  },

  {
    id: 4,
    planetName: "Miller",
    img: miller,
    isHidden: false,
    darkFriday: false,
    soldOut: false,
    perso: millerPerso,
    photo01: millerPays01,
    photo02: millerPays02,
    price: 110000,
    stat: [
      { category: "Places restantes", level: 70 },
      { category: "Danger", level: 65 },
      { category: "R??sistance ?? l'Homme", level: 80 },
      { category: "Habitabilit?? - Confort", level: 55 },
    ],
    txt: "Miller est un monde de l'eau et de la premi??re plan??te du syst??me en orbite autour de Gargantua. Miller tire son nom de Dr.Miller , qui a atterri sur la plan??te et activ?? les balises. Il est ??galement le premier emplacement de l'??quipage d'Endurance visite. 10 ans avant que l'??quipage d'Endurance voyag?? ?? travers le trou de ver, la NASA a envoy?? trois gousses d'atterrissage ?? travers elle, portant chacun un scientifique pour ??valuer un monde potentiellement habitable. Miller a ??t?? choisi pour atterrir sur ce monde. Cependant, au sein d'une heure par rapport apr??s son arriv??e, elle a rencontr?? l'un des raz de mar??e massifs encerclant la plan??te. Elle a ??t?? incapable de n??gocier la rencontre et son atterrissage pod a ??t?? d??truit. Elle ??tait soup??onn??e d'avoir p??ri quelques minutes rapport avant l'arriv??e de l'??quipage de l'Endurance. Lorsque Cooper, Am??lia, Doyle, et CASE terres ils d??couvrent les d??bris de Miller. Am??lia va ?? la recherche de l'enregistreur de donn??es, mais est ??pingl??. Comme la vague approchait, Doyle envoie CASE apr??s Amelia. CASE porte son retour ?? la Ranger, mais Doyle est emport?? par la vague. L'??quipage restants parviennent ?? s'??chapper, concluant que la plan??te de Miller est impropre ?? la vie. En raison des effets de dilatation de temps caus??es par le champ de gravit?? de Gargantua, ils finissent par d??penser 23 ans, 8 mois et 4 jours dans le temps de la Terre sur Miller.",
  },

  {
    id: 5,
    planetName: "Pandora",
    img: pandora,
    isHidden: false,
    darkFriday: false,
    soldOut: true,
    perso: avatars,
    photo01: pandoraPays01,
    photo02: pandoraPays02,
    price: 111111,
    stat: [
      { category: "Places restantes", level: 30 },
      { category: "Danger", level: 50 },
      { category: "R??sistance ?? l'Homme", level: 40 },
      { category: "Habitabilit?? - Confort", level: 70 },
    ],
    txt: "Une ??toile ?? gauche, et deux plan??tes telluriques puis trois g??antes gazeuses, celle du milieu poss??de 9 satellites dont Pandora. Le syst??me plan??taire d'Alpha Centauri A dans l'univers d'Avatar. Pandora se situe dans la constellation du Centaure. Il s'agit d'une exolune tellurique qui abrite des formes de vie extraterrestres mais dont l'atmosph??re est mortelle pour l'Homme. Pandora est l'un des quatorze satellites de l'exoplan??te Polyph??me, une g??ante gazeuse. Cette derni??re orbite autour d'Alpha Centauri A, l'une des trois ??toiles du syst??me Alpha Centauri, elle se situe ?? 4,37 ann??es-lumi??re de la Terre.Cette lune est semblable ?? la Terre vue de l'espace, mais elle est recouverte d'une jungle luxuriante et hostile pour les humains. Ces m??mes humains sont arriv??s sur Pandora pour rechercher un minerai supraconducteur dont la plan??te regorge : l'unobtanium, qui permettrait de r??soudre la crise ??nerg??tique qui se d??roule sur Terre. Le co??t de ce minerai (environ 20 000 000 $ le kilo) justifie une intense prospection et extraction de la part des humains. Ces derniers n'ont pas peur d'an??antir la faune et la flore locale si elles les emp??chent d'extraire ce pr??cieux minerai. C'est d'ailleurs le th??me principal du premier film Avatar. Une des curiosit??s de la plan??te est la cha??ne de montagne des Hall??lujiah, une r??gion o?? d'immenses blocs de roches l??vitent dans le ciel gr??ce au pouvoir magn??tique de l'unobtanium. Ces blocs ont ??t?? arrach??s de la plan??te ?? la suite de tremblements de terre. La faune de Pandora est tr??s f??roce et peut ??tre tr??s dangereuse pour un ??tre humain. Ils sont en moyenne plus grands que sur Terre, cela est d?? ?? la gravit?? qui est plus faible. La plupart des animaux poss??de six membres au lieu de quatre et ont des os renforc??s de fibre de carbonea. Ils peuvent ??tre rencontr??s dans tous les types de milieux : marin, terrestre et a??rien. Le plus f??roce et le plus redout?? est le grand leonopterix, un pr??dateur volant dont l'envergure des ailes peut mesurer jusqu'?? 30 m. Extr??mement agressif, il s'en est d??j?? pris ?? des appareils humains qui croisaient son chemina. En na'vi son nom est toruk, ce qui peut ??tre traduit par ?? derni??re ombre ?? en fran??ais, car il s'agit de la derni??re chose qui est vue avant de mourira. Un navi qui parvient ?? se lier avec un grand leonopterix et ?? le dompter porte le titre de ?? Toruk Makto ??. Au sol, c'est le thanator qui est le plus redout??, il se situerait au sommet de la cha??ne alimentairea. Il ressemble ?? une panth??re mais est bien plus imposant : 5,5 m de long et 2,5 m de hauta. Il poss??de au niveau de la t??te une carapace qui peut le prot??ger des armes ?? feua. Parmi les herbivores, on trouve le titanoth??re : il ressemble ?? un ??l??phant mais est presque deux fois plus grand, il poss??de une t??te massive qui a la forme de celle d'un requin marteaua. Il fait partie des rares herbivores capables de se d??fendre contre le grand leonopterix et le thanatora. Les m??tab??tes (surnomm??es ?? vaches ?? corne bleue ??) sont des herbivores vivant en troupeau et souvent compar??s aux bisonsa. Les na'vi les chassent pour leur viandea. Certaines esp??ces ont ??t?? dompt??es par les navi : les banshees, qui ressemblent ?? de grands reptiles volants, sont ainsi utilis??s pour les d??placements a??riens et les equidius, qui ressemblent ?? des chevaux, son utilis??s pour les d??placements terrestres",
  },
  {
    id: 6,
    planetName: "Marina Strange",
    img: plan04,
    isHidden: false,
    darkFriday: true,
    soldOut: false,
    perso: plan04Perso,
    photo01: plan04Pays01,
    photo02: plan04Pays02,
    price: 50000,
    stat: [
      { category: "Places restantes", level: 34 },
      { category: "Danger", level: 68 },
      { category: "R??sistance ?? l'Homme", level: 74 },
      { category: "Habitabilit?? - Confort", level: 35 },
    ],
    txt: "?? l'??poque de l'Empire Infini des Rakata (civilisation ayant atteint son apog??e 5000 ans avant la cr??ation de la R??publique, soit 30 000 ans avant la Bataille de Yavin), ces derniers tent??rent de conqu??rir les Sith. Ils d??couvrirent ce peuple sur Korriban, et tent??rent d'abord de gagner la confiance du souverain Adas, en enseignant comment pr??server son essence dans un holocron. Mais s'ensuivit un affrontement sanglant avec les Sith, et ces derniers triomph??rent Suite ?? la d??faite des Rakata, les Sith s'entretu??rent pour le pouvoir, plongeant la plan??te dans un conflit s??culaire qui eut pour cons??quence fut le changement de capitale sur Ziost. Puis, Korriban ne fit plus parler d'elle pendant plusieurs mill??naires.",
  },
  {
    id: 7,
    planetName: "Etoile Noire",
    img: etoilenoire,
    isHidden: false,
    darkFriday: true,
    soldOut: false,
    perso: stormt,
    photo01: etoilenoirePays01,
    photo02: etoilenoirePays02,
    price: 70000,
    stat: [
      { category: "Places restantes", level: 100 },
      { category: "Danger", level: 75 },
      { category: "R??sistance ?? l'Homme", level: 5 },
      { category: "Habitabilit?? - Confort", level: 85 },
    ],
    txt: "Une ??toile de la mort (Death Star) est une station de combat spatiale de l???univers de fiction Star Wars. Mobile et de forme sph??rique, elle a une taille ??quivalente ?? celle d'une petite lune et a une puissance de feu suffisante pour an??antir une plan??te enti??re, gr??ce au superlaser dont elle est ??quip??e. Deux mod??les ont ??t?? con??us et construits par le mal??fique Empire galactique. Le premier, l'??toile de la mortNote 1, est utilis?? pour raser la ville de Jedha City sur la plan??te Jedha, une base imp??riale sur Scarif puis faire exploser la plan??te Alderaan ; il est d??truit lors de la bataille de Yavin. Les opposants ?? l'Empire, les rebelles, viennent ?? bout du second mod??le avant qu'il ne soit achev??, autour de la lune d'Endor.",
  },

  {
    id: 8,
    planetName: "LV-426",
    img: lv426,
    isHidden: false,
    darkFriday: true,
    soldOut: false,
    perso: alien01,
    photo01: lv426Paysage01,
    photo02: lv426Paysage02,
    price: 50000,
    stat: [
      { category: "Places restantes", level: 95 },
      { category: "Danger", level: 100 },
      { category: "R??sistance ?? l'Homme", level: 100 },
      { category: "Habitabilit?? - Confort", level: 2 },
    ],
    txt: "Le contact ??tant perdu avec cette plan??te, nous ne pouvons nous prononcer sur son accueil. Concernant le confort, les habitants (hommes, femmes et enfants) semblaient heureux mais tombaient rapidement enceintes sous la contrainte des autochtones.",
  },

  {
    id: 9,
    planetName: "Fallen",
    img: plan01,
    isHidden: false,
    darkFriday: "Dark Friday",
    soldOut: false,
    perso: plan01Perso,
    photo01: plan01Pays01,
    photo02: plan01Pays02,
    price: 1500,
    stat: [
      { category: "Places restantes", level: 100 },
      { category: "Danger", level: 100 },
      { category: "R??sistance ?? l'Homme", level: 2 },
      { category: "Habitabilit?? - Confort", level: 5 },
    ],
    txt: "La cro??te poreuse du plus petit continent de Fallen est perc??e de nombreux gouffres circulaires, au fond desquels circule l???eau n??cessaire ?? la vie, reli??s entre eux par des cit??s souterraines. La plan??te abrite un vaste oc??an souterrain qui, mit en mouvement par l???attraction des neuf lunes, ??rode en permanence la cro??te poreuse. Utapau abrite deux esp??ces intelligentes distinctes qui vivent ensemble dans de vastes cit??s souterraines ou dans les nombreux niveaux qu???ils ont am??nag??s sur la paroi des gouffres circulaires : les Utais et les Pau???ans. Leurs cit??s-gouffres tirent leurs ressources des eaux souterraines, du dressage des b??tes et leur ??nergie provient d?????oliennes qui exploitent la forte puissance du vent en surface. Hauts d???environs 1,20 m??tre ?? l?????tat adulte et dot??s d???yeux pro??minents, les Utais sont des cr??atures de petite stature ignorantes et peu int??ress??e par ce qui pourrait se passer hors de leurs cavernes. Leur esp??ce s???est d??velopp??e seule dans les gouffres et les cavernes d???Utapau avant les premiers contacts avec les Pau???ans qui leur furent tr??s b??n??fiques. Les Utais occupent principalement la classe travailleuse d???Utapau et sont des experts dans le dressage de cr??atures comme les varactyles et les dactillions.",
  },

  {
    id: 10,
    planetName: "Beauty sphere",
    img: plan02,
    isHidden: false,
    darkFriday: false,
    soldOut: true,
    perso: plan02Perso,
    photo01: plan02Pays01,
    photo02: plan02Pays02,
    price: 100000,
    stat: [
      { category: "Places restantes", level: 50 },
      { category: "Danger", level: 2 },
      { category: "R??sistance ?? l'Homme", level: 95 },
      { category: "Habitabilit?? - Confort", level: 78 },
    ],
    txt: "Beauty sphere ??tait une plan??te neutre de la bordure m??diane qui avait de nombreux petits lacs et des forets abondantes. D'un diam??tre de 12 100 kilom??tres, la dur??e d'une ann??e ??tait de 215 jours. Au niveau de la population, elle comptait moins d'un million d'habitants. Elle disposait d'un soleil mais d'aucune lune. La plan??te ??tait neutre et abritait un ch??teau qui faisait office d'auberge pour les voyageurs du monde entier.  Ce ch??teau que Maz dirigeait depuis plus de 1000 ans ??tait gigantesque, avec plusieurs niveaux.",
  },

  {
    id: 11,
    planetName: "Echo-Two",
    img: plan03,
    isHidden: false,
    darkFriday: false,
    soldOut: false,
    perso: plan03Perso,
    photo01: plan03Pays01,
    photo02: plan03Pays02,
    price: 200000,
    stat: [
      { category: "Places restantes", level: 64 },
      { category: "Danger", level: 38 },
      { category: "R??sistance ?? l'Homme", level: 62 },
      { category: "Habitabilit?? - Confort", level: 74 },
    ],
    txt: "Les Obroans, esp??ce humano??de native de la plan??te, ont tenu ?? ce que leur monde reste neutre, ?? travers les ages. Ainsi, ?? l???abri de conqu??te, les Obroans fond??rent une vaste Biblioth??que contenant des informations sur toute la galaxie, depuis des temps ancestraux, et ce, sous plus de 10 000 formats informatiques et langages diff??rents. D??s le d??but de la Guerre Civile Galactique, le Systeme Obroa-skai, ainsi que son voisin, le Systeme Paonid pr??serv??rent leur neutralit??. Cependant, la r??gion finit par devenir une place strat??gique, entre la Nouvelle R??publique et les Vestiges de l'Empire. Et le penchant des Obroans pour la Nouvelle R??publique finit par se manifester ouvertement. Le Grand Amiral effectua cependant un raid sur Obroa-skai. Il esp??rait trouver dans ces banques de donn??es les coordonn??es de Myrkr???le monde des Ysalamaris, indispensable pour le reste de sa qu??te.",
  },

  {
    id: 12,
    planetName: "Lina-S",
    img: plan06,
    isHidden: false,
    darkFriday: false,
    soldOut: false,
    perso: plan06Perso,
    photo01: plan06Pays01,
    photo02: plan06Pays02,
    price: 250000,
    stat: [
      { category: "Places restantes", level: 20 },
      { category: "Danger", level: 10 },
      { category: "R??sistance ?? l'Homme", level: 75 },
      { category: "Habitabilit?? - Confort", level: 80 },
    ],
    txt: "Les natifs de Lina-S sont les Bimms, une esp??ce pensante r??gie par un conseil plan??taire ind??pendant gouvernant au nom de lois ancestrales, qui si??ge dans un b??timent relativement modeste, la Tour des Lois, dont l'interet touristique r??side dans le fait qu'elle est d??cor??e par des tapisseries narrant leurs histoires favorites, et dont le dernier ??tage est consacr?? ?? une sorte de mus??e comportant de nombreux objets datant de l'??poque de l'Ancienne R??publique. L'autre b??timent principal de la capitale Bimm est le march??, ??difice en forme de d??me compos?? de trois niveaux diff??rents, dont les flancs ne poss??dent pas de murs, symbolique de l'esprit Bimm d'ouverture d'esprit; de m??me le toit est en fait une tenture pouvant se d??plier en cas d'intemp??ries, afin de prot??ger l'int??rieur du b??timent o?? sont toujours pr??sents un grand nombre de Bimms. Bimmisaari fut une des premi??res plan??te ?? rejoindre la Refugee Resettlement Coalition, quelques temps avant la guerre des clones, et peu apr??s la d??faite imp??riale d'Endor, elle fut courtis??e par la Nouvelle R??publique, qui n'obtint jamais son adhesion. En effet, le fait que la plan??te soit aussi ??loign??e du Noyau la rel??gua toujours ?? l'arri??re plan, la plupart de diplomates la jugeant ininterressante, tant du point de vue politique que strat??gique. Cependant, lors de la deuxi??me vague d'assaut Yuuzhan Vong Bimmisaari fut contrainte de capituler.",
  },
];

export default Planetes;
