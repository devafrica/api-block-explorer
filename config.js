var api = 'https://blocks.cryptopay.org.za';
var apiList = ["https://restapi.cryptopay.org.za", "https://blocks.cryptopay.org.za"];
var donationAddress = "cpZxRsnRTUe3riq6mW81RyRWx2BSNcU4Z51jnXUNivH27mRBCsP55vtcmfxpReLHtdF9FVBqvzQwAFgaWefKZWpa2ZqfoQMtu";
var blockTargetInterval = 90;
var coinUnits = 1000000;
var symbol = 'cpa';
var refreshDelay = 30000;
// pools stats by CPA Coin
//NB do not include / at the end of url
var poolsStat = 
[
	["poolparty.cryptopay.org.za", "https://partystats.cryptopay.org.za/stats"],
//	["cpa.thepiratemine.nl", "https://cpa.piratepools.nl/:2887/stats"],
//	["miningcache.com", "https://miningcache.com:8119/stats"],
//	["cpa.cryptocoins-digging.space", "https://cpa.cryptocoins-digging.space:8119/stats"],
//	["cpa.thecoinsmining.com", "https://cpa.thecoinsmining.com:8119/stats"],
//        ["mine.cryptopay.org.za", "https://mine.cryptopay.org.za:8119/stats"],
//	["cpa.cnhub.de", "http://cpa.cnhub.de:8127/stats"],
//	["the-miners.de/CPA", "http://207.180.246.163:8113/stats"],
//	["cpacoin.my-mining-pool.de", "https://apicpacoin.my-mining-pool.de/stats"],
//	["cpa.multiminer.us", "https://cpa.multiminer.us:8119/stats"],
//	["cpa.cryptomine.cx", "https://cpa.cryptomine.cx:8001/stats"],
//	["cpa.optimusblue.com","https://cpa.optimusblue.com:8129/stats"],
//	["cpa.youpool.io","http://cpa.youpool.io:8135/stats"],
//	["cpa.romining.farm", "https://cpa.romining.farm/api/pool/stats"]
];

var nodesStat = 
	[	["https://blocks.cryptopay.org.za"],
["204.44.77.94:13281"],
["91.235.113.199:13281"],
["91.235.113.153:13281"],
["144.76.26.181:19060"],
["163.172.180.73:13281"],
["207.180.246.163:13281"],
["51.15.120.178:13281"],
["51.15.125.62:13281"],
["193.37.138.130:13281"],
["37.97.194.127:13281"],
["109.250.101.32:13281"],
["47.33.178.32:13281"],
["95.216.143.60:13281"],
["145.239.5.182:13281"],
["92.117.41.138:13281"],
["54.38.69.59:13281"],
["109.250.103.23:13281"],
["92.117.60.255:13281"],
["186.62.23.36:13281"],
["85.214.221.66:13281"],
["186.62.19.244:13281"],
["186.62.14.56:13281"],
["186.62.0.182:13281"],
["186.62.59.147:13281"],
["217.121.67.173:13281"],
["216.250.114.226:13281"],
["178.196.110.141:13281"],
["86.211.1.71:13281"],
["51.15.99.72:13281"],
["142.93.196.26:13281"],
["121.150.93.94:13281"],
["85.238.101.190:13281"],
["37.229.193.235:13281"],
["90.248.225.224:13281"],
["175.11.116.144:13281"],
["109.129.158.146:13281"],
["118.249.80.167:13281"],
["78.233.73.11:13281"],
["51.15.49.30:13281"],
["193.116.99.132:13281"],
["84.41.39.24:13281"],
["189.156.106.95:13281"],
["86.9.242.170:13281"],
["93.114.186.180:13281"],
["88.39.56.138:13281"],
["149.248.20.20:13281"],
["121.144.244.180:13281"],
["82.202.249.173:13281"],
["93.20.184.196:13281"],
["82.154.98.141:13281"],
["14.192.133.104:13281"],
["45.76.246.134:13281"],
["125.139.70.127:13281"],
["95.81.248.250:13281"],
["195.46.191.175:13281"],
["90.242.33.254:13281"],
["78.13.44.53:13281"],
["46.167.118.178:13281"],
["58.226.112.107:13281"],
["92.191.149.245:13281"],
["134.17.153.199:13281"],
["118.71.76.195:13281"],
["42.118.28.253:13281"],
["178.137.224.145:13281"],
["128.69.69.182:13281"],
["121.144.244.153:13281"],
["95.179.151.157:13281"],
["78.13.45.154:13281"],
["136.144.202.144:13281"],
["179.179.136.71:13281"],
["109.87.190.195:13281"],
["95.216.192.98:13281"],
["87.219.128.58:13281"],
["95.216.163.116:13281"],
["125.137.39.162:13281"],
["165.255.205.150:13281"],
["211.48.184.151:13281"],
["70.112.91.230:13281"],
["197.234.176.7:13281"],
["112.162.205.23:13281"],
["46.42.41.125:13281"],
["209.250.240.49:13281"],
["95.179.178.168:13281"],
["165.255.145.123:13281"],
["2.94.108.95:13281"],
["72.193.108.124:13281"],
["165.255.143.44:13281"],
["165.255.143.122:13281"],
["46.42.12.33:13281"],
["222.114.231.199:13281"],
["175.120.79.142:13281"],
["119.206.38.201:13281"],
["165.255.52.195:13281"],
["95.31.64.213:13281"],
["95.81.248.26:13281"],
["156.155.7.77:13281"],
["134.17.142.124:13281"],
["165.255.228.139:13281"],
["134.17.130.24:13281"],
["78.106.213.32:13281"],
["165.255.143.231:13281"],
["59.7.18.106:13281"],
["218.150.11.220:13281"],
["223.194.7.56:13281"],
["175.215.42.42:13281"],
["119.206.38.49:13281"],
["134.17.143.175:13281"],
["95.81.250.35:13281"],
["95.42.14.108:13281"],
["134.17.142.56:13281"],
["94.41.228.136:13281"],
["45.32.192.245:13281"],
["108.61.87.42:13281"],
["80.240.29.209:13281"],
["165.255.143.141:13281"],
["134.17.175.17:13281"],
["165.255.228.199:13281"],
["165.255.52.236:13281"],
["89.179.11.150:13281"],
["134.17.156.0:13281"],
["31.47.169.153:13281"],
["78.106.213.75:13281"],
["94.41.158.9:13281"],
["159.203.5.180:13281"],
["23.95.212.66:13281"],
["51.15.115.203:13281"],
["159.203.10.218:13281"],
["94.41.156.143:13281"],
["217.69.9.19:13281"],
["165.255.52.54:13281"],
["165.255.146.248:13281"],
["42.115.212.41:13281"]

];
