// 문제 1)
// snake_case로 구분되어있는 문자열 my_string이 매개변수로 주어질 때,
// my_string에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// my_string은 영소문자와 공백으로만 이루어져 있습니다.
// 1 ≤ my_string의 길이 ≤ 1,000
// my_string의 맨 앞과 맨 뒤에 글자는 공백이 아닙니다.

// 예시
// "i_love_you" => ["i", "love", "you"]
// "hello_world_this_is_snake_case" => ["hello", "world", "this", "is", "snake", "case"]

const runTests = () => {
    const testCases = [
        { my_string: 'i_love_you', expected: ['i', 'love', 'you'] },
        { my_string: 'programmers', expected: ['programmers'] },
        { my_string: 'hello_world_this_is_snake_case', expected: ['hello', 'world', 'this', 'is', 'snake', 'case'] },
        {
            my_string: 'a_b_c_d_e_f_g_h_i_j_k_l_m_n_o_p_q_r_s_t_u_v_w_x_y_z',
            expected: [
                'a',
                'b',
                'c',
                'd',
                'e',
                'f',
                'g',
                'h',
                'i',
                'j',
                'k',
                'l',
                'm',
                'n',
                'o',
                'p',
                'q',
                'r',
                's',
                't',
                'u',
                'v',
                'w',
                'x',
                'y',
                'z',
            ],
        },
    ];

    const first = (my_string) => {
        let answer = my_string.split('_');
        return answer;
    };

    testCases.forEach(({ my_string, expected }, index) => {
        const result = first(my_string);
        if (JSON.stringify(result) === JSON.stringify(expected)) {
            console.log(`Test case ${index + 1} passed: first("${my_string}") === ${JSON.stringify(expected)}`);
        } else {
            console.error(
                `Test case ${index + 1} failed: first("${my_string}") === ${JSON.stringify(
                    result
                )}, expected ${JSON.stringify(expected)}`
            );
        }
    });
};

runTests();
