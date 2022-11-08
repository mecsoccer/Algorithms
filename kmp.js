// Knut Morris Prat string search algorithm
function kmp(longString, pattern) {
    const arr = [0] // LPS table
    let match = ''
    for (let i = 1; i < pattern.length; i++) {
        const start = pattern.slice(0, match.length + 1)
        const newMatch = match + pattern[i]
        if (start === newMatch) {
            match = newMatch
            arr.push(newMatch.length)
            continue
        } else {
            match = ''
            arr.push(0)
            continue
        }
    }
    let i = 0
    let j = 0
    let num = 0
    const lenS = longString.length - 1
    const lenP = pattern.length
    while (i < lenS) {
        if (pattern[j] === longString[i]) {
            if (j === lenP - 1) {
                num++
                j = 0
                i++
                continue
            } else {
                j++
            }
        } else if (j === 0) {
            i++
            continue
        } else {
            j -= arr[j]
        }
        i++
    }
    return num
}

console.log(kmp('aladasdsalabaladkeiuralabalai', 'alabala'))