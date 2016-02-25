//reqular expressions for email, date, tags, phone
var email = /\b.+@[a-zA-Z]+\.[a-zA-Z]{2,3}\b/i;
var date = /^\d{1,2}\s[a-zA-Z]{4,8}\s\d{4}$/;
var tags = /<.+>.+<\/.+>/i;
var phone = /^\(?(\+380)\d{2}\)?\d{7}$/;

//arrays of emails, date, tags and phones
var emailArr = ['abc@mail.ru', '123@gmail.com', 'GGG@i.ua', 'blablabla', 'aaa@1111.com'];
var dateArr = ['23 January 2016', '4 April 1988', '12 december 1356', 'abcd 12 october 1980 abcd', 'abcd12 october 1980abcd'];
var tagsArr = ['<p>sometext</p>', '<h1>6752</h1>', '<a href="www.ex.ua">ex</a>', 'sometext', '<123>numbers</123'];
var phoneArr = ['+380 93 1949 127', '(+38066)3736436', '(+380-67)-555-55-55', '(+902 11) 999 99 99', '(+bla bla) bla'];

//function that equals regexp with each array item and prints booleans to the console
function regEqual(item, array) {
  console.log('Testing ' + array);
  console.log('RegExp == ' + item);
  for (var i in array) {
    console.log(array[i] + ' => ' + item.test(array[i]));
  }
  console.log('\n');
}

//function that removes hyphens and spaces from the phone number
//then it equals regexp with pure phone and prints booleans to the console
function regEqualPhone(item, array) {
  console.log('Testing ' + array);
  console.log('RegExp == ' + item);
  for (var i in array) {
    var pureItem = array[i].replace(/[\(\)\s\-]/g, '');
    console.log(pureItem);
    console.log(array[i] + ' => ' + item.test(pureItem));
  }
}

//tests for emails, dates and tags
regEqual(email, emailArr);
regEqual(date, dateArr);
regEqual(tags, tagsArr);

//test for phones
regEqualPhone(phone, phoneArr);
