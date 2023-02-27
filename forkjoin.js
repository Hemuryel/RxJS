const { forkJoin, of, timer } = require("rxjs")

// const observable1 = of(1, 2, 3, 4, 5, 6);
// observable1.subscribe({
//   next: value => console.log(value),
//   complete: () => console.log('This is how it ends!'),
// });

// const observable2 = timer(4000);
// observable2.subscribe({
//   next: value => console.log(value),
//   complete: () => console.log('This is how it ends!'),
// });

const observable3 = forkJoin({
  foo: of(1, 2, 3, 4, 5, 6),
  bar: Promise.resolve(8),
  baz: timer(4000)
});

observable3.subscribe({
 next: value => console.log(value),
 complete: () => console.log('This is how it ends!'),
});

// Logs:
// { foo: 4, bar: 8, baz: 0 } after 4 seconds
// 'This is how it ends!' immediately after