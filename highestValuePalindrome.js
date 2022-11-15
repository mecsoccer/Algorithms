// https://www.hackerrank.com/challenges/richie-rich/problem?isFullScreen=true

function highestValuePalindrome(s, n, k) {
    if (n === 1) return k > 0 ? '9' : '-1'
            
    let arr = [...s]
    let c = Array(n).fill(0)
    let x = parseInt((n + 1)/2)
    
    for (let i = 0; i < x; i++) {
        if (arr[i] !== arr[n-1-i]) {
            arr[i] = arr[n-1-i] = Math.max(arr[i], arr[n-1-i])
            c[i]++
            k--
        }
        if (k < 0) return '-1'
    }
    
    for (let i = 0; i < x; i++) {
        if (arr[i] != '9') {
            let cost = c[i] === 1 || i === (n-1-i) ? 1 : 2
            if (k >= cost) {
                arr[i] = arr[n-1-i] = '9'
                k -= cost
            }
        }
    }

    return arr.join('')
}
