const STATES = [
 {name:'Odisha',group:'Non-BJP-dominant',score:71.6,realGdp:7.0,nominalGdp:10.93,pc:5.43,poverty:13.66,sdg:66,fiscal:73.1,employment:6.02,infra:2.82,lfpr:64.9,wpr:62.9,unemp:3.1,nonAgri:55.1,servicesChange:3.4,education:40,health:73,publicCapexPct:6.1,fdiCum:1461.74,privateProjectShareFY24:6.7,privateProjectCostFY24:26195.53,nsipi:41.8,nsipiEcon:43.0,pop:41974218,leads:'Achiever',epi:48.51,charging:43},
 {name:'Karnataka',group:'Non-BJP-dominant',score:70.4,realGdp:7.6,nominalGdp:12.75,pc:6.50,poverty:5.19,sdg:75,fiscal:41.7,employment:4.69,infra:2.48,lfpr:56.8,wpr:55.3,unemp:2.7,nonAgri:54.8,servicesChange:1.9,education:63,health:80,publicCapexPct:1.9,fdiCum:494317.81,privateProjectShareFY24:11.1,privateProjectCostFY24:43398.56,nsipi:46.7,nsipiEcon:49.1,pop:61095297,leads:'Achiever',epi:59.3,charging:74},
 {name:'Telangana',group:'Non-BJP-dominant',score:62.8,realGdp:6.7,nominalGdp:12.39,pc:5.91,poverty:7.30,sdg:74,fiscal:44.3,employment:4.92,infra:2.33,lfpr:62.2,wpr:59.2,unemp:4.8,nonAgri:62.5,servicesChange:0.8,education:64,health:73,publicCapexPct:2.0,fdiCum:89591.53,privateProjectShareFY24:4.1,privateProjectCostFY24:16030.10,nsipi:47.7,nsipiEcon:54.8,pop:35003674,leads:'Achiever',epi:57.14,charging:26},
 {name:'Tamil Nadu',group:'Non-BJP-dominant',score:62.1,realGdp:6.6,nominalGdp:11.57,pc:5.96,poverty:2.56,sdg:78,fiscal:29.8,employment:5.88,infra:2.78,lfpr:58.8,wpr:56.7,unemp:3.5,nonAgri:72.6,servicesChange:6.9,education:76,health:77,publicCapexPct:1.5,fdiCum:138247.93,privateProjectShareFY24:null,privateProjectCostFY24:null,nsipi:54.6,nsipiEcon:45.9,pop:72147030,leads:'Achiever',epi:64.41,charging:57},
 {name:'Assam',group:'BJP-dominant',score:59.1,realGdp:7.11,nominalGdp:12.26,pc:5.83,poverty:13.30,sdg:65,fiscal:39.1,employment:5.42,infra:1.19,lfpr:66.9,wpr:64.3,unemp:3.9,nonAgri:54.9,servicesChange:-7.4,education:41,health:60,publicCapexPct:2.8,fdiCum:180.68,privateProjectShareFY24:null,privateProjectCostFY24:null,nsipi:39.5,nsipiEcon:38.3,pop:31205576,leads:'Achiever',epi:42.45,charging:5},
 {name:'Madhya Pradesh',group:'BJP-dominant',score:54.2,realGdp:6.1,nominalGdp:12.76,pc:4.76,poverty:15.94,sdg:67,fiscal:37.8,employment:6.95,infra:1.19,lfpr:68.9,wpr:68.2,unemp:1.0,nonAgri:42.1,servicesChange:-0.6,education:49,health:56,publicCapexPct:4.0,fdiCum:4759.67,privateProjectShareFY24:3.4,privateProjectCostFY24:13293.25,nsipi:42.9,nsipiEcon:38.4,pop:72626809,leads:'Fast Mover',epi:57.0,charging:20},
 {name:'Haryana',group:'BJP-dominant',score:50.4,realGdp:6.5,nominalGdp:11.42,pc:4.76,poverty:4.81,sdg:72,fiscal:34.5,employment:4.58,infra:3.15,lfpr:49.5,wpr:47.8,unemp:3.4,nonAgri:72.6,servicesChange:13.3,education:77,health:73,publicCapexPct:1.3,fdiCum:110690.75,privateProjectShareFY24:null,privateProjectCostFY24:null,nsipi:49.8,nsipiEcon:43.2,pop:25351462,leads:'Achiever',epi:55.01,charging:83},
 {name:'Chhattisgarh',group:'BJP-dominant',score:49.6,realGdp:6.0,nominalGdp:10.34,pc:4.11,poverty:13.53,sdg:67,fiscal:44.3,employment:6.90,infra:1.19,lfpr:71.5,wpr:69.7,unemp:2.5,nonAgri:43.0,servicesChange:4.6,education:63,health:56,publicCapexPct:4.0,fdiCum:1176.45,privateProjectShareFY24:null,privateProjectCostFY24:null,nsipi:42.1,nsipiEcon:45.9,pop:25545198,leads:'Aspirer',epi:48.5,charging:35},
 {name:'Uttar Pradesh',group:'Non-BJP-dominant',score:49.1,realGdp:6.1,nominalGdp:11.34,pc:4.24,poverty:14.75,sdg:67,fiscal:41.9,employment:4.02,infra:3.12,lfpr:56.9,wpr:55.1,unemp:3.1,nonAgri:46.8,servicesChange:1.5,education:54,health:61,publicCapexPct:5.7,fdiCum:17003.75,privateProjectShareFY24:7.6,privateProjectCostFY24:29714.33,nsipi:39.9,nsipiEcon:32.2,pop:199812341,leads:'Achiever',epi:62.09,charging:21},
 {name:'Uttarakhand',group:'BJP-dominant',score:48.9,realGdp:5.0,nominalGdp:9.57,pc:3.60,poverty:8.00,sdg:72,fiscal:null,employment:5.17,infra:3.09,lfpr:60.7,wpr:58.1,unemp:4.3,nonAgri:64.0,servicesChange:4.2,education:73,health:84,publicCapexPct:3.5,fdiCum:1820.12,privateProjectShareFY24:null,privateProjectCostFY24:null,nsipi:41.9,nsipiEcon:32.7,pop:10086292,leads:'Achiever',epi:52.07,charging:15},
 {name:'Maharashtra',group:'Mixed',score:46.9,realGdp:5.6,nominalGdp:10.21,pc:4.51,poverty:6.99,sdg:73,fiscal:45.0,employment:5.05,infra:2.15,lfpr:59.0,wpr:57.1,unemp:3.3,nonAgri:57.7,servicesChange:4.3,education:67,health:84,publicCapexPct:2.0,fdiCum:743224.85,privateProjectShareFY24:11.7,privateProjectCostFY24:45744.43,nsipi:49.3,nsipiEcon:53.0,pop:112374333,leads:'Achiever',epi:68.01,charging:55},
 {name:'Jharkhand',group:'Non-BJP-dominant',score:45.7,realGdp:5.51,nominalGdp:9.92,pc:3.96,poverty:13.29,sdg:62,fiscal:50.5,employment:6.73,infra:2.73,lfpr:63.8,wpr:63.0,unemp:1.3,nonAgri:56.7,servicesChange:0.0,education:61,health:77,publicCapexPct:4.7,fdiCum:19468.1,privateProjectShareFY24:3.4,privateProjectCostFY24:13293.25,nsipi:35.2,nsipiEcon:39.5,pop:32988134,leads:'Aspirer',epi:42.49,charging:30},
 {name:'Rajasthan',group:'Non-BJP-dominant',score:41.7,realGdp:5.8,nominalGdp:11.08,pc:4.12,poverty:13.55,sdg:67,fiscal:27.6,employment:5.21,infra:1.89,lfpr:64.4,wpr:61.7,unemp:4.2,nonAgri:51.9,servicesChange:4.7,education:63,health:73,publicCapexPct:2.5,fdiCum:25900.55,privateProjectShareFY24:3.6,privateProjectCostFY24:14075.21,nsipi:44.3,nsipiEcon:47.0,pop:68548437,leads:'Fast Mover',epi:47.31,charging:45},
 {name:'Kerala',group:'Non-BJP-dominant',score:35.7,realGdp:5.0,nominalGdp:9.94,pc:4.51,poverty:0.15,sdg:79,fiscal:24.8,employment:3.65,infra:2.84,lfpr:56.2,wpr:52.2,unemp:7.2,nonAgri:77.2,servicesChange:5.9,education:82,health:80,publicCapexPct:1.2,fdiCum:12505.8,privateProjectShareFY24:null,privateProjectCostFY24:null,nsipi:48.9,nsipiEcon:34.3,pop:33406061,leads:'Aspirer',epi:53.76,charging:34},
 {name:'West Bengal',group:'Non-BJP-dominant',score:35.1,realGdp:4.7,nominalGdp:10.09,pc:3.71,poverty:9.40,sdg:70,fiscal:23.8,employment:6.16,infra:2.84,lfpr:61.1,wpr:59.6,unemp:2.5,nonAgri:63.3,servicesChange:4.0,education:60,health:79,publicCapexPct:1.9,fdiCum:15256.66,privateProjectShareFY24:null,privateProjectCostFY24:null,nsipi:46.0,nsipiEcon:41.0,pop:91276115,leads:'Aspirer',epi:53.03,charging:38},
 {name:'Bihar',group:'BJP-dominant',score:33.7,realGdp:6.1,nominalGdp:11.28,pc:4.03,poverty:18.13,sdg:57,fiscal:30.9,employment:2.99,infra:2.08,lfpr:53.2,wpr:51.6,unemp:3.0,nonAgri:46.8,servicesChange:-7.3,education:32,health:67,publicCapexPct:3.0,fdiCum:1650.73,privateProjectShareFY24:null,privateProjectCostFY24:null,nsipi:32.9,nsipiEcon:23.4,pop:104099452,leads:'Fast Mover',epi:46.31,charging:7},
 {name:'Punjab',group:'Mixed',score:30.4,realGdp:5.4,nominalGdp:9.21,pc:3.67,poverty:.82,sdg:76,fiscal:12.4,employment:4.35,infra:2.73,lfpr:55.7,wpr:52.6,unemp:5.5,nonAgri:72.6,servicesChange:8.8,education:75,health:79,publicCapexPct:0.9,fdiCum:9839.44,privateProjectShareFY24:null,privateProjectCostFY24:null,nsipi:43.6,nsipiEcon:27.7,pop:27743338}
];

const INDIA_SECTOR_CAGR = {agriculture:3.92,industry:5.45,services:6.90};
const SECTOR_CAGR = {
  'Odisha':{agriculture:3.21,industry:6.40,services:5.61},
  'Karnataka':{agriculture:1.37,industry:5.96,services:8.42},
  'Telangana':{agriculture:3.54,industry:3.71,services:7.66},
  'Tamil Nadu':{agriculture:0.23,industry:6.65,services:6.24},
  'Assam':{agriculture:6.05,industry:9.95,services:3.96},
  'Madhya Pradesh':{agriculture:5.76,industry:4.78,services:6.02},
  'Haryana':{agriculture:-0.26,industry:6.37,services:7.03},
  'Chhattisgarh':{agriculture:3.77,industry:5.47,services:5.56},
  'Uttar Pradesh':{agriculture:3.93,industry:6.50,services:5.95},
  'Uttarakhand':{agriculture:-3.36,industry:4.21,services:6.59},
  'Maharashtra':{agriculture:2.59,industry:3.96,services:6.62},
  'Jharkhand':{agriculture:1.29,industry:4.91,services:6.76},
  'Rajasthan':{agriculture:1.85,industry:3.58,services:6.23},
  'Kerala':{agriculture:-4.81,industry:4.73,services:5.72},
  'West Bengal':{agriculture:1.18,industry:5.71,services:4.87},
  'Bihar':{agriculture:0.03,industry:8.72,services:5.48},
  'Punjab':{agriculture:0.45,industry:5.16,services:5.73}
};
STATES.forEach(s => s.sectorCagr = SECTOR_CAGR[s.name] || null);

// Annual real GSDP levels (₹ lakh, constant 2011-12 prices), FY2011-12 → FY2024-25.
// Source: RBI / NSO, Handbook of Statistics on Indian States 2024-25.
const ANNUAL_REAL_GSDP = {
'Assam':[14317491,14734238,15452540,16521231,19110899,20208084,21991938,23103956,24070724,24781923,25813969,28979318,32455580,34981426],
'Bihar':[24714396,25685096,26964984,27948244,29648818,31879745,34402783,38138253,39832923,36896986,38725556,43690911,48912616,53137172],
'Chhattisgarh':[15807382,16597740,18257954,18581344,19058377,21370477,22013569,24457916,25154906,25119230,26703254,28581697,30671211,32975231],
'Haryana':[29753852,32091191,34750661,37053451,41340479,45670911,48203615,53299604,54512396,49964332,55992163,58417087,62949066,67703325],
'Jharkhand':[15091759,16325027,16581626,18653439,17488115,19317392,21058730,22927447,23175539,21948331,24585559,26353058,28328396,30317823],
'Karnataka':[60600981,64303302,70446604,74842913,83132178,94177416,101972354,108510063,115139320,112431068,124865369,138006542,146257769,157029777],
'Kerala':[36404789,38769346,40278133,41995555,45121002,48530154,51618976,55422831,55919418,51170292,57198296,60463274,64531002,68528316],
'Madhya Pradesh':[31556159,35168262,36513394,38394448,41873574,47066916,49710165,54327196,56752504,54060425,59366481,62825620,67163553,71226044],
'Maharashtra':[128036944,135794185,145161464,154316487,165428361,180704575,188870619,195738075,204661365,185213247,205884506,225570788,243525921,261226310],
'Odisha':[23098708,24336348,26589153,27066534,29222893,33734806,36111668,38673286,39742750,38897906,45283628,45178536,48350933,51657546],
'Punjab':[26662827,28082285,29944973,31212533,33005193,35272056,37540561,39701889,41329463,40726411,43737282,46839555,49776354,52823945],
'Rajasthan':[43483664,45456434,48623018,52150893,56333953,59674551,62802002,64327828,67831563,66596319,72546375,77919609,84059861,90629367],
'Tamil Nadu':[75148576,79182431,85197558,89391507,96756246,103676212,112579344,120466736,124383550,124465002,134281685,142573553,155782101,173218858],
'Telangana':[35943411,37011312,38995678,41633207,46454244,50794610,55740976,60840139,64096810,60243463,66976874,71872486,77268385,83509962],
'Uttar Pradesh':[73707033,77229008,81988814,85456090,93418146,104048623,108080006,112247470,116903465,111546600,124079891,133306365,145203275,158263609],
'Uttarakhand':[11532759,12371005,13418236,14127764,15269873,16770325,18095612,18608274,18974039,16678624,17463481,18947327,20431484,21781681],
'West Bengal':[52048504,54219091,55849762,57436432,60954479,65341593,69498050,73892038,76179371,70404231,78600391,83125109,88189219,94185372]
};
const GDP_YEARS=['2011-12','2012-13','2013-14','2014-15','2015-16','2016-17','2017-18','2018-19','2019-20','2020-21','2021-22','2022-23','2023-24','2024-25'];
const INDIA_REAL_GDP=[8736329,9213017,9801370,10527674,11369493,12308193,13144582,13992914,14534641,13694869,15021846,16164913,17650591,18795095];
function annualGrowth(levels){ return levels.map((v,i)=>i===0?null:(v/levels[i-1]-1)*100); }
function rollingCagr(levels,window=3){ return levels.map((v,i)=>i<window?null:(Math.pow(v/levels[i-window],1/window)-1)*100); }
function groupSeries(group){
 const names=STATES.filter(s=>s.group===group).map(s=>s.name).filter(n=>ANNUAL_REAL_GSDP[n]);
 return GDP_YEARS.map((_,i)=>names.reduce((acc,n)=>acc+ANNUAL_REAL_GSDP[n][i],0));
}

// ---- Recent 5-year panel: FY2020-21 -> FY2024-25 ----
const RECENT5_CORE = {
  'Assam':{realGdp:9.00,nominalGdp:17.32,pc:8.11}, 'Bihar':{realGdp:9.55,nominalGdp:14.97,pc:7.87},
  'Chhattisgarh':{realGdp:7.04,nominalGdp:12.68,pc:5.75}, 'Haryana':{realGdp:7.89,nominalGdp:13.54,pc:6.33},
  'Jharkhand':{realGdp:8.41,nominalGdp:14.86,pc:7.35}, 'Karnataka':{realGdp:8.71,nominalGdp:15.14,pc:8.15},
  'Kerala':{realGdp:7.58,nominalGdp:12.78,pc:7.01}, 'Madhya Pradesh':{realGdp:7.14,nominalGdp:12.27,pc:5.88},
  'Maharashtra':{realGdp:8.98,nominalGdp:14.78,pc:8.49}, 'Odisha':{realGdp:7.35,nominalGdp:13.30,pc:7.03},
  'Punjab':{realGdp:6.72,nominalGdp:11.59,pc:4.86}, 'Rajasthan':{realGdp:8.01,nominalGdp:13.75,pc:7.10},
  'Tamil Nadu':{realGdp:8.61,nominalGdp:14.92,pc:8.35}, 'Telangana':{realGdp:8.51,nominalGdp:14.85,pc:8.09},
  'Uttar Pradesh':{realGdp:9.14,nominalGdp:15.34,pc:8.13}, 'Uttarakhand':{realGdp:6.90,nominalGdp:13.79,pc:5.59},
  'West Bengal':{realGdp:7.55,nominalGdp:12.29,pc:7.13}
};
const LABOUR_2020_21 = {
  'Assam':{lfpr:52.7,wpr:48.9,unemp:4.1}, 'Bihar':{lfpr:41.9,wpr:39.6,unemp:4.6},
  'Chhattisgarh':{lfpr:65.2,wpr:62.9,unemp:2.5}, 'Haryana':{lfpr:46.9,wpr:44.2,unemp:6.3},
  'Jharkhand':{lfpr:61.6,wpr:58.0,unemp:3.1}, 'Karnataka':{lfpr:56.9,wpr:53.0,unemp:2.7},
  'Kerala':{lfpr:51.3,wpr:48.2,unemp:10.1}, 'Madhya Pradesh':{lfpr:61.4,wpr:59.2,unemp:1.9},
  'Maharashtra':{lfpr:56.0,wpr:53.2,unemp:3.7}, 'Odisha':{lfpr:56.5,wpr:54.3,unemp:5.3},
  'Punjab':{lfpr:50.4,wpr:47.6,unemp:6.2}, 'Rajasthan':{lfpr:58.1,wpr:55.5,unemp:4.7},
  'Tamil Nadu':{lfpr:60.0,wpr:57.0,unemp:5.2}, 'Telangana':{lfpr:60.8,wpr:58.0,unemp:4.9},
  'Uttar Pradesh':{lfpr:50.1,wpr:48.0,unemp:4.2}, 'Uttarakhand':{lfpr:52.3,wpr:48.7,unemp:6.9},
  'West Bengal':{lfpr:54.9,wpr:52.8,unemp:3.5}
};
const LABOUR_2024_25 = {
  'Assam':{lfpr:61.9,wpr:59.6,unemp:3.7}, 'Bihar':{lfpr:49.3,wpr:47.4,unemp:3.8},
  'Chhattisgarh':{lfpr:71.6,wpr:70.0,unemp:2.3}, 'Haryana':{lfpr:50.4,wpr:48.1,unemp:4.5},
  'Jharkhand':{lfpr:59.8,wpr:58.2,unemp:2.7}, 'Karnataka':{lfpr:59.4,wpr:58.0,unemp:2.3},
  'Kerala':{lfpr:57.4,wpr:54.9,unemp:4.4}, 'Madhya Pradesh':{lfpr:65.1,wpr:64.1,unemp:1.5},
  'Maharashtra':{lfpr:59.5,wpr:58.0,unemp:2.4}, 'Odisha':{lfpr:63.2,wpr:61.3,unemp:2.9},
  'Punjab':{lfpr:55.2,wpr:52.3,unemp:5.3}, 'Rajasthan':{lfpr:64.5,wpr:61.7,unemp:4.3},
  'Tamil Nadu':{lfpr:62.3,wpr:60.2,unemp:3.4}, 'Telangana':{lfpr:61.4,wpr:58.3,unemp:5.0},
  'Uttar Pradesh':{lfpr:55.2,wpr:53.7,unemp:2.7}, 'Uttarakhand':{lfpr:56.3,wpr:53.4,unemp:5.1},
  'West Bengal':{lfpr:59.5,wpr:57.8,unemp:2.8}
};
const SDG_2020_21 = {'Assam':57,'Bihar':52,'Chhattisgarh':61,'Haryana':67,'Jharkhand':56,'Karnataka':72,'Kerala':75,'Madhya Pradesh':62,'Maharashtra':70,'Odisha':61,'Punjab':68,'Rajasthan':60,'Tamil Nadu':74,'Telangana':69,'Uttar Pradesh':60,'Uttarakhand':72,'West Bengal':62};
STATES.forEach(s=>{s.recent5={...(RECENT5_CORE[s.name]||{}), labour0:LABOUR_2020_21[s.name], labour1:LABOUR_2024_25[s.name], sdg0:SDG_2020_21[s.name], sdg1:s.sdg};});


const LAST5_POLITICS = {
 'Odisha':[{p:'BJD-led',start:'Sep 2021',end:'Jun 2024',tone:'nonbjp',months:33},{p:'BJP-led',start:'Jun 2024',end:'Sep 2026',tone:'bjp',months:27}],
 'Karnataka':[{p:'BJP-led',start:'Sep 2021',end:'May 2023',tone:'bjp',months:20},{p:'Congress-led',start:'May 2023',end:'Sep 2026',tone:'nonbjp',months:40}],
 'Telangana':[{p:'BRS-led',start:'Sep 2021',end:'Dec 2023',tone:'nonbjp',months:27},{p:'Congress-led',start:'Dec 2023',end:'Sep 2026',tone:'nonbjp',months:33}],
 'Tamil Nadu':[{p:'DMK-led',start:'Sep 2021',end:'Sep 2026',tone:'nonbjp',months:60}],
 'Assam':[{p:'BJP-led',start:'Sep 2021',end:'Sep 2026',tone:'bjp',months:60}],
 'Madhya Pradesh':[{p:'BJP-led',start:'Sep 2021',end:'Sep 2026',tone:'bjp',months:60}],
 'Haryana':[{p:'BJP-led',start:'Sep 2021',end:'Sep 2026',tone:'bjp',months:60}],
 'Chhattisgarh':[{p:'Congress-led',start:'Sep 2021',end:'Dec 2023',tone:'nonbjp',months:27},{p:'BJP-led',start:'Dec 2023',end:'Sep 2026',tone:'bjp',months:33}],
 'Uttar Pradesh':[{p:'BJP-led',start:'Sep 2021',end:'Sep 2026',tone:'bjp',months:60}],
 'Uttarakhand':[{p:'BJP-led',start:'Sep 2021',end:'Sep 2026',tone:'bjp',months:60}],
 'Maharashtra':[{p:'MVA / non-BJP-led',start:'Sep 2021',end:'Jun 2022',tone:'nonbjp',months:9},{p:'Mahayuti / BJP-led',start:'Jun 2022',end:'Sep 2026',tone:'bjp',months:51}],
 'Jharkhand':[{p:'JMM-led',start:'Sep 2021',end:'Sep 2026',tone:'nonbjp',months:60}],
 'Rajasthan':[{p:'Congress-led',start:'Sep 2021',end:'Dec 2023',tone:'nonbjp',months:27},{p:'BJP-led',start:'Dec 2023',end:'Sep 2026',tone:'bjp',months:33}],
 'Kerala':[{p:'LDF-led',start:'Sep 2021',end:'May 2026',tone:'nonbjp',months:56},{p:'UDF / Congress-led',start:'May 2026',end:'Sep 2026',tone:'nonbjp',months:4}],
 'West Bengal':[{p:'TMC-led',start:'Sep 2021',end:'May 2026',tone:'nonbjp',months:56},{p:'BJP-led',start:'May 2026',end:'Sep 2026',tone:'bjp',months:4}],
 'Bihar':[{p:'NDA / BJP-led coalition',start:'Sep 2021',end:'Aug 2022',tone:'bjp',months:11},{p:'Mahagathbandhan / non-BJP-led',start:'Aug 2022',end:'Nov 2025',tone:'nonbjp',months:39},{p:'NDA / BJP-led coalition',start:'Nov 2025',end:'Sep 2026',tone:'bjp',months:10}],
 'Punjab':[{p:'Congress-led',start:'Sep 2021',end:'Mar 2022',tone:'nonbjp',months:6},{p:'AAP-led',start:'Mar 2022',end:'Sep 2026',tone:'nonbjp',months:54}]
};

const METRICS = {
 overall:{label:'Composite score',unit:'/100',higher:true,get:s=>s.score,format:v=>v.toFixed(1)},
 realGdp:{label:'Real GSDP CAGR',unit:'%',higher:true,get:s=>s.realGdp,format:v=>v.toFixed(2)+'%'},
 nominalGdp:{label:'Nominal GSDP CAGR',unit:'%',higher:true,get:s=>s.nominalGdp,format:v=>v.toFixed(2)+'%'},
 pc:{label:'Real PC NSDP CAGR',unit:'%',higher:true,get:s=>s.pc,format:v=>v.toFixed(2)+'%'},
 poverty:{label:'Poverty reduction',unit:'pp',higher:true,get:s=>s.poverty,format:v=>v.toFixed(2)+' pp'},
 sdg:{label:'Human development (SDG)',unit:'',higher:true,get:s=>s.sdg,format:v=>v.toFixed(0)},
 education:{label:'Quality education (SDG 4)',unit:'',higher:true,get:s=>s.education,format:v=>v==null?'—':v.toFixed(0)},
 health:{label:'Good health & well-being (SDG 3)',unit:'',higher:true,get:s=>s.health,format:v=>v==null?'—':v.toFixed(0)},
 leads:{label:'LEADS 2024',unit:'',higher:true,get:s=>s.leads,format:v=>v==null?'—':v},
 epi:{label:'Export Preparedness Index 2024',unit:'',higher:true,get:s=>s.epi,format:v=>v==null?'—':v.toFixed(2)},
 charging:{label:'Charging Infrastructure Readiness 2024',unit:'',higher:true,get:s=>s.charging,format:v=>v==null?'—':v.toFixed(0)},
 fiscal:{label:'Fiscal Health Index',unit:'',higher:true,get:s=>s.fiscal,format:v=>v==null?'—':v.toFixed(1)},
 employment:{label:'Employment score',unit:'/10',higher:true,get:s=>s.employment,format:v=>v.toFixed(2)},
 infra:{label:'Infrastructure score',unit:'/5',higher:true,get:s=>s.infra,format:v=>v.toFixed(2)},
 lfpr:{label:'LFPR',unit:'%',higher:true,get:s=>s.lfpr,format:v=>v.toFixed(1)+'%'},
 wpr:{label:'WPR',unit:'%',higher:true,get:s=>s.wpr,format:v=>v.toFixed(1)+'%'},
 unemp:{label:'Unemployment',unit:'%',higher:false,get:s=>s.unemp,format:v=>v.toFixed(1)+'%'},
 nonAgri:{label:'Non-agricultural employment',unit:'%',higher:true,get:s=>s.nonAgri,format:v=>v.toFixed(1)+'%'},
 servicesChange:{label:'Services employment change',unit:'pp',higher:true,get:s=>s.servicesChange,format:v=>`${v>0?'+':''}${v.toFixed(1)} pp`}
};

const GROUPS = {
 bjp:'BJP-dominant', nonbjp:'Non-BJP-dominant', mixed:'Mixed'
};

const INDIA_BENCHMARKS = {
 overall:null,
 realGdp:5.98,
 nominalGdp:10.50,
 pc:null,
 poverty:9.89,
 sdg:71,
 fiscal:null,
 employment:null,
 infra:null,
 lfpr:60.1,
 wpr:58.2,
 unemp:3.2,
 nonAgri:53.9,
 servicesChange:2.8
};

const INDIA_BENCHMARK_LABELS = {
 pc:'No direct national NSDP equivalent; see national real per-capita NNI in methodology',
 fiscal:'No directly comparable national FHI score',
 employment:'Custom state score — no direct national equivalent',
 infra:'Custom state score — no direct national equivalent',
 overall:'Custom composite — no direct national equivalent'
};

const ICONS = {
  growth:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 17 9 12l3 3 7-7M14 8h5v5"/></svg>',
  income:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v18M17 7.5c0-2-1.8-3.5-5-3.5S7 5.5 7 7.5s1.8 3.5 5 4.2 5 2.1 5 4.3-1.8 3.5-5 3.5-5-1.5-5-3.5"/></svg>',
  poverty:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19V7m0 0 4 4m-4-4 4-4M19 5v12m0 0-4-4m4 4-4 4"/></svg>',
  human:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="7" r="3"/><path d="M6 21c.4-4 2.2-6 6-6s5.6 2 6 6"/></svg>',
  fiscal:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 18h16M6 16V9m4 7V6m4 10v-4m4 4V8"/></svg>',
  jobs:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="7" width="16" height="12" rx="2"/><path d="M9 7V5h6v2M8 12h8M10 15h4"/></svg>',
  investment:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 20h18M5 20v-8h3v8M10 20V8h4v12M15 20V5h4v15M4 8h16"/></svg>',
  infra:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19 8 9l4 10 4-14 4 14"/></svg>',
  map:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18-5 2V6l5-2 6 2 5-2v14l-5 2-6-2Z"/><path d="M9 4v14m6-12v14"/></svg>',
  scale:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v16M5 7h14M6 7l-3 6a3 3 0 0 0 6 0L6 7Zm12 0-3 6a3 3 0 0 0 6 0l-3-6Z"/></svg>'
};
const icon = name => `<span class="icon-box icon-${name}">${ICONS[name]||''}</span>`;
const groupClass = g => g==='BJP-dominant'?'bjp':g==='Mixed'?'mixed':'nonbjp';
const fmt = (v, suffix='') => v==null ? '—' : `${v}${suffix}`;
const median = arr => { const a=arr.filter(v=>v!=null).sort((x,y)=>x-y); if(!a.length)return null; const m=Math.floor(a.length/2); return a.length%2?a[m]:(a[m-1]+a[m])/2; };
const weightedAvg = (arr, valueFn) => { const valid=arr.filter(s=>valueFn(s)!=null&&s.pop); const total=valid.reduce((a,s)=>a+s.pop,0); return valid.reduce((a,s)=>a+valueFn(s)*s.pop,0)/total; };
const metricMedianForGroup = (group,key) => median(STATES.filter(s=>s.group===group).map(METRICS[key].get));

function navigate(view, stateName=null){
 document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
 const target=document.getElementById(view); if(!target)return;
 target.classList.add('active');
 document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.view===view));
 window.scrollTo({top:0,behavior:'smooth'});
 if(view==='state-detail') renderStateDetail(stateName);
 if(view==='state-last5') renderStateLast5(stateName);
}

document.addEventListener('click', e=>{
 const el=e.target.closest('[data-view]');
 if(el && el.dataset.view) navigate(el.dataset.view, el.dataset.state);
 const card=e.target.closest('.state-card'); if(card) navigate('state-detail', card.dataset.state);
 const mapState=e.target.closest('.map-region'); if(mapState){ navigate('state-detail', mapState.dataset.state); return; }
 const row=e.target.closest('.click-row'); if(row && row.dataset.state) navigate('state-detail', row.dataset.state);
});

function renderHeadline(){
 const b=STATES.filter(s=>s.group===GROUPS.bjp), n=STATES.filter(s=>s.group===GROUPS.nonbjp), m=STATES.filter(s=>s.group===GROUPS.mixed);
 const headline=[['BJP-dominant','BJP'],['Non-BJP-dominant','Non-BJP'],['Mixed','Mixed']];
 const rows=document.getElementById('group-summary-body');
 rows.innerHTML=headline.map(([g])=>{ const arr=STATES.filter(s=>s.group===g); return `<tr><td><span class="state-chip ${groupClass(g)}">${g}</span></td><td><b>${median(arr.map(s=>s.score)).toFixed(1)}</b></td><td>${weightedAvg(arr,s=>s.score).toFixed(1)}</td><td>${weightedAvg(arr,s=>s.realGdp).toFixed(2)}%</td><td>${weightedAvg(arr,s=>s.pc).toFixed(2)}%</td><td>${weightedAvg(arr,s=>s.sdg).toFixed(1)}</td><td>${weightedAvg(arr,s=>s.employment).toFixed(2)}</td><td>${weightedAvg(arr,s=>s.infra).toFixed(2)}</td></tr>`; }).join('');
 document.getElementById('bjpMedian').textContent=median(b.map(s=>s.score)).toFixed(1);
 document.getElementById('nonbjpMedian').textContent=median(n.map(s=>s.score)).toFixed(1);
 document.getElementById('weightedScore').textContent=weightedAvg(n,s=>s.score).toFixed(1);
 document.getElementById('weightedGap').textContent=(weightedAvg(n,s=>s.score)-weightedAvg(b,s=>s.score)).toFixed(1)+' pts';
 document.getElementById('weightedRealGdp').textContent=weightedAvg(b,s=>s.realGdp).toFixed(2)+'% vs '+weightedAvg(n,s=>s.realGdp).toFixed(2)+'%';
}

function renderLeaderboard(){
 const tbody=document.getElementById('leaderboard');
 tbody.innerHTML=[...STATES].sort((a,b)=>b.score-a.score).slice(0,10).map((s,i)=>`<tr class="click-row" data-state="${s.name}"><td>${i+1}</td><td><b>${s.name}</b></td><td><span class="state-chip ${groupClass(s.group)}">${s.group}</span></td><td><b>${s.score.toFixed(1)}</b></td><td>${s.realGdp.toFixed(2)}%</td><td>${s.pc.toFixed(2)}%</td><td>${s.sdg}</td></tr>`).join('');
}

function renderStates(){
 const grid=document.getElementById('state-grid');
 const query=(document.getElementById('state-search').value||'').toLowerCase();
 const active=document.querySelector('#group-filter .filter-btn.active')?.dataset.group||'all';
 const sortKey=document.getElementById('state-sort').value;
 const rows=STATES.filter(s=>(active==='all'||s.group===active)&&s.name.toLowerCase().includes(query));
 const metric=METRICS[sortKey];
 rows.sort((a,b)=>{
   const av=metric.get(a), bv=metric.get(b);
   if(av==null && bv==null) return a.name.localeCompare(b.name);
   if(av==null) return 1;
   if(bv==null) return -1;
   return (metric.higher===false ? av-bv : bv-av);
 });
 const metricIcons={overall:'scale',realGdp:'growth',nominalGdp:'growth',pc:'income',poverty:'poverty',sdg:'human',fiscal:'fiscal',employment:'jobs',infra:'infra'};
 const activeLabel=metric.label;
 const activeValue=s=>metric.format(metric.get(s));
 const metricClass=key=>key==='overall'?'composite':'metric-highlight';
 grid.innerHTML=rows.map(s=>{
   const isOverall=sortKey==='overall';
   const mainValue=activeValue(s);
   const composite=isOverall?'':`<div class="card-composite">Composite <strong>${s.score.toFixed(1)}</strong><span>/100</span></div>`;
   return `<article class="state-card ${metricClass(sortKey)}" data-state="${s.name}">
     <div class="state-meta"><span class="state-chip ${groupClass(s.group)}">${s.group}</span>${isOverall?`<span class="state-score">${s.score.toFixed(1)}</span>`:`<span class="card-rank-lens">Sorted by ${activeLabel}</span>`}</div>
     <div class="state-card-heading"><div><h3>${s.name}</h3>${composite}</div></div>
     ${isOverall ? `<div class="state-primary-metric composite-primary"><div class="primary-label">${icon(metricIcons[sortKey])}${activeLabel}</div><div class="primary-value">${mainValue}</div></div>` : `<div class="state-primary-metric"><div class="primary-label">${icon(metricIcons[sortKey])}${activeLabel}</div><div class="primary-value">${mainValue}</div></div>`}
     <div class="state-subgrid"><div class="mini-metric"><div class="mini-label">Real GSDP CAGR</div><div class="mini-value">${s.realGdp.toFixed(1)}%</div></div><div class="mini-metric"><div class="mini-label">Nominal GSDP CAGR</div><div class="mini-value">${s.nominalGdp.toFixed(1)}%</div></div><div class="mini-metric"><div class="mini-label">Real PC NSDP CAGR</div><div class="mini-value">${s.pc.toFixed(2)}%</div></div><div class="mini-metric"><div class="mini-label">SDG score</div><div class="mini-value">${s.sdg}</div></div></div>
   </article>`;
 }).join('') || '<div class="empty">No states match that filter.</div>';
}

function metricBar(label,value,max){ if(value==null)return `<div class="metric-bar-row"><span>${label}</span><em>—</em></div>`; return `<div class="metric-bar-row"><span>${label}</span><div class="metric-bar"><i style="width:${Math.max(0,Math.min(100,(value/max)*100))}%"></i></div><b>${METRICS[label]?.format?.(value)??value}</b></div>`; }



// Annual real GSVA levels by broad sector, FY2011-12 → FY2024-25.
// RBI/NSO Handbook of Statistics on Indian States 2024-25: Gross State Value Added (constant prices), Industry, Services.
const SECTOR_LEVELS = {
'Assam':{total:[13529020,13969583,14594127,15559921,18067369,18712296,20680674,20892085,21912863,21621051,23554862,26714263,29808579,32321829],industry:[4385874,4156905,4491858,4797583,6815230,7451137,8356989,8687325,8766241,8151757,11012648,11924014,13482175,15130438],services:[6295033,6498604,6893110,7467172,7818265,7760600,8709156,8566039,9217075,9601843,8533385,9128385,10260029,10978196]},
'Bihar':{total:[24169850,25160949,26066234,26941804,28608959,30694015,33482650,36699173,38182185,35713975,38280039,43286235,47278565,51323272],industry:[4554000,3955530,5166760,5682444,5811391,6452333,6763566,7329941,7722502,7593141,8347199,10808537,12515249,13920261],services:[13409195,14401467,14947842,15324452,16724038,17574910,19528591,22250586,23266133,20343224,21838581,23952563,25850358,28149659]},
'Chhattisgarh':{total:[14842982,15556882,17255460,17523357,18014536,19465835,20010414,22287581,23537766,23798534,25204843,26929485,28656137,30725381],industry:[7016612,7326445,8468830,8337415,8499275,8940226,9772387,11364441,11622812,12060963,12706540,13126207,13764902,14717167],services:[5140420,5380078,5859052,6064312,6423198,6775482,6896577,7130977,7924750,7556884,8129087,9048446,9992493,10846132]},
'Haryana':{total:[27407463,29360057,31605865,33496911,36740800,40361094,42445828,46692640,47888319,44389530,49676077,52190940,56152848,60409105],industry:[8661061,9439365,10133536,10606630,11817401,13343238,13819085,15617934,15234713,14341865,16998617,17124987,18388636,19876238],services:[12292516,13594193,14969816,16532620,18321178,19891197,20997745,22774202,23914386,21464217,24146224,26486309,28564501,30956151]},
'Jharkhand':{total:[13912959,15030597,15172379,17125696,15774120,17262033,18746696,20661937,20889973,19781873,22457346,24014570,25879768,27778214],industry:[6317718,6975967,6852301,7451350,6516511,7084484,7760856,9077613,8702364,8305992,10175088,10628968,11228071,11673433],services:[5361695,5689676,5998783,6641159,7085921,7497274,8246454,9030372,9633138,8760299,9426652,10598254,11663535,12654581]},
'Karnataka':{total:[55221364,58512351,64200748,68394435,75530653,84519597,89977017,95804915,102538478,100618333,111551690,123442940,131410621,141496007],industry:[16280170,16500915,17848442,18111579,20830023,24250812,24914373,26577380,25702146,25578776,29618100,30670660,32900944,34824726],services:[31386326,34841904,38664525,42264865,47472866,52816447,55968534,60461693,66485666,63233326,69476447,80244058,86590698,94272657]},
'Kerala':{total:[33629311,35635473,37165147,38586962,40648007,43537107,46075400,48022604,49397423,44498213,50099348,53432131,56820665,60566541],industry:[9469578,9683751,10128080,10543757,11239427,12587171,13321594,13322170,13455277,13304238,14444962,14861499,16236142,17510970],services:[19322139,21044915,22439908,23444940,25044795,26614463,28326851,30366164,31718772,26904033,31187885,34097519,36055454,38429423]},
'Madhya Pradesh':{total:[30368859,33819762,34532723,36364007,38989851,43747686,46051606,50489541,52017568,49905712,55892512,59271520,62364975,66284519],industry:[9398394,9469736,9529265,9917767,11443201,11914669,13074838,15706921,14185537,13258123,16065825,16394620,17155201,18395429],services:[11863234,13011009,13682614,14420526,15570721,16723193,17833951,19587678,20714250,18666308,20816897,22819080,24494622,26511273]},
'Maharashtra':{total:[114441844,121338185,129642764,137637418,146848493,159981861,166820507,172501058,181463274,166282045,185366109,201262541,215641018,230759533],industry:[40988240,43074568,44411243,47968559,52192116,55285010,57211024,58038217,54977569,52130533,59200420,60878997,64658188,67814412],services:[58450931,63324460,68450933,74685393,80220792,87223399,92261396,97476933,108130371,93675729,104874866,118468429,128345946,138343708]},
'Odisha':{total:[22023169,23191892,25256176,25584002,27464169,31097941,32735286,35299658,35736190,35401877,40798731,40720738,43878584,46719497],industry:[9600472,9516379,11060447,10284597,11767248,14119724,15244684,17067231,15882860,16814752,20987415,18972435,20398042,21545219],services:[8488159,9117405,9827201,10588381,11585388,12047474,13101089,13459199,14434364,12783125,13856917,15273685,16547500,18102471]},
'Punjab':{total:[25377427,26540116,27925101,29009391,30520874,32484547,34468624,36294472,37780478,37258619,39771679,42466102,44888917,47479995],industry:[6447735,6589569,6902906,7253879,7696616,8170455,8663993,9099214,9305972,9608497,10699505,11310934,12214848,12919408],services:[11112867,12063717,12874958,13889371,14847996,15839220,16923837,18103343,19219524,18294121,19601572,21540042,22965130,24558229]},
'Rajasthan':{total:[41698354,43452102,46177057,49370378,52889688,56309721,59000780,60046187,63474705,62129045,67989611,72688717,77331512,82198678],industry:[13630579,13635793,13736174,15076043,17605337,18677826,19188640,16599750,17335022,17799368,19456808,20440567,22064593,23338279],services:[16157472,17552092,19080457,20563745,21598501,22753026,24942979,27784901,28557103,25639763,29375667,32102141,34504093,37049151]},
'Tamil Nadu':{total:[69302212,72507418,77668351,81500069,87907147,93950101,101449075,108017170,111493100,111417016,119847593,127274984,138643345,154155130],industry:[25546469,27310251,27781443,27393094,31813843,35054682,38116505,41011132,41202534,40775477,44815648,45730616,51885017,58903738],services:[34982521,37378289,40725561,44270500,46001730,48966757,52205510,55157012,57541400,57320509,60960795,66938614,71938821,80071008]},
'Telangana':{total:[33605011,34587612,36429578,38307307,42384244,45953910,50074176,54542139,57946110,54656563,60673574,65272786,69809385,75539162],industry:[10383862,9384634,9306422,9083520,10903697,11017301,12370500,14243387,13786534,13546300,14867782,14527306,16364366,17324247],services:[17759661,19259624,20943951,23642720,26319052,29204169,31421367,33626248,35501432,32197774,36934528,40821666,43654510,48175625]},
'Uttar Pradesh':{total:[69491448,73042448,77214941,80106550,87751446,98130033,102280730,106468381,110702476,106079791,118104904,126993613,138283262,150827237],industry:[18831646,19330910,20876854,20666043,23984444,30465882,30507863,30684476,30884842,30339537,34295311,36105595,40297156,43826864],services:[32334605,34549725,37266370,40754832,44287895,46968198,50306608,53337580,57129960,52660148,56788706,62544660,67775000,74133580]},
'Uttarakhand':{total:[10833284,11610323,12554463,13224866,14230783,15526255,16710349,17093191,17443879,15584002,16368257,17666281,19026042,20274176],industry:[5833063,6331675,6859967,7068341,7585688,8355894,8986257,9042513,8955223,7811560,7758436,8415795,9078755,9781485],services:[3670011,3923016,4354841,4820795,5332464,5804149,6356100,6645602,7020782,6282446,7099591,7834400,8471373,9022879]},
'West Bengal':{total:[49846983,52017765,53788579,55652671,58692252,63249390,67605026,72093732,74638846,69468685,76990643,81944985,87073511,93134253],industry:[13251365,13565591,14090806,13595862,14670805,17146911,18628587,20875835,21017638,20583259,23376916,23773116,25180837,27010969],services:[24885034,26295635,27547519,29362693,31254707,32864839,35109554,37156994,39266144,34292072,38618716,42164749,45286291,48813338]}
};
for (const [n,d] of Object.entries(SECTOR_LEVELS)) {
  d.agriculture=d.total.map((v,i)=>v-d.industry[i]-d.services[i]);
  d.industryGrowth=annualGrowth(d.industry);
  d.servicesGrowth=annualGrowth(d.services);
  d.agricultureGrowth=annualGrowth(d.agriculture);
}

function lineChartSvg(series, opts={}){
 const W=900,H=300,PL=46,PR=18,PT=20,PB=42;
 const all=series.flatMap(x=>x.values.filter(v=>Number.isFinite(v)));
 let ymin=opts.ymin!=null?opts.ymin:Math.floor(Math.min(...all)-0.8); let ymax=opts.ymax!=null?opts.ymax:Math.ceil(Math.max(...all)+0.8);
 if(ymin===ymax){ymin-=1;ymax+=1}
 const n=opts.years.length, x=i=>PL+i*(W-PL-PR)/Math.max(1,n-1), y=v=>PT+(ymax-v)*(H-PT-PB)/(ymax-ymin);
 const ticks=[ymax,(ymax+ymin)/2,ymin];
 const grid=ticks.map(t=>`<line x1="${PL}" y1="${y(t)}" x2="${W-PR}" y2="${y(t)}" stroke="#e7ebef"/><text x="${PL-8}" y="${y(t)+4}" text-anchor="end" fill="#7a848e" font-size="10">${t.toFixed(1)}</text>`).join('');
 const xlabels=opts.years.map((yr,i)=>`<text x="${x(i)}" y="${H-16}" text-anchor="middle" fill="#7a848e" font-size="9">${yr.slice(2)}</text>`).join('');
 const paths=series.map(s=>{
   const pts=s.values.map((v,i)=>Number.isFinite(v)?`${x(i)},${y(v)}`:null).filter(Boolean); if(!pts.length)return '';
   return `<path d="M ${pts.join(' L ')}" fill="none" stroke="${s.color}" stroke-width="${s.width||2.6}" stroke-linecap="round" stroke-linejoin="round" ${s.dash?'stroke-dasharray="7 6"':''}/>`;
 }).join('');
 const legend=series.map(s=>`<span class="ts-legend-item"><i class="${s.dash?'dash-key':'solid-key'}" style="color:${s.color};border-color:${s.color}"></i>${s.name}</span>`).join('');
 return `<div class="ts-chart"><div class="ts-legend">${legend}</div><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${opts.title||'Time-series chart'}">${grid}${paths}${xlabels}</svg><div class="ts-footnote">${opts.note||''}</div></div>`;
}
function indexedSeries(levels){
  if(!levels || !levels.length || !Number.isFinite(levels[0])) return levels||[];
  const base=levels[0];
  return levels.map(v=>Number.isFinite(v)?(v/base)*100:null);
}

function annualGroupGrowth(group){
 const levels=groupSeries(group); return annualGrowth(levels);
}
function annualIndiaGrowth(){ return annualGrowth(INDIA_REAL_GDP); }
function politicalColor(group){ return group==='BJP-dominant'?'#c75b06':group==='Non-BJP-dominant'?'#3569df':'#7b8791'; }
function growthTrajectoryChart(s){
 const state=annualGrowth(ANNUAL_REAL_GSDP[s.name]||[]);
 const india=annualIndiaGrowth();
 const bjp=annualGroupGrowth('BJP-dominant');
 const non=annualGroupGrowth('Non-BJP-dominant');
 const stateColor=politicalColor(s.group);
 return `<div class="trajectory-card"><div class="chart-card-head"><div><span class="kicker">LONG-RUN GROWTH</span><h3>Annual real GSDP growth</h3><p class="chart-subcopy">Year-on-year real growth lets the reader see acceleration, slowdown and the COVID shock directly. The selected state uses its political-group colour; India stays neutral.</p></div><span class="chart-note">FY2012-13 → FY2024-25</span></div>${lineChartSvg([
  {name:s.name,values:state,color:stateColor,width:3.4},
  {name:'India',values:india,color:'#202a33',width:2.4},
  {name:'BJP-dominant states',values:bjp,color:'#c75b06',width:2.2,dash:true},
  {name:'Non-BJP-dominant states',values:non,color:'#3569df',width:2.2,dash:true}
 ],{years:GDP_YEARS,title:'Annual real GSDP growth',note:'Solid line = selected state; dark solid line = India; dashed lines = BJP-dominant and non-BJP-dominant aggregates. The selected state always uses its political-group colour.'})}</div>`;
}
function sectorLineChart(s,key,label){
 const d=SECTOR_LEVELS[s.name]; if(!d)return '';
 const state=d[key+'Growth'];
 // Political-group annual sector growth is aggregated from the same underlying broad-sector levels.
 const groupSectorGrowth=(group)=>{
  const ns=STATES.filter(x=>x.group===group && SECTOR_LEVELS[x.name]);
  const vals=GDP_YEARS.map((_,i)=>ns.reduce((a,x)=>a+SECTOR_LEVELS[x.name][key][i],0));
  return annualGrowth(vals);
 };
 const bjp=groupSectorGrowth('BJP-dominant'); const non=groupSectorGrowth('Non-BJP-dominant');
 // India benchmark is the published broad-sector annual growth series where the broad definitions align; values unavailable for earlier years are left blank rather than imputed.
 const indiaByYear={
  agriculture:[null,1.4,4.8,1.2,2.1,7.3,4.5,1.6,4.8,2.4,4.8,4.4,2.1,4.9],
  industry:[null,3.6,4.2,6.7,9.5,7.5,7.1,5.9,-1.3,-0.2,12.7,2.1,9.5,8.0],
  services:[null,8.3,7.7,9.8,9.4,8.5,6.3,7.2,6.4,-8.4,9.2,10.3,9.0,7.9]
 };
 return `<div class="sector-line-card"><div class="chart-card-head"><div><span class="kicker">${label.toUpperCase()}</span><h3>${label} — annual real GVA growth</h3><p class="chart-subcopy">State vs India vs BJP-dominant and non-BJP-dominant aggregates. Lines are year-on-year growth rates, not levels.</p></div><span class="chart-note">FY2012-13 → FY2024-25</span></div>${lineChartSvg([
  {name:s.name,values:state,color:politicalColor(s.group),width:3.2},
  {name:'India',values:indiaByYear[key],color:'#202a33',width:2.2},
  {name:'BJP-dominant states',values:bjp,color:'#c75b06',width:2.0,dash:true},
  {name:'Non-BJP-dominant states',values:non,color:'#3569df',width:2.0,dash:true}
 ],{years:GDP_YEARS,title:`${s.name} ${label} annual real GVA growth`,note:'State and political-group series use RBI/NSO broad-sector GSVA at constant 2011-12 prices. India reference series follows MoSPI broad-sector annual growth where definitions are published; blank first-year values are intentional because growth starts from FY2012-13.'})}</div>`;
}
function sectoralChart(s){
 return `<div class="sectoral-card"><div class="chart-card-head"><div><span class="kicker">SECTORAL STRUCTURE</span><h3>Real sectoral GVA growth — time series</h3><p class="chart-subcopy">Three small-multiple line charts show how agriculture, industry and services have actually grown over time.</p></div><span class="chart-note">FY2011-12 → FY2024-25</span></div>${sectorLineChart(s,'agriculture','Agriculture')}${sectorLineChart(s,'industry','Industry')}${sectorLineChart(s,'services','Services')}</div>`;
}
function medianSafe(vals){const x=vals.filter(v=>v!=null&&Number.isFinite(v)); return x.length?median(x):null;}
function pct(v){return `${(v*100).toFixed(0)}%`;}
function dirText(v, benchmark, higher=true){
 if(v==null||benchmark==null) return 'No directly comparable benchmark is available.';
 const diff=v-benchmark;
 const rel=Math.abs(diff);
 if(rel<0.25) return 'very close to';
 return higher ? (diff>0?'above':'below') : (diff<0?'better than':'worse than');
}
function analyticalCard(section,s){
  const nonBjp=STATES.filter(x=>x.group==='Non-BJP-dominant');
  const groupMedian=key=>medianSafe(nonBjp.map(x=>METRICS[key]?.get?.(x)));
  const chip=(text,tone='neutral')=>`<span class="analysis-chip ${tone}">${text}</span>`;
  let cards=[];

  if(section==='core'){
    const indiaG=INDIA_BENCHMARKS.realGdp, gm=groupMedian('realGdp');
    const sector=s.sectorCagr;
    const entries=sector?Object.entries(sector).sort((a,b)=>b[1]-a[1]):[];
    const strongest=entries[0], weakest=entries.at(-1);
    const dIndia=s.realGdp-indiaG, dPeer=gm==null?null:s.realGdp-gm;
    cards=[
      {tone:dIndia>=0?'positive':'warning',icon:'map',label:'Country context',signal:`${dIndia>=0?'+':''}${dIndia.toFixed(1)} pp vs India`,headline:dIndia>=0?'Growth is keeping pace':'Growth is the main drag',text:dIndia>=0?`The headline economy is growing at least as fast as the national benchmark, so the composite is being supported by output growth.`:`The growth gap is large enough to weigh materially on the composite. The more useful question is which sectors explain the shortfall—not whether the headline CAGR is simply “low”.`},
      {tone:dPeer!=null&&dPeer>=0?'positive':'neutral',icon:'scale',label:'Peer context',signal:dPeer==null?'No peer median':`${dPeer>=0?'+':''}${dPeer.toFixed(1)} pp vs non-BJP median`,headline:dPeer!=null&&Math.abs(dPeer)<0.5?'Broadly peer-like':dPeer>0?'Above the peer pack':'Below the peer pack',text:dPeer==null?'A comparable non-BJP-dominant benchmark is not available for this metric.':`Against the non-BJP-dominant distribution, the state's growth is ${Math.abs(dPeer)<0.5?'close to':'clearly '+(dPeer>0?'above':'below')} the middle of the peer group.`},
      {tone:'insight',icon:'growth',label:'State diagnosis',signal:strongest&&weakest?`${strongest[0]} leads · ${weakest[0]} trails`:'Sector mix unavailable',headline:strongest&&weakest?`${strongest[0]} is carrying the growth story`:'Sector mix needs more evidence',text:strongest&&weakest?`The important state-specific signal is composition: ${strongest[0]} is the fastest broad sector while ${weakest[0]} is the slowest. That pattern is more actionable than the aggregate CAGR on its own.`:'The aggregate growth figure is available, but a reliable sectoral decomposition is not yet attached to this state.'}
    ];
  }
  if(section==='labour'){
    const india={lfpr:60.1,wpr:58.2,unemp:3.2}, gm=groupMedian('employment');
    const absorption=s.wpr-india.wpr, entry=s.lfpr-india.lfpr, ue=s.unemp-india.unemp;
    const r=s.recent5?.labour0,b=s.recent5?.labour1;
    const trend=r&&b?b.lfpr-r.lfpr:null, utrend=r&&b?b.unemp-r.unemp:null;
    cards=[
      {tone:absorption>=0?'positive':'warning',icon:'jobs',label:'Country context',signal:`WPR ${absorption>=0?'+':''}${absorption.toFixed(1)} pp vs India`,headline:absorption>=0?'Employment absorption is strong':'Employment absorption is softer',text:`The state's labour market should be read through participation and work together. Its WPR is ${absorption>=0?'above':'below'} the national benchmark, while unemployment is ${ue<=0?'at or below':'above'} it.`},
      {tone:gm!=null&&s.employment>=gm?'positive':'neutral',icon:'scale',label:'Peer context',signal:gm==null?'No peer score':'Employment score '+(s.employment-gm>=0?'+':'')+(s.employment-gm).toFixed(1),headline:gm!=null&&(s.employment-gm)>0.5?'Stronger than the peer median':gm!=null&&(s.employment-gm)<-0.5?'Weaker than the peer median':'Close to the peer median',text:`The composite labour score can hide different routes to a similar outcome. In this state, the balance between participation, unemployment and non-agricultural work is the key diagnostic.`},
      {tone:trend==null?'neutral':trend>=0?'positive':'warning',icon:'growth',label:'State trajectory',signal:trend==null?'Snapshot only':`LFPR ${trend>=0?'+':''}${trend.toFixed(1)} pp since 2020-21`,headline:trend==null?'Recent trend is limited':'Participation is '+(trend>=0?'rising':'softening'),text:trend==null?'The current PLFS snapshot is informative, but it should not be treated as a trend without a consistent historical panel.':`Since 2020-21, LFPR has ${trend>=0?'risen':'fallen'} ${Math.abs(trend).toFixed(1)} pp and unemployment has ${utrend>=0?'risen':'fallen'} ${Math.abs(utrend).toFixed(1)} pp; the two movements should be read together.`}
    ];
  }
  if(section==='human'){
    const e=s.education,h=s.health, gmE=medianSafe(nonBjp.map(x=>x.education)), gmH=medianSafe(nonBjp.map(x=>x.health));
    const strong=[['education',e-61],['health',h-77]].sort((a,b)=>b[1]-a[1]);
    const sdgDelta=s.recent5?.sdg0!=null&&s.recent5?.sdg1!=null?s.recent5.sdg1-s.recent5.sdg0:null;
    const bothAbove=e>=61&&h>=77, bothBelow=e<61&&h<77;
    cards=[
      {tone:bothAbove?'positive':bothBelow?'warning':'neutral',icon:'human',label:'Country context',signal:bothAbove?'Above India on both goals':bothBelow?'Below India on both goals':'Mixed across goals',headline:bothAbove?'Broad capability advantage':bothBelow?'Broad human-development gap':'A mixed capability profile',text:`Education and health are more diagnostic than the overall SDG score. ${bothAbove?'Both domains clear the national benchmark.':bothBelow?'Neither domain clears the national benchmark.':'The state shows strength in one domain and a bottleneck in the other.'}`},
      {tone:(e>=gmE&&h>=gmH)?'positive':(e<gmE&&h<gmH)?'warning':'neutral',icon:'scale',label:'Peer context',signal:`Edu ${e>=gmE?'+':''}${(e-gmE).toFixed(0)} · Health ${h>=gmH?'+':''}${(h-gmH).toFixed(0)}`,headline:(e>=gmE&&h>=gmH)?'Ahead of the peer group':(e<gmE&&h<gmH)?'Below the peer group':'Uneven versus peers',text:`Relative to non-BJP-dominant medians, the state's comparative position is ${e>=gmE&&h>=gmH?'consistently strong':e<gmE&&h<gmH?'consistently weak':'domain-specific'}. That distinction matters more than a single rank.`},
      {tone:sdgDelta==null?'neutral':sdgDelta>0?'positive':sdgDelta<0?'warning':'neutral',icon:'growth',label:'State trajectory',signal:sdgDelta==null?'Latest index only':`${sdgDelta>=0?'+':''}${sdgDelta.toFixed(0)} SDG points`,headline:sdgDelta==null?'Trend series is intermittent':sdgDelta>0?'Recent improvement':'Recent softening',text:sdgDelta==null?'Institutional index vintages are intermittent, so the dashboard avoids inventing an annual trend.':`Across the comparable SDG vintages, the state's overall score has ${sdgDelta>0?'improved':'softened'}. This is evidence of direction, not proof that any single policy caused the change.`}
    ];
  }
  if(section==='infrastructure'){
    const gm=groupMedian('infra');
    const external=[s.epi,s.charging].filter(Number.isFinite); const spread=external.length===2?Math.abs(external[0]-external[1]):null;
    const dPeer=gm==null?null:s.infra-gm;
    cards=[
      {tone:'insight',icon:'infra',label:'Country context',signal:external.length===2?(spread>20?'Mixed external signals':'Signals broadly aligned'):'Partial index coverage',headline:spread>20?'Infrastructure is uneven':'Read capacity, not one score',text:`The model score is only one layer. Logistics, export readiness and emerging mobility infrastructure measure different systems, so a high or low headline should be tested against the underlying indices.`},
      {tone:dPeer!=null&&dPeer>=0?'positive':'neutral',icon:'scale',label:'Peer context',signal:dPeer==null?'No peer benchmark':`${dPeer>=0?'+':''}${dPeer.toFixed(2)} vs non-BJP median`,headline:dPeer!=null&&Math.abs(dPeer)<0.2?'Around the peer middle':dPeer>0?'Above peer infrastructure score':'Below peer infrastructure score',text:dPeer==null?'A direct peer comparison is not available for the current model score.':`The state's model infrastructure score sits ${dPeer>0?'above':'below'} the middle of the non-BJP-dominant distribution, but external indices should be used to understand why.`},
      {tone:'neutral',icon:'growth',label:'State trajectory',signal:'Cross-vintage evidence',headline:'Structural signal, not a five-year trend',text:'The institutional indices are published in different vintages. The prudent reading is whether the state shows strength across logistics, export systems and new infrastructure—not a fabricated annual trajectory.'}
    ];
  }
  if(section==='investment'){
    const gm=groupMedian('publicCapexPct'); const dPeer=gm==null||s.publicCapexPct==null?null:s.publicCapexPct-gm; const pipe=s.privateProjectShareFY24;
    const fdi=s.fdiCum;
    cards=[
      {tone:dPeer!=null&&dPeer>=0?'positive':'neutral',icon:'investment',label:'Country context',signal:`Public capex ${s.publicCapexPct?.toFixed(1)??'—'}% of GSDP`,headline:s.publicCapexPct!=null&&s.publicCapexPct>=3?'High public-investment intensity':'More moderate public intensity',text:'Public capex is a capacity-building signal, not a guarantee of completed assets. It should be read alongside the private-capital pipeline and longer-run fiscal capacity.'},
      {tone:dPeer!=null&&dPeer>=0?'positive':'neutral',icon:'scale',label:'Peer context',signal:dPeer==null?'Peer capex unavailable':`${dPeer>=0?'+':''}${dPeer.toFixed(1)} pp vs non-BJP median`,headline:dPeer!=null&&dPeer>0.5?'Higher public intensity than peers':dPeer!=null&&dPeer<-0.5?'Lower public intensity than peers':'Close to peer public intensity',text:pipe==null?'The domestic private-project table does not separately report this state in its top-state breakdown, so the dashboard avoids imputing a private-investment figure.':`The state also represents ${pipe.toFixed(1)}% of the reported FY2023-24 project pipeline, giving a second signal about capital formation.`},
      {tone:'insight',icon:'growth',label:'State trajectory',signal:(fdi!=null&&pipe!=null)?'Three capital channels':'Multiple capital channels',headline:'The mix matters more than one total',text:'The strongest investment story is one where public capex, domestic private projects and FDI reinforce one another. Divergence between them is a useful diagnostic of conversion and capacity rather than proof of an investment failure.'}
    ];
  }
  return `<div class="analytical-card analytical-card-dynamic"><div class="analytical-head"><div><span class="kicker">ANALYTICAL READ</span><h3>What the numbers mean</h3></div><span class="analysis-tag">Three lenses · interpretation, not repetition</span></div><div class="analysis-grid-dynamic">${cards.map((c,i)=>`<article class="analysis-insight ${c.tone}"><div class="analysis-insight-top"><span class="analysis-icon">${icon(c.icon)}</span><span class="analysis-index">0${i+1}</span></div><div class="analysis-insight-label">${c.label}</div><h4>${c.headline}</h4>${chip(c.signal,c.tone)}<p>${c.text}</p></article>`).join('')}</div></div>`;
}
function last5Section(s){ const rows=LAST5_POLITICS[s.name]||[]; return `<div class="last5-entry"><div><span class="kicker">RECENT PERIOD</span><h3>Last 5 years</h3><p>2021 → 2026 economic, social and political context.</p></div><button class="secondary-btn" data-view="state-last5" data-state="${s.name}">Open Last 5 Years →</button><div class="last5-mini-timeline">${rows.map(r=>`<div class="last5-mini-row"><span class="last5-dot ${r.tone}"></span><strong>${r.p}</strong><small>${r.start} → ${r.end}</small></div>`).join('')}</div></div>`; }

function renderStateDetail(name){
 const s=STATES.find(x=>x.name===name)||STATES[0];
 const c=document.getElementById('state-detail-content');
 const peers=STATES.filter(x=>x.group===s.group && x.name!==s.name);
 const benchmarkLabel=s.group==='Mixed'?'mixed-state':s.group;
 const india={
   lfpr:60.1,wpr:58.2,unemp:3.2,nonAgri:55.0,servicesChange:2.8,
   education:61,health:77,epi:null,charging:null
 };
 const colorClass=groupClass(s.group);
 const metricTile=(category,ico,label,key,max,unit)=>{
   const val=METRICS[key]?.get?.(s); const med=median(peers.map(METRICS[key]?.get).filter(Boolean));
   const width=val==null?0:Math.max(0,Math.min(100,val/max*100));
   const medPos=med==null?0:Math.max(0,Math.min(100,med/max*100));
   return `<article class="core-metric-card ${category}">
      <div class="core-card-top"><span class="core-card-label">${icon(ico)} ${label}</span><strong>${METRICS[key]?.format?.(val) ?? '—'}</strong></div>
      <div class="core-bar"><span style="width:${width}%"></span><i style="left:${medPos}%"></i></div>
      <div class="core-card-foot"><span>${unit}</span><span>vs ${benchmarkLabel} median</span></div>
   </article>`;
 };
 const labourKpi=(label,value,unit,max,better=true)=>{
   const pct=value==null?0:Math.max(0,Math.min(100,(value/max)*100));
   return `<div class="labour-kpi"><div class="kpi-ring" style="--ring:${pct*3.6}deg"><div><strong>${value==null?'—':value.toFixed(1)}</strong><span>${unit}</span></div></div><div class="labour-kpi-text"><span>${label}</span><small>${better?'Higher is better':'Lower is better'}</small></div></div>`;
 };
 const benchmarkPill=(label,value,benchmark,format)=>`<div class="benchmark-row"><span>${label}</span><div class="benchmark-track"><i style="width:${Math.max(0,Math.min(100,(value/100)*100))}%"></i><em style="left:${Math.max(0,Math.min(100,(benchmark/100)*100))}%"></em></div><strong>${format(value)}</strong><small>India ${format(benchmark)}</small></div>`;
 const capexWidth=s.publicCapexPct==null?0:Math.min(100,s.publicCapexPct/7*100);
 const privateWidth=s.privateProjectShareFY24==null?0:Math.min(100,s.privateProjectShareFY24/15*100);
 const fdiWidth=s.fdiCum==null?0:Math.min(100,s.fdiCum/250000*100);
 const compositeSub=`<div class="detail-hero-meta"><span class="state-chip ${colorClass}">${s.group}</span><span>2011 Census population ${(s.pop/1e6).toFixed(1)}M</span><span>Composite ${s.score.toFixed(1)}/100</span></div>`;
 c.innerHTML=`
 <div class="detail-hero state-theme-${colorClass}">
   <div class="detail-title">
     <div class="eyebrow">${icon(s.group==='BJP-dominant'?'growth':s.group==='Non-BJP-dominant'?'human':'scale')} ${s.group}</div>
     <h1>${s.name}</h1>
     <p>A state-level dashboard across growth, jobs, development, infrastructure and investment. Read the five sections independently before using the composite as a summary.</p>
     ${compositeSub}
   </div>
   <div class="detail-score-hero"><div class="eyebrow">Composite score</div><div class="big-score">${s.score.toFixed(1)}</div><div class="score-context">/ 100 · ${benchmarkLabel} comparator</div></div>
 </div>
 <div class="detail-section-nav"><a href="#core-indicators">Core</a><a href="#labour-market">Labour</a><a href="#human-development">Human development</a><a href="#infrastructure">Infrastructure</a><a href="#investment">Investment</a><button class="subpage-link" data-view="state-last5" data-state="${s.name}">Last 5 years →</button></div>

 <section id="core-indicators" class="detail-section section-core">
   <div class="section-kicker-row"><div><div class="eyebrow">01 · OUTPUT & INCOME</div><h2>Core indicators</h2><p class="section-subcopy">Long-run economic performance, using the common FY2011-12 → FY2024-25 window.</p></div><span class="tag">CAGR-based</span></div>
   <div class="core-layout">
     <div class="core-metrics-grid">
       ${metricTile('growth','growth','Real GSDP CAGR','realGdp',10,'% per year')}
       ${metricTile('growth','growth','Nominal GSDP CAGR','nominalGdp',15,'% per year · diagnostic')}
       ${metricTile('income','income','Real PC NSDP CAGR','pc',8,'% per year')}
       ${metricTile('development','poverty','Poverty reduction','poverty',20,'percentage points')}
       ${metricTile('development','human','Human development','sdg',100,'SDG India Index score')}
       ${metricTile('fiscal','fiscal','Fiscal Health Index','fiscal',80,'index score')}
     </div>
     <aside class="core-summary-card">
       <div class="summary-top"><span class="kicker">AT A GLANCE</span><strong>${s.score.toFixed(1)}</strong></div>
       <div class="summary-label">Composite score</div>
       <div class="summary-dial" style="--score:${s.score}"><div class="dial-inner"><strong>${Math.round(s.score)}</strong><span>/100</span></div></div>
       <p class="muted">The composite weights real growth, real per-capita income, poverty reduction, human development, fiscal health, employment and infrastructure.</p>
       <div class="summary-mini"><div><span>Real GSDP</span><b>${s.realGdp.toFixed(1)}%</b></div><div><span>Real PC income</span><b>${s.pc.toFixed(2)}%</b></div><div><span>Poverty</span><b>${s.poverty.toFixed(2)} pp</b></div></div>
     </aside>
   </div>
   ${sectoralChart(s)}
   ${analyticalCard('core',s)}
 </section>

 <section id="labour-market" class="detail-section section-labour">
   <div class="section-kicker-row"><div><div class="eyebrow">02 · PEOPLE & WORK</div><h2>Labour market</h2><p class="section-subcopy">PLFS 2023-24, usual status, age 15+, rural + urban.</p></div><span class="tag">PLFS 2023-24</span></div>
   <div class="labour-layout">
     <div class="labour-kpis">
       ${labourKpi('LFPR',s.lfpr,'%',100,true)}
       ${labourKpi('WPR',s.wpr,'%',100,true)}
       ${labourKpi('Unemployment',s.unemp,'%',10,false)}
       ${labourKpi('Non-agricultural employment',s.nonAgri,'%',100,true)}
     </div>
     <div class="labour-chart-card">
       <div class="chart-card-head"><div><span class="kicker">STRUCTURE</span><h3>Where employment sits</h3></div><span class="chart-note">share of workers</span></div>
       <div class="stacked-work-bar"><span class="agri" style="width:${Math.max(0,100-s.nonAgri)}%"></span><span class="nonagri" style="width:${s.nonAgri}%"></span></div>
       <div class="stacked-legend"><span><i class="dot agri"></i>Agriculture ${Math.max(0,100-s.nonAgri).toFixed(1)}%</span><span><i class="dot nonagri"></i>Non-agriculture ${s.nonAgri.toFixed(1)}%</span></div>
       <div class="services-callout"><div><span>Services employment change</span><strong>${s.servicesChange>0?'+':''}${s.servicesChange.toFixed(1)} pp</strong></div><p>Change in services' employment share over the selected period. It is a structural indicator, not a direct quality-of-jobs measure.</p></div>
     </div>
     <div class="labour-score-card"><span class="kicker">MODEL SCORE</span><div class="labour-score-number">${s.employment.toFixed(2)}<span>/10</span></div><div class="score-track"><i style="width:${s.employment*10}%"></i></div><span class="muted">Unemployment 3 pts · structure 3 · LFPR 2 · WPR 2</span></div>
   </div>
   <div class="india-benchmark-strip"><span>India benchmark</span><b>LFPR ${india.lfpr}%</b><b>WPR ${india.wpr}%</b><b>Unemployment ${india.unemp}%</b><b>Non-agri ≈ ${india.nonAgri}%</b></div>
   ${analyticalCard('labour',s)}
 </section>

 <section id="human-development" class="detail-section section-human">
   <div class="section-kicker-row"><div><div class="eyebrow">03 · CAPABILITIES</div><h2>Human development</h2><p class="section-subcopy">Education and health goal indices are shown instead of repeating the overall SDG rank.</p></div><span class="tag">NITI Aayog · 2023-24</span></div>
   <div class="hd-layout">
     <div class="hd-card education"><div class="hd-card-top"><span class="icon-title">${icon('human')} Quality education</span><strong>${s.education==null?'—':s.education}</strong></div><div class="hd-dumbbell"><div class="hd-line"></div><i class="state-dot" style="left:${s.education==null?0:Math.min(100,s.education)}%"></i><i class="india-dot" style="left:61%"></i></div><div class="hd-meta"><span>State</span><b>${s.education==null?'—':s.education}</b><span>India</span><b>61</b><span>SDG Goal 4</span></div><p>Learning, participation, completion and related education outcomes.</p></div>
     <div class="hd-card health"><div class="hd-card-top"><span class="icon-title">${icon('human')} Good health & well-being</span><strong>${s.health==null?'—':s.health}</strong></div><div class="hd-dumbbell"><div class="hd-line"></div><i class="state-dot" style="left:${s.health==null?0:Math.min(100,s.health)}%"></i><i class="india-dot" style="left:77%"></i></div><div class="hd-meta"><span>State</span><b>${s.health==null?'—':s.health}</b><span>India</span><b>77</b><span>SDG Goal 3</span></div><p>Health outcomes and access/service indicators.</p></div>
     <div class="hd-takeaway"><span class="kicker">READ THIS</span><strong>${(s.education??0)>=61 && (s.health??0)>=77 ? 'Above India on both dimensions' : (s.education??0)>=61 || (s.health??0)>=77 ? 'Mixed human-development picture' : 'Below India on both dimensions'}</strong><p>The overall SDG score stays in the composite model; this section adds the underlying human-development dimensions that are more useful for a state profile.</p></div>
   </div>
   ${analyticalCard('human',s)}
 </section>

 <section id="infrastructure" class="detail-section section-infra">
   <div class="section-kicker-row"><div><div class="eyebrow">04 · PHYSICAL & CONNECTIVE CAPACITY</div><h2>Infrastructure</h2><p class="section-subcopy">A state-level view across logistics, export readiness and emerging mobility infrastructure.</p></div><span class="tag">Latest comparable institutional indices</span></div>
   <div class="infra-visual-grid">
      <article class="infra-hero-card"><div class="infra-card-top"><div><span class="kicker">MODEL SCORE</span><h3>Infrastructure & investment</h3></div><strong>${s.infra.toFixed(2)}<span>/5</span></strong></div><div class="infra-big-track"><i style="width:${s.infra*20}%"></i></div><p>Current prototype score combining infrastructure and investment capacity.</p></article>
      <article class="infra-data-card"><div class="infra-card-top"><div><span class="kicker">LOGISTICS</span><h3>LEADS 2024</h3></div><strong>${s.leads||'—'}</strong></div><div class="band-pills"><span class="active">${s.leads||'Not reported'}</span><span>DPIIT</span></div><p>Logistics performance band, benchmarked within regional peer groups.</p></article>
      <article class="infra-data-card"><div class="infra-card-top"><div><span class="kicker">EXPORTS</span><h3>Export Preparedness</h3></div><strong>${s.epi==null?'—':s.epi.toFixed(1)}</strong></div><div class="score-track"><i style="width:${s.epi==null?0:Math.min(100,s.epi)}%"></i></div><div class="infra-meta-row"><span>Overall score /100</span><span>NITI Aayog</span></div><p>Includes an Export Infrastructure pillar covering utilities and logistics.</p></article>
      <article class="infra-data-card"><div class="infra-card-top"><div><span class="kicker">E-MOBILITY</span><h3>Charging readiness</h3></div><strong>${s.charging==null?'—':s.charging}</strong></div><div class="score-track"><i style="width:${s.charging==null?0:Math.min(100,s.charging)}%"></i></div><div class="infra-meta-row"><span>Score /100</span><span>NITI Aayog · IEMI</span></div><p>Charging infrastructure development and enabling conditions.</p></article>
   </div>
   ${analyticalCard('infrastructure',s)}
 </section>

 <section id="investment" class="detail-section section-investment">
   <div class="section-kicker-row"><div><div class="eyebrow">05 · CAPITAL FORMATION</div><h2>Investment</h2><p class="section-subcopy">Public investment intensity, domestic private-capex signals and foreign capital, followed by investment-climate indices.</p></div><span class="tag">Public · domestic private · FDI</span></div>
   <div class="investment-hero-grid">
     <div class="investment-stack-card"><span class="kicker">PUBLIC</span><div class="investment-big">${s.publicCapexPct==null?'—':s.publicCapexPct.toFixed(1)+'%'}</div><strong>Capital outlay / GSDP</strong><div class="investment-track wide"><i style="width:${capexWidth}%"></i></div><small>FY2024-25 BE · RBI / state budgets</small></div>
     <div class="investment-stack-card"><span class="kicker">DOMESTIC PRIVATE</span><div class="investment-big">${s.privateProjectCostFY24==null?'—':'₹'+Math.round(s.privateProjectCostFY24).toLocaleString('en-IN')+' Cr'}</div><strong>Bank/FI-financed project pipeline</strong><div class="investment-track wide"><i style="width:${privateWidth}%"></i></div><small>${s.privateProjectShareFY24==null?'Not separately reported':'FY2023-24 share: '+s.privateProjectShareFY24.toFixed(1)+'%'} · RBI</small></div>
     <div class="investment-stack-card"><span class="kicker">FOREIGN PRIVATE</span><div class="investment-big">${s.fdiCum==null?'—':'₹'+Math.round(s.fdiCum).toLocaleString('en-IN')+' Cr'}</div><strong>Cumulative FDI equity inflow</strong><div class="investment-track wide"><i style="width:${fdiWidth}%"></i></div><small>Oct 2019 – Jun 2025 · DPIIT</small></div>
   </div>
   <div class="investment-index-row">
     <div class="investment-climate-card"><div><span class="kicker">INVESTMENT CLIMATE</span><h3>N-SIPI overall · 2018</h3></div><strong>${s.nsipi==null?'—':s.nsipi.toFixed(1)}</strong><div class="score-track"><i style="width:${s.nsipi==null?0:Math.min(100,s.nsipi)}%"></i></div><small>NCAER State Investment Potential Index</small></div>
     <div class="investment-climate-card"><div><span class="kicker">ECONOMIC CLIMATE</span><h3>N-SIPI pillar · 2018</h3></div><strong>${s.nsipiEcon==null?'—':s.nsipiEcon.toFixed(1)}</strong><div class="score-track"><i style="width:${s.nsipiEcon==null?0:Math.min(100,s.nsipiEcon)}%"></i></div><small>Economic climate pillar · NCAER</small></div>
     <div class="investment-note-card"><span class="kicker">IMPORTANT</span><strong>Investment is a set of signals, not a single number.</strong><p>Public capex is a budgeted intensity measure; the RBI private-capex series is a sanctioned-project pipeline; FDI captures foreign private capital; N-SIPI is an older investment-climate benchmark.</p></div>
   </div>
   ${analyticalCard('investment',s)}
 </section>

 <div class="detail-closing-grid"><div class="panel insight-panel"><div class="panel-title-row"><h3>${icon('human')} Interpretation</h3><span class="tag">Read raw metrics first</span></div><div class="insight-grid"><div><b>Strength</b><p>${strongestMetric(s)}</p></div><div><b>Watchpoint</b><p>${weakestMetric(s)}</p></div><div><b>Context</b><p>${s.group==='Mixed'?'Mixed states are kept separate from the headline BJP/non-BJP comparison.':'The composite is descriptive; it does not establish causality between political control and outcomes.'}</p></div></div></div></div>`;
}




function recent5AnalyticalRead(s){
 const r=s.recent5||{};
 const gDelta=(r.realGdp!=null&&s.realGdp!=null)?r.realGdp-s.realGdp:null;
 const pcDelta=(r.pc!=null&&s.pc!=null)?r.pc-s.pc:null;
 const l0=r.labour0,l1=r.labour1;
 const lfprChange=l0&&l1?l1.lfpr-l0.lfpr:null;
 const wprChange=l0&&l1?l1.wpr-l0.wpr:null;
 const unempChange=l0&&l1?l1.unemp-l0.unemp:null;
 const sdgDelta=(r.sdg0!=null&&r.sdg1!=null)?r.sdg1-r.sdg0:null;
 const bestEconomic = gDelta==null?null:(gDelta>=0.75?'Recent growth has accelerated':gDelta<=-0.75?'Recent growth has cooled':'Recent growth is broadly consistent');
 const growthTone=gDelta==null?'neutral':gDelta>=0.75?'positive':gDelta<=-0.75?'warning':'insight';
 const labourTone=(lfprChange!=null&&wprChange!=null&&unempChange!=null)
   ? ((lfprChange>=0&&wprChange>=0&&unempChange<=0)?'positive':(lfprChange<0&&wprChange<0&&unempChange>0)?'warning':'insight'):'neutral';
 const labourHeadline=(lfprChange!=null&&wprChange!=null&&unempChange!=null)
   ? ((lfprChange>=0&&wprChange>=0&&unempChange<=0)?'Labour absorption improved':(lfprChange<0&&wprChange<0&&unempChange>0)?'Labour conditions weakened':'Labour signals are mixed')
   : 'Recent labour data are partial';
 const capacityTone=sdgDelta==null?'neutral':sdgDelta>0?'positive':sdgDelta<0?'warning':'insight';
 const capacityHeadline=sdgDelta==null?'Human-development trend is limited':sdgDelta>0?'Capabilities improved':'Capabilities were broadly flat or softer';
 const formatDelta=(v,suffix=' pp')=>v==null?'—':`${v>=0?'+':''}${v.toFixed(2)}${suffix}`;
 const safe=Math.abs;
 return `<div class="analytical-card analytical-card-dynamic recent5-analytical">
   <div class="analytical-head"><div><span class="kicker">ANALYTICAL READ</span><h3>What changed in the last 5 years — relative to this state's long run?</h3></div><span class="analysis-tag">One lens · recent period vs 20-year benchmark</span></div>
   <div class="analysis-grid-dynamic">
     <article class="analysis-insight ${growthTone}">
       <div class="analysis-insight-top"><span class="analysis-icon">${icon('growth')}</span><span class="analysis-index">01</span></div>
       <div class="analysis-insight-label">Economic momentum</div>
       <h4>${bestEconomic||'Comparable growth series unavailable'}</h4>
       <div class="analysis-signal-row"><span class="analysis-chip ${growthTone}">Real GSDP ${formatDelta(gDelta)}</span><span class="analysis-chip ${gDelta!=null&&Math.abs(gDelta)>=0.75?(gDelta>0?'positive':'warning'):'neutral'}">PC NSDP ${formatDelta(pcDelta)}</span></div>
       <p>${gDelta==null?'The five-year economic panel is not available for this state.':`The recent real-GSDP CAGR is <b>${r.realGdp.toFixed(2)}%</b> versus <b>${s.realGdp.toFixed(2)}%</b> over the 20-year benchmark. Per-capita growth moved ${pcDelta==null?'in an indeterminate direction':pcDelta>=0?'ahead':'behind'} by ${pcDelta==null?'—':safe(pcDelta).toFixed(2)} pp. This is evidence of acceleration/cooling, not a causal attribution.`}</p>
     </article>
     <article class="analysis-insight ${labourTone}">
       <div class="analysis-insight-top"><span class="analysis-icon">${icon('jobs')}</span><span class="analysis-index">02</span></div>
       <div class="analysis-insight-label">Labour-market trajectory</div>
       <h4>${labourHeadline}</h4>
       <div class="analysis-signal-row"><span class="analysis-chip ${labourTone}">LFPR ${formatDelta(lfprChange)}</span><span class="analysis-chip ${labourTone}">WPR ${formatDelta(wprChange)}</span><span class="analysis-chip ${labourTone}">UR ${formatDelta(unempChange)}</span></div>
       <p>${l0&&l1?`From PLFS 2020-21 to 2024-25, participation moved ${lfprChange>=0?'up':'down'} ${safe(lfprChange).toFixed(1)} pp and WPR moved ${wprChange>=0?'up':'down'} ${safe(wprChange).toFixed(1)} pp; unemployment ${unempChange>=0?'rose':'fell'} ${safe(unempChange).toFixed(1)} pp. The key question is whether employment absorption improved without relying on a fall in participation.`:'Recent labour observations are not complete enough for a trajectory judgement.'}</p>
     </article>
     <article class="analysis-insight ${capacityTone}">
       <div class="analysis-insight-top"><span class="analysis-icon">${icon('human')}</span><span class="analysis-index">03</span></div>
       <div class="analysis-insight-label">Capabilities & productive capacity</div>
       <h4>${capacityHeadline}</h4>
       <div class="analysis-signal-row"><span class="analysis-chip ${capacityTone}">SDG ${sdgDelta==null?'latest only':formatDelta(sdgDelta,' pts')}</span><span class="analysis-chip neutral">Infra / Investment: latest snapshots</span></div>
       <p>${sdgDelta==null?`Human-development data do not provide a clean recent-vs-long-run annual panel for this state, so the page avoids inferring a trend. Infrastructure and investment are likewise read through their latest institutional snapshots.`:`The comparable SDG interval moved ${sdgDelta>0?'up':'down'} ${safe(sdgDelta).toFixed(0)} points. That is a useful recent signal, but it should be read alongside the state's long-run composite and the latest infrastructure/investment evidence rather than treated as a complete five-year performance verdict.`}</p>
     </article>
   </div>
 </div>`;
}

function recent5CagrCard(s,title,ico,key,label,longKey){
 const r=s.recent5||{}; const v=r[key], long=s[longKey];
 const delta=(v!=null&&long!=null)?v-long:null;
 const tone=delta==null?'neutral':delta>=0?'positive':'negative';
 return `<article class="recent5-card"><div class="recent5-head"><div>${icon(ico)}<span>${title}</span></div><span class="tag">FY2020-21 → FY2024-25</span></div><div class="recent5-main-number"><strong>${v==null?'—':v.toFixed(2)}%</strong><span>${label}</span></div><div class="recent5-vs"><span>20-year CAGR</span><b>${long==null?'—':long.toFixed(2)}%</b><em class="${tone}">${delta==null?'Not directly comparable':`${delta>=0?'+':''}${delta.toFixed(2)} pp`}</em></div><div class="recent5-bar"><span class="recent5-bar-fill ${tone}" style="width:${v!=null?Math.min(100,Math.max(0,v/12*100)):0}%"></span><i style="left:${long!=null?Math.min(100,Math.max(0,long/12*100)):0}%"></i></div></article>`;
}
function recent5LabourCard(s){
 const a=s.recent5?.labour0,b=s.recent5?.labour1;if(!a||!b)return '';
 const change=(k)=>b[k]-a[k];
 return `<article class="recent5-card recent5-labour-card"><div class="recent5-head"><div>${icon('jobs')}<span>Labour market</span></div><span class="tag">PLFS 2020-21 → 2024-25</span></div><div class="recent5-labour-grid">${[['LFPR','lfpr','%'],['WPR','wpr','%'],['Unemployment','unemp','%']].map(([l,k,u])=>`<div><small>${l}</small><strong>${b[k].toFixed(1)}${u}</strong><span class="${change(k)*(k==='unemp'?-1:1)>=0?'positive':'negative'}">${change(k)>=0?'+':''}${change(k).toFixed(1)} pp</span><em>from ${a[k].toFixed(1)}${u}</em></div>`).join('')}</div><p>Recent labour-market movement is shown directly; the long-run model score is kept separate because it was constructed from a single PLFS 2023-24 cross-section.</p></article>`;
}
function recent5HumanCard(s){
 const a=s.recent5?.sdg0,b=s.recent5?.sdg1;
 return `<article class="recent5-card recent5-human-card"><div class="recent5-head"><div>${icon('human')}<span>Human development</span></div><span class="tag">SDG 2020-21 → 2023-24</span></div><div class="recent5-main-number"><strong>${b}</strong><span>SDG India Index score</span></div><div class="recent5-vs"><span>2020-21 score</span><b>${a??'—'}</b><em class="${b!=null&&a!=null&&b>=a?'positive':'negative'}">${b!=null&&a!=null?`${b>=a?'+':''}${(b-a).toFixed(0)} points`:''}</em></div><p>This is the closest consistent recent human-development index panel. It is a shorter-than-five-year index interval, so it is not presented as a five-year CAGR.</p></article>`;
}
function recent5InfrastructureCard(s){
 const leads=s.leads??'—', epi=s.epi, charging=s.charging;
 return `<article class="recent5-card recent5-infra-card">
   <div class="recent5-head"><div>${icon('infra')}<span>Infrastructure</span></div><span class="tag">Latest verified evidence</span></div>
   <div class="recent5-infra-grid">
     <div><small>Model score</small><strong>${s.infra.toFixed(2)}/5</strong><em>current composite input</em></div>
     <div><small>LEADS 2024</small><strong>${leads}</strong><em>logistics performance band</em></div>
     <div><small>Export Preparedness</small><strong>${epi==null?'—':epi.toFixed(1)}</strong><em>2024 score</em></div>
     <div><small>Charging readiness</small><strong>${charging==null?'—':charging}</strong><em>2024 score</em></div>
   </div>
   <div class="recent5-vs"><span>Recent period</span><b>2024 institutional snapshot</b><em>Comparable five-year index panel not available across all three measures</em></div>
   <p>Infrastructure indices have different publication vintages, so the page shows the latest verified recent evidence rather than inventing a five-year CAGR.</p>
 </article>`;
}
function recent5InvestmentCard(s){
 const fdi=s.fdiCum==null?null:s.fdiCum/1000;
 const privateShare=s.privateProjectShareFY24;
 return `<article class="recent5-card recent5-invest-card">
   <div class="recent5-head"><div>${icon('investment')}<span>Investment</span></div><span class="tag">Recent capital formation</span></div>
   <div class="recent5-invest-grid">
     <div><small>Public investment</small><strong>${s.publicCapexPct==null?'—':s.publicCapexPct.toFixed(1)+'%'}</strong><em>capital outlay / GSDP · FY2024-25 BE</em></div>
     <div><small>Domestic private projects</small><strong>${privateShare==null?'Not separately reported':privateShare.toFixed(1)+'%'}</strong><em>share of FY2023-24 sanctioned project cost</em></div>
     <div><small>FDI equity</small><strong>${fdi==null?'—':'₹'+fdi.toFixed(1)+'k cr'}</strong><em>Oct 2019–Jun 2025</em></div>
     <div><small>Investment climate</small><strong>${s.nsipi==null?'—':s.nsipi.toFixed(1)}</strong><em>N-SIPI 2018 historical benchmark</em></div>
   </div>
   <div class="recent5-vs"><span>Recent period</span><b>Multiple investment lenses</b><em>Public, domestic private and foreign private capital are shown separately</em></div>
   <p>These measures capture different parts of investment and should not be collapsed into one synthetic five-year growth rate.</p>
 </article>`;
}

function renderStateLast5(name){
 const s=STATES.find(x=>x.name===name)||STATES[0]; const c=document.getElementById('state-last5-content'); const rows=LAST5_POLITICS[s.name]||[];
 const politicalTotals=rows.reduce((a,r)=>{a[r.tone]=(a[r.tone]||0)+r.months;return a;},{}); const political=`<div class="recent5-politics"><div class="section-kicker-row"><div><div class="eyebrow">POLITICAL CONTEXT</div><h2>Who governed the state?</h2><p class="section-subcopy">One stacked 60-month bar shows how the recent five-year window was divided by political leadership. Transition months are allocated to the month in which the new government took office.</p></div><span class="tag">Sep 2021 → Sep 2026</span></div><div class="recent5-stack-wrap"><div class="recent5-stack-labels"><span>${rows.map(r=>`<span class="recent5-stack-label ${r.tone}">${r.p} · ${Math.round(r.months/60*100)}%</span>`).join('')}</span></div><div class="recent5-stackbar" role="img" aria-label="Political leadership share across the last 60 months">${rows.map(r=>`<div class="recent5-stack-segment ${r.tone}" style="width:${(r.months/60)*100}%"><span>${r.months>=8?`${Math.round(r.months/60*100)}%`:''}</span></div>`).join('')}</div><div class="recent5-stack-legend"><span><i class="last5-dot bjp"></i>BJP-led: ${Math.round((politicalTotals.bjp||0)/60*100)}%</span><span><i class="last5-dot nonbjp"></i>Non-BJP-led: ${Math.round((politicalTotals.nonbjp||0)/60*100)}%</span></div></div><div class="recent5-politics-detail">${rows.map(r=>`<div class="recent5-detail-row"><span class="last5-dot ${r.tone}"></span><strong>${r.p}</strong><span>${r.start} → ${r.end}</span><b>${Math.round(r.months/60*100)}%</b></div>`).join('')}</div></div>`;
 c.innerHTML=`<div class="detail-hero state-theme-${groupClass(s.group)}"><div class="detail-title"><div class="eyebrow">${icon('scale')} Recent-period analysis</div><h1>${s.name} · Last 5 Years</h1><p>Recent evidence from FY2020-21 through FY2024-25, with the only comparison scope being <b>this state recently versus this state's long-run 20-year benchmark</b>.</p><div class="detail-hero-meta"><span class="state-chip ${groupClass(s.group)}">${s.group}</span><span>Economic window FY2020-21 → FY2024-25</span><span>No political-group comparison</span></div></div><div class="detail-score-hero"><div class="eyebrow">20-year composite</div><div class="big-score">${s.score.toFixed(1)}</div><div class="score-context">/100 · reference benchmark</div></div></div>
 <div class="state-subpage-nav"><button class="back-btn" data-view="state-detail" data-state="${s.name}">← Back to ${s.name}</button><span class="subpage-current">Last 5 Years</span></div>
 ${political}
 <div class="section-header"><div><div class="eyebrow">RECENT PERFORMANCE</div><h2>Five categories, one comparison frame</h2><p class="section-subcopy">The recent-period view now uses the verified data that actually exists: economic growth from FY2020-21 → FY2024-25, labour movement from PLFS 2020-21 → 2024-25, human development from SDG 2020-21 → 2023-24, and the latest institutional investment/infrastructure readings.</p></div><span class="tag">Recent vs this state's long run</span></div>
 <div class="recent5-grid">
   ${recent5CagrCard(s,'Real GSDP CAGR','growth','realGdp','annual real growth','realGdp')}
   ${recent5CagrCard(s,'Real PC NSDP CAGR','income','pc','annual real per-capita growth','pc')}
   ${recent5LabourCard(s)}
   ${recent5HumanCard(s)}
   ${recent5InfrastructureCard(s)}
   ${recent5InvestmentCard(s)}
 </div>
 ${recent5AnalyticalRead(s)}
 <div class="panel recent5-data-status"><div class="panel-title-row"><h3>Data provenance</h3><span class="tag">Verified recent panel</span></div><p class="muted">Economic data: RBI/MoSPI Handbook of Statistics on Indian States 2024-25. Labour: PLFS 2020-21 and 2024-25. Human development: NITI Aayog SDG India Index 2020-21 and 2023-24. Infrastructure and investment use the latest verified institutional vintages where a fully harmonised annual FY2020-21 → FY2024-25 series is not published consistently across states.</p></div>`;
}

function sampleSdgRank(s){
 const ranked=[...STATES].sort((a,b)=>(b.sdg??-Infinity)-(a.sdg??-Infinity));
 return ranked.findIndex(x=>x.name===s.name)+1;
}
function strongestMetric(s){
 const keys=['realGdp','pc','poverty','sdg','fiscal','employment','infra'];
 const valid=keys.filter(k=>METRICS[k].get(s)!=null); let best=valid[0]; for(const k of valid){ const groupVals=STATES.filter(x=>x.group===s.group).map(METRICS[k].get).filter(v=>v!=null); const pct=groupVals.length?groupVals.filter(v=>v<=METRICS[k].get(s)).length/groupVals.length:0; const bp=best?groupVals.filter(v=>v<=METRICS[best].get(s)).length/groupVals.length:0; if(pct>bp)best=k; }
 return `Relative strength is strongest in ${METRICS[best].label.toLowerCase()}: ${METRICS[best].format(METRICS[best].get(s))}.`;
}
function weakestMetric(s){
 const keys=['realGdp','pc','poverty','sdg','fiscal','employment','infra']; let worst=null,bp=2; for(const k of keys){ const v=METRICS[k].get(s); const vals=STATES.filter(x=>x.group===s.group).map(METRICS[k].get).filter(x=>x!=null); if(v==null||!vals.length)continue; const pct=vals.filter(x=>x<=v).length/vals.length; if(pct<bp){bp=pct;worst=k;} }
 return worst?`The main relative weakness is ${METRICS[worst].label.toLowerCase()}, at ${METRICS[worst].format(METRICS[worst].get(s))}.`:'No clear weakness identified.';
}

function renderMetricExplorer(){
 const key=document.getElementById('metric-selector').value; const m=METRICS[key];
 const rows=[...STATES].filter(s=>m.get(s)!=null).sort((a,b)=>(m.higher?1:-1)*(m.get(b)-m.get(a)));
 document.getElementById('metric-title').textContent=m.label;
 document.getElementById('metric-description').textContent= key==='nominalGdp' ? 'Diagnostic only — nominal expansion is shown for context and is not separately scored.' : `Ranking across the 17-state analytical sample. ${m.higher?'Higher is better for this dashboard lens.':'Lower is better for this dashboard lens.'}`;
 document.getElementById('metric-ranking').innerHTML=rows.map((s,i)=>`<tr class="click-row" data-state="${s.name}"><td>${i+1}</td><td><b>${s.name}</b></td><td><span class="state-chip ${groupClass(s.group)}">${s.group}</span></td><td><strong>${m.format(m.get(s))}</strong></td></tr>`).join('');
 const max=Math.max(...rows.map(s=>m.get(s))), min=Math.min(...rows.map(s=>m.get(s)));
 document.getElementById('metric-bars').innerHTML=rows.slice(0,10).map(s=>`<div class="bar-row"><div class="bar-label">${s.name}</div><div class="bar-track"><div class="bar-fill ${groupClass(s.group)}" style="width:${((m.get(s)-min)/(max-min||1))*100}%"></div></div><strong>${m.format(m.get(s))}</strong></div>`).join('');
}

const COMPARE_DOMAINS = {
 overall:[0,100],
 realGdp:[0,8],
 nominalGdp:[0,14],
 pc:[0,7],
 poverty:[0,20],
 sdg:[0,100],
 fiscal:[0,80],
 employment:[0,10],
 infra:[0,5],
 lfpr:[0,100],
 wpr:[0,100],
 unemp:[0,10],
 nonAgri:[0,100],
 servicesChange:[-10,15]
};
function compareScale(av,bv,iv,m,key){
 const fallback=[0,1];
 let domain=COMPARE_DOMAINS[key] || fallback;
 // Keep the scale stable across comparisons, while expanding only if a newly
 // added data point exceeds the current domain. This makes bar lengths truthful
 // and comparable from row to row instead of making the min value look like 0%.
 const sample=[...STATES.map(s=>m.get(s)),iv].filter(v=>v!=null && Number.isFinite(v));
 let min=domain[0], max=domain[1];
 if(sample.length){
   min=Math.min(min,...sample);
   max=Math.max(max,...sample);
 }
 const span=Math.max(max-min,1);
 const pos=v=>v==null?0:Math.max(0,Math.min(100,(v-min)/span*100));
 const zero=key==='servicesChange' && min<0 && max>0;
 const zeroPos=zero?pos(0):0;
 const width=v=>v==null?0:zero?Math.abs(pos(v)-zeroPos):(v-min)/span*100;
 const left=v=>v==null?0:zero?(v>=0?zeroPos:pos(v)):0;
 return {
   a:av==null?0:Math.max(0,Math.min(100,width(av))),
   b:bv==null?0:Math.max(0,Math.min(100,width(bv))),
   aLeft:av==null?0:left(av),
   bLeft:bv==null?0:left(bv),
   benchmark:iv==null?null:pos(iv),
   zero:zero,
   zeroPos:zeroPos
 };
}
function renderCompare(){
 const a=STATES.find(s=>s.name===document.getElementById('compare-a').value), b=STATES.find(s=>s.name===document.getElementById('compare-b').value); if(!a||!b)return;
 const rows=[['Composite score','overall'],['Real GSDP CAGR','realGdp'],['Nominal GSDP CAGR','nominalGdp'],['Real PC NSDP CAGR','pc'],['Poverty reduction','poverty'],['SDG score','sdg'],['Fiscal Health Index','fiscal'],['Employment score','employment'],['Infrastructure score','infra'],['LFPR','lfpr'],['WPR','wpr'],['Unemployment','unemp'],['Non-agricultural employment','nonAgri'],['Services employment change','servicesChange']];
 const winner=(m,av,bv)=>{ if(av==null&&bv==null)return ['—','tie']; if(av==null)return [b.name,'b']; if(bv==null)return [a.name,'a']; if(Math.abs(av-bv)<0.00001)return ['Tie','tie']; const aw=m.higher?av>bv:av<bv; return [aw?a.name:b.name,aw?'a':'b']; };
 const benchmarkNote=(key,iv)=>iv==null?(INDIA_BENCHMARK_LABELS[key]||'No direct national benchmark available'):METRICS[key].format(iv)+' · India';
 const groupTone = group => group==='BJP-dominant' ? 'bjp' : group==='Non-BJP-dominant' ? 'nonbjp' : 'mixed';
 const aTone=groupTone(a.group), bTone=groupTone(b.group);
 const body=rows.map(([label,key])=>{
  const m=METRICS[key], av=m.get(a), bv=m.get(b), iv=INDIA_BENCHMARKS[key];
  const sc=compareScale(av,bv,iv,m,key), [lead,leadClass]=winner(m,av,bv);
  const benchmarkMarker=sc.benchmark==null?'':`<span class="compare-benchmark-marker" style="left:${sc.benchmark}%"></span>`;
  const zeroMarker=sc.zero?`<span class="compare-zero-marker" style="left:${sc.zeroPos}%"></span>`:'';
  const ico=key==='overall'?'scale':key==='realGdp'||key==='nominalGdp'?'growth':key==='pc'?'income':key==='poverty'?'poverty':key==='sdg'?'human':key==='fiscal'?'fiscal':key==='employment'||key==='lfpr'||key==='wpr'||key==='unemp'||key==='nonAgri'||key==='servicesChange'?'jobs':'infra'; return `<tr><td><div class="compare-metric-label">${icon(ico)}<b>${label}</b></div><div class="compare-benchmark">${benchmarkNote(key,iv)}</div></td><td class="compare-cell"><strong class="compare-header-a ${aTone}"><span class="compare-state-dot a ${aTone}"></span>${m.format(av)}</strong><div class="compare-visual">${zeroMarker}${benchmarkMarker}<span class="fill-a ${aTone}" style="left:${sc.aLeft}%;width:${sc.a}%"></span></div></td><td class="compare-cell"><strong class="compare-header-b ${bTone}"><span class="compare-state-dot b ${bTone}"></span>${m.format(bv)}</strong><div class="compare-visual">${zeroMarker}${benchmarkMarker}<span class="fill-b ${bTone}" style="left:${sc.bLeft}%;width:${sc.b}%"></span></div></td><td class="leader-column"><span class="compare-winner ${leadClass}">${lead}</span></td></tr>`;
 }).join('');
 document.getElementById('compare-table').innerHTML=`<div class="compare-table"><table><thead><tr><th>Metric</th><th class="compare-header-a ${aTone}"><span class="compare-state-dot a ${aTone}"></span>${a.name}</th><th class="compare-header-b ${bTone}"><span class="compare-state-dot b ${bTone}"></span>${b.name}</th><th>Leader</th></tr></thead><tbody>${body}</tbody></table></div><div class="compare-legend"><span><i class="legend-line india"></i> India benchmark marker where directly comparable</span><span><i class="legend-line ${aTone}"></i>${a.name}</span><span><i class="legend-line ${bTone}"></i>${b.name}</span></div>`;
}

function fillCompareSelects(){ const a=document.getElementById('compare-a'),b=document.getElementById('compare-b'); const opts=STATES.map(s=>`<option>${s.name}</option>`).join(''); a.innerHTML=opts;b.innerHTML=opts;b.selectedIndex=1;renderCompare(); }

async function renderIndiaMap(){
 const map=document.getElementById('india-map'), legend=document.getElementById('map-legend');
 legend.innerHTML='<span class="legend-item"><i class="legend-dot bjp"></i>BJP-dominant</span><span class="legend-item"><i class="legend-dot nonbjp"></i>Non-BJP-dominant</span><span class="legend-item"><i class="legend-dot mixed"></i>Mixed</span><span class="legend-item"><i class="legend-dot neutral"></i>Not in current model</span>';
 if(!window.d3 || !window.topojson){ map.innerHTML='<div class="map-error">Interactive map libraries could not load.</div>'; return; }
 try{
   const topology=await fetch('https://cdn.jsdelivr.net/gh/udit-001/india-maps-data@2884453/topojson/india.json',{cache:'force-cache'}).then(r=>{if(!r.ok)throw new Error('map data request failed');return r.json();});
   const geoms=topology.objects.districts.geometries;
   const names=[...new Set(geoms.map(g=>g.properties?.st_nm).filter(Boolean))];
   const features=names.map(name=>({type:'Feature',properties:{st_nm:name},geometry:topojson.merge(topology,geoms.filter(g=>g.properties?.st_nm===name))}));
   const mainland=features.filter(f=>!['Andaman and Nicobar Islands','Lakshadweep'].includes(f.properties.st_nm));
   const fc={type:'FeatureCollection',features:mainland};
   const width=900,height=620;
   map.innerHTML='';
   const svg=d3.select(map).append('svg').attr('class','india-svg').attr('viewBox',`0 0 ${width} ${height}`).attr('role','img').attr('aria-label','Interactive political map of India');
   const projection=d3.geoMercator().fitExtent([[24,20],[876,594]],fc);
   const path=d3.geoPath(projection);
   const layer=svg.append('g').attr('class','map-regions-layer');
   const regions=layer.selectAll('g.map-region').data(mainland).join('g')
     .attr('class',f=>{
        const s=STATES.find(x=>x.name===f.properties.st_nm);
        return `map-region ${s?groupClass(s.group):'neutral'} ${s?'has-data':'no-data'}`;
      })
     .attr('data-state',f=>f.properties.st_nm)
     .attr('tabindex',f=>STATES.some(x=>x.name===f.properties.st_nm)?0:-1)
     .attr('role',f=>STATES.some(x=>x.name===f.properties.st_nm)?'button':null)
     .attr('aria-label',f=>{const s=STATES.find(x=>x.name===f.properties.st_nm); return s?`${s.name}, ${s.group}, score ${s.score.toFixed(1)}. Click to open profile.`:`${f.properties.st_nm}, not in current analytical sample.`;})
     .on('mouseenter',function(){ const g=d3.select(this); if(g.classed('has-data')) liftRegion(g,true); })
     .on('mouseleave',function(){ const g=d3.select(this); if(g.classed('has-data')&&!g.classed('is-selected')) liftRegion(g,false); })
     .on('focus',function(){ const g=d3.select(this); if(g.classed('has-data')) liftRegion(g,true); })
     .on('blur',function(){ const g=d3.select(this); if(g.classed('has-data')&&!g.classed('is-selected')) liftRegion(g,false); })
     .on('keydown',function(event,f){ if((event.key==='Enter'||event.key===' ')&&STATES.some(x=>x.name===f.properties.st_nm)){ event.preventDefault(); navigate('state-detail',f.properties.st_nm); } })
     .on('click',function(event,f){ if(STATES.some(x=>x.name===f.properties.st_nm)){ navigate('state-detail',f.properties.st_nm); } });
   regions.append('path').attr('class','map-region-shape').attr('d',path).append('title').text(f=>{
     const s=STATES.find(x=>x.name===f.properties.st_nm); return s?`${s.name} · ${s.group} · ${s.score.toFixed(1)}/100`:f.properties.st_nm;
   });
   // State borders over fills; the visible grid lines come from the underlying district mesh.
   layer.append('path').datum(topojson.mesh(topology,topology.objects.districts,(a,b)=>a!==b))
     .attr('class','district-mesh').attr('d',path);
   const dataRegions=regions.filter(function(){return d3.select(this).classed('has-data');});
   dataRegions.each(function(f){
      const s=STATES.find(x=>x.name===f.properties.st_nm); const g=d3.select(this); const c=path.centroid(f); const area=Math.max(20,path.area(f));
      const fs=Math.max(8,Math.min(13,Math.sqrt(area)/7)); const compact=s.name.length>13 || area<1800;
      const boxW=Math.min(145,Math.max(62,s.name.length*(fs*.53)+18));
      const boxH=compact?30:38; const x=c[0]-boxW/2, y=c[1]-boxH/2;
      const label=g.append('g').attr('class','state-map-label').attr('transform',`translate(${x},${y})`);
      label.append('rect').attr('class','state-map-label-bg').attr('width',boxW).attr('height',boxH).attr('rx',10);
      label.append('text').attr('class','state-map-name').attr('x',boxW/2).attr('y',compact?12:15).attr('font-size',fs).text(compact?s.name.replace('Madhya Pradesh','MP').replace('Tamil Nadu','TN').replace('Uttar Pradesh','UP'):s.name);
      label.append('text').attr('class','state-map-score').attr('x',boxW/2).attr('y',compact?25:31).text(s.score.toFixed(1));
   });
   // Small island inset, kept separate so the mainland retains legible proportions.
   const islands=features.filter(f=>['Andaman and Nicobar Islands','Lakshadweep'].includes(f.properties.st_nm));
   if(islands.length){
      const inset=svg.append('g').attr('class','island-inset').attr('transform','translate(736,520)');
      inset.append('rect').attr('width',135).attr('height',78).attr('rx',14).attr('class','inset-card');
      inset.append('text').attr('x',10).attr('y',18).attr('class','inset-title').text('Island territories');
      const ip=d3.geoMercator().fitExtent([[10,24],[125,68]],{type:'FeatureCollection',features:islands});
      const iph=d3.geoPath(ip);
      inset.selectAll('path').data(islands).join('path').attr('class','island-shape').attr('d',iph);
   }
 }catch(err){
   console.error(err);
   map.innerHTML='<div class="map-error"><strong>Map data could not be loaded.</strong><span>Reload the page to retry the interactive boundary layer.</span></div>';
 }
}

function liftRegion(g,lift){
 const node=g.node(); if(!node)return;
 const f=d3.select(node).datum(); const projection=d3.geoMercator(); // local placeholder only for API symmetry
 const pathEl=node.querySelector('.map-region-shape');
 if(!pathEl)return;
 // Centroid is derived from the visible path's bounding box; this keeps the interaction dependency-free after rendering.
 const bb=pathEl.getBBox(); const cx=bb.x+bb.width/2, cy=bb.y+bb.height/2;
 g.classed('is-hovered',lift).attr('transform',lift?`translate(${cx} ${cy}) scale(1.045) translate(${-cx} ${-cy})`:null);
}

function selectOverviewState(name){
 const s=STATES.find(x=>x.name===name); const host=document.getElementById('overview-state-spotlight'); if(!s||!host)return;
 document.querySelectorAll('.map-hotspot').forEach(b=>b.classList.toggle('is-selected',b.dataset.state===s.name));
 const groupMedian=median(STATES.filter(x=>x.group===s.group).map(x=>x.score));
 const vsGroup=s.score-groupMedian;
 const metrics=[
   ['Growth','growth',METRICS.realGdp.format(s.realGdp)],
   ['Real PC income','income',METRICS.pc.format(s.pc)],
   ['Development','human',METRICS.sdg.format(s.sdg)],
   ['Jobs','jobs',METRICS.employment.format(s.employment)],
   ['Fiscal','fiscal',METRICS.fiscal.format(s.fiscal)],
   ['Infrastructure','infra',METRICS.infra.format(s.infra)]
 ];
 const metricHtml=metrics.map(([label,ico,val])=>`<div class="spotlight-metric"><div class="label">${icon(ico)} ${label}</div><div class="value">${val}</div></div>`).join('');
 const stateTheme=groupClass(s.group);
 host.className=`panel overview-spotlight spotlight-theme-${stateTheme}`;
 host.hidden=false;
 host.innerHTML=`<div class="spotlight-grid"><div><div class="spotlight-heading"><span class="state-chip ${stateTheme}">${s.group}</span><h3>${s.name}</h3></div><div class="spotlight-score">${s.score.toFixed(1)}<span class="score-suffix"> / 100</span></div><div class="muted">${vsGroup>=0?'+':''}${vsGroup.toFixed(1)} points vs ${s.group} median · 2011 Census population ${(s.pop/1e6).toFixed(1)}M</div><div class="spotlight-actions"><button class="primary-btn" data-view="state-detail" data-state="${s.name}">Open full profile →</button><button class="ghost-btn" data-view="compare">Compare states</button></div></div><div class="spotlight-metrics">${metricHtml}</div></div>`;
}

document.getElementById('state-search').addEventListener('input',renderStates);
document.getElementById('state-sort').addEventListener('change',renderStates);
document.querySelectorAll('#group-filter .filter-btn').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('#group-filter .filter-btn').forEach(x=>x.classList.remove('active'));btn.classList.add('active');renderStates();}));
document.getElementById('metric-selector').addEventListener('change',renderMetricExplorer);
document.getElementById('compare-a').addEventListener('change',renderCompare);
document.getElementById('compare-b').addEventListener('change',renderCompare);

renderHeadline();renderLeaderboard();renderStates();fillCompareSelects();renderMetricExplorer();renderIndiaMap();
