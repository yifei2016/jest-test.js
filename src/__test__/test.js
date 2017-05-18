const {backwards,hypotenuse} = require('../index.js');

// här kommer testen

describe('backwards test suites', () => {
	test('backwards string', () => {
		let actual = backwards('yifei');
		let expected = 'iefiy';
		expect(actual).toBe(expected);
	});

	test('backwards tal', () => {
		expect(backwards(890)).toBe('098');
	});
	test('backwards tal', () => {
		expect(()=>{backwards(null)}).toThrow();
	});

	test('hypotenuse', () => {
		expect(hypotenuse(3,4)).toBe(5);
	});
	test('hypotenuse', () => {
		expect(hypotenuse(-3,4)).toBe('ogiltig tal');
	})
});
