// window.onload是窗口（页面）加载事件，当文档内容完全加载完成会触发该事件（包括图像，脚本文件，CSS文件等），就调用的处理函数。
window.addEventListener('load', function() {
    // 1.登录界面
    // 关闭
    var jianhao = this.document.querySelector('.icon-jianhao');
    var chenghao = this.document.querySelector('.icon-chenghao');
    var login = this.document.querySelector('.login');
    jianhao.addEventListener('click', function() {
        login.style.display = 'none';
    })
    chenghao.addEventListener('click', function() {
        login.style.display = 'none';
    })

    // 输入框
    var text = this.document.querySelector('.text');
    var password = this.document.querySelector('.password');
    var textInput = text.querySelector('input');
    var passwordInput = password.querySelector('input');
    
    textInput.addEventListener('focus', function() {
        this.placeholder = '';
        text.className = 'text textChange';
    })
    textInput.addEventListener('blur', function() {
        this.placeholder = 'QQ号码/手机/邮箱';
        text.className = 'text';
    }) 
    passwordInput.addEventListener('focus', function() {
        this.placeholder = '';
        password.className = 'password passWordChange';
    })
    passwordInput.addEventListener('blur', function() {
        this.placeholder = '密码';
        password.className = 'password';
    }) 

    // 拖拽界面
    // 新的坐标 = 鼠标离盒子内距离 - 鼠标距离在网页距离
    var top = this.document.querySelector('.top');
    top.addEventListener('mousedown', function(e) {
        var x = e.pageX - login.offsetLeft;
        var y = e.pageY - login.offsetTop;
        document.addEventListener('mousemove', move);
        function move(e) {
            login.style.left = e.pageX - x + 'px';
            login.style.top = e.pageY - y + 'px';
        }
        document.addEventListener('mouseup', function() {
            document.removeEventListener('mousemove', move);
        })
    })

    // 手机登录
    var ico = this.document.querySelector('.icon-ico');
    var mobile = this.document.querySelector('.mobile');
    var bottom = this.document.querySelector('.bottom');
    var head = this.document.querySelector('.head');
    var back = this.document.querySelector('.back');
    ico.addEventListener('click', function() {
        mobile.style.display = 'block';
        bottom.style.display = 'none';
        head.style.display = 'none';
    })
    back.addEventListener('click', function() {
        bottom.style.display = 'block';
        head.style.display = 'block';
        mobile.style.display = 'none';
    })

    // 设置
    var shezhi = this.document.querySelector('.icon-shezhi');
    var setup = this.document.querySelector('.setup');
    var setupBack = setup.querySelector('.back');
    shezhi.addEventListener('click', function() {
        setup.style.display = 'block';
        bottom.style.display = 'none';
        head.style.display = 'none';
    })
    setupBack.addEventListener('click', function() {
        setup.style.display = 'none';
        bottom.style.display = 'block';
        head.style.display = 'block';
    })

    // 2.信息
    // 登录打开
    var message = this.document.querySelector('.message');
    var loginBtn = this.document.querySelector('.loginBtn');
    var login = this.document.querySelector('.login');
    loginBtn.addEventListener('click', function() {
        if (textInput.value == '' && passwordInput.value == '') {
            textInput.value = '请输入账号再登录';
            textInput.addEventListener('focus', function () {
                textInput.value = '';
            })
        } else if (textInput.value == '' && passwordInput.value != '') {
            textInput.value = '请输入账号再登录';
        } else if (textInput.value != '' && passwordInput.value == '' && textInput.value > '0' && textInput.value < '9') {
            textInput.value = '请输入密码再登录';
            textInput.addEventListener('focus', function () {
                textInput.value = '';
                passwordInput.value = '';
            })
        } else if (textInput.value > '0' && textInput.value < '9'){
            login.style.display = 'none';
            message.style.display = 'block';
        } else {
            textInput.value = '请输入数字';
        }
    })
})