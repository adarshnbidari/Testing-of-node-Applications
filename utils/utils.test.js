const utils=require('./utils');

const expect=require('expect');

it("should add two numbers",()=>{
	var res=utils.add(33,11);

	expect(res).toBe(44).toBeA('number');
	
});

it("should be square number",()=>{
	var res=utils.square(5);
	
	expect(res).toBe(25).toBeA('number');
	
});


/* it('should expect some values',()=>{
	expect([1,2,3]).toExclude(4);
}); */


it('it should set our firstname and lastname',()=>{
	var user={location:'dvg',age:21};
	var res=utils.setName(user,'adarsh bidari');
	
	expect(res).toInclude({
		firstName:'adarsh',
		lastName:'bidari'
	});
});