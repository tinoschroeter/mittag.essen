const React = require('react')
const { Box, Newline, Text, render } = require('ink')
const Gradient = require('ink-gradient')
const BigText = require('ink-big-text')
const fetch = require('sync-fetch')
const QRCode = require('qrcode')

const url = "https://mittag.tino.sh/data.json"
// https://github.com/vadimdemedes/ink 
// React for CLIs. Build and test your CLI output using components.

var segs = [
  { data: 'ABCDEFG', mode: 'alphanumeric' },
  { data: '0123456', mode: 'numeric' }
]

const data = fetch(url, {
  headers: {
    Accept: 'application/json'
  }
}).json()

const length = Object.keys(data).length;
const num = Math.floor(Math.random() * length);
const key = Object.keys(data)[num];

const qr = QRCode.toString(url.replace(/data.json/, "sen/") + key, segs, (err, url) => { 
    if(err) console.error(err)
})

const { Rezept, Zutaten, Arbeitszeit, Backzeit, Gesamtzeit, Zubereitung } = data[key]

const preparationBoxLenght = Zubereitung.split('\n').map(a => a.length).sort((a, b) => b - a)[0] + 5;

const App = () => (
  <Box flexDirection="column" width={200}>
      <Box>
      <Gradient name="retro">
		<BigText font="tiny" text={Rezept}/>
        <Text>Zutaten fuer eine Person</Text>
      </Gradient>
    </Box>

    <Box width={100}>
	<Box width="30%" height="10%">
		
     <Box borderStyle="classic" width={35} height={20}>
     <Gradient name="retro">
         <Text>{Zutaten.map((a, i, arr) => i < arr.length -1 ? '* ' + a + '\n' : '* ' + a)}</Text>
     </Gradient>
    </Box>
	</Box>	

  <Box>  
      <Box flexDirection="column" alignItems="center">
        <Gradient name="retro">
          <Text>{qr}</Text>  
          </Gradient>
          <Box><Text inverse color="yellow">scan me</Text></Box>
        </Box>
      </Box>
   </Box>

     <Box width={150}>
	     <Box flexBasis="22%">
      <Box borderStyle="classic">
        <Gradient name="retro">
          <Text>Arbeitszeit: {`${Arbeitszeit} `}</Text>
          </Gradient>
          </Box>
	    </Box>

      <Box flexBasis="20%">
      <Box borderStyle="classic">
        <Gradient name="retro">
          <Text>Kochzeit: {(Backzeit) ? `${Backzeit} ` : `${Arbeitszeit} `}</Text>
          </Gradient>
          </Box>
	    </Box>

      <Box flexBasis="20%">
      <Box borderStyle="classic">
      <Gradient name="retro">
        <Text>Gesamtzeit: {Gesamtzeit}</Text>
        </Gradient>
        </Box>
      </Box>
      </Box>

      <Gradient name="retro">
        <Newline />
        <Text>Zubereitung:</Text>
      </Gradient>
      <Box borderStyle="classic" width={preparationBoxLenght}>
            <Gradient name="retro">
              <Text>{Zubereitung}</Text>
            </Gradient>
        </Box>
        <Gradient name="retro">
          <Text>{'> ' + Rezept}</Text>
          <Newline />
        </Gradient>
        </Box>
)

module.exports = App;
