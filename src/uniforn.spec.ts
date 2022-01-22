import { Unicorn } from ".";

it('hello world', () => {
  const u = new Unicorn()
  const result = u.sayHelloTo('me');
  console.log(result);
})
