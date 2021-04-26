describe("Greeting Funtion", function(){

    describe("should be able to greet people in three languages", function(){
        it("should be able to greet user in IsiXhosa", function() {
            let testingGreet = greetFactoryFunction();
            testingGreet.setName('Okuhle ');
          assert.equal(testingGreet.greetInIsixhosa(),"Mholo, Okuhle");
            testingGreet.setName('Achuma');
          assert.equal(testingGreet.greetInIsixhosa(),"Mholo, Achuma");
        });

    it("should be able to greet user in SeSotho", function() {
        let testingGreet = greetFactoryFunction();
        testingGreet.setName('Kamva');
        assert.equal(testingGreet.greetInSesotho(),"Dumelang, Kamva");
        testingGreet.setName('Issa');
        assert.equal(testingGreet.greetInSesotho(),"Dumelang, Issa");
    });


    it("should be able to greet user in XiTsonga", function() {
        let testingGreet = greetFactoryFunction();
        testingGreet.setName('Unathi');
        assert.equal(testingGreet.greetInXitsonga(),"Ahee, Unathi");
        testingGreet.setName('Inathi');
        assert.equal(testingGreet.greetInXitsonga(),"Ahee, Inathi");
    });

    });

  describe("should be able to keep track of language names are greeted in", function(){
    it("should be able to greet user in selected language", function() {
        let testingGreet = greetFactoryFunction();
        assert.equal(testingGreet.greetUser('Buhle','xitsonga'),"Ahee, Buhle");
        assert.equal(testingGreet.greetUser('Miso','sesotho'),"Dumelang, Miso");
        assert.equal(testingGreet.greetUser('Buhle','isixhosa'),"Mholo, Buhle");
    });

    it("should be able to count each person greeted once even if greeted with a different language", function() {
        let testingGreet = greetFactoryFunction();
        testingGreet.greetUser('Okuhle', 'isixhosa');
        testingGreet.greetUser('Okuhle', 'sesotho');
        testingGreet.greetUser('Zweli', 'sesotho');
    });

    it("should be able to count each person greeted  once", function() {
        let testingGreet = greetFactoryFunction();
        assert.equal(testingGreet.setCounter('Okuhle', 'sesotho'),0);
    });
  })


  describe("should be able to test counter", function(){
    it("should preserve counter after refreshing", function(){

      let testingGreet = greetFactoryFunction();

      testingGreet.setName('Inathi');
      testingGreet.setName('Onathi');
      testingGreet.setName('Unathi');
      testingGreet.clearCount();

      assert.equal(testingGreet.setCounter('', ''),0)

    });
    it("should be able to clear counter", function(){

        let testingGreet = greetFactoryFunction();

        testingGreet.clearCount();
    });
  })
});

