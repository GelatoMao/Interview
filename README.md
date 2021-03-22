# 面试常考知识点

## HTML
### 1. 如何理解 HTML 语义化的
- HTML5语义化标签是指正确的标签包含正确的内容，结构良好，便于阅读。比如nav表示导航条，类似的还有article、header、footer等标签。
- 最典型的栗子就是header，footer等，它可以让你在没有样式的情况下，就大概能想到，他就是个头部或者底部。他存在的意义，就是让前端开发人员，在开发过程中，更容易去阅读代码，以及明白这些代码的意义。
- 能够更好的展示内容结构
- 便于团队的维护与开发 
- 有利于SEO，爬虫可以分析每个关键词的权重
- 方便其他设备解析 (如屏幕阅读器)
### 2. meta viewport 是做什么用的，怎么写？
### 3. Doctype的作用 严格模式与混杂模式的区别
- <!DOCTYPE>用于告知浏览器该以何种模式来渲染文档
- 严格模式下：页面排版及JS解析是以该浏览器支持的最高标准来执行
- 混杂模式：不严格按照标准执行，主要用来兼容旧的浏览器，向后兼容
   
## CSS
### 1. 居中
#### 水平垂直居中
- Flex 方案 [优点：不需要固定居中元素的宽高]
- Grid 方案 [优点：不需要固定居中元素的宽高]
- absolute + transform [优点：不需要固定居中元素的宽高 translate 属性是根据元素自身计算的]
- absolute + calc [缺点：需要固定居中元素的宽高]
- absolute + 负 margin [缺点：需要固定居中元素的宽高]
- absolute + margin: auto [该方案的原理是：使用了 CSS 中的定位属性（absolute、fixed 等）后，如果 left 设置了具体值，没有设置 right 和 width，那么就会自动计算，把剩余的空间分配给 right 和 width。如果 left、right 和 width 都设置了具体值，并且没有占满横向空间，那么剩余空间就处于待分配状态，此时设置 margin: auto; 意味着把剩余的空间分配给 margin，并且左右均分，所以就实现了水平居中，垂直方向同理。][缺点：left: 0; right: 0; 相当于 width: 100%; top: 0; bottom: 0; 相当于 height: 100%; 需要固定居中元素的宽高，否则其宽高会被设为 100%（副作用）]
- writing-mode
#### 垂直居中
- table-cell + vertical-align [优点：不需要固定居中元素的高。]
- inline-block + line-height [缺点：需要知道其父元素高度] [优点：不需要固定居中元素的高]
- inline-block + vertical-align
- 图片使用line-height+vertical-align进行垂直居中 
#### 图片在某个容器中居中
- 父元素固定宽高，利用定位及设置子元素margin值为自身的一半
- 父元素固定宽高，子元素设置position:absolute，margin：auto 平均分配margin
- css3属性 transform。子元素设置position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)
- 将父元素设置成display:table,子元素设置为单元格display:table-cell
- 弹性布局display:flex 设置align-items:center;justify-content:center
### 2. BFC
### 3. 两种盒模型
- IE盒模型：width=content+padding+border  box-sizing:border-box
- 标准W3C盒模型：width=content  box-sizing:content-box
### 4. flex 常用属性
主要记录项目(子元素)的属性：order，flex-grow，flex-shrink，flex-basis，flex，align-self
- order属性定义项目的排列顺序，数值越小，排列越靠前，默认为0
- flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍
- flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。
- flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）
- flex属性是flex-grow，flex-shrink和flex-basis的简写，默认值为0 1
auto，后两个属性可选
- align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch
### 5. CSS 选择器优先级
- #ID > .class > 标签选择符 (!important 优先级高)
- 1 标签选择器
- 10 类选择器
- 100 id选择器
### 6. 清除浮动
### 7. 伪类和伪元素区别
- 区别：伪类的操作对象是文档树中已存在的元素，而伪元素是创建一个文档树外的元素。伪类与伪元素的区别就在于：有没有创建一个文档树之外的元素
- 伪类用于当已有元素处于某种状态时候，为其添加对应的样式，这个状态是根据用户行为变化而变化的。比如说hover，虽然它和普通的css类似，可以为已有的元素添加样式，但是它只有处于dom树无法描述的状态才能为元素添加样式，所以称为伪类
- 伪元素用于创建一些原本不在文档树中的元素，并为其添加样式，比如说 ::before。虽然用户可以看到这些内容，但是其实他不在文档树中。
- css规范中使用两个双冒号 :: 来表示伪元素，一个冒号 : 来表示伪类。例如: ::before ， :hover
### 8. px、em、rem、vw、百分比的区别
### 9. CSS中通过哪些属性定义，让DOM元素不显示在浏览器可视范围内
- display: none (基本) 隐藏对应的元素但不挤占该元素原来的空间，元素的宽度、高度等各种属性值都将丢失
- visibility: hidden (基本)，元素仅在视觉上看不见，但它所占据的空间位置仍然存在
- 宽高为0 (技巧)
- 透明度为0 (技巧) opacity = 0
- z-index: -1000 (技巧)
**区别：** opacity=0，该元素隐藏起来了，但不会改变页面布局，**并且如果该元素已经绑定一些事件，如click事件，那么点击该区域，也能触发点击事件**。visibility=hidden，该元素隐藏起来了，但不会改变页面布局，**但是不会触发该元素已经绑定的事件**。display=none，把元素隐藏起来，并且会改变页面布局，可以理解成在页面中把该元素删除掉一样。
### 10. 行内元素和块级元素的具体区别
- 常见块元素：：div p h1 h2 form ul ol li dl dt
- 常见行内元素：a b br i span input select img label textarea
- 块元素：总是独占一行，宽度、高度、内边距和外边距都可控制。默认情况下，块极元素宽度自动填满其父元素宽度。
- 内联元素：和相邻的内联元素在同一行，宽度、高度、内边距的top/bottom和外边距的top/bottom都不可改变。内联元素的padding和margin的left和right是可以设置的。其宽度随元素的内容而变化
- 浏览器还有默认的inline-block元素（拥有内在尺寸，可设置高宽，但不会自动换行）：<input> 、<img> 、<button> 、<texterea> 、<label>
- inline-block：能设置宽度高度，margin/padding水平垂直方向都有效
### 11. 外边距重叠
- 在CSS中，相邻的两个盒子（可能是兄弟关系也可能是祖先关系）的外边距可以结合成一个单独的外边距，所结合成的外边距称为折叠外边距
- 折叠结果遵循下列计算规则：
  - 两个相邻的外边距都是正数时，折叠结果是它们两者之间较大的值
  - 两个相邻的外边距都是负数时，折叠结果是两者绝对值的较大值
  - 两个外边距一正一负时，折叠结果是两者的相加的和
- 父元素无border、padding时，子元素的margin-top/bottom会与父元素的margin产生重叠问题。解决办法
### 12. CSS属性继承
- 可继承：font-size font-family color ul li dl dd dt
- 不可继承：border padding margin width height 
### 13. b标签和strong标签，i标签和em标签的区别
- 后者有语义，前者则无
### 14. rgba()和opacity的透明效果的异同
- opacity 作用于元素，以及元素内的所有内容的透明度，比如字体等
- rgba()只作用于元素的颜色或其背景色（设置rgba透明的元素的子元素不会继承透明效果）
### 15. CSS实现幻灯片效果
- CSS3 animation动画
### 16. 超链接访问过后 hover样式就不出现的问题
被点击访问过的超链接样式不再具有 hover 和 active 了,解决方法是改变CSS属性的排列顺序:L-V-H-A（link,visited,hover,active）
### 17. absolute的 containing block 计算方式与正常留的不同之处
无论属于哪种,都要先找到其祖先元素中最近的position值不为 static的元素,然后再判断：
- 若此元素为 inline 元素,则 containing block 为能够包含这个元素生成的第一个和最后一个 inline box 的 padding box (除 margin, border 外的区域) 的最小矩形
- 否则，则由这个祖先元素的 padding box 构成，如果往上一直找不到,则为 initial containing block
tips:
- absolute: 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位
- fixed: 生成绝对定位的元素，相对于浏览器窗口进行定位
- relative: 生成相对定位的元素，相对于其正常位置进行定位
### 18. 居中浮动元素
### 19. CSS3新增伪类
- p:first-of-type 选择属于其父元素的首个 <p> 元素的每个 <p> 元素
- p:last-of-type 选择属于其父元素的最后 <p> 元素的每个 <p> 元素
- p:only-of-type 选择属于其父元素唯一的 <p> 元素的每个 <p> 元素
- p:only-child 选择属于其父元素的唯一子元素的每个 <p> 元素
- p:nth-child(2) 选择属于其父元素的第二个子元素的每个 <p> 元素
- :enabled、:disabled 控制表单控件的禁用状态
- :checked，单选框或复选框被选中
### 20. 画1px的线/画0.5px的线
- 采用meta viewport的方式 viewport只针对于移动端，只在移动端上才能看到效果
`<meta name="viewport" content="width=device-width, initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5"/>
`
- 采用 border-image的方式
- 采用transform: scale()的方式 
### 21. transition 和 animation 的区别
### 22. 清除浮动
### 23. CSS定位
- fixed: 元素的位置相对于浏览器窗口是固定的，即使窗口是滚动的它也不会移动。fixed定位使元素的位置与文档流无关，因此不占据空间。fixed定位的元素和其他元素重叠
- relative: 如果对一个元素进行相对定位，它将出现在它所在的位置上。然后，可以通过设置垂直或水平位置，让这个元素“相对于”它的起点进行移动。在使用相对定位时，无论是否进行移动， 元素仍然占据原来的空间。因此，移动元素会导致它覆盖其它框。
- absolute: 绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于<html>。absolute定位使元素的位置与文档流无关，因此不占据空间。absolute定位的元素和其他元素重叠
### 24. CSS画三角形
- 宽高设置为0 
### 25. CSS画正方体
### 26. 背景颜色填充区域
background-color设置的背景颜色会填充元素的content、padding、border区域
### 27. line-height和height的区别
- line-height一般是指布局里面一段文字上下行之间的高度，是针对字体来设置的，height一般是指容器的整体高度
### 28. z-index
### 29. calc()属性
### 30. css3 新特性
- CSS3边框如 border-radius，box-shadow
- CSS3背景如 background-size(都是等比缩放)，background-origin
  - background-size：cover 铺满整个显示区域，如果显示比例和显示区域的比例相差很大某些部分会不显示
  - background-size: contain 背景图覆盖整个容器(若一边碰到容器边缘，则停止覆盖，导致部分区域是没有背景图的)
- CSS3 2D，3D转换如transform：translate(X|Y|Z)位移 scale缩放 rotate旋转 skew倾斜 matrix矩阵(按照自己设定的公式实现变形)
- CSS3 动画如 animation
### 31. 文本省略号
- 多行文本省略号
```
display: -webkit-box
-webkit-box-orient:vertical
-web-line-clamp:3
overflow:hidden
```
- 单行文本省略号
```
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
```

## JS
### 1. ES6语法
### 2. 对象
### 3. 继承
- 原型链继承
  - 所有实例共享父类实例属性,引用属性被修改时,所有都会被改
  - 可以获得父构造函数以及原型属性
  - 无法像父类传参
  - 原型链继承时,当原型链属性修改,其他实例化的对象也会修改
- 构造函数继承
  - 只能继承构造函数的属性,无法继承原型属性
  - 每个新实例都有父类构造函数的副本
  - 每个实例都是重新实例化构造函数,不存在共享属性
  - 可以通过Parent.call(this,params)传递参数到父类构造函数
  - 可传参
- 组合继承
  - 构造函数继承+prototype实例对象继承组合继承
  - 构造函数继承可传参
  - 实例对象原型链继承,保证属性是每个对象独有的
  - 会造成两次调用父类构造函数
- 寄生继承
  - 可以将最开始的对象扩展后,返回被继承
  - 通原型链继承一样,此时无法获取到构造函数属性
  - 寄生继承直接指向父类的prototype,所以不会重复调用父类的情况
### 4. 类
### 5. this指向
### 6. 异步 单线程
### 7. 原型 原型链
- 当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。
- 原型也是一个对象，既然是对象，就可以用最原始的方式创建它
- 原型对象就是通过Object构造函数生成的，实例的__proto__指向构造函数的 prototype
### 8. 执行上下文
- JS引擎创建了执行上下文栈（Execution context stack，ECS）来管理执行上下文
- 最先遇到的是全局代码，所以初始化的时候首先就会向执行上下文栈压入一个全局执行上下文，用globalContext表示它，并且只有当整个应用程序结束的时候，ECStack才会被清空，所以程序结束之前，ECStack最底部永远有个globalContext
- 当执行一个函数的时候，就会创建一个执行上下文，并且压入执行上下文栈，当函数执行完毕的时候，就会将函数的执行上下文从栈中弹出
- 每个执行上下文，都有三个重要属性
  - 变量对象(Variable object，VO)
  - 作用域链(Scope chain)
  - this
### 9. 作用域 作用域链
- 作用域规定了如何查找变量，也就是确定当前执行代码对变量的访问权限
- JS采用词法作用域(lexical scoping)，也就是静态作用域
- 词法作用域，函数的作用域在函数定义的时候就决定了 作用域基于函数创建的位置
- 动态作用域，函数的作用域是在函数调用的时候才决定的
### 10. 闭包/立即执行函数 
- 闭包就是能够读取其他函数内部变量的函数，或者子函数在外调用，子函数所在的父函数作用域不会被释放。
### 11. 函数防抖和函数节流
- 事件频繁触发可能造成的问题
  -  一些浏览器事件:window.onresize、window.mousemove等，触发的频率非常高，会造成浏览器性能问题
  -  如果向后台发送请求，频繁触发，对服务器造成不必要的压力
- 如何限制事件处理函数频繁调用
  - 函数节流
  - 函数防抖
-  函数节流(throttle)
  - 理解: 在函数需要频繁触发时: 函数执行一次后，只有大于设定的执行周期后才会执行第二次，**适合多次事件按时间做平均分配触发**
  - 场景：窗口调整（resize） 页面滚动（scroll）DOM 元素的拖拽功能实现（mousemove）抢购疯狂点击（click）
- 函数防抖(debounce)
  - 理解:在函数需要频繁触发时: 在规定时间内，只让最后一次生效，前面的不生效。**适合多次事件一次响应的情况**
  - 场景：输入框实时搜索联想（keyup/input）
### 12. 手写ajax
### 13. 手写call, bind, apply
- call(obj)/apply(obj)：如果obj是null或者undefined，this为window
- 自定义call()/apply()
  1. 给obj添加一个临时方法, 方法名任意, 值为当前函数
  2. 通过obj调用这个临时方法, 并将接收的参数传入
  3. 删除obj上的这个临时方法属性
- 自定义实现bind()
  1. 返回一个新函数
  2. 在新函数内部通过原函数对象的call方法来执行原函数，指定原函数的this为obj，指定参数为bind调用的参数和后面新函数调用的参数
### 14. 词法作用域
### 15. 自定义数组声明式方法
- map
- reduce
- filter
- find
- findIndex
- every
- some
### 16. 深拷贝
### 17. 数组去重
- 理解:根据当前数组产生一个去除重复元素后的新数组 如: [2, 3, 2, 7, 6, 7] ==> [2, 3, 7, 6]
- 实现:
  - 利用forEach()和indexOf() 说明: 本质是双重遍历, 效率差些
  - 利用forEach() + 对象容器 说明: 只需一重遍历, 效率高些
  - 利用ES6语法: from + Set 或者 ... + Set 说明: 编码简洁
- hash
- [...new Set(array)]
- WeakMap
### 18. 手写promise Promise.all, Promise.race
### 19. Eventloop 事件循环
### 20. instanceof的实现原理
- instanceof 主要的作用就是判断一个实例是否属于某种类型
### 21. for in 和 for of 的区别
- 推荐在循环对象属性的时候，使用 for...in，在遍历数组的时候使用 for...of
- for...in循环出的是key，for...of循环出的是value
- for...of是ES6新引入的特性，修复了ES5引入的for...in的不足
- for...of不能循环普通的对象，需要通过和Object.keys()搭配使用
### 22. 数组扁平化
- 数组的扁平化，就是将一个嵌套多层的数组 array (嵌套可以是任何层数)转换为只有一层的数组 [1,[3,[2,4]]] ===> [1,3,2,4]
- 循环数组元素，如果还是一个数组，就递归调用该方法
- 实现方法
  - 递归 + reduce() + concat()
  - ... + some() + concat()
### 23. 函数柯里化
- 柯里化 =》函数的多参变单参 fn(2,3,4)变成fn(2)(3)(4)
### 24. 大数加法
### 25. 伪数组转数组
伪数组：
- 有length属性，也是数值下标的对象
- 按索引方式存储数据
- 不具备Array.prototype上的方法。没有内置方法，不具有数组的push()、pop()等方法
常见的伪数组：
- arguments
- document.getElementsByClassName
伪数组转数组方法：
- ...运算符 三点展开 扩展运算符
- Array.from(arguments)
- Array.prototype.slice.call(arguments)
- [].slice.call(arguments)
### 26. 数组乱序(洗牌算法)
### 27. new 构造函数过程
1. 新生成一个对象
2. 对象原型指向构造函数的prototype
3. 绑定 this，执行构造函数
4. 返回该对象 
### 28. 类型的判断
-  typeof：对于原始类型来说，除了 null 都可以显示正确的类型。但是对于对象来说，除了函数都会显示 object，所以它的作用，仅仅只能判断原始类型，判断不了对象
  1. "undefined"——如果这个值未定义
  2. "boolean"——如果这个值是布尔值
  3. "number"——如果这个值是数值
  4. "object"——如果这个值是对象或 null
  5. "function"——如果这个值是函数
  6. "symbol"——es6新增的symbol类型
-  instanceof：用来判断对象是不是某个构造函数的实例，会沿着原型链找的。但有一点值得注意，instanceof 检测的是原型链上每一个类型，都会返回true。所以，只能用来判断两个对象是否属于实例关系， 而不能判断一个对象实例具体属于哪种类型。
-  constructor
-  Object.prototype.toString.call()：相对比较不错的方案。建议使用。toString() 是 Object 的原型方法，调用该方法，默认返回当前对象的 [[Class]] 。这是一个内部属性，其格式为 [object Xxx] ，其中 Xxx 就是对象的类型
-  **判断是否是数组**
  - Array.isArray(arr)
  - Object.prototype.toString.call(arr) === '[Object Array]'
  - arr instanceof Array
  - array.constructor === Array
### 29. for循环
- 效率问题： for > forEach > map
- 选择对应的循环
  - 如果需要将数组按照某种规则映射为另一个数组 map
  - 如果需要进行简单的遍历 forEach 或者 for of 
  - 如果需要对迭代器进行遍历 for of
  - 如果需要过滤出符合条件的项 filter
### 30. 模块化
### 31. 变量声明
- 变量声明（var）会有变量提升。变量会提前初始化，也可以提前访问。当项目变量复杂的时候，很容易产生bug。es6就在这个时候，引入了let跟const。
- 引入let与const不仅解决了变量提升的问题，他们的不同如下：
  - 局部作用域：let，const声明产生块极作用域，不会产生变量提升
  - 禁止重复声明：如果一个标识符已经在代码块内部被定义，那么在此代码块内使用同一个标识符进行 let 声明就会导致抛出错误
  - 区分常量与变量：let与const的区别，const 声明会阻止对于变量绑定与变量自身值的修改
  - 暂时性死区 
### 32. 箭头函数跟普通函数的区别：
- 箭头函数的this不是指向window，而是父级
- 不能使用arguments对象
- 不能用作构造函数，不能够使用new命令，否则会抛出一个错误
- 不可以使用yield命令，因此箭头函数不能用作Generator函数
### 33. 重绘和回流
- 重绘：当节点需要更改外观而不会影响布局的，比如改变 color 就叫称为重绘
- 回流：布局或者几何属性需要改变就称为回流
- 回流必定会发生重绘，重绘不一定会引发回流，回流所需的成本比重绘高的多，改变深层次的节点很可能导致父节点的一系列回流
**减少重绘和回流的细节**
- 使用 translate 替代 top
- 使用 visibility 替换 display: none ，因为前者只会引起重绘，后者会引发回流（改变了布局）
- 尽量算出结果再去重绘把 DOM 离线后修改，比如：先把 DOM 给 display:none (有一次 Reflow)，然后你修改 100 次，然后再把它显示出来
- 动画实现的速度的选择，动画速度越快，回流次数越多，也可以选择使用 requestAnimationFrame  Load 和 DOMContentLoaded 区别。Load 事件触发代表页面中的 DOM，CSS，JS，图片已经全部加载完毕。DOMContentLoaded 事件触发代表初始的 HTML 被完全加载和解析，不需要等待 CSS，JS，图片加载。
### 34. 加载
- 异步加载js的方法
  - defer：只支持IE如果您的脚本不会改变文档的内容，可将 defer 属性加入到<script>标签中，以便加快处理文档的速度。因为浏览器知道它将能够安全地读取文档的剩余部分而不用执行脚本，它将推迟对脚本的解释，直到文档已经显示给用户为止
  - async：HTML5 属性，仅适用于外部脚本；并且如果在IE中，同时存在defer和async，那么defer的优先级比较高；脚本将在页面完成时执行
- 图片的懒加载和预加载
  - 预加载：提前加载图片，当用户需要查看时可直接从本地缓存中渲染
  - 懒加载：懒加载的主要目的是作为服务器前端的优化，减少请求数或延迟请求数
### 35. 解决异步回调地狱
- promise
- generator
- async/await

## DOM
### 1. 事件委托
- 事件委托指的是，不在事件的发生地（直接dom）上设置监听函数，而是在其父元素上设置监听函数，通过事件冒泡，父元素可以监听到子元素上事件的触发，通过判断事件发生元素DOM的类型，来做出不同的响应。
- 举例：最经典的就是ul和li标签的事件监听，比如我们在添加事件时候，采用事件委托机制，不会在li标签上直接添加，而是在ul父元素上添加。
- 类似keydown，onclick这种鼠标事件，键盘事件，支持冒泡的事件类型才有事件委托，类似接口事件:change，submit这种就没有事件代理
- 优点：
  - **减少内存消耗**，假设有一个列表，里面很多li，如果为他们每一个都绑定事件就很浪费内存，最好是把这个时间绑定到外层 ul 上统一处理。所以事件委托可以大量减少内存的消耗，节约效率。
  - **动态绑定事件**，假如我们需要做到动态增删列表内的元素，那么在每一次改变的时候又得重新进行事件绑定。如果用了事件委托就没有这烦恼了，因为事件绑定在父元素上，跟目标元素增删没有关系。所以事件委托可以动态绑定时间，减少很多重复工作。比较合适动态元素的绑定，新添加的子元素也会有监听函数，也可以有事件触发机制。
### 2. 用mouse事件写一个可拖曳的div
- 在h5之前，原生实现拖拽是根据Mouse事件来实现的，需要用到以下这三个事件mousedown，mouseup，mousemove
- mousedown 事件在指针设备按钮按下时触发；mouseup事件在指针设备按钮抬起时触发；当指针设备( 通常指鼠标 )在元素上移动时, mousemove 事件被触发
- clientX，clientY标识的是鼠标的坐标，分别标识横坐标和纵坐标，并且我们用offsetX和offsetY来表示元素的元素的初始坐标
- 移动的举例应该是：鼠标移动时候的坐标-鼠标按下去时候的坐标。定位信息为：鼠标移动时候的坐标-鼠标按下去时候的坐标+元素初始情况下的offetLeft
- 拖拽的同时是绝对定位，我们改变的是绝对定位条件下的left 以及top等等值
- 也可以通过html5的拖放（Drag 和 drop）来实现
### 3. 事件流
-  事件流描述的是从页面中接受事件的顺序，DOM2级事件 规定的事件流包括三个阶段：事件捕获阶段、处于目标阶段、事件冒泡阶段
-  addEventListener 是DOM2 级事件新增的指定事件处理程序的操作，这个方法接收3个参数：要处理的事件名、作为事件处理程序的函数和一个布尔值。最后这个布尔值参数如果是true，表示在捕获阶段调用事件处理程序；如果是false，表示在冒泡阶段调用事件处理程序
-  IE的事件流是 事件冒泡流
-  标准的浏览器事件流是 事件捕获流
#### 让事件先冒泡后捕获
在DOM标准事件模型中，是先捕获后冒泡。但是如果要实现先冒泡后捕获的效果，对于同一个事件，监听捕获和冒泡，分别对应相应的处理函数，监听到捕获事件，先暂缓执行，直到冒泡事件被捕获后再执行捕获之间。
### 4. 事件是如何实现的
基于发布订阅模式，就是在浏览器加载的时候会读取事件相关的代码，但是实际只有等到具体的事件触发的时候才会执行。
比如点击按钮，这是个事件（Event），而负责处理事件的代码段通常被称为事件处理程序（Event Handler），也就是「启动对话框的显示」这个动作。
在Web端，常见的就是DOM事件：
- DOM0 级事件，直接在 html 元素上绑定 on-event，比如 onclick，取消的话，dom.onclick = null，同一个事件只能有一个处理程序，后面的会覆盖前面的。
- DOM2 级事件，通过 addEventListener 注册事件，通过 removeEventListener 来删除事件，一个事件可以有多个事件处理程序，按顺序执行，捕获事件和冒泡事件
- DOM3级事件，增加了事件类型，比如 UI 事件，焦点事件，鼠标事件
### 5. JS各种位置 clientHeight,scrollHeight,offsetHeight ,以及scrollTop, offsetTop,clientTop的区别
- clientHeight：表示的是可视区域的高度，不包含border和滚动条
- offsetHeight：表示可视区域的高度，包含了border和滚动条
- scrollHeight：表示了所有区域的高度，包含了因为滚动被隐藏的部分
- clientTop：表示边框border的厚度，在未指定的情况下一般为0
- scrollTop：滚动后被隐藏的高度，获取对象相对于由offsetParent属性指定的父坐标(css定位的元素或body元素)距离顶端的高度

## 网络
### 1. HTTP 状态码
- 1xx 收到请求，正在处理
- 2xx 该请求已成功收到，理解并接受
- 3xx 表示需要进一步操作 重定向
- 4xx 表示浏览器/客户端方面出错
- 5xx 表示服务器方面出错


- 200: 成功，正常处理并返回
- 204: 处理成功，但是返回的主体信息没有内容
- 301: 永久重定向，请求的资源分配给另一个url
- 302: 临时重定向，希望本次访问可以通过另一个url来获取资源
- 303: 应该使用get来访问另一个url
- 304: 表示协商缓存可用
- 400: 请求中有语法错误
- 401: 未经许可，要验证
- 403: 拒绝访问，权限不够
- 404: 访问资源不存在
- 500: 请求异常，也可能是前端bug
- 503: 服务器停机维护，无法处理请求
### 2. HTTP 缓存
- http缓存作用范围：至少需要2次http请求
#### http缓存分类  
浏览器缓存分为强缓存和协商缓存，浏览器加载一个页面的简单流程如下：
1. 强缓存不会向服务器发送请求，直接从缓存中读取资源 每次访问本地缓存直接验证看是否过期。(Expires和Cache-Control)
2. 如果未命中强缓存，则浏览器会将资源加载请求发送到服务器，服务器来判断浏览器本地缓存是否有效。协商缓存命中，服务器会将这个请求返回，但是不会返回这个资源的数据 而是告诉客户端可以直接从缓存拿 。（协商缓存）(Last-Modified / If-Modified-Since和Etag / If-None-Match)
3. 如果未命中协商缓存，则服务器会将完整的资源返回给浏览器，浏览器加载新资源，并更新缓存。（新的请求）
#### 强缓存
- 命中强缓存时，浏览器并不会将请求发送给服务器。在Chrome的开发者工具中看到http的返回码是200，但是在Size列会显示为(from cache)
- 强缓存是利用http的返回头中的Expires或者Cache-Control两个字段来控制的，用来表示资源的缓存时间
  - Expires：是绝对时间，是服务器端的具体的时间点。所以当客户端本地时间被修改以后，服务器与客户端时间偏差变大以后，就会导致缓存混乱。比如Expires:Thu,31 Dec 2037 23:59:59 GMT。这个时间代表着这个资源的失效时间，也就是说在2037年12月31日23点59分59秒之前都是有效的。
  - Cache-Control：是相对时间，由于是相对时间，并且都是与客户端时间比较，所以服务器与客户端时间偏差也不会导致问题。例如Cache-Control:3600，代表着资源的有效期是3600秒
#### 协商缓存
- 若未命中强缓存，则浏览器会将请求发送至服务器。服务器根据http头信息中的Last-Modify/If-Modify-Since或Etag/If-None-Match来判断是否命中协商缓存。如果命中，则http返回码为304，浏览器从缓存中加载资源
#### 缓存流程
1. 浏览器在加载资源时，先根据这个资源的一些  http header  判断它是否强缓存，强缓存如果命中，浏览器直接从自己的缓存中读取资源，不会发请求到服务器。比如某个css文件，如果浏览器在加载它所在的网页时，这个css文件的缓存配置命中了强缓存，浏览器就直接从缓存中加载这个css，连请求都不会发送到网页所在服务器。
2. 当强缓存过期的时候，浏览器一定会发送一个请求到服务器，通过服务器端依据资源的另外一些http header验证这个资源是否命中协商缓存，如果协商缓存命中，服务器会将这个请求返回，但是不会返回这个资源的数据，而是告诉客户端可以直接从缓存中加载这个资源，于是浏览器就又会从自己的缓存中去加载这个资源。 
3. 强缓存与协商缓存的共同点是：如果命中，都是从客户端缓存中加载资源，而不是从服务器加载资源数据；区别是：强缓存不发请求到服务器，协商缓存会发请求到服务器。
4. 当协商缓存也没有命中的时候，浏览器直接从服务器加载资源数据。那么代表该请求的缓存失效，返回200，重新返回资源和缓存标识，再存入浏览器缓存中；生效则返回304，继续使用缓存
#### http缓存实现技术
- ETag、CacheControl、Expires 的异同
  - ETag 是通过对比浏览器和服务器资源的特征值（如MD5）来决定是否要发送文件内容，如果一样就只发送 304（not modified）
  - Expires 是设置过期时间（绝对时间），但是如果用户的本地时间错乱了，可能会有问题
  - CacheControl: max-age=3600 是设置过期时长（相对时间），跟本地时间无关。
- Expires和CacheControl的区别：CacheControl是多少秒后过期，是相对时间，Expires是在某个时间点过期。现在基本都用CacheControl
#### WEB缓存
- Web 缓存大致可以分为：数据库缓存、服务器端缓存（代理服务器缓存、CDN 缓存）、浏览器缓存
- 浏览器缓存也包含很多内容： HTTP 缓存、indexDB、cookie、localstorage 等等。
- 服务器可以主动把需要缓存的数据或者页面内容存到redis(类似数据库比数据库快)中，后面可以从里面取就不去数据库拿了
### 3. GET 和 POST 的区别
- GET请求会被浏览器主动cache，而POST不会，除非手动设置
  - get请求类似于查找的过程，用户获取数据，可以不用每次都与数据库连接，所以可以使用缓存
  - post不同，post做的一般是修改和删除的工作，所以必须与数据库交互，所以不能使用缓存。因此get请求适合于请求缓存
- GET请求只能进行url编码，而POST支持多种编码方式
- GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留
- GET请求在URL中传送的参数是有长度限制的，而POST没有，但是这个长度限制是因为浏览器本身有限制，并非GET请求的限制
  - HTTP 协议 未规定 GET 和POST的长度限制
  - GET的最大长度显示是因为 浏览器和 web服务器限制了 URL的长度
  - 不同的浏览器和WEB服务器，限制的最大长度不一样
  - 要支持IE，则最大长度为2083byte，若只支持Chrome，则最大长度 8182byte
- 对参数的数据类型，GET只接受ASCII字符，而POST没有限制
- GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息
- GET参数通过URL传递，POST放在Request body中
- 最根本语义上的区别：GET 用于获取资源，POST 用于提交资源
### 4. Cookie V.S. LocalStorage V.S. SessionStorage V.S. Session
- 传递方式：cookie在浏览器和服务器间来回传递，sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存
- 存储大小：localStorage<=5M，sessionStorage<=5M，cookie<4K
- 有效性：localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；sessionStorage：仅在当前浏览器窗口关闭前有效，不能持久保持；cookie：只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭也不会消失
- 共享机制：localStorage：在所有同源窗口中都是共享的； sessionStorage：同时“独立”打开的不同窗口，即使是同一页面，sessionStorage对象也是不同的；cookie：在所有同源窗口中都是共享的
- Cookie V.S. Session
  - Cookie 是服务器发给浏览器的一段字符串，浏览器每次访问对应域名的时候都要将这个字符串带上去
  - Session 表示浏览器与服务器一段时间内的会话
  - Cookie 存在浏览器的文件里，Session 存在服务器的文件里
  - Session 是基于 Cookie 实现的，具体做法就是把 SessionID 存在 Cookie 里
### 5. HTTP2 和 HTTP1 的区别
- 多路复用
- 服务端推送
### 6. TCP三次握手 四次挥手 
- tcp三次握手，一句话概括 [客户端和服务端都需要确保各自可收发，因此需要三次握手]
- TCP（Transmission Control Protocol， 传输控制协议）是一种面向连接的、可靠的、基于字节流的传输层通信协议。与之对应的是UDP（User Datagram Protocol ，用户数据报协议），是不可靠的传输层协议
- 假设A和B要相互传输信息，在真正传递消息之前，需要先通过一定流程测试信道的连通性。A和B会定一个交互规则，为了执行这个规则会对数据的格式做约定。这个测试信道连通性的规则以及约定的数据格式，就是TCP协议
#### 三次握手
- A需要知道自己刚刚发的试探消息能抵达B（B需要对A发的试探消息给出回应），同时B也需要知道自己发的试探消息A能收到（A也需要对B发的试探消息进行回应）。这个流程应该如下
  1. A发一个试探消息，等待B的回应
  2. B对A发的试探消息进行回应，同时也发送自己的试探消息。回应和新的试探消息可以合成一个消息发送
  3. A回应B发的试探消息
- 一个TCP报文就是一段二进制数据，其中开头的20个字节（1个字节是8位）就包含了当前的报文的交互信息，目前只关注5个信息：ACK、SYN、FIN、序号、确认号。ACK、SYN、FIN都各只占1位(bit)，而序号(seq)和确认号(ack)各占4个字节(4x8=32位)
  - 报文1: [SYN=1, seq=123, ACK=0] SYN为1表示这是询问报文，询问编号是123
  - 报文2: [ACK=1, ack=124, SYN=1, seq=234] ACK和SYN都为1表示这既是应答又是询问报文。对序号为123的报文进行应答(ack等于询问报文的seq+1)。同时自己又询问报文，询问编号是234
  - 报文3:[ACK=1, ack=235, SYN=0] ACK位为1表示这是应答报文，对seq为234的报文进行应答
- 图片真实案例
  1. 客户端发送SYN=1的询问报文给服务器端，seq是n，进入 SYN_SENT 状态。
  2. 服务器端回应一个ACK=1、SYN=1 的应答+询问报文。应答号ack是n+1，询问号seq是m，进入 SYN_RCVD 状态。
  3. 客户端收到后，回应一个ACK=1的应答报文，应答号是m+1，进入 Established 状态。
#### 四次挥手
1. 客户端发送一个FIN(请求结束报文) ，告诉服务器想关闭连接
2. 服务器收到这个FIN ，发回一个ACK
3. 服务器通知应用程序关闭网络连接，应用程序关闭后通知服务器。服务器发送一个FIN给客户端 
4. 客户端发回ACK报文确认 
#### 为什么握手是三次 挥手是四次
- 假设是两步握手。1. A发送询问报文；2. B收到后发送响应报文，准备接收。A收到响应后认为信道正常，开始发送。
- 对于上面的两步握手，A能确信A->B的通道是畅通的，也能确信B->A的通道是畅通的（自己已成功发送消息，又收到了对方的回应）。但B实际上只知道A->B的通道是畅通的，并不知道B->A是否畅通（收到了对方发的消息，但自己发的消息对方是否收到不知道），这无法确定是可靠传输（至少对B来说是可靠性是没保障的）
- 挥手是四次，是因为服务端收到客户端建立连接请求的SYN 报文后，它可以把 ACK 和 SYN 放在一个报文里来发送。但关闭连接时，当服务器收到客户端的 FIN 报文(请求结束报文)通知时，服务器只能发一个回应报文ACK：“哦，我知道了”，然后通知上层传输数据的应用程序。当应用程序完成全部数据发送并告知服务器，服务器才能发送FIN报文告诉客户端可以真正断开连接了。所以这一步ACK报文和FIN报文需要分开发送，因此多了一个步骤。
### 7. 强缓存 协商缓存
### 8. HTTP VS HTTPS
- http和https的基本概念:
  - http: 超文本传输协议，是互联网上应用最为广泛的一种网络协议，是一个客户端和服务器端请求和应答的标准（TCP），用于从WWW服务器传输超文本到本地浏览器的传输协议，它可以使浏览器更加高效，使网络传输减少。
  - https: 是以安全为目标的HTTP通道，简单讲是HTTP的安全版，即HTTP下加入SSL层，HTTPS的安全基础是SSL，因此加密的详细内容就需要SSL。
  - https协议的主要作用是：建立一个信息安全通道，来确保数组的传输，确保网站的真实性。
- http和https的区别:
http传输的数据都是未加密的，也就是明文的，网景公司设置了SSL协议来对http协议传输的数据进行加密处理，简单来说https协议是由http和ssl协议构建的可进行加密传输和身份认证的网络协议，比http协议的安全性更高。 主要的区别如下：
  - Https协议需要ca证书，费用较高。
  - http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议。
  - 使用不同的链接方式，端口也不同，一般而言，http协议的端口为80，https的端口为443
  - http的连接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。
- https协议的工作原理
客户端在使用HTTPS方式与Web服务器通信时有以下几个步骤
  - 客户使用https url访问服务器，则要求web 服务器建立ssl链接。
  - web服务器接收到客户端的请求之后，会将网站的证书（证书中包含了公钥），返回或者说传输给客户端。
  - 客户端和web服务器端开始协商SSL链接的安全等级，也就是加密等级。
### 9. 输入url到展示的过程
1. 进行url解析，根据DNS域名解析，得到对应的ip地址
2. 根据这个ip，找到对应的服务器，发起TCP的三次握手
3. 建立TCP连接后发起HTTP请求(TCP是比HTTP更底层的一个连接协议，IP是TCP下面的一层)
4. 服务器响应HTTP请求，浏览器得到html代码
5. 浏览器解析html代码，并请求html代码中的资源（如js、css、图片等）（先得到html代码，才能去找这些资源）
6. 浏览器对页面进行渲染呈现给用户
7. 服务器关闭关闭TCP连接
8. 返回html之后，会解析html, cssom + domTree = html,然后布局和绘制
   - 构建DOM树(DOM tree)：从上到下解析HTML文档生成DOM节点树（DOM tree），也叫内容树（content tree）
   - 构建CSSOM(CSS Object Model)树：加载解析样式生成CSSOM树
   - 执行JavaScript：加载并执行JavaScript代码（包括内联代码或外联JavaScript文件）
   - 构建渲染树(render tree)：根据DOM树和CSSOM树,生成渲染树(render tree)
   - 渲染树：按顺序展示在屏幕上的一系列矩形，这些矩形带有字体，颜色和尺寸等视觉属性
   - 布局（layout）：根据渲染树将节点树的每一个节点布局在屏幕上的正确位置
   - 绘制（painting）：遍历渲染树绘制所有节点，为每一个节点适用对应的样式，这一过程是通过UI后端模块完成
- 精简版整体的渲染过程：
  1. 处理 HTML 并构建 DOM 树
  2. 处理 CSS 构建 CSSOM 树
  3. 将 DOM 与 CSSOM 合并成一个渲染树
  4. 根据渲染树来布局，计算每个节点的位置
  5. 调用 GPU 绘制，合成图层，显示在屏幕上
#### DNS如何找到域名
1. 首先会搜索浏览器自身的DNS缓存（缓存时间比较短，大概只有1分钟，且只能容纳1000条缓存）
2. 如果浏览器自身的缓存里面没有找到，那么浏览器会搜索系统自身的DNS缓存
3. 如果还没有找到，那么尝试从 hosts文件里面去找
4. 在前面三个过程都没获取到的情况下，就递归地去域名服务器去查找
#### HTTP协议基于TCP来实现的原因
- TCP是一个端到端的可靠的面向连接的协议，HTTP基于传输层TCP协议不用担心数据传输的各种问题（当发生错误时，会重传）
### 10. OSI 七层模型
- 应用层：文件传输，常用协议HTTP，SNMP，FTP 
- 表示层：数据格式化，代码转换，数据加密
- 会话层：建立，解除会话
- 传输层：提供端对端的接口，tcp,udp
- 网络层：为数据包选择路由，IP，ICMP
- 数据链路层：传输有地址的帧
- 物理层：二进制的数据形式在物理媒体上传输数据
### 11. TCP和UDP区别
- UDP
  - 无连接
  - 面向报文，只是报文的搬运工
  - 不可靠，没有拥塞控制
  - 高效，头部开销只有8字节
  - 适合直播、视频、语音、会议等实时性要求高的
- TCP
  - 面向连接：传输前需要先连接
  - 可靠的传输
  - 流量控制：发送方不会发送速度过快，超过接收方的处理能力
  - 拥塞控制：当网络负载过多时能限制发送方的发送速率
  - 不提供时延保障
  - 不提供最小带宽保障
  - 适合文件传输

## 安全
### 1. 浏览器内多个标签页之间的通讯
- redux，vuex 是单页应用里跨页面状态管理，不是多页应用的跨页面数据传递
- 实现多页通讯主要有利用浏览器数据存储方式和服务器方式。浏览器数据存储的方式主要用本地存储方式解决。即调用 localStorage、Cookie等本地存储方式。服务器方式主要使用websocket技术使多页签都监听服务器推送事件来获得其他页签发送的数据
  - 浏览器存储
  - 服务器存储
### 2. JSONP, CORS, 跨域
- 同源策略是一种约定，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，浏览器很容易受到XSS、CSRF等攻击。所谓同源是指"协议+域名+端口"三者相同，即便两个不同的域名指向同一个ip地址，也非同源

### 3. XSS
- XSS(Cross Site Scripting )是跨站脚本攻击：XSS 攻击是指攻击者在网站上注入恶意的客户端代码，通过恶意脚本对客户端网页进行篡改，从而在用户浏览网页时，对用户浏览器进行控制或者获取用户隐私数据的一种攻击方式
- XSS类型：
  - 反射型 （Reflected XSS ） 发出请求时，XSS代码出现在url中，作为输入提交到服务器端，服务器端解析后响应，XSS代码随响应内容一起传回给浏览器，最后浏览器解析执行XSS代码。这个过程像一次反射，所以叫反射型XSS
  - 存储型存  Stored XSS和 Reflected XSS的差别就在于，具有攻击性的脚本被保存到了服务器端（数据库，内存，文件系统）并且可以被普通用户完整的从服务的取得并执行，从而获得了在网络上传播的能力
  - DOM型 （DOM-based or local XSS） 即基于DOM或本地的 XSS 攻击：其实是一种特殊类型的反射型 XSS，它是基于 DOM文档对象模型的一种漏洞。可以通过 DOM来动态修改页面内容，从客户端获取 DOM中的数据并在本地执行。基于这个特性，就可以利用 JS脚本来实现 XSS漏洞的利用
- 防御措施：
  - 输入过滤，避免 XSS 的方法之一主要是将用户输入的内容进行过滤。对所有用户提交内容进行可靠的输入验证，包括对 URL、查询关键字、POST数据等，仅接受指定长度范围内、采用适当格式、采用所预期的字符的内容提交，对其他的一律过滤。(客户端和服务器都要)
  - 输出转义
  - 使用 HttpOnly Cookie

### 4. CSRF
- csrf(Cross-site request forgery)是跨站请求伪造
- 防御措施：主要在服务器端做
  - 服务器中验证请求头，refer字段
  - 加token 主流方式
  - 加验证码 成本较大

## React
### 1. 函数式编程
- 不可变性(Immutability)：在函数式编程中，你无法更改数据，也不能更改。 如果要改变或更改数据，则必须复制数据副本来更改。
- 纯函数(Pure Functions)：
  - 相同输入总是会返回相同的输出
  - 不产生副作用
  - 不依赖于外部状态
- 数据转换(Data Transformations)：数据是不可变的，若想改变数据，总是生成原始数据的转换副本，而不是直接更改原始数据。js中的一些内置函数都不改变现有的数据，而是返回新的数组或对象。如 filter map 等
- 高阶函数 (Higher-Order Functions)：高阶函数是将函数作为参数或返回函数的函数，或者有时它们都有。Array.map，Array.filter 和 Array.reduce 是高阶函数，因为它们将函数作为参数。
- 递归
- 组合
### 2. 虚拟DOM
- 虚拟 DOM 就是用来模拟 DOM 的一个对象，这个对象拥有一些重要属性，并且更新 UI 主要就是通过对比（DIFF）旧的虚拟 DOM 树 和新的虚拟 DOM 树的区别完成的。
- 虚拟DOM是真实DOM的javascript对象表示，与更新真实DOM相比，更新javascript对象更容易，更快捷。
- 虚拟DOM构建过程
  1. React将整个DOM副本保存为虚拟DOM
  2. 每当有更新时，它都会维护两个虚拟DOM，以比较之前的状态和当前状态，并确定哪些对象已被更改。 
  3. 它通过比较两个虚拟DOM差异，并将这些变化更新到实际DOM
  4. 一旦真正的DOM更新，它也会更新UI
- 真实DOM∶ 生成HTML字符串 ＋ 重建所有的DOM元素
- Virtual DOM∶ 生成vNode ＋ DOMDiff ＋ 必要的dom更新
### 3. React中的组件
- 函数/无状态组件：函数或无状态组件是一个纯函数，它可接受参数，并返回react元素。这些都是没有任何副作用的纯函数。这些组件没有状态或生命周期方法
- 类/有状态组件：类或有状态组件具有状态和生命周期，可通过setState()方法更改组件的状态。类组件是通过扩展React创建的。它在构造函数中初始化，也可能有子组件
- 受控组件：受控组件是在 React 中处理输入表单的一种技术。表单元素通常维护它们自己的状态，而react则在组件的状态属性中维护状态。 `<FInput value={x} onChange={fn}/>` 
- 非受控组件：ref `this.input = React.createRef()` `<FInput defaultValue={x} ref={input}/>`
- 区别: 受控组件的状态由开发者维护，非受控组件的状态由组件自身维护（不受开发者控制）
### 4. 生命周期

### 5. React中实现组件通信
-  React 中组件间通信的数据流是单向的，顶层组件可以通过 props 属性向下层组件传递数据，而下层组件不能向上层组件传递数据，兄弟组件之间同样不能。这样简单的单向数据流支撑起了 React 中的数据可控性
- 父子靠 props 传函数
- 爷孙可以传两次 props
- 任意组件用 Redux（也可以自己写一个 eventBus）
- 父传子：父组件通过属性传给子组件，子组件通过this.props属性来使用父组件传递过来的内容
- 子传父：子组件要改变父组件中的数据内容，就要调用父组件中的方法(因为数据在父组件中，那么方法一定写在父组件中，子组件想要调用父组件中的方法去改变父组件中的数据，只要将父组件中的方法传递给子组件即可。状态在哪个组件，更新状态的行为就应该定义在哪个组件)

### 6. redux
- Redux是React的一个状态管理库，Redux将状态管理完全从React中抽象出来
- Action/Reducer/Store/单向数据流
- 常用 API：store.dispatch(action)/store.getState()
- connect原理：react-redux 库提供的一个 API，connect 的作用是让你把组件和store连接起来，产生一个新的组件（connect 是高阶组件）
- Redux 提供了一个叫 store 的统一仓储库，组件通过 dispatch 将 state 直接传入store，不用通过其他的组件。并且组件通过 subscribe 从 store获取到 state 的改变。使用了 Redux，所有的组件都可以从 store 中获取到所需的 state，他们也能从store 获取到 state 的改变。这比组件之间互相传递数据清晰明朗的多
- 单纯的Redux只是一个状态机，是没有UI呈现的，react- redux作用是将Redux的状态机和React的UI呈现绑定在一起，当你dispatch action改变state的时候，会自动更新页面
- 工作流程
  - const store= createStore（fn）生成数据
  - action: {type: Symble('action01), payload:'payload' }定义行为
  - dispatch发起action：store.dispatch(doSomething('action001'))
  - reducer：处理action，返回新的state
  通俗讲：
  - 首先，用户（通过View）发出Action，发出方式就用到了dispatch方法
  - 然后，Store自动调用Reducer，并且传入两个参数：当前State和收到的Action，Reducer会返回新的State
  - State—旦有变化，Store就会调用监听函数，来更新View
-  Redux 中异步的请求
  - 使用react-thunk中间件
  - 使用redux-saga中间件
#### mobox 和 redux 的区别
**共同点**
- 为了解决状态管理混乱，无法有效同步的问题统一维护管理应用状态
- 某一状态只有一个可信数据来源（通常命名为store，指状态容器）
- 操作更新状态方式统一，并且可控（通常以action方式提供更新状态的途径）
- 支持将store与React组件连接，如react-redux，mobx- react
**区别**
- Redux更多的是遵循Flux模式的一种实现，是一个 JavaScript库，它关注点主要是以下几方面
  - Action∶ 一个JavaScript对象，描述动作相关信息，主要包含type属性和payload属性
  - Reducer∶ 定义应用状态如何响应不同动作（action），如何更新状态
  - Store∶ 管理action和reducer及其关系的对象
  - 异步流∶ 由于Redux所有对store状态的变更，都应该通过action触发，异步任务（通常都是业务或获取数据任务）也不例外，而为了不将业务或数据相关的任务混入React组件中，就需要使用其他框架配合管理异步任务流程，如redux-thunk，redux-saga等
- Mobx是一个透明函数响应式编程的状态管理库，它使得状态管理简单可伸缩
  - Action∶定义改变状态的动作函数，包括如何变更状态
  - Store∶ 集中管理模块状态（State）和动作(action)
  - Derivation（衍生）∶ 从应用状态中派生而出，且没有任何其他影响的数据
- 对比总结：
  - redux将数据保存在单一的store中，mobx将数据保存在分散的多个store中
  - redux使用plain object保存数据，需要手动处理变化后的操作;mobx适用observable保存数据，数据变化后自动处理响应的操作
  - redux使用不可变状态，这意味着状态是只读的，不能直接去修改它，而是应该返回一个新的状态，同时使用纯函数;mobx中的状态是可变的，可以直接对其进行修改
  - mobx相对来说比较简单，在其中有很多的抽象，mobx更多的使用面向对象的编程思维;redux会比较复杂，因为其中的函数式编程思想掌握起来不是那么容易，同时需要借助一系列的中间件来处理异步和副作用
  - mobx中有更多的抽象和封装，调试会比较困难，同时结果也难以预测;而redux提供能够进行时间回溯的开发工具，同时其纯函数以及更少的抽象，让调试变得更加的容易
### 7. react-router-dom
- react-router-dom 提供两个路由器BrowserRouter和HashRoauter。前者基于url的pathname段，后者基于hash段
- BrowserRouter：http://127.0.0.1:3000/article/num1
- HashRoauter：http://127.0.0.1:3000/#/article/num1（不一定是这样，但#是少不了的）
- react-router-dom 组件
  - BrowserRouter 和 HashRouter 是路由器
  - Route 用于路由匹配
  - Link 组件用于在应用程序中创建链接。 它将在HTML中渲染为锚标记
  - NavLink是突出显示当前活动链接的特殊链接
  - Switch 不是必需的，但在组合路由时很有用
  - Redirect 用于强制路由重定向
- 组件中的Link、NavLink和Redirect 的例子
  ```
  // normal link
  <Link to="/gotoA">Home</Link>
  // link which highlights currentlu active route with the given class name
  <NavLink to="/gotoB" activeClassName="active">
    React
  </NavLink>
  // you can redirect to this url
  <Redirect to="/gotoC" />
  ```
- react router 组件的示例，如果你查看下面的示例，我们将匹配路径并使用Switch和Route呈现相应的组件。
  ```
  import React from 'react'
  // import react router DOM elements
  import { Switch, Route, Redirect } from 'react-router-dom'
  import ComponentA from '../common/compa'
  import ComponentB from '../common/compb'
  import ComponentC from '../common/compc'
  import ComponentD from '../common/compd'
  import ComponentE from '../common/compe'

  const Layout = ({ match }) => {
    return(
        <div className="">
            <Switch>
                <Route exact path={`${match.path}/gotoA`} component={ComponentA} />
                <Route path={`${match.path}/gotoB`} component={ComponentB} />
                <Route path={`${match.path}/gotoC`} component={ComponentC} />
                <Route path={`${match.path}/gotoD`} component={ComponentD} />
                <Route path={`${match.path}/gotoE`} component={ComponentE} />
            </Switch>
        </div>
    )}
  export default Layout
  ```
### 8. Hooks
- Hooks是React版本16.8中的新功能，我们不能在函数组件中使用state ，因为它们不是类组件。Hooks 让我们在函数组件中可以使用state 和其他功能
- Hooks为已知的 React 概念提供了更直接的 API：props，state，context，refs 以及生命周期。可以使用一些钩子，例如useState，useEffect，useContext，useReducer等
- hooks之前，React存在一些问题
  - 在组件间复用状态逻辑很难
  - 复杂组件变得难以理解，高阶组件和函数组件的嵌套过深
  - class组件的this指向问题
  - 难以记忆的生命周期
  - hooks很好的解决了上述问题，hooks提供了很多方法
    - useState 返回有状态值，以及更新这个状态值的函数
    - useEffect 接受包含命令式，可能有副作用代码的函数
    - useContext 接受上下文对象（从 React.createContext返回的值）并返回当前上下文值
    - useReducer useState 的替代方案。接受类型为 （state，action）=> newState的reducer，并返回与dispatch方法配对的当前状态
    - useCalLback 返回一个回忆的memoized版本，该版本仅在其中一个输入发生更改时才会更改。纯函数的输入输出确定性 o useMemo 纯的一个记忆函数 o useRef 返回一个可变的ref对象，其Current 属性被初始化为传递的参数，返回的 ref 对象在组件的整个生命周期内保持不变
-  Hooks 的基本规则:
  - Hooks 应该在外层使用，不应该在循环，条件或嵌套函数中使用
  - Hooks 应该只在函数组件中使用
### 9. React中提高性能
- 适当地使用shouldComponentUpdate生命周期方法，它避免了子组件不必要的渲染。用于在没有必要更新 UI 的时候返回 false，以提高渲染性能。
- 不可变性是提高性能的关键。不要对数据进行修改，而是始终在现有集合的基础上创建新的集合，以保持尽可能少的复制，从而提高性能
- 在显示列表或表格时始终使用 Keys，这会让React的更新速度更快
- 代码分离是将代码插入到单独的文件中，只加载模块或部分所需的文件的技术
### 10. 高阶组件
- 高阶组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件。
- React-Redux 里 connect 就是一个高阶组件，比如 connect(mapState)(MyComponent) 接受组件 MyComponent，返回一个具有状态的新 MyComponent 组件。
### 11. React中的key
Keys 是 React 用于追踪哪些列表中元素被修改、被添加或者被移除的辅助标识。在开发过程中，我们需要保证某个元素的 key 在其同级元素中具有唯一性。
在 React Diff 算法中 React 会借助元素的 Key 值来判断该元素是新近创建的还是被移动而来的元素，从而减少不必要的元素重渲染此外，React 还需要借助 Key 值来判断元素与本地状态的关联关系
- key值一定要和具体的元素一一对应到
- 尽量不要用数组的index去作为key
- 永远不要试图在render的时候用随机数或者其他操作给元素加上不稳定的key，这样造成的性能开销比不加key的情况下更糟糕
### 12. props VS state
- 凡是界面中需要改变的状态都写到state里面，不需要改变的用props
- props里面的东西是只读的，不能进行更改
- 对于props，一般用于组件与组件之间的传参，state用于组件状态的更改
### 13. props state render 三者的关系
- 当组件的state或者props发生改变的时候，render函数就会重新执行
- 当父组件的render函数被运行时，它的子组件的render函数都将被重新运行

## OS
### 1. 线程与进程的区别
- 进程，是并发执行的程序在执行过程中分配和管理资源的基本单位，是一个动态概念，竞争计算机系统资源的基本单位。
- 线程，是进程的一部分，一个没有线程的进程可以被看作是单线程的。线程有时又被称为轻权进程或轻量级进程，也是 CPU 调度的一个基本单位。
- 一个程序至少有一个进程，一个进程至少有一个线程，资源分配给进程，同一个进程下所有线程共享该进程的资源
### 2. 线程的哪些资源共享，哪些资源不共享
- 共享的资源有
  - 堆：由于堆是在进程空间中开辟出来的，所以它是理所当然地被共享的；因此new出来的都是共享的
  - 全局变量：它是与具体某一函数无关的，所以也与特定线程无关；因此也是共享的
  - 静态变量：虽然对于局部变量来说，它在代码中是“放”在某一函数中的，但是其存放位置和全局变量一样，存于堆中开辟的.bss和.data段，是共享的
  - 文件等公用资源：这个是共享的，使用这些公共资源的线程必须同步。Win32 提供了几种同步资源的方式，包括信号、临界区、事件和互斥体。
- 独享的资源有
  - 栈：栈是独享的
  - 寄存器：这个可能会误解，因为电脑的寄存器是物理的，每个线程去取值难道不一样吗？其实线程里存放的是副本，包括程序计数器PC