# Zadanie Frontend developer GoodRequest

Cieľom zadania je vytvoriť jednoduchú aplikáciu v Reacte, ktorá slúži ako formulár pre nadáciu GoodBoy na podporu slovenských útulkov pre psy. 

**Aplikácia by mala umožňovať potenciálnym podporovateľom:**

*  zvoliť si formu pomoci - všeobecný príspevok pre nadáciu alebo príspevok pre konkretný útulok (povinné pole)
*  vybrať si konkrétny útulok zo zoznamu zapojených útulkov (nepovinné v prípade všeobecného príspevku, v opačnom prípade povinné pole)
*  zvoliť si výšku príspevku, pričom je možné nastaviť aj vlastnú hodnotu (povinné pole)
*  vyplniť svoje osobné údaje:

    *  meno - nepovinné pole (2-20 znakov)
    *  priezvisko - povinné pole (2-30 znakov)
    *  e-mail - validný formát e-mailovej adresy
    *  telefón - slovenské alebo české číslo s predvoľbou +420 / +421 so zobrazením zvolenej krajiny vo forme vlajky štátu
    *  potvrdiť súhlas so spracovaním osobných údajov (povinné pole)
    *  odoslať zvalidovaný formulár, prípadne zrozumiteľne oznámiť používateľovi chybový stav

Pre účely zadania sme vytvorili 2 jednoduché API endpointy - GET zoznamu útulkov zapojených do projektu a POST na odoslanie obsahu formuláru. Dokumentáciu k nim nájdete na nasledovnom odkaze: https://frontend-assignment-api.goodrequest.com/apidoc/

Grafické podklady pre zadanie nájdete na nasledovnom odkaze (registrácia do toolu Figma je zdarma):
https://www.figma.com/file/FyxU4Zzp54tOrmQBNTly7G/GoodRequest-Frontend-Assignment

Nemusíte si z Figmy exportovať assety ako logá, ikonky alebo obrázky - môžete použiť ľubovoľné vlastné. Mali by ste ale dodržať približnú vizuálnu podobu aplikácie.

**Kritériá na použité technológie:**

*  Aplikácia musí byť napísaná v React.js, na setup projektu odporúčame create-react-app https://github.com/facebook/create-react-app
*  Na state management musí byť použitý Redux https://redux.js.org/ 
*  Štruktúru projektu nechávame kompletne na vás
*  Nice to have (nepovinné kritériá):

    *  Použiť TypeScript
    *  Použiť lokalizačnú knižnicu na stringy (napr. i18next)
    *  Použiť styled-components
    
*  Ak vám ostane čas alebo chuť :):

    *  Responzívne zobrazenie
    *  SEO (implementovať og:image a rôzne titles a descriptions na jednotlivých stepoch formuláru)
    
**Postup odovzdania zadania:**

* Naklonujte si tento repozitár k sebe
* Umiestnite ho do verejného github / bitbucket repozitáru a svoju prácu priebežne commitujte
* Do repozitáru udeľte prístup kontu peter.reguli@goodrequest.com (v prípade súkromného repo na bitbucket) alebo pošlite link na verejné github repo na tento e-mail
* Commit messages a spôsob commitovania budú tiež predmetom hodnotenia

**Ak by ste mali hocijaké otázky alebo ste sa niekde zasekli:**

* Kedykoľvek napíšte otázky alebo nás požiadajte o pomoc na peter.reguli@goodrequest.com - radi vám poradíme ;)

# Postup vypracovania:
*  Multi-step form s použitím redux (store, výpis JSON dát) - každý step len 1 input
*  Pridanie ostatných inputov (okrem voľby typu podpory)
*  CSS aj funkcionalita voľby podpory
*  Postupná implementácia CSS štýlov + vytvorenie pätičky 
*  Horný pagination pridaný jednoduchým spôsobom (2. možnosť je použiť linkovanie a nastavenie active)
*  Implmenetácia výstupu GET požiadavky od API (Problém s dokumentáciou, overte si typy jednotlivých vstupov)
*  Upravený výstupný JSON pre validnú požiadavku na API
*  Implementovaná POST požiadavka
*  Chybové hlášky natvrdo + CSS a vytvorenie topbaru, hlavičky webu ktorá na prvej stránke chýba - neviem účel - či ide o zobrazenie na základe zvoleného útulku alebo je to len v 2. a 3. kroku fomrmulára)
*  Validácia vstupov v druhom kroku a ásledne validácia v celom formulári
*  Dynamická schéma validácie 
*  Predvoľba tel. čísla + úprava pre výstupný JSON
*  Notification - Success message 200 from API

**Chyby a nedostatky**
*  Validácia cez react hook form a YUP nie je zrejme top riešenie, nakoľko vždy treba kliknúť mimo inputu (skúšal som aj mód onBlur, onChange aj all)
*  Pre maličkosti sú vytvorené issues (nakoľko je to public projekt, jeden záujemca vyriešil jednoduché CSS na autofill)

**Ostatné informácie**
*  styled-components som si pozrel, vyzerá to byť fajn na väčšiu aplikáciu, ale v tomto zadaní som ich nevyužil
*  Ikonky som stiahol z figmy, prerobil, dorobil, prípadne stiahol z free zdroja. Socials som dal tiež svg, pre 2 ikonky nepoužijem celý fontawesome
*  Na začiatok som používal čisto JS. S typescriptom som robil v angular projektoch, avak som si chcel vyskúšať v Reacte javascript. Mám vpláne toto prerobiť to TS.
*  Optimalizáciu som neriešil. Zameral som sa najmä na redux a funkcionalitu. CSS ešte budem  zjednodušovať

Ďakujem za skvelé zadanie, veľa som sa naučil (nakoľko som mal bisics of basics z ReactJS). Budem rád, ak si zadanie pozorne prezriete a poviete svoj názor aj napriek tomu, že pozícia je už zreje obsadená / vyhliadnutá pre iného. Pri osobnom pohovore vám poviem moje aktuálne stanovisko k pracovnej ponuke. Avšak ma vážne zaujíma názor programátora na zadanie.
