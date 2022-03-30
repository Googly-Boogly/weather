var test = 1

function alertt() {
    alert('The weather page is loading...')
}

function deletee() {
    var elem = document.getElementById('btn11')
    elem.parentNode.removeChild(elem);
    console.log('test')
}

function change() {
    console.log('test')
    test++
    if (test % 2 == 0) {
        // changes to F
        var arr = ['#re1', '#re2', '#re3', '#re4', '#bl1', '#bl2', '#bl3', '#bl4']
        var x = 0
        while (x < arr.length) {
            var likesss = document.querySelector(arr[x])
            con = likesss.innerText
            con2 = (con*(9/5)) + 32
            con2 = Math.floor(con2)
            likesss.innerText = con2
            console.log(con)
            x++

        }
    }
    else {
        // changes to C
        var arr = ['#re1', '#re2', '#re3', '#re4', '#bl1', '#bl2', '#bl3', '#bl4']
        var x = 0
        while (x < arr.length) {
            var likesss = document.querySelector(arr[x])
            con = likesss.innerText
            con2 = (con-32) *(5/9)
            con2 = Math.ceil(con2)
            likesss.innerText = con2
            x++

        }
    }
}