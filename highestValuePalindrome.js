// https://www.hackerrank.com/challenges/richie-rich/problem?isFullScreen=true

function highestValuePalindrome(s, n, k) {
    if (n === 1) return k == 1 ? '9' : '-1'
            
    let arr = [...s]
    let c = Array(n).fill(0)
    let x = Math.floor(n/2) + (n&1)
    
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

function highestValuePalindrome1(s, n, k) {
    // Write your code here
    //const pal = checkIfPalindrome(s)
    let i = 0
    let j = n - 1
    const itr = parseInt(n/2)
    let str = s.split('')
    
    while (i <= itr) {
        if (str[i] === str[j]) {
            i++
            j--
            continue
        } else {
            if (k > 1 && str[i] !== '9' && str[j] !== '9') {
                str[i] = str[j] = '9'
                k -= 2
                continue
            }
            if (str[i] > str[j]) {
                str[j] = str[i]
                k--
            } else {
                str[i] = str[j]
                k--
            }
        }
        if (k < 0) return '-1'
        i++
        j--
    }
    i = 0
    j = n - 1
    while (i <= itr) {
        if (i === j && k > 0) {
            if (str[i] !== '9') {
                str[i] = 9
                k--
                break
            }
        }
        if (str[i] !== '9' && k >= 2) {
            str[i] = str[j] = '9'
            k -= 2
            i++; j--;
            continue
        }
        if (i === j || k === 0) break
        i++
        j--
    }
    
    return str.join('')
}