/*************************************************************
 *
 *  MathJax/jax/output/SVG/fonts/TeX/svg/AMS/Regular/Arrows.js
 *
 *  Copyright (c) 2011-2017 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

MathJax.Hub.Insert(
  MathJax.OutputJax.SVG.FONTDATA.FONTS['MathJax_AMS'],
  {
    // LEFTWARDS ARROW
    0x2190: [437,-64,500,64,423,'292 419Q292 400 261 347T211 275H306Q319 275 338 275T364 276Q399 276 410 271T422 250T411 230T366 225H306H211Q214 222 232 197T271 136T292 82Q292 71 285 68T262 64H250H241Q221 64 216 67T205 83Q186 127 153 167T78 230Q64 238 64 250Q64 258 69 263T82 272T106 288T139 318Q162 342 177 365T198 402T209 425T223 436Q224 437 252 437H258Q292 437 292 419'],

    // RIGHTWARDS ARROW
    0x2192: [437,-64,500,58,417,'188 417Q188 437 221 437H233Q256 437 263 434T275 417Q294 373 327 333T402 270Q417 261 417 250Q417 241 410 236T382 217T341 182Q315 155 299 128T275 85T263 66Q259 64 231 64H219Q197 64 191 72T193 100Q202 124 215 147T239 185T257 210T267 223L269 225H174H116Q80 225 69 229T58 250T70 271T114 276Q121 276 140 276T174 275H269L267 277Q266 280 257 291T233 325T205 374Q188 408 188 417'],

    // LEFTWARDS ARROW WITH STROKE
    0x219A: [437,-60,1000,56,942,'942 250Q942 244 928 230H511L457 148Q440 124 420 93Q404 68 400 64T389 60Q381 60 375 66T368 81Q368 88 415 159L462 230H175L188 214Q210 188 235 145T264 85Q264 75 260 74T231 72L206 74L191 103Q169 142 164 150Q130 195 64 239Q56 244 56 250T64 261Q115 294 142 323T191 397L206 428H231Q255 428 259 426T264 414Q260 397 235 355T188 288L175 272L331 270Q488 270 491 272Q491 275 542 352T597 432Q602 437 609 437Q617 437 622 432T628 417T582 341L537 272L735 270H931Q942 257 942 250'],

    // RIGHTWARDS ARROW WITH STROKE
    0x219B: [437,-60,1000,54,942,'54 250Q54 258 66 270H277L488 272L542 350Q596 431 602 435Q604 437 609 437Q617 437 622 432T628 417T582 341L537 272L608 270H751L822 272L808 288Q786 313 761 355T733 414Q733 424 737 426T766 428H793L806 397Q829 354 864 314Q896 284 928 263Q942 257 942 250T928 237Q887 208 864 185Q829 147 806 103L793 74L766 72Q742 72 738 73T733 85Q735 102 756 137T797 198L817 225L822 230H511L457 148Q440 124 420 93Q404 68 400 64T389 60Q381 60 375 66T368 81Q368 88 415 159L462 230H264L66 232Q54 239 54 250'],

    // LEFTWARDS TWO HEADED ARROW
    0x219E: [417,-83,1000,56,944,'56 250Q103 277 142 322T199 417H221Q244 417 244 416Q244 414 237 397T208 344T158 278L151 270H276L285 277Q322 306 349 345T388 417H434Q434 413 424 392T393 338T349 279L340 270H634Q933 270 937 266L938 265Q944 259 944 250T938 235L937 234Q933 230 634 230H340L349 221Q372 196 393 163T424 108T434 83H388Q377 116 350 155T285 223L276 230H151L158 222Q186 191 207 156T236 104T244 84Q244 83 221 83H199Q181 133 142 178T56 250'],

    // RIGHTWARDS TWO HEADED ARROW
    0x21A0: [417,-83,1000,55,943,'943 250Q895 221 856 177T801 83H778Q755 83 755 84Q755 86 762 103T791 156T841 222L848 230H723L714 223Q677 194 650 155T611 83H565Q565 87 575 108T606 162T650 221L659 230H365Q66 230 62 234L61 235Q55 241 55 250T61 265L62 266Q66 270 365 270H659L650 279Q627 304 606 337T575 392T565 417H611Q622 384 649 345T714 277L723 270H848L841 278Q813 309 792 344T763 396T755 416Q755 417 778 417H801Q817 367 856 323T943 250'],

    // LEFTWARDS ARROW WITH TAIL
    0x21A2: [417,-83,1111,56,1031,'56 250Q103 277 142 322T199 417H221Q244 417 244 416Q244 414 237 397T208 344T158 278L151 270H873L882 277Q919 306 946 345T985 417H1031Q1031 413 1021 392T990 338T946 279L937 270V230L946 221Q969 196 990 163T1021 108T1031 83H985Q974 116 947 155T882 223L873 230H151L158 222Q186 191 207 156T236 104T244 84Q244 83 221 83H199Q181 133 142 178T56 250'],

    // RIGHTWARDS ARROW WITH TAIL
    0x21A3: [417,-83,1111,79,1054,'1054 250Q1006 221 967 177T912 83H889Q866 83 866 84Q866 86 873 103T902 156T952 222L959 230H237L228 223Q191 194 164 155T125 83H79Q79 87 89 108T120 162T164 221L173 230V270L164 279Q141 304 120 337T89 392T79 417H125Q136 384 163 345T228 277L237 270H959L952 278Q924 309 903 344T874 396T866 416Q866 417 889 417H912Q928 367 967 323T1054 250'],

    // LEFTWARDS ARROW WITH LOOP
    0x21AB: [576,41,1000,56,965,'56 250Q103 277 142 322T199 417H221Q244 417 244 416Q244 414 237 397T208 344T158 278L151 270H622V305Q622 356 624 388T635 460T661 521T709 559T785 575Q813 575 833 573T880 561T923 534T952 483T964 405Q964 374 959 350T942 307T918 276T884 255T847 242T804 235T760 231T713 230H662V-27Q654 -41 644 -41H642H640Q628 -41 622 -27V230H151L158 222Q186 191 207 156T236 104T244 84Q244 83 221 83H199Q181 133 142 178T56 250ZM924 403Q924 474 894 505T794 536Q758 536 734 526T696 500T675 453T665 395T662 319V270H699Q826 270 875 295T924 403'],

    // RIGHTWARDS ARROW WITH LOOP
    0x21AC: [575,41,1000,35,943,'35 405Q35 454 48 489T86 542T137 567T195 575Q229 575 251 571T301 554T345 510T370 429Q377 384 377 305V270H848L841 278Q813 309 792 344T763 396T755 416Q755 417 778 417H801Q817 367 856 323T943 250Q896 221 857 177T801 83H778Q755 83 755 84Q755 86 762 103T791 156T841 222L848 230H377V-27Q369 -41 359 -41H357Q342 -41 337 -25V230H286Q247 231 225 232T169 238T115 255T75 284T45 333T35 405ZM75 406Q75 322 123 296T300 270H337V319Q335 432 317 477T240 534Q232 535 197 535Q140 535 108 507T75 406'],

    // LEFT RIGHT WAVE ARROW
    0x21AD: [417,-83,1389,57,1331,'57 250Q159 311 200 417H246L242 407Q215 340 159 278L152 270H276L315 310Q354 349 358 351Q366 356 376 351Q378 350 455 273L530 196L606 273Q683 350 686 351Q694 354 703 351Q705 350 782 273L858 196L933 273Q1010 350 1012 351Q1022 356 1030 351Q1034 349 1073 310L1112 270H1236L1229 278Q1173 340 1146 407L1142 417H1188Q1233 306 1331 250Q1231 192 1188 83H1142L1146 93Q1173 160 1229 222L1236 230H1168Q1155 230 1139 230T1119 229Q1112 229 1108 229T1099 231T1092 233T1085 238T1078 245T1068 256T1056 269L1021 304L984 267Q948 230 910 191T867 149Q857 144 848 150Q844 151 770 227T694 304T618 228T540 150Q531 144 521 149Q517 152 479 191T404 267L367 304L332 269Q328 264 320 256T310 246T303 239T296 234T289 231T280 229T269 229Q265 229 249 229T220 230H152L159 222Q215 160 242 93L246 83H223L200 84L195 96Q152 190 57 250'],

    // LEFT RIGHT ARROW WITH STROKE
    0x21AE: [437,-60,1000,56,942,'491 272Q491 275 542 352T597 432Q602 437 609 437Q617 437 622 432T628 417T582 341L537 272L608 270H751L822 272L808 288Q786 313 761 355T733 414Q733 424 737 426T766 428H793L806 397Q829 354 864 314Q896 284 928 263Q942 257 942 250T928 237Q887 208 864 185Q829 147 806 103L793 74L766 72Q742 72 738 73T733 85Q735 102 756 137T797 198L817 225L822 230H511L457 148Q440 124 420 93Q404 68 400 64T389 60Q381 60 375 66T368 81Q368 88 415 159L462 230H175L188 214Q210 188 235 145T264 85Q264 75 260 74T231 72L206 74L191 103Q169 142 164 150Q130 195 64 239Q56 244 56 250T64 261Q115 294 142 323T191 397L206 428H231Q255 428 259 426T264 414Q260 397 235 355T188 288L175 272L331 270Q488 270 491 272'],

    // UPWARDS ARROW WITH TIP LEFTWARDS
    0x21B0: [722,0,500,56,444,'56 555Q74 567 79 570T107 592T141 625T170 667T198 722H221Q244 722 244 721Q244 718 236 699T207 647T161 587L151 576L291 575H292H293H294H296H297H298H299H300H301H302H304H305H306H307H308H309H310H311H312H314H315H316H317H318H319H320H321H322H323H324H325H327H328H329H330H331H332H333H334H335H336H337H338H339H340H341H342H343H345Q435 574 438 570L439 569L440 568Q444 564 444 287Q444 15 442 12Q436 0 424 0T406 12Q404 15 404 275V535H151L162 523Q187 495 207 462T236 410T244 389H198L193 402Q171 457 131 497T56 555'],

    // UPWARDS ARROW WITH TIP RIGHTWARDS
    0x21B1: [722,0,500,55,443,'301 722Q339 618 443 555L437 551Q431 547 422 541T401 526T377 504T352 477T327 443T306 402L301 389H255Q255 392 263 410T291 461T337 523L348 535H95V275Q95 15 93 12Q87 0 75 0T57 12Q55 15 55 287Q55 564 59 568L60 569Q64 573 76 573T208 575L348 576L338 587Q314 613 294 646T264 698T255 721Q255 722 278 722H301'],

    // ANTICLOCKWISE TOP SEMICIRCLE ARROW
    0x21B6: [461,1,1000,17,950,'361 210Q373 210 373 182V177Q373 155 370 151T348 139Q303 118 267 84T216 28T201 1Q197 -1 196 -1Q189 -1 184 8Q166 39 143 64T99 104T61 129T32 144T19 150Q17 152 17 179Q17 203 21 208Q28 210 39 206Q106 178 157 135L175 119V126Q179 130 179 155Q182 173 193 201Q228 305 312 374T510 459Q532 461 551 461H567Q678 461 784 386Q835 344 861 301Q902 245 926 173T950 32Q950 15 944 8Q930 -6 917 8Q910 12 910 43Q901 208 801 314T561 421Q453 421 359 359Q300 319 263 258T217 126L216 125Q216 124 216 123T217 122Q219 122 229 131T260 156T301 181Q314 189 336 199T361 210'],

    // CLOCKWISE TOP SEMICIRCLE ARROW
    0x21B7: [460,1,1000,46,982,'972 209Q980 209 981 204T982 179Q982 155 979 151T957 139Q915 121 878 86T815 8Q808 -1 803 -1Q801 -1 797 1Q797 6 783 28T732 84T650 139L628 150Q626 152 626 177Q626 201 630 206Q636 210 637 210Q650 210 697 181Q727 166 764 137L784 119L782 132Q767 239 689 318T499 417Q474 421 442 421Q343 421 261 369T130 219Q86 121 86 28Q86 15 79 8Q73 1 66 1T53 8Q46 15 46 30Q46 102 77 192T186 361Q274 443 386 459Q396 460 426 460Q515 460 588 431T703 361T773 271T812 187T822 132Q822 123 825 123Q936 209 972 209'],

    // ANTICLOCKWISE OPEN CIRCLE ARROW
    0x21BA: [650,83,778,56,722,'369 543T369 563T397 583Q408 583 440 579L454 577L464 581Q492 592 516 609T552 638T565 650Q604 638 607 637Q606 636 598 628T585 614T570 601T548 584T523 568L510 560L516 558Q522 555 527 553T541 546T559 536T580 523T603 506T626 485Q722 384 722 250Q722 106 622 12T387 -83Q253 -83 155 12T56 250Q56 357 110 433T235 545Q244 550 252 550Q270 550 270 531Q270 522 261 515T238 501T202 477T159 433Q95 352 95 250Q95 131 178 45T388 -42Q511 -42 596 43T682 250Q682 340 636 408T522 511Q495 526 488 526Q488 525 488 525T487 522T485 515L490 506Q505 481 516 451T531 404T535 384L532 385Q529 386 524 387T513 390L491 397L488 408Q472 483 413 542L399 543Q369 543 369 563'],

    // CLOCKWISE OPEN CIRCLE ARROW
    0x21BB: [650,83,778,56,721,'170 637L213 650Q270 597 313 581L323 577L337 579Q369 583 380 583Q408 583 408 563T380 543H378L364 542Q305 483 289 408L286 397L264 390Q259 389 254 388T245 385L242 384Q242 387 246 403T261 450T287 506L292 515Q291 519 291 521T290 524T289 526Q284 526 265 517T216 486T160 434T114 354T95 249Q95 132 178 45T388 -42Q513 -42 597 44T682 250Q682 337 638 404T532 506Q529 508 525 510T519 514T515 516T511 519T509 522T508 526T507 531Q507 550 525 550Q533 550 542 545Q569 532 596 511T653 454T702 366T721 250Q721 151 672 74T547 -43T388 -83Q254 -83 155 12T56 250Q56 385 151 485Q164 498 179 509T205 528T228 542T247 551T260 558L267 560L254 568Q215 590 170 637'],

    // UPWARDS HARPOON WITH BARB RIGHTWARDS
    0x21BE: [694,194,417,188,375,'188 258V694H208L215 682Q246 628 293 594T375 551V528Q375 505 374 505Q369 505 351 510T299 534T237 578L228 587V205Q228 -178 226 -182Q221 -194 208 -194T190 -182Q188 -178 188 258'],

    // UPWARDS HARPOON WITH BARB LEFTWARDS
    0x21BF: [694,194,417,41,228,'41 551Q76 559 123 592T201 682L208 694H228V258Q228 -178 226 -182Q221 -194 208 -194T190 -182Q188 -178 188 205V587L179 578Q151 552 117 534T65 511T42 505Q41 505 41 528V551'],

    // DOWNWARDS HARPOON WITH BARB RIGHTWARDS
    0x21C2: [694,194,417,188,375,'190 682Q195 694 208 694T226 683Q228 679 228 296V-87L237 -78Q265 -52 299 -34T351 -11T374 -5Q375 -5 375 -28V-51Q340 -60 293 -92T215 -182L208 -194H188V242Q188 678 190 682'],

    // DOWNWARDS HARPOON WITH BARB LEFTWARDS
    0x21C3: [694,194,417,41,228,'188 295V573Q188 657 189 672T200 692Q206 694 208 694Q221 694 226 683Q228 679 228 242V-194H208L201 -182Q170 -128 123 -94T41 -51V-28Q41 -5 42 -5Q47 -5 65 -10T117 -34T179 -78L188 -87V295'],

    // RIGHTWARDS ARROW OVER LEFTWARDS ARROW
    0x21C4: [667,0,1000,55,944,'943 500Q895 471 856 427T801 333H778Q755 333 755 334Q755 336 762 353T791 406T841 472L848 480H459Q70 480 67 482Q55 488 55 500T67 518Q70 520 459 520H848L841 528Q813 559 792 594T763 646T755 666Q755 667 778 667H801Q817 617 856 573T943 500ZM56 167Q102 194 141 238T198 333H221Q244 333 244 332Q221 265 161 198L151 187H539Q928 187 930 186Q944 182 944 167Q944 155 934 149Q930 147 541 147H151L160 137Q185 110 205 77T235 24T244 1Q244 0 221 0H199Q158 106 56 167'],

    // LEFTWARDS ARROW OVER RIGHTWARDS ARROW
    0x21C6: [667,0,1000,55,944,'56 500Q103 527 142 572T199 667H221Q244 667 244 666Q244 664 237 647T208 594T158 528L151 520H539Q928 520 932 518Q944 513 944 500T932 482Q928 480 539 480H151L158 472Q186 441 207 406T236 354T244 334Q244 333 221 333H199Q181 383 142 428T56 500ZM943 167Q835 101 801 0H778Q755 0 755 1T758 9T765 25T771 39Q800 94 839 137L848 147H458Q68 147 66 149Q55 154 55 167Q55 182 69 186Q71 187 460 187H848L838 198Q811 228 791 261T762 314L755 332Q755 333 778 333H801Q841 227 943 167'],

    // LEFTWARDS PAIRED ARROWS
    0x21C7: [583,83,1000,55,944,'930 437Q944 426 944 416T934 399Q930 397 540 397H150L159 387Q185 360 205 328T234 277T243 252Q243 237 217 191T159 113L150 103H540Q930 103 934 101Q944 94 944 84Q944 71 930 64L540 63H151Q180 34 203 -2T236 -61L244 -83H198Q178 -31 142 11T66 77L55 83L65 89Q157 145 197 246Q199 250 190 269Q150 359 65 411L55 417L66 423Q106 447 142 489T198 583H244Q202 488 151 437H930'],

    // UPWARDS PAIRED ARROWS
    0x21C8: [694,193,833,83,749,'83 551Q190 590 250 694Q251 689 263 671T307 621T380 567Q409 551 416 551Q422 551 447 563T511 608T577 684L582 694Q642 591 749 551V528Q749 505 748 505Q745 505 724 515T669 546T612 590L602 599V-181Q595 -193 585 -193H582H581Q568 -193 565 -183L563 -179L562 209V598L552 589Q517 556 473 531T414 506H412Q411 506 393 514T361 530T324 553T280 589L270 598V-179Q255 -192 250 -193H247Q237 -193 230 -181V599L220 590Q197 567 164 546T110 515T84 505Q83 505 83 528V551'],

    // RIGHTWARDS PAIRED ARROWS
    0x21C9: [583,83,1000,55,944,'55 416Q55 427 70 437H848Q819 466 796 502T764 561L755 583H801Q821 531 857 489T933 423L944 417L934 411Q843 355 802 254Q800 250 809 231Q849 141 934 89L944 83L933 77Q893 53 857 11T801 -83H755Q797 12 848 63H459L70 64Q55 70 55 84Q55 94 65 101Q69 103 459 103H849L840 113Q806 148 779 196T756 254Q756 255 760 264T770 286T786 315T809 351T840 387L849 397H459Q69 397 65 399Q55 406 55 416'],

    // DOWNWARDS PAIRED ARROWS
    0x21CA: [694,194,833,83,749,'230 681Q240 694 251 694Q260 693 270 680V-98L280 -89Q297 -73 314 -60T348 -38T374 -24T397 -13T412 -6H414Q428 -6 473 -32T552 -89L562 -98V291L563 680Q570 693 582 693Q593 694 602 681V-99L612 -90Q635 -68 668 -47T723 -15T748 -5Q749 -5 749 -28V-51Q642 -91 582 -194L577 -184Q551 -141 512 -108T447 -63T416 -51T385 -63T321 -108T255 -184L250 -194Q189 -89 83 -51V-28Q83 -5 84 -5Q88 -5 109 -15T164 -46T220 -90L230 -99V681'],

    // LEFTWARDS HARPOON OVER RIGHTWARDS HARPOON
    0x21CB: [514,14,1000,55,944,'195 504L198 514H221Q244 514 244 512Q244 508 239 490T215 437T171 376L162 367H545Q928 367 932 365Q944 360 944 347T932 329Q928 327 492 327H55V347L67 354Q113 379 146 420T195 504ZM67 171Q70 173 507 173H944V153L932 146Q839 95 804 -4L801 -14H778Q755 -14 755 -12Q768 59 828 124L837 133H454Q71 133 67 135Q55 140 55 153Q55 165 67 171'],

    // RIGHTWARDS HARPOON OVER LEFTWARDS HARPOON
    0x21CC: [514,14,1000,55,944,'755 512Q755 514 778 514H801L804 503Q805 501 812 486T824 462T839 437T862 408T892 381T932 354L944 347V327H507Q70 327 67 329Q55 335 55 347T67 365Q70 367 454 367H837L828 376Q803 403 785 437T761 489T755 512ZM55 153V173H492Q928 173 932 171Q944 166 944 153T932 135Q928 133 545 133H162L171 124Q198 95 216 61T239 8L244 -12Q244 -14 221 -14H198L195 -4Q160 95 67 146L55 153'],

    // LEFTWARDS DOUBLE ARROW WITH STROKE
    0x21CD: [535,35,1000,54,942,'397 525Q410 525 414 524T418 516Q418 506 394 467T331 381L319 367H473L624 369L657 445Q674 487 684 507T699 531T709 534Q717 534 722 528T728 516Q728 510 695 434Q689 418 683 402T672 377T668 367H928Q942 355 942 347Q942 341 928 327H791Q651 327 651 325Q649 324 620 251T586 174Q586 172 757 172H928Q942 158 942 152Q942 143 928 132H568L537 54Q510 -9 503 -22T486 -35Q479 -35 473 -29T466 -17T495 61L526 132H319L331 118Q364 81 391 37T418 -17Q418 -23 415 -24T401 -26Q398 -26 397 -26L384 -24L377 -13Q344 49 301 97T218 170T143 210T84 233T55 245Q54 253 59 256T86 267Q281 327 377 512L384 525H397ZM606 325Q606 327 439 327H275Q258 312 179 265L148 249Q228 206 262 181L275 172H544L575 247L606 325'],

    // LEFT RIGHT DOUBLE ARROW WITH STROKE
    0x21CE: [534,37,1000,32,965,'395 -24T395 -19T417 57T440 132H255L266 116Q308 64 340 -6Q342 -17 337 -21Q335 -26 320 -26T302 -19Q302 -15 294 4T265 54T217 117T145 182T49 236Q30 243 33 254Q40 261 49 263Q98 283 142 315T214 379T263 442T293 493T302 519Q305 525 320 525T337 521Q342 516 340 505Q308 435 266 383L255 370L384 367H515Q561 522 569 530Q574 534 580 534Q587 534 594 528T602 516Q602 512 580 441T557 367H651L742 370L731 383Q689 435 657 505Q655 516 660 521Q662 525 677 525T695 519Q695 515 703 496T732 446T780 383T853 317T949 263Q967 258 964 245Q959 240 949 236Q897 215 852 182T779 116T731 52T703 3T695 -19Q692 -26 677 -26T660 -21Q655 -17 657 -6Q670 21 682 42T702 77T717 99T728 114T735 122T739 126T740 130T613 132H482L460 54Q440 -9 433 -23T415 -37Q408 -37 402 -31ZM502 325Q502 327 360 327H217L195 310Q173 291 120 256L111 250Q114 248 143 229T195 190L217 172H335L453 174L502 325ZM886 250Q885 251 865 263T831 286T802 310L780 327H544L535 299Q531 283 511 223L495 174L637 172H780L802 190Q843 225 877 243L886 250'],

    // RIGHTWARDS DOUBLE ARROW WITH STROKE
    0x21CF: [534,36,1000,55,943,'346 174Q348 176 378 249T411 325Q411 327 239 327H68Q55 342 55 347Q55 354 68 367H428L459 445Q487 509 494 521T510 534Q517 534 524 527T531 516Q531 515 502 438L471 367H677L666 381Q631 421 605 463T578 516Q578 522 582 523T599 525H615L619 512Q659 437 714 383T812 309T896 272T942 254Q943 246 938 243T911 232Q718 172 619 -13L615 -24L599 -26Q578 -26 578 -17Q578 -11 587 6T617 53T666 118L677 132H373L339 54Q323 12 313 -8T298 -32T288 -35Q280 -35 275 -29T269 -17Q269 -14 298 57T328 132H68Q55 145 55 152Q55 156 56 158T62 165T68 172H206Q346 172 346 174ZM848 249Q763 297 735 318L722 327H455L422 252L391 174Q391 172 557 172H722L735 181Q773 210 819 234L848 249'],

    // LEFTWARDS TRIPLE ARROW
    0x21DA: [611,111,1000,76,945,'944 54Q942 44 929 36H372Q372 34 377 26T395 -4T422 -58Q442 -109 442 -110T408 -111H374L370 -100Q282 124 87 243L76 250L87 257Q284 377 370 600L374 611H408Q442 611 442 610Q423 550 381 480Q380 478 379 475T376 471T374 468T372 465V464H929Q942 456 944 446Q944 442 943 439T941 434T938 430T935 428T931 426T928 424H344L336 414Q277 336 200 277L191 270H560Q929 270 933 268Q944 262 944 250Q944 237 933 232Q929 230 560 230H191L200 223Q279 162 336 86L344 76H928Q929 76 931 75T934 73T938 70T941 66T943 61T944 54'],

    // RIGHTWARDS TRIPLE ARROW
    0x21DB: [611,111,1000,55,923,'56 250Q56 260 68 270H808L799 277Q720 338 663 414L655 424H363Q71 424 68 426Q55 432 55 444T68 462Q71 464 349 464H627Q627 466 622 474T604 504T577 558Q557 609 557 610T591 611H626L629 600Q717 376 912 257L923 250L912 243Q715 123 629 -100L626 -111H591Q557 -111 557 -110Q576 -50 618 20Q619 22 620 25T623 29T625 32T626 35L627 36H349Q71 36 68 38Q55 44 55 56T68 74Q71 76 363 76H655L663 86Q722 164 799 223L808 230H438L68 231Q56 236 56 250'],

    // RIGHTWARDS SQUIGGLE ARROW
    0x21DD: [417,-83,1000,56,943,'76 230Q68 230 62 237T56 250Q56 257 63 264T91 291Q102 300 108 306L159 351Q168 356 177 351L218 316L303 239L353 195Q376 214 403 239L488 316L529 351Q538 356 546 351Q548 350 594 310L638 270H848L841 278Q813 309 792 344T763 396T755 416Q755 417 778 417H801Q817 367 856 323T943 250Q895 221 856 177T801 83H778Q755 83 755 84Q755 86 762 103T791 156T841 222L848 230H737Q625 230 622 232Q620 233 599 251T558 288L537 306Q537 305 451 228T362 149Q353 146 345 149Q341 150 255 227T169 306Q167 306 129 270Q123 265 115 257T102 245T93 237T84 232T76 230'],

    // LEFTWARDS DASHED ARROW
    0x21E0: [437,-64,1334,64,1251,'292 419Q292 400 261 347T211 275H306H364Q400 275 411 271T422 250T411 230T366 225H306H211Q214 222 232 197T271 136T292 82Q292 71 285 68T262 64H250H241Q221 64 216 67T205 83Q186 127 153 167T78 230Q64 238 64 250Q64 258 69 263T82 272T106 288T139 318Q162 342 177 365T198 402T209 425T223 436Q224 437 252 437H258Q292 437 292 419ZM501 237T501 250T515 270H819Q834 262 834 250T819 230H515Q501 237 501 250ZM918 237T918 250T932 270H1236Q1251 262 1251 250T1236 230H932Q918 237 918 250'],

    // RIGHTWARDS DASHED ARROW
    0x21E2: [437,-64,1334,84,1251,'84 237T84 250T98 270H402Q417 262 417 250T402 230H98Q84 237 84 250ZM501 237T501 250T515 270H819Q834 262 834 250T819 230H515Q501 237 501 250ZM1022 417Q1022 437 1055 437H1067Q1090 437 1097 434T1109 417Q1128 373 1161 333T1236 270Q1251 261 1251 250Q1251 241 1244 236T1216 217T1175 182Q1149 155 1133 128T1109 85T1097 66Q1093 64 1065 64H1053Q1031 64 1025 72T1027 100Q1036 124 1049 147T1073 185T1091 210T1101 223L1103 225H1008H950Q914 225 903 229T892 250T903 270T948 275H1008H1103L1101 277Q1100 280 1091 291T1067 325T1039 374Q1022 408 1022 417']
  }
);

MathJax.Ajax.loadComplete(MathJax.OutputJax.SVG.fontDir+"/AMS/Regular/Arrows.js");
