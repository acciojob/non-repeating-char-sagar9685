function firstNonRepeatedChar(str) {
 // Write your code here
	let value = {}
	for(let char of str)
		{
					value[char] = (value[char] ||0) +1
		}

	for(let char of str)
		{
			if(value[char] ===1)
			{
					return char;
			}
}
		return null
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
