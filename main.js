let currentPhoto = 0;
let photodata = [
    {
        photo: 'Images/rozsa.jpg',
        title: 'Rózsa',
        description: 'A rózsa (Rosa), a rózsafélék (Rosaceae) családjába tartozó egyik növénynemzetség, illetve az ide tartozó cserjék virága.Kb. 200 rózsafajt tart számon a tudomány, ezeknek a többsége az északi félgömbre, főleg a mérsékelt égövre jellemző növény, néhány faj Mexikóban, a Fülöp-szigeteken és Etiópiában honos.'
    },
    {
        photo: 'Images/ibolya.jpg',
        title: 'Ibolya',
        description: 'Az ibolya (Viola) az ibolyafélék családjának névadó és egyben legnagyobb nemzetsége mintegy négyszázötven fajjal.'
    },
    
    {
        photo: 'Images/kamilla.jpg',
        title: 'Kamilla',
        description: 'Az orvosi székfű vagy kamilla (Matricaria chamomilla) az őszirózsafélék (Asteraceae) családjába tartozó gyógynövény. Egyéb elnevezései: Szent-Iván pipitér, nemes pipitér, pipitér, anyafű, szikfű, szüzekanyja, bubulyka.'
    },
    {
        photo: 'Images/frezia.jpg',
        title: 'Frézia',
        description: 'A nősziromfélék családjába tartozó fréziát (Freesia x hybrida) sokan csak vágott virágként ismerik.'
    },
    {
        photo: 'Images/liliom.jpg',
        title: 'Liliom',
        description: 'A liliom (Lilium) a liliomfélék (Liliaceae) családjának és egyúttal a liliomformák (Lilioideae) alcsaládnak is névadó nemzetsége, mintegy 90 fajjal. Mivel több faját is dísznövényként termesztik, különféle fantázianeveken megszámlálhatatlanul sok hibridjét, illetve változatát forgalmazzák.'
    },
    {
        photo: 'Images/pipacs.jpg',
        title: 'Pipacs',
        description: 'A pipacs vagy vadmák (Papaver rhoeas) a boglárkavirágúak (Ranunculales) rendjébe, ezen belül a mákfélék (Papaveraceae) családjába tartozó faj.'
    },
    {
        photo: 'Images/kardvirag.jpg',
        title: 'Kardvirág',
        description: 'A kardvirág (Gladiolus) a nősziromfélék (Iridaceae) családjába tartozó nemzetség. A nemzetség a Gladiolus nevet a római gladius kardról kapta. A korszerű rendszertanok a korábban Oenostachys, Homoglossum, Anomalesia és Acidanthera néven leírt nemzetségeket is a Gladiolusba sorolják.'
    },
    {
        photo: 'Images/hovirag.jpg',
        title: 'Hóvirág',
        description: 'A hóvirág (Galanthus) az amarilliszfélék talán legismertebb növénynemzetsége. Huszonegy fajuk él, melyek a Pireneusoktól, Közép- és Dél-Európán át, a Kaszpi-tóig, illetve a Közel-Keletig találhatók meg. Közülük a legkülönlegesebb faj Görögországban él s októberben virágzik.'
    },
    {
        photo: 'Images/jatszint.jpg',
        title: 'Jácint',
        description: 'A kerti jácint, közönséges jácint, keleti jácint vagy a köznyelvben csak jácint (Hyacinthus orientalis), régi nevén jószagú hiacinth a jácintfélék családjának jácint (Hyacinthus) nemzetségébe tartozó népszerű, kerti növényfaj. Délnyugat-Ázsiában, Törökország déli és középső területein, Északnyugat-Szíriában és Libanonban őshonos.'
    },
    {
        photo: 'Images/narcisz.jpg',
        title: 'Nárcisz',
        description: 'A nárcisz (Narcissus) a spárgavirágúak (Asparagales) rendjébe, az amarilliszfélék (Amaryllidaceae) családjába tartozó növénynemzetség. Nagyobbrészt trópusi vagy szubtrópusi, ritkán északi mérsékelt övi elterjedésű, hagymás vagy néha rizómás, sokszor tőlevélrózsás növények tartoznak ide. Virágzatuk ernyőszerű, vagy a virágok magánosak. Nevét Narkisszosz mitológiai alakról, esetleg narkotikus (narkoa, görögül bénítani) tulajdonságairól kapta.'
    },
    {
        photo: 'Images/tulipan.jpg',
        title: 'Tulipán',
        description: 'A tulipán (Tulipa) kehelyalakú virággal rendelkező, több színben nyíló, hagymás dísznövény, a liliomfélék (Liliaceae) családjának egy nemzetsége. Mintegy 100 faj és több ezer nemesített fajta tartozik ide. A tulipán neve a fárszi (perzsa) „toliban” szóból származik, mivel alakja hasonlít az iszlám világban használt fejfedőre, a turbánra. Régies magyar neve: tulipánt.'
    },
    {
        photo: 'Images/tulipan.jpg',
        title: 'Tulipán',
        description: 'A tulipán (Tulipa) kehelyalakú virággal rendelkező, több színben nyíló, hagymás dísznövény, a liliomfélék (Liliaceae) családjának egy nemzetsége. Mintegy 100 faj és több ezer nemesített fajta tartozik ide. A tulipán neve a fárszi (perzsa) „toliban” szóból származik, mivel alakja hasonlít az iszlám világban használt fejfedőre, a turbánra. Régies magyar neve: tulipánt.'
    }

]

//data-number attribútumban helyezem el az index aktuális értékét; kis képek beolvasása
photodata.forEach((item,index)=>{
         $("#thumbnails").append(
                        `<section>
                                <h6>${item.title}</h6>
                                <div class="thumbnail"  data-number="${index}">
                                <img class="thumbnail-img" src="${item.photo}" data-number="${index}">
                                 </div>
                        </section>`)
    

//Képek betöltése a data-number attribútum alapján
    $('.thumbnail').click((event) => {            
    currentPhoto = parseInt($(event.target).attr('data-number'));    
      
    loadImage(currentPhoto);

    })
});


let loadImage = (ind) => {
    $("#foto").attr('src', photodata[ind].photo);
    $("#cim").text(photodata[ind].title);
    $("#leiras").text(photodata[ind].description)


    // kiválasztás törlése
    for (let i = 0; i < photodata.length; i++){
        document.getElementsByClassName('thumbnail')[i].classList.remove('selected');
        console.log(currentPhoto)
    }
    // kiválasztás megjelenítése
    document.getElementsByClassName('thumbnail')[currentPhoto].classList.add('selected');

}

loadImage(currentPhoto)


$('#jobb').click(() => {
    if(currentPhoto<photodata.length-1){
        currentPhoto++;
       }
    loadImage(currentPhoto);
})

$('#bal').click(() => {
    if(currentPhoto>0){
    currentPhoto--;
    }
    loadImage(currentPhoto);
})

 