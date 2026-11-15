OLY.addGrade({
 "grade": 7,
 "track": "Юниор",
 "stage": "7–8 сыныптарға арналған юниорлар олимпиадасына және мектеп кезеңінің алғашқы есептеріне дайындық.",
 "intro": "7-сыныпта сен жолдармен, тізімдермен және кестелермен жұмыс істеуді, деректерді сұрыптауды және процестерді мұқият модельдеуді үйренесің. Бұл — олимпиадалық бағдарламалаудың «тілі»: мектеп кезеңінің кез келген дерлік есебі осы кірпіштерден құралады. Жылдың басты дағдысы — шартты оқып, оны нақты қадамдық алгоритмге айналдыру.",
 "topics": [
  {
   "id": "g7-strings",
   "title": "Жолдар мен символдар",
   "summary": "Индекстер, қималар, символ кодтары, жол әдістері",
   "minutes": 30,
   "lesson": [
    {
     "type": "p",
     "text": "Python-дағы жол — бұл <b>символдар тізбегі</b>. Онымен тізіммен жұмыс істегендей дерлік жұмыс істеуге болады: ұзындығын білуге, нөмірі бойынша символға жүгінуге, символдарды циклде аралап шығуға. Бірақ бір айырмашылығы бар: жолды орнында <b>өзгертуге болмайды</b>, тек жаңасын құруға болады."
    },
    {
     "type": "h",
     "text": "Индекстер мен қималар"
    },
    {
     "type": "p",
     "text": "Символдар нөлден бастап нөмірленеді. <code>s[0]</code> — бірінші символ, <code>s[-1]</code> — соңғысы. <code>s[a:b]</code> қимасы a нөмірінен b-ға дейінгі символдарды алады, b <i>кірмейді</i>. <code>s[::-1]</code> қимасы жолды кері аударады."
    },
    {
     "type": "code",
     "code": "s = \"олимпиада\"\nprint(len(s))      # 9\nprint(s[0], s[-1]) # о а\nprint(s[2:6])      # импи\nprint(s[::-1])     # адаипмило\n",
     "runnable": true
    },
    {
     "type": "h",
     "text": "Символдарды аралау және кодтар"
    },
    {
     "type": "p",
     "text": "<code>for ch in s</code> циклі символдарды кезекпен аралап шығады. Әр символдың сандық коды бар: <code>ord('a')</code> = 97, ал <code>chr(98)</code> = 'b'. Латын әріптері қатар тұрады, сондықтан әріптің әліпбидегі нөмірі — <code>ord(ch) - ord('a')</code>."
    },
    {
     "type": "code",
     "code": "s = \"Code2025!\"\ndigits = letters = other = 0\nfor ch in s:\n    if ch.isdigit():\n        digits += 1\n    elif ch.isalpha():\n        letters += 1\n    else:\n        other += 1\nprint(digits, letters, other)  # 4 4 1\n",
     "runnable": true
    },
    {
     "type": "h",
     "text": "Пайдалы әдістер"
    },
    {
     "type": "table",
     "head": [
      "Әдіс",
      "Не істейді",
      "Мысал"
     ],
     "rows": [
      [
       "<code>s.count(x)</code>",
       "x неше рет кездеседі",
       "<code>'banana'.count('a')</code> → 3"
      ],
      [
       "<code>s.replace(a, b)</code>",
       "барлық a-ны b-ға ауыстыру",
       "<code>'2-3-4'.replace('-', '')</code> → '234'"
      ],
      [
       "<code>s.split()</code>",
       "бос орындар бойынша тізімге бөлу",
       "<code>'a b c'.split()</code> → ['a','b','c']"
      ],
      [
       "<code>' '.join(lst)</code>",
       "жолдар тізімін біріктіру",
       "<code>'-'.join(['1','2'])</code> → '1-2'"
      ],
      [
       "<code>s.upper()</code>, <code>s.lower()</code>",
       "әріптердің регистрі",
       "<code>'Kz'.upper()</code> → 'KZ'"
      ]
     ]
    },
    {
     "type": "h",
     "text": "Мысалды талдау: Цезарь шифры"
    },
    {
     "type": "p",
     "text": "Әрбір кіші латын әрпін шеңбер бойымен k позиция алға жылжытайық (z-тен кейін қайтадан a келеді). Әріптің нөмірі — <code>ord(ch) - 97</code>, шеңбер бойымен жылжыту 26-ға бөлгендегі қалдықты береді."
    },
    {
     "type": "code",
     "code": "s = input()\nk = int(input())\nres = []\nfor ch in s:\n    pos = (ord(ch) - ord('a') + k) % 26\n    res.append(chr(ord('a') + pos))\nprint(\"\".join(res))\n",
     "runnable": true,
     "input": "hello\n3\n"
    },
    {
     "type": "tip",
     "text": "Егер жол бір-бір символдан құрылса, символдарды тізімге жинап, соңында <code>''.join(тізім)</code> жаса. Ұзын жолдарда <code>res = res + ch</code> әрекетін көп рет қайталау баяуырақ жұмыс істейді."
    },
    {
     "type": "warn",
     "text": "<code>input()</code> жол қайтарады. '10' жолы мен 10 саны — әртүрлі нәрселер: <code>'10' + '5'</code> 15 емес, '105' береді. Сан керек болғанда <code>int()</code>-ті ұмытпа."
    },
    {
     "type": "tip",
     "text": "Олимпиадалық үлгі: «символды екінші шетіндегі жұбымен салыстыр» — бұл <code>s[i]</code> және <code>s[n-1-i]</code>. Палиндромдар мен симметрия осылай тексеріледі."
    }
   ],
   "quiz": [
    {
     "q": "<code>print('informatika'[2:5])</code> не шығарады?",
     "options": [
      "nfo",
      "for",
      "form",
      "orm"
     ],
     "answer": 1,
     "explain": "Қима 2, 3, 4 индексті символдарды алады: f, o, r."
    },
    {
     "q": "ch әрпінің латын әліпбиіндегі нөмірін нөлден бастап санап қалай алуға болады?",
     "options": [
      "<code>ord(ch)</code>",
      "<code>ord(ch) - ord('a')</code>",
      "<code>chr(ch) - 97</code>"
     ],
     "answer": 1,
     "explain": "'a' коды 97-ге тең, сондықтан оны азайтамыз, сонда 'a' 0 нөмірін алады."
    },
    {
     "q": "<code>s = 'abc'; s[0] = 'x'</code> орындалғаннан кейін не болады?",
     "options": [
      "s 'xbc' болады",
      "қате: жолды өзгертуге болмайды",
      "s 'x' болады"
     ],
     "answer": 1,
     "explain": "Жолдар өзгермейді. Жаңасын құру керек: <code>s = 'x' + s[1:]</code>."
    }
   ],
   "problems": [
    {
     "id": "g7-strings-1",
     "title": "Палиндром-тақтайша",
     "level": 1,
     "statement": "Лагерь тәлімгері кіреберістің үстіне солдан оңға да, оңнан солға да бірдей оқылатын сөзі бар тақтайша ілгісі келеді. Оның <i>s</i> сөзі жазылған тақтайшасы бар, ол әріптерді қайта бояй алады: бір әрекетте кез келген әріпті кез келген басқа әріпке ауыстыруға болады.<br>Сөз палиндром болуы үшін ең аз дегенде неше ауыстыру керек?",
     "input": "Кіші латын әріптерінен тұратын бір <i>s</i> жолы, 1 ≤ |s| ≤ 1000.",
     "output": "Бір сан — ауыстырулардың ең аз саны.",
     "examples": [
      {
       "in": "abca\n",
       "out": "1\n"
      },
      {
       "in": "racecar\n",
       "out": "0\n"
      }
     ],
     "tests": [
      {
       "in": "abca\n",
       "out": "1\n"
      },
      {
       "in": "racecar\n",
       "out": "0\n"
      },
      {
       "in": "a\n",
       "out": "0\n"
      },
      {
       "in": "ab\n",
       "out": "1\n"
      },
      {
       "in": "abcdef\n",
       "out": "3\n"
      },
      {
       "in": "fcgabibfjaidabggbdbigajbdjajjgadaicegcibjeicbjjdfbibjajdhigfhjhfedcdbjeihfhejbbigcfchgabijfffjhjhbbehbaejhegyahfcjbhadecdgghbchgiecgiegfgdcbccddahjceeacgifjjfcijahiggggbhgadbdhcbfjabajcibfjabdjgcefjfhbbhhhhebcbfehciadifciaiebeifcfdiiifdjddgddihfaaehedyfhffbdbdhdfdhjjahfbbgdhcgfbghgbcccacjhcjjhfciicaabicgddaedeidjfeigcafhjigiciciiahcjaccchjbiafiiihbiaddeabihiabhfjijidehiihidieidhcgbghfbdgbdebcfcechdbghcdcgigfgdffbfafihhagfijeibbdbbeeacecgezciijhfbeacgbeabebjdbebhafigejcaidbceacdeeidehicefaeaaaiidiiaaaeafecihedieedcaecbdiacjegifahbebdjbebaebgcaebfhjiicgegcecaeebbdbbiejifgahhifafbffdgfgigcdchgbdhcecfcbedbgdbfhgbgchdieidihiihedijijfhbaihibaeddaibhiiifaibjhcccajchaiicicigijhfacgiefjdiedeaddgcibaaciicfhjjchjcacccbghgbfgchdgbbfhajjhdfdhdbdbffhfjdeheaafhiddgddjdfiiidfcfiebeiaicfidaichefbcbehhhhbbhfjfecgjdbajfbicjabajfbchdbdaghbggggihazicfjjfigcaeecjhaddccbcdgfgeigceighcbhggdcedahbjcfhafgehjeabhebbhjhjfffjibaghcfcgibbjehfhiejbdcdefhjhfgihdjajbibfdjjbciejbicgeciadagjjajdbjagibdbggbadiajfbibagcf\n",
       "out": "4\n"
      },
      {
       "in": "higieddfdcgfacabegcabgiejdeahccehaeffifdaedfcafgbheiddiabebcgjagaeedbjicjgfhcejcaigiciijajdbaacfbghiaaidheahbiibibhebedddhhgbheajdbjcfeejjcahahebdheiehhhbidebhaehbihegddbjbciefcjiebfdhhgacahhgecgfgfbfaffgbdaeefbggjbfgeaebaecdegifdfgagiidbaghjcehaicchgfeeeegdehigbccbdihidhfhgciddbcfibfdfejdagggidgefahejfciidbedgghgeacaghjhabgihhdbdccibhbiaacdjaeceigbbbeijdgedjaaiehefdhididageaadhgbedgfdhafgfgdaeibdhdeddhdeebjhjcdhgajcgadajcgaacghfbbcfdcihaegffhcbabebfgbidgfegbahdfihdffhagdgagahbaedbjffefjaefeeajbbjaeefeajfeffjbdeabhagagdgahffdhifdhabgefgdibgfbebabchffgeahicdfcbbfhgcaagcjadagcjaghdcjhjbeedhddedhdbieadgfgfahdfgdebghdaaegadidihdfeheiaajdegdjiebbbgieceajdcaaibhbiccdbdhhigbahjhgacaeghggdebdiicfjehafegdigggadjefdfbifcbddicghfhdihidbccbgihedgeeeefghcciahecjhgabdiigagfdfigedceabeaegfbjggbfeeadbgffafbfgfgceghhacaghhdfbeijcfeicbjbddgehibheahbedibhhheiehdbehahacjjeefcjbdjaehbghhdddebehbibiibhaehdiaaihgbfcaabdjajiicigiacjechfgjcijbdeeagajgcbebaiddiehbgfacfdeadfiffeahecchaedjeigbacgebacafgcdfddeigih\n",
       "out": "0\n"
      },
      {
       "in": "zzzzzzzzzz\n",
       "out": "0\n"
      },
      {
       "in": "aabbbbbbabaabaabbbbaabaabaabbabaabaaabbbaaabbaabbbbbbbabaaaaabababbaaabaaababbabaaaaaababbaabaabbaaabaaabbbabaaabbababaaabbbbbbabbbbababbaababaabbbaaaaababaabbaaaabbabaabbabaaababaaababbaaaaaababbbbbabbbbbaaabbabbabbaaabbbabaaaabaabaaaaaabbaaabbabbbabbababbaaababbbabaabbabbbbbbabbabaaabbbbaaaabbbbaabaaaaabbababbaabbaaaaabaaabbbaabbbaaaaaabaaaaaaaababababababbbabaaabaaabbabbbbaaaabaaababbabbbaabababaaaaaaaabaaaaaaaaabaabaaaaaaaabbaaaabbbbbabbbabbbbabababbaaababaabaabbababbbabaabaaababbabbabababbbababaabbabbabbbaabbaabbaaabbaababaaaabaabbbbaaababbaabbabbaabbaabbaaaabbbbabababbbbabababbaabaaababababbbbaabababbbbaaabbbbaabbabbaaaaabaabbbbabbabbbbababbabbbbbababbaababaaaabbaaaabbaabaababaabaabbaabbabbababaaabbbbbbbbaabaaababbaaabababbbabbbbbabbbbbbbbabababbaaabbabbaaaabab\n",
       "out": "189\n"
      }
     ],
     "hint": "Симметриялы тұрған әріп жұптарына қара: бірінші мен соңғы, екінші мен соңғының алдындағы... Неше жұпты «жөндеу» керек?",
     "solution": "s = input().strip()\nn = len(s)\ncnt = 0\nfor i in range(n // 2):\n    if s[i] != s[n - 1 - i]:\n        cnt += 1\nprint(cnt)\n",
     "explain": "Палиндром — барлық i үшін <code>s[i] == s[n-1-i]</code> болатын сөз. (i, n-1-i) жұптары қиылыспайды, сондықтан сәйкес келмейтін әр жұпты дәл бір ауыстырумен түзету керек (жұптың бір әрпін екіншісіне қайта жазу), бұдан азымен болмайды. Жауап — алғашқы n//2 жұптың ішіндегі сәйкес келмейтін жұптар саны. Ұзындық тақ болса, ортаңғы әріптің жұбы жоқ. Күрделілігі O(n).",
     "starter": "s = input().strip()\n# кодыңды осында жаз\n"
    },
    {
     "id": "g7-strings-2",
     "title": "Хабарды қысу",
     "level": 2,
     "statement": "Жерсерік Жерге ұзын жолдар жібереді, оларда бірдей әріптер жиі қатарынан келеді. Трафикті үнемдеу үшін инженерлер қысу әдісін ойлап тапты: қатарынан келетін <i>k</i> бірдей әріптен тұратын әр топты сол әріппен және <i>k</i> санымен ауыстырады. Егер әріп жалғыз тұрса (k = 1), сан жазылмайды.<br>Мысалы, <code>aaabccdddd</code> жолы <code>a3bc2d4</code> болып шығады. Жолды қыс.",
     "input": "Ұзындығы 1-ден 5000-ға дейінгі кіші латын әріптерінен тұратын бір жол.",
     "output": "Қысылған жол.",
     "examples": [
      {
       "in": "aaabccdddd\n",
       "out": "a3bc2d4\n"
      },
      {
       "in": "abc\n",
       "out": "abc\n"
      }
     ],
     "tests": [
      {
       "in": "aaabccdddd\n",
       "out": "a3bc2d4\n"
      },
      {
       "in": "abc\n",
       "out": "abc\n"
      },
      {
       "in": "a\n",
       "out": "a\n"
      },
      {
       "in": "zzzzzzzzzzzzzzzzzzzz\n",
       "out": "z20\n"
      },
      {
       "in": "aabbaa\n",
       "out": "a2b2a2\n"
      },
      {
       "in": "bbbbbbbbbbbaaaaaaaaaaaaaaazzzzzzzzzzzbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbcccccccccccccccccccccccccczczzzzzzzzzzaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaazzzzzzzzzzzzzzzzzzazzzzzzzzzzbbbbbbbbzzzzzzzzzaazzzzbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaazccccccccccccbbbbbbbbbbbbbbbbbbbbbbbaaaaaabbbbbbbbbbbbaaaaazzzzzzzzcccccccccccccccaaaaaaaaaaaaaaaaaaaaacccccbbbbbbbbbbbbbbzzzzzzzzzzaaaaaacccccccccczzzzzzzzbbbaaaaaabbbbbbbbbbbzzzzzzzzzzzzzzzzzzzzzzzzzzccccccccccccccccccccaaaaaaaaaaaaaabbbbbbbbbbcccccccccczzzzzzzzzzzzzzzbbbbbbbzzzzzzzzzzzzzzzzzzzzzbbbbbbbbbbbbbzzzzzaaaaaaccccczzzaaaaabbbbbbbbbbbbbbbbbbzzzzzzaaaaaaaaazzzzzzzzzzzzzzzzzbbbbbaaaaaaaaaaazzzzzzzzbbbbbbbbbbbbbbbccccccccccaaaaaaaaaaaaazzzzzzzzaaaaaaaaacccccccccccccaaaazzzzzzzzzzcccccccccccccccccccccccbbbbbbbbaaacccccccccccccbbbbaaaaaaaaaaaaaaazzzzzzaaaaaazzzzzzzzzzzzzaaaccccccccccaaaaaacccccccccaaaaaazzzzzzzzzzbbbbbcccccccaaaaaaaabbbbbaaaaaabbbzzaaaaaaaaaacccccccccccccczzzzzzzzaaaaaaaaaaaaaazzzzzzzzzzzzzzzaaaaaaaaaaaaaaaaaccccccccccbbbbbbbbbbbaaaaaaaaaaaaaaazzzzzzzzzzzzzzzzzbbbbbbbbbbbbbbbbbbbbbaaaaacaaaaaaaaaaaaaaaaaaazaaacccccccccccccaaaacccccccccczzzzzzzzzzzzzaaaaaaaacccccccccccccaaaaaazzzzzzzbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaabbbbbbbbbbbbbaaabbcccccccccccccccbbbbbbbbbbbbbzzzzzzzzzzzzzzzzaaaaaaaaaaaaaaaaaaaccccccbbbbbbbbaaaaaaaaaaacccccccaaazzzzzzzzzbbbbbbbbbbbbbzzzzzzzbbbaaaaaccccccbbbbbzzcccccccczzbbbbbbbbbaaaaaaaaaaabbbbbbbbbzzzzzzzzzzzzzzcccccccccccccccbbbbbbzzzzzbbbbbbbbbbbbbbbbbzzzzzzzzzzzzzzzzzzzzbcccaaaaaaaacccccccccbbbbbbbbaaaaaaaaaaaaaccccccccccaaaaaaaaaaaaaaazzzzccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaazzzzzzzzzzzzzcccbbbbbbbbbbbbbccccaazzzzzzzzzzzzzzaaaaaaaaacccccccccccccccccccczzaaaaaaazzzccccbbbbbbbbbbcbbbbbbbbbbbbccccccccccaaaaaazzzzzzzzzaaccccccccccccbbbbbbbbbbbbbbccccccccccccczzzzzzzzzzaaaaaaaaaaaaaaaaazzzzzzzzaaaaaaaaabbbbbbbbbbbbbbbbaaaaacccccccccaaaaaaaaaaaaaaaabbbbbaaaaaaaaaaaaaazzzzzzzzzbbbbbbbbbbbbzzccccccccccccccaaaaaaaaaaaabcczzzzzzzzccaazzzzzzzzzzzzzzzbbbbbbbbbbbbbbbbbbbbbbbbbbzzzzzzzzzzzzzzzaaaaaaaaaaazzzzzzzzzzzzzzzzzzzzzzaaaaaaaaaaaaaaaaaaaacccccczzzzcccccccccccczzzzzzzzzzzzzzcccccccccccccczzzzzzzzzzzzzzaaaaaabbbbbbbbbbbcccczzzzzzzzzzzaaaaaaaaaaaaaaabbcccccccbbbbbbbbbaaaabbbbbbbzzzzzzzzzzzzzzzzzzzzzzzzaaaaaaaaaaaaaaccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabccccccccbbaaaaaaaaaacczzzzzzzzzzbbbbbbbbaaaaaaaaabbbbbbbbbbbbbbbccccccccccccccczzzzzzzzzzcccccbbbbbbbbbbbbaaaaaaaaaaaacccccccccccccczzzzzzzzzzbbbbbbbbbbbzzzzcccccccccccccccccczzzzzzzzcbbbbbbbbbbzzzzzzzzzzzcccbbbbbbcccccccccccccbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccaaaaaaaaazzzzzzzzzzzzzzzzzzzzaaaaaaaaabbbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbccccccccccccccaaaaaaaaaaaazzzzzbbbbbbbazzzzzzzzzzzzzaaaaaaaazzzzzzzzzzbbbbbbbccccccccccccccaaaaaaazzzzzzzzzzzzzzzzzcccccccccccczzzzzzzzzzzczzzzzzzzzzzzbbbbbbbbbcccccccccccccbbbbbbbzzzzzzzzzzbbccccccbbbbbbbbbbbbbaaaaaazzzzzccccccccczzzzzzzzzzzzzzzzzzzzzzaaaaaaaaaaccccccccaaaaaaaaaaaaaaaaaaaabbzzzzzzzzzzzzzzzzzbbbbbbbbbbbbbbbbbbbbbbzzzzzzzzzzzzzzzzzzzzccccccccccccaaacccccccccccccccccbbcccccccccccccccccccccccccczzzzzzzzzzzbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaazaaaaaaaaaaaaaaaaaaaacccccccaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbccccccccccccccbbbbbbbbbbbbbbbbbaaabbbbbbbbbaaabbbbbbbbbzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzaaaaaaaaaaaaaaaaaaaaaacccbbbbbbcccaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbzaaaazzzzzzzzzzaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaazzzzzzzzzzzzzzzccccccccccccccczzbbbbbbbbbbbzzzzzzzzzzzbbbbbbbccccccczbbbbbcccccccbcccccccccccccccccczzzzzzzzzzzzzzzzzaazzzzzzzzzzzzzzcccccccccbbbbbbbbbbbbbbbccccccbbbbbbbaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbzzzzzzzzbbbccccccbbbbbbbbbbbbzzzzzzzbbbbbzzzzzzzzzbbbbzzzzzzzzzzzbbbbbbbbbbbbcccccccccczzzzzzzzzzcccccccccbbbbbbbbbbaaaaaaaaaaaaaaaaaaaacccccccccccczbbbbbaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaacccccccccccccccccaaaaaaaaaaaaccbbbbbbbbbbbbbbbbbbbzzzzzccccccczzzzzzzzzzzzzbbbbbbbbbbbbbbbcccaaaaaaccccccccccccccczzzzzzzzzzzaaacccccccccccccccccbbbbbbbbbbbbaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbccczzzzzzzzzzzzaaaaaaaaacccccccccccbbbbbbbbbbbbbbbbbbbbzzzzzzzzzzzzccccccccccccccczzzzzzzzzzzcccccccccccccccaacccccccccccccccaaaaaaaaaaaaaaaaaaaaccccccccccccccccaaaaaaazzzzzzzzzzzzbbbbbaaaaaazzzzzzzzcccccccccccczzzzzzzzzaaaaaaaaaaabbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbccccaaacccccczzbbbbbbbbbbbcccbbbbbbbbbbbzzzzzzzzzzzzzzzbzzzcccccccccccccccbbbbbbbbbbbbbbbbaaaaaaaaazzzzzzzzzzzzzbbbbbbbbbbbbbbbbbbbbbzzzzzzzzzzzzzzzzzzzzzzzzzzzzbbcccccccccbaaaaaaaaaaaaaaacccccbbccccccccaaacccccccczzzzzzzzzzcccccbbbbbbbbbaaaaaaaaazzcccccccccccccczzzzzzzzzzzccccccccccccccccaaaaaaaaaaaccccccccccccccccccccccbbbbbbbbbbbbbbazzzzzzzzzzzzzzbbbbbcccbbcccccccccccccccccccbbbbbbbbbbbccccccbbbbbbbbbbbbbbbccccccccccccccccccaaaaaaaaaaazzzzzzzzzzzzzzzaaaazzzzzzzzzzzzzzzzzzzbbbbbaaabbbbbbbbbbbzzaaaaaaaaaaaaaazzzzzzzzbbbbcaaaaaaaaaaaaaazzzccaaaaaaaaazzzzzzzzzzzzzzzcczbbbbbbbbbbbbbbbbbbbbbbczzzzzzzzzzzzzccccccccccbbbbbbbbaaaaaaaaaccccccccczzzzzzzbbbbbbbaaaaa\n",
       "out": "b11a15z11b16a28b13c26zcz10a35z18az10b8z9a2z4b11a29zc12b23a6b12a5z8c15a21c5b14z10a6c10z8b3a6b11z26c20a14b10c10z15b7z21b13z5a6c5z3a5b18z6a9z17b5a11z8b15c10a13z8a9c13a4z10c23b8a3c13b4a15z6a6z13a3c10a6c9a6z10b5c7a8b5a6b3z2a10c14z8a14z15a17c10b11a15z17b21a5ca19za3c13a4c10z13a8c13a6z7b36a8b13a3b2c15b13z16a19c6b8a11c7a3z9b13z7b3a5c6b5z2c8z2b9a11b9z14c15b6z5b17z20bc3a8c9b8a13c10a15z4c10b28a29z13c3b13c4a2z14a9c20z2a7z3c4b10cb12c10a6z9a2c12b14c13z10a17z8a9b16a5c9a16b5a14z9b12z2c14a12bc2z8c2a2z15b26z15a11z22a20c6z4c12z14c14z14a6b11c4z11a15b2c7b9a4b7z24a14c26a31bc8b2a10c2z10b8a9b15c15z10c5b12a12c14z10b11z4c18z8cb10z11c3b6c13b5a26c8a9z20a9b18c14b10c14a12z5b7az13a8z10b7c14a7z17c12z11cz12b9c13b7z10b2c6b13a6z5c9z22a10c8a20b2z17b22z20c12a3c17b2c26z11b9c14b17a18za20c7a25b8c14b17a3b9a3b9z37a22c3b6c3a25b8za4z10a18b26a15z15c15z2b11z11b7c7zb5c7bc18z17a2z14c9b15c6b7a11b20z8b3c6b12z7b5z9b4z11b12c10z10c9b10a20c12zb5a19b30a2c17a12c2b19z5c7z13b15c3a6c15z11a3c17b12a17b20c3z12a9c11b20z12c15z11c15a2c15a20c16a7z12b5a6z8c12z9a11b16c3b22c4a3c6z2b11c3b11z15bz3c15b16a9z13b21z28b2c9ba15c5b2c8a3c8z10c5b9a9z2c14z11c16a11c22b14az14b5c3b2c19b11c6b15c18a11z15a4z19b5a3b11z2a14z8b4ca14z3c2a9z15c2zb22cz13c10b8a9c9z7b7a5\n"
      },
      {
       "in": "aaaaaaaaaaaacccccccccccccccccccczzzzzzzzzzzzzzzzzbbbbbcccccccccaaaaaaaaaaaaaabbbbzzzzzzzzzzzzaaaccccccccczzzzzzbbbbbbbbbbzzzzzzzccbbbbbbbbbbbbaaaacccccccccccaaaacccccccccccczzzzzzzzaaaaaaaaaaaaaaaaaaaaaaaaaazzzzzzzzzzzaaaaaaaaaaaaazzzaaaaaaaaaaaaaaaaaaazzzzzzzzzbbbbzzzzzzzzzzzzzaaacccccccccccccaaaaaaabcaaaaaaaaaaaabbbbbbbbccbbbbbbbaaaaaaaaaabbbbbbbbbbaaaaaaaaaaaaaaaccccccccccccccccccccccccccccaaaaaaaaaaaaaaccbbbbbbcccccccccccczccccccccccccccccccccccccabbbbbcccczzzaaaaaaaaaacccbbbbbbbbbcccccccccccccczzzzzzzzzzzzzzbbbbbbbbbbcccccccccccccccccaccczzzzzzzzzzzzzzzzzzzzzzzaaaaaaaaaaaaaaabbbbbbbbbbzzzzzzzzzzzzzzzzzzzzzzzzbbbbbbbbbbbbbbaaaaaacccccccccbbbbbbbbbbbbbbbaaaabbbbbbbbbbbbbbcccccccccccczzzzzzzzzzzzzccccccaaaaaazzzzzzbbbbbbbbbaaaaaaaaaaabbbbbbbbbbbbbbbbbzzzzzaaaaaaaaaccccccbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbzzzzzzzzzzzaaaaaacccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbaaaaacccccccccccccccccccccbbbbbbzzzzzzaaaaaaaaaaaacccccccccccccccccccccccccczzzzzzzzzcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbzzzzzzzzzzzzzzcccccccccccccccbbbbbbbbbbaaacccccccccccccccccccbbbbbbbbbbaaaaaaaaaabbbbbccccccccccccccccccccczzzzzzzzzzzzaaaaaaaaaaaaaazzzzzzbbbbbcccccccccaaaaaaaaaaaaabbbbbbbbbbbccccaaaaaaaaaaazzzzccccccccccccccaaaabbbbbbbbbbbbaaaaaaaaaaaaaaaaaaccccccccccccbbbbbbaaaaaaaaaaacccccccccccccccaaaaccccccaaaaaaaaaaazzzzzzzcccaaaaaaaaaaaaaazzzzzzzzzzzzzaaccccccccccccczzzzzzzzzzzzzzzzzzzzzzzzzzzzzaccccccccccczzzzzzzzzzcccabbbbbbbbbbbbbaaaaaaccccccccccccccccbbbbbbbbbbbcccccccccccccccccczzzzzzzzzzzzzaaaaaaaaaaaaaccccccccccczzzzzzzzzcccccccccczzcccbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaabbaaaaaaaaabbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaaaaaabbbbbbbbzzzzccccccccccccccczzzzzzzzbbbbbbaaaazzzzzzzzzzzcbbbbbbbbbbzzzzzzzzzzzzzzzzzzbccccccccccccczzzzbbbbbbbbbbbbzzzzzzzzzzzccccczzzzbbbbbbbbcccccccccccccbbbbbbbbbbbbbbcccccaaaaaaaaaaaaaabbbccccccccccczzzzaaaaaaaaaaaaaaabbbbbbbbbbbbbbczzzzzzzzzzzzzzzzzbbbbbbbbbbbbbbbcccccccccccaaaaaaaaaaaaaaaaaaacccccbbbbbbbbzzzzzzzzzzzzzzzzzzzzzzzcccccccccccccccaaaaaaaaaabbbbabbbbbbbbbbbbbbbbbbbzzzzzzzzzzzzaaaaaaaaaaaaaccaazzzzbbbbbbbbbbbbbbbaaaaaaaaacccccccccccccczzzzzzzzzzzzzzzaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbaaaaabcccccabbbbbbbbbaaaaaaacccccaaaaaaaaaaaaaaaaazzzzzzzzzccccccccccccccccccccczzzzzzzzzzzzzzccccccczzzzzzzzzzzzzbbbbbbbzzzzzzzzzzzzzzzzzzzzzzzzzzzzbbbbbbbbbbbbbbbaaaacccccccccccczzzzbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaccccccccccczzzzzzzzzccccccccaaaaaaaazzzzzzzzzcccccccccczzzzzzzzzzaaaaaaaccccccccccccbbbbbbbbbbbbbbbccccczzzzzzzzzzzzzzccccccccczzzzzzzzzzbbbaaaaaaaaaaaaaaacccccccccbbbbbbbbbbbbbbbbbbbbbbbccccbbbzzzaaaaaazzzzzzzzzzzcccccccaaaaaacccccccccccccccccccaaaaazzzzzzzzzzzzzzzzzaaaaaaaazzzzzzzzzzzzbbbbbbbbbbbbbbbbbbbbzzzzzzzzzbbbbbbbbbbcccccccccccccccccccccczzzzzaaaaaaaaabcbbbbbccccccccccccccccccccbbbbbzzzzzzzzzzzzzzzzaaaabbbbbbbcccccccccccccccccccccccccaaaaaaaaaaaazzzzzzzcccccccczzzzzzzzzzzccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbaazzzzzzzzzzzzzzzzzzzzzzzzaazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzaaaaaaaazz\n",
       "out": "a12c20z17b5c9a14b4z12a3c9z6b10z7c2b12a4c11a4c12z8a26z11a13z3a19z9b4z13a3c13a7bca12b8c2b7a10b10a15c28a14c2b6c12zc24ab5c4z3a10c3b9c14z14b10c17ac3z23a15b10z24b14a6c9b15a4b14c12z13c6a6z6b9a11b17z5a9c6b12a29b13z11a6c13b25a5c21b6z6a12c26z9c15b23z14c15b10a3c19b10a10b5c21z12a14z6b5c9a13b11c4a11z4c14a4b12a18c12b6a11c15a4c6a11z7c3a14z13a2c13z29ac11z10c3ab13a6c16b11c18z13a13c11z9c10z2c3b7a25b2a9b14c12b38a6b8z4c15z8b6a4z11cb10z18bc13z4b12z11c5z4b8c13b14c5a14b3c11z4a15b14cz17b15c11a19c5b8z23c15a10b4ab19z12a13c2a2z4b15a9c14z15a6b26a5bc5ab9a7c5a17z9c21z14c7z13b7z28b15a4c12z4b11a24c11z9c8a8z9c10z10a7c12b15c5z14c9z10b3a15c9b23c4b3z3a6z11c7a6c19a5z17a8z12b20z9b10c22z5a9bcb5c20b5z16a4b7c25a12z7c8z11c6b36c2b6a2z24a2z37a8z2\n"
      },
      {
       "in": "aaaababbbbaaaaaabaabaabbababaabbaaabbabbbbbbabbabbbbaaaabbbabbababaabbababbaabbbaaaabaaaabaaababaaaaabaaaababbbaaaaabbababbbaaababbabaaabaabbbaabaaabbbabaabbbaaabbabaaabaabaabbbbabbaababaaabbaaaababbababaababbabaaaaabbabbaaabbabbaaaaaaaabaaaaababbabaaaaaaaabaaaabbabaabbbaaaaaabaaaabaababbaaaabbababbabbababbbaabaaabababbbbbaabbbabbaabbbbbabaabbbabbababbaaaababbbabaabbbbbaabaaaaabbbababbabbbbbbbabbbaaabbbababbaabaaababababbabbbbbababaaaabababbbabbbabbbabbbbbbbaabbabaabbbabbbbbabbaabbbbaaababaaabbbbbbbbaabbaababaaabbabaaaaababbabbabaabababaaabaababbabaabababbbaaabaaaabbbabaabbbaabbbababbbabaababaaabaababaaabababbabbbaaabbababaabbbabbbaabbabbaabbbabaaaaabaaabaaabbbbaaaabbaaaabbbaabababbaabbaaaabaaaaaaababaaabbaababaaaaababaaaaaabbbaaaabaaabaabaaaaabbbbbabbaaaaaaabbbaaaaaabaabbbabbbabbaababbbaabababbaabaaaabbbbaabaaaabaaababbaababbabbaaabaaabbaaaaabaaabbbaabbbbababbbaabaaabbbaaaaabbaaabaabbaaaabababbaabbbbaaaabbaaaabbabbaaabbababbbaabbababbaabbaaaabbbbabaaababaabaaabaaabbbbaabbaabbaabbbaaabaabababbabaaababaabbaabbaabaaabbaabbbaaababbbabababbabaaaabbbbabaabbaaabaaabaabbbaabbaabaababaababbababbababbababbbaabababbbabbabaabbaabbbbbaaabaaabbabbbbbbbabaabbabaaabbbaabaaabbaaaaaaaaaabaaaaaaaabbabbbbbbbaababaaababbbaaaabbbaababaaaabbaabbaaaaababbbaaaaababaaabbaaaabbbbbbabababaaaabaababbbaaabbbababbbbbbbaababaaaabababbaabaaabaaababaaabbbbaabaabbbaabbbaaababaabbabbababaaababaababbbbbbbbbaaabaaaabbbbbbaabababaabbbbabbaaaabaaabaabaabbbbbbbbbbbaabbbaaaabbaabbaabaabbaaaabbabababbbabaabaaaabaaaaabaaaabababbababaaabaabaaaaaababbababaababbaabbaaaabbbbbaabaaabababbbbbbbabaaaabbababbbbbabaabbbbbaaabbbabababaaabbbbbbabbbabbbbabbababbbbabaaaaaaabaaabbaaaaabaabbbaaabaaaaaaabaabaaaabababbbbbbabaaaaababababbabbaaababaaabbabbbbabbabaabbbbabbabaababbbaaaabbabbbabbaabbaabbbabbbbbbaaabaabbababbaaaaabbabbaaaabbaaababbaaababbaabbbababbabaabbaabbbbbabbababbaabbbbababababbbbbaabaabbaabaaaaaaabaaabababbabbaaaaaaaabbbbaabababbaaabbabbabbbaaaaaaaababbbaaabaaaabaabbbbbaaabaaaaababababbabaaabbbabaabaaababaaabaaabbbaabaabaababbbabbaabbbaaaaaababbbaabbbabaaabbaaaaaabaaabbabbbabbaaaabaabaabaaaaababbbababbabbabaabbaabbabbbabbbbabbbabbbbbabaabbbababbbabbabbbaabababbaabbbbbabaaabbaabaaabbaabaabbbbabbabababbaaaaaabaaaabbaababaaabbbbaaabbababababbbbbaabbaabbaabbabbaaaaaababbbbbbaababbaabbbbbababbabababababaaabbbbaababaababbabbaaaaabaabbabaabbbaabbabbbaaaaaabaaaaababaaabbaabbaaaaaabbbaabbaababababbbbaabbaabbaaaabbbbbabbaabbbaababaaababbbabbbabbabbaaababbbbaaabaababbbaaaaababbaaabaababaabbabaababaaaaaaabbabbababbababaaaababbaaababbbbabbabbbbabbaaabaaabbaabbaababbaabababbbabaaaababbaaaabababbaabbbbbabababbbbbaabbaabbbbaababaaabaabbbaaabbabbabaaaaaaaaaabbbbabaabbaaabaabbbababbbbbaabbababbbbabbabbbaaaaababbabbaabaabbaabbbabbbbbababbaaaaabbbbbbbaaaaaabbaaaabbbababababbabbaaabbaaabbaabbaabaaabababbbbaaabbabbabaabbbbbbbbbbaaaaaaaabbabbbaaaabaabaabbabaaababbbbbaababaabaaaabbbbabbabbbabbabababbaabbabbababbbababbababbabbabaabaaaabababaaabbbababbabbaaaababbaababaababaaabaaabaabbaabbabbbaabaaaaababbabbabaabbaaaaaabaaababbaabbaabbbbababbbbaabbbbabbbaababbbbbbaaabaabbbbaababbabbbbbbaabababbbababbaaaabbabbbbbbaaababbbbaabbbbbbbabaaaabbaaabbbbaaaaaababbaabbaaaabbabbbbababaabbabaabbbaabbabaabbbbbaababbbbaaabbbababababbabbababbaabbbaabbaaabbabaabbbbbbbbaabababbbabbabaababbaabbabbbbabbbabbbaabaaaaaaaabbbbaaabbaabaabbabaaaabababbabbbababbaaabaabaaabbabaabbbbbbbaabaaabbaaaaaabbbbabbababaaaaababbbabbaabababbaababbbaaabbaaaaaababaaabaaabbabbaabbaababaabaabaababbaabbbababbabbbbabababbbaabaaaaabbbaaabbbbbaaababbaabaabbaaabbaaabbababababaabbabababaababbbbabbbaaabaababbbbbababbababbaabbaaabbabaabaaabbbabbbaaaaababaabbbabbabbbaabbbbaaaabbabbbaabaaaaabbabbaabaabaaaaabbaababbaababbaabbababbabbaabaabbbaaaabbbaababbbabbabbbababbbbbbaabaabaababaaaaabaaaaaaabaabbbaabbbabbabababaabbbbabaabaabbabbabbbbbababababaaaaababbbaabbbbabbbbbaabbaabaabbababbbabbbbaaaabbaaababbbbaabbabbabbabbabaaabababbaaabbaabbbbbaaaaabbabbbbaaaaabbaaabbaabbaaabaaaaaaababbbbabbabbbaaabbaaabaabbbbabbabbaabbaaabbbbaaabbaabababbabaabaaaabbbab\n",
       "out": "a4bab4a6ba2ba2b2ababa2b2a3b2ab6ab2ab4a4b3ab2ababa2b2abab2a2b3a4ba4ba3baba5ba4bab3a5b2abab3a3bab2aba3ba2b3a2ba3b3aba2b3a3b2aba3ba2ba2b4ab2a2baba3b2a4bab2ababa2bab2aba5b2ab2a3b2ab2a8ba5bab2aba8ba4b2aba2b3a6ba4ba2bab2a4b2abab2ab2abab3a2ba3babab5a2b3ab2a2b5aba2b3ab2abab2a4bab3aba2b5a2ba5b3abab2ab7ab3a3b3abab2a2ba3bababab2ab5ababa4babab3ab3ab3ab7a2b2aba2b3ab5ab2a2b4a3baba3b8a2b2a2baba3b2aba5bab2ab2aba2bababa3ba2bab2aba2babab3a3ba4b3aba2b3a2b3abab3aba2baba3ba2baba3babab2ab3a3b2ababa2b3ab3a2b2ab2a2b3aba5ba3ba3b4a4b2a4b3a2babab2a2b2a4ba7baba3b2a2baba5baba6b3a4ba3ba2ba5b5ab2a7b3a6ba2b3ab3ab2a2bab3a2babab2a2ba4b4a2ba4ba3bab2a2bab2ab2a3ba3b2a5ba3b3a2b4abab3a2ba3b3a5b2a3ba2b2a4babab2a2b4a4b2a4b2ab2a3b2abab3a2b2abab2a2b2a4b4aba3baba2ba3ba3b4a2b2a2b2a2b3a3ba2babab2aba3baba2b2a2b2a2ba3b2a2b3a3bab3ababab2aba4b4aba2b2a3ba3ba2b3a2b2a2ba2baba2bab2abab2abab2abab3a2babab3ab2aba2b2a2b5a3ba3b2ab7aba2b2aba3b3a2ba3b2a10ba8b2ab7a2baba3bab3a4b3a2baba4b2a2b2a5bab3a5baba3b2a4b6abababa4ba2bab3a3b3abab7a2baba4babab2a2ba3ba3baba3b4a2ba2b3a2b3a3baba2b2ab2ababa3baba2bab9a3ba4b6a2bababa2b4ab2a4ba3ba2ba2b11a2b3a4b2a2b2a2ba2b2a4b2ababab3aba2ba4ba5ba4babab2ababa3ba2ba6bab2ababa2bab2a2b2a4b5a2ba3babab7aba4b2abab5aba2b5a3b3abababa3b6ab3ab4ab2abab4aba7ba3b2a5ba2b3a3ba7ba2ba4babab6aba5bababab2ab2a3baba3b2ab4ab2aba2b4ab2aba2bab3a4b2ab3ab2a2b2a2b3ab6a3ba2b2abab2a5b2ab2a4b2a3bab2a3bab2a2b3abab2aba2b2a2b5ab2abab2a2b4abababab5a2ba2b2a2ba7ba3babab2ab2a8b4a2babab2a3b2ab2ab3a8bab3a3ba4ba2b5a3ba5bababab2aba3b3aba2ba3baba3ba3b3a2ba2ba2bab3ab2a2b3a6bab3a2b3aba3b2a6ba3b2ab3ab2a4ba2ba2ba5bab3abab2ab2aba2b2a2b2ab3ab4ab3ab5aba2b3abab3ab2ab3a2babab2a2b5aba3b2a2ba3b2a2ba2b4ab2ababab2a6ba4b2a2baba3b4a3b2abababab5a2b2a2b2a2b2ab2a6bab6a2bab2a2b5abab2abababababa3b4a2baba2bab2ab2a5ba2b2aba2b3a2b2ab3a6ba5baba3b2a2b2a6b3a2b2a2bababab4a2b2a2b2a4b5ab2a2b3a2baba3bab3ab3ab2ab2a3bab4a3ba2bab3a5bab2a3ba2baba2b2aba2baba7b2ab2abab2ababa4bab2a3bab4ab2ab4ab2a3ba3b2a2b2a2bab2a2babab3aba4bab2a4babab2a2b5ababab5a2b2a2b4a2baba3ba2b3a3b2ab2aba10b4aba2b2a3ba2b3abab5a2b2abab4ab2ab3a5bab2ab2a2ba2b2a2b3ab5abab2a5b7a6b2a4b3abababab2ab2a3b2a3b2a2b2a2ba3babab4a3b2ab2aba2b10a8b2ab3a4ba2ba2b2aba3bab5a2baba2ba4b4ab2ab3ab2ababab2a2b2ab2abab3abab2abab2ab2aba2ba4bababa3b3abab2ab2a4bab2a2baba2baba3ba3ba2b2a2b2ab3a2ba5bab2ab2aba2b2a6ba3bab2a2b2a2b4abab4a2b4ab3a2bab6a3ba2b4a2bab2ab6a2babab3abab2a4b2ab6a3bab4a2b7aba4b2a3b4a6bab2a2b2a4b2ab4ababa2b2aba2b3a2b2aba2b5a2bab4a3b3abababab2ab2abab2a2b3a2b2a3b2aba2b8a2babab3ab2aba2bab2a2b2ab4ab3ab3a2ba8b4a3b2a2ba2b2aba4babab2ab3abab2a3ba2ba3b2aba2b7a2ba3b2a6b4ab2ababa5bab3ab2a2babab2a2bab3a3b2a6baba3ba3b2ab2a2b2a2baba2ba2ba2bab2a2b3abab2ab4ababab3a2ba5b3a3b5a3bab2a2ba2b2a3b2a3b2ababababa2b2abababa2bab4ab3a3ba2bab5abab2abab2a2b2a3b2aba2ba3b3ab3a5baba2b3ab2ab3a2b4a4b2ab3a2ba5b2ab2a2ba2ba5b2a2bab2a2bab2a2b2abab2ab2a2ba2b3a4b3a2bab3ab2ab3abab6a2ba2ba2baba5ba7ba2b3a2b3ab2abababa2b4aba2ba2b2ab2ab5ababababa5bab3a2b4ab5a2b2a2ba2b2abab3ab4a4b2a3bab4a2b2ab2ab2ab2aba3babab2a3b2a2b5a5b2ab4a5b2a3b2a2b2a3ba7bab4ab2ab3a3b2a3ba2b4ab2ab2a2b2a3b4a3b2a2babab2aba2ba4b3ab\n"
      }
     ],
     "hint": "Жолды бойлай жүріп, ағымдағы топтың ұзындығын сана. Келесі әріп басқа болғанда (немесе жол аяқталғанда) топ аяқталады.",
     "solution": "s = input().strip()\nres = []\ni = 0\nn = len(s)\nwhile i < n:\n    j = i\n    while j < n and s[j] == s[i]:\n        j += 1\n    length = j - i\n    res.append(s[i])\n    if length > 1:\n        res.append(str(length))\n    i = j\nprint(\"\".join(res))\n",
     "explain": "Бұл — <b>RLE</b> алгоритмі (run-length encoding). Екі көрсеткіш: i — топтың басы, j әріптер s[i]-мен сәйкес келгенше алға жүгіреді. Топтың ұзындығы — <code>j - i</code>. Осыдан кейін секіреміз: <code>i = j</code>. Әр символ бір рет қаралады, сондықтан күрделілігі O(n). Шешімді алдыңғы әріппен салыстыру арқылы жазсаң, жиі кездесетін қате — соңғы топты шығаруды ұмыту.",
     "starter": "s = input().strip()\n# кодыңды осында жаз\n"
    }
   ]
  },
  {
   "id": "g7-lists",
   "title": "Тізімдер: максимум, минимум, санау",
   "summary": "Массивті оқу, максимумды қолмен іздеу, санауыштар",
   "minutes": 25,
   "lesson": [
    {
     "type": "p",
     "text": "Тізім — мәндердің нөмірленген жиынтығы: <code>a = [5, -2, 7]</code>. Ол деректер көп болғанда және оларға қайта оралу керек болғанда қажет: максимумды табу, бір нәрсені санау, көршілерімен салыстыру."
    },
    {
     "type": "h",
     "text": "Кіріс деректерінен тізімді қалай оқу керек"
    },
    {
     "type": "p",
     "text": "Олимпиадалық есептерде сандар әдетте бір жолда бос орын арқылы беріледі. Стандартты жазылуы:"
    },
    {
     "type": "code",
     "code": "n = int(input())\na = list(map(int, input().split()))\nprint(a)\nprint(\"қосынды:\", sum(a), \"максимум:\", max(a))\n",
     "runnable": true,
     "input": "5\n3 -1 4 1 5\n"
    },
    {
     "type": "p",
     "text": "<code>input().split()</code> жолды бос орындар бойынша кеседі, <code>map(int, ...)</code> әр бөлікті санға айналдырады, <code>list(...)</code> нәтижені тізімге жинайды."
    },
    {
     "type": "h",
     "text": "Максимумды өз қолыңмен іздеу"
    },
    {
     "type": "p",
     "text": "Кірістірілген <code>max</code> және <code>min</code> ыңғайлы, бірақ жиі одан көп нәрсе керек: максимумның нөмірі, максимумдар саны, екінші максимум. Сонда цикл жазамыз: «осы сәттегі ең жақсыны» сақтап, оны жаңартып отырамыз."
    },
    {
     "type": "code",
     "code": "a = [4, 9, 2, 9, 7]\nbest = a[0]\npos = 0\nfor i in range(1, len(a)):\n    if a[i] > best:      # қатаң үлкен -> БІРІНШІ максимумды есте сақтаймыз\n        best = a[i]\n        pos = i\nprint(best, pos + 1)    # 9 2\n",
     "runnable": true
    },
    {
     "type": "warn",
     "text": "Максимумды <code>best = 0</code>-ден бастама: барлық сандар теріс болса, жауап қате шығады. Бірінші элементтен немесе <code>float('-inf')</code>-тен баста."
    },
    {
     "type": "h",
     "text": "Санау"
    },
    {
     "type": "p",
     "text": "Шартты қанағаттандыратын элементтер санын санау үшін санауыш ашамыз. Егер мәндер кішкентай болса (мысалы, 1-ден 5-ке дейінгі бағалар), санауыш-тізім ашқан ыңғайлы: <code>cnt[x] += 1</code>."
    },
    {
     "type": "code",
     "code": "marks = [5, 4, 5, 3, 5, 4, 2]\ncnt = [0] * 6        # 0..5 индекстері\nfor m in marks:\n    cnt[m] += 1\nfor m in range(5, 1, -1):\n    print(m, \":\", cnt[m])\n",
     "runnable": true
    },
    {
     "type": "tip",
     "text": "«Бір өту» олимпиадалық үлгісі: тізімдерге арналған көп есептер бір циклмен шешіледі, егер бірнеше күй-айнымалыны сақтасаң (ағымдағы максимум, санауыш, ағымдағы серияның ұзындығы). Бұл O(n) және әрқашан уақытқа сыяды."
    },
    {
     "type": "tip",
     "text": "Егер есепте n 10<sup>5</sup>-ке дейін болса, барлық жұптар бойынша қос цикл (n<sup>2</sup> = 10<sup>10</sup> операция) үлгермейді. Шешімді бір өтуден ізде."
    }
   ],
   "quiz": [
    {
     "q": "<code>a = list(map(int, '3 10 2'.split()))</code> орындалғаннан кейін <code>a</code>-да не сақталады?",
     "options": [
      "['3', '10', '2']",
      "[3, 10, 2]",
      "[3102]"
     ],
     "answer": 1,
     "explain": "split жолдар береді, map(int, ...) әрқайсысын санға айналдырады."
    },
    {
     "q": "Максимумды іздеуді <code>best = 0</code>-ден бастау неге қауіпті?",
     "options": [
      "бұл баяу",
      "барлық сандар теріс болса, жауап 0 болады",
      "Python рұқсат бермейді"
     ],
     "answer": 1,
     "explain": "0 кез келген теріс саннан үлкен, сондықтан максимум нөлде «тұрып қалады»."
    },
    {
     "q": "n = 100 000 болғанда барлық жұптар бойынша қос цикл шамамен неше операция жасайды?",
     "options": [
      "10<sup>5</sup>",
      "10<sup>7</sup>",
      "10<sup>10</sup>"
     ],
     "answer": 2,
     "explain": "n·n = 10<sup>10</sup> — бұл 1–2 секунд үшін тым көп."
    }
   ],
   "problems": [
    {
     "id": "g7-lists-1",
     "title": "Ең ыстық күн",
     "level": 1,
     "statement": "Таудағы метеостанция <i>n</i> күн бойы күн сайын температураны жазып отырды. Ең жоғары температураны тап және ол неше күні тіркелгенін анықта.",
     "input": "Бірінші жолда n саны (1 ≤ n ≤ 1000). Екінші жолда — n бүтін сан t<sub>i</sub> (−50 ≤ t<sub>i</sub> ≤ 50) — күндер бойынша температуралар.",
     "output": "Бос орын арқылы екі сан: ең жоғары температура және осындай температура болған күндер саны.",
     "examples": [
      {
       "in": "5\n12 15 9 15 3\n",
       "out": "15 2\n"
      }
     ],
     "tests": [
      {
       "in": "5\n12 15 9 15 3\n",
       "out": "15 2\n"
      },
      {
       "in": "1\n-5\n",
       "out": "-5 1\n"
      },
      {
       "in": "4\n-7 -3 -3 -10\n",
       "out": "-3 2\n"
      },
      {
       "in": "20\n0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0\n",
       "out": "0 20\n"
      },
      {
       "in": "1000\n33 29 -26 19 -17 -25 49 -50 -19 -9 45 14 -43 -46 35 -12 -49 28 40 -37 -47 49 -1 17 3 45 6 -5 -48 31 44 29 39 7 -32 25 -46 -30 36 41 30 9 -10 23 -16 48 18 9 -48 -14 -7 -6 -48 -42 48 -41 6 50 -50 17 3 -36 50 42 11 -39 -35 -16 -49 -1 -39 18 30 16 -20 0 -22 -35 37 -9 27 -50 38 16 3 38 48 22 24 -29 17 49 31 31 -49 -40 -28 46 -21 -22 -28 -9 -7 0 -43 -6 5 35 -34 14 13 -25 39 -12 16 -50 48 -25 -7 2 -24 45 7 39 -21 -11 -45 -7 44 -1 23 -21 2 22 -1 -41 -39 -38 -37 -11 19 -35 12 -44 41 -39 43 38 28 -46 -24 -46 42 -34 29 17 -21 29 22 3 0 -20 -16 -6 -31 32 -7 30 8 -28 7 -17 15 9 -43 -12 -23 19 -21 11 -12 23 35 31 24 24 50 20 -4 33 -50 43 19 43 -34 -41 -36 -22 44 34 31 -34 -48 -30 13 -30 -50 19 -17 -4 -2 -24 11 -50 -17 37 -19 -9 -33 3 -17 -4 -9 -9 -32 -48 14 -11 44 26 13 34 -50 33 -21 -40 10 8 34 -24 11 -33 -35 14 8 21 -35 -50 -10 -27 29 19 36 -26 30 27 29 -2 17 -42 34 -48 -25 23 -12 -41 48 -36 -29 6 -6 -36 -25 22 -2 -15 -25 -17 1 23 -36 36 3 -21 -18 -2 2 -38 4 17 -27 -30 -33 -15 -31 31 34 31 -32 17 49 39 46 -24 13 18 -29 -24 -20 -27 -32 0 -41 10 -6 38 -10 33 34 -39 -22 -42 25 17 -48 -47 36 -38 23 22 26 46 -40 -37 48 -3 -20 25 3 17 -7 -3 43 0 22 4 21 19 38 -30 48 37 18 41 31 -45 -12 47 -24 -23 -29 22 0 6 -21 5 50 10 -22 44 40 -41 12 50 4 2 40 -16 42 -12 5 44 -17 40 35 13 39 -45 7 13 -5 14 -47 33 10 -30 18 -11 -12 -37 12 11 -41 -41 -29 6 6 -6 11 14 -15 17 -7 -1 29 -33 8 -48 30 21 -39 -4 -14 -31 -5 49 -10 -9 45 2 13 27 -50 -31 -34 -24 -3 -22 1 -8 -1 -34 22 6 24 23 16 -45 32 25 26 -20 -8 38 -46 42 -32 18 24 22 -42 45 -11 -3 3 32 12 -14 -2 14 -3 -25 -15 16 -21 -22 12 -16 -28 12 45 20 -36 -24 10 -41 3 14 50 38 41 -18 -41 -35 48 -38 -5 13 -22 10 -40 11 -3 -18 -31 13 -34 -44 -30 39 -25 23 13 27 -31 -22 11 -16 9 -50 -37 0 -17 42 42 42 -20 15 28 -14 -37 -13 26 -44 -18 31 -29 -20 32 -33 28 15 24 8 -33 10 -49 -32 -24 41 50 18 -6 -11 -14 -44 -10 9 -42 -21 -1 -18 7 -31 -18 49 45 -36 -33 -19 14 -23 7 -29 -37 -10 8 -9 16 -2 50 -27 -27 -31 -15 1 -49 48 28 11 -38 -42 46 -40 4 -30 -22 44 -37 -21 -20 -44 -9 -39 33 -41 48 -1 16 -5 -38 41 39 -46 16 -34 19 15 -38 10 24 45 7 -9 -39 -9 38 -39 -35 1 -37 -7 -44 -20 -17 26 31 21 -44 -8 -5 -35 30 47 10 -19 26 12 -35 -23 -23 38 -34 -50 28 -33 29 48 38 -49 -49 -41 -28 -17 23 -17 -24 -36 -38 -7 -20 21 27 -50 -27 27 -25 28 3 48 14 16 -46 -36 -38 -22 -28 33 -44 -40 44 -37 -14 -18 43 -2 19 1 -5 10 -46 24 -20 -42 22 7 -43 -3 36 5 9 23 -2 27 31 4 -27 -44 24 -9 24 10 -49 41 -31 -48 14 -17 -10 18 26 13 9 30 -39 -14 -36 -18 -34 15 -47 18 -22 -1 47 13 -20 -5 -8 -18 -33 -12 36 -3 -19 -11 -41 25 30 29 -47 -47 36 -12 -7 28 6 -17 37 -12 -30 -2 -4 -21 50 -39 37 8 24 50 -37 -36 -23 16 -18 -46 -12 31 32 23 12 12 20 39 3 10 -48 16 -5 -14 -46 9 -44 12 0 -50 -9 -5 -25 -39 29 -48 15 20 10 -5 -19 47 -30 -39 0 -47 -3 39 -2 26 -37 33 29 14 -45 -46 -1 7 16 -48 27 -32 -45 -6 -35 36 -39 19 49 -29 -26 40 32 -39 -16 9 2 -7 36 -32 -27 24 40 -5 -50 -35 -42 21 49 29 6 -37 27 23 -9 -27 46 -8 -31 9 40 -45 34 32 -23 -32 48 -37 -41 50 24 19 -2 -4 12 -40 -9 40 -28 50 19 43 -32 13 19 -9 -18 34 -12 40 -22 8 22 -15 3 -11 41 19 -21 -30 -30 -13 11 -4 34 -2 -42 47 -16 11 -43 -16 48 31 -11 -37 -40 -38 12 -31 49 -9 -44 40 29 4 11 35 -24 16 24 -27 -41 39 10 -34 34 -11 -13 -36 22 15 40 9 13 -34 -1 20 33 -48 36 -6 -2 -45 -18 15 -41 33 -3 -30 12 -20 -14 6 -36 33 -30 27 44 33 -16 -13 19 46 -22 -18 -49 2 -3 -4 21 -41 47 23\n",
       "out": "50 12\n"
      },
      {
       "in": "1000\n-29 -42 -35 -37 -33 -34 -22 -36 -48 -49 -39 -48 -29 -46 -33 -49 -35 -29 -42 -24 -43 -25 -29 -49 -40 -50 -21 -31 -22 -28 -40 -42 -31 -34 -44 -47 -47 -39 -41 -48 -33 -34 -47 -20 -36 -26 -43 -39 -20 -42 -23 -21 -23 -49 -27 -23 -31 -23 -43 -48 -29 -20 -28 -30 -44 -38 -37 -41 -31 -39 -34 -25 -23 -39 -22 -33 -40 -44 -50 -25 -26 -33 -30 -27 -30 -32 -48 -35 -48 -44 -22 -27 -39 -34 -35 -50 -44 -32 -30 -44 -49 -40 -33 -34 -27 -34 -45 -46 -26 -23 -20 -39 -24 -21 -25 -46 -20 -39 -28 -44 -33 -36 -24 -23 -25 -20 -30 -25 -29 -33 -45 -23 -40 -48 -40 -35 -23 -27 -25 -44 -41 -35 -33 -49 -49 -49 -36 -40 -27 -48 -32 -20 -45 -39 -38 -39 -23 -48 -33 -44 -30 -22 -36 -33 -36 -24 -20 -33 -42 -30 -34 -28 -35 -46 -44 -46 -34 -34 -48 -25 -38 -37 -49 -49 -37 -21 -22 -46 -23 -22 -28 -49 -30 -33 -46 -23 -42 -34 -37 -47 -26 -36 -37 -28 -37 -40 -38 -25 -34 -23 -42 -49 -20 -34 -44 -28 -46 -26 -33 -21 -39 -44 -27 -39 -49 -39 -29 -24 -39 -45 -21 -20 -41 -21 -37 -44 -40 -33 -33 -47 -42 -22 -29 -35 -37 -30 -28 -40 -41 -43 -36 -32 -33 -39 -28 -31 -30 -37 -37 -48 -41 -47 -35 -46 -39 -45 -31 -45 -22 -29 -26 -40 -43 -21 -24 -43 -25 -43 -24 -45 -36 -46 -28 -29 -27 -32 -26 -42 -48 -25 -48 -29 -35 -37 -23 -31 -26 -29 -33 -36 -27 -48 -23 -39 -35 -20 -21 -39 -47 -30 -48 -48 -38 -26 -48 -23 -22 -39 -41 -39 -34 -42 -50 -44 -23 -46 -48 -29 -22 -34 -43 -20 -39 -20 -20 -23 -36 -20 -45 -24 -37 -50 -23 -46 -44 -39 -23 -41 -31 -42 -31 -40 -37 -46 -37 -32 -46 -29 -33 -35 -42 -44 -47 -42 -23 -37 -32 -32 -22 -26 -41 -24 -32 -30 -42 -49 -24 -48 -44 -24 -30 -46 -33 -26 -40 -49 -48 -46 -35 -21 -34 -26 -24 -30 -44 -38 -45 -34 -41 -44 -25 -49 -43 -44 -30 -46 -49 -34 -48 -28 -33 -35 -39 -47 -34 -35 -40 -20 -38 -28 -33 -49 -37 -28 -34 -33 -49 -38 -22 -28 -32 -22 -39 -49 -41 -20 -45 -26 -21 -29 -24 -26 -38 -21 -31 -49 -33 -29 -44 -33 -49 -46 -27 -23 -45 -32 -34 -50 -38 -50 -24 -45 -43 -30 -20 -31 -47 -33 -29 -37 -34 -45 -50 -37 -20 -25 -35 -23 -23 -49 -44 -24 -20 -35 -48 -44 -47 -38 -25 -48 -32 -32 -36 -43 -49 -28 -36 -45 -38 -28 -35 -31 -48 -28 -37 -20 -32 -41 -36 -29 -49 -38 -39 -22 -34 -24 -32 -26 -33 -31 -43 -42 -35 -21 -49 -47 -20 -46 -40 -34 -24 -50 -29 -35 -24 -31 -25 -32 -36 -21 -38 -41 -25 -37 -30 -24 -33 -31 -23 -44 -49 -50 -43 -36 -31 -47 -34 -24 -46 -48 -49 -22 -32 -43 -48 -46 -39 -26 -26 -29 -21 -37 -25 -31 -50 -33 -39 -20 -27 -34 -47 -33 -37 -36 -45 -37 -45 -28 -28 -47 -26 -28 -36 -21 -30 -26 -48 -33 -35 -39 -39 -47 -31 -48 -34 -33 -26 -22 -28 -23 -31 -45 -39 -27 -36 -25 -44 -35 -46 -23 -35 -45 -44 -40 -31 -34 -27 -43 -36 -37 -41 -24 -23 -35 -38 -50 -37 -38 -43 -22 -35 -37 -28 -35 -39 -23 -29 -27 -35 -26 -50 -44 -20 -39 -41 -25 -33 -41 -20 -45 -44 -21 -48 -48 -44 -39 -46 -21 -23 -48 -34 -46 -49 -29 -42 -21 -34 -40 -45 -29 -41 -44 -22 -36 -33 -43 -24 -31 -47 -47 -29 -34 -50 -30 -31 -48 -25 -33 -36 -41 -33 -27 -22 -31 -45 -21 -26 -31 -34 -45 -37 -45 -48 -28 -27 -25 -46 -48 -34 -37 -49 -41 -36 -26 -23 -34 -33 -22 -27 -50 -26 -34 -42 -48 -31 -25 -38 -42 -35 -48 -34 -28 -29 -46 -45 -35 -24 -25 -45 -50 -40 -27 -23 -27 -30 -39 -21 -20 -33 -49 -25 -20 -46 -44 -48 -49 -28 -26 -49 -45 -44 -26 -42 -50 -28 -47 -44 -39 -40 -48 -34 -35 -46 -39 -36 -27 -47 -35 -26 -20 -34 -24 -48 -45 -35 -21 -48 -22 -43 -32 -29 -34 -45 -45 -44 -40 -47 -43 -27 -44 -40 -31 -50 -40 -48 -26 -39 -32 -21 -24 -39 -48 -39 -23 -41 -34 -39 -30 -43 -21 -28 -20 -38 -32 -27 -20 -32 -42 -46 -43 -41 -24 -26 -24 -50 -46 -30 -24 -33 -42 -28 -48 -40 -50 -35 -34 -35 -33 -27 -26 -48 -34 -46 -42 -21 -32 -28 -42 -35 -44 -45 -43 -36 -22 -31 -39 -27 -22 -50 -27 -20 -42 -42 -33 -26 -50 -21 -27 -30 -24 -47 -28 -34 -20 -35 -35 -29 -26 -41 -34 -21 -33 -31 -36 -48 -45 -24 -35 -22 -46 -41 -42 -28 -47 -23 -38 -22 -50 -48 -25 -24 -42 -43 -49 -25 -33 -29 -44 -36 -38 -22 -20 -25 -21 -20 -20 -40 -32 -45 -27 -34 -29 -20 -38 -31 -35 -34 -34 -33 -44 -20 -42 -35 -23 -45 -23 -40 -28 -42 -28 -48 -34 -30 -32 -45 -29 -34 -50 -21 -36 -41 -37 -44 -39 -36 -49 -48 -41 -42 -36 -24 -46 -49 -41 -25 -31 -25 -37 -23 -46 -42 -34 -21 -37 -39 -34 -36 -29 -20 -33\n",
       "out": "-20 38\n"
      },
      {
       "in": "500\n31 32 30 30 30 30 32 31 31 30 30 30 32 32 32 30 32 32 31 32 30 32 30 30 32 30 32 31 30 30 31 32 31 32 30 30 30 30 31 30 30 32 30 30 31 32 30 31 32 30 31 32 32 31 32 32 30 32 32 31 32 32 31 31 31 32 31 31 32 32 30 30 32 32 32 32 30 31 32 31 32 31 32 30 30 31 31 32 32 31 31 31 30 32 32 32 31 31 31 31 30 32 30 32 30 30 30 32 31 30 32 31 31 31 31 30 30 30 32 30 32 31 31 32 32 30 30 32 31 30 30 30 32 30 32 30 32 31 30 32 32 31 30 31 30 31 30 30 31 30 30 32 30 32 30 31 32 30 32 31 32 31 30 31 31 30 31 32 32 32 32 30 30 31 32 32 30 32 32 31 32 32 32 31 31 30 32 30 31 30 31 32 32 32 30 30 32 32 32 32 32 32 30 31 32 32 31 30 32 30 30 32 31 30 32 31 31 31 31 31 30 31 31 31 30 32 31 31 32 32 32 31 30 32 31 31 32 30 31 32 30 31 32 31 31 31 31 31 32 31 31 32 31 30 31 30 30 30 30 31 31 30 32 31 31 30 32 32 32 31 30 30 31 32 30 31 31 30 30 32 31 31 30 32 31 30 30 32 30 32 30 30 30 31 31 32 32 30 32 32 32 30 30 32 32 30 30 30 30 30 30 32 32 30 30 30 30 30 30 31 30 30 30 32 30 30 31 32 31 30 30 32 31 31 32 30 30 30 32 32 30 32 32 30 31 31 32 30 32 32 30 30 30 32 30 32 31 32 31 30 32 32 32 30 30 31 30 31 32 31 32 31 30 30 32 31 32 30 32 31 32 32 32 31 31 30 30 32 31 31 30 31 31 30 30 31 32 30 32 31 30 32 30 30 32 30 32 30 31 31 30 32 32 31 32 30 31 30 30 32 30 31 31 32 30 32 32 32 32 30 30 32 32 32 30 30 30 31 32 32 32 32 31 31 31 32 31 30 31 30 30 32 31 32 30 31 31 32 32 30 30 32 32 30 32 32 31 32 30 30 30 30 31 30 32 31 32 30 31 31 32 32 30 30 31 30 30 30 30 30 30 31 32 32 31 32 30 30 32 30\n",
       "out": "32 177\n"
      }
     ],
     "hint": "Алдымен максимумды тап, содан кейін оның неше рет кездесетінін сана. Немесе бәрін бір өтуде жаса.",
     "solution": "n = int(input())\nt = list(map(int, input().split()))\nbest = max(t)\nprint(best, t.count(best))\n",
     "explain": "Максимумды <code>max</code> функциясымен, санын <code>count</code> әдісімен табамыз. Бір өтуде де болады: егер <code>t[i] > best</code> болса — жаңа максимум, санауыш = 1; егер <code>t[i] == best</code> болса — санауыш + 1. Барлық температуралар теріс болатын тестке назар аудар: мұнда максимумның бастапқы мәні 0 болса, шешім бұзылар еді. Күрделілігі O(n).",
     "starter": "n = int(input())\nt = list(map(int, input().split()))\n# кодыңды осында жаз\n"
    },
    {
     "id": "g7-lists-2",
     "title": "Жүгіру рекордтары",
     "level": 2,
     "statement": "Әсел мектеп спартакиадасына дайындалып, n күннің әрқайсысында неше метр жүгіргенін жазып отырады. Егер сол күні ол алдыңғы күндердің әрқайсысынан қатаң көп жүгірсе, ол күн <b>рекордтық</b> деп аталады. Бірінші күн әрқашан рекордтық.<br>Рекордтық күндердің санын тауып, олардың нөмірлерін шығар.",
     "input": "Бірінші жолда n (1 ≤ n ≤ 1000). Екінші жолда — n бүтін сан d<sub>i</sub> (1 ≤ d<sub>i</sub> ≤ 10<sup>9</sup>).",
     "output": "Бірінші жолда — рекордтық күндер саны k. Екінші жолда — олардың нөмірлері өсу ретімен бос орын арқылы.",
     "examples": [
      {
       "in": "7\n3 1 4 4 5 2 9\n",
       "out": "4\n1 3 5 7\n"
      }
     ],
     "tests": [
      {
       "in": "7\n3 1 4 4 5 2 9\n",
       "out": "4\n1 3 5 7\n"
      },
      {
       "in": "1\n10\n",
       "out": "1\n1\n"
      },
      {
       "in": "4\n5 5 5 5\n",
       "out": "1\n1\n"
      },
      {
       "in": "50\n1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50\n",
       "out": "50\n1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50\n"
      },
      {
       "in": "100\n100 99 98 97 96 95 94 93 92 91 90 89 88 87 86 85 84 83 82 81 80 79 78 77 76 75 74 73 72 71 70 69 68 67 66 65 64 63 62 61 60 59 58 57 56 55 54 53 52 51 50 49 48 47 46 45 44 43 42 41 40 39 38 37 36 35 34 33 32 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1\n",
       "out": "1\n1\n"
      },
      {
       "in": "1000\n205774136 726546264 207761414 434629739 43970144 99034077 621869859 513874808 766546453 399908574 855892125 852691071 51454065 647207111 193493768 84200396 80209484 632874909 591907917 592389311 28832327 834986223 421730399 120313892 258229055 579369878 553538530 384347857 270536276 759165436 26484517 648682570 502790242 275488971 758711545 468851001 321518335 565509834 593116747 406538092 59882301 605799536 422951274 96718754 886957652 451688936 140771588 113306362 428581967 878698983 543257253 617966583 809133003 300465747 872229360 426558450 790714446 12539997 409357622 62845875 764242846 784594500 214335874 261841173 662555309 247992840 17135622 608958973 206737500 187968429 332008899 378067916 997621161 792535800 127564949 22368144 942638370 940943286 98463644 106941073 376337053 659831334 902454155 72237480 649784294 480900085 903961566 918966483 30648103 37400239 202628542 838428500 698700050 695971318 351253265 833798402 343018997 160290817 10631709 89461067 12799857 561683688 425682343 651113737 562951660 738055895 448803196 192316365 609734858 374558588 232268699 271714595 200240338 880185792 358334149 809048869 722396510 967217767 472767935 449143797 502040812 669197483 133923076 251638450 80136900 612074885 300348952 839353569 186386453 994817647 965824430 513063324 388886435 590242306 940010045 519518922 604591594 762030738 964191979 890905187 962759545 978574998 763684410 929957242 481514923 528935251 261713103 5351530 605790102 960277546 334694619 220590562 889530119 919376099 45877180 430784945 683652015 364053343 281173602 451089264 789753134 582366757 158603763 936515838 566112766 383560789 450378375 567674317 157141465 564914755 901402095 605162062 385200734 212066566 847426629 840202920 521242013 359228190 818270797 810338074 989836137 443846386 669519530 364691379 746299081 39074526 589319944 227757609 140696142 631387289 492971439 714249393 67056328 97492983 193961091 995344602 998651116 408281104 767347913 145102530 916440977 467147612 388676261 64426096 880772233 651810616 276361054 245151091 634613869 233513510 251703491 683890184 348711532 993614737 852549730 14613393 585330324 767754431 858995322 624956586 112577300 522842722 814783464 452435872 357510077 11938418 750262741 377699795 436843271 561923193 525584193 360190131 206702193 943710160 365237935 742819076 907996145 194574177 870356929 246382646 853111740 344034987 528192518 388365266 536233813 905795567 960555720 126254928 449435034 241356827 881771313 13899541 729899808 527617813 124756046 486811930 683483457 642122358 999430517 803616648 435849027 597170410 532583049 77321606 112745032 748181744 808624100 383462607 557382262 653561068 180177225 660395073 941532664 45721221 468153862 206742450 293254734 512407204 394245246 189558010 148885346 849484539 286174080 838577188 849458981 339575167 360999720 643288225 997609909 353192152 20245798 255479630 94395178 332658312 728931259 910684918 350489044 109736619 209875344 723607736 614108773 952137352 824339096 264647102 865443173 861071706 54315804 817024069 518724400 452372113 234306526 194789534 130920266 476266018 261020476 450374473 789310650 910178121 617436962 626194956 140049626 100933236 306711095 143925202 70866256 775398177 994451408 809754469 867595508 507177497 26444116 163210866 481218430 221915616 747146457 273079844 205446440 325490661 674515757 500712681 638857901 556565937 913961406 831058507 212766459 568664903 54152286 337903278 717890983 5033957 53556206 949123052 522005189 113945197 149854913 663424590 802219127 190468375 463312537 25932168 900717123 64729299 718966482 270726881 209644354 622378158 639598823 529976970 862305559 990347338 362815255 371054163 111105763 294684520 989476424 366595083 68393346 577121013 991404127 760805524 64892509 710338857 760272511 549816167 652044203 255579023 800835995 64853682 639888772 383902344 238807673 162904444 84621980 607749036 797844600 311279188 484714767 503860698 133896741 9979689 600282955 120724976 284501447 483804708 281671966 365639896 940769972 384266565 663875163 722661652 803353336 809840555 877177296 590237520 468895530 273311412 484570909 762890281 463956232 246818536 383798508 360837080 836000683 66342270 949614852 415999044 319978657 824325263 763774671 718177286 231236048 216209610 8454945 186918149 735713319 295801304 833556896 166021446 354148305 494336894 67146438 772070963 760386189 344686735 696920751 816240006 775030687 905992365 150621325 525705029 979054664 139744867 466406364 294495305 699163798 405572849 705688710 567538106 162267735 566111971 558305400 316039808 109166313 64558767 815015499 677403645 599707058 770502040 981238108 746519878 99832274 425759230 951919837 920983896 481144262 18578081 151230657 138795597 19671762 268305364 595345822 291027349 561676361 181837125 244341575 564272083 509248026 3853084 523206295 38836599 522089554 653405359 950993725 844654767 74505719 429474536 704130708 594753407 545653891 358659383 578121794 248054820 902535592 857641995 688542738 844787148 154061087 731976547 846574215 982692892 464575950 125012519 165291672 882944920 127210207 343139717 287735817 988702519 446009730 849866066 748532984 810980172 776673581 419673955 59145580 562389557 238139537 840277816 680001664 62243235 344703813 578985056 781138492 610009418 35440108 770900131 923714501 367305860 614141934 650846993 757783386 790317614 340900762 409746935 322147887 731911462 739515125 970089480 16213605 396603952 175499760 564955735 685287412 519621062 409763111 900448010 827280838 289862594 807697331 307200022 423479721 421466024 662557027 700408948 505903297 165850061 368391176 247419316 540115166 101086047 784372202 162720797 442783730 29288391 286767887 414007692 683618369 613657118 878091695 97037578 312478269 220520229 630363612 943159791 492910565 340653945 30915411 74310533 264703115 738763433 362141778 697464289 159099492 186947214 244592526 520830589 146159696 290672767 986113445 606406282 346201598 738846155 342763353 556068254 151352662 805487885 297059831 668671774 719117522 89787689 448162061 705094459 758918062 519493972 577247168 815046588 333356380 413901076 377524798 689976482 912712968 22495530 246927885 527523082 698042649 659148222 5917354 532649423 885734432 176662697 478974879 630937267 488176168 775190328 534338986 399859281 118844424 246964425 496776148 743256926 229178290 673343605 355663920 58472888 315149086 290417708 419770668 665996573 303732252 509611904 315099714 75708114 620719638 48781538 400170704 632699294 169183850 424297332 138623939 392481001 241508804 406253565 183599048 540259299 477540386 901954815 304839426 627655478 724101785 567032238 950836781 76667857 727749965 28105356 20499996 120379201 468120426 332791839 519302537 143705705 152435364 463658241 248591427 390341749 497229362 780967033 759838694 732658527 75944805 451540628 751002217 690625190 141979289 506685909 655510218 162696937 948721724 22466556 950320906 302022486 150463948 984048651 178322645 162788848 968340059 748756383 44749098 818655275 926875692 72273595 794577522 664115415 316878736 24561027 115490632 791113430 322319778 853245147 345754882 340282823 3073612 313982247 786979856 100658068 752717896 666300434 317195462 393024875 630657751 353233046 238836822 871772682 868306603 421974019 391955948 849637159 237283405 213672303 768932514 459109712 635620974 475009068 505186736 333714568 866702577 778269470 161572007 901606032 503812562 237049200 918083953 102037365 430013248 282551554 453199880 772883309 861331587 899452954 386564651 810818663 401404651 756713426 891237216 888243841 151918526 986940032 782422776 570800716 416340991 193744466 7531632 367672754 565732264 332925563 381485994 834225238 374483 166994014 39968157 330131986 490843068 311300646 16890850 758376151 386363937 849139699 841518798 9386323 722739018 852722830 722509421 364349370 524178438 861241729 98056114 166963748 892615635 609477794 817318219 739348151 513002877 810096592 603471631 172227944 863162803 455627364 530846126 336799825 510629478 611741038 520274500 729424190 790412129 960262801 789760762 513827551 359488978 627550712 833621852 225918019 403288703 731099129 723349701 886545796 405239004 6168215 965511952 746521378 798599374 835018636 115019127 409304164 377211117 922369654 465349153 958922865 649256133 612611663 36250508 811344588 585575614 304783080 996893031 556124009 68904895 994258829 956995251 853112363 614408696 229905288 388262729 776252387 434179301 771833165 47331742 808544210 481712784 452223989 664310537 126617393 209089713 917757143 584883811 941919960 167345411 774496891 929083387 233645902 651912475 536222748 496495876 552443159 390879299 845718853 525586350 864054307 491261723 460495732 522393143 673149832 255242304 772634904 975363255 931433989 190505246 255858436 828148368 44500251 409231971 661027098 641434383 820319665 604579408 698104671 794289528 350876570 322924007 642936934 727887358 209425769 396878823 898831961 840098530 908159020 529988203 628781837 690755641 798795453 112719422 300935207 246846722 5132672 332962376 961663883 22873677 563581686 81573210 693769531 239758215 891739061 823415943 956096905 713009305 414401241 523497360 418829044 419253671 479793617 780306828 893172820 262841247 389524356 866161253 450816296 309993941 393532561 989660510 367328703 165129009 442355473 219692296 910345505 715962113 65098824 196179607 85646439 848896948 851281622 600717552 545718652 689589427 596549795 321686592 821027638 144807651 938525617 868716853 410077628 969879214 536049071 845813288 235007915 820378723 269183045 133511953 914890570 569332842 689548232 537557230 480126215 785995898 687473776 704781550 198869205 4002799 813210393 383568805 755833886 617638777 301692938 198259839 51601610 581737372 55958272 349098231 773908973 281894775 646140002 794631282 387412054 797061109 204117203 804761344 691123465 403249170 210777391 34002209 628785713 904984794 81937664\n",
       "out": "8\n1 2 9 11 45 73 197 259\n"
      },
      {
       "in": "300\n1 1 1 1 2 2 3 3 3 3 3 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 6 6 6 6 6 6 6 6 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 9 9 9 9 9 9 10 10 10 10 10 11 11 11 11 11 11 11 12 12 12 13 13 13 13 13 13 13 14 14 14 14 14 14 15 15 15 15 15 15 16 16 16 16 17 17 17 17 17 17 17 18 18 18 18 19 19 19 19 19 19 19 20 20 20 20 20 20 21 21 21 21 21 21 21 22 22 22 22 22 22 23 23 23 23 23 23 23 24 24 24 24 25 25 26 26 26 26 26 26 26 26 27 27 27 27 27 27 27 27 28 28 28 28 28 29 29 29 29 30 30 30 30 30 30 30 31 31 31 31 31 32 32 32 32 32 32 32 32 32 33 33 33 33 33 33 33 33 33 34 34 34 34 34 34 35 35 35 35 35 36 36 36 36 36 36 37 37 37 38 38 38 38 38 38 38 38 39 39 39 39 39 39 39 40 40 40 40 40 40 41 41 41 41 41 41 41 42 42 42 42 42 43 43 43 43 43 44 44 44 44 44 44 44 44 45 45 45 45 45 46 46 46 47 47 47 47 47 47 47 48 48 48 48 48 48 49 49 49 49 49 49 49 50 50 50 50\n",
       "out": "50\n1 5 7 12 21 29 37 47 54 60 65 72 75 82 88 94 98 105 109 116 122 129 135 142 146 148 156 164 169 173 180 185 194 203 209 214 220 223 231 238 244 251 256 261 269 274 277 284 290 297\n"
      }
     ],
     "hint": "Алдыңғы әр күнмен салыстырудың қажеті жоқ. Бір санды — бүгінге дейінгі ең жақсы нәтижені есте сақтау жеткілікті.",
     "solution": "n = int(input())\nd = list(map(int, input().split()))\nbest = 0\ndays = []\nfor i in range(n):\n    if d[i] > best:\n        best = d[i]\n        days.append(i + 1)\nprint(len(days))\nprint(*days)\n",
     "explain": "«Алдыңғылардың бәрінен үлкен» = «алдыңғылардың максимумынан үлкен». Сондықтан ағымдағы <code>best</code> максимумын сақтаймыз: бүгінгі мән қатаң үлкен болса — күн рекордтық, best-ті жаңартамыз. Мұнда <code>best = 0</code> жарайды, себебі барлық d<sub>i</sub> ≥ 1. Қос циклді аңғал шешім — O(n<sup>2</sup>), біздікі — O(n). <b>Қатаң</b> деген сөзге назар аудар: рекордты қайталау рекорд саналмайды.",
     "starter": "n = int(input())\nd = list(map(int, input().split()))\n# кодыңды осында жаз\n"
    }
   ]
  },
  {
   "id": "g7-sort",
   "title": "Сұрыптау",
   "summary": "sorted, кортеж-кілттер және сұрыптау шешетін есептер",
   "minutes": 30,
   "lesson": [
    {
     "type": "p",
     "text": "Егер деректерді алдымен <b>реттесе</b>, көп есептер оңай болып шығады. Сұрыптаудан кейін ұқсас мәндер қатар тұрады, ең үлкендері — соңында, ең кішілері — басында."
    },
    {
     "type": "h",
     "text": "sorted және sort"
    },
    {
     "type": "code",
     "code": "a = [5, 2, 9, 1, 7]\nprint(sorted(a))                # жаңа тізім: [1, 2, 5, 7, 9]\nprint(sorted(a, reverse=True))  # кему ретімен\na.sort()                        # a тізімінің өзін сұрыптайды\nprint(a)\n",
     "runnable": true
    },
    {
     "type": "p",
     "text": "<code>sorted(a)</code> жаңа тізім қайтарады, ал <code>a.sort()</code> тізімнің өзін өзгертеді және ештеңе қайтармайды. Python-да сұрыптау O(n log n) уақытта жұмыс істейді — 10<sup>5</sup> сан үшін бұл лезде орындалады."
    },
    {
     "type": "h",
     "text": "Кілт бойынша сұрыптау"
    },
    {
     "type": "p",
     "text": "<code>key</code> параметрі <i>не бойынша</i> салыстыру керегін айтады. Мысалы, сөздерді ұзындығы бойынша: <code>sorted(words, key=len)</code>. Бірнеше белгі бойынша салыстыру керек болса, кілт кортеж қайтарады: алдымен бірінші элементтер салыстырылады, тең болса — екіншілері."
    },
    {
     "type": "code",
     "code": "people = [(\"Арман\", 85), (\"Дана\", 92), (\"Bek\", 85), (\"Әлия\", 92)]\n# ұпайы бойынша кему ретімен, тең болса - аты бойынша әліпби ретімен\nres = sorted(people, key=lambda p: (-p[1], p[0]))\nfor name, score in res:\n    print(name, score)\n",
     "runnable": true
    },
    {
     "type": "tip",
     "text": "Кілттегі сан алдындағы минус — бір өрісті кему ретімен, ал екіншісін өсу ретімен сұрыптаудың қарапайым тәсілі."
    },
    {
     "type": "h",
     "text": "Сұрыптау есепті қашан шешеді"
    },
    {
     "type": "p",
     "text": "Мысал: n сан берілген, кез келген екеуінің арасындағы ең аз айырманы тап. Барлық жұптарды тексеру — O(n<sup>2</sup>). Бірақ сұрыптаудан кейін мәні бойынша ең жақын сандар <b>қатар</b> тұрады, сондықтан тек көршілерді салыстыру жеткілікті."
    },
    {
     "type": "code",
     "code": "a = [40, 3, 17, 25, 9, 31]\na.sort()                      # [3, 9, 17, 25, 31, 40]\nbest = min(a[i + 1] - a[i] for i in range(len(a) - 1))\nprint(best)                   # 6\n",
     "runnable": true
    },
    {
     "type": "list",
     "items": [
      "«Ең үлкен/кіші k-ны тап» → сұрыпта да, қима ал.",
      "«Ең жақын жұп», «ең аз айырма» → сұрыптау + көршілер.",
      "«Нәтижелер кестесі», «рейтинг» → кортеж-кілтпен сұрыптау.",
      "«Жұптарға ... болатындай бөлуге бола ма» → көбіне сұрыптау мен ашкөздік көмектеседі."
     ]
    },
    {
     "type": "warn",
     "text": "Жолдар символ кодтары бойынша сұрыпталады: барлық бас әріптер кіші әріптерден бұрын, ал латын әріптері кириллицадан бұрын келеді. <code>sorted(['b', 'A', 'a'])</code> ['A', 'a', 'b'] береді."
    }
   ],
   "quiz": [
    {
     "q": "<code>print([3, 1, 2].sort())</code> не шығарады?",
     "options": [
      "[1, 2, 3]",
      "None",
      "қате"
     ],
     "answer": 1,
     "explain": "sort әдісі тізімді орнында өзгертіп, None қайтарады. Жаңа тізім үшін sorted қолдан."
    },
    {
     "q": "Қандай кілт (аты, ұпайы) жұптарын ұпайы бойынша кему ретімен, ал тең болса — аты бойынша сұрыптайды?",
     "options": [
      "<code>key=lambda p: (p[1], p[0])</code>",
      "<code>key=lambda p: (-p[1], p[0])</code>",
      "<code>key=lambda p: -p[0]</code>"
     ],
     "answer": 1,
     "explain": "Минус ұпай бойынша ретті кері аударады, ал аты өсу ретімен салыстырылады."
    },
    {
     "q": "Сұрыптаудан кейін ең аз айырманы неге тек көршілердің арасынан іздеуге болады?",
     "options": [
      "солай басып шығару тезірек",
      "көрші емес элементтердің арасында әрқашан олардың әрқайсысына жақынырақ элемент тұрады",
      "бұл дұрыс емес, барлық жұптарды қарау керек"
     ],
     "answer": 1,
     "explain": "Егер a[i] ≤ a[j] ≤ a[k] болса, онда a[k] − a[i] ≥ a[j] − a[i]. Көрші емес жұп ешқашан көрші жұптан жақсы болмайды."
    }
   ],
   "problems": [
    {
     "id": "g7-sort-1",
     "title": "Мектеп құрамасы",
     "level": 1,
     "statement": "Олимпиаданың мектеп кезеңіне n оқушы қатысты. Келесі кезеңге ең жоғары ұпай жинаған k адамнан тұратын команда өтеді. Жаттықтырушы болашақ команданың жиынтық ұпайы қандай екенін білгісі келеді.",
     "input": "Бірінші жолда екі сан n және k (1 ≤ k ≤ n ≤ 1000). Екінші жолда — 0-ден 100-ге дейінгі n бүтін сан — қатысушылардың ұпайлары.",
     "output": "Бір сан — ең үлкен k ұпайдың қосындысы.",
     "examples": [
      {
       "in": "5 3\n70 85 40 100 85\n",
       "out": "270\n"
      }
     ],
     "tests": [
      {
       "in": "5 3\n70 85 40 100 85\n",
       "out": "270\n"
      },
      {
       "in": "1 1\n0\n",
       "out": "0\n"
      },
      {
       "in": "4 4\n10 20 30 40\n",
       "out": "100\n"
      },
      {
       "in": "6 2\n50 50 50 50 50 50\n",
       "out": "100\n"
      },
      {
       "in": "1000 1\n87 100 17 76 6 36 46 98 54 15 41 71 36 13 48 71 88 14 93 57 83 2 88 50 97 22 24 12 50 8 39 69 13 40 48 53 27 98 93 54 2 23 54 77 71 44 77 41 5 2 85 38 87 4 82 83 19 80 35 16 67 89 85 12 40 21 82 11 39 79 35 52 62 76 64 58 6 38 92 61 72 38 25 95 69 69 5 28 4 83 54 14 19 82 44 20 49 1 51 95 9 57 64 68 14 87 77 10 72 97 5 94 14 91 84 46 25 96 96 58 87 14 21 17 85 84 92 36 60 87 68 54 89 83 10 64 47 52 90 16 46 9 21 84 58 18 70 60 69 12 42 93 5 27 55 93 13 18 80 67 82 25 25 97 80 66 70 50 78 97 23 79 61 50 79 87 31 42 49 6 75 61 67 65 55 0 13 79 99 58 91 37 51 57 63 6 54 10 50 97 41 25 40 18 9 33 40 44 66 96 67 64 24 41 92 72 5 75 17 89 86 62 16 50 96 6 78 7 97 35 52 23 71 64 76 38 15 1 42 9 47 53 94 43 100 42 88 12 23 59 32 22 18 44 78 90 3 47 88 75 59 15 67 12 76 54 40 53 96 74 91 59 53 19 97 97 89 87 72 20 95 77 6 31 93 88 19 34 94 98 40 86 74 11 94 82 100 85 47 33 58 42 75 33 53 16 23 27 54 66 18 21 22 37 1 6 72 79 62 50 82 85 69 87 87 10 60 42 2 99 20 70 45 17 13 76 18 48 44 86 62 10 72 25 51 45 62 97 48 35 98 42 67 68 39 12 32 76 85 13 75 1 52 86 48 78 51 91 56 56 12 91 73 11 2 43 38 24 18 8 51 10 28 1 29 54 27 76 6 19 1 73 36 27 96 99 32 59 51 22 53 75 90 23 36 83 45 56 64 91 30 97 54 33 95 90 64 23 7 22 44 72 6 29 49 60 71 4 46 15 23 90 19 8 34 29 12 70 69 24 52 80 25 95 40 7 40 25 9 76 84 96 44 49 59 41 72 88 93 72 30 38 20 51 43 85 88 93 83 59 64 100 58 14 81 94 42 60 88 9 38 63 23 53 34 67 92 51 91 61 54 52 87 8 43 22 32 85 91 56 62 56 56 3 29 3 95 51 58 39 68 64 71 0 39 51 72 68 56 6 5 19 19 13 74 34 66 48 95 59 37 56 21 56 85 80 97 10 1 54 13 28 1 36 0 46 95 62 44 12 13 73 11 79 32 69 45 8 56 48 94 99 12 61 34 8 26 45 28 36 55 96 50 93 81 13 5 82 16 87 91 14 26 53 85 41 33 5 67 44 44 86 70 52 50 47 44 30 79 88 56 42 21 59 64 46 66 93 47 86 87 84 22 54 69 57 34 98 46 65 21 72 48 43 25 70 11 88 28 28 72 50 79 17 17 11 82 81 82 82 5 38 55 97 29 67 90 41 47 64 98 86 15 99 89 6 49 42 1 52 85 86 55 76 64 38 5 47 26 44 76 80 59 54 17 2 60 51 32 55 77 79 45 37 77 86 51 52 0 14 16 1 56 61 59 80 56 37 3 13 91 0 61 96 6 62 41 89 60 7 73 66 28 95 82 38 81 30 55 11 37 95 13 55 37 29 27 3 86 35 35 95 60 21 96 3 85 75 6 59 80 77 66 54 13 10 68 9 45 41 63 98 60 76 23 86 10 59 83 3 1 22 51 52 98 59 16 64 59 87 68 54 42 19 2 90 23 21 76 5 67 37 92 80 14 64 4 95 42 23 92 69 48 21 89 12 89 29 52 56 14 59 13 91 19 93 46 42 91 28 18 33 15 100 75 56 30 24 56 14 25 89 92 88 94 97 87 8 17 28 6 15 74 80 10 17 91 34 70 54 7 49 83 64 31 37 72 7 58 90 96 85 96 80 87 65 14 58 44 48 5 17 100 97 91 38 69 55 66 19 82 63 22 62 49 100 36 32 55 27 26 36 53 80 29 39 92 35 65 52 45 60 31 41 88 47 37 20 56 3 85 56 67 94 70 67 31 87 33 69 51 30 8 50 52 96 44 40 23 68 59 82 14 77 55 34 29 19 64 53 66 56 97 16 38 57 13 39 66 69 4 82 95 42 17 80 45 53 42 92 71 48 93 94 73 73 89 49 24 18 40 46 57 41 90 1 58 98 59 67 61 25 90 2 8 70 16 72 91 68 5 93 57 65 54 40 24 52 53 43 67 55 46 98 27 59 80 92 66 3\n",
       "out": "100\n"
      },
      {
       "in": "1000 500\n95 46 65 45 94 68 63 74 29 53 58 72 84 71 66 13 92 72 86 31 97 99 29 32 84 91 36 35 76 67 99 96 4 2 31 67 76 31 39 39 70 23 94 64 22 52 8 22 29 81 44 51 11 97 37 93 96 47 88 75 23 18 54 77 29 82 38 30 98 85 30 17 1 70 70 20 64 85 61 27 29 93 26 78 48 13 88 97 71 87 84 27 91 100 41 55 13 29 66 44 62 24 68 31 23 62 56 18 36 30 3 93 89 2 55 78 27 52 90 51 33 51 61 61 27 18 2 13 41 46 97 37 54 47 51 69 28 17 9 52 88 35 53 29 24 6 28 16 51 83 95 69 67 47 29 91 3 28 68 77 57 53 6 17 81 99 21 23 84 21 97 69 55 58 7 26 76 17 40 89 58 47 3 72 5 47 34 52 20 15 97 53 55 82 19 3 19 44 29 31 20 71 59 99 16 3 23 91 89 70 55 53 94 55 42 12 21 33 81 27 36 35 7 81 86 17 54 22 97 39 34 31 64 2 65 68 93 70 13 27 53 33 81 32 22 7 100 60 42 53 100 16 62 73 90 37 88 13 10 90 85 71 50 34 59 31 82 92 53 9 45 78 74 83 28 59 74 5 39 87 77 12 69 91 5 15 48 53 18 91 69 63 75 80 37 41 77 98 52 14 15 74 77 75 50 33 70 39 55 99 20 77 61 14 91 53 74 66 44 47 88 2 72 54 79 69 53 98 29 64 3 55 92 78 24 87 23 72 41 17 40 66 69 98 28 52 7 53 19 31 76 96 86 48 77 22 100 25 91 5 44 68 100 44 82 50 75 50 45 36 74 88 75 72 46 36 62 32 60 38 3 24 56 89 88 1 46 81 15 11 76 67 43 93 70 6 83 94 0 14 5 43 35 64 11 91 28 81 54 60 8 39 59 11 0 7 77 86 57 92 67 47 44 31 75 14 35 17 98 78 27 50 58 98 73 43 55 43 57 34 21 47 35 75 35 33 22 9 72 55 38 40 0 68 15 76 57 36 2 35 74 56 66 47 86 37 96 86 38 36 90 13 43 23 13 33 90 24 73 51 40 27 47 69 0 1 78 70 3 23 71 53 3 24 60 41 79 1 69 60 27 62 58 20 5 60 47 10 69 28 52 96 100 10 21 87 28 40 57 69 24 42 42 0 49 89 12 98 66 27 76 34 41 68 77 48 18 72 53 43 83 40 93 46 87 54 86 24 49 9 91 54 45 47 29 66 12 9 70 5 21 42 36 35 38 8 47 68 53 99 63 67 70 72 51 1 70 61 84 66 83 65 77 44 12 23 89 27 16 11 8 36 4 5 69 53 11 73 14 30 96 64 57 37 79 2 55 39 86 79 15 70 99 33 17 95 49 47 28 46 4 85 57 15 96 32 85 49 6 52 38 55 40 87 89 100 31 61 40 96 10 28 27 41 0 67 34 79 79 18 20 12 31 34 44 75 52 51 71 9 21 7 92 27 78 75 7 64 75 77 0 36 36 3 52 75 78 43 94 98 86 62 55 27 43 11 80 32 58 81 70 67 9 74 61 85 46 61 63 84 76 30 39 45 63 83 29 70 38 37 22 82 53 54 22 55 16 32 61 71 73 11 13 84 100 90 98 24 97 31 7 4 21 60 4 86 64 52 2 75 9 77 5 17 6 64 72 45 90 73 57 89 33 43 16 67 82 88 97 76 50 42 10 42 35 28 90 53 98 0 51 30 33 49 21 3 10 26 49 68 90 29 11 51 36 50 61 43 3 5 21 67 48 33 23 4 28 73 83 91 97 68 65 85 85 7 22 39 30 74 90 53 79 27 45 8 20 42 85 82 38 32 60 88 18 1 80 15 29 92 98 14 39 49 64 25 41 49 44 55 65 71 62 64 84 64 55 15 35 36 65 46 88 21 27 32 99 24 8 13 83 37 65 40 64 21 95 81 87 56 63 66 65 16 46 30 44 16 45 84 39 30 20 30 54 74 100 9 23 99 66 24 27 62 14 8 29 61 93 75 1 65 31 51 94 80 85 69 57 35 73 23 67 44 28 10 4 94 53 98 38 55 66 98 16 60 88 40 29 5 25 57 99 73 94 89 12 75 11 95 93 42 43 30 48 55 34 94 87 82 45 38 54 94 23 68 77 14 98 38 78 36 58 88 66 59 56 75 72 36 17 39 95 66 11 36 87 67 64 51 50 100 90 99 83 29 0 95 35 49 80 35 5 99 42 54 3 50 19 6\n",
       "out": "37525\n"
      },
      {
       "in": "1000 1000\n67 63 2 35 12 95 40 97 84 48 76 20 31 16 86 74 69 99 65 59 45 26 14 79 11 43 15 83 53 19 13 24 59 83 27 81 60 30 97 53 76 50 83 49 74 27 59 26 36 88 22 39 29 13 77 49 87 57 32 51 49 77 51 84 55 92 43 58 50 28 28 86 19 59 60 28 81 65 13 60 14 22 70 77 64 44 33 85 11 100 78 51 42 48 78 10 57 27 79 43 80 17 75 52 56 46 54 69 84 86 69 42 85 46 92 59 62 78 55 51 72 57 14 1 60 50 37 72 21 10 67 85 89 65 67 63 61 85 78 53 99 27 28 1 92 72 89 68 48 46 51 59 43 31 31 8 43 5 35 51 72 55 58 1 16 68 93 80 68 36 41 48 33 44 14 41 11 13 87 70 22 50 90 38 6 64 11 12 38 65 26 57 95 100 100 76 28 17 90 15 49 11 59 66 40 97 29 47 38 44 34 24 38 37 48 80 71 5 86 78 20 66 79 56 42 78 19 82 93 3 0 48 81 89 18 69 86 7 8 44 43 43 75 0 18 11 15 63 56 84 9 81 56 100 55 28 6 31 73 98 67 51 2 92 39 29 35 17 37 37 57 77 84 57 49 38 85 68 3 84 8 47 93 81 53 17 5 64 84 23 36 7 21 10 31 10 36 72 74 34 84 37 36 65 41 42 26 74 54 13 79 0 26 49 70 33 24 66 56 0 33 82 29 99 15 73 15 58 70 55 44 65 36 65 52 7 66 95 49 41 16 76 57 33 91 92 10 63 39 30 57 83 0 12 11 30 10 50 85 6 4 76 92 26 43 55 77 75 54 77 21 11 64 95 40 90 94 75 87 91 16 22 52 29 65 100 5 7 98 11 13 72 12 34 44 20 86 15 79 93 89 77 91 72 35 59 8 48 13 28 51 76 71 50 86 81 29 84 34 20 73 92 54 96 47 6 93 92 19 59 92 28 29 32 43 9 11 17 46 3 18 20 43 83 39 37 16 55 74 31 31 29 88 53 30 18 54 79 91 79 31 27 54 22 87 47 47 27 32 67 67 93 29 12 76 32 37 61 23 92 98 1 15 82 5 17 26 74 17 73 63 73 23 1 47 47 88 82 9 10 35 100 16 65 88 65 23 37 62 69 97 71 62 68 39 60 17 25 94 59 76 15 43 95 59 58 80 32 47 69 83 30 62 82 1 8 97 100 53 62 30 50 49 28 17 2 31 55 86 20 89 54 32 96 0 43 79 19 46 21 56 35 89 79 61 8 42 27 55 58 22 64 12 81 67 21 44 59 64 39 13 42 45 73 64 27 10 0 64 48 48 75 88 16 77 80 63 10 10 18 1 39 67 52 22 45 35 81 15 24 18 27 86 20 57 31 74 8 42 13 44 87 95 9 11 90 84 18 61 41 23 95 61 66 83 82 93 41 11 6 7 57 35 70 79 50 98 19 81 24 14 94 63 93 18 25 33 85 90 74 64 99 90 42 21 0 84 67 14 69 63 64 35 97 51 98 83 81 16 79 21 7 79 3 90 2 39 78 82 4 95 81 14 5 3 11 91 70 49 5 26 56 29 47 96 33 16 10 25 82 26 56 95 57 32 15 52 45 24 75 53 55 17 52 75 2 71 53 14 48 57 4 28 73 93 35 53 1 28 66 92 19 72 95 65 91 1 76 76 23 92 26 96 56 24 97 36 61 50 64 73 43 31 20 49 84 69 18 38 23 84 81 41 13 89 7 81 70 24 97 66 42 33 45 5 46 38 7 30 91 23 61 98 51 25 89 43 97 43 16 95 74 35 29 96 55 8 29 86 32 42 70 85 98 3 30 72 81 35 95 84 7 65 95 56 48 88 25 3 84 0 44 23 9 83 53 7 30 36 6 22 17 95 71 34 20 32 35 45 84 94 20 82 63 77 46 17 68 72 67 76 23 32 11 29 32 94 5 40 71 35 67 4 92 91 99 43 39 59 3 52 50 88 97 55 26 62 12 82 4 6 89 70 23 42 76 81 5 3 91 27 52 63 1 24 83 8 16 74 17 69 100 57 7 100 70 20 24 46 61 19 42 9 43 95 80 22 32 2 92 17 36 100 54 77 92 13 17 90 22 27 73 98 76 86 74 91 11 29 63 95 0 93 45 72 76 33 86 42 27 56 56 38 87 0 28 78 84 74 51 6 100 13 18 83 15 15 87 96 9 85 99 36 75 76 68 20 41 30 77 10 71 14 71 50 72 37 72 55 39\n",
       "out": "50052\n"
      },
      {
       "in": "37 5\n34 81 35 24 75 1 25 59 8 35 28 26 83 0 63 3 74 45 96 80 9 7 3 4 26 47 97 44 10 89 27 67 11 42 4 19 39\n",
       "out": "446\n"
      }
     ],
     "hint": "Сұрыптаудан кейін тізімнің соңында қандай ұпайлар болады?",
     "solution": "n, k = map(int, input().split())\na = sorted(map(int, input().split()), reverse=True)\nprint(sum(a[:k]))\n",
     "explain": "Кему ретімен сұрыптап, <code>a[:k]</code> қимасымен алғашқы k элементті аламыз. Бірдей ұпайлар кедергі келтірмейді: бізге қосынды керек, ал ол тең ұпайлардың ішінен қалай таңдасақ та бірдей. Күрделілігі O(n log n).",
     "starter": "n, k = map(int, input().split())\na = list(map(int, input().split()))\n# кодыңды осында жаз\n"
    },
    {
     "id": "g7-sort-2",
     "title": "Қорытынды хаттама",
     "level": 2,
     "statement": "Олимпиада қазылар алқасы қорытынды кесте құрып жатыр. Қатысушылар ұпайлар қосындысының кему ретімен тұруы керек. Егер бірнеше қатысушының қосындысы бірдей болса, олар тегінің әліпби ретімен тұрады (жолдарды кәдімгі салыстыру). Сонымен қатар әр қатысушының жанына оның <b>орнын</b> жазу керек. Қосындысы бірдей қатысушылар орынды бөліседі: мысалы, қосындылар 300, 250, 250, 100 болса, орындар 1, 2, 2, 4 болады.",
     "input": "Бірінші жолда n (1 ≤ n ≤ 500). Одан кейін n жол: тегі (латын әріптері мен цифрлар, барлық тегтер әртүрлі) және ұпайлар қосындысы (0-ден 300-ге дейінгі бүтін сан).",
     "output": "Мына форматтағы n жол: орны, тегі және қосындысы бос орын арқылы.",
     "examples": [
      {
       "in": "4\nIvanov 250\nAhmetov 300\nSmirnova 100\nBaitova 250\n",
       "out": "1 Ahmetov 300\n2 Baitova 250\n2 Ivanov 250\n4 Smirnova 100\n"
      }
     ],
     "tests": [
      {
       "in": "4\nIvanov 250\nAhmetov 300\nSmirnova 100\nBaitova 250\n",
       "out": "1 Ahmetov 300\n2 Baitova 250\n2 Ivanov 250\n4 Smirnova 100\n"
      },
      {
       "in": "1\nSolo 0\n",
       "out": "1 Solo 0\n"
      },
      {
       "in": "3\nC 100\nB 100\nA 100\n",
       "out": "1 A 100\n1 B 100\n1 C 100\n"
      },
      {
       "in": "10\nBekzat 7\nDana 5\nZhanna 19\nAidos 10\nNursultan 1\nAsel 10\nYerbol 8\nSaule 5\nErlan 17\nTogzhan 17\n",
       "out": "1 Zhanna 19\n2 Erlan 17\n2 Togzhan 17\n4 Aidos 10\n4 Asel 10\n6 Yerbol 8\n7 Bekzat 7\n8 Dana 5\n8 Saule 5\n10 Nursultan 1\n"
      },
      {
       "in": "200\nAlikhan94 177\nDana37 259\nNursultan39 247\nAidos58 271\nDaulet80 281\nAidos29 257\nKamila59 67\nYerbol23 124\nBekzat90 200\nTogzhan39 195\nYerbol67 88\nZhanna86 63\nSaule67 207\nErlan96 14\nAsel55 294\nAidos55 103\nAigerim62 31\nAigerim33 102\nDiana45 115\nAigerim16 58\nMadina12 0\nDiana23 124\nAidos2 168\nAlikhan91 87\nYerbol8 78\nArman34 129\nMadina52 129\nZhanna3 139\nDaulet32 62\nRuslan43 48\nBekzat2 294\nErlan63 93\nDana47 150\nZhanna27 104\nNursultan35 70\nDaulet69 129\nAigerim78 292\nNursultan92 115\nYerbol17 92\nAidos52 228\nKamila22 280\nBekzat94 15\nTogzhan66 55\nTimur16 272\nYerbol56 133\nMadina49 285\nRuslan57 1\nBekzat92 1\nNursultan2 119\nYerbol39 15\nRuslan98 199\nSaule12 79\nArman81 223\nAidos51 131\nErlan94 294\nAidos12 204\nZhanna95 18\nKamila39 242\nDaulet11 222\nZhanna53 103\nErlan22 127\nMadina33 154\nSaule54 282\nRuslan59 18\nDaulet41 260\nBekzat7 226\nAsel87 224\nAsel64 10\nDana88 295\nKamila43 144\nErlan58 275\nNursultan60 65\nDiana71 83\nAlikhan84 28\nAidos10 249\nDaulet54 176\nNursultan57 232\nAliya99 242\nAliya19 72\nArman68 26\nAlikhan49 48\nYerbol1 70\nTogzhan42 277\nArman44 198\nDana15 75\nAidos85 152\nTimur21 202\nKamila32 127\nTogzhan28 106\nMadina89 271\nTimur31 278\nErlan82 106\nZhanna29 213\nDana31 226\nErlan31 245\nNursultan56 214\nTimur22 178\nDana42 46\nAsel1 108\nNursultan7 158\nAsel26 156\nRuslan70 218\nAlikhan42 268\nDana45 80\nMadina19 267\nTimur53 169\nRuslan14 84\nTimur12 261\nAsel89 254\nAlikhan35 229\nDaulet28 138\nDana21 185\nKamila91 148\nNursultan11 101\nMadina77 128\nAsel30 21\nYerbol32 90\nZhanna22 121\nDana77 238\nNursultan55 45\nSaule84 143\nZhanna89 24\nRuslan3 106\nTogzhan70 71\nZhanna87 207\nNursultan23 139\nKamila62 225\nMadina62 278\nKamila97 118\nAidos70 90\nDiana59 100\nAidos28 114\nAlikhan46 191\nAigerim57 195\nAsel57 258\nAidos80 193\nNursultan48 282\nZhanna50 239\nRuslan33 104\nNursultan91 277\nBekzat99 72\nAlikhan34 176\nZhanna11 193\nAlikhan52 37\nSaule57 138\nZhanna94 195\nRuslan92 286\nTogzhan30 151\nNursultan86 4\nYerbol73 78\nNursultan38 50\nErlan25 7\nAsel76 291\nErlan49 73\nNursultan5 294\nAidos23 141\nDiana49 164\nAigerim14 171\nArman33 150\nZhanna7 17\nArman24 216\nNursultan37 205\nYerbol96 202\nAlikhan88 276\nTogzhan88 89\nDiana33 124\nBekzat27 60\nTogzhan44 110\nAigerim38 12\nAigerim96 90\nBekzat97 180\nTimur9 267\nArman40 32\nDaulet44 123\nYerbol75 249\nDiana48 85\nDaulet37 24\nAliya59 15\nDiana72 50\nYerbol25 78\nMadina9 105\nAliya72 127\nTogzhan7 154\nTimur23 101\nAsel9 282\nMadina78 243\nMadina91 223\nAidos20 172\nAliya22 248\nAigerim75 1\nAigerim46 36\nYerbol71 67\nMadina88 169\nYerbol84 283\nTimur98 169\nAliya95 49\nTimur5 179\nDiana22 267\nTimur14 256\nTimur41 259\n",
       "out": "1 Dana88 295\n2 Asel55 294\n2 Bekzat2 294\n2 Erlan94 294\n2 Nursultan5 294\n6 Aigerim78 292\n7 Asel76 291\n8 Ruslan92 286\n9 Madina49 285\n10 Yerbol84 283\n11 Asel9 282\n11 Nursultan48 282\n11 Saule54 282\n14 Daulet80 281\n15 Kamila22 280\n16 Madina62 278\n16 Timur31 278\n18 Nursultan91 277\n18 Togzhan42 277\n20 Alikhan88 276\n21 Erlan58 275\n22 Timur16 272\n23 Aidos58 271\n23 Madina89 271\n25 Alikhan42 268\n26 Diana22 267\n26 Madina19 267\n26 Timur9 267\n29 Timur12 261\n30 Daulet41 260\n31 Dana37 259\n31 Timur41 259\n33 Asel57 258\n34 Aidos29 257\n35 Timur14 256\n36 Asel89 254\n37 Aidos10 249\n37 Yerbol75 249\n39 Aliya22 248\n40 Nursultan39 247\n41 Erlan31 245\n42 Madina78 243\n43 Aliya99 242\n43 Kamila39 242\n45 Zhanna50 239\n46 Dana77 238\n47 Nursultan57 232\n48 Alikhan35 229\n49 Aidos52 228\n50 Bekzat7 226\n50 Dana31 226\n52 Kamila62 225\n53 Asel87 224\n54 Arman81 223\n54 Madina91 223\n56 Daulet11 222\n57 Ruslan70 218\n58 Arman24 216\n59 Nursultan56 214\n60 Zhanna29 213\n61 Saule67 207\n61 Zhanna87 207\n63 Nursultan37 205\n64 Aidos12 204\n65 Timur21 202\n65 Yerbol96 202\n67 Bekzat90 200\n68 Ruslan98 199\n69 Arman44 198\n70 Aigerim57 195\n70 Togzhan39 195\n70 Zhanna94 195\n73 Aidos80 193\n73 Zhanna11 193\n75 Alikhan46 191\n76 Dana21 185\n77 Bekzat97 180\n78 Timur5 179\n79 Timur22 178\n80 Alikhan94 177\n81 Alikhan34 176\n81 Daulet54 176\n83 Aidos20 172\n84 Aigerim14 171\n85 Madina88 169\n85 Timur53 169\n85 Timur98 169\n88 Aidos2 168\n89 Diana49 164\n90 Nursultan7 158\n91 Asel26 156\n92 Madina33 154\n92 Togzhan7 154\n94 Aidos85 152\n95 Togzhan30 151\n96 Arman33 150\n96 Dana47 150\n98 Kamila91 148\n99 Kamila43 144\n100 Saule84 143\n101 Aidos23 141\n102 Nursultan23 139\n102 Zhanna3 139\n104 Daulet28 138\n104 Saule57 138\n106 Yerbol56 133\n107 Aidos51 131\n108 Arman34 129\n108 Daulet69 129\n108 Madina52 129\n111 Madina77 128\n112 Aliya72 127\n112 Erlan22 127\n112 Kamila32 127\n115 Diana23 124\n115 Diana33 124\n115 Yerbol23 124\n118 Daulet44 123\n119 Zhanna22 121\n120 Nursultan2 119\n121 Kamila97 118\n122 Diana45 115\n122 Nursultan92 115\n124 Aidos28 114\n125 Togzhan44 110\n126 Asel1 108\n127 Erlan82 106\n127 Ruslan3 106\n127 Togzhan28 106\n130 Madina9 105\n131 Ruslan33 104\n131 Zhanna27 104\n133 Aidos55 103\n133 Zhanna53 103\n135 Aigerim33 102\n136 Nursultan11 101\n136 Timur23 101\n138 Diana59 100\n139 Erlan63 93\n140 Yerbol17 92\n141 Aidos70 90\n141 Aigerim96 90\n141 Yerbol32 90\n144 Togzhan88 89\n145 Yerbol67 88\n146 Alikhan91 87\n147 Diana48 85\n148 Ruslan14 84\n149 Diana71 83\n150 Dana45 80\n151 Saule12 79\n152 Yerbol25 78\n152 Yerbol73 78\n152 Yerbol8 78\n155 Dana15 75\n156 Erlan49 73\n157 Aliya19 72\n157 Bekzat99 72\n159 Togzhan70 71\n160 Nursultan35 70\n160 Yerbol1 70\n162 Kamila59 67\n162 Yerbol71 67\n164 Nursultan60 65\n165 Zhanna86 63\n166 Daulet32 62\n167 Bekzat27 60\n168 Aigerim16 58\n169 Togzhan66 55\n170 Diana72 50\n170 Nursultan38 50\n172 Aliya95 49\n173 Alikhan49 48\n173 Ruslan43 48\n175 Dana42 46\n176 Nursultan55 45\n177 Alikhan52 37\n178 Aigerim46 36\n179 Arman40 32\n180 Aigerim62 31\n181 Alikhan84 28\n182 Arman68 26\n183 Daulet37 24\n183 Zhanna89 24\n185 Asel30 21\n186 Ruslan59 18\n186 Zhanna95 18\n188 Zhanna7 17\n189 Aliya59 15\n189 Bekzat94 15\n189 Yerbol39 15\n192 Erlan96 14\n193 Aigerim38 12\n194 Asel64 10\n195 Erlan25 7\n196 Nursultan86 4\n197 Aigerim75 1\n197 Bekzat92 1\n197 Ruslan57 1\n200 Madina12 0\n"
      },
      {
       "in": "500\nArman83 0\nAlikhan55 6\nTimur40 5\nBekzat76 26\nAsel44 17\nTimur90 28\nDaulet25 5\nAidos78 23\nErlan65 25\nBekzat16 25\nErlan15 3\nZhanna47 10\nSaule62 21\nTimur55 4\nAlikhan33 13\nRuslan34 7\nArman50 8\nAigerim88 21\nAliya57 0\nSaule96 6\nZhanna72 28\nAlikhan87 12\nRuslan69 5\nAsel53 9\nSaule6 13\nAlikhan52 9\nYerbol48 7\nDiana18 15\nAsel73 0\nTogzhan59 20\nYerbol2 6\nErlan21 15\nAsel84 9\nDana7 26\nDaulet12 11\nBekzat17 19\nErlan29 6\nTogzhan35 22\nAliya2 26\nAsel48 20\nRuslan89 26\nZhanna85 30\nZhanna80 26\nYerbol97 8\nAsel7 25\nTimur46 21\nTogzhan72 5\nArman82 1\nAliya75 7\nYerbol55 19\nBekzat65 25\nAigerim35 15\nYerbol16 7\nAlikhan91 22\nRuslan74 27\nAigerim67 30\nArman79 5\nTimur86 14\nDana32 10\nAlikhan59 25\nAlikhan32 20\nKamila80 18\nAsel41 25\nSaule41 11\nAsel21 25\nAigerim86 12\nAidos77 3\nZhanna96 30\nArman47 14\nKamila15 0\nBekzat55 20\nErlan70 27\nErlan99 29\nNursultan74 13\nDiana1 8\nAidos20 12\nDaulet41 1\nAliya26 7\nAsel89 12\nDaulet19 2\nTimur67 21\nDaulet33 6\nDaulet17 10\nKamila49 12\nYerbol31 30\nDaulet86 23\nAigerim27 15\nDana97 12\nDaulet37 1\nYerbol77 6\nAlikhan60 28\nRuslan30 26\nZhanna24 19\nMadina43 17\nSaule98 23\nAigerim99 2\nNursultan66 28\nAliya1 14\nMadina74 27\nNursultan21 6\nAidos72 13\nAidos34 28\nMadina20 14\nAliya58 23\nRuslan75 5\nBekzat70 27\nTimur18 10\nAidos26 30\nTimur62 17\nKamila5 16\nBekzat31 15\nDiana45 18\nDiana81 25\nAliya84 1\nAidos58 19\nDaulet72 13\nZhanna68 11\nMadina92 20\nRuslan52 16\nSaule30 16\nAsel62 8\nArman97 1\nTimur74 22\nNursultan60 16\nNursultan15 22\nAliya54 14\nDaulet50 3\nDiana78 4\nKamila99 12\nErlan16 6\nAidos82 10\nErlan56 29\nDana81 29\nNursultan37 17\nRuslan99 0\nKamila58 20\nErlan77 7\nTogzhan30 19\nAigerim94 3\nTogzhan55 7\nTogzhan29 14\nDaulet39 6\nAlikhan48 10\nAigerim77 19\nBekzat8 9\nBekzat15 16\nAsel17 16\nAigerim41 3\nYerbol9 26\nNursultan34 26\nArman69 7\nDana4 15\nBekzat69 7\nDiana12 7\nSaule3 12\nDiana66 12\nKamila64 23\nMadina78 2\nSaule70 16\nZhanna25 14\nAidos21 2\nArman20 20\nAidos65 4\nAliya5 6\nErlan26 9\nKamila9 29\nArman5 0\nErlan52 3\nKamila61 25\nYerbol42 0\nMadina2 22\nTogzhan50 16\nAliya6 29\nDiana54 4\nNursultan61 23\nDiana59 23\nKamila82 0\nTimur35 5\nAidos12 22\nDana2 24\nAliya90 3\nAidos27 4\nRuslan72 27\nTogzhan31 24\nAigerim68 7\nArman94 24\nSaule84 19\nKamila12 15\nAlikhan76 13\nTogzhan73 24\nArman62 28\nYerbol4 6\nDaulet32 15\nAlikhan2 21\nYerbol36 3\nDiana33 29\nAidos15 7\nAlikhan63 23\nDana43 9\nTogzhan20 13\nAlikhan38 2\nDiana55 19\nTimur58 18\nSaule10 19\nAidos54 23\nKamila23 17\nAlikhan78 30\nRuslan45 4\nDana58 19\nYerbol49 8\nAigerim81 6\nTimur16 20\nKamila69 11\nAidos52 21\nArman85 11\nTimur85 7\nAidos17 16\nNursultan63 0\nYerbol64 22\nNursultan70 16\nBekzat97 2\nSaule77 10\nZhanna30 7\nAsel68 4\nAigerim63 11\nNursultan95 4\nSaule22 23\nKamila26 3\nAidos2 28\nAigerim13 11\nTogzhan24 8\nSaule60 0\nAlikhan94 7\nZhanna43 4\nDiana92 23\nAlikhan20 11\nDaulet34 21\nZhanna88 3\nArman39 1\nDaulet92 0\nZhanna65 24\nDaulet89 21\nDana22 25\nBekzat21 4\nTimur73 4\nDaulet71 11\nRuslan68 24\nBekzat10 15\nAliya15 27\nDaulet59 5\nAidos24 27\nYerbol81 12\nAsel92 13\nTimur76 10\nAigerim44 27\nNursultan87 25\nArman12 6\nRuslan35 23\nBekzat5 30\nAlikhan79 29\nTimur27 10\nMadina21 0\nYerbol7 6\nAliya19 19\nAigerim87 4\nDaulet66 25\nDana72 22\nDaulet16 30\nRuslan12 5\nAliya30 17\nAigerim20 29\nKamila93 10\nAidos69 20\nDaulet69 15\nAliya71 30\nSaule57 8\nAigerim54 2\nKamila29 24\nAsel81 24\nAliya94 17\nRuslan39 16\nDana64 15\nBekzat43 24\nSaule69 17\nDiana67 10\nYerbol40 30\nAidos74 1\nDana20 27\nTogzhan97 10\nTimur17 23\nMadina1 28\nTimur89 17\nDaulet63 1\nDaulet21 3\nNursultan8 30\nNursultan64 22\nAsel8 24\nSaule64 18\nDaulet56 2\nDana85 16\nErlan27 7\nSaule81 5\nAlikhan51 11\nDaulet42 17\nRuslan66 5\nErlan95 30\nBekzat49 6\nBekzat90 11\nArman40 27\nSaule9 25\nSaule25 21\nSaule20 27\nDana56 30\nMadina52 14\nAidos3 5\nDana70 2\nErlan61 13\nZhanna81 27\nBekzat95 22\nTogzhan38 4\nDana62 5\nErlan2 29\nKamila85 26\nTogzhan77 23\nZhanna64 26\nAlikhan35 25\nYerbol33 1\nRuslan93 23\nTimur44 28\nAsel72 10\nDaulet23 23\nBekzat93 28\nMadina14 26\nTimur92 28\nAliya12 3\nDaulet98 22\nKamila89 12\nKamila32 30\nErlan62 7\nMadina57 24\nNursultan78 23\nErlan66 23\nTogzhan42 22\nAlikhan46 10\nSaule71 26\nAidos22 4\nRuslan80 16\nArman55 23\nZhanna48 15\nErlan39 15\nRuslan27 10\nErlan92 11\nArman66 8\nAigerim83 17\nYerbol82 3\nTimur60 24\nNursultan84 12\nAidos33 13\nArman81 26\nDaulet8 6\nTogzhan99 30\nAlikhan23 16\nErlan69 10\nAsel46 13\nNursultan26 2\nTogzhan75 13\nZhanna7 19\nAliya24 17\nAigerim17 17\nNursultan92 21\nTimur21 12\nDiana75 15\nNursultan7 11\nAsel52 1\nErlan5 20\nNursultan56 0\nAidos39 5\nNursultan16 17\nYerbol96 9\nNursultan76 4\nTogzhan81 6\nAliya14 18\nYerbol32 3\nAlikhan71 1\nArman96 3\nZhanna79 25\nAliya47 5\nYerbol85 5\nAliya95 23\nBekzat99 16\nDana91 30\nDiana38 14\nAidos42 17\nDaulet73 1\nAidos71 3\nAidos51 6\nSaule45 23\nAidos97 11\nMadina94 9\nDiana25 7\nAliya32 21\nBekzat7 4\nAidos87 21\nBekzat19 20\nArman77 0\nArman2 15\nErlan11 1\nSaule7 10\nTimur23 26\nDiana14 1\nKamila19 22\nDana17 24\nYerbol19 21\nArman98 17\nBekzat86 23\nSaule75 12\nRuslan9 9\nTogzhan70 10\nZhanna3 12\nAlikhan77 15\nRuslan22 2\nYerbol59 15\nErlan20 22\nArman88 29\nDana18 5\nAlikhan9 30\nAigerim14 21\nDana99 6\nAidos30 5\nSaule65 19\nZhanna20 18\nArman14 18\nYerbol71 29\nArman75 22\nRuslan64 18\nAidos60 11\nDana28 15\nDana26 6\nAsel25 20\nRuslan57 5\nMadina39 19\nAigerim10 11\nDaulet70 3\nAsel80 6\nErlan75 7\nSaule83 1\nAigerim24 6\nDiana88 22\nYerbol43 20\nSaule8 18\nMadina5 23\nSaule43 12\nAlikhan56 10\nYerbol80 28\nZhanna60 15\nSaule92 26\nNursultan23 7\nKamila47 16\nRuslan63 11\nErlan17 12\nZhanna5 14\nYerbol63 8\nYerbol87 29\nRuslan26 9\nAliya18 26\nAidos47 23\nDana3 21\nDana61 15\nSaule35 20\nTogzhan25 19\nAidos55 3\nDana35 5\nAsel40 25\nTimur48 9\nAliya35 26\nDiana71 5\nDiana44 12\nAigerim31 28\nDana88 19\nNursultan35 18\nAidos67 26\nTimur51 0\nNursultan59 19\nArman59 11\nTimur91 27\nAigerim7 4\nAsel14 1\nAsel39 5\nAidos19 6\nMadina75 11\nSaule21 1\nTogzhan1 8\nMadina83 7\nBekzat64 16\nMadina3 24\nTimur13 2\nDaulet4 21\nZhanna39 28\nMadina63 28\nTimur77 11\n",
       "out": "1 Aidos26 30\n1 Aigerim67 30\n1 Alikhan78 30\n1 Alikhan9 30\n1 Aliya71 30\n1 Bekzat5 30\n1 Dana56 30\n1 Dana91 30\n1 Daulet16 30\n1 Erlan95 30\n1 Kamila32 30\n1 Nursultan8 30\n1 Togzhan99 30\n1 Yerbol31 30\n1 Yerbol40 30\n1 Zhanna85 30\n1 Zhanna96 30\n18 Aigerim20 29\n18 Alikhan79 29\n18 Aliya6 29\n18 Arman88 29\n18 Dana81 29\n18 Diana33 29\n18 Erlan2 29\n18 Erlan56 29\n18 Erlan99 29\n18 Kamila9 29\n18 Yerbol71 29\n18 Yerbol87 29\n30 Aidos2 28\n30 Aidos34 28\n30 Aigerim31 28\n30 Alikhan60 28\n30 Arman62 28\n30 Bekzat93 28\n30 Madina1 28\n30 Madina63 28\n30 Nursultan66 28\n30 Timur44 28\n30 Timur90 28\n30 Timur92 28\n30 Yerbol80 28\n30 Zhanna39 28\n30 Zhanna72 28\n45 Aidos24 27\n45 Aigerim44 27\n45 Aliya15 27\n45 Arman40 27\n45 Bekzat70 27\n45 Dana20 27\n45 Erlan70 27\n45 Madina74 27\n45 Ruslan72 27\n45 Ruslan74 27\n45 Saule20 27\n45 Timur91 27\n45 Zhanna81 27\n58 Aidos67 26\n58 Aliya18 26\n58 Aliya2 26\n58 Aliya35 26\n58 Arman81 26\n58 Bekzat76 26\n58 Dana7 26\n58 Kamila85 26\n58 Madina14 26\n58 Nursultan34 26\n58 Ruslan30 26\n58 Ruslan89 26\n58 Saule71 26\n58 Saule92 26\n58 Timur23 26\n58 Yerbol9 26\n58 Zhanna64 26\n58 Zhanna80 26\n76 Alikhan35 25\n76 Alikhan59 25\n76 Asel21 25\n76 Asel40 25\n76 Asel41 25\n76 Asel7 25\n76 Bekzat16 25\n76 Bekzat65 25\n76 Dana22 25\n76 Daulet66 25\n76 Diana81 25\n76 Erlan65 25\n76 Kamila61 25\n76 Nursultan87 25\n76 Saule9 25\n76 Zhanna79 25\n92 Arman94 24\n92 Asel8 24\n92 Asel81 24\n92 Bekzat43 24\n92 Dana17 24\n92 Dana2 24\n92 Kamila29 24\n92 Madina3 24\n92 Madina57 24\n92 Ruslan68 24\n92 Timur60 24\n92 Togzhan31 24\n92 Togzhan73 24\n92 Zhanna65 24\n106 Aidos47 23\n106 Aidos54 23\n106 Aidos78 23\n106 Alikhan63 23\n106 Aliya58 23\n106 Aliya95 23\n106 Arman55 23\n106 Bekzat86 23\n106 Daulet23 23\n106 Daulet86 23\n106 Diana59 23\n106 Diana92 23\n106 Erlan66 23\n106 Kamila64 23\n106 Madina5 23\n106 Nursultan61 23\n106 Nursultan78 23\n106 Ruslan35 23\n106 Ruslan93 23\n106 Saule22 23\n106 Saule45 23\n106 Saule98 23\n106 Timur17 23\n106 Togzhan77 23\n130 Aidos12 22\n130 Alikhan91 22\n130 Arman75 22\n130 Bekzat95 22\n130 Dana72 22\n130 Daulet98 22\n130 Diana88 22\n130 Erlan20 22\n130 Kamila19 22\n130 Madina2 22\n130 Nursultan15 22\n130 Nursultan64 22\n130 Timur74 22\n130 Togzhan35 22\n130 Togzhan42 22\n130 Yerbol64 22\n146 Aidos52 21\n146 Aidos87 21\n146 Aigerim14 21\n146 Aigerim88 21\n146 Alikhan2 21\n146 Aliya32 21\n146 Dana3 21\n146 Daulet34 21\n146 Daulet4 21\n146 Daulet89 21\n146 Nursultan92 21\n146 Saule25 21\n146 Saule62 21\n146 Timur46 21\n146 Timur67 21\n146 Yerbol19 21\n162 Aidos69 20\n162 Alikhan32 20\n162 Arman20 20\n162 Asel25 20\n162 Asel48 20\n162 Bekzat19 20\n162 Bekzat55 20\n162 Erlan5 20\n162 Kamila58 20\n162 Madina92 20\n162 Saule35 20\n162 Timur16 20\n162 Togzhan59 20\n162 Yerbol43 20\n176 Aidos58 19\n176 Aigerim77 19\n176 Aliya19 19\n176 Bekzat17 19\n176 Dana58 19\n176 Dana88 19\n176 Diana55 19\n176 Madina39 19\n176 Nursultan59 19\n176 Saule10 19\n176 Saule65 19\n176 Saule84 19\n176 Togzhan25 19\n176 Togzhan30 19\n176 Yerbol55 19\n176 Zhanna24 19\n176 Zhanna7 19\n193 Aliya14 18\n193 Arman14 18\n193 Diana45 18\n193 Kamila80 18\n193 Nursultan35 18\n193 Ruslan64 18\n193 Saule64 18\n193 Saule8 18\n193 Timur58 18\n193 Zhanna20 18\n203 Aidos42 17\n203 Aigerim17 17\n203 Aigerim83 17\n203 Aliya24 17\n203 Aliya30 17\n203 Aliya94 17\n203 Arman98 17\n203 Asel44 17\n203 Daulet42 17\n203 Kamila23 17\n203 Madina43 17\n203 Nursultan16 17\n203 Nursultan37 17\n203 Saule69 17\n203 Timur62 17\n203 Timur89 17\n219 Aidos17 16\n219 Alikhan23 16\n219 Asel17 16\n219 Bekzat15 16\n219 Bekzat64 16\n219 Bekzat99 16\n219 Dana85 16\n219 Kamila47 16\n219 Kamila5 16\n219 Nursultan60 16\n219 Nursultan70 16\n219 Ruslan39 16\n219 Ruslan52 16\n219 Ruslan80 16\n219 Saule30 16\n219 Saule70 16\n219 Togzhan50 16\n236 Aigerim27 15\n236 Aigerim35 15\n236 Alikhan77 15\n236 Arman2 15\n236 Bekzat10 15\n236 Bekzat31 15\n236 Dana28 15\n236 Dana4 15\n236 Dana61 15\n236 Dana64 15\n236 Daulet32 15\n236 Daulet69 15\n236 Diana18 15\n236 Diana75 15\n236 Erlan21 15\n236 Erlan39 15\n236 Kamila12 15\n236 Yerbol59 15\n236 Zhanna48 15\n236 Zhanna60 15\n256 Aliya1 14\n256 Aliya54 14\n256 Arman47 14\n256 Diana38 14\n256 Madina20 14\n256 Madina52 14\n256 Timur86 14\n256 Togzhan29 14\n256 Zhanna25 14\n256 Zhanna5 14\n266 Aidos33 13\n266 Aidos72 13\n266 Alikhan33 13\n266 Alikhan76 13\n266 Asel46 13\n266 Asel92 13\n266 Daulet72 13\n266 Erlan61 13\n266 Nursultan74 13\n266 Saule6 13\n266 Togzhan20 13\n266 Togzhan75 13\n278 Aidos20 12\n278 Aigerim86 12\n278 Alikhan87 12\n278 Asel89 12\n278 Dana97 12\n278 Diana44 12\n278 Diana66 12\n278 Erlan17 12\n278 Kamila49 12\n278 Kamila89 12\n278 Kamila99 12\n278 Nursultan84 12\n278 Saule3 12\n278 Saule43 12\n278 Saule75 12\n278 Timur21 12\n278 Yerbol81 12\n278 Zhanna3 12\n296 Aidos60 11\n296 Aidos97 11\n296 Aigerim10 11\n296 Aigerim13 11\n296 Aigerim63 11\n296 Alikhan20 11\n296 Alikhan51 11\n296 Arman59 11\n296 Arman85 11\n296 Bekzat90 11\n296 Daulet12 11\n296 Daulet71 11\n296 Erlan92 11\n296 Kamila69 11\n296 Madina75 11\n296 Nursultan7 11\n296 Ruslan63 11\n296 Saule41 11\n296 Timur77 11\n296 Zhanna68 11\n316 Aidos82 10\n316 Alikhan46 10\n316 Alikhan48 10\n316 Alikhan56 10\n316 Asel72 10\n316 Dana32 10\n316 Daulet17 10\n316 Diana67 10\n316 Erlan69 10\n316 Kamila93 10\n316 Ruslan27 10\n316 Saule7 10\n316 Saule77 10\n316 Timur18 10\n316 Timur27 10\n316 Timur76 10\n316 Togzhan70 10\n316 Togzhan97 10\n316 Zhanna47 10\n335 Alikhan52 9\n335 Asel53 9\n335 Asel84 9\n335 Bekzat8 9\n335 Dana43 9\n335 Erlan26 9\n335 Madina94 9\n335 Ruslan26 9\n335 Ruslan9 9\n335 Timur48 9\n335 Yerbol96 9\n346 Arman50 8\n346 Arman66 8\n346 Asel62 8\n346 Diana1 8\n346 Saule57 8\n346 Togzhan1 8\n346 Togzhan24 8\n346 Yerbol49 8\n346 Yerbol63 8\n346 Yerbol97 8\n356 Aidos15 7\n356 Aigerim68 7\n356 Alikhan94 7\n356 Aliya26 7\n356 Aliya75 7\n356 Arman69 7\n356 Bekzat69 7\n356 Diana12 7\n356 Diana25 7\n356 Erlan27 7\n356 Erlan62 7\n356 Erlan75 7\n356 Erlan77 7\n356 Madina83 7\n356 Nursultan23 7\n356 Ruslan34 7\n356 Timur85 7\n356 Togzhan55 7\n356 Yerbol16 7\n356 Yerbol48 7\n356 Zhanna30 7\n377 Aidos19 6\n377 Aidos51 6\n377 Aigerim24 6\n377 Aigerim81 6\n377 Alikhan55 6\n377 Aliya5 6\n377 Arman12 6\n377 Asel80 6\n377 Bekzat49 6\n377 Dana26 6\n377 Dana99 6\n377 Daulet33 6\n377 Daulet39 6\n377 Daulet8 6\n377 Erlan16 6\n377 Erlan29 6\n377 Nursultan21 6\n377 Saule96 6\n377 Togzhan81 6\n377 Yerbol2 6\n377 Yerbol4 6\n377 Yerbol7 6\n377 Yerbol77 6\n400 Aidos3 5\n400 Aidos30 5\n400 Aidos39 5\n400 Aliya47 5\n400 Arman79 5\n400 Asel39 5\n400 Dana18 5\n400 Dana35 5\n400 Dana62 5\n400 Daulet25 5\n400 Daulet59 5\n400 Diana71 5\n400 Ruslan12 5\n400 Ruslan57 5\n400 Ruslan66 5\n400 Ruslan69 5\n400 Ruslan75 5\n400 Saule81 5\n400 Timur35 5\n400 Timur40 5\n400 Togzhan72 5\n400 Yerbol85 5\n422 Aidos22 4\n422 Aidos27 4\n422 Aidos65 4\n422 Aigerim7 4\n422 Aigerim87 4\n422 Asel68 4\n422 Bekzat21 4\n422 Bekzat7 4\n422 Diana54 4\n422 Diana78 4\n422 Nursultan76 4\n422 Nursultan95 4\n422 Ruslan45 4\n422 Timur55 4\n422 Timur73 4\n422 Togzhan38 4\n422 Zhanna43 4\n439 Aidos55 3\n439 Aidos71 3\n439 Aidos77 3\n439 Aigerim41 3\n439 Aigerim94 3\n439 Aliya12 3\n439 Aliya90 3\n439 Arman96 3\n439 Daulet21 3\n439 Daulet50 3\n439 Daulet70 3\n439 Erlan15 3\n439 Erlan52 3\n439 Kamila26 3\n439 Yerbol32 3\n439 Yerbol36 3\n439 Yerbol82 3\n439 Zhanna88 3\n457 Aidos21 2\n457 Aigerim54 2\n457 Aigerim99 2\n457 Alikhan38 2\n457 Bekzat97 2\n457 Dana70 2\n457 Daulet19 2\n457 Daulet56 2\n457 Madina78 2\n457 Nursultan26 2\n457 Ruslan22 2\n457 Timur13 2\n469 Aidos74 1\n469 Alikhan71 1\n469 Aliya84 1\n469 Arman39 1\n469 Arman82 1\n469 Arman97 1\n469 Asel14 1\n469 Asel52 1\n469 Daulet37 1\n469 Daulet41 1\n469 Daulet63 1\n469 Daulet73 1\n469 Diana14 1\n469 Erlan11 1\n469 Saule21 1\n469 Saule83 1\n469 Yerbol33 1\n486 Aliya57 0\n486 Arman5 0\n486 Arman77 0\n486 Arman83 0\n486 Asel73 0\n486 Daulet92 0\n486 Kamila15 0\n486 Kamila82 0\n486 Madina21 0\n486 Nursultan56 0\n486 Nursultan63 0\n486 Ruslan99 0\n486 Saule60 0\n486 Timur51 0\n486 Yerbol42 0\n"
      },
      {
       "in": "50\nAliya7 2\nMadina41 1\nZhanna39 2\nDana33 2\nTimur11 2\nSaule92 1\nTogzhan2 1\nErlan57 2\nYerbol97 2\nArman75 2\nArman29 2\nNursultan62 2\nRuslan81 0\nErlan2 1\nDana75 0\nTogzhan54 1\nKamila43 2\nDaulet81 0\nRuslan53 2\nTogzhan15 0\nArman57 2\nKamila73 0\nAigerim8 0\nSaule89 1\nRuslan55 2\nDiana57 2\nYerbol88 1\nDaulet25 2\nAlikhan59 0\nAlikhan21 0\nSaule93 0\nAidos93 1\nKamila38 0\nTogzhan9 2\nTimur78 0\nZhanna86 0\nDaulet74 0\nZhanna21 1\nNursultan31 2\nRuslan99 0\nDaulet99 1\nNursultan85 0\nErlan33 1\nAigerim48 0\nSaule10 1\nDana52 0\nErlan7 0\nYerbol18 0\nDaulet7 1\nRuslan31 2\n",
       "out": "1 Aliya7 2\n1 Arman29 2\n1 Arman57 2\n1 Arman75 2\n1 Dana33 2\n1 Daulet25 2\n1 Diana57 2\n1 Erlan57 2\n1 Kamila43 2\n1 Nursultan31 2\n1 Nursultan62 2\n1 Ruslan31 2\n1 Ruslan53 2\n1 Ruslan55 2\n1 Timur11 2\n1 Togzhan9 2\n1 Yerbol97 2\n1 Zhanna39 2\n19 Aidos93 1\n19 Daulet7 1\n19 Daulet99 1\n19 Erlan2 1\n19 Erlan33 1\n19 Madina41 1\n19 Saule10 1\n19 Saule89 1\n19 Saule92 1\n19 Togzhan2 1\n19 Togzhan54 1\n19 Yerbol88 1\n19 Zhanna21 1\n32 Aigerim48 0\n32 Aigerim8 0\n32 Alikhan21 0\n32 Alikhan59 0\n32 Dana52 0\n32 Dana75 0\n32 Daulet74 0\n32 Daulet81 0\n32 Erlan7 0\n32 Kamila38 0\n32 Kamila73 0\n32 Nursultan85 0\n32 Ruslan81 0\n32 Ruslan99 0\n32 Saule93 0\n32 Timur78 0\n32 Togzhan15 0\n32 Yerbol18 0\n32 Zhanna86 0\n"
      }
     ],
     "hint": "Кортеж-кілт бойынша сұрыпта. Қатысушының орны = 1 + қосындысы қатаң үлкен қатысушылар саны. Сұрыпталған тізімді бойлай жүріп, мұны бірден қалай есептеуге болады?",
     "solution": "n = int(input())\nrows = []\nfor _ in range(n):\n    name, score = input().split()\n    rows.append((name, int(score)))\nrows.sort(key=lambda r: (-r[1], r[0]))\nplace = 0\nfor i in range(n):\n    if i == 0 or rows[i][1] != rows[i - 1][1]:\n        place = i + 1\n    print(place, rows[i][0], rows[i][1])\n",
     "explain": "<code>(-ұпай, тегі)</code> кілтімен сұрыптаймыз: минус ұпайлар бойынша кему ретін береді, ал тең болса тегтер әліпби ретімен тұрады. Орын: сұрыпталған тізімді бойлай жүреміз; ұпай алдыңғысынан өзгеше болса, орын <code>i + 1</code> позиция нөміріне тең болады, әйтпесе бұрынғысы қалады. Осылай 1, 2, 2, 4 «спорттық» нөмірлеуін аламыз. Күрделілігі O(n log n).",
     "starter": "n = int(input())\nrows = []\nfor _ in range(n):\n    name, score = input().split()\n    rows.append((name, int(score)))\n# кодыңды осында жаз\n"
    }
   ]
  },
  {
   "id": "g7-sim",
   "title": "Процесті модельдеу",
   "summary": "Шарттағы процесті қадам-қадаммен қайталаймыз",
   "minutes": 25,
   "lesson": [
    {
     "type": "p",
     "text": "Модельдеу (симуляция) — бұл шарттағы <b>процесті сөзбе-сөз қайталау</b>: күн сайын, жүріс сайын, команда сайын. Айлакер формула керек емес, ұқыптылық керек."
    },
    {
     "type": "h",
     "text": "Модельді қалай құру керек"
    },
    {
     "type": "list",
     "items": [
      "Әр қадамда не өзгеретінін жазып ал: орын, уақыт, саны, бағыт. Бұл — <b>күй</b>.",
      "Бір қадамды сипатта: күй қалай өзгереді.",
      "Процесс қашан аяқталатынын анықта.",
      "Неше қадам болатынын тексер: 10<sup>6</sup>-ға дейін болса — симуляция үлгереді."
     ]
    },
    {
     "type": "h",
     "text": "Мысал: банк және пайыздар"
    },
    {
     "type": "p",
     "text": "Салымда 1000 теңге жатыр, банк жыл сайын 10% қосады (тиындар алынып тасталады). Неше жылдан кейін сома алғаш рет 2000-нан кем болмайды?"
    },
    {
     "type": "code",
     "code": "money = 1000\nyears = 0\nwhile money < 2000:\n    money = money + money * 10 // 100\n    years += 1\nprint(years, money)\n",
     "runnable": true
    },
    {
     "type": "p",
     "text": "Күй — (money, years) жұбы. Қадам — пайыздарды қосып, жылды арттыру. Тоқтау шарты — money ≥ 2000."
    },
    {
     "type": "h",
     "text": "Түзу бойымен және торкөздер бойымен қозғалыс"
    },
    {
     "type": "p",
     "text": "Жиі кездесетін сюжет — командаларды орындайтын робот. Орынды санмен (немесе сандар жұбымен) сақтап, командаларды <code>for c in commands</code> циклінде өңдеген ыңғайлы. Шекараларды міндетті түрде тексер: робот қабырғаға тіреліп қалса, не істеу керек?"
    },
    {
     "type": "code",
     "code": "x = 0\nfor c in \"RRLRRRL\":\n    if c == \"R\":\n        x += 1\n    else:\n        x -= 1\nprint(\"мәре:\", x)\n",
     "runnable": true
    },
    {
     "type": "warn",
     "text": "Симуляциядағы ең жиі қате — қадам ішіндегі әрекеттердің реті. Мысалы, ұлу күндіз жоғары көтеріледі, ал егер ұшар басына жетіп қойса, түнде төмен сырғымайды. Егер алдымен түнгі сырғуды азайтып, содан кейін ұшар басты тексерсең, жауап қате болады."
    },
    {
     "type": "tip",
     "text": "Жібермес бұрын модельді шарттағы кішкентай мысалда қолмен «өткізіп» шық, әр қадамнан кейінгі күйді жазып отыр. Бұл ±1 қателерінің көбін ұстайды."
    },
    {
     "type": "tip",
     "text": "Егер қадамдар тым көп болса (мысалы, 10<sup>18</sup>), таза симуляция үлгермейді. Сонда формуланы немесе қайталанатын циклді іздейді. Бірақ мектеп кезеңінде көбіне адал симуляция жеткілікті."
    }
   ],
   "quiz": [
    {
     "q": "Симуляциядағы «күй» дегеніміз не?",
     "options": [
      "процесті берілген сәтте толық сипаттайтын шамалар жиынтығы",
      "есептің нөмірі",
      "кіріс деректері"
     ],
     "answer": 0,
     "explain": "Күйді және қадам ережесін біле отырып, келесі күйді есептеуге болады."
    },
    {
     "q": "Python-дағы қарапайым цикл 1 секундта шамамен неше итерация жасай алады?",
     "options": [
      "шамамен 10<sup>3</sup>",
      "шамамен 10<sup>6</sup>–10<sup>7</sup>",
      "шамамен 10<sup>12</sup>"
     ],
     "answer": 1,
     "explain": "Python-дағы қарапайым операциялар — секундына бірнеше миллион шамасында."
    },
    {
     "q": "Ұлу күндіз 5 м көтеріліп, түнде 2 м төмен сырғиды. Бағананың биіктігі 5 м. Ол нешінші күні жоғарыда болады?",
     "options": [
      "1-күні",
      "2-күні",
      "3-күні"
     ],
     "answer": 0,
     "explain": "Бірінші күні-ақ ол 5 м көтеріліп, ұшар басқа жетеді, түннің маңызы жоқ."
    }
   ],
   "problems": [
    {
     "id": "g7-sim-1",
     "title": "Бағанадағы ұлу",
     "level": 1,
     "statement": "Ұлу биіктігі h метр бағананы бойлай жоғары өрмелейді. Күндіз ол a метр көтеріледі, ал түнде b метр төмен сырғиды. Бірінші күннің таңында ұлу бағананың түбінде. Ұлу бағананың ұшар басына алғаш рет нешінші күні жетеді?",
     "input": "Үш бүтін сан h, a, b (1 ≤ h ≤ 1000, 1 ≤ b < a ≤ 100), әрқайсысы жеке жолда.",
     "output": "Бір сан — күннің нөмірі.",
     "examples": [
      {
       "in": "10\n3\n2\n",
       "out": "8\n"
      },
      {
       "in": "5\n5\n2\n",
       "out": "1\n"
      }
     ],
     "tests": [
      {
       "in": "10\n3\n2\n",
       "out": "8\n"
      },
      {
       "in": "5\n5\n2\n",
       "out": "1\n"
      },
      {
       "in": "1\n2\n1\n",
       "out": "1\n"
      },
      {
       "in": "1000\n2\n1\n",
       "out": "999\n"
      },
      {
       "in": "1000\n100\n99\n",
       "out": "901\n"
      },
      {
       "in": "20\n7\n3\n",
       "out": "5\n"
      },
      {
       "in": "100\n100\n1\n",
       "out": "1\n"
      },
      {
       "in": "999\n10\n9\n",
       "out": "990\n"
      }
     ],
     "hint": "Күн сайын модельде. Күндізгі көтерілістен кейін бірден, түнге дейін нені тексеру керек?",
     "solution": "h = int(input())\na = int(input())\nb = int(input())\npos = 0\nday = 0\nwhile True:\n    day += 1\n    pos += a\n    if pos >= h:\n        break\n    pos -= b\nprint(day)\n",
     "explain": "Күй — <code>pos</code> биіктігі және күннің нөмірі. Күн сайын: a-ға көтерілеміз де, h-қа жеттік пе деп <b>бірден</b> тексереміз. Жетпесек қана түн түсіп, ұлу b-ға төмен сырғиды. a > b болғандықтан, ұлу бір тәулікте кемінде 1 м алға жылжиды, демек күндер саны h-тан аспайды — симуляция жылдам. Формуласы да бар: a ≥ h болса, жауап 1, әйтпесе <code>ceil((h − a) / (a − b)) + 1</code>.",
     "starter": "h = int(input())\na = int(input())\nb = int(input())\n# кодыңды осында жаз\n"
    },
    {
     "id": "g7-sim-2",
     "title": "Робот-тазалаушы",
     "level": 2,
     "statement": "Мектеп дәлізі 1-ден n-ге дейін нөмірленген n торкөзге бөлінген. Робот-тазалаушы p торкөзінде тұр және командалар жолын алады: <code>L</code> — солға бір қадам, <code>R</code> — оңға бір қадам. Егер команда роботты дәлізден шығарып жіберсе, ол оны өткізіп жіберіп, орнында қалады.<br>Робот өзі болған әр торкөзді жуады (бастапқысын қоса). Неше түрлі торкөз жуылады және соңында робот қай жерде болады?",
     "input": "Бірінші жолда n және p (1 ≤ p ≤ n ≤ 1000). Екінші жолда — ұзындығы 1-ден 5000-ға дейінгі L және R символдарынан тұратын командалар жолы.",
     "output": "Екі сан: жуылған торкөздер саны және соңғы торкөздің нөмірі.",
     "examples": [
      {
       "in": "5 3\nRRRLLLLLL\n",
       "out": "5 1\n"
      }
     ],
     "tests": [
      {
       "in": "5 3\nRRRLLLLLL\n",
       "out": "5 1\n"
      },
      {
       "in": "1 1\nLRLR\n",
       "out": "1 1\n"
      },
      {
       "in": "10 1\nLLLL\n",
       "out": "1 1\n"
      },
      {
       "in": "10 10\nRRRRRRRR\n",
       "out": "1 10\n"
      },
      {
       "in": "3 2\nLRRL\n",
       "out": "3 2\n"
      },
      {
       "in": "1000 522\nLRLLRLRLRRLLLRLRRLLRLRRLLRLLRLRLRRLRRRLRLRRRLRLRLRRRLLRLRLLRRRRRLLRRRLLRRLRRRLRLLLLRLLLRRRRRRRLLRLLLLRRRLRRRLRLRLRRRRLRRRRRLRRLRLLLRLLRRLRLRLLLRRRLRRLRRRRLRLLRLLLLLRRLLRRLRRRRRLLLLLRLRRLRLRRRRLLLRRRRRRLLLRLRRLRLLLRRLRRRRRLRRRRRRLRRRRRRRRRRLRLRRLRLRRRRLRRLLLRRRLRLLLRLRLRRRRLLRLRRLLRLLLLLLRRLRLRLLLRLLLRRRLRRRLLRLLRRLLRRLLLLRRRRRLRRLRRLLLLLLRLRLLRRRLLRLRRRRLLLRLLRRRRRRRRRLRLLRLRRLLRRLRRLLRLLLLLRRLRRLRLRRLLLRRRRLRLRLLLRLRRLRLRRLRLRLLRRLRRRLRLLRLRRRRRRLRRLRLRLLLRLRRLRRRLLLRLRRRRRRRLRRRLRRLRRLLRRRRRLLRRLRRRRRRLRRRRRRRRLLLLRRRRRRRLRRRLLLRLLRLRRLLRRRRLRRRLLRRLLRLLRLRRLLRRRRRRRLRRRRRLRRRLRLRLRRLRRLLLLLLRRRLRRRLLLRRLRRLRLRRLLLLLLLLLRRLRRRLRRLRLLRRLRLRLLRRLRLLRRRRLRRRLRRLLLRLLLRRLLRRRLRRRLRLRRLLRLRLLRRRRRRLRLRLRRLLLRLLRRRRLRRLLRLRLRRRLLRLRLLLRLRRRRLRLLLRRRRLLRLLLLRRRLLLRRLLLRLLLRLLLLLLLLLLRRRRRRRLLRRRLRRRLLLLLLLRRRLRLRLLLRLLLLLLLLRRRLRRLRRLLRRLLLRLRRRRRLRLRLLRLLRRLLLRRLLLRLLLRRRRLLLLRLRRLRRRLRRRLLRLRRLRLRRLRRRRRLLRRLRLLRRRRLRLRRRRRRLLRLLRRRRRRRRRRRRRRLRLLRLLRRRRRRRRLRLRRLRRLLLRRRRLRRRLLRLRRLLRLLRLRRLRLRRRRRLLRRRRRLLRLLRRRRRLLLLLRRLLLLLLRRRLRRRLLRLLRLRRLRLLLLRLLRLLRLRRLRLLRLLRLRRRLLRRLRLRLRRRRRRLRLLRRLLLRRLLRLRRRRRLRRRRRRLLLLLLLRRRRRLRRRRRRLRRRRRRLLRRLLRLLLRRLLLRLRRRRLRLLRRRRLRRLLRLLLLLLRLLRRLRRLLRRLRRLLRLLRLRLRRLRRLRRLLRLLRRLRLLRLRLLRLRRRLLRRRLRRLRRRLRLLLRRRLLRRRRRRRLLLRLRRRRRLRLRLLRRLRRLLRRRRRLLRRLRLRLRRLLLRRLLRRLRRLRRLLLRRLRRRRRRRLRLRRLRRRLRRRRRRLRLLLRLRLLLRRLLRLRRLLRRRLRLRRLRLLRRLRRLRRRRLRLLLLRRLRRLRLLRLRLRRLRLRRRLLRRLLRLLRLRLRLLRLRLLLLRLRLLLRRLLLLRLLRRRRRLRRRRRRRRLRRRRLLLRLLLRRLRRRRLRRRRLRLRRRLLRRRLLRRRRLLLLLRRRRLRLRLRLRLRLLRLRRRLLLRLLRLRRRRLRRLLRRRLRRRRLLRRRRLRLRLRRRRRLRRLRRRLLLLRRRRLRLLRRRRLLRRRLRLLRLRRRRRRLRRLLLRRLLRRRRRRRRRRLRLRRRRLLRRLLRLRLRRRRRLLLRRRLLRRRLRRLLRRLLRRLRLRRRRRLLRLRLLLLRRLRRLLLRLRLLRLRRRLRRRRRLRLRRLLRLRRLLLRLLRRRLRLRLRRRRRRRRRRLLLRLRRLRLRRRRLRLRLLLRRLRLLLLLRLLLLRLLRLLLRLRLRRRLLLRRRRRLLLRLLRRLRLLRRRLRRRLRRRLLRRLRRRRLLLRLLRLRRRLLRLLRLRRRLRLRRLLLLRRRLLLRRLRLLLRRRLLRRRRRLRLRLRRLRLLRRLRRLLRRRRLRRLLRLRRRRRRRLRRRRRRRLLRRRRLLLRLRLRLLLLRRLRRRLLRLLRRLRRLLRRRRRLLLLLRRRRRRRRRRRRLLRLRLLRRRLLLLLLLRLLLLRRLLLLLRRRRLRRRRRRRLRRRLLRLLLLLLLRRRRLRRRLLRLLRRRLRRLRLRLRLLRLLLLLRRRRRRLRRLRLRRLLRRRRRLRRRRRLRLRRRLLLLLRLRLLLRLRLRRRRRRRLRLRRRLRRRLRRRRLRRRLLRRLRRLRRRRRLRRLRRLRRLRLRRLLRLRLLLLRLLLLLRRRRRRRLRLLLRLLRRRRLRLLRRRRLRLRRRLLLRLRRRRLRRRRLLRLLRLLRLRLRLLRLRRLRLRRRRLRLRRRRRLRLLRRRRRRRRRRLRRLLRRRRRLLLRRRLLLRRLRRRRRLRLRLRLRRRRLLRRRRRLLLRRRLRRRLLRRLLRLLLLLLRRLRLLRRRRLLLRRLRRRLRRRRLRLRRRRRLRLRRLLLLRRRLRLRLLLLRLRRRRLLLRRLLLLLRRRLRRRRRRLRRRRRRLRRRRRLLRLRRRRRRRRRRRRRRLRLRRRLLRRLLLLRLRLLRRRRRRRLRLRRLRLRRRRLRLRRRRRLRRRRLLLLLLLRRLRLLLRLLRLLLRLRLRRRRLRRLRLRRRRRRRRRRRLRLRLLRRRLLRLLLRRLRLRLRLLLLLRLRLLLRRLRLLLLLRRRLLRLRRLLLRRRLRRLRLRLRLRRRLRRRRLRLRRRLRLRLLRRLLRLLRRLRLRRRLLLLLRLLLRRRRRLLLRRRLLRRRRLRRLRRRRLLRRLRRLRRRLRRRRRLRLLRRRRRRLLLRLLLLRRRLRLRLLLRRRRRRRRLRLRLLLLRRLRLRRLLLRLLLRRLRLRLLRLRRLRLRLRLRRRRLLLRLLLLLLLRRRLRRRLLLLLLLRLRRLLLRLLRLLRRRRLRLLLRLLLRRRRRLLRRRLLLRLRRRLRLRLRRRLRRRRRLRLRRLRRRLRLRRLRRLLRLRRRRLLLRLLLRLRRRLRLRRLRLRLLLRLRRLRLRRRRRLLLRLRRRRRRRRRLLRRRLLRLLRLRLLRRLRRLLLLRRRRRRRRRLRLRLRRRRLRRRLRRLLLLLLRLRRLRLRRLLRRLLRLLLLLLLLLRLLRRRRRRLRLRLLLRRRRLLLRLRRLLRRRRRRLRRLLLRLRLLRRRRLLLLLRLLLLRRLRRLRRLRRRLLRLRLRRRLRLRLLRLLLRRRLLLLRRRLLRLLRLRRLRRLRLLRLRLLRLLLRRRRLRRRRRRRRLLRRLRRLLLLLRLLRRLRLLLRLLRRRRLLLLLLRRLRRLRRRRRRLRLLLLRRLLLRRRRLRRLLRRLLRRRLLLRRLLLLRRLRRLLRLLLLRLRLLRLRRLRLRLLLLLRLRLRLRLLLLLRLLRRLRRRRRRRLRRRRLLLRRRLLLRRRLLRLRRLLRRRRRLLRLRRLRLRLLRLRRRRLLLLLRLRRRRLRRLLRRRLRRRRLRLLRLLRLLRRRLRLRLRRRRRLLRRRLRRLRLRRRLLLRRRLRLLRLRLLRRRRRLLLLRRRLLRLRRRRRRRRRLLRLRRLRRLRRLLRRRLRRRLLRRRRLRLRLRLLRLLRRLLLLRRLLLLLRLLRLLRRLLRRLLRRRRLLLRLRRLLLLRLLRRLRRRLRRRRRLRLRLLLRRRRLRLRLRRLRRRLRRRRRLRRRRRLRLRLRRLRLRRRLLRRRLRLRRLRLRLRRLLLLRRLLLRRRLLLRLRRLRLRRLLLRRRLRLLLLLLRLLLRRLRLLRRLRLRLRLRRLRLLRRRRRRRLLLLLRRRRRRRLLRRRLLRRLLLRLLLRLLRLLLRLLRRLLLLRRLRLRLRLLLRRRRLRRLRRLLRRLRLRRRLRRRRRRLRRLLLLRRLRLLRLLRLRRLLLRLLLLRRLLRRLRRRLRLRLRLRLRLLLLLRRLRLRLRRRLRLLLLLLRRRLRLLLLRRLLLRRRRLLLLRRLLRLRLLRRLRRLRRLRRLRRRLRLRLRRLLRRRRRLRLRRLLRLLRRLRRRRLRLLRRLRLLLRRRRRRRLRRRRLLLLLLLLRLRRLLRLRLLRRRRRRLRLRRLLRRLRLRRLRRLLRRRRLLRLRRLRLRRLRLLLLRRLLRRRRRRLRRLLRLLLRLRRLRLLRLRLLRLRRRLLLRRLRLRRLLRRRLRRLRRLRLRRRLLLLRLRRLLRRRRRRRRLRRLRRRRLLRRLLLLLRRRLRRRLLRRLRRLRLLLLRLRRLLRRLLLLRRRRLRRRRRRLLRRRRLLLRRLRLRRRRRLLRLRLRLLLLRLRRRRRLRRRRRRRLRLLLLLRLRRRLLLLLRRLLLRRLRLLLRRRRLRLRRLLRLRLLLRRRRRLLRRLRRLRLLRLLLLRRRLLLRLLRRRRRRRLRRRRRLLRLLLLLRRRRRLRRRRLRRRRRRLRRRLLRRLLRRRRRLRRRRRLRLLLRLLLRLRRRRRRLRRLLRRRLRLLRRRLRLLLLLLLRLLRLRLLLRLLRLRLLRLLRRRLRLRLLLLRRRRRLLRLLRRRRRRRLLRRRRRLRRRRRRLRLLRLRLLLRRRRLLLLLLRLLLLLRLLRLLLLLLLLLRRRLRLRRLRLLLLLLRRRLLRRRLRRLLLRRRRRLRRRRLLLRRLRLRRLLLLRLRRLRLRLRLRRRLRLRRLRRRRRLLRLRLRRLRRLRRRLLRRLLLLRRRRRLLRRRRLRRLRLRRRRLLRRRLRRLRLLLLLRRRLRRRRRRLRRRLLLLRLRRLLRLRLRRRRLLLLLLLLLLLRRLRRRLLLRRLRLRRRRLRLRRRLRRRLRRLLLLLLRLLRLLRLLRLRRRLRRLLRRLLRLLLRLRRLLRRRLLLRLRRRLRRRRLLRRLLLRRLRLLLLLRRRLRLLLRRRLRRLRRRRRLRRLLLLRRLRRLRLLRLLLRRRRRRRRLRLLRLLRLRRRLRLLLRRLRRRLLLLLRLRRRRRRRRLRLRLRLRRLRLRLLRRLRRLLLLLLRLRRRLLLLRLRLRRRLRRLLRRLLLRLRRRLRLLLRRRRLLLLLRLLLRLLLRRRLRRRRLLRLLLRRRLLLRLLRRRLRRLLRLRRLRLLRLRRLRRLRLLRLRLRL\n",
       "out": "483 993\n"
      },
      {
       "in": "50 38\nLRLLRRRLLLLRRLRLLLRLLRRRRLRLRRRLRRRLLRLLRLLLRLLLRRLRRLLRRLRLLRLLRLRRLRLLRRLLRRLRRLRRRRLLRLLLLRLLLLRRRLLRRLLLRLRRRLRRRRRLLRRRRLRLRRLRLRRLLRRLRRRLRLLRLRLLRLRLLLRLLRLRLRLRRLRRRLLLLLRLLLRRLRLLLRRLRRLLLRLRRLLLLRLLLRRRLLLRLRLRRRLLLRLRRRLLRRRRRRLRLRLRRRLRRRRLLLRLLRRLRLRRRRRRLLRRLRLRRRRRRRRRLRLLLRRLRLRLRRLRLRLLLLLRRLRRRRRRLRRLRLLRRLLLLRLLRRRLRRRLRLLRRLRRLLRLRLLLRRRLLLRRLRLRRLRRRLRLRRLRLRRLRLLRLRRLRRLLRRRRRLLLLRRLRLRLRRRRRRLRRLLRLRRLRLRRLRRRRLRRRRRLLRLRLRRLRLRRRRRRLRRRLRRRLLRRRRRRLLLRRRRRRLLRRRLRRLLRLRLRRLRRRLRLLRLRLRLLLLRLRLLRLRRRRLRRRLRLRRRLRRRRLLRLLRRRLRRRRLLLLLLLLRRLRLLRLLRLRLRRRRRLRLLLLRRRRRLLLRRRLRRLRLRLRRRRLLLRLRRLLLRLLRRRRLRRRLLLRRLRRLRRLLRRLRLRLRLRLLRLLRRRLLRRRRLRRRLRRRRRLLRLLLRRLLLLRLRLRLRLRRLLRLLRRLRRLRRRLRRRRLRLLRRLRLLRLLRLLLRRLLLLRLLLLLRRRLLLLRLLRRRLRRRLRRRRRRLLRRRRRRRRRLRLLRLRRLRRLLRLLRRRRRLRRLRLRRLLRRRLLRLRRRLRRRLLRLRLLLLLRLRRRLRRRRRLRLLRRRRRLLLLRRRRLLRLRRRRRRRRRLLLRRLRRRRLLRRRRRRRLLLLLRRLRRLLRRLRLRRLLRLRLRRRLRRRLRRLLLLLRRRRLRRLLRRLLLRLRRLRLLRRRLLLLRLRRRRLLRRRRLLRLRRRLRRLRLRRRRLLRLRRRLLLRRLRLRRLRLRRLLLLLLLLRRLRLRRRLLRLRRRRRLRRRLRLLRRRRRLLRRRLLRRRRLLRRLRRRLRRRRLRRRRLLLLRLLLLRRRRRRLRLLLLLRRRLLLLRRRLLLRLRRRLRRRLRRRLRLLLLLLLRRRRRLRRLLRLLLRLLRRRLRRLLRRRLRRLLRRLLLRLLLLRRLRRLRLRRRLLLRRLLRLRLLLRLLRLRRRRRLLLLRLRLRRLRLRLRRRLLLLRLLRLLRRLLLLRRLRLLRRLLRLLLLLLLRRRLLLLLLLRRRRLLRRLRLRRRRRRRRRRRLLRLRRLLLRLLRRLRLRRLLRLLLLLRRLRRRLRRRLLLRRRRLRLLRRRRRRRRLLLLRRRLRLLLLRLLRLRLRRRRLRLRRRRLRRLLRLLRRLRLLLRRLRLRLRRLLRRRRRRLRRRLRRRRRRLRRRLLRLRRRRRLLLRRLLRRLRLRRLRRLRRLRLRLRRLLLLRLLRLRRRLLRRRRRLLRRRRRRRRRRLLRRRRLRLLLLLLRRRRLRRRRLRLRRLRRLRLLRRLLRLLLLRLRLRLRRRLLLLLRRLLRRLRLLLRLRLRRRLRRLLRLRRRLRLRRLRRRRRRLLLLRLLLRLLLRRRLLLRRLLRRLLLRRLRRRRRLLRLRLLLRRRRLRRRRRRLRRRLRRRLLRLLLRRRLRRRRLLLRRRRLRLRLLLRRRRRLRLRRRLRRRLLRRRRLLRRLRRLLLRRRRLRRRLRLLLRRRLLLRRLRLRRLRRRLLLRRRLRRRRLRLRRRRRLLLRRRLRRLLRRRRRLLLRRRRRRRLRLRRRRLRRRLRRLRRRLRRLRLLRRLRLRRRRLLLLLRRRRRRLRRRRRLRRLRLRRLLRRLLRLRRRRLRRRRRLLLRRLRLLRLLLRLRRRRRRLRRLLRLLRLRRLLRRRRLRRLRRLRLRRLLRRLRLLLRRRRLRRLRLRLLRRLRLRRLRRRRRLLLLRLRLRRRRRRRLLLRRRRRRLLLLRLLLLLLRRRRRLLRLLLRRLLLRRRRLRLLRRLLRLRRLLRRLRLLLLLRRRLRLRRLLLRLRLLLRLRRRRRRLRLLLRLLLRRRRRRRRLLLRRLLLRRLRRLRRLRRRRLRLLRLRLLRRLRRLRRRLLRLRLLRRRRLRRLRRRRRRLRRRRRRLRLLLRRRLRRRLRLLRLRLRRRLRLRRLLRRRLLLLRLRLLRRRLRRRLLLRRRLRRLLLLRRLRRRRRRRRRRRRRLRLRLRLLRRRRLRLRLRRRRRLLLLLLRRRLRLRLRLLLLLRLRLRRLRLRRLLLRRRRLLLLRRLLRLRLLLRRRRLLRRRLRLLLRRLLRRLLLRLLRRLLRLRLRLLRRLLRRRRRLRLLRRRLLRRLRLLRLRRRRLRRRLRLRLRLRLRRRLLRRRRRRRRRLLLRLRRRLRLRRLRRLRRLLRLLLRLLRLRRRLLRLRRRLRRRLLLRRLLRRRRRRRLLRRRRLLLLRRLRLLLRLRLLLRRLRRLLLLRLLLRRRRRRRLRLRRRLRRLRLLRRRRRLRLLRLLLRLRRRLRLRLRRLRRRRLRLRLRRRRLRRRLRLLLRLRLRLLRLLRRLLRRRRLRRLRRLLLRLRLRLRRRLLRRRLLRLLLLRRLRLRLRRRRRLRLLLRRLRRRLRRRRRLLLLLRLRLLRRLRLLLLRRRLLRLRLLRRLRRLRRLLLRLLLRRLRRLRRLRRRLLLLLLRLRRRLRRLLRRLLRRRLRLRRLRRRLRLRLRRLRLRRRLLRLRLRRRRLRLRLRLRRRLRRLRLLRLLRLLRRRLLRRLRRRRRRLLRLRLRRRLRLRLLLRRLRRRLRRLLRLRRLLLRRRLRRLRRRRRRRRRRRRRRLLLRRLRLRLLLLLRLRLRRLRRLRRRRRRLLRLLRLRLLLLLLRRLRLRRRLRLLRRLLLLLRRRLLRLLRRRRLLRRRRLLRLLRRLRLLRLLRRRRRLLRLRRRLLRLRRRLRLRRRLRRLRRLRLLRLLLRLLLRRLRRRLRRLLRLLRLLRLRRRRRLRRLRLLRRRLRRLRRLRRRRLRLRLRLRRLRRLRRRLRRLRRRRRLLRLLLLRLLLLRRRLRRLRRLRLRRRLRRRRLRRLRLRLRLLRRLRLRRLLLRRRLLRRRLLRLLRLLRRRLRLLRRRRLRLRLLRLRRRRRRRRRLRRRRLRRRRRRRLRLRRLRRLLRLLRLLRLRLRLLRRRLLLRRRRRLRLRLRLLLRLRRRLRLRRRRLLLRRRRLRLLLRRLLRLRLRRLLRRLLRRRLRLRRLLRRRRRLLRRLRLLRRRLRLRRRLLLLLLRLLRRLRRLRRRLRRRRRRLLLRLLRRRLRRLLRRRLLRRRRLRRLLRLLLRLLLLLLLRRRLRLRRLLRRLRLRRRLLRRRRLRLLRLRRLRLLLRLRLLRRRRRRRLLLRLLRLLRRLLRLRLRLRLLLRRRRRRRRLRRRRRLRLRRLLLLRRLRLLLRRRRLLLLRRLLRLRRLRLRLLLRRRLRRRRLRLLRRLLLLRLRRLLRRRLLLRRLLRRRRLRRRRLLRRRRRLRLRLRRRLRRRRRLRRRRLRLLLRRRLLRRLLLLRRLLRRLRRRRLRRLRLLRLLRRRRLRRLRRRLLLRRLRRRRRLRRLRRRRLLLRRRLRLRLRLRRLLLLRRLLLRLRLLLRRRRRLLRRLRRRRRLLRLLRRLRRLLRLLLLRRLRRLRLRRRLRRLRLLLLRRRLLLRLRLLRRRRLLRLRRRLRRRLLLRLLRLRRLRLRRLLRLLLRRLLLRLRRRRLRRRLRRRRLLRLRLRLLLRLRLLRLLRLLLLRRLRRRLRRRRRRRRRLLRRLLLLLLRRLRLRRLRRLLRRLLLRLRRLLRLRLLRLRRLLLRLRLLLLRLRLLLRLRLRRRRLRLRRLLLRLLLRLLRLLLLLRRLLRRRRLRRRRRRLRLLLRLRLRRRLRRLLLRRLRRRLRRRLLLRRRLLLRLLLRRRRLRLLRRLRLLLLLLLRRLRLRRRRRLRRLLLLRRLLLLRRLRLRLRLLRLRRRLLLLLLRRRRRLRRLLLLRRLLRRLLLLRRLRLLLRRRRLRLRLRRRLLLRLLLLRRLRRLRLLRLRRLRRRRLRLLLLLRRLLRRRRRLLRLRRLRLLRRLRLLLRRLRLLLRRLLLLRRRLLRRRLRLRRRLRRRLLRRLLRRRLLLRRLRRRLLLRRLLRRLRLRRLLRLRRRLRRLRLLRLRRRRLRLLLLRRRLLLLRLRRRRRLRLLRLLRLLLRRRRLLRRRRLLRRRLRRRRRLLLRLRRRRLRLRRRRLLRLRRRRRLRRRRRRLRRLLRRLRRLRRRLRLLLLRRRLRRRRRLRLRLRRLLRLLLRRRLRLLLRRRLLLLLRRRRLLLRLLLRRRLRLLLLRLLLLRLRLRRRRLRRRLRRRLRLRRRRRLLLLLLLLLLRLRLRLRLRRLRRLLLRRRLRLRLLRLLRRRRRRRLRRRLLRRLRLRRLRLRRRRLRRLRRRRLLLLRRRLRLRLLLRRLRLRRRRRLRRRRRRRLLRRRRRLRRRLRLRLLLRLLLLRLLRRRLRLLRLLRLLLRRRRRLRRLLLRLLRLRLLRRRLRLLLRRLLLRLRLRRLRLRRLLLLLLLLRRRLLLLRRLRRRLLLLRLRLRRRLLLLLRLLLRRRLLRLLLLLRLLRLLRLLRRRRLRRRRLLLLRRRRRLRLRLLLRLLLLRLLRLLRRLLRRLLRLRRRLLLRRLLRRRLLLLRLLRLRRLLRLRLLRLLRLLRLLLRRRLLLRLRLLLRRRRLRRLLLLRLLRLRRRRRRLRRLRLRRRRRLRLRRLRRLLLLRLRRLRLLRRRLRLRRRLRRRRRLRLLRLRLRRLLRRLRRLLLRRLLRRRLRLLLRLRRRRLRLRLLRRLLLRLRRRLRLLRLLRLRRLRRLLLLRRRLRLLLLRLLRLLRRRLRLLRRRRRRRRLLRLRRRRRRRLLRRRRLLLRRRLLLLRRLLRLLRLRLLRLLLRLLLRLLLRLLLRRRRLLLLRRLLRRRRLRRRLRLRRRLRRRRLLLRLLRLRLRRRLLRRRRRLLRRLLRRRLLRL\n",
       "out": "35 43\n"
      },
      {
       "in": "1000 17\nRLLLLRLRRLLLLLLRLLLRRRLLRLLLLRRRRLLRRLRLLRLLRRLRLRLLRLLRRLRRRRRLLRLLRLLLRLRRRLRRLRRLLRLRRLRLRLRRLRRRRRLLLRRLLLLRRRLLLRRRLLRLRRRRRLLLRRRRLRLRRLRLLLRRRLRRRRLRRRRLRLLRRRRRLRLRRLLRRRRRLRLLLRRLRLRRLLLRLRLRLRRRRRLLLRLRLRLLLRLRLRRLRLLLLLLRRRLLLLRLRLRRLLLLLLLLLLLRLLLRLLLRLLRLLLRLRLRLLRLRRRRRRRRRRRRLRRRLRRRRLRLRLLLRLRLLLLLRLRLLLLLRLRLRRLRLRRLRLRRRRLRRRRRRRLLRLLRRLRRRLLLRRLRLRLLLRRRRLLRLLRRRRRRRRRLRLRRRRLLRRLRLLRRRLLRLLRRLRRLRRRLRRLRLLRRLRLRLLRLLRRLLLLRRRRRLLRLRRRRLLRRRLLLRLRRLRRRRLRLRRLRRLLLLRRRLLLRLLRLLLRLLLRRRRLRLLRRRLRLLLRLLLRLRRLLRLLLRLRRLRRRLRRRRRLRRRRLRRRRRRRRRLLLRLLLRLRLRLRRRRLRRRRLRRRRRRLLLRLLRLLRLRRLLLRLLLRLRLRRLLRRRLRLRLRRRLRLLRLRRLRLLRRLLRRRLRLRRLRLRRRLRLRRLLRLLRRLLRLLLRLRRLLRRLRRRLRLLRRRLRRRRRRRRLRRRRRRLRRRRRRRRLLRLRRLLLRRRLRLLLRRLRRLRRRRLRRRRLRLLRRRLLRRRRRRLRLLRRRRRLLLRLRRRRRRRRLRRRRRRRRRLRLLRLRRRRRRLLLRRLRRLRLRLRRLRLLLRRLLRLRRLRRRLRRRLLRRRLLRLRLRRRLRLRRRRLRRRRLRRRRRRLLLRRRRLLRLLRLLRLLLRRRLLRLRRRRLRLLLLLRLRLLLLRLLLRRRLRLRRRRLLRLRLRRRRRRRRLRRRLLLLRLRRLRRRRRRRLRLRRRRRLLLRRRRRLLRLRLRRLLLLRRLLRRLLLRLLLLLLLRRLRRLRRLRLLLLRLRRLRRLRRLLLRLLLLRRRLRLLRRLLLLLLRRRLLRLRRLLRRRRRRRLRRRLLLLLRLRRRRRRLLRLRLRRRRLRRRRRRLRRRRRLLLRRRRLRLLLRLLLRRRLRLRLLLLLLLRLRLRLRLRRRRRRLRLLRRRLLRRRRRLLLRRRRLLRRLRRLRRRLLRRRLRRLLLRLRLLLRRRRRLRRRLLRRLRLLRLRRRRLRLRRLLRRRRRRRLLLLLLLRLRRRRRRLRLLRLRLLLRRLRLRRLLRLLRLRLRRRLLRRLLLLLLRRRRRRRRRRRLLRLLLRRRRRRLLLRRRRRRLLLRLLLRRRRRRRLLLRRRRRLRLLRRRRRLRRRRRRRLRRLRRRLRRRLRLRRRRLRLLRLRRRRLLLRLLRRRRLRRLRLRRRRLRRRLLRLLRRRLLRLRLLRRLRLLRRRRRLRRLRRRRLLLLLRLRLRLRRRRRLLLRLRLRLRLRLLRRRLLRLLRRRRRRRRRRLLLRRRRLLRLRLLRRRLLRRRRRRRRLLRLRRRRLRLRLRLRRRRLRLRRRLLRRRLLLLLRRRLRRLLRRLRRRLRRRLLRLRRRRRLRLLLLLLLRLRLLLLRRLLRLRLRRLRRRLLRLRRLLLRLLRLRRLLLRRRRRLLLLRRRLLLRRLRLLLLLRRRLLRLLLLRLRLRLRRLLLRRLRRRLRLRRRRLLLRRRLRLLLRRLLRRLRRLRLLLLLLLLLRRRRRLRLRLRRRRRRLRRRRRRRLLLRRRLLLLLRLLLRLRRRRRLRRRLRLRRLRRLRRLRLLLLRRRRRRRRRLLRRLRLRLRLRLLRLRRLLRRRRLRRLLRRLRLLRRRLLRRRRRRRRRRLLLLLRLRRRLRRLLLLRLRRRRRLRRLLRLLRRLLRLRRLRLLLRLRLRLRLRLRLRLLRRLRRLRRRRRLLLRRRLRRLLLRRLLRLRLRRRRLLRLRLRRRRLLLRRLRLRRRRLLRLLRRRRRLRRRLRRLLLLLRLLRRLLLLRLRLLRRRLRRLRLRRRLRLLLRLRLLLRLRLRLLRRRLLRLLLRRRLLRRRRLRRRLRRRRLRRRRRLLRRLLRRRLRLRRLRRLLRLLLRLLLLRLRLRRLRRRRRLLRRLLRLRLLRRRRLRRRRRRLLLLRRRLRLLLRLRRLLRRLRRRRRLRRRLLRLLLLRLRRLLLRRRLRLRRLRRLLRRLLLLLRRRRRLRRRRLRRLLLLLRRLLLRLLRRLLRLRRRLRRRRLRRRLLRLRLRLLRLLLRLLRRRLRLLLRLLLRLRLLRLRRRLLRRRLLRLLRRRRRRRRRLLLRRLLRRRLLRRRRLRRLRRLRRLRLLRRLRLLRLRRRRRLRLRLRRRLLRLRRLLRRLRLLRLLLRRLRLRRLRLRRRLRRRLLLLRRRLRRRLRRLRRRRRLLRRRRRLLLLLLLLLRRLRRRRRLLLLRLRRRRRLLRRRLRLLLLRLLLRLRLLLRLRLRRRRRLLRLRLRRLRLRLRRLRRLRLRLRRLLRLRRRLRRRRLRLLLRLRRLRLLRLRRRRRLLRRLLLRRRLRLLLRRLRLLRLLRRRLLRLRRRLRRLRLRRRRLLRLLRRLRLLLRLLRLLRLRRLLRRRLLLLLRRRRRLLRRRLRRRLLRLLRRRRRLLRLLLRRLLRRRRRRRRRRLLLRRLLLRRLRRLLRLRLLRLRRLLRLRLRLRRRRLRLRRRRLRLRLLRLRRLLLRRRLLLRRRLLLRRLRRLRLLLLLRRRLLLRLLRRRRRRRRRLLLLRRRRRLRRRRRLLRRLLLLLLLLLRRRRLRLRRRRRRRRLLRRLRLRLRLLRLRRLLLRRLRRLRRRLLRRRLRRLRRLLRLRLLLLRRLRRLRRRLRLRRLRRLRRLLRLRRLRLRRRLRLLRLLRRRRRRLRRRLRLRRLRLRRRRRRRLRLLLRLLRLRLRLRLLRRLRRLLRRRRLRRRLRLRLLRRLRLRLRLLLRLLLLRLLRRRRLRRLRRRRRLLRRRRRRRRRLLLLLLRR\n",
       "out": "372 373\n"
      }
     ],
     "hint": "n+1 элементтен тұратын <code>clean</code> белгі-тізімін ашып, әр барған торкөз үшін True қой.",
     "solution": "n, p = map(int, input().split())\ncmds = input().strip()\nclean = [False] * (n + 1)\nclean[p] = True\nfor c in cmds:\n    if c == \"L\" and p > 1:\n        p -= 1\n    elif c == \"R\" and p < n:\n        p += 1\n    clean[p] = True\nprint(sum(clean), p)\n",
     "explain": "Командаларды бір-бірден симуляциялаймыз. Шекараны тексеру: солға қадам тек p > 1 болғанда, оңға — p < n болғанда мүмкін. Әр қадамнан кейін торкөзді белгілейміз. Әртүрлі торкөздер саны — True белгілерінің саны (<code>sum</code> True-ды 1 деп санайды). Барған торкөздер әрқашан [min, max] кесіндісін құрайтынын байқап, тек екі шекараны сақтауға болады, бірақ белгілер қарапайымырақ әрі сенімдірек. Күрделілігі O(n + |cmds|).",
     "starter": "n, p = map(int, input().split())\ncmds = input().strip()\n# кодыңды осында жаз\n"
    }
   ]
  },
  {
   "id": "g7-grid",
   "title": "Екі өлшемді кестелер",
   "summary": "Матрицалар, аралау, торкөздің көршілері, спираль",
   "minutes": 35,
   "lesson": [
    {
     "type": "p",
     "text": "Кесте (матрица) — тізімдердің тізімі: <code>g[i][j]</code> — i жолы мен j бағанындағы элемент (екеуі де нөлден басталады). Кестелер олимпиадаларда үнемі кездеседі: карталар, ойын алаңдары, лабиринттер, суреттер."
    },
    {
     "type": "h",
     "text": "Кестені оқу"
    },
    {
     "type": "code",
     "code": "n, m = map(int, input().split())\ng = [list(map(int, input().split())) for _ in range(n)]\nfor row in g:\n    print(sum(row))       # әр жолдың қосындысы\n",
     "runnable": true,
     "input": "2 3\n1 2 3\n4 5 6\n"
    },
    {
     "type": "p",
     "text": "Егер кесте символдармен берілсе (мысалы, <code>#</code> және <code>.</code>), әр жолды жол ретінде оқы: <code>g = [input() for _ in range(n)]</code>, сонда <code>g[i][j]</code> — символ."
    },
    {
     "type": "warn",
     "text": "Кестені ешқашан <code>[[0] * m] * n</code> түрінде құрма: барлық жолдар <b>бір ғана</b> тізім болып шығады, бір жолды өзгертсең, бәрі өзгереді. Дұрысы: <code>[[0] * m for _ in range(n)]</code>."
    },
    {
     "type": "h",
     "text": "Торкөздің көршілері"
    },
    {
     "type": "p",
     "text": "(i, j) торкөзінің көршілерін аралау үшін жылжу массивтерін пайдаланады. Төрт көрші (қабырғасы бойынша) және сегіз көрші (диагональдарды қоса):"
    },
    {
     "type": "code",
     "code": "n, m = 3, 4\ni, j = 0, 1\nd4 = [(-1, 0), (1, 0), (0, -1), (0, 1)]\nfor di, dj in d4:\n    ni, nj = i + di, j + dj\n    if 0 <= ni < n and 0 <= nj < m:     # шеттен шықпадық\n        print(\"көрші:\", ni, nj)\n",
     "runnable": true
    },
    {
     "type": "tip",
     "text": "<code>0 &lt;= ni &lt; n and 0 &lt;= nj &lt; m</code> тексеруі міндетті. Python-да −1 индексі қате тудырмайды, ол үнсіз соңғы элементті алады. Мұндай қателерді байқау өте қиын."
    },
    {
     "type": "h",
     "text": "Кестені аралау"
    },
    {
     "type": "list",
     "items": [
      "Жолдар бойынша: сыртқы цикл i бойынша, ішкісі j бойынша.",
      "Бағандар бойынша: сыртқы цикл j бойынша, ішкісі i бойынша.",
      "Шаршы кестенің бас диагоналі: i == j болатын торкөздер; қосалқы диагоналі: i + j == n − 1.",
      "Спираль, жылан: ағымдағы бағытпен қозғалысты модельдеп, тіреліп қалғанда бұрыламыз."
     ]
    },
    {
     "type": "code",
     "code": "n = 4\ng = [[0] * n for _ in range(n)]\nk = 1\nfor i in range(n):              # жылан: жұп жолдар солдан оңға,\n    cols = range(n) if i % 2 == 0 else range(n - 1, -1, -1)\n    for j in cols:              # тақ жолдар - оңнан солға\n        g[i][j] = k\n        k += 1\nfor row in g:\n    print(*row)\n",
     "runnable": true
    },
    {
     "type": "tip",
     "text": "Кестені шығару: <code>print(*row)</code> жолдың элементтерін бос орын арқылы басып шығарады. Символдық кесте үшін — <code>print(''.join(row))</code>."
    }
   ],
   "quiz": [
    {
     "q": "Неге <code>[[0] * 3] * 3</code> — кесте құрудың нашар тәсілі?",
     "options": [
      "ол 9×1 кесте құрады",
      "үш жолдың үшеуі де — бір ғана тізім",
      "Python-да олай жазуға болмайды"
     ],
     "answer": 1,
     "explain": "Тізімді көбейту сілтемені көшіреді. g[0][0]-ді өзгертсең — g[1][0] да, g[2][0] да өзгереді."
    },
    {
     "q": "5×5 кестенің бұрыштағы торкөзінің қабырғасы бойынша неше көршісі бар?",
     "options": [
      "2",
      "3",
      "4"
     ],
     "answer": 0,
     "explain": "Бұрыштағы торкөздің екі жағынан көршісі жоқ."
    },
    {
     "q": "n×n шаршы кестенің қосалқы диагоналін қандай шарт береді (индекстер нөлден)?",
     "options": [
      "i == j",
      "i + j == n − 1",
      "i − j == 1"
     ],
     "answer": 1,
     "explain": "Мысалы, n = 3 болғанда: (0,2), (1,1), (2,0)."
    }
   ],
   "problems": [
    {
     "id": "g7-grid-1",
     "title": "Ең биік нүкте",
     "level": 1,
     "statement": "Жер бедерінің картасы n × m кестемен берілген: әр торкөзде теңіз деңгейінен биіктік жазылған. Ең биік нүктені тап. Егер ондай нүкте бірнешеу болса, нөмірі ең кіші жолдағысын, ал олардың ішінен нөмірі ең кіші бағандағысын таңда.",
     "input": "Бірінші жолда n және m (1 ≤ n, m ≤ 50). Одан кейін −1000-нан 10000-ға дейінгі m бүтін саннан тұратын n жол.",
     "output": "Үш сан: ең үлкен биіктік, жолдың нөмірі және бағанның нөмірі (нөмірлеу 1-ден).",
     "examples": [
      {
       "in": "3 4\n1 5 2 8\n7 8 3 0\n2 2 2 2\n",
       "out": "8 1 4\n"
      }
     ],
     "tests": [
      {
       "in": "3 4\n1 5 2 8\n7 8 3 0\n2 2 2 2\n",
       "out": "8 1 4\n"
      },
      {
       "in": "1 1\n-5\n",
       "out": "-5 1 1\n"
      },
      {
       "in": "2 2\n-3 -1\n-1 -2\n",
       "out": "-1 1 2\n"
      },
      {
       "in": "3 3\n4 4 4\n4 4 4\n4 4 4\n",
       "out": "4 1 1\n"
      },
      {
       "in": "50 50\n7854 6900 8189 9275 6538 -326 6510 9525 6256 778 9285 6971 7651 721 1564 4279 3102 7935 5797 9744 495 6579 8886 3451 3561 6044 2743 4761 7702 8823 5463 2375 4691 -1 2347 1758 -557 19 6614 4100 274 6887 4300 4136 9424 8149 5344 2506 6388 6521\n9247 8027 6989 -908 9504 -243 1109 8058 5298 7111 7065 4039 1583 6274 7350 4417 1801 3300 5638 7488 5671 9054 1055 8950 5788 8526 5696 7358 4608 888 1845 7456 1551 8740 8511 4111 9670 2075 5883 5745 8003 9548 974 3384 8173 9955 2656 9724 5885 -374\n4298 -753 2124 -823 692 1636 7797 9159 9779 3009 5121 8912 1212 5687 6744 7421 -535 4940 4521 5838 9648 1916 4302 5088 9535 -410 2190 2437 2216 7701 3454 7744 -213 9309 9625 8359 4586 -537 3572 -549 2170 4099 2527 3851 1002 6209 4442 2874 1332 2755\n9863 -868 3527 3051 -795 6078 7367 5559 8759 4011 877 157 8618 335 124 3343 2583 5670 -387 9535 3160 -861 791 4343 2729 9737 3797 9659 7428 -25 4770 240 9503 4255 9629 3809 7330 -239 4697 8752 7708 487 2762 4759 896 6582 7300 1542 1931 8151\n5451 2526 5134 3680 8818 9003 5746 9138 534 4290 5980 1263 3747 8779 6222 2675 9945 4204 1080 7448 3819 510 9724 6567 188 8620 7698 4099 679 7586 9026 1097 8027 4712 784 1734 5330 2210 2567 -473 5772 2324 3631 2038 2901 -922 3870 5729 2508 9918\n8662 5596 3688 7656 9925 2834 5182 3970 7928 3918 468 2072 7194 3618 6075 9229 5260 518 1010 4290 2996 4960 1838 307 7914 3496 7661 -350 8612 5661 4305 9228 2362 8954 3613 7286 9259 9801 2011 6057 7020 4279 2046 617 4298 847 5995 -145 1402 1777\n5342 1439 5225 9619 8126 3130 2655 5906 5153 1475 7395 6217 6195 7430 116 904 -544 7591 6458 4896 8564 9597 6552 2128 3113 7296 4863 1341 8077 9103 2212 8191 7534 -899 3416 8566 8933 1802 3313 7134 6844 5966 8052 4419 -486 9548 -416 4695 2132 6374\n7326 -177 7557 7580 -543 891 4094 6509 1310 5254 1323 553 9990 9037 3152 6403 2248 2710 -259 1328 2341 2256 3708 4634 8288 1278 1339 3602 828 3712 4810 4633 2659 -892 4390 6693 -40 5385 9963 1191 6148 4283 126 4251 5681 5979 -985 8845 8705 8926\n2156 2087 6780 3808 6776 3911 6361 4143 6972 2575 8880 3474 6206 3124 5253 1017 2310 9973 2794 -113 2386 8083 9820 -430 1288 6857 2309 173 3434 6459 9622 1316 5052 6966 -304 2170 5427 -786 2895 -307 6463 6520 5238 6762 -705 1260 2545 8467 -506 -460\n8505 8201 4522 398 5636 9187 9029 4235 136 2667 9217 4711 1135 7234 2320 5840 6334 8193 3982 3314 2131 9869 4224 2391 1856 2519 -674 686 621 8655 -75 8076 6187 3054 4298 9218 803 1389 9856 9467 5816 5740 8222 5202 6492 9280 5179 1299 8476 1723\n6532 7478 9024 5113 4973 8652 9178 2265 7216 487 9878 7681 3486 6484 1031 9824 1882 6620 6408 8529 5952 5780 2697 8268 5100 -727 5320 1795 4762 8856 3232 -122 8511 117 7318 1871 640 9813 1825 948 6532 6134 2254 8885 -549 4249 -732 1030 1733 3904\n4068 5205 9383 7270 6941 8262 6337 7082 -374 -740 2026 2731 5286 6705 2660 5928 39 4476 364 8722 1391 8915 1569 4559 6028 7451 1353 -550 6511 1050 1671 5792 4489 -437 122 3798 7585 49 2843 4928 770 2003 6098 586 9900 4827 9762 594 1415 3973\n9500 2775 2968 9561 1326 7143 5034 4691 1488 3634 2112 9978 6609 8953 5193 8843 9794 1460 3336 4640 1105 4335 3677 3066 5216 9662 7457 857 3528 6756 1820 2096 1089 6210 -417 6395 3462 8075 1630 7522 1912 1776 6090 9463 3759 5774 -251 3675 8497 9313\n4748 2428 7995 5345 3714 6 3405 -487 6086 4715 8272 7341 2182 842 6098 6761 709 6093 1900 5049 6023 3455 8440 6048 8302 -321 6444 1666 6918 9677 -100 1188 2891 8576 9565 4883 8425 2114 8650 -630 2080 9505 3948 2581 9211 4695 5173 -920 3169 1064\n8916 3204 6968 2681 4549 4952 7783 6219 5105 8478 2816 5754 559 3295 9942 6821 4854 967 3883 8115 806 -344 5981 670 8957 -199 -940 9963 9699 2891 3949 5292 7305 4958 6264 7943 7836 7747 9304 6685 6525 7483 -435 9562 6350 3260 1312 3609 9192 4154\n8416 6545 3791 9612 9952 1092 8933 5210 4886 3257 5903 4138 7124 685 584 9198 2218 7583 3629 7328 3183 8547 9934 -474 7187 5119 6616 -327 6679 2281 7244 3277 8029 9774 3272 4506 4197 1316 50 8368 6721 5878 3601 4043 2707 901 391 4169 765 530\n8780 2564 8368 1115 4832 7045 6938 3069 9443 7170 1462 1158 8519 2224 5144 7624 9407 850 7816 9629 3788 -571 572 525 346 6878 -262 4427 4852 2620 7208 8410 2502 -709 4443 8185 6583 7478 4964 2503 -44 9653 347 3387 6493 3445 2639 2142 7066 4908\n-916 4857 -932 1594 -974 2539 8007 8969 8555 6401 9147 8199 7445 4746 1776 3559 9004 2234 8219 3560 1485 1782 8492 2877 1953 4590 593 5012 3948 2619 9185 2738 -432 9293 4752 1242 9104 5373 3253 7398 729 4351 490 2656 7990 3250 963 3026 2872 2111\n351 7759 2326 4834 6307 450 4702 8269 4473 7600 5227 7109 5026 1606 6395 -125 597 7231 2822 825 3387 1222 7297 5990 8116 2169 2256 2070 9122 -57 5558 -139 9865 4912 8131 -808 5386 390 21 4117 2465 9242 1864 9227 7266 8015 1204 9175 5040 9283\n4505 401 5744 4296 72 7765 634 5723 6086 7 -166 -466 29 1971 9395 5865 4891 2640 9527 5361 1502 2103 5595 9386 3383 8649 -437 7926 9396 -281 6592 3529 -916 5835 -75 4507 7777 7779 6312 6477 1814 4675 9588 2553 6080 7431 7370 5680 9436 9333\n4351 1765 -309 3419 4322 433 8542 3848 3677 -788 1992 2569 -81 4783 4563 2409 3741 8667 3751 5799 8277 6571 8828 2800 8941 3052 5571 5920 4976 4711 6298 8355 110 85 7127 2305 7632 3791 9095 2128 -35 1757 7447 8997 1113 -974 8405 9436 -218 6399\n3880 3012 1885 6788 321 2346 3946 8384 1131 -653 2497 -544 570 3832 7140 9635 4835 159 2471 4743 9399 -539 9467 9435 207 8846 6572 72 5177 8690 6893 4496 8469 339 1471 4258 7892 1047 -706 7124 4224 8135 8699 5036 9483 5218 1783 1813 3208 65\n1053 7151 3908 3015 -585 6073 7335 2541 56 -795 6400 663 6354 825 -667 -938 4978 852 3525 820 9125 1699 6579 110 6820 6171 4265 -100 4335 5935 1474 6467 6633 6311 -725 -756 6599 8087 1885 3586 -884 6266 -650 8021 7572 2195 -918 9532 -740 421\n6954 960 5662 3924 2717 7704 5514 5705 5182 9684 7402 8556 3757 4605 4396 3209 9931 5528 5321 4306 7971 5681 6826 4828 8631 -394 6440 8770 7389 7634 392 6717 5781 726 1020 2382 9641 810 3702 8583 4379 7488 8438 -211 7076 1810 4292 -591 9513 3319\n8160 9284 2743 1908 6429 8294 -50 -511 210 4788 3723 9920 8030 4348 6588 6648 9791 4622 3880 5977 5262 3881 1126 -391 8916 6982 3249 4961 6281 2814 1369 1681 -9 7529 1918 8717 -422 7603 8983 9340 -883 3669 4775 5139 153 5604 4556 1797 1231 9036\n9152 8531 9978 4707 3017 1902 8099 3011 7469 4108 -938 1400 8399 7609 806 1708 1818 9418 2910 9270 2919 4508 1216 4488 -910 8760 -491 8928 4307 2036 764 8124 7081 -348 7330 2423 4801 890 7925 3502 3479 -232 1710 3504 5137 270 4870 5270 3476 131\n9824 8615 3756 7285 830 2324 4754 6765 771 7879 3513 8339 7309 7038 7299 3865 7616 5511 1639 357 4283 7482 -76 641 1033 3089 7964 3042 4323 550 7710 2586 3094 3228 4178 389 9774 5954 2172 4766 2481 3435 8962 63 1307 1979 -70 9127 4157 -951\n3061 9421 -176 2447 3087 9384 -566 4598 -141 5402 3203 -879 3824 5466 2755 6664 9661 3284 8290 9340 1219 2335 6065 -222 2196 1176 8033 4075 7468 8548 9422 9404 4120 4419 -872 5760 8072 1067 -163 2119 737 9269 -604 3224 3789 4126 427 398 1544 5157\n2515 6944 5755 -409 486 7938 679 -731 2474 1333 6466 8899 440 -670 4396 1256 9405 6321 7079 7520 1612 3864 5371 9157 -786 1349 5940 1615 6512 8562 9529 884 8334 1185 5037 539 445 655 3907 -758 3504 9333 9667 534 6800 5530 5974 7073 4968 -930\n6635 7007 4572 5822 9122 655 2753 9751 -31 9247 2520 7411 8618 5165 1109 2048 3847 6603 8397 4112 4336 1836 2335 213 6336 3760 -301 3473 8002 -479 4988 4497 5451 9986 5519 3661 3713 8780 3738 565 169 9960 5911 9662 2016 5568 7852 2241 6337 8865\n1961 6121 8713 1182 8467 1469 8789 7204 9915 897 8317 -423 1284 4776 7829 6728 7399 8688 -44 898 1102 9864 771 4165 2814 9605 763 6421 6793 110 9362 3441 7876 869 8971 9512 9675 2546 -591 2055 -823 8193 9003 5841 8836 4124 303 4780 16 9094\n1150 7788 4129 5258 67 7768 9682 -661 3979 23 492 -442 8245 -274 2194 651 677 49 7049 7221 629 8320 5661 7684 6512 8096 1115 1405 8467 590 -778 4424 3501 4828 6613 -86 8660 1566 75 2493 5758 7981 9967 1270 7174 3255 966 7761 3491 8046\n4660 2368 5120 538 6278 2219 5799 5918 58 295 1576 9860 589 -3 5730 2587 6700 7393 5617 -886 5358 -296 3037 3142 6157 1591 8367 9779 9524 2917 954 5037 -684 4612 7679 3607 -904 2384 9642 -668 7200 4559 3319 1070 7852 6116 -937 2543 3481 -295\n997 8239 1265 2710 3951 7134 5111 8705 -864 7429 1684 7403 5273 9427 381 2245 6350 -617 7088 5952 3758 -181 6216 5986 9880 1396 4553 598 3220 7083 8217 9077 854 8480 1518 7313 4557 1907 4064 8103 4712 9927 8311 4221 4472 4954 8570 681 5277 -712\n8762 9472 18 7522 -321 -154 7437 2994 6379 7210 724 -692 5612 5933 8873 4104 1484 7160 6596 3058 8995 6629 7597 778 698 -418 8456 2077 -912 -423 9217 7630 4290 8189 5498 5270 6639 5447 4800 152 1016 7409 7812 6049 5105 6529 1641 5113 6409 2742\n3396 -131 5899 8082 3637 9472 6761 -351 5402 6891 7746 9989 9444 8729 6328 9855 1767 6238 8860 664 7501 145 173 1962 9499 5329 -983 9312 1781 8722 3808 -171 2626 1916 5628 4581 8404 3389 1737 2231 6567 425 9095 3626 1518 2689 7635 5829 4366 4217\n9247 5065 4823 2133 7930 8217 1268 5226 2763 8054 7510 2086 3014 7863 5928 1802 1354 8957 -188 5201 9178 8893 4737 6075 9486 1225 3034 1812 7232 726 2794 8196 3803 4540 7032 1928 -136 5456 9016 4110 -575 6576 4256 2124 1662 4540 512 1665 2207 2025\n-653 1272 857 1816 9475 -145 2567 -626 9503 8700 -360 2313 -318 1919 9741 7171 -32 8496 9341 2491 3061 2294 1682 -488 9311 9095 1095 1225 2719 6181 4350 1830 8339 5517 6950 9335 510 667 9102 9486 913 9790 8687 2924 -753 5839 3620 6754 -444 2028\n9290 3647 4879 578 2439 7333 2722 9838 2458 2098 8370 1786 990 6641 3701 5313 6669 -846 6669 6375 8158 9226 649 6730 8175 4437 7740 3415 4282 1251 9272 9839 8978 9742 4760 8831 9037 -766 2323 3891 -855 689 2823 9084 690 163 4590 6568 2062 6893\n15 838 6646 357 9846 8167 8242 5938 3236 6419 6476 4955 4745 8298 7151 6532 5155 1232 9161 -555 1996 8940 811 8460 3733 8031 -729 6197 2238 6769 3106 444 7812 1823 3313 -756 8696 5308 5554 8124 7584 1743 2043 355 8650 7096 -365 9515 5122 -114\n4394 575 8497 6305 4312 5963 -873 3024 4242 302 530 2009 2261 1649 3437 3961 537 2081 4605 5486 3692 5196 7090 2150 4222 8771 5104 6904 6053 9843 7003 9349 6962 5344 9080 9203 7770 5864 8945 4101 1152 9068 5135 8535 7638 8938 8557 3693 4860 8493\n1672 2340 8527 2922 5559 767 -643 2283 -419 1653 2556 9062 3914 4823 8736 723 5710 7780 7364 1797 4047 1680 5731 4397 130 2545 1917 9219 -867 3730 2268 2138 6034 1647 8153 6905 6308 5293 9151 943 5973 398 3542 7124 -610 6221 1416 4798 8244 8369\n8662 5563 631 -502 6685 4426 -521 -726 2669 3214 2291 2348 3303 6859 3490 4132 3270 8350 7205 1277 6283 6093 2661 511 8752 6415 5575 1054 7054 8329 4678 9021 7332 9240 7311 1790 8273 2151 3821 2647 8539 8402 5708 9992 3894 2792 3109 9302 6791 4630\n-395 2660 2627 6113 80 1548 -316 57 7562 5906 1092 3178 335 963 1800 1748 -766 9896 6727 4490 3590 3316 2288 2821 1076 2608 7077 5037 4097 5851 2838 6868 7415 -577 400 1496 8862 9387 1539 5880 6926 9914 5723 7094 -435 6430 4955 9396 8062 4323\n3304 4384 768 8074 9738 4137 7067 2694 8779 6455 125 -592 7456 9889 1451 2257 1015 4313 9083 3394 7626 1054 8884 9213 528 8687 8958 -618 414 2775 7637 1941 589 4123 5794 5705 6087 556 4631 1841 -629 4893 4850 8826 8214 4186 -83 708 9467 1405\n2060 9737 8518 7458 5380 9421 -581 8794 8984 9285 8610 5693 2609 2268 2059 6272 3567 6722 788 7176 2446 663 9444 713 2700 7690 6596 8023 -750 6772 9314 642 6932 3334 8935 8543 8408 -168 8722 9052 -750 5030 5940 607 5310 -780 4806 957 2390 1674\n6927 6296 5068 5884 7957 -655 7380 2089 6531 7497 699 6840 7117 8128 924 5495 3679 4721 6916 6642 1024 4474 -899 4869 9335 9794 199 1833 8151 1209 8912 6025 -232 8757 8925 7254 5692 -37 610 7712 9532 6697 7874 6671 2702 22 7592 1419 2786 8085\n2602 9574 5959 8554 181 2144 5191 3074 5520 4194 6444 4541 7299 154 1613 9581 5308 5991 3736 3773 6269 2973 -892 5403 7755 2884 3246 429 9638 6473 2547 3231 3418 5950 1585 2608 3639 5296 3105 -960 977 344 -737 3115 6739 9471 8011 2340 9444 4125\n8783 9684 9945 6671 4133 3580 960 5941 4594 1261 7069 2193 2782 8471 6755 3482 8967 6038 9557 6594 5488 5761 8736 2296 7457 8586 978 3509 3383 3783 4237 1483 6897 4912 1877 889 149 6773 7403 5127 5261 6182 3473 3537 3938 -190 549 4323 2576 3947\n8153 759 5945 -343 388 6739 482 5151 3170 9825 6148 4923 6711 7958 3161 2582 7414 6619 2778 6391 -953 144 1605 6824 8714 1638 2047 5162 6539 6974 7983 1313 5689 9577 8685 9506 4963 1053 2783 6088 7588 2313 2695 2881 4545 6775 2785 7641 911 9690\n",
       "out": "9992 43 44\n"
      },
      {
       "in": "1 50\n-386 -897 -974 -36 -558 -308 -535 -694 -891 -764 -767 -393 -979 -650 -594 -552 -612 -26 -602 -581 -213 -332 -296 -408 -936 -89 -701 -9 -85 -745 -598 -480 -359 -254 -551 -584 -252 -377 -894 -307 -703 -93 -988 -200 -384 -465 -139 -80 -885 -655\n",
       "out": "-9 1 28\n"
      },
      {
       "in": "50 1\n9\n4\n1\n5\n5\n8\n8\n9\n1\n9\n7\n6\n6\n9\n5\n2\n6\n10\n6\n8\n8\n5\n7\n2\n6\n0\n7\n4\n9\n3\n9\n8\n2\n7\n0\n1\n2\n5\n0\n4\n4\n1\n8\n4\n0\n7\n5\n5\n4\n4\n",
       "out": "10 18 1\n"
      },
      {
       "in": "20 30\n3 0 0 1 2 0 0 0 2 0 1 0 2 0 2 2 1 1 0 2 0 2 3 3 3 2 3 0 3 2\n3 0 1 1 2 0 1 0 0 3 1 2 3 2 1 2 0 0 2 1 0 3 1 3 0 1 3 2 1 0\n1 1 3 3 1 1 0 0 2 3 0 1 3 3 0 2 0 2 0 3 2 0 1 1 3 1 3 0 1 2\n0 3 2 2 3 1 0 3 3 0 0 1 3 2 1 0 3 0 3 1 1 0 2 1 0 0 1 3 2 3\n3 3 3 1 1 0 0 0 1 2 0 3 3 2 1 1 3 2 0 1 1 0 1 2 3 3 2 1 0 0\n3 2 2 1 1 0 0 3 1 0 2 1 0 1 1 2 2 0 1 1 0 2 1 1 0 2 1 2 1 2\n2 1 2 0 1 3 1 3 2 0 0 2 2 0 3 1 2 0 3 2 2 2 0 0 1 0 1 0 2 3\n0 0 0 1 2 3 0 2 2 2 0 0 3 3 0 0 2 2 2 0 2 0 3 1 2 3 3 0 3 3\n2 3 3 1 2 0 3 2 2 2 0 1 3 3 1 1 2 0 3 2 2 3 1 1 1 2 3 3 0 2\n0 3 1 1 0 0 2 0 3 3 3 1 0 3 3 2 0 0 2 0 3 1 2 3 3 2 1 3 2 1\n0 1 3 3 3 2 0 0 3 0 1 0 3 3 1 3 0 3 2 3 3 1 3 1 0 2 2 1 3 0\n0 0 2 0 2 1 0 2 1 0 0 1 3 1 0 3 2 3 0 1 1 0 2 3 2 0 3 3 3 0\n1 2 0 3 2 3 0 0 3 1 0 3 2 1 3 1 1 1 1 3 1 3 3 1 1 0 3 2 2 3\n1 2 3 1 3 0 0 1 0 1 0 3 3 3 1 1 3 2 0 0 1 0 2 2 3 3 1 3 0 0\n1 2 1 3 3 2 2 1 3 0 2 2 1 2 3 0 0 0 3 3 1 0 3 0 3 1 3 2 3 3\n0 0 3 1 0 1 3 2 3 2 3 0 3 2 0 0 2 3 3 3 2 2 3 1 0 3 1 3 1 3\n0 3 2 3 1 3 1 0 1 0 2 1 1 0 0 0 2 1 0 2 1 1 2 1 1 3 1 1 1 2\n0 1 1 0 2 1 1 1 2 2 0 0 0 2 0 1 0 1 3 0 1 3 3 3 2 0 1 3 3 0\n1 1 3 0 2 0 1 3 3 2 3 0 1 2 2 2 3 2 3 2 1 1 1 2 1 2 0 0 1 3\n1 2 2 3 1 0 0 2 2 2 0 0 1 1 2 2 3 0 2 3 2 1 1 2 0 1 1 2 2 3\n",
       "out": "3 1 1\n"
      }
     ],
     "hint": "Кестені жолдар бойынша аралап, жауапты тек биіктік қатаң үлкен болғанда жаңарт — сонда бірінші табылған максимум қалады.",
     "solution": "n, m = map(int, input().split())\ng = [list(map(int, input().split())) for _ in range(n)]\nbest, bi, bj = g[0][0], 0, 0\nfor i in range(n):\n    for j in range(m):\n        if g[i][j] > best:\n            best, bi, bj = g[i][j], i, j\nprint(best, bi + 1, bj + 1)\n",
     "explain": "Жолдар бойынша аралау (i сыртта, j ішінде) дәл керекті ретпен жүреді: алдымен кіші жолдар, жолдың ішінде — кіші бағандар. Жауапты тек <b>қатаң</b> үлкен мән болғанда жаңартсақ, максимумы бар бірінші кездескен торкөзді сақтаймыз. Индекстерді 1-ден нөмірлеуге аударуды ұмытпа. Күрделілігі O(n·m).",
     "starter": "n, m = map(int, input().split())\ng = [list(map(int, input().split())) for _ in range(n)]\n# кодыңды осында жаз\n"
    },
    {
     "id": "g7-grid-2",
     "title": "Сапер",
     "level": 2,
     "statement": "«Сапер» ойынында n × m алаңның кейбір торкөздері миналанған. Әр бос торкөз үшін көрші торкөздерде неше мина бар екенін жазу керек. Ортақ қабырғасы <b>немесе бұрышы</b> бар торкөздер көрші саналады (8 көршіге дейін).",
     "input": "Бірінші жолда n және m (1 ≤ n, m ≤ 50). Одан кейін m символдан тұратын n жол: <code>*</code> — мина, <code>.</code> — бос торкөз.",
     "output": "m символдан тұратын n жол: миналар <code>*</code> болып қалады, әр бос торкөздің орнына — 0-ден 8-ге дейінгі цифр.",
     "examples": [
      {
       "in": "3 4\n*...\n..*.\n....\n",
       "out": "*211\n12*1\n0111\n"
      },
      {
       "in": "1 1\n.\n",
       "out": "0\n"
      }
     ],
     "tests": [
      {
       "in": "3 4\n*...\n..*.\n....\n",
       "out": "*211\n12*1\n0111\n"
      },
      {
       "in": "1 1\n.\n",
       "out": "0\n"
      },
      {
       "in": "1 1\n*\n",
       "out": "*\n"
      },
      {
       "in": "3 3\n***\n*.*\n***\n",
       "out": "***\n*8*\n***\n"
      },
      {
       "in": "2 5\n.....\n.....\n",
       "out": "00000\n00000\n"
      },
      {
       "in": "50 50\n.*..........*.**..*..*..........*.....**........*.\n..............*...**....*.*....*.*........**..*...\n.........*.....*...*.....*........*.*...**........\n**.......*...*.......**.*..........*.......*....*.\n*..*...*.*......*................*...........**...\n....*....*.......*...*...*..*......*...*.*..*..*.*\n.............*...*.*...*......*.**..*....*...*....\n.............*.......*.........*.....*...*..*.*...\n..............**.....**.......*....*..............\n*.....*...*..*......*....*.......*.........*......\n*..........*............*..........**...*.*.......\n..................*...........*.*....*....*...*..*\n.*.......*.*....*.....*....*.*...*...*........*.*.\n*.*...*.....*...........*.*.**.*..................\n................*.*.......*....*.....**....*......\n..............***......*..*.....*...*....*......*.\n......................*........*............*....*\n..**.......*..*.*.........**..............*....*..\n...*...*.....*........*......*...............*....\n.....*.**.**..**.....*...*.*...........*....*.*.*.\n.......*.....*.*..*.**...*.*..*..*...*....*.......\n.*.*...****.....*....**.*.*....*.*.....**....*....\n.*.....*..*....*...**........*...**.......*.......\n.*..................*.....*.*....*.**.........*...\n...**..........*..*.*...*..*.......*.......*......\n.................*.......*..*.**.............**..*\n...*.......*........*..*....*......*...*..........\n.....*.......**......*.......**..........*.....**.\n.*.....*.........*....*..*.....*......**.*..*...*.\n...*.........*...*.*..............*.***..*........\n*..**........*.*..........................**.....*\n*....**...**...*.*...*.*........*....*..*....*....\n..**....*.....*..***......*......*....**....*.....\n..**.........*..*..*...*...................*.....*\n..........*.*.*.....*.........*.......*...........\n*.......*.........*..*.*.*.......*......*.........\n*.**...***..*.*..**......*.....*...**..*........*.\n..........*..*...*...*.*.**......*...*....**.*.*..\n.*.*.*.........*...*.******.........*....*..*.....\n....*...........*.....*...............*...*.**.*..\n..*.......*...**....*.*.*..*..*............*.*..*.\n.......*...*....*.*.*..**......*........*...*.....\n............*.....*...............*.*.....*.....*.\n.*...*........*...*....*................*..*......\n...........*....*.*.*.**.....*..*.........*.......\n*....*.........*.....*.**..*.....*....*...........\n...***......**.....*...............*..........*...\n..*..*..*........*....*..*.**....*..........*...**\n.*..*...**.........*.*.......*...*........*....*..\n..*.**...*..*...........**...*........***....*...*\n",
       "out": "1*1000000001*3**12*32*1112110012*21001**11221112*1\n11100000111113*422**3111*3*1001*3*22122333**11*211\n221000002*20123*113*32233*21001122*3*101**43211211\n**2110114*301*2221112**2*2100000123*2101222*2222*1\n*32*211*4*301111*2102332221111001*32201121223**332\n1112*1113*2011113*312*212*11*212333*211*3*21*44*2*\n0001110011102*202*3*323*211112*3**22*2214*323*3221\n0000000000002*4221213*421000023*32223*102*21*3*100\n11000111011123**10013**1111001*2212*21101122221100\n*20001*101*22*321001*3222*1001111*333101122*100000\n*2000111012*211001121101*2100112222**211*3*3111111\n221000001132200112*10112111122*2*2224*2113*202*32*\n2*2101111*2*2101*21101*2122*4*433*102*20011102*3*2\n*3*101*11122*10223110112*3*4**4*311023310011111211\n1211011100011224*3*1001224*4223*31012**1112*100111\n00000000000001***311012*12*20023*101*3211*222101*2\n0122100000111235320001*21233101*210111001222*1123*\n01**2011101*22*2*100022201**21211000000001*2222*21\n013*313*32333*44210012*112433*100000001111122*3321\n00112*4**2**33**21123*312*4*32211110112*1112*3*2*1\n1121214*65432*4*32*2**423*5*21*23*201*3332*2232211\n2*3*103****21133*2245**2*3*2223*4*41112**3221*1000\n3*41102*44*2001*211**42213232*214**3211222*1122100\n2*322111111100222125*30112*3*2102*5**100012211*100\n112**1000000001*22*3*201*33*3322213*3100001*233211\n00233100001110112*2322123*23*3**1022201110112**11*\n001*2110001*22211111*22*2112*543101*101*2110123332\n11212*2110112**111112*3221112**2101111334*21111**2\n1*21212*100023312*3122*11*10123*111224**4*31*113*2\n223*311110002*313*3*11111110001111*2***33*43210122\n*22**32101223*4*42312121100000011212343223**21101*\n*3344**212**224*4*422*2*11110001*2101*33*2233*1011\n13**3222*22222*34***313221*100012*1012**2112*21011\n02**200112122*33*34*311*1111011111100233101*21001*\n1222100112*2*3*21223*232311001*1111001*21111100011\n*3221013*423242213*32*2*3*2001222*222223*100000111\n*3**101***22*3*12**222425*41001*323**22*22222122*1\n2343312233*22*323*423*5*6**200112*234*2122**3*2*21\n1*2*3*100111112*322*3******200001111*3211*45*44220\n1233*21001110134*11235*644321111000112*112*4**3*21\n01*2111111*211**3313*4*5*21*11*210000112122*5*32*1\n0111001*112*2223*3*4*32**211112*11121101*223*21222\n111011211012*21214*411233100001111*2*10223*32101*1\n1*101*10001222*214*4123*2000111112121101*33*100111\n22102220001*1123*3*3*3**41112*11*210011212*2100000\n*1124*200012322*22233*4**11*21112*2111*10111011100\n122***311101**21212*223332333100223*1111000112*222\n12*45*22*31122101*3232*11*2**2102*3110000112*223**\n1*34*422**211100112*2*2233324*202*20012322*2222*43\n12*3**113*21*10000112111**102*20111001***2111*212*\n"
      },
      {
       "in": "50 50\n.*..***...*.**..*..**...**...***.*.****.*.*.*..*.*\n.*....**...*****.*****.*****.*.*.*.*****..*...***.\n*****.***.****..****.**********.*...**.***..***.**\n...********.***..*.*.**.***.**.*...***..***.******\n.*.***.*..*.**.***...****..*.*.*******...***.*.**.\n*.**.*...****.*****.********...***.*.*.*.**......*\n....*****..******.**.**.****..***********.*..*.*.*\n*.**.****.***..*.*.****.**.**..***.***.*.***..*...\n*..*..**.**....*.**.*..*...***......***....*.*.*..\n.*..**.*.*.*.*.*.*.**.*.**...*.*..**.****.*.***..*\n.*****.*..*.*.**.******..*.*******.***.***.**....*\n*.....**.......*.*.**.******.*.*..****..*.**.*****\n.**.***.***..*..**..*.***..*.***..*.****.*..****..\n....*.***.**.***.*****.*.****.*...****....**..*.*.\n*.**.****..*..****.**..******.**..**..*.**.***..**\n***..*.**.***.....*.**.****.*.****..*******.*.*.**\n.**.**..*.**.***.*..****.***.***.***.****.*.*..*.*\n*....****...*****.*..*..**.***.*.*******...***.***\n*.**..*.**.*.**..****..*.*****...*...*...****..*.*\n****.*******..**.***.....**.***.....******.***.***\n..***..******.**.*..****.*.****.***..**.***...*...\n****...*****....**..**......**.**..**.**..***.**.*\n***********..*...***.*.*..*.****..*.*.******......\n*.*.**..*..**..**.**..***.**.*..******....*...*.*.\n**...*.**..*.**....**.****.*.*******...****.*.**.*\n*.***...****.*..*.*..*....*****....******.**....*.\n****..*..**.***..**.*.***.......**..**.*****.**..*\n****.*...***..*.*..**.****.....**.**.***.*.*..*.**\n...*..*..****.*..*..*.*.*..**.*..**..*...****.***.\n*..***..*..**.**...**...********.*.***.*..*.**....\n**.*..*.*...*.******.***..***..*.**..*.*.*.*.*..**\n..*.**.**.*..*.*****.***.****.***...**.***.**.*...\n.*..*******.**..*.*****..*.**.**...*....*.*..***..\n.*****..*...***.*.**.*.****.*****.**.**....*.*...*\n.*..**.*.**.*..***.***.**.**.*****..***.*.*.*.....\n.*.****...**..********....***.***.*.*.**.**.*..**.\n.*..***.*.*.****.*.**.****.***...*******.***.*.*.*\n...*..**..*...*********.**....****..*****..**.*..*\n***.**.*....*.***.*****.**..**.***...*.**.*..*.*..\n*..**..****.*..******..*..***.**.****...*.***.****\n.**..**.***..**.*.*.*....*****.**.*****.*.****.**.\n...*.******...***.******.****..***...*.*.******...\n*.*****.*.***..******....****.*..*******.********.\n***.**.**.*....**..***.*.*....***.*.***.*..*.*****\n..****************..****....*******.**********..**\n.**.********.*.**..**.*..**.*.***.*..****.***.*...\n*.*.***....***.*.*****.***...**.****...*..***.*.*.\n**.*.**.*****.*.**..**...****.*..***..***.****.*.*\n.**.....*.*.******..**..*.****..******.....*..****\n.********.*...****....**..***.****.**.*.**.*...*.*\n",
       "out": "2*21***311*4**43*34**323**423***4*4****4*3*3*23*4*\n4*5446**334*****5*****5*****6*7*5*4*****55*435***4\n*****6***5****64****7**********4*235**6***44***8**\n346********7***46*6*5**8***6**6*544***43***5******\n2*5***6*56*7**6***535****76*5*5*******425***4*5**4\n*3**7*644****7*****4********425***8*8*6*5**432435*\n2445*****56******6**7**7****42***********6*42*3*3*\n*3**5****5***45*6*6****5**6**44***5***7*4***43*331\n*44*55**6**5424*6**6*64*544***434345***5445*5*5*21\n3*55**6*5*5*3*5*6*7**6*4**447*6*43**7****4*5***23*\n3*****6*42*3*3**6******66*6*******6***6***5**6545*\n*55556**4433234*6*6**7******7*8*54****65*5**6*****\n2**3***7***33*54**66*6***67*6***23*8****3*55****53\n2445*7***6**4***7*****5*7****6*523****5444**66*5*3\n*5**4****55*54****6**55******6**44**66*5**6***35**\n***55*6**5***45554*5**6****7*6****65*******6*5*4**\n4**3**66*5**6***4*34****7***6***7***7****5*6*54*7*\n*5444****544*****5*55*54**8***6*5*******445***4***\n*6**45*8**5*5**65****22*5*****523*446*755****55*8*\n****5*******55**5***54435**7***33432******7***4***\n47***35******3**6*54****3*4****5***45**7***655*553\n****645*****4333**54**633235**7**54**6**67***3**2*\n***********54*235***5*5*33*5****55*7*6******333432\n*7*5**66*54**44**4**54***5**6*76******4567*523*4*2\n**455*3**55*6**4344**4****6*7*******755****5*3**4*\n*7***334****6*53*4*54*5654*****5555******8**4444*3\n****53*24**6***43**5*5***4333334**45**8*****4**44*\n****4*323***56*4*44**6****22222**6**5***6*8*55*6**\n345*64*23****5*53*35*5*6*65**5*55**56*634****5***3\n*34***34*44**6**545**545********5*6***5*44*6**4443\n**4*65*5*424*5******6***56***66*6**46*6*6*5*6*32**\n34*4**6**6*44*5*****7***4****5***333**4***5**5*432\n2*56*******4**55*7*****56*7**7**533*5444*4*45***21\n3*****65*645***5*6**8*6****6*****4**5**4243*4*422*\n3*66**5*3**5*55***7***5**6**6*****45***5*4*5*32232\n3*4****435**45********5555***6***6*6*8**5**6*33**2\n2*44***5*4*5****8*8**7****5***566*******6***5*4*5*\n344*56**33*436*********7**4355****54*****55**4*34*\n***5**5*5434*4***8*****5**44**6***545*5**5*65*5*53\n*65**55****4*55******53*45***6**7****545*6***5****\n2**45**7***42**7*7*8*5434*****5**6*****4*6****6**3\n245*6******534***7******4****54***667*7*5******642\n*5*****7*7***24******6535****4*66*******5********3\n***8**7**7*7545**65***5*4*4446***7*7***7*67*8*****\n36****************35****4333*******5**********55**\n2**7********8*7**55**7*55**3*7***8*54****6***6*433\n*6*5***6567***5*6*****4***654**6****336*55***6*4*2\n**5*4**4*****7*6**55**435****6*45***53***3****5*6*\n4**55556*7*6******32**43*5****45******45445*53****\n2********4*324****2123**23***4****5**4*2**3*213*5*\n"
      },
      {
       "in": "1 50\n*.*...*.*.*.*..***.*.........*.*...*..........*...\n",
       "out": "*2*101*2*2*2*11***2*100000001*2*101*1000000001*100\n"
      },
      {
       "in": "50 1\n.\n*\n.\n*\n.\n*\n.\n.\n.\n.\n*\n.\n*\n.\n.\n.\n.\n.\n*\n.\n.\n.\n.\n*\n.\n.\n*\n.\n*\n*\n*\n*\n*\n*\n*\n.\n.\n.\n*\n*\n.\n.\n.\n*\n*\n.\n*\n*\n.\n.\n",
       "out": "1\n*\n2\n*\n2\n*\n1\n0\n0\n1\n*\n2\n*\n1\n0\n0\n0\n1\n*\n1\n0\n0\n1\n*\n1\n1\n*\n2\n*\n*\n*\n*\n*\n*\n*\n1\n0\n1\n*\n*\n1\n0\n1\n*\n*\n2\n*\n*\n1\n0\n"
      }
     ],
     "hint": "Әр бос торкөз үшін (0, 0)-ден басқа, di мен dj −1-ден 1-ге дейін болатын 8 жылжуды (di, dj) арала. Шекарадан шығып кетпе!",
     "solution": "n, m = map(int, input().split())\ng = [input().strip() for _ in range(n)]\nfor i in range(n):\n    row = []\n    for j in range(m):\n        if g[i][j] == \"*\":\n            row.append(\"*\")\n            continue\n        cnt = 0\n        for di in (-1, 0, 1):\n            for dj in (-1, 0, 1):\n                ni, nj = i + di, j + dj\n                if (di or dj) and 0 <= ni < n and 0 <= nj < m and g[ni][nj] == \"*\":\n                    cnt += 1\n        row.append(str(cnt))\n    print(\"\".join(row))\n",
     "explain": "Әр торкөз үшін жылжудың 9 нұсқасын аралап, (0, 0)-ді — торкөздің өзін өткізіп жібереміз. Шекараны тексеру міндетті: онсыз −1 индексі алаңның қарама-қарсы шетіне «секіріп кетеді», ал шеттердегі жауаптар қате болады (Python қате бермейді!). Күрделілігі O(9·n·m).",
     "starter": "n, m = map(int, input().split())\ng = [input().strip() for _ in range(n)]\n# кодыңды осында жаз\n"
    },
    {
     "id": "g7-grid-3",
     "title": "Спираль атыз",
     "level": 3,
     "statement": "Бағбан n × m тікбұрышты атызға көшеттерді спираль бойымен отырғызады. Ол сол жақ жоғарғы торкөзден бастап оңға қарай жүреді, ал шетке немесе отырғызылып қойған торкөзге жеткенде <b>сағат тілімен</b> бұрылады. Әр торкөзге ол өскіннің нөмірін жазады: 1, 2, 3, ... Атыз қандай болып көрінетінін шығар.",
     "input": "Екі сан n және m (1 ≤ n, m ≤ 30).",
     "output": "Бос орын арқылы m саннан тұратын n жол.",
     "examples": [
      {
       "in": "3 4\n",
       "out": "1 2 3 4\n10 11 12 5\n9 8 7 6\n"
      }
     ],
     "tests": [
      {
       "in": "3 4\n",
       "out": "1 2 3 4\n10 11 12 5\n9 8 7 6\n"
      },
      {
       "in": "1 1\n",
       "out": "1\n"
      },
      {
       "in": "1 5\n",
       "out": "1 2 3 4 5\n"
      },
      {
       "in": "5 1\n",
       "out": "1\n2\n3\n4\n5\n"
      },
      {
       "in": "4 4\n",
       "out": "1 2 3 4\n12 13 14 5\n11 16 15 6\n10 9 8 7\n"
      },
      {
       "in": "2 2\n",
       "out": "1 2\n4 3\n"
      },
      {
       "in": "30 30\n",
       "out": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30\n116 117 118 119 120 121 122 123 124 125 126 127 128 129 130 131 132 133 134 135 136 137 138 139 140 141 142 143 144 31\n115 224 225 226 227 228 229 230 231 232 233 234 235 236 237 238 239 240 241 242 243 244 245 246 247 248 249 250 145 32\n114 223 324 325 326 327 328 329 330 331 332 333 334 335 336 337 338 339 340 341 342 343 344 345 346 347 348 251 146 33\n113 222 323 416 417 418 419 420 421 422 423 424 425 426 427 428 429 430 431 432 433 434 435 436 437 438 349 252 147 34\n112 221 322 415 500 501 502 503 504 505 506 507 508 509 510 511 512 513 514 515 516 517 518 519 520 439 350 253 148 35\n111 220 321 414 499 576 577 578 579 580 581 582 583 584 585 586 587 588 589 590 591 592 593 594 521 440 351 254 149 36\n110 219 320 413 498 575 644 645 646 647 648 649 650 651 652 653 654 655 656 657 658 659 660 595 522 441 352 255 150 37\n109 218 319 412 497 574 643 704 705 706 707 708 709 710 711 712 713 714 715 716 717 718 661 596 523 442 353 256 151 38\n108 217 318 411 496 573 642 703 756 757 758 759 760 761 762 763 764 765 766 767 768 719 662 597 524 443 354 257 152 39\n107 216 317 410 495 572 641 702 755 800 801 802 803 804 805 806 807 808 809 810 769 720 663 598 525 444 355 258 153 40\n106 215 316 409 494 571 640 701 754 799 836 837 838 839 840 841 842 843 844 811 770 721 664 599 526 445 356 259 154 41\n105 214 315 408 493 570 639 700 753 798 835 864 865 866 867 868 869 870 845 812 771 722 665 600 527 446 357 260 155 42\n104 213 314 407 492 569 638 699 752 797 834 863 884 885 886 887 888 871 846 813 772 723 666 601 528 447 358 261 156 43\n103 212 313 406 491 568 637 698 751 796 833 862 883 896 897 898 889 872 847 814 773 724 667 602 529 448 359 262 157 44\n102 211 312 405 490 567 636 697 750 795 832 861 882 895 900 899 890 873 848 815 774 725 668 603 530 449 360 263 158 45\n101 210 311 404 489 566 635 696 749 794 831 860 881 894 893 892 891 874 849 816 775 726 669 604 531 450 361 264 159 46\n100 209 310 403 488 565 634 695 748 793 830 859 880 879 878 877 876 875 850 817 776 727 670 605 532 451 362 265 160 47\n99 208 309 402 487 564 633 694 747 792 829 858 857 856 855 854 853 852 851 818 777 728 671 606 533 452 363 266 161 48\n98 207 308 401 486 563 632 693 746 791 828 827 826 825 824 823 822 821 820 819 778 729 672 607 534 453 364 267 162 49\n97 206 307 400 485 562 631 692 745 790 789 788 787 786 785 784 783 782 781 780 779 730 673 608 535 454 365 268 163 50\n96 205 306 399 484 561 630 691 744 743 742 741 740 739 738 737 736 735 734 733 732 731 674 609 536 455 366 269 164 51\n95 204 305 398 483 560 629 690 689 688 687 686 685 684 683 682 681 680 679 678 677 676 675 610 537 456 367 270 165 52\n94 203 304 397 482 559 628 627 626 625 624 623 622 621 620 619 618 617 616 615 614 613 612 611 538 457 368 271 166 53\n93 202 303 396 481 558 557 556 555 554 553 552 551 550 549 548 547 546 545 544 543 542 541 540 539 458 369 272 167 54\n92 201 302 395 480 479 478 477 476 475 474 473 472 471 470 469 468 467 466 465 464 463 462 461 460 459 370 273 168 55\n91 200 301 394 393 392 391 390 389 388 387 386 385 384 383 382 381 380 379 378 377 376 375 374 373 372 371 274 169 56\n90 199 300 299 298 297 296 295 294 293 292 291 290 289 288 287 286 285 284 283 282 281 280 279 278 277 276 275 170 57\n89 198 197 196 195 194 193 192 191 190 189 188 187 186 185 184 183 182 181 180 179 178 177 176 175 174 173 172 171 58\n88 87 86 85 84 83 82 81 80 79 78 77 76 75 74 73 72 71 70 69 68 67 66 65 64 63 62 61 60 59\n"
      },
      {
       "in": "7 3\n",
       "out": "1 2 3\n16 17 4\n15 18 5\n14 19 6\n13 20 7\n12 21 8\n11 10 9\n"
      },
      {
       "in": "13 29\n",
       "out": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29\n80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100 101 102 103 104 105 106 107 30\n79 152 153 154 155 156 157 158 159 160 161 162 163 164 165 166 167 168 169 170 171 172 173 174 175 176 177 108 31\n78 151 216 217 218 219 220 221 222 223 224 225 226 227 228 229 230 231 232 233 234 235 236 237 238 239 178 109 32\n77 150 215 272 273 274 275 276 277 278 279 280 281 282 283 284 285 286 287 288 289 290 291 292 293 240 179 110 33\n76 149 214 271 320 321 322 323 324 325 326 327 328 329 330 331 332 333 334 335 336 337 338 339 294 241 180 111 34\n75 148 213 270 319 360 361 362 363 364 365 366 367 368 369 370 371 372 373 374 375 376 377 340 295 242 181 112 35\n74 147 212 269 318 359 358 357 356 355 354 353 352 351 350 349 348 347 346 345 344 343 342 341 296 243 182 113 36\n73 146 211 268 317 316 315 314 313 312 311 310 309 308 307 306 305 304 303 302 301 300 299 298 297 244 183 114 37\n72 145 210 267 266 265 264 263 262 261 260 259 258 257 256 255 254 253 252 251 250 249 248 247 246 245 184 115 38\n71 144 209 208 207 206 205 204 203 202 201 200 199 198 197 196 195 194 193 192 191 190 189 188 187 186 185 116 39\n70 143 142 141 140 139 138 137 136 135 134 133 132 131 130 129 128 127 126 125 124 123 122 121 120 119 118 117 40\n69 68 67 66 65 64 63 62 61 60 59 58 57 56 55 54 53 52 51 50 49 48 47 46 45 44 43 42 41\n"
      }
     ],
     "hint": "Ағымдағы бағытты [(0,1), (1,0), (0,−1), (−1,0)] жылжулар тізіміндегі индекс ретінде сақта. Қадам жасамас бұрын келесі торкөздің бос екенін тексер; бос болмаса — бұрыл.",
     "solution": "n, m = map(int, input().split())\ng = [[0] * m for _ in range(n)]\ndirs = [(0, 1), (1, 0), (0, -1), (-1, 0)]\nd = 0\ni = j = 0\nfor k in range(1, n * m + 1):\n    g[i][j] = k\n    ni, nj = i + dirs[d][0], j + dirs[d][1]\n    if not (0 <= ni < n and 0 <= nj < m and g[ni][nj] == 0):\n        d = (d + 1) % 4\n        ni, nj = i + dirs[d][0], j + dirs[d][1]\n    i, j = ni, nj\nfor row in g:\n    print(*row)\n",
     "explain": "Бұл — торкөздер бойымен қозғалысты модельдеу есебі. Күй: (i, j) орны және d бағыты. Бағыттар тізімде сағат тілімен бұрылу ретімен тұр, сондықтан бұрылу — бұл <code>d = (d + 1) % 4</code>. Қадам жасамас бұрын келесі торкөзге қараймыз: ол шеттен тыс болса немесе бос емес болса (0 емес), бұрыламыз. Спираль бұрылғаннан кейін келесі торкөз әрқашан бос болатындай құрылған (ең соңғы қадамнан басқа, бірақ одан кейін цикл аяқталады). Күрделілігі O(n·m).",
     "starter": "n, m = map(int, input().split())\ng = [[0] * m for _ in range(n)]\n# кодыңды осында жаз\n"
    }
   ]
  }
 ]
});
