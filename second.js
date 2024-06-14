// 문자열 myString이 주어집니다. "x"를 기준으로 해당 문자열을 잘라내
// 배열을 만든 후 사전순의 역으로 정렬한 배열을 return 하는 solution 함수를 완성해 주세요.
// 단, 빈 문자열은 반환할 배열에 넣지 않습니다.

// 입출력 예
// "axbxcxdx" => ["d","c","b","a"]
// "dxccxbbbxaaaa" => ["d","cc","bbb","aaaa"]

function solution(my_String) {
    let sortedArray;
    return (sortedArray = my_String
        .split('x')
        .reverse()
        .filter((item) => item !== ''));
}

// 테스트 코드
function runTests() {
    const testCases = [
        { input: 'abcxdefxghi', expected: ['ghi', 'def', 'abc'] },
        { input: 'helloxworld', expected: ['world', 'hello'] },
        { input: 'xhelloxworldx', expected: ['world', 'hello'] },
        { input: 'x', expected: [] },
        { input: 'abc', expected: ['abc'] },
    ];

    testCases.forEach((testCase, index) => {
        const result = solution(testCase.input);
        const isEqual = JSON.stringify(result) === JSON.stringify(testCase.expected);
        console.log(`Test Case ${index + 1} : ${isEqual ? 'Passed' : 'Failed'}`);
        console.log(
            `Input: "${testCase.input}", Expected: ${JSON.stringify(testCase.expected)}, Result: ${JSON.stringify(
                result
            )}`
        );
        console.log('----------------------------------------------');
    });
}

// 테스트 실행
runTests();
