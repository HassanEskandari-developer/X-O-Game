
    let i = 1
    let count = 0
    let _div = document.querySelectorAll('.xo>div')
    let _win = document.getElementsByClassName('win')[0]
    _div.forEach((val) =>{
        val.addEventListener('click' ,() =>{
            let temp = val.getAttribute('data-status')

            // print
            if(temp == 'off'){
                if(i % 2){
                    val.innerHTML = 'X'
                    val.style.color = 'greenyellow'
                    val.style.textShadow = '0px 0px 5px greenyellow'
                }else{
                    val.innerHTML = 'O'
                    val.style.color = 'red'
                    val.style.textShadow = '0px 0px 5px red'
                }
                i++
                val.setAttribute('data-status' , 'on')
            }

            // check whiner
            const _check = []
            _div.forEach(function(val , i){
                _check[i] = val.innerHTML
            })
            if((_check[0] == _check[1] && _check[0] == _check[2]) && (_check[0] != '')){
                _win.style.top = '0px'
            }else if((_check[3] == _check[4] && _check[3] == _check[5]) && (_check[3] != '')){
                _win.style.top = '0px'
            }else if((_check[6] == _check[7] && _check[6] == _check[8]) && (_check[6] != '')){
                _win.style.top = '0px'
            }else if((_check[0] == _check[3] && _check[0] == _check[6]) && (_check[0] != '')){
                _win.style.top = '0px'
            }else if((_check[1] == _check[4] && _check[1] == _check[7]) && (_check[1] != '')){
                _win.style.top = '0px'
            }else if((_check[2] == _check[5] && _check[2] == _check[8]) && (_check[2] != '')){
                _win.style.top = '0px'
            }else if((_check[0] == _check[4] && _check[0] == _check[8]) && (_check[0] != '')){
                _win.style.top = '0px'
            }else if((_check[2] == _check[4] && _check[2] == _check[6]) && (_check[2] != '')){
                _win.style.top = '0px'
            }
            count++
            if(count >= 9){
                _win.style.top = '0px'
                _win.children[0].innerHTML = 'Equal!'

            }
        })
    })
    const _agin = () => location.reload()
