interface IResult {
	vowels: number;
	consonants: number;
}

const calculateVowelsConsonants = (rawString: string): IResult  => {  
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

	let vowelTotal = 0;
	let consonantTotal = 0;

	for(const item of rawString.toLowerCase()) {
		if (vowels.includes(item)) {
			vowelTotal++;
		} else if (consonants.includes(item)) {
			consonantTotal++;
		}
	}

	return {
		vowels: vowelTotal,
		consonants: consonantTotal
	}
}
  
console.log(calculateVowelsConsonants('Mathius'));
  