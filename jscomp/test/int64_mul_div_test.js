'use strict';

var Mt = require("./mt.js");
var List = require("../../lib/js/list.js");
var $$Array = require("../../lib/js/array.js");
var Curry = require("../../lib/js/curry.js");
var Int64 = require("../../lib/js/int64.js");
var Printf = require("../../lib/js/printf.js");
var Caml_int64 = require("../../lib/js/caml_int64.js");
var Pervasives = require("../../lib/js/pervasives.js");

function commutative_mul(result, a, b) {
  return {
          TAG: /* Eq */0,
          _0: [
            result,
            result
          ],
          _1: [
            Caml_int64.mul(a, b),
            Caml_int64.mul(b, a)
          ]
        };
}

var pairs = [
  [
    /* @__PURE__ */Caml_int64.mk(-1753181728, -1482940033),
    /* @__PURE__ */Caml_int64.mk(525340320, 1831202545),
    /* @__PURE__ */Caml_int64.mk(634982515, 165328154)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(-45257752, 2086642202),
    /* @__PURE__ */Caml_int64.mk(-1243123636, 1756378018),
    /* @__PURE__ */Caml_int64.mk(-162347938, 1129387921)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(1358520104, -2133087767),
    /* @__PURE__ */Caml_int64.mk(-814703364, 209351581),
    /* @__PURE__ */Caml_int64.mk(-1595781194, 2047885301)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(-561804740, 781938191),
    /* @__PURE__ */Caml_int64.mk(-664434255, 1243995318),
    /* @__PURE__ */Caml_int64.mk(-1752170244, 965315102)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(-1173434256, -1526298485),
    /* @__PURE__ */Caml_int64.mk(-241239064, 806837349),
    /* @__PURE__ */Caml_int64.mk(-1873028186, 973509509)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(-1817540358, -1053250751),
    /* @__PURE__ */Caml_int64.mk(-827251842, 297218479),
    /* @__PURE__ */Caml_int64.mk(1639039171, 1353404045)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(1100802137, -1614556777),
    /* @__PURE__ */Caml_int64.mk(732603925, 1812737275),
    /* @__PURE__ */Caml_int64.mk(1587408437, 1686007471)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(-955806000, 166521361),
    /* @__PURE__ */Caml_int64.mk(-1809921861, 585926665),
    /* @__PURE__ */Caml_int64.mk(-1411520656, 1193284387)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(-2095936707, -1556851713),
    /* @__PURE__ */Caml_int64.mk(-977007627, 563693579),
    /* @__PURE__ */Caml_int64.mk(700349737, 1423006973)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(-2082262446, 2096650716),
    /* @__PURE__ */Caml_int64.mk(-275710143, 1413202597),
    /* @__PURE__ */Caml_int64.mk(-843247662, 495794945)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(1313884544, 1149398987),
    /* @__PURE__ */Caml_int64.mk(255480485, 556147957),
    /* @__PURE__ */Caml_int64.mk(929852288, 1711350082)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(-1787508521, 908394614),
    /* @__PURE__ */Caml_int64.mk(725956947, 1053216964),
    /* @__PURE__ */Caml_int64.mk(-310080019, 2145390454)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(1441406688, 962684198),
    /* @__PURE__ */Caml_int64.mk(468792198, 1528894622),
    /* @__PURE__ */Caml_int64.mk(-375108656, 1893431833)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(-966612576, -603570361),
    /* @__PURE__ */Caml_int64.mk(1999781536, 1842921977),
    /* @__PURE__ */Caml_int64.mk(-1039472903, 1854314037)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(1187405920, 1827458543),
    /* @__PURE__ */Caml_int64.mk(-1788999968, 1066436782),
    /* @__PURE__ */Caml_int64.mk(2020291989, 1004254249)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(1878451246, -1818789533),
    /* @__PURE__ */Caml_int64.mk(1999625579, 247021097),
    /* @__PURE__ */Caml_int64.mk(-1924515318, 1434621550)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(2103538455, 1714915951),
    /* @__PURE__ */Caml_int64.mk(45872671, 1071186049),
    /* @__PURE__ */Caml_int64.mk(-1656179703, 911777108)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(-344232772, 365880810),
    /* @__PURE__ */Caml_int64.mk(1477626470, 1215123423),
    /* @__PURE__ */Caml_int64.mk(1816687658, 1155052099)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(1713682280, -1590309406),
    /* @__PURE__ */Caml_int64.mk(-1964710772, 1236324221),
    /* @__PURE__ */Caml_int64.mk(1538765150, 871497139)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(1074580892, -1335640207),
    /* @__PURE__ */Caml_int64.mk(-1999389012, 153491040),
    /* @__PURE__ */Caml_int64.mk(1001897781, 469100620)
  ]
];

function from_pairs(prefix, pairs) {
  return $$Array.to_list($$Array.mapi((function (i, param) {
                    var b = param[2];
                    var a = param[1];
                    var result = param[0];
                    return [
                            Curry._2(Printf.sprintf(/* Format */{
                                      _0: {
                                        TAG: /* String */2,
                                        _0: /* No_padding */0,
                                        _1: {
                                          TAG: /* Char_literal */12,
                                          _0: /* '_' */95,
                                          _1: {
                                            TAG: /* Int */4,
                                            _0: /* Int_d */0,
                                            _1: /* No_padding */0,
                                            _2: /* No_precision */0,
                                            _3: /* End_of_format */0
                                          }
                                        }
                                      },
                                      _1: "%s_%d"
                                    }), prefix, i),
                            (function (param) {
                                return commutative_mul(result, a, b);
                              })
                          ];
                  }), pairs));
}

var small_pairs = [
  [
    /* @__PURE__ */Caml_int64.mk(121, 0),
    /* @__PURE__ */Caml_int64.mk(11, 0),
    /* @__PURE__ */Caml_int64.mk(11, 0)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(126736, 0),
    /* @__PURE__ */Caml_int64.mk(356, 0),
    /* @__PURE__ */Caml_int64.mk(356, 0)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(137176406, 0),
    /* @__PURE__ */Caml_int64.mk(12346, 0),
    /* @__PURE__ */Caml_int64.mk(11111, 0)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(-1048576, 268435455),
    /* @__PURE__ */Caml_int64.mk(-1, 255),
    /* @__PURE__ */Caml_int64.mk(1048576, 0)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(1048576, -268435456),
    /* @__PURE__ */Caml_int64.mk(1, -256),
    /* @__PURE__ */Caml_int64.mk(1048576, 0)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(1275262484, -639559543),
    /* @__PURE__ */Caml_int64.mk(-1147274043, 1209011959),
    /* @__PURE__ */Caml_int64.mk(242558724, 1831626934)
  ]
];

var to_floats = [
  [
    Caml_int64.one,
    1
  ],
  [
    /* @__PURE__ */Caml_int64.mk(2, 0),
    2
  ],
  [
    /* @__PURE__ */Caml_int64.mk(4, 0),
    4
  ],
  [
    /* @__PURE__ */Caml_int64.mk(8, 0),
    8
  ],
  [
    /* @__PURE__ */Caml_int64.mk(16, 0),
    16
  ],
  [
    /* @__PURE__ */Caml_int64.mk(32, 0),
    32
  ],
  [
    /* @__PURE__ */Caml_int64.mk(64, 0),
    64
  ],
  [
    /* @__PURE__ */Caml_int64.mk(128, 0),
    128
  ],
  [
    /* @__PURE__ */Caml_int64.mk(256, 0),
    256
  ],
  [
    /* @__PURE__ */Caml_int64.mk(512, 0),
    512
  ],
  [
    /* @__PURE__ */Caml_int64.mk(1024, 0),
    1024
  ],
  [
    /* @__PURE__ */Caml_int64.mk(2048, 0),
    2048
  ],
  [
    /* @__PURE__ */Caml_int64.mk(4096, 0),
    4096
  ],
  [
    /* @__PURE__ */Caml_int64.mk(8192, 0),
    8192
  ],
  [
    /* @__PURE__ */Caml_int64.mk(16384, 0),
    16384
  ],
  [
    /* @__PURE__ */Caml_int64.mk(32768, 0),
    32768
  ],
  [
    /* @__PURE__ */Caml_int64.mk(65536, 0),
    65536
  ],
  [
    /* @__PURE__ */Caml_int64.mk(131072, 0),
    131072
  ],
  [
    /* @__PURE__ */Caml_int64.mk(262144, 0),
    262144
  ],
  [
    /* @__PURE__ */Caml_int64.mk(524288, 0),
    524288
  ],
  [
    /* @__PURE__ */Caml_int64.mk(1048576, 0),
    1048576
  ],
  [
    /* @__PURE__ */Caml_int64.mk(2097152, 0),
    2097152
  ],
  [
    /* @__PURE__ */Caml_int64.mk(4194304, 0),
    4194304
  ],
  [
    /* @__PURE__ */Caml_int64.mk(8388608, 0),
    8388608
  ],
  [
    /* @__PURE__ */Caml_int64.mk(16777216, 0),
    16777216
  ],
  [
    /* @__PURE__ */Caml_int64.mk(33554432, 0),
    33554432
  ],
  [
    /* @__PURE__ */Caml_int64.mk(67108864, 0),
    67108864
  ],
  [
    /* @__PURE__ */Caml_int64.mk(134217728, 0),
    134217728
  ],
  [
    /* @__PURE__ */Caml_int64.mk(268435456, 0),
    268435456
  ],
  [
    /* @__PURE__ */Caml_int64.mk(536870912, 0),
    536870912
  ],
  [
    /* @__PURE__ */Caml_int64.mk(1073741824, 0),
    1073741824
  ],
  [
    /* @__PURE__ */Caml_int64.mk(-2147483648, 0),
    2147483648
  ],
  [
    /* @__PURE__ */Caml_int64.mk(0, 1),
    4294967296
  ],
  [
    /* @__PURE__ */Caml_int64.mk(0, 2),
    8589934592
  ],
  [
    /* @__PURE__ */Caml_int64.mk(0, 4),
    17179869184
  ],
  [
    /* @__PURE__ */Caml_int64.mk(0, 8),
    34359738368
  ],
  [
    /* @__PURE__ */Caml_int64.mk(0, 16),
    68719476736
  ],
  [
    /* @__PURE__ */Caml_int64.mk(0, 32),
    137438953472
  ],
  [
    /* @__PURE__ */Caml_int64.mk(0, 64),
    274877906944
  ],
  [
    /* @__PURE__ */Caml_int64.mk(0, 128),
    549755813888
  ],
  [
    /* @__PURE__ */Caml_int64.mk(0, 256),
    1099511627776
  ],
  [
    /* @__PURE__ */Caml_int64.mk(0, 512),
    2199023255552
  ],
  [
    /* @__PURE__ */Caml_int64.mk(0, 1024),
    4398046511104
  ],
  [
    /* @__PURE__ */Caml_int64.mk(0, 2048),
    8796093022208
  ],
  [
    /* @__PURE__ */Caml_int64.mk(0, 4096),
    17592186044416
  ],
  [
    /* @__PURE__ */Caml_int64.mk(0, 8192),
    35184372088832
  ],
  [
    /* @__PURE__ */Caml_int64.mk(0, 16384),
    70368744177664
  ],
  [
    /* @__PURE__ */Caml_int64.mk(0, 32768),
    140737488355328
  ],
  [
    /* @__PURE__ */Caml_int64.mk(0, 65536),
    281474976710656
  ],
  [
    /* @__PURE__ */Caml_int64.mk(0, 131072),
    562949953421312
  ],
  [
    /* @__PURE__ */Caml_int64.mk(0, 262144),
    1125899906842624
  ],
  [
    /* @__PURE__ */Caml_int64.mk(0, 524288),
    2251799813685248
  ],
  [
    /* @__PURE__ */Caml_int64.mk(0, 1048576),
    4503599627370496
  ],
  [
    /* @__PURE__ */Caml_int64.mk(0, 2097152),
    9007199254740992
  ],
  [
    /* @__PURE__ */Caml_int64.mk(0, 4194304),
    18014398509481984
  ],
  [
    /* @__PURE__ */Caml_int64.mk(0, 8388608),
    36028797018963968
  ],
  [
    /* @__PURE__ */Caml_int64.mk(0, 16777216),
    72057594037927936
  ],
  [
    /* @__PURE__ */Caml_int64.mk(0, 33554432),
    144115188075855872
  ],
  [
    /* @__PURE__ */Caml_int64.mk(0, 67108864),
    288230376151711744
  ],
  [
    /* @__PURE__ */Caml_int64.mk(0, 134217728),
    576460752303423488
  ],
  [
    /* @__PURE__ */Caml_int64.mk(0, 268435456),
    1.15292150460684698e+18
  ],
  [
    /* @__PURE__ */Caml_int64.mk(0, 536870912),
    2.30584300921369395e+18
  ],
  [
    /* @__PURE__ */Caml_int64.mk(0, 1073741824),
    4.6116860184273879e+18
  ],
  [
    Caml_int64.min_int,
    -9.22337203685477581e+18
  ]
];

var check_complete_compare = [
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true
];

var of_float_pairs = [
  [
    6853066956871844,
    /* @__PURE__ */Caml_int64.mk(-40494940, 1595603)
  ],
  [
    -8507688874782117,
    /* @__PURE__ */Caml_int64.mk(1388466779, -1980851)
  ],
  [
    4083117349607451,
    /* @__PURE__ */Caml_int64.mk(-684517349, 950674)
  ],
  [
    -4860723193745655,
    /* @__PURE__ */Caml_int64.mk(-1330680055, -1131726)
  ],
  [
    7820020192255542,
    /* @__PURE__ */Caml_int64.mk(1437736502, 1820740)
  ],
  [
    -4908619721514532,
    /* @__PURE__ */Caml_int64.mk(-383163940, -1142878)
  ],
  [
    5.67685864687671e+15,
    /* @__PURE__ */Caml_int64.mk(-1491709402, 1321746)
  ],
  [
    -703696191048023,
    /* @__PURE__ */Caml_int64.mk(-159336791, -163843)
  ],
  [
    1123586534990153.88,
    /* @__PURE__ */Caml_int64.mk(1615520073, 261605)
  ],
  [
    -4.29886533981922e+15,
    /* @__PURE__ */Caml_int64.mk(1786485548, -1000908)
  ],
  [
    2.43885138012066e+15,
    /* @__PURE__ */Caml_int64.mk(1445727316, 567839)
  ],
  [
    -8011538689499494,
    /* @__PURE__ */Caml_int64.mk(1246682778, -1865332)
  ],
  [
    2710072285421155,
    /* @__PURE__ */Caml_int64.mk(-538747293, 630987)
  ],
  [
    -2541457347159789.5,
    /* @__PURE__ */Caml_int64.mk(-644065005, -591730)
  ],
  [
    5012932793576708,
    /* @__PURE__ */Caml_int64.mk(1584508164, 1167164)
  ],
  [
    -943066847413899.125,
    /* @__PURE__ */Caml_int64.mk(596605301, -219575)
  ],
  [
    5440257518642004,
    /* @__PURE__ */Caml_int64.mk(-1461542060, 1266658)
  ],
  [
    -7750676773453898,
    /* @__PURE__ */Caml_int64.mk(-265928778, -1804596)
  ],
  [
    8911999221747713,
    /* @__PURE__ */Caml_int64.mk(-2082877439, 2074986)
  ],
  [
    -1443906702582204.25,
    /* @__PURE__ */Caml_int64.mk(1172790852, -336186)
  ],
  [
    659345820712164.875,
    /* @__PURE__ */Caml_int64.mk(-378700572, 153515)
  ],
  [
    -3284023713149006.5,
    /* @__PURE__ */Caml_int64.mk(-1524314190, -764622)
  ],
  [
    5062818438579988,
    /* @__PURE__ */Caml_int64.mk(1184368404, 1178779)
  ],
  [
    -8904450004162331,
    /* @__PURE__ */Caml_int64.mk(747956453, -2073229)
  ],
  [
    848261089308786,
    /* @__PURE__ */Caml_int64.mk(753381490, 197501)
  ],
  [
    -6376579516657391,
    /* @__PURE__ */Caml_int64.mk(-486076143, -1484664)
  ],
  [
    1337907592605664.25,
    /* @__PURE__ */Caml_int64.mk(-489902112, 311505)
  ],
  [
    -8.54733738833896e+15,
    /* @__PURE__ */Caml_int64.mk(-281980688, -1990083)
  ],
  [
    2345417644172927,
    /* @__PURE__ */Caml_int64.mk(428336767, 546085)
  ],
  [
    -2587460670129294.5,
    /* @__PURE__ */Caml_int64.mk(-572327054, -602441)
  ],
  [
    4580431718597436,
    /* @__PURE__ */Caml_int64.mk(-578731204, 1066464)
  ],
  [
    -1460576044874256.25,
    /* @__PURE__ */Caml_int64.mk(598574576, -340067)
  ],
  [
    3403657978343579.5,
    /* @__PURE__ */Caml_int64.mk(-524521317, 792475)
  ],
  [
    -7.89068917321888e+15,
    /* @__PURE__ */Caml_int64.mk(-1026811456, -1837195)
  ],
  [
    1683098350604788.5,
    /* @__PURE__ */Caml_int64.mk(-548449804, 391876)
  ],
  [
    -3966538891560174.5,
    /* @__PURE__ */Caml_int64.mk(845249298, -923532)
  ],
  [
    6726025288963652,
    /* @__PURE__ */Caml_int64.mk(-870754748, 1566024)
  ],
  [
    -4790410747298403,
    /* @__PURE__ */Caml_int64.mk(-1793835619, -1115355)
  ],
  [
    1985858071337706.25,
    /* @__PURE__ */Caml_int64.mk(-1662346518, 462368)
  ],
  [
    -5281733497873409,
    /* @__PURE__ */Caml_int64.mk(-1760584705, -1229750)
  ]
];

var simple_divs = [
  [
    /* @__PURE__ */Caml_int64.mk(6, 0),
    /* @__PURE__ */Caml_int64.mk(3, 0),
    /* @__PURE__ */Caml_int64.mk(2, 0),
    Caml_int64.zero
  ],
  [
    /* @__PURE__ */Caml_int64.mk(120, 0),
    /* @__PURE__ */Caml_int64.mk(11, 0),
    /* @__PURE__ */Caml_int64.mk(10, 0),
    /* @__PURE__ */Caml_int64.mk(10, 0)
  ],
  [
    Caml_int64.min_int,
    /* @__PURE__ */Caml_int64.mk(2, 0),
    /* @__PURE__ */Caml_int64.mk(0, -1073741824),
    Caml_int64.zero
  ],
  [
    /* @__PURE__ */Caml_int64.mk(-163100511, 1112580415),
    /* @__PURE__ */Caml_int64.mk(-1689560617, 2013350321),
    Caml_int64.zero,
    /* @__PURE__ */Caml_int64.mk(-163100511, 1112580415)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(1414064366, 983582600),
    /* @__PURE__ */Caml_int64.mk(720592487, 1027627185),
    Caml_int64.zero,
    /* @__PURE__ */Caml_int64.mk(1414064366, 983582600)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(-244174718, 707587463),
    /* @__PURE__ */Caml_int64.mk(-1441985079, 457824592),
    Caml_int64.one,
    /* @__PURE__ */Caml_int64.mk(1197810361, 249762871)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(-452010802, 3696312),
    /* @__PURE__ */Caml_int64.mk(1932508180, 303263066),
    Caml_int64.zero,
    /* @__PURE__ */Caml_int64.mk(-452010802, 3696312)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(530108890, 1998955230),
    /* @__PURE__ */Caml_int64.mk(-1300251594, 1876081138),
    Caml_int64.one,
    /* @__PURE__ */Caml_int64.mk(1830360484, 122874091)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(-1842975846, 1123314058),
    /* @__PURE__ */Caml_int64.mk(-1636954134, 1077511003),
    Caml_int64.one,
    /* @__PURE__ */Caml_int64.mk(-206021712, 45803054)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(-474132284, 772515434),
    /* @__PURE__ */Caml_int64.mk(435807891, 1485983210),
    Caml_int64.zero,
    /* @__PURE__ */Caml_int64.mk(-474132284, 772515434)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(1357533220, 1437309318),
    /* @__PURE__ */Caml_int64.mk(541080542, 1141241105),
    Caml_int64.one,
    /* @__PURE__ */Caml_int64.mk(816452678, 296068213)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(407118687, 1559319564),
    /* @__PURE__ */Caml_int64.mk(-280613636, 211092740),
    /* @__PURE__ */Caml_int64.mk(7, 0),
    /* @__PURE__ */Caml_int64.mk(-1923553157, 81670377)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(1054256000, 897058469),
    /* @__PURE__ */Caml_int64.mk(661312616, 57853316),
    /* @__PURE__ */Caml_int64.mk(15, 0),
    /* @__PURE__ */Caml_int64.mk(-275498648, 29258726)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(-1265124412, 1771820319),
    /* @__PURE__ */Caml_int64.mk(222584391, 1113086871),
    Caml_int64.one,
    /* @__PURE__ */Caml_int64.mk(-1487708803, 658733448)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(-1564422518, 1699471447),
    /* @__PURE__ */Caml_int64.mk(-398393386, 1090632987),
    Caml_int64.one,
    /* @__PURE__ */Caml_int64.mk(-1166029132, 608838459)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(837406327, 1300122432),
    /* @__PURE__ */Caml_int64.mk(-433706886, 349961722),
    /* @__PURE__ */Caml_int64.mk(3, 0),
    /* @__PURE__ */Caml_int64.mk(2138526985, 250237263)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(681013979, 1844919629),
    /* @__PURE__ */Caml_int64.mk(-400929258, 141654602),
    /* @__PURE__ */Caml_int64.mk(13, 0),
    /* @__PURE__ */Caml_int64.mk(1598127037, 3409791)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(-1067617897, 876561860),
    /* @__PURE__ */Caml_int64.mk(1118648885, 1635137811),
    Caml_int64.zero,
    /* @__PURE__ */Caml_int64.mk(-1067617897, 876561860)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(1188873919, 1444234022),
    /* @__PURE__ */Caml_int64.mk(-1845904707, 1506775353),
    Caml_int64.zero,
    /* @__PURE__ */Caml_int64.mk(1188873919, 1444234022)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(-1338985492, 216713133),
    /* @__PURE__ */Caml_int64.mk(478170254, 840978153),
    Caml_int64.zero,
    /* @__PURE__ */Caml_int64.mk(-1338985492, 216713133)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(-1951260634, 311131250),
    /* @__PURE__ */Caml_int64.mk(1397060596, 1432032601),
    Caml_int64.zero,
    /* @__PURE__ */Caml_int64.mk(-1951260634, 311131250)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(-2040192977, 702252958),
    /* @__PURE__ */Caml_int64.mk(1983179783, 333531300),
    /* @__PURE__ */Caml_int64.mk(2, 0),
    /* @__PURE__ */Caml_int64.mk(-1711585247, 35190357)
  ],
  [
    /* @__PURE__ */Caml_int64.mk(1357843095, 222120797),
    /* @__PURE__ */Caml_int64.mk(-1744534264, 1409050141),
    Caml_int64.zero,
    /* @__PURE__ */Caml_int64.mk(1357843095, 222120797)
  ]
];

function from(xs) {
  return List.mapi((function (i, param) {
                var d = param[3];
                var c = param[2];
                var b = param[1];
                var a = param[0];
                return [
                        Curry._1(Printf.sprintf(/* Format */{
                                  _0: {
                                    TAG: /* String_literal */11,
                                    _0: "small_divs ",
                                    _1: {
                                      TAG: /* Scan_get_counter */21,
                                      _0: /* Token_counter */2,
                                      _1: /* End_of_format */0
                                    }
                                  },
                                  _1: "small_divs %L"
                                }), i),
                        (function (param) {
                            return {
                                    TAG: /* Eq */0,
                                    _0: [
                                      c,
                                      d
                                    ],
                                    _1: [
                                      Caml_int64.div(a, b),
                                      Caml_int64.mod_(a, b)
                                    ]
                                  };
                          })
                      ];
              }), $$Array.to_list(xs));
}

var to_string = [[
    Caml_int64.zero,
    "0"
  ]];

var int64_compare_tests = [
  [
    Caml_int64.one,
    /* @__PURE__ */Caml_int64.mk(2, 0),
    -1
  ],
  [
    /* @__PURE__ */Caml_int64.mk(2, 0),
    Caml_int64.one,
    1
  ],
  [
    /* @__PURE__ */Caml_int64.mk(2, 0),
    Caml_int64.one,
    1
  ]
];

function from_compare(xs) {
  return List.mapi((function (i, param) {
                var c = param[2];
                var b = param[1];
                var a = param[0];
                return [
                        Curry._1(Printf.sprintf(/* Format */{
                                  _0: {
                                    TAG: /* String_literal */11,
                                    _0: "int64_compare ",
                                    _1: {
                                      TAG: /* Scan_get_counter */21,
                                      _0: /* Token_counter */2,
                                      _1: /* End_of_format */0
                                    }
                                  },
                                  _1: "int64_compare %L"
                                }), i),
                        (function (param) {
                            return {
                                    TAG: /* Eq */0,
                                    _0: c,
                                    _1: Caml_int64.compare(a, b)
                                  };
                          })
                      ];
              }), $$Array.to_list(xs));
}

function from_to_string(xs) {
  return List.mapi((function (i, param) {
                var str_a = param[1];
                var a = param[0];
                return [
                        Curry._1(Printf.sprintf(/* Format */{
                                  _0: {
                                    TAG: /* String_literal */11,
                                    _0: "to_string ",
                                    _1: {
                                      TAG: /* Scan_get_counter */21,
                                      _0: /* Token_counter */2,
                                      _1: /* End_of_format */0
                                    }
                                  },
                                  _1: "to_string %L"
                                }), i),
                        (function (param) {
                            return {
                                    TAG: /* Eq */0,
                                    _0: str_a,
                                    _1: Caml_int64.to_string(a)
                                  };
                          })
                      ];
              }), $$Array.to_list(xs));
}

Mt.from_pair_suites("Int64_mul_div_test", Pervasives.$at(from_pairs("random", pairs), Pervasives.$at(from_pairs("small", small_pairs), Pervasives.$at(List.mapi((function (i, param) {
                        var f = param[1];
                        var i64 = param[0];
                        return [
                                Curry._1(Printf.sprintf(/* Format */{
                                          _0: {
                                            TAG: /* String_literal */11,
                                            _0: "to_float_",
                                            _1: {
                                              TAG: /* Int */4,
                                              _0: /* Int_d */0,
                                              _1: /* No_padding */0,
                                              _2: /* No_precision */0,
                                              _3: /* End_of_format */0
                                            }
                                          },
                                          _1: "to_float_%d"
                                        }), i),
                                (function (param) {
                                    return {
                                            TAG: /* Eq */0,
                                            _0: Caml_int64.to_float(i64),
                                            _1: f
                                          };
                                  })
                              ];
                      }), $$Array.to_list(to_floats)), Pervasives.$at(List.mapi((function (i, param) {
                            var i64 = param[1];
                            var f = param[0];
                            return [
                                    Curry._1(Printf.sprintf(/* Format */{
                                              _0: {
                                                TAG: /* String_literal */11,
                                                _0: "of_float_",
                                                _1: {
                                                  TAG: /* Int */4,
                                                  _0: /* Int_d */0,
                                                  _1: /* No_padding */0,
                                                  _2: /* No_precision */0,
                                                  _3: /* End_of_format */0
                                                }
                                              },
                                              _1: "of_float_%d"
                                            }), i),
                                    (function (param) {
                                        return {
                                                TAG: /* Eq */0,
                                                _0: Caml_int64.of_float(f),
                                                _1: i64
                                              };
                                      })
                                  ];
                          }), $$Array.to_list(of_float_pairs)), Pervasives.$at({
                          hd: [
                            "compare_check_complete",
                            (function (param) {
                                return {
                                        TAG: /* Eq */0,
                                        _0: $$Array.map((function (param) {
                                                return true;
                                              }), check_complete_compare),
                                        _1: check_complete_compare
                                      };
                              })
                          ],
                          tl: /* [] */0
                        }, Pervasives.$at(from(simple_divs), Pervasives.$at(from_compare(int64_compare_tests), {
                                  hd: [
                                    "div_rem_0",
                                    (function (param) {
                                        return {
                                                TAG: /* Eq */0,
                                                _0: Caml_int64.zero,
                                                _1: Caml_int64.zero
                                              };
                                      })
                                  ],
                                  tl: {
                                    hd: [
                                      "div_rem_1",
                                      (function (param) {
                                          return {
                                                  TAG: /* Eq */0,
                                                  _0: Caml_int64.neg_one,
                                                  _1: Caml_int64.neg_one
                                                };
                                        })
                                    ],
                                    tl: {
                                      hd: [
                                        "File \"int64_mul_div_test.ml\", line 214, characters 5-12",
                                        (function (param) {
                                            return {
                                                    TAG: /* Eq */0,
                                                    _0: Caml_int64.to_float(Int64.max_int),
                                                    _1: 9.22337203685477581e+18
                                                  };
                                          })
                                      ],
                                      tl: /* [] */0
                                    }
                                  }
                                }))))))));

exports.commutative_mul = commutative_mul;
exports.pairs = pairs;
exports.from_pairs = from_pairs;
exports.small_pairs = small_pairs;
exports.to_floats = to_floats;
exports.check_complete_compare = check_complete_compare;
exports.of_float_pairs = of_float_pairs;
exports.simple_divs = simple_divs;
exports.from = from;
exports.to_string = to_string;
exports.int64_compare_tests = int64_compare_tests;
exports.from_compare = from_compare;
exports.from_to_string = from_to_string;
/*  Not a pure module */
