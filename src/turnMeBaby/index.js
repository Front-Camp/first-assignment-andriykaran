/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
  /* your logic here...*/
    let reversed_string = '';
    for (let i = 0; i < str.length; i++) {
        reversed_string = reversed_string + str[str.length - i - 1];
    }
    return reversed_string;
};

export default turnMeBaby;
