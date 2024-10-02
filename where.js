myData = [
[50.065703299999996,19.918958667058632, 'AGH University of Science and Technology'],
[52.2394966,21.015693129786936, 'Academy of Fine Arts in Warsaw'],
[30.04281175,31.23658590813949, 'American University in Cairo'],
[33.4213174,-111.93316305413154, 'Arizona State University'],
[37.9425172,23.8706149, 'Athens Information Technology'],
[17.547185,78.572791, 'BITS Pilani'],
[6.88999925,3.722476387860575, 'Babcock University'],
[25.2663747,82.99046480176699, 'Banaras Hindu University'],
[12.94393425,77.5091805440154, 'Bangalore University'],
[31.55043405,-97.1102905567766, 'Baylor University'],
[39.959732,116.35973697755406, 'Beijing Normal University (BNU)'],
[53.83806745,27.476155257195504, 'Belarusian State University'],
[44.81842,20.45757, 'Belgrade University'],
[42.5009819,-89.0157777411969, 'Beloit College'],
[35.95422,-90.45997, 'Beloit College'],
[31.2631254,34.802238544584185, 'Ben Gurion University of the Negev'],
[42.3504324,-71.10170122505716, 'Boston University'],
[35.30059,-120.66004, 'California Polytechnic State University - San Luis Obispo'],
[34.18191745,-117.32174391836504, 'California State University, San Bernardino'],
[51.5213399,-0.1748934415893599, 'City of Westminster College'],
[40.80775585,-73.96161411567529, 'Columbia University'],
[52.070132900000004,-0.6287023427161589, 'Cranfield University'],
[50.1029026,14.3946353, 'Czech Technical University in Prague'],
[37.31770065,-122.04455706238198, 'De Anza College'],
[48.434716800000004,35.03785522939141, 'Dnipro National University'],
[30.2851494,-97.73393515146053, 'University of Texas at Austin'],
[36.00015569999999,-78.94422972195878, 'Duke University'],
[45.732398,4.835571, '7th Arr.'],
[48.76418645,2.290431301339286, 'Écoquartier LaVallée (en travaux)'],
[36.09721795,-79.49966128392744, 'Elon University'],
[55.48841555,8.447026487581917, 'Erhvervsakademi Sydvest'],
[-2.147712,-79.9647289, 'ESCUELA SUPERIOR POLITECNICA DEL LITORAL'],
[51.24839645,6.770322755895527, 'Fachhochschule Düsseldorf'],
[47.72360745,13.086718915696402, 'Fachhochschule Salzburg'],
[45.2464463,19.85172084086621, 'Faculty of Technical Sciences (Teaching block)'],
[40.75278,-73.42778, 'Farmingdale State University of New York'],
[26.119403650000002,-80.14169191096471, 'Florida Atlantic University'],
[43.2125814,-71.4947929, 'Franklin Pierce College'],
[26.153410700000002,91.6657647108439, 'Gauhati University'],
[38.83133325,-77.30798838879116, 'George Mason University'],
[38.897836749999996,-77.01292415460526, 'Georgetown University Law Center'],
[33.7535889,-84.38542086620515, 'Georgia State University'],
[43.113115,-77.509066, 'Georgia State University'],
[21.0055269,105.84359264177206, 'Hanoi University of Science and Technology'],
[31.77293975,35.197994954152726, 'Hebrew University - Givat Ram Campus'],
[17.445835,78.35158, 'Hebrew University - Givat Ram Campus'],
[26.5093058,80.24823225761622, 'IIT Kanpur'],
[45.4378506,12.3226823, 'Bar Iuav'],
[41.83616405,-87.62647227745128, 'Illinois Institute of Technology'],
[40.51799375,-89.00846070697986, 'Illinois State University'],
[25.2621544,82.9925896, 'Indian Institute of Technology (BHU)'],
[-15.394991,28.332815, 'School of Mines'],
[39.1802358,-86.50935262731483, 'Indiana University Bloomington'],
[43.879022,-85.800815, 'Indiana University Bloomington'],
[14.7168914,-17.4556123, 'Institut Supérieur de Technologies'],
[18.4876505,-69.96210823269232, 'Instituto Tecnológico de Santo Domingo'],
[17.4454957,78.34854697544472, 'International Institute of Information Technology, Hyderabad'],
[35.95422,-90.45997, 'International Institute of Information Technology, Hyderabad'],
[22.49952155,88.37114925302436, 'Jadavpur University'],
[16.9786772,82.2411916, 'Jawaharlal Nehru Technological University (JNTUK)'],
[28.540166749999997,77.16456005394733, 'Jawaharlal Nehru University'],
[32.49339995,35.989854503370836, 'Jordan University of Science and Technology'],
[39.18825185,-96.58258555991623, 'K-State Student Union'],
[42.29075735,-85.59936465969835, 'Kalamazoo College'],
[54.898805249999995,23.912663150766285, 'Kaunas University of Technology'],
[54.898805249999995,23.912663150766285, 'Kaunas University of Technology'],
[55.79069515,49.12192908363142, 'Kazan Federal University'],
[41.144232450000004,-81.33983207322399, 'Kent State University'],
[13.650269,100.495405, 'King Mongkut’s University of Technology Thonburi Alumni Association Under Royal Patronage'],
[39.837603,-75.257054, 'King Mongkut’s University of Technology Thonburi Alumni Association Under Royal Patronage'],
[50.4507932,30.466127, 'Politekhnichnyi Instytut'],
[50.44892,30.45891, 'Kyiv Polytechnical Institute'],
[50.44209,30.50821, 'Taras Shevchenko National University of Kyiv'],
[46.4666416,-80.9738711, 'Laurentian University'],
[10.4730027,-66.8928687, 'Lisandro Alvarado'],
[18.016475,-76.743473, 'University of Technology'],
[49.362304,23.320647, 'University of Technology'],
[42.70237935,-84.48038686520441, 'Michigan State University'],
[13.06686,80.28347, 'Madras University Library'],
[39.416095049999996,-81.4484225136152, 'Marietta College'],
[24.4348507,54.6167989, 'Masdar Institute'],
[44.8000034,20.4848369, 'Faculty of Mathematics'],
[39.875496749999996,32.78553505584672, 'Middle East Technical University'],
[37.952905900000005,-91.77385818768353, 'Missouri University of Science and Technology'],
[-37.8774234,145.04496691740303, 'Monash University (Caulfield campus)'],
[-37.910776350000006,145.13480648790716, 'Monash University, Clayton Campus'],
[34.527022,-92.987376, 'Monash University, Clayton Campus'],
[22.135603,113.545535, 'Institute of Applied Physics and Materials Engineering'],
[55.60460415,38.10651819116069, 'Moscow Institute of Physics and Technology'],
[55.70229715,37.53179772747929, 'Moscow State University'],
[22.2531304,84.90158279701691, 'NIT Rourkela'],
[38.6272681,140.4365868, 'Nyu'],
[21.147717450000002,79.03924327117383, 'Rashtrasant Tukadoji Maharaj Nagpur University'],
[1.3484104000000001,103.68293320728537, 'Nanyang Technological University'],
[31.39571075,75.5357675438753, 'Dr. B. R. Ambedkar National Institute of Technology, Jalandhar'],
[25.01688615,121.53852099555085, 'National Taiwan University'],
[-12.02037945,-77.04816939032196, 'National University of Engineering'],
[41.774365450000005,-88.14274924248255, 'North Central College'],
[41.7634632,123.41175767168997, 'Northeastern University (China)']
];
