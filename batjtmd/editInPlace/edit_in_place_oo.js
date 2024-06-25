// 为了让js 更好的适合大型企业级开发，原型式的面向对象 升级为传统面向对象
// 拥抱更多其他语言程序员
// class  extend  implement  oo 能力用出来
// 虽是es5没有的class , 本质任然是原型式的，只是语法糖 

class EditInPlace {
    constructor(storageKey, container, value = '这个家伙很懒，什么都没有留下') {
        console.log(this.value);
        this.storageKey = storageKey;
        this.container = container;
        this.value = value;
        // 将动态创建文本和编辑input的dom 封装，代码的管理好
        this.createElement();
        // console.log(this.value)
        this.attachEvents();
    }
    createElement() {
        this.editElement = document.createElement('div');
        // 添加一个子元素
        this.container.appendChild(this.editElement);
        
        // signature 文本值
        this.staticElement = document.createElement('span');
        this.staticElement.innerHTML = this.value;
        this.editElement.appendChild(this.staticElement);

        // input 
        this.fieldElement = document.createElement('input');
        this.fieldElement.type = 'text';
        this.fieldElement.value = this.value;
        this.editElement.appendChild(this.fieldElement);
        
        // 确定按钮
        this.saveButton = document.createElement('input')
        this.saveButton.type = 'button';
        this.saveButton.value = '保存';
        this.editElement.appendChild(this.saveButton);

        // 取消按钮
        this.cancelButton = document.createElement('input')
        this.cancelButton.type = 'button';
        this.cancelButton.value = '取消';
        this.editElement.appendChild(this.cancelButton);

        //初始文本状态
        this.converToText();
    }
    attachEvents() {
        this.staticElement.addEventListener('click', () => {
            this.converToEdit();    
        })
        this.saveButton.addEventListener('click', () => {
            this.save();
        })
        this.cancelButton.addEventListener('click', () => {
            this.converToText();
        })
    }
    converToText(){
        this.staticElement.style.display = 'inline';
        this.fieldElement.style.display = 'none';
        this.saveButton.style.display = 'none';
        this.cancelButton.style.display = 'none';
    }
    // 编辑状态
    converToEdit() {
        this.staticElement.style.display = 'none';
        this.fieldElement.style.display = 'inline';
        this.saveButton.style.display = 'inline';
        this.cancelButton.style.display = 'inline';
    }
    save() {
        this.value = this.fieldElement.value;
        
    }
    get value() {
        console.log('-------|||')
        return this.value
    }
    set value(value) {
        console.log('++++++++++')
        this.value = value;
        this.staticElement.innerHTML = this.value;
        this.converToText();   
        // html5 localStorage 
        localStorage.setItem(this.storageKey, this.value)
    }
}