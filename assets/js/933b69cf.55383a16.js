"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5421],{3905:function(e,n,r){r.d(n,{Zo:function(){return m},kt:function(){return d}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},m=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,h=u["".concat(c,".").concat(d)]||u[d]||p[d]||a;return r?t.createElement(h,l(l({ref:n},m),{},{components:r})):t.createElement(h,l({ref:n},m))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4041:function(e,n,r){r.r(n),r.d(n,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return p}});var t=r(7462),o=r(3366),a=(r(7294),r(3905)),l=r.p+"assets/images/demo1-5ce0779bc954110368023b5e926194f4.png",i=["components"],c={id:"meetMaterialTheme",title:"\u521d\u8bc6 MaterialTHeme"},s=void 0,m={unversionedId:"design/theme/meetMaterialTheme",id:"design/theme/meetMaterialTheme",title:"\u521d\u8bc6 MaterialTHeme",description:"1. \u4ecb\u7ecd",source:"@site/docs/design/theme/meetMaterialTheme.mdx",sourceDirName:"design/theme",slug:"/design/theme/meetMaterialTheme",permalink:"/docs/design/theme/meetMaterialTheme",editUrl:"https://github.com/milklabdev/jetpack-compose-book/tree/master/docs/design/theme/meetMaterialTheme.mdx",tags:[],version:"current",frontMatter:{id:"meetMaterialTheme",title:"\u521d\u8bc6 MaterialTHeme"},sidebar:"docs",previous:{title:"\u4e3b\u9898\uff08Theming\uff09",permalink:"/docs/category/\u4e3b\u9898theming"},next:{title:"\u6df1\u5165\u7406\u89e3 MaterialTheme \u4e0e CompositionLocal",permalink:"/docs/design/theme/understandingMaterialTheme"}},p=[{value:"1. \u4ecb\u7ecd",id:"1-\u4ecb\u7ecd",children:[],level:2},{value:"<strong>2. \u7b80\u5355\u4f7f\u7528 MaterialTheme \u5b8c\u6210\u4e3b\u9898\u914d\u8272</strong>",id:"2-\u7b80\u5355\u4f7f\u7528-materialtheme-\u5b8c\u6210\u4e3b\u9898\u914d\u8272",children:[],level:2}],u={toc:p};function d(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-\u4ecb\u7ecd"},"1. \u4ecb\u7ecd"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"MaterialTheme"),"  \u662f Jetpack Compose \u6240\u63d0\u4f9b\u7684\u57fa\u4e8e Material Design \u98ce\u683c\u4e3b\u9898\u6837\u5f0f\u6a21\u7248\uff0c\u901a\u8fc7\u4e3b\u9898\u6837\u5f0f\u6a21\u7248\u7684\u914d\u7f6e\uff0c\u5141\u8bb8\u81ea\u5b9a\u4e49\u89c6\u56fe\u7cfb\u7edf\u4e2d\u6240\u6709\u7ec4\u4ef6\u6839\u636e\u4e3b\u9898\u5207\u6362\u800c\u76f8\u5e94\u5f97\u5230\u6837\u5f0f\u6539\u53d8\u3002"),(0,a.kt)("p",null,"\u5f53\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 Compose \u9879\u76ee\u65f6\uff0cAndroid Studio \u4f1a\u9ed8\u8ba4\u5e2e\u6211\u751f\u6210\u4e00\u4e2a Theme \u65b9\u6cd5(\u751f\u6210\u7684\u547d\u540d\u89c4\u5219\uff1a\u9879\u76ee\u540d\u79f0+Theme)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MainActivity : ComponentActivity() {\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        setContent {\n            // \u770b\u8fd9\u91cc\uff0c\u6211\u521b\u5efa\u7684\u9879\u76ee\u540d\u79f0\u662f ComposeStudy \uff5e\n            // \u503c\u5f97\u6ce8\u610f\u7684\u662f\u6211\u4eec\u58f0\u660e\u7684\u81ea\u5b9a\u4e49\u89c6\u56fe\u4f1a\u4ee5 lambda \u53c2\u6570\u5f62\u5f0f\u4f20\u5165\u5176\u4e2d\u3002\n            ComposeStudyTheme {  \n               Surface(color = MaterialTheme.colors.background) {\n                    Greeting("Android")\n                }\n            }\n        }\n    }\n}\n')),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u770b\u770b\u8fd9\u4e2a\u751f\u6210\u7684 Theme \u65b9\u6cd5\u4e3a\u6211\u4eec\u505a\u4e86\u54ea\u4e9b\u4e8b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Composable\nfun ComposeStudyTheme(\n    darkTheme: Boolean = isSystemInDarkTheme(),\n    content: @Composable() () -> Unit\n) {\n    val colors = if (darkTheme) {\n        DarkColorPalette\n    } else {\n        LightColorPalette\n    }\n    MaterialTheme(\n        colors = colors, // \u989c\u8272\n        typography = Typography, // \u5b57\u4f53\n        shapes = Shapes, // \u5f62\u72b6\n        content = content // \u58f0\u660e\u7684\u89c6\u56fe\n    )\n}\nprivate val DarkColorPalette = darkColors(\n    primary = Purple200,\n    primaryVariant = Purple700,\n    secondary = Teal200\n)\nprivate val LightColorPalette = lightColors(\n    primary = Purple500,\n    primaryVariant = Purple700,\n    secondary = Teal200\n)\n")),(0,a.kt)("p",null,"\u5728\u8fd9\u91cc\u6211\u4eec\u770b\u5230\u4e86 ",(0,a.kt)("strong",{parentName:"p"},"MaterialTheme")," \u3002\u4f46\u662f\u5148\u522b\u6025\u6211\u4eec\u5f80\u4e0a\u770b\u770b\uff0c\u53ef\u4ee5\u770b\u5230 Android Studio \u9ed8\u8ba4\u5e2e\u52a9\u6211\u4eec\u751f\u6210\u4e86\u4e24\u79cd\u914d\u8272\u7684\u8c03\u8272\u677f( Light \u4e0e Dark )\uff0c\u6839\u636e\u4f20\u5165\u5e03\u5c14\u503c\u7684\u4e0d\u540c\u800c\u9009\u62e9\u5176\u4e00\uff0c\u5e76\u5c06\u5176\u4f20\u5165\u5230MaterialTheme\u3002\u53ef\u4ee5\u770b\u5230\u8fd9\u4e24\u79cd\u914d\u8272\u7684\u8c03\u8272\u677f\u5206\u522b\u4f7f\u7528\u7684\u662f ",(0,a.kt)("code",null,"darkColors")," \u4e0e ",(0,a.kt)("code",null,"lightColors")," \u4e24\u4e2a\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\uff0c\u6211\u4eec\u770b\u770b\u8fd9\u4e24\u8005\u7684\u5b9e\u73b0\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun lightColors(\n    primary: Color = Color(0xFF6200EE),\n    primaryVariant: Color = Color(0xFF3700B3),\n    secondary: Color = Color(0xFF03DAC6),\n    secondaryVariant: Color = Color(0xFF018786),\n    background: Color = Color.White,\n    surface: Color = Color.White,\n    error: Color = Color(0xFFB00020),\n    onPrimary: Color = Color.White,\n    onSecondary: Color = Color.Black,\n    onBackground: Color = Color.Black,\n    onSurface: Color = Color.Black,\n    onError: Color = Color.White\n): Colors = Colors(\n    primary,\n    primaryVariant,\n    secondary,\n    secondaryVariant,\n    background,\n    surface,\n    error,\n    onPrimary,\n    onSecondary,\n    onBackground,\n    onSurface,\n    onError,\n    true\n)\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230 ",(0,a.kt)("code",null,"lightColors")," \u5c06\u4f20\u5165\u53c2\u6570\u900f\u4f20\u5230\u4e86Colors\u6784\u9020\u5668\u4e2d\u4e86\uff0c\u800c Colors \u6784\u9020\u5668\u5c5e\u6027\u662f\u6ca1\u6709\u9ed8\u8ba4\u503c\u7684\uff0c",(0,a.kt)("code",null,"lightColors")," \u5e2e\u52a9\u6211\u4eec\u751f\u6210\u4e86\u8bb8\u591a\u5c5e\u6027\u9ed8\u8ba4\u503c\u3002\u53ef\u4ee5\u53d1\u73b0\u4e24\u79cd\u8c03\u8272\u677f\u672c\u8d28\u4e0a\u53ea\u662fColors\u6210\u5458\u5c5e\u6027\u914d\u7f6e\u7684\u4e0d\u540c\uff0c\u61c2\u5f97\u4e86\u672c\u8d28\u5c31\u53ef\u4ee5\u8fdb\u884c\u5b9a\u5236\u4e3b\u9898\u6837\u5f0f\u7684\u914d\u7f6e\u4e86\u3002"),(0,a.kt)("h2",{id:"2-\u7b80\u5355\u4f7f\u7528-materialtheme-\u5b8c\u6210\u4e3b\u9898\u914d\u8272"},(0,a.kt)("strong",{parentName:"h2"},"2. \u7b80\u5355\u4f7f\u7528 MaterialTheme \u5b8c\u6210\u4e3b\u9898\u914d\u8272")),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u662f\u4f7f\u7528\u793a\u4f8b\uff0c\u5047\u8bbe\u5f53\u524d\u9700\u6c42\u4e3a\u6839\u636e\u4e3b\u9898\u7684\u4e0d\u540c\u4f7f\u5f97\u6211\u4eec\u5b9a\u5236\u7684\u6587\u672c\u989c\u8272\u4e5f\u4f1a\u968f\u4e4b\u53d8\u5316\u3002\u5f53\u4eae\u8272\u4e3b\u9898\u65f6\u663e\u793a\u4e3a\u7ea2\u8272\uff0c\u6697\u8272\u4e3b\u9898\u663e\u793a\u4e3a\u84dd\u8272\u3002\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528 Color \u7684 primary \u5c5e\u6027\u6765\u5b58\u50a8\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5176\u4ed6\u6210\u5458\u5c5e\u6027\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Composable\nfun CustomColorTheme(\n    isDark: Boolean,\n    content: @Composable() () -> Unit\n) {\n    var BLUE = Color(0xFF0000FF) \n    var RED = Color(0xFFDC143C)\n    val colors = if (isDark) {\n        darkColors(primary = BLUE) // \u5c06 primary \u8bbe\u7f6e\u4e3a\u84dd\u8272\n    } else {\n        lightColors(primary = RED) // \u5c06 primary \u8bbe\u7f6e\u4e3a\u7ea2\u8272\n    }\n    MaterialTheme(\n        colors = colors,\n        typography = Typography,\n        shapes = Shapes,\n        content = content\n    )\n}\n")),(0,a.kt)("p",null,"\u914d\u7f6e\u5b8c\u5c31\u53ef\u4ee5\u5728\u6211\u4eec\u7684\u81ea\u5b9a\u4e49\u89c6\u56fe\u7cfb\u7edf\u4e2d\u4f7f\u7528\u4e86\uff0c\u5c06\u6211\u4eec\u89c6\u56fe\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Text")," \u989c\u8272\u914d\u7f6e\u4e3a ",(0,a.kt)("code",null,"MaterialTheme.colors.primary")," \u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Composable\nfun SampleText() {\n    Text(\n        text = "Hello World",\n        color = MaterialTheme.colors.primary\n    )\n}\n@Preview(showBackground = true)\n@Composable\nfun DarkPreview() {\n    CustomColorTheme(isDark = true) {\n        SampleText();\n    }\n}\n@Preview(showBackground = true)\n@Composable\nfun LightPreview() {\n    CustomColorTheme(isDark = false) {\n        SampleText()\n    }\n}\n')),(0,a.kt)("p",null,"\u6211\u4eec\u540c\u65f6\u521b\u5efa\u4e86\u4e24\u79cd\u4e3b\u9898\u7684\u9884\u89c8\uff0c\u901a\u8fc7 Android Studio \u7684 Preview \u7a97\u53e3\u5c31\u53ef\u4ee5\u9884\u89c8\u5230\u6240\u6709\u4e3b\u9898\u4e0b\u7684\u6548\u679c\u4e86\u3002"),(0,a.kt)("img",{src:l}))}d.isMDXComponent=!0}}]);