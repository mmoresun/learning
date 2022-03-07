/* программа, которая будет регистрировать бегунов для гонки и сообщать им время забега ‎

Бегун может зарегистрироваться заранее (runnerEarlyRegistration = true) или поздно (runnerEarlyRegistration = false)

Бегун может быть взрослым (> 18 лет) и юнцом (<18 лет), переменная runnerAge

"Ранние взрослые" (> 18) получают номер (raceNumber) 1000 и выше, все остальные - меньше 1000

"ранние взрослые" бегут в 9:30
"поздние взрослые" бегут в 11:30
все "юнцы" бегут в 12:30
*/

let raceNumber = Math.floor(Math.random() * 1000);
// генерим рандомное число (дробь значением до 1), умножаем на 1000 и округляем до целого вниз - это номер бегуна возрастом до 18 лет

// если возраст больше (он будет указан позже вручную в runnerAge), то к номеру raceNumber добавится 1000

const runnerEarlyRegistration = true;
// задаём, зарегался бегун заранее (true) или нет (false)


const runnerAge = 11;
// задаём возраст бегуна

if (runnerAge > 18 && runnerEarlyRegistration) {
  raceNumber += 1000;
}
else raceNumber = raceNumber;

// если возраст > 18 и бегун зарегистрировался ранее, то он получает номер > 1000 (к сгенерированному добавляется 1000)

// если это юнец или "поздний" взрослый, то номер меньше 1000

/* теперь будем выводить сообщение для каждой группы бегунов:

- ранние взрослые
- поздние взрослые
- юнцы

*/
if (runnerAge > 18 && runnerEarlyRegistration) {
  console.log(`Dear number ${raceNumber}, your race time is 9:30`);
// ^^^ это "ранние взрослые", сообщение о забеге в 9:30

} else if (runnerAge > 18 && !runnerEarlyRegistration){
  console.log(`Dear number ${raceNumber}, your race time is 11:00`);
  }
// ^^^^^ это "поздние взрослые", сообщение о забеге в 11:30
  
  else if (runnerAge < 18) {
    console.log(`Dear number ${raceNumber}, your race time is 12:30`);
  }
// это юнцы < 18, сообщение о забеге в 12:30
  else {
    console.log(`Dear number ${raceNumber}, please proceed to the registration desk`);
  }
// ^^^^ все 18-летние пиздуют на стойку регистрации, там разберутся


