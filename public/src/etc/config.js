const plantme = window.plantme || (window.plantme = {})

// uid
plantme.uid = 0

// 判断微信
plantme.isWechat = (/micromessenger/i).test(navigator.userAgent)

// 初始化接口基础路径
plantme.baseUrl = window.api_base_url

// colors
plantme.colors = [
	'#9360a2', 
	'#ab92ed', 
	'#7f5bec', 
	'#5a7ed4', 
	'#5e9bec', 
	'#2fb2e8', 
	'#47bcb3',
	'#45bc82',
	'#9fbc45',
	'#996633',
	'#f3bd5d',
	'#f4955d',
	'#f58016',
	'#ea6f67',
	'#ec87c1',
	'#ff69c2',
]

plantme.questionTypes = [
	{ 
        text: '<b>单选题</b>' 
    },
    { 
        text: '<b>多选题</b>' 
    },
    { 
        text: '<b>下拉题</b>' 
    },
    { 
        text: '<b>文本题</b>' 
    }
]

plantme.shuffle = (array, random) => {
	if (!random) return array
    for (let i = array.length - 1; i >= 0; i--) {
        let randomIndex = Math.floor(Math.random()*(i+1))
        let itemAtIndex = array[randomIndex]
        array[randomIndex] = array[i]
        array[i] = itemAtIndex
    }
    return array
}

export default plantme