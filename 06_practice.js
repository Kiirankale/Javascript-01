console.log(`------------------------Grade Calculation------------------------------`);
var gradecalculation = function(marks){
    if (typeof marks!=='number'||isNaN(marks)||marks<=0||marks>100) {
        console.log(`The entered marks is ${marks} - Invalid marks `);
        console.log(" ");
        
    }else if( marks>=90){
        console.log(`Fantastic marks : ${marks} , Your grade is A+`);
        console.log(" ");

    }
    else if( marks>=75&&marks<90){
        console.log(`Excellant marks : ${marks} , Your grade is A`);
        console.log(" ");

    }
    else if( marks>=50&&marks<75){
        console.log(`Good marks : ${marks} , Your grade is B`);
        console.log(" ");

    }
    else if( marks>=35&&marks<50){
        console.log(`Marks  is : ${marks} , Your grade is C, Need improvement .`);
        console.log(" ");

    }
    else{
        console.log(`Your entered marks is ${marks} - You are failed , try next year .`);
        console.log(" ");
    }
    
}
gradecalculation(98);
gradecalculation(80);
gradecalculation(90);
gradecalculation(0);
gradecalculation(150);
gradecalculation(-7);
gradecalculation(35);
gradecalculation(29);
gradecalculation(64);
gradecalculation(49);
gradecalculation("91");
gradecalculation("Eighty");
gradecalculation(undefined);
gradecalculation(null);
