// Usage:
//
// $ mv sample--strictly-typed--for-import--gl-matrix.d.ts gl-matrix.d.ts
// $ mv sample--strictly-typed--for-import--test.ts test.ts
//
// $ ls -1
// gl-matrix.d.ts
// gl-matrix.js
// test.ts
//
// $ tsc --module commonjs test.ts
//
// $ node test.js

import {mat3, mat4, vec3, vec4} from './gl-matrix';

let v3 = vec3.fromValues(0, 1, 2);
let v4 = vec4.fromValues(0, 1, 2, 3);
let m3 = mat3.create();
let m4 = mat4.create();

// m4 = mat4.scale(m4, m4, v4); // compile error
// m3 = mat4.scale(m4, m4, v3); // compile error
m4 = mat4.scale(m4, m4, v3); // ok

console.log(m4);

// console.log(vec3.length(v3)); // compile error, length is Float32Array's attribute
console.log(vec3.len(v3)); // ok -> 2.23606797749979
console.log(v3.length); // ok -> 3

// console.log(vec3.len(v4)); // compile error
console.log(vec3.len(<vec3>v4)); // ok -> 2.23606797749979

function uniform3fv(v: Float32Array): void {
  console.log(v);
}

uniform3fv(m3); // ok!
