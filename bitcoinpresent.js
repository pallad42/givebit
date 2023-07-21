function getAddress() {
  return sessionStorage.getItem('btc_address');
}

function getWif(){
  return sessionStorage.getItem('btc_wif');
}

function downloadPdf(btc_value) {
  var btc_value = btc_value.replace('.', ',');
  coinjs.compressed = false;
  var coin = coinjs.newKeys(null);
  sessionStorage.setItem('btc_address', coin.address);
  sessionStorage.setItem('btc_wif', coin.wif);
  btc_address = sessionStorage.getItem('btc_address');
  btc_wif = sessionStorage.getItem('btc_wif');

  var address_part1 = btc_address.slice(0, btc_address.length/2);
  var address_part2 = btc_address.slice(btc_address.length/2, btc_address.length);

  var wif_part1 = btc_wif.slice(0, btc_wif.length/2);
  var wif_part2 = btc_wif.slice(btc_wif.length/2, btc_wif.length);

 pdfMake.fonts = {
  IBMPlexMono: {
    normal: 'IBMPlexMono-Regular.ttf',
    bold: 'IBMPlexMono-Bold.ttf',
    italics: 'IBMPlexMono-Light.ttf',
    bolditalics: 'IBMPlexMono-Light.ttf'
  },
  Termina: {
    normal: 'termina-500.ttf',
    bold: 'termina-800.ttf',
    italics: 'termina-700.ttf',
    bolditalics: 'termina-700.ttf'
  },
};

  var docDefinition = {
    pageSize: 'A4',
    pageOrientation: 'portrait',
  content: [
    {
      columns: [
        {
          qr: btc_address,
          height: 144,
          width: 144,
          margin: [ 20, 25, 0, 0 ],
        },
        {
          svg: '<svg width="111" viewBox="0 0 115.01 80.52"><defs><style>.b {fill: none;stroke: #f37021;stroke-miterlimit: 10;stroke-width: 6px;}</style></defs><path class="b" d="M2.03,2.21s16.63,15.31,55.47,15.31S112.97,2.21,112.97,2.21" /></svg>',
          width: 111,
          margin: [ 50, 80, 0, 0 ],
        },
        {
          qr: btc_wif,
          height: 144,
          width: 144,
          margin: [ 80, 25, 0, 0 ],
        },
      ],
    },
    {
			canvas: [
				{
					type: 'rect',
					x: 0,
					y: 80,
					w: 510,
					h: 280,
					r: 50,
					lineColor: 'white',
          lineCap: 'round',
					color: '#efeff0',
				},
        {
          type: 'line',
					x1: 20, y1: 290,
					x2: 490, y2: 290,
					lineWidth: 0.01,
				},
			]
		},
    {
      text: btc_value,
      absolutePosition: {x: 120, y: 310},
      fontSize: 63,
      bold: true,
      color: '#f37021',
      font: 'IBMPlexMono',
    },
    {
      text: 'BITCOINA',
      absolutePosition: {x: 230, y: 390},
      fontSize: 21,
      bold: true,
      italics: true,
      font: 'Termina',
    },
    {
      text: 'Dane dostępu\n do portfela',
      absolutePosition: {x: 60, y: 430},
      fontSize: 8,
      bold: true,
      lineHeight: 1.2,
      font: 'IBMPlexMono'
    },
    {
      text: 'Adres:\n' + address_part1 + "\n" + address_part2,
      absolutePosition: {x: 60, y: 460},
      fontSize: 8,
      font: 'IBMPlexMono',
      lineHeight: 1.2,
    },
    {
      text: 'Klucz prywatny:\n' + wif_part1 + "\n" + wif_part2,
      absolutePosition: {x: 200, y: 460},
      fontSize: 8,
      font: 'IBMPlexMono',
      lineHeight: 1.2,
    },
    {
      text: '*możesz zczytać te dane za pomocą QR kodów na górze strony\n**zachowaj te dane, to jedyna kopia i nie ma możliwości ich odzyskania',
      absolutePosition: {x: 60, y: 505},
      fontSize: 7,
      color: '#1a171d',
      font: 'IBMPlexMono',
      italics: true,
      lineHeight: 1.2,
    },
    {
      text: 'Gratulacje!',
      margin: [ 20, 60, 0, 0 ],
      fontSize: 12,
      bold: true,
      font: 'Termina',
    },
    {
      columns: [
        {
          text: 'Właśnie otrzymałeś ' + btc_value  + ' Bitcoina!',
          margin: [ 20, 0, 0, 0 ],
          fontSize: 8.2,
          font: 'Termina',
        },
        {
          canvas: [
            {
              type: 'line',
              x1: 20,   y1: 5,
              x2: 235, y2: 5,
              lineWidth: 0.01,
            },
          ],
        },
      ],
    },
    {
      text: 'Obyście razem rośli zdrowo i za kilka lat',
      margin: [ 20, 0, 0, 0 ],
      fontSize: 8.2,
      font: 'Termina',
    },
    {
      columns: [
        {
          text: 'zaskoczyli wszystkich sukcesami!',
          margin: [ 20, 0, 0, 0 ],
          fontSize: 8.2,
          font: 'Termina',
        },
        {
          canvas: [
            {
              type: 'line',
              x1: 20,   y1: 5,
              x2: 235, y2: 5,
              lineWidth: 0.01,
            },
          ],
        },
      ],
    },
    {
      columns: [
        {
          text: 'Aby dowiedzieć się co możesz zrobić',
          margin: [ 20, 10, 0, 0 ],
          fontSize: 8.2,
          font: 'Termina',
        },
        {
          canvas: [
            {
              type: 'line',
              x1: 20,   y1: 15,
              x2: 235, y2: 15,
              lineWidth: 0.01,
            },
          ],
        },
      ],
    },
    {
      text: 'Twoim nowym Bitcoinem',
      margin: [ 20, 0, 0, 0 ],
      fontSize: 8.2,
      font: 'Termina',
    },
    {
      columns: [
        {
          text: 'wejdź na stronę bitcoinpresent.pl',
          margin: [ 20, 0, 0, 0 ],
          fontSize: 8.2,
          font: 'Termina',
        },
        {
          canvas: [
            {
              type: 'line',
              x1: 20,   y1: 5,
              x2: 235, y2: 5,
              lineWidth: 0.01,
            },
          ],
        },
      ],
    },
    {
      columns: [
        {
          svg: '<svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.36 26.43"><defs><style>.b{fill:#010101;}.c{fill:#f27024;}</style></defs><g><path class="b" d="M40.59,10.05c0,1.72-1.55,2.73-4,2.73h-7.52V2.82h6.95c2.45,0,4,.98,4,2.58,0,1.12-.78,2.11-2.28,2.19,1.57,.1,2.85,.92,2.85,2.46Zm-8.64-3.26h3.62c.97,0,1.58-.21,1.58-.98s-.61-.97-1.58-.97h-3.62v1.95Zm5.67,2.92c0-.81-.61-1.04-1.64-1.04h-4.03v2.09h4.03c1.02,0,1.64-.24,1.64-1.05Z"/><path class="b" d="M45.14,12.78h-2.82V4.9h2.82v7.88Z"/><path class="b" d="M54.27,12.07c-.71,.48-1.82,.77-2.77,.77-1.79,0-3.14-.98-3.14-2.89v-3.32h-1.39v-1.98h1.39v-1.84h2.8v1.84h3.03v1.98h-3.03v2.85c0,.71,.53,1.12,1.28,1.12,.47,0,.91-.16,1.37-.37l.47,1.84Z"/><path class="b" d="M60.69,13.11c-3.14,0-5.11-1.65-5.11-4.27,0-2.63,1.96-4.27,5.11-4.27,2.38,0,3.84,1.04,4.48,2.26l-2.4,.97c-.41-.8-1.17-1.08-2.05-1.08-1.44,0-2.45,.73-2.45,2.12,0,1.38,1.01,2.12,2.45,2.12,.87,0,1.66-.3,2.11-1.12l2.4,.98c-.65,1.25-2.15,2.29-4.54,2.29Z"/><path class="b" d="M66,8.84c0-2.65,1.99-4.25,5.17-4.25,3.16,0,5.15,1.61,5.15,4.25,0,2.63-1.99,4.27-5.15,4.27-3.17,0-5.17-1.64-5.17-4.27Zm7.64,0c0-1.39-1.04-2.11-2.48-2.11s-2.48,.71-2.48,2.11c0,1.38,1.04,2.11,2.48,2.11s2.48-.73,2.48-2.11Z"/><path class="b" d="M80.68,12.78h-2.82V4.9h2.82v7.88Z"/><path class="b" d="M83.15,12.78V4.9h2.8v1.25c.67-.98,1.84-1.54,3.24-1.54,2.29,0,3.53,1.47,3.53,3.53v4.64h-2.8v-4.45c0-1.02-.58-1.62-1.65-1.62-.92,0-1.72,.44-2.32,1.41v4.67h-2.8Z"/><path class="b" d="M40.52,19.2c0,2.32-1.81,3.49-4.52,3.49h-4.01v2.99h-2.9V15.71h6.92c2.72,0,4.52,1.2,4.52,3.49Zm-2.95,.06c0-1.01-.74-1.34-1.82-1.34h-3.77v2.66h3.77c1.08,0,1.82-.33,1.82-1.32Z"/><path class="b" d="M42.29,25.67v-7.88h2.8v1.47c.65-1.11,1.89-1.65,3.3-1.65v2.33c-1.68,0-2.89,.64-3.3,1.94v3.8h-2.8Z"/><path class="b" d="M54.8,24.01c1.25,0,2.01-.3,2.79-.9l1.42,1.49c-1.12,1-2.58,1.39-4.37,1.39-3.34,0-5.29-1.62-5.29-4.27,0-2.65,1.92-4.27,5.08-4.27,2.85,0,4.87,1.42,4.87,4.21,0,.31-.01,.5-.07,.65h-7.2c.23,1.2,1.18,1.68,2.77,1.68Zm-2.7-3.19l4.61-.03c-.3-.92-1.05-1.37-2.25-1.37s-2.05,.44-2.36,1.39Z"/><path class="b" d="M70.12,23.2c0,1.55-1.48,2.8-4.55,2.8-2.11,0-3.87-.64-4.98-1.47l1.22-1.52c.85,.63,2.18,1.08,3.84,1.08,1.11,0,1.85-.17,1.85-.64s-.67-.63-2.13-.71c-2.28-.16-4.47-.78-4.47-2.58,0-1.61,1.64-2.7,4.57-2.7,1.71,0,3.27,.46,4.31,1.08l-1.2,1.59c-.8-.48-1.86-.78-3.19-.78-.87,0-1.88,.13-1.88,.61s.84,.56,2.18,.63c2.5,.14,4.43,.87,4.43,2.6Z"/><path class="b" d="M76.77,24.01c1.25,0,2.01-.3,2.79-.9l1.42,1.49c-1.12,1-2.58,1.39-4.37,1.39-3.34,0-5.29-1.62-5.29-4.27,0-2.65,1.92-4.27,5.08-4.27,2.85,0,4.87,1.42,4.87,4.21,0,.31-.01,.5-.07,.65h-7.2c.23,1.2,1.18,1.68,2.77,1.68Zm-2.7-3.19l4.61-.03c-.3-.92-1.05-1.37-2.25-1.37-1.21,0-2.05,.44-2.36,1.39Z"/><path class="b" d="M83.15,25.67v-7.88h2.8v1.25c.67-.98,1.84-1.54,3.24-1.54,2.29,0,3.53,1.47,3.53,3.53v4.64h-2.8v-4.45c0-1.02-.58-1.62-1.65-1.62-.92,0-1.72,.44-2.32,1.41v4.67h-2.8Z"/><path class="b" d="M101.36,25.21c-.71,.48-1.82,.77-2.77,.77-1.79,0-3.14-.98-3.14-2.89v-3.32h-1.39v-1.98h1.39v-2.08h2.8v2.08h3.03v1.98h-3.03v2.85c0,.71,.53,1.12,1.28,1.12,.47,0,.91-.16,1.37-.37l.47,1.84Z"/></g><g><rect class="c" y="2.79" width="4.56" height="4.56"/><rect class="c" x="18.28" y="21.03" width="4.56" height="4.56"/><polygon class="c" points="18.28 2.79 13.71 2.79 13.71 7.35 13.71 11.91 13.71 16.47 9.15 16.47 9.15 11.91 9.15 7.35 4.59 7.35 4.59 11.91 4.59 16.47 4.59 21.03 4.59 25.59 9.15 25.59 13.71 25.59 13.71 21.03 18.28 21.03 18.28 16.47 18.28 11.91 22.84 11.91 22.84 7.35 22.84 2.79 18.28 2.79"/></g><rect class="b" x="42.33" y="0" width="2.82" height="2.82"/><rect class="b" x="77.84" y="0" width="2.82" height="2.82"/></svg>',
          margin: [20, 30, 0, 0]
        },
        {
          canvas: [
            {
              type: 'line',
              x1: 100,   y1: 40,
              x2: 235, y2: 40,
              lineWidth: 0.01,
            },
          ],
        },
      ],
    },
	],
	defaultStyle: {
		color: 'black',
	},
};
  pdfMake.createPdf(docDefinition).download("voucher.pdf");
}
