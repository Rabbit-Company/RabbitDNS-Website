var servers = [{"iata":"TIA","lat":41.4146995544,"lon":19.7206001282,"city":"Tirana"},{"iata":"ALG","lat":36.6910018921,"lon":3.2154099941,"city":"Algiers"},{"iata":"LAD","lat":-8.8583698273,"lon":13.2312002182,"city":"Luanda"},{"iata":"EZE","lat":-34.8222,"lon":-58.5358,"city":"Buenos Aires"},{"iata":"COR","lat":-31.31,"lon":-64.208333,"city":"Córdoba"},{"iata":"NQN","lat":-38.9490013123,"lon":-68.1557006836,"city":"Neuquen"},{"iata":"EVN","lat":40.1473007202,"lon":44.3959007263,"city":"Yerevan"},{"iata":"ADL","lat":-34.9431729,"lon":138.5335637,"city":"Adelaide"},{"iata":"BNE","lat":-27.3841991425,"lon":153.117004394,"city":"Brisbane"},{"iata":"CBR","lat":-35.3069000244,"lon":149.1950073242,"city":"Canberra"},{"iata":"HBA","lat":-42.883209,"lon":147.331665,"city":"Hobart"},{"iata":"MEL","lat":-37.6733016968,"lon":144.843002319,"city":"Melbourne"},{"iata":"PER","lat":-31.9402999878,"lon":115.967002869,"city":"Perth"},{"iata":"SYD","lat":-33.9460983276,"lon":151.177001953,"city":"Sydney"},{"iata":"VIE","lat":48.1102981567,"lon":16.5697002411,"city":"Vienna"},{"iata":"LLK","lat":38.7463989258,"lon":48.8180007935,"city":"Astara"},{"iata":"GYD","lat":40.4674987793,"lon":50.0466995239,"city":"Baku"},{"iata":"BAH","lat":26.2707996368,"lon":50.6335983276,"city":"Manama"},{"iata":"CGP","lat":22.2495995,"lon":91.8133011,"city":"Chittagong"},{"iata":"DAC","lat":23.843347,"lon":90.397783,"city":"Dhaka"},{"iata":"JSR","lat":23.1837997437,"lon":89.1607971191,"city":"Jashore"},{"iata":"MSQ","lat":53.9006,"lon":27.599,"city":"Minsk"},{"iata":"BRU","lat":50.9014015198,"lon":4.4844398499,"city":"Brussels"},{"iata":"PBH","lat":27.4712,"lon":89.6339,"city":"Thimphu"},{"iata":"GBE","lat":-24.6282,"lon":25.9231,"city":"Gaborone"},{"iata":"QWJ","lat":-22.738,"lon":-47.334,"city":"Americana"},{"iata":"BEL","lat":-1.4563,"lon":-48.5013,"city":"Belém"},{"iata":"CNF","lat":-19.624444,"lon":-43.971944,"city":"Belo Horizonte"},{"iata":"BNU","lat":-26.89245,"lon":-49.07696,"city":"Blumenau"},{"iata":"BSB","lat":-15.79824,"lon":-47.90859,"city":"Brasilia"},{"iata":"CFC","lat":-26.7762,"lon":-51.0125,"city":"Cacador"},{"iata":"VCP","lat":-22.90662,"lon":-47.08576,"city":"Campinas"},{"iata":"CGB","lat":-15.59611,"lon":-56.09667,"city":"Cuiaba"},{"iata":"CWB","lat":-25.5284996033,"lon":-49.1758003235,"city":"Curitiba"},{"iata":"FLN","lat":-27.6702785492,"lon":-48.5525016785,"city":"Florianopolis"},{"iata":"FOR","lat":-3.7762799263,"lon":-38.5326004028,"city":"Fortaleza"},{"iata":"GYN","lat":-16.69727,"lon":-49.26851,"city":"Goiania"},{"iata":"ITJ","lat":-27.6116676331,"lon":-48.6727790833,"city":"Itajai"},{"iata":"JOI","lat":-26.304408,"lon":-48.846383,"city":"Joinville"},{"iata":"JDO","lat":-7.2242,"lon":-39.313,"city":"Juazeiro do Norte"},{"iata":"MAO","lat":-3.11286,"lon":-60.01949,"city":"Manaus"},{"iata":"POA","lat":-29.9944000244,"lon":-51.1713981628,"city":"Porto Alegre"},{"iata":"REC","lat":-8.1264896393,"lon":-34.9235992432,"city":"Recife"},{"iata":"RAO","lat":-21.1363887787,"lon":-47.7766685486,"city":"Ribeirao Preto"},{"iata":"GIG","lat":-22.8099994659,"lon":-43.2505569458,"city":"Rio de Janeiro"},{"iata":"SSA","lat":-12.9086112976,"lon":-38.3224983215,"city":"Salvador"},{"iata":"SJP","lat":-20.807157,"lon":-49.378994,"city":"São José do Rio Preto"},{"iata":"GRU","lat":-23.4355564117,"lon":-46.4730567932,"city":"São Paulo"},{"iata":"SOD","lat":-23.54389,"lon":-46.63445,"city":"Sorocaba"},{"iata":"NVT","lat":-26.8251,"lon":-49.2695,"city":"Timbo"},{"iata":"UDI","lat":-18.8836116791,"lon":-48.225276947,"city":"Uberlandia"},{"iata":"BWN","lat":4.903052,"lon":114.939819,"city":"Bandar Seri Begawan"},{"iata":"SOF","lat":42.6966934204,"lon":23.4114360809,"city":"Sofia"},{"iata":"OUA","lat":12.3531999588,"lon":-1.5124200583,"city":"Ouagadougou"},{"iata":"PNH","lat":11.5466003418,"lon":104.84400177,"city":"Phnom Penh"},{"iata":"YYC","lat":51.113899231,"lon":-114.019996643,"city":"Calgary"},{"iata":"YVR","lat":49.193901062,"lon":-123.183998108,"city":"Vancouver"},{"iata":"YWG","lat":49.9099998474,"lon":-97.2398986816,"city":"Winnipeg"},{"iata":"YOW","lat":45.3224983215,"lon":-75.6691970825,"city":"Ottawa"},{"iata":"YYZ","lat":43.6772003174,"lon":-79.6305999756,"city":"Toronto"},{"iata":"YUL","lat":45.4706001282,"lon":-73.7407989502,"city":"Montréal"},{"iata":"YXE","lat":52.1707992554,"lon":-106.699996948,"city":"Saskatoon"},{"iata":"ARI","lat":-18.348611,"lon":-70.338889,"city":"Arica"},{"iata":"CCP","lat":-36.8201,"lon":-73.0444,"city":"Concepción"},{"iata":"SCL","lat":-33.3930015564,"lon":-70.7857971191,"city":"Santiago"},{"iata":"BOG","lat":4.70159,"lon":-74.1469,"city":"Bogotá"},{"iata":"MDE","lat":6.16454,"lon":-75.4231,"city":"Medellín"},{"iata":"SJO","lat":9.9938602448,"lon":-84.2088012695,"city":"San José"},{"iata":"ZAG","lat":45.7429008484,"lon":16.0687999725,"city":"Zagreb"},{"iata":"CUR","lat":12.1888999939,"lon":-68.9598007202,"city":"Willemstad"},{"iata":"LCA","lat":34.8750991821,"lon":33.6249008179,"city":"Nicosia"},{"iata":"PRG","lat":50.1007995605,"lon":14.2600002289,"city":"Prague"},{"iata":"CPH","lat":55.6179008484,"lon":12.6560001373,"city":"Copenhagen"},{"iata":"JIB","lat":11.5473003387,"lon":43.1595001221,"city":"Djibouti"},{"iata":"SDQ","lat":18.4297008514,"lon":-69.6688995361,"city":"Santo Domingo"},{"iata":"GYE","lat":-2.1894,"lon":-79.8891,"city":"Guayaquil"},{"iata":"UIO","lat":-0.1291666667,"lon":-78.3575,"city":"Quito"},{"iata":"TLL","lat":59.4132995605,"lon":24.8327999115,"city":"Tallinn"},{"iata":"HEL","lat":60.317199707,"lon":24.963300705,"city":"Helsinki"},{"iata":"MRS","lat":43.439271922,"lon":5.2214241028,"city":"Marseille"},{"iata":"CDG","lat":49.0127983093,"lon":2.5499999523,"city":"Paris"},{"iata":"PPT","lat":-17.5536994934,"lon":-149.606994629,"city":"Tahiti"},{"iata":"TBS","lat":41.6692008972,"lon":44.95470047,"city":"Tbilisi"},{"iata":"TXL","lat":52.5597000122,"lon":13.2876996994,"city":"Berlin"},{"iata":"DUS","lat":51.2895011902,"lon":6.7667798996,"city":"Düsseldorf"},{"iata":"FRA","lat":50.0264015198,"lon":8.543129921,"city":"Frankfurt"},{"iata":"HAM","lat":53.6304016113,"lon":9.9882297516,"city":"Hamburg"},{"iata":"MUC","lat":48.3538017273,"lon":11.7861003876,"city":"Munich"},{"iata":"STR","lat":48.783333,"lon":9.183333,"city":"Stuttgart"},{"iata":"ACC","lat":5.614818,"lon":-0.205874,"city":"Accra"},{"iata":"ATH","lat":37.9364013672,"lon":23.9444999695,"city":"Athens"},{"iata":"SKG","lat":40.5196990967,"lon":22.9708995819,"city":"Thessaloniki"},{"iata":"GND","lat":12.007116,"lon":-61.7882288,"city":"St. George's"},{"iata":"GUM","lat":13.4834003448,"lon":144.796005249,"city":"Hagatna"},{"iata":"GUA","lat":14.5832996368,"lon":-90.5274963379,"city":"Guatemala City"},{"iata":"GEO","lat":6.825648,"lon":-58.163756,"city":"Georgetown"},{"iata":"PAP","lat":18.5799999237,"lon":-72.2925033569,"city":"Port-au-Prince"},{"iata":"TGU","lat":14.0608,"lon":-87.2172,"city":"Tegucigalpa"},{"iata":"HKG","lat":22.3089008331,"lon":113.915000916,"city":"Hong Kong"},{"iata":"BUD","lat":47.4369010925,"lon":19.2555999756,"city":"Budapest"},{"iata":"KEF","lat":63.9850006104,"lon":-22.6056003571,"city":"Reykjavík"},{"iata":"AMD","lat":23.0225,"lon":72.5714,"city":"Ahmedabad"},{"iata":"BLR","lat":13.7835719,"lon":76.6165937,"city":"Bangalore"},{"iata":"BBI","lat":20.2961,"lon":85.8245,"city":"Bhubaneswar"},{"iata":"IXC","lat":30.673500061,"lon":76.7884979248,"city":"Chandigarh"},{"iata":"MAA","lat":12.9900054932,"lon":80.1692962646,"city":"Chennai"},{"iata":"HYD","lat":17.2313175201,"lon":78.4298553467,"city":"Hyderabad"},{"iata":"KNU","lat":26.4499,"lon":80.3319,"city":"Kanpur"},{"iata":"COK","lat":9.9312,"lon":76.2673,"city":"Kochi"},{"iata":"CCU","lat":22.6476933,"lon":88.4349249,"city":"Kolkata"},{"iata":"BOM","lat":19.0886993408,"lon":72.8678970337,"city":"Mumbai"},{"iata":"NAG","lat":21.1610714,"lon":79.0024702,"city":"Nagpur"},{"iata":"DEL","lat":28.5664997101,"lon":77.1031036377,"city":"New Delhi"},{"iata":"PAT","lat":25.591299057,"lon":85.0879974365,"city":"Patna"},{"iata":"CGK","lat":-6.1275229,"lon":106.6515118,"city":"Jakarta"},{"iata":"JOG","lat":-7.7881798744,"lon":110.4319992065,"city":"Yogyakarta"},{"iata":"BGW","lat":33.2625007629,"lon":44.2346000671,"city":"Baghdad"},{"iata":"BSR","lat":30.5491008759,"lon":47.6621017456,"city":"Basra"},{"iata":"EBL","lat":36.1901,"lon":43.993,"city":"Erbil"},{"iata":"NJF","lat":31.989722,"lon":44.404167,"city":"Najaf"},{"iata":"XNH","lat":30.9358005524,"lon":46.0900993347,"city":"Nasiriyah"},{"iata":"ISU","lat":35.5668,"lon":45.4161,"city":"Sulaymaniyah"},{"iata":"ORK","lat":51.8413009644,"lon":-8.491109848,"city":"Cork"},{"iata":"DUB","lat":53.4212989807,"lon":-6.270070076,"city":"Dublin"},{"iata":"HFA","lat":32.78492,"lon":34.96069,"city":"Haifa"},{"iata":"TLV","lat":32.0113983154,"lon":34.8866996765,"city":"Tel Aviv"},{"iata":"MXP","lat":45.6305999756,"lon":8.7281103134,"city":"Milan"},{"iata":"PMO","lat":38.16114,"lon":13.31546,"city":"Palermo"},{"iata":"FCO","lat":41.8045005798,"lon":12.2508001328,"city":"Rome"},{"iata":"KIN","lat":17.9951,"lon":-76.7846,"city":"Kingston"},{"iata":"FUK","lat":33.5902,"lon":130.4017,"city":"Fukuoka"},{"iata":"OKA","lat":26.1958,"lon":127.646,"city":"Naha"},{"iata":"KIX","lat":34.4272994995,"lon":135.244003296,"city":"Osaka"},{"iata":"NRT","lat":35.7647018433,"lon":140.386001587,"city":"Tokyo"},{"iata":"AMM","lat":31.7226009369,"lon":35.9931983948,"city":"Amman"},{"iata":"ALA","lat":43.3521003723,"lon":77.0404968262,"city":"Almaty"},{"iata":"MBA","lat":-4.0348300934,"lon":39.5942001343,"city":"Mombasa"},{"iata":"NBO","lat":-1.319239974,"lon":36.9277992249,"city":"Nairobi"},{"iata":"ICN","lat":37.4691009521,"lon":126.450996399,"city":"Seoul"},{"iata":"KWI","lat":29.226600647,"lon":47.9688987732,"city":"Kuwait City"},{"iata":"VTE","lat":17.9757,"lon":102.5683,"city":"Vientiane"},{"iata":"RIX","lat":56.9235992432,"lon":23.9710998535,"city":"Riga"},{"iata":"BEY","lat":33.8208999634,"lon":35.4883995056,"city":"Beirut"},{"iata":"VNO","lat":54.6341018677,"lon":25.2858009338,"city":"Vilnius"},{"iata":"LUX","lat":49.6265983582,"lon":6.211520195,"city":"Luxembourg City"},{"iata":"MFM","lat":22.1495990753,"lon":113.592002869,"city":"Macau"},{"iata":"TNR","lat":-18.91368,"lon":47.53613,"city":"Antananarivo"},{"iata":"JHB","lat":1.635848,"lon":103.665943,"city":"Johor Bahru"},{"iata":"KUL","lat":2.745579958,"lon":101.709999084,"city":"Kuala Lumpur"},{"iata":"MLE","lat":4.1748,"lon":73.50888,"city":"Male"},{"iata":"MRU","lat":-20.4302005768,"lon":57.6836013794,"city":"Port Louis"},{"iata":"MEX","lat":19.4363002777,"lon":-99.0720977783,"city":"Mexico City"},{"iata":"QRO","lat":20.6173000336,"lon":-100.185997009,"city":"Queretaro"},{"iata":"KIV","lat":46.9277000427,"lon":28.9309997559,"city":"Chișinău"},{"iata":"ULN","lat":47.8431015015,"lon":106.766998291,"city":"Ulaanbaatar"},{"iata":"CMN","lat":33.3675003052,"lon":-7.5899701118,"city":"Casablanca"},{"iata":"MPM","lat":-25.9207992554,"lon":32.5726013184,"city":"Maputo"},{"iata":"MDL","lat":21.7051697,"lon":95.9695206,"city":"Mandalay"},{"iata":"RGN","lat":16.9073009491,"lon":96.1332015991,"city":"Yangon"},{"iata":"KTM","lat":27.6965999603,"lon":85.3591003418,"city":"Kathmandu"},{"iata":"AMS","lat":52.3086013794,"lon":4.7638897896,"city":"Amsterdam"},{"iata":"NOU","lat":-22.0146007538,"lon":166.212997436,"city":"Noumea"},{"iata":"AKL","lat":-37.0080986023,"lon":174.792007446,"city":"Auckland"},{"iata":"CHC","lat":-43.4893989563,"lon":172.5319976807,"city":"Christchurch"},{"iata":"LOS","lat":6.5773701668,"lon":3.321160078,"city":"Lagos"},{"iata":"OSL","lat":60.193901062,"lon":11.100399971,"city":"Oslo"},{"iata":"MCT","lat":23.5932998657,"lon":58.2844009399,"city":"Muscat"},{"iata":"ISB","lat":33.6166992188,"lon":73.0991973877,"city":"Islamabad"},{"iata":"KHI","lat":24.9064998627,"lon":67.1607971191,"city":"Karachi"},{"iata":"LHE","lat":31.5216007233,"lon":74.4036026001,"city":"Lahore"},{"iata":"ZDM","lat":32.2719,"lon":35.0194,"city":"Ramallah"},{"iata":"PTY","lat":9.0713596344,"lon":-79.3834991455,"city":"Panama City"},{"iata":"ASU","lat":-25.2399997711,"lon":-57.5200004578,"city":"Asunción"},{"iata":"LIM","lat":-12.021900177,"lon":-77.1143035889,"city":"Lima"},{"iata":"CGY","lat":8.4156198502,"lon":124.611000061,"city":"Cagayan de Oro"},{"iata":"CEB","lat":10.3074998856,"lon":123.978996277,"city":"Cebu"},{"iata":"MNL","lat":14.508600235,"lon":121.019996643,"city":"Manila"},{"iata":"WAW","lat":52.1656990051,"lon":20.9671001434,"city":"Warsaw"},{"iata":"LIS","lat":38.7812995911,"lon":-9.1359195709,"city":"Lisbon"},{"iata":"DOH","lat":25.2605946,"lon":51.6137665,"city":"Doha"},{"iata":"RUN","lat":-20.8871002197,"lon":55.5102996826,"city":"Saint-Denis"},{"iata":"OTP","lat":44.5722007751,"lon":26.1021995544,"city":"Bucharest"},{"iata":"KHV","lat":48.5279998779,"lon":135.18800354,"city":"Khabarovsk"},{"iata":"KJA","lat":56.0153,"lon":92.8932,"city":"Krasnoyarsk"},{"iata":"DME","lat":55.4087982178,"lon":37.9062995911,"city":"Moscow"},{"iata":"LED","lat":59.8003005981,"lon":30.2625007629,"city":"Saint Petersburg"},{"iata":"KLD","lat":56.8587,"lon":35.9176,"city":"Tver"},{"iata":"SVX","lat":56.8431,"lon":60.6454,"city":"Yekaterinburg"},{"iata":"KGL","lat":-1.9686299563,"lon":30.1394996643,"city":"Kigali"},{"iata":"DMM","lat":26.471200943,"lon":49.7979011536,"city":"Dammam"},{"iata":"JED","lat":21.679599762,"lon":39.15650177,"city":"Jeddah"},{"iata":"RUH","lat":24.9575996399,"lon":46.6987991333,"city":"Riyadh"},{"iata":"DKR","lat":14.7412099,"lon":-17.4889771,"city":"Dakar"},{"iata":"BEG","lat":44.8184013367,"lon":20.3090991974,"city":"Belgrade"},{"iata":"SIN","lat":1.3501900434,"lon":103.994003296,"city":"Singapore"},{"iata":"BTS","lat":48.1486,"lon":17.1077,"city":"Bratislava"},{"iata":"CPT","lat":-33.9648017883,"lon":18.6016998291,"city":"Cape Town"},{"iata":"DUR","lat":-29.6144444444,"lon":31.1197222222,"city":"Durban"},{"iata":"JNB","lat":-26.133333,"lon":28.25,"city":"Johannesburg"},{"iata":"BCN","lat":41.2971000671,"lon":2.0784599781,"city":"Barcelona"},{"iata":"MAD","lat":40.4936,"lon":-3.56676,"city":"Madrid"},{"iata":"CMB","lat":7.1807599068,"lon":79.8841018677,"city":"Colombo"},{"iata":"PBM","lat":5.452831,"lon":-55.187783,"city":"Paramaribo"},{"iata":"GOT","lat":57.6627998352,"lon":12.279800415,"city":"Gothenburg"},{"iata":"ARN","lat":59.6519012451,"lon":17.9186000824,"city":"Stockholm"},{"iata":"GVA","lat":46.2380981445,"lon":6.1089501381,"city":"Geneva"},{"iata":"ZRH","lat":47.4646987915,"lon":8.5491695404,"city":"Zurich"},{"iata":"KHH","lat":22.5771007538,"lon":120.3499984741,"city":"Kaohsiung City"},{"iata":"TPE","lat":25.0776996613,"lon":121.233001709,"city":"Taipei"},{"iata":"DAR","lat":-6.8781099319,"lon":39.2025985718,"city":"Dar es Salaam"},{"iata":"BKK","lat":13.6810998917,"lon":100.747001648,"city":"Bangkok"},{"iata":"CNX","lat":18.7667999268,"lon":98.962600708,"city":"Chiang Mai"},{"iata":"URT","lat":9.1325998306,"lon":99.135597229,"city":"Surat Thani"},{"iata":"TUN","lat":36.8510017395,"lon":10.2271995544,"city":"Tunis"},{"iata":"IST","lat":40.9768981934,"lon":28.8145999908,"city":"Istanbul"},{"iata":"ADB","lat":38.32377,"lon":27.14317,"city":"Izmir"},{"iata":"KBP","lat":50.3450012207,"lon":30.8946990967,"city":"Kyiv"},{"iata":"DXB","lat":25.2527999878,"lon":55.3643989563,"city":"Dubai"},{"iata":"EDI","lat":55.9500007629,"lon":-3.3724999428,"city":"Edinburgh"},{"iata":"LHR","lat":51.4706001282,"lon":-0.4619410038,"city":"London"},{"iata":"MAN","lat":53.3536987305,"lon":-2.2749500275,"city":"Manchester"},{"iata":"MGM","lat":32.30059814,"lon":-86.39399719,"city":"Montgomery"},{"iata":"PHX","lat":33.434299469,"lon":-112.012001038,"city":"Phoenix"},{"iata":"LAX","lat":33.94250107,"lon":-118.4079971,"city":"Los Angeles"},{"iata":"SMF","lat":38.695400238,"lon":-121.591003418,"city":"Sacramento"},{"iata":"SAN","lat":32.7336006165,"lon":-117.190002441,"city":"San Diego"},{"iata":"SFO","lat":37.6189994812,"lon":-122.375,"city":"San Francisco"},{"iata":"SJC","lat":37.3625984192,"lon":-121.929000855,"city":"San Jose"},{"iata":"DEN","lat":39.8616981506,"lon":-104.672996521,"city":"Denver"},{"iata":"JAX","lat":30.4941005707,"lon":-81.6878967285,"city":"Jacksonville"},{"iata":"MIA","lat":25.7931995392,"lon":-80.2906036377,"city":"Miami"},{"iata":"TLH","lat":30.3964996338,"lon":-84.3503036499,"city":"Tallahassee"},{"iata":"TPA","lat":27.9755001068,"lon":-82.533203125,"city":"Tampa"},{"iata":"ATL","lat":33.6366996765,"lon":-84.4281005859,"city":"Atlanta"},{"iata":"HNL","lat":21.3187007904,"lon":-157.9219970703,"city":"Honolulu"},{"iata":"ORD","lat":41.97859955,"lon":-87.90480042,"city":"Chicago"},{"iata":"IND","lat":39.717300415,"lon":-86.2944030762,"city":"Indianapolis"},{"iata":"BOS","lat":42.36429977,"lon":-71.00520325,"city":"Boston"},{"iata":"DTW","lat":42.2123985291,"lon":-83.3534011841,"city":"Detroit"},{"iata":"MSP","lat":44.8819999695,"lon":-93.2218017578,"city":"Minneapolis"},{"iata":"MCI","lat":39.2975997925,"lon":-94.7138977051,"city":"Kansas City"},{"iata":"STL","lat":38.7486991882,"lon":-90.3700027466,"city":"St. Louis"},{"iata":"OMA","lat":41.3031997681,"lon":-95.8940963745,"city":"Omaha"},{"iata":"LAS","lat":36.08010101,"lon":-115.1520004,"city":"Las Vegas"},{"iata":"EWR","lat":40.6925010681,"lon":-74.1687011719,"city":"Newark"},{"iata":"BUF","lat":42.94049835,"lon":-78.73220062,"city":"Buffalo"},{"iata":"CLT","lat":35.2140007019,"lon":-80.9430999756,"city":"Charlotte"},{"iata":"CMH","lat":39.9980010986,"lon":-82.8918991089,"city":"Columbus"},{"iata":"PDX","lat":45.58869934,"lon":-122.5979996,"city":"Portland"},{"iata":"PHL","lat":39.8718986511,"lon":-75.2410964966,"city":"Philadelphia"},{"iata":"PIT","lat":40.49150085,"lon":-80.23290253,"city":"Pittsburgh"},{"iata":"FSD","lat":43.540819819502,"lon":-96.65511577730963,"city":"Sioux Falls"},{"iata":"MEM","lat":35.0424003601,"lon":-89.9766998291,"city":"Memphis"},{"iata":"BNA","lat":36.1245002747,"lon":-86.6781997681,"city":"Nashville"},{"iata":"DFW","lat":32.8968009949,"lon":-97.0380020142,"city":"Dallas"},{"iata":"IAH","lat":29.9843997955,"lon":-95.3414001465,"city":"Houston"},{"iata":"MFE","lat":26.17580032,"lon":-98.23860168,"city":"McAllen"},{"iata":"SLC","lat":40.7883987427,"lon":-111.977996826,"city":"Salt Lake City"},{"iata":"IAD","lat":38.94449997,"lon":-77.45580292,"city":"Ashburn"},{"iata":"ORF","lat":36.8945999146,"lon":-76.2012023926,"city":"Norfolk"},{"iata":"RIC","lat":37.5051994324,"lon":-77.3197021484,"city":"Richmond"},{"iata":"SEA","lat":47.4490013123,"lon":-122.308998108,"city":"Seattle"},{"iata":"TAS","lat":41.257900238,"lon":69.2811965942,"city":"Tashkent"},{"iata":"HAN","lat":21.221200943,"lon":105.806999206,"city":"Hanoi"},{"iata":"SGN","lat":10.8187999725,"lon":106.652000427,"city":"Ho Chi Minh City"},{"iata":"HRE","lat":-17.9318008423,"lon":31.0928001404,"city":"Harare"}];

let chart;
let root;

am5.ready(function() {
	root = am5.Root.new("worldmap");

	root.setThemes([
		am5themes_Animated.new(root)
	]);

	chart = root.container.children.push(
		am5map.MapChart.new(root, {
			panX: "rotateX",
			panY: "translateY",
			//maxZoomLevel: 1,
			projection: am5map.geoEqualEarth(),
		})
	);

	var cont = chart.children.push(
		am5.Container.new(root, {
			layout: root.horizontalLayout,
			centerY: am5.p50,
			x: 20,
			y: 40
		})
	);

	var backgroundSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {}));
	backgroundSeries.mapPolygons.template.setAll({
  	fill: '#6794dc',
  	fillOpacity: 0,
  	strokeOpacity: 0
	});

	backgroundSeries.data.push({
		geometry: am5map.getGeoRectangle(90, 180, -90, -180)
	});

	var polygonSeries = chart.series.push(
		am5map.MapPolygonSeries.new(root, {
			geoJSON: am5geodata_worldLow
		})
	);

	polygonSeries.mapPolygons.template.setAll({
		fill: '#a1b3c4'
	});

	var lineSeries = chart.series.push(am5map.MapLineSeries.new(root, {}));
	lineSeries.mapLines.template.setAll({
  	stroke: '#dfe5eb',
  	strokeOpacity: 0.3
	});

	fetch('https://dns.rabbitdns.org/cdn-cgi/trace').then((response) => response.text()).then((data) => {
		var colo = data.match(/^colo=(.+)/m)[1];
		addServers(colo);
	});

	chart.appear(1000, 100);
});

function addServers(colo){
	var pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));
	var pointSeriesColo = chart.series.push(am5map.MapPointSeries.new(root, {}));

	pointSeries.bullets.push(() => {
		var circle = am5.Circle.new(root, {
			radius: 4,
			tooltipY: 0,
			fill: '#4f46e5',
			strokeOpacity: 0,
			tooltipText: "{title}"
		});

		return am5.Bullet.new(root, {
			sprite: circle
		});
	});

	pointSeriesColo.bullets.push(() => {
		var container = am5.Container.new(root, {});

		var circle = container.children.push(
			am5.Circle.new(root, {
				radius: 4,
				tooltipY: 0,
				fill: '#f98f00',
				strokeOpacity: 0,
				tooltipText: "{title}"
			})
		);

		var circle2 = container.children.push(
			am5.Circle.new(root, {
				radius: 4,
				tooltipY: 0,
				fill: '#f98f00',
				strokeOpacity: 0,
				tooltipText: "{title}"
			})
		);

		circle.animate({
			key: "scale",
			from: 1,
			to: 5,
			duration: 600,
			easing: am5.ease.out(am5.ease.cubic),
			loops: Infinity
		});

		circle.animate({
			key: "opacity",
			from: 1,
			to: 0,
			duration: 600,
			easing: am5.ease.out(am5.ease.cubic),
			loops: Infinity
		});

		return am5.Bullet.new(root, {
			sprite: container
		});
	});

	for(var i = 0; i < servers.length; i++) {
		if(servers[i].iata === colo){
			pointSeriesColo.data.push({
				geometry: { type: "Point", coordinates: [servers[i].lon, servers[i].lat] },
				title: servers[i].city + " (" + servers[i].iata + ")"
			});
			continue;
		}
		addServer(servers[i]);
	}

	function addServer(server) {
		pointSeries.data.push({
			geometry: { type: "Point", coordinates: [server.lon, server.lat] },
			title: server.city + " (" + server.iata + ")"
		});
	}

}