// 문제
// 정수 number가 매개변수로 주어집니다. 1부터 number까지의 모든 수들 중에서,
// 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ number ≤ 1,000

// 약수의 개수를 구한다
// 약수가 짝수인지 홀수인지 조건문으로 확인한다
// 약수가 짝수일때 + 홀수일떄는
// 총합을 누적산하여 반환한다

// 입출력 예
//  number   result
//   10	       27
//   17	       93

function solution(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        let count = 0;

        for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                ++count;
            }
        }

        if (count % 2 == 0) {
            sum += i;
        } else {
            sum -= i;
        }
    }

    return sum;
}

// -------------------------------- 이 아래는 건들지 마시오 -------------------------------------

function runTests() {
    const testCases = [
        { input: 10, expected: 27 },
        { input: 17, expected: 93 },
        { input: 27, expected: 268 },
        { input: 4, expected: 0 },
        { input: 5, expected: 5 },
        { input: 25, expected: 215 },
    ];

    let allPassed = true;

    testCases.forEach((testCase, index) => {
        const { input } = testCase;
        const result = solution(input);
        const isEqual = result === testCase.expected;
        if (!isEqual) {
            allPassed = false;
        }
        console.log(`Test Case ${index + 1} : ${isEqual ? 'Passed' : 'Failed'}`);
        console.log(`Input: ${input}, Expected: ${testCase.expected}, Result: ${result}`);
        console.log('----------------------------------------------');
    });

    if (allPassed) {
        console.log('All tests passed!');
    } else {
        console.log('Do it again.');
    }
}

// Run the tests
runTests();
