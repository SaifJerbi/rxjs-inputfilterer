import { of, from, fromEvent } from "rxjs";
import {
  map,
  debounceTime,
  filter,
  distinctUntilChanged
} from "rxjs/operators";

const foo = document.getElementById("A");
const foo$ = fromEvent(foo, "input").pipe(map(e => foo.value));

const suggestions$ = foo$.pipe(
  debounceTime(300),
  filter(query => query && query.length > 2),
  distinctUntilChanged()
);

suggestions$.subscribe(x => {
  console.log(x);
});
