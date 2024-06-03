const palindromes = function (str) {
    const filtered = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reverse = filtered.split('').reverse().join('');
    return filtered === reverse;
};

// Do not edit below this line
module.exports = palindromes;
