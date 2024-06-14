// 1부터 6까지 숫자가 적힌 주사위가 세 개 있습니다.
// 세 주사위를 굴렸을 때 나온 숫자를 각각 a, b, c라고 했을 때 얻는 점수는 다음과 같습니다.

// 1) 세 숫자가 모두 다르다면 a + b + c 점을 얻습니다.
// 2) 세 숫자 중 어느 두 숫자는 같고 나머지 다른 숫자는 다르다면 (a + b + c) × (a2 + b2 + c2 )점을 얻습니다.
// 3) 세 숫자가 모두 같다면 (a + b + c) × (a2 + b2 + c2 ) × (a3 + b3 + c3 )점을 얻습니다.

// 세 정수 a, b, c가 매개변수로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요
// ( 알파벳 뒤의 글자는 각각 2 : 제곱, 3 : 세제곱을 의미합니다.)

// 입출력 예
// a=2, b=6 , c=1 => result = 9
// a=5, b=3 , c=3 => result = 473
// a=4, b=4 , c=4 => result = 110592

//의사 코드
// 세 숫자를 확인해야
// 세숫자가 같으면 3제곱
// 두숫자가 같으면 전체 숫자를 제곱
// 모두 같지 않으면 a + b + c

function solution(a, b, c) {
    let answer = 0;
    if (a == b && b == c) {
        answer = (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3);
    } else if (a == b || b == c || a == c) {
        answer = (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
    } else {
        answer = a + b + c;
    }

    return answer;
}

// 테스트 코드
function runTests() {
    const tests = [
        { input: [1, 2, 3], expected: 6 },
        { input: [2, 2, 3], expected: (2 + 2 + 3) * (2 ** 2 + 2 ** 2 + 3 ** 2) },
        {
            input: [4, 4, 4],
            expected: (4 + 4 + 4) * (4 ** 2 + 4 ** 2 + 4 ** 2) * (4 ** 3 + 4 ** 3 + 4 ** 3),
        },
        { input: [5, 5, 1], expected: (5 + 5 + 1) * (5 ** 2 + 5 ** 2 + 1 ** 2) },
        {
            input: [1, 1, 1],
            expected: (1 + 1 + 1) * (1 ** 2 + 1 ** 2 + 1 ** 2) * (1 ** 3 + 1 ** 3 + 1 ** 3),
        },
        { input: [6, 5, 4], expected: 6 + 5 + 4 },
        {
            input: [3, 3, 3],
            expected: (3 + 3 + 3) * (3 ** 2 + 3 ** 2 + 3 ** 2) * (3 ** 3 + 3 ** 3 + 3 ** 3),
        },
        { input: [2, 3, 2], expected: (2 + 3 + 2) * (2 ** 2 + 3 ** 2 + 2 ** 2) },
    ];

    let allPassed = true;

    tests.forEach((test, index) => {
        const { input, expected } = test;
        const result = solution(...input);
        const passed = result === expected;
        console.log(
            `Test ${index + 1}: input = ${input}, expected = ${expected}, result = ${result}, passed = ${passed}`
        );
        if (!passed) {
            allPassed = false;
        }
    });

    if (allPassed) {
        console.log('All tests passed!');
    } else {
        console.log('Some tests failed.');
    }
}

// 테스트 실행
runTests();
