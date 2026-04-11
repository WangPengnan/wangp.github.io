// JavaScript交互功能开始

// 获取DOM元素
const tabButtons = document.querySelectorAll('.tab-button');
const contentSections = document.querySelectorAll('.content-section');
const languageToggle = document.getElementById('languageToggle');
const langLabel = document.getElementById('langLabel');

// 标签页切换功能
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 移除所有按钮的active类
        tabButtons.forEach(btn => btn.classList.remove('active'));
        // 添加active类到当前点击的按钮
        button.classList.add('active');
        
        // 获取当前点击的标签页ID
        const tabId = button.getAttribute('data-tab');
        
        // 隐藏所有内容区域
        contentSections.forEach(section => {
            section.classList.remove('active');
        });
        
        // 显示对应的内容区域
        document.getElementById(tabId).classList.add('active');
    });
});

// 语言切换功能
languageToggle.addEventListener('change', function() {
    if (this.checked) {
        // 切换到英文
        switchLanguage('en');
        langLabel.textContent = 'EN';
    } else {
        // 切换到中文
        switchLanguage('zh');
        langLabel.textContent = '中文';
    }
});

// 语言切换函数
function switchLanguage(lang) {
    // 定义中英文对照文本
    const texts = {
        'home-title': {
            zh: '欢迎来到WPF项目展示网站',
            en: 'Welcome to WPF Project Showcase Website'
        },
        'home-desc': {
            zh: '这里是展示各种WPF项目的平台。您可以浏览我们的大型项目、自定义控件、实用小工具以及其他相关项目。',
            en: 'This is a platform showcasing various WPF projects. You can browse our large projects, custom controls, utility tools, and other related projects.'
        },
        'home-features': {
            zh: '特色功能：',
            en: 'Featured Functions:'
        },
        'home-list': {
            zh: ['丰富的WPF项目资源', '高质量的自定义控件', '实用的小工具集合', '持续的技术更新'],
            en: ['Rich WPF project resources', 'High-quality custom controls', 'Practical tool collections', 'Continuous technical updates']
        },
        'project-title': {
            zh: 'WPF大型项目',
            en: 'Large WPF Projects'
        },
        'project-desc': {
            zh: '这里展示了我们开发的各种大型WPF应用程序项目。',
            en: 'Here are various large WPF application projects we have developed.'
        },
        'project-details': {
            zh: '项目详情：',
            en: 'Project Details:'
        },
        'project-list': {
            zh: ['企业级管理系统', '数据可视化平台', '多媒体编辑器', '跨平台协作工具'],
            en: ['Enterprise Management System', 'Data Visualization Platform', 'Multimedia Editor', 'Cross-platform Collaboration Tool']
        },
        'controls-title': {
            zh: 'WPF自定义控件',
            en: 'WPF Custom Controls'
        },
        'controls-desc': {
            zh: '提供多种可复用的WPF自定义控件，提升开发效率。',
            en: 'Provides multiple reusable WPF custom controls to improve development efficiency.'
        },
        'controls-features': {
            zh: '控件特性：',
            en: 'Control Features:'
        },
        'controls-list': {
            zh: ['现代化UI设计', '高度可定制', '性能优化', '文档齐全'],
            en: ['Modern UI design', 'Highly customizable', 'Performance optimized', 'Well documented']
        },
        'tools-title': {
            zh: 'WPF小工具',
            en: 'WPF Utility Tools'
        },
        'tools-desc': {
            zh: '一系列实用的WPF小工具，解决日常开发中的常见问题。',
            en: 'A series of practical WPF utility tools to solve common problems in daily development.'
        },
        'tools-examples': {
            zh: '工具示例：',
            en: 'Tool Examples:'
        },
        'tools-list': {
            zh: ['颜色选择器', '日期时间控件', '文件管理器', '图表生成器'],
            en: ['Color Picker', 'Date Time Control', 'File Manager', 'Chart Generator']
        },
        'others-title': {
            zh: '其他',
            en: 'Others'
        },
        'others-desc': {
            zh: '其他相关的WPF资源和项目。',
            en: 'Other related WPF resources and projects.'
        },
        'others-content': {
            zh: '包括：',
            en: 'Includes:'
        },
        'others-list': {
            zh: ['学习教程', '技术文档', '社区支持', '开源项目'],
            en: ['Learning Tutorials', 'Technical Documentation', 'Community Support', 'Open Source Projects']
        },
        'footer-text': {
            zh: '此区域预留，等待后续开发...',
            en: 'This area is reserved for future development...'
        }
    };

    // 更新页面文本内容
    Object.keys(texts).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            const textObj = texts[key];
            
            // 如果是列表项，需要特殊处理
            if (Array.isArray(textObj[lang])) {
                // 清空现有列表项
                element.innerHTML = '';
                
                // 添加新的列表项
                textObj[lang].forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    element.appendChild(li);
                });
            } else {
                element.textContent = textObj[lang];
            }
        }
    });
    
    // 更新标签页按钮文字
    const tabs = [
        { selector: 'home', zh: '首页', en: 'Home' },
        { selector: 'wpf-project', zh: 'WPF大型项目', en: 'WPF Large Projects' },
        { selector: 'wpf-controls', zh: 'WPF自定义控件', en: 'WPF Custom Controls' },
        { selector: 'wpf-tools', zh: 'WPF小工具', en: 'WPF Tools' },
        { selector: 'others', zh: '其他', en: 'Others' }
    ];
    
    tabs.forEach(tab => {
        const button = document.querySelector(`.tab-button[data-tab="${tab.selector}"]`);
        if (button) {
            button.textContent = lang === 'zh' ? tab.zh : tab.en;
        }
    });
}

// JavaScript交互功能结束