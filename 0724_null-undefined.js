// null과 undefined의 의미는 둘 다 값의 존재 유무를 표현하는 타입
// null: 값은 값이지만 값으로써 의미없는 특별한 값이 등록되어 있는 것 ('값이 비어있음'을 나타냄) 
// undefined: 등록이 되어있지 않기 때문에 초기화도 정의되지도 않은 것 (값이 할당되지 않은 상태)

const a = null;
const b = undefined;

// 값만 비교할 경우
console.log(a==b);                    // true

// 그러나 이 둘은 서로 다른 타입을 가짐
console.log(typeof null);             // object
console.log(typeof undefined);        // undefined
console.log(a===b);                   // false

// 선언만 하고 '값을 할당하지 않은 변수'
let c;
console.log(c);                       // undefined

// 선언되지 않은 '객체의 속성'에 접근할 때
let d = {};
console.log(d.props);                 // undefined

// 'return 값'이 없는 함수
function e(){
  // return 값 없음
}
console.log(e());                     // undefined

// 배열에 존재하지 않는 것을 읽을려고 할 때
let f = [1, 2, 3];
console.log(f[10]);                   // undefined

// 의도적으로 '값이 비었음'을 나타내고 싶으면 직접 null 값을 할당해야 됨.
const g = null;
console.log(g);                       // null