function palavroes() { return [listaDePalavroespt_BRParaTeste(), listaDePalavroesEnParaTeste()] }

document.getElementById('palavras').oninput = function () {
    const verificacao = tratamentoDePalavrões(this.value)
    document.getElementById('escrito').innerHTML = verificacao[0]
    document.getElementById('quantidade').innerHTML = verificacao[2]
}

function tratamentoDePalavrões(palavra) {
    const apenasLetras = /[^A-Za-z ]/g
    let valor = palavra.replace(apenasLetras, '')
    let filtro = palavra
    const contagemDePalavroes = []
    let quantosPalavroes = 0
    for (let i of palavroes()) {
        for (let j in i) {
            const palavrao = i[j]
            contagemDePalavroes[j] = (valor.match(new RegExp(`${palavrao}`, 'g')) || []).length
            quantosPalavroes += contagemDePalavroes[j]
            filtro = filtro.replace(new RegExp(`${palavrao}`, 'g'), '*')
        }
    }
    return [filtro, contagemDePalavroes, quantosPalavroes]
}



function listaDePalavroespt_BRParaTeste() {
    // pode nao conter todos
    return [
        "lazarento",
        "arrombado",
        "foda",
        "foda-se",
        "vai se foder",
        "vai a merda",
        "arrombada",
        "fudeo",
        "fudeu",
        "gozar",
        "gozada",
        "merda",
        "bosta",
        "punheta",
        "filho da puta",
        "filha da puta",
        "punhetinha",
        "punheteiro",
        "fdp",
        "cuzão",
        "cusão",
        "cusão",
        "viado",
        "viadinho",
        "xota",
        "putaria",
        "putero",
        "puto",
        "puteiro",
        "bilau",
        "vadiazinha",
        "putinha",
        "babaca",
        "retardado",
        "cusinho",
        "cuzinho",
        "filho de um corno",
        "rapariga",
        "rabão",
        "vadia",
        "puta",
        "arrombada",
        "caralho",
        "broxa",
        "imbecil",
        "imbessil",
        "bastarda",
        "bastardo",
        "buceta",
        "bucetuda",
        "vsf",
        "vai se foder",
        "boceta",
        "cu",
        "rola",
        "rolas",
        "biscate",
        "pau no cu",
        "pau no seu cu",
        "pica",
        "pika",
        "piroca",
        "piroka",
        "coco",
        "cocozão",
        "pirok",
        "caraio",
        "vai tomar no cu",
        "vagabunda",
        "vagaba",
        "porra",
        "corno",
        "bixa",
        "bicha",
        "baitola",
        "boquete",
        "bronha",
        "brioco",
        "caga",
        "enrabada",
        "enrabado",
        "cagar",
        "cagado",
        "cagada",
        "arregaçada",
        "arregaçado",
        "bixinha",
        "bichinha",
        "bichona",
        "bixona",
        "arregassado",
        "arregassada",
        "chota",
        "chupada",
        "chupeta",
        "xupeta",
        "grelo",
        "grelinho",
        "greluda",
        "otario",
        "otaria",
        "prega",
        "rabuda",
        "raxada",
        "siririca",
        "tesuda",
        "tezuda",
        "xavasca",
        "chavasca",
        "xibiu",
        "xoxota",
        "chochota"
    ]
}

function listaDePalavroesEnParaTeste() {
    return ["4r5e", "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole", "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bugger", "bum", "bunny fucker", "butt", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock", "cock-sucker", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cok", "cokmuncher", "coksucka", "coon", "cox", "crap", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "damn", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook", "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex", "hell", "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off", "jackoff", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim", "orgasims", "orgasm", "orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop", "porn", "porno", "pornography", "pornos", "prick", "pricks", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys", "rectum", "retard", "rimjaw", "rimming", "s hit", "s.o.b.", "sadist", "schlong", "screwing", "scroat", "scrote", "scrotum", "semen", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting", "shitings", "shits", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "teez", "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina", "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "willies", "willy", "xrated", "xxx"];
}