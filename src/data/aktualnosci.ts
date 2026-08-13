export type Aktualnosc = {
  id: number;
  kod: string;
  podtytul: string;
  tytul: string;
  data: string;
  opis: string;
  pliki?: { nazwa: string; url: string }[];
};

export const aktualnosci: Aktualnosc[] = [
  {
    id: 1,
    kod: 'IRŚ',
    podtytul: 'Opracowanie Indywidualnej Ścieżki Reintegracji',
    tytul:
      'ROZEZNANIE RYNKU nr 1/2026/ROZ/MM/IND/IŚR dotyczące realizacja usługi doradczej: Opracowanie Indywidualnej ścieżki reintegracji, z uwzględnieniem diagnozy sytuacji problemowej, zasobów, potencjału, predyspozycji, potrzeb',
    data: '2026-07-27',
    opis:
      'RÓG CONSULTING & BUSINESS TRAINING Sp. z o.o.; 35-011 Rzeszów, ul. Kazimierza Pułaskiego 9A zaprasza do złożenia oferty na realizację usługi doradczej: Opracowanie Indywidualnej ścieżki reintegracji, z uwzględnieniem diagnozy sytuacji problemowej, zasobów, potencjału, predyspozycji, potrzeb; dla uczestników projektu „Moc Możliwości - Młodzi w Działaniu!” nr FELD.07.05-IP.01-0011/25.\n\nProjekt współfinansowany przez Unię Europejską oraz budżet państwa w ramach programu Fundusze Europejskie dla Łódzkiego 2021-2027, Priorytet 7. Fundusze europejskie dla zatrudnienia i integracji w Łódzkiem, Działanie FELD.07.05 Integracja i społeczeństwo obywatelskie.',
    pliki: [
      {
        nazwa: 'Zał. 1 - Formularz oferty IŚR.pdf',
        url: 'https://github.com/user-attachments/files/30481457/Zal.1.-.Formularz.oferty.ISR.pdf',
      },
      {
        nazwa: 'Rozeznanie rynku na IŚR.pdf',
        url: 'https://raw.githubusercontent.com/damianGG/rog-mlodziwdzialaniu/main/rozeznanie_rynku_na_i%C5%9Br%20(1).pdf',
      },
    ],
  },
  {
    id: 2,
    kod: 'IPPS',
    podtytul: 'Poradnictwo specjalistyczne psychologiczne',
    tytul:
      'ROZEZNANIE RYNKU nr 2/2026/ROZ/MM/IND/IPPS dotyczące realizacja usługi poradnictwo specjalistyczne psychologiczne.',
    data: '2026-07-27',
    opis:
      'RÓG CONSULTING & BUSINESS TRAINING Sp. z o.o.; 35-011 Rzeszów, ul. Kazimierza Pułaskiego 9A zaprasza do złożenia oferty na realizację usługi poradnictwa specjalistycznego psychologicznego; dla uczestników projektu „Moc Możliwości - Młodzi w Działaniu!” nr FELD.07.05-IP.01-0011/25.\n\nProjekt współfinansowany przez Unię Europejską oraz budżet państwa w ramach programu Fundusze Europejskie dla Łódzkiego 2021-2027, Priorytet 7. Fundusze europejskie dla zatrudnienia i integracji w Łódzkiem, Działanie FELD.07.05 Integracja i społeczeństwo obywatelskie.',
    pliki: [
      {
        nazwa: 'Zał. 1 - Formularz oferty IPPS.pdf',
        url: 'https://github.com/user-attachments/files/30481463/Zal.1.-.Formularz.oferty.IPPS.pdf',
      },
      {
        nazwa: 'Rozeznanie rynku na IPPS.pdf',
        url: 'https://raw.githubusercontent.com/damianGG/rog-mlodziwdzialaniu/main/rozeznanie_rynku_na_ipps%20(1).pdf',
      },
    ],
  },
  {
    id: 3,
    kod: 'IPW',
    podtytul: 'Poradnictwo specjalistyczne prawne',
    tytul:
      'ROZEZNANIE RYNKU nr 3/2026/ROZ/MM/IND/IPW dotyczące realizacja usługi poradnictwo specjalistyczne prawne.',
    data: '2026-07-27',
    opis:
      'RÓG CONSULTING & BUSINESS TRAINING Sp. z o.o.; 35-011 Rzeszów, ul. Kazimierza Pułaskiego 9A zaprasza do złożenia oferty na realizację usługi poradnictwa specjalistycznego prawnego; dla uczestników projektu „Moc Możliwości - Młodzi w Działaniu!” nr FELD.07.05-IP.01-0011/25.\n\nProjekt współfinansowany przez Unię Europejską oraz budżet państwa w ramach programu Fundusze Europejskie dla Łódzkiego 2021-2027, Priorytet 7. Fundusze europejskie dla zatrudnienia i integracji w Łódzkiem, Działanie FELD.07.05 Integracja i społeczeństwo obywatelskie.',
    pliki: [
      {
        nazwa: 'Zał. 1 - Formularz oferty IPW.pdf',
        url: 'https://github.com/user-attachments/files/30481461/Zal.1.-.Formularz.oferty.IPW.pdf',
      },
      {
        nazwa: 'Rozeznanie rynku na IPW.pdf',
        url: 'https://raw.githubusercontent.com/damianGG/rog-mlodziwdzialaniu/main/rozeznanie_rynku_na_ipw%20(1).pdf',
      },
    ],
  },
  {
    id: 4,
    kod: 'IPP',
    podtytul: 'Pośrednictwo pracy',
    tytul:
      'ROZEZNANIE RYNKU nr 4/2026/ROZ/MM/IND/IPP dotyczące realizacja usługi pośrednictwa pracy',
    data: '2026-07-27',
    opis:
      'RÓG CONSULTING & BUSINESS TRAINING Sp. z o.o.; 35-011 Rzeszów, ul. Kazimierza Pułaskiego 9A zaprasza do złożenia oferty na realizację usługi pośrednictwa pracy; dla uczestników projektu „Moc Możliwości - Młodzi w Działaniu!” nr FELD.07.05-IP.01-0011/25.\n\nProjekt współfinansowany przez Unię Europejską oraz budżet państwa w ramach programu Fundusze Europejskie dla Łódzkiego 2021-2027, Priorytet 7. Fundusze europejskie dla zatrudnienia i integracji w Łódzkiem, Działanie FELD.07.05 Integracja i społeczeństwo obywatelskie.',
    pliki: [
      {
        nazwa: 'Zał. 1 - Formularz oferty IPP.pdf',
        url: 'https://github.com/user-attachments/files/30481459/Zal.1.-.Formularz.oferty.IPP.pdf',
      },
      {
        nazwa: 'Rozeznanie rynku na IPP.pdf',
        url: 'https://raw.githubusercontent.com/damianGG/rog-mlodziwdzialaniu/main/rozeznanie_rynku_na_ipp%20(1).pdf',
      },
    ],
  },
];
