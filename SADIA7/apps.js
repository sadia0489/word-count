var StrText=document.getElementById('text');
var word=document.querySelector('.word');
var charPrint=document.querySelector('.char');
StrText.addEventListener('keyup',function(){
	
	function WordCount(str){
	 return str.split(" ").length; //আপনার ইচ্ছামতো যেকোনো বিষয় দিয়ে ভাগ করতে পারবেন যেমন । স্পেস, কমা,হাইপেন,ফুলস্টপ ইত্যাদি
}
word.innerText=WordCount(StrText.value);


function charCount(charStr){
	return charStr.length;
}
charPrint.innerText=charCount(StrText.value);
})