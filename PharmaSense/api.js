const url = 'https://myhealthbox.p.rapidapi.com/search/updatedDocuments?sd=2020-06-01&c=us&l=en';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '622dfbfee0mshbd941378d49c9f8p1650b5jsn0bdef858240c',
		'X-RapidAPI-Host': 'myhealthbox.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}