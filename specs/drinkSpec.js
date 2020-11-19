  describe ('WhatCanIDrink function', function() {
     beforeEach(function(){
         drink = new whatCanIDrink();
     })
    describe ('Check age', function(){
        it('exist', function() {
            expect(whatCanIDrink).toBeDefined();
        });
        it ('should return that age is incorrect! WhatCanIDrink(0)', function(){
            let result = whatCanIDrink(0)
            expect (result).toBe("Sorry.I can’t tell what drink because that age is incorrect!");
        });
        it ('should return drink toddy when called WhatCanIDrink(14)', function(){
            let result = whatCanIDrink(13)
            expect (result).toBe("Drink Toddy");
        });
        it ('should return drink coke when called WhatCanIDrink(18)', function(){
            let result = whatCanIDrink(17)
            expect (result).toBe("Drink Coke")
        });
        it ('should return drink beer when called WhatCanIDrink(21)', function(){
            let result = whatCanIDrink(20)
            expect(result).toBe("Drink Beer")
        });
        it ('should return drink whiskey when called WhatCanIdDrink(130)', function(){
            let result = whatCanIDrink(120)
            expect (result).toBe("Drink Whiskey")
        });
        it ('should return age is incorrect', function(){
           let result = whatCanIDrink(140)
            expect (result).toBe("Sorry. I can’t tell what drink because that age is incorrect!")
        });
    });
 });

 //I've made my testing file and it is working. But in the solution code i found a code below. I can't get what this code line is responsible for. Could you please clarify?

 /*it("should contain Drink when called as whatCanIDrink(17)", function() {
            var result = whatCanIDrink(10).indexOf("Drink");
            expect(result).not.toEqual(-1);*/