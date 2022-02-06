"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3257],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return t?o.createElement(g,l(l({ref:n},u),{},{components:t})):o.createElement(g,l({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var p=2;p<i;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5020:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return d}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),l=t.p+"assets/images/demo-9b8574906d241012264e905b4d940c69.png",a=t.p+"assets/images/demo-50d4acf2baa6770b8663357937343d51.gif",s=t.p+"assets/images/demo2-8fb1edda09c0a94c91b2353fddae1aab.png",p=["components"],u={title:"Alertdialog"},c=void 0,m={unversionedId:"elements/alertdialog",id:"elements/alertdialog",title:"Alertdialog",description:"Material Design AlertDialog",source:"@site/docs/elements/alertdialog.mdx",sourceDirName:"elements",slug:"/elements/alertdialog",permalink:"/docs/elements/alertdialog",editUrl:"https://github.com/milklabdev/jetpack-compose-book/tree/master/docs/elements/alertdialog.mdx",tags:[],version:"current",frontMatter:{title:"Alertdialog"},sidebar:"docs",previous:{title:"\u521d\u8bc6 Jetpack Compose",permalink:"/docs/tutorial"},next:{title:"Button",permalink:"/docs/elements/button"}},d=[{value:"1. \u7b80\u5355\u4f7f\u7528",id:"1-\u7b80\u5355\u4f7f\u7528",children:[],level:2},{value:"2. Dialog",id:"2-dialog",children:[],level:2},{value:"3. \u66f4\u591a",id:"3-\u66f4\u591a",children:[],level:2}],g={toc:d};function f(e){var n=e.components,t=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,o.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Composable\nfun AlertDialog(\n    onDismissRequest: () -> Unit,\n    confirmButton: () -> Unit,\n    modifier: Modifier = Modifier,\n    dismissButton: () -> Unit = null,\n    title: () -> Unit = null,\n    text: () -> Unit = null,\n    shape: Shape = MaterialTheme.shapes.medium,\n    backgroundColor: Color = MaterialTheme.colors.surface,\n    contentColor: Color = contentColorFor(backgroundColor),\n    properties: DialogProperties = DialogProperties()\n): @Composable Unit\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://material.io/components/dialogs#alert-dialog"},"Material Design AlertDialog")),(0,i.kt)("h2",{id:"1-\u7b80\u5355\u4f7f\u7528"},"1. \u7b80\u5355\u4f7f\u7528"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val openDialog = remember { mutableStateOf(true) }\n\nif (openDialog.value) {\n    AlertDialog(\n        onDismissRequest = {\n            // \u5f53\u7528\u6237\u70b9\u51fb\u5bf9\u8bdd\u6846\u4ee5\u5916\u7684\u5730\u65b9\u6216\u8005\u6309\u4e0b\u7cfb\u7edf\u8fd4\u56de\u952e\u5c06\u4f1a\u6267\u884c\u7684\u4ee3\u7801\n            openDialog.value = false\n        },\n        title = {\n            Text(\n                text = "\u5f00\u542f\u4f4d\u7f6e\u670d\u52a1",\n                fontWeight = FontWeight.W700,\n                style = MaterialTheme.typography.h6\n            )\n        },\n        text = {\n            Text(\n                text = "\u8fd9\u5c06\u610f\u5473\u7740\uff0c\u6211\u4eec\u4f1a\u7ed9\u60a8\u63d0\u4f9b\u7cbe\u51c6\u7684\u4f4d\u7f6e\u670d\u52a1\uff0c\u5e76\u4e14\u60a8\u5c06\u63a5\u53d7\u5173\u4e8e\u60a8\u8ba2\u9605\u7684\u4f4d\u7f6e\u4fe1\u606f",\n                fontSize = 16.sp\n            )\n        },\n        confirmButton = {\n            TextButton(\n                onClick = {\n                    openDialog.value = false\n                },\n            ) {\n                Text(\n                    "\u786e\u8ba4",\n                    fontWeight = FontWeight.W700,\n                    style = MaterialTheme.typography.button\n                )\n            }\n        },\n        dismissButton = {\n            TextButton(\n                onClick = {\n                    openDialog.value = false\n                }\n            ) {\n                Text(\n                    "\u53d6\u6d88",\n                    fontWeight = FontWeight.W700,\n                    style = MaterialTheme.typography.button\n                )\n            }\n        }\n    )\n}\n')),(0,i.kt)("p",null,"\u5982\u679c\u4e00\u5207\u987a\u5229\uff0c\u8fd0\u884c\u7a0b\u5e8f\uff0c\u60a8\u5c06\u4f1a\u770b\u5230\uff1a"),(0,i.kt)("img",{src:l}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"AlertDialog")," \u5c06\u6839\u636e\u53ef\u7528\u7a7a\u95f4\u6765\u5b9a\u4f4d\u5176\u6309\u94ae\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5b83\u5c06\u5c1d\u8bd5\u5c06\u5b83\u4eec\u6c34\u5e73\u5730\u653e\u5728\u5f7c\u6b64\u7684\u65c1\u8fb9\uff0c\u5982\u679c\u6ca1\u6709\u8db3\u591f\u7684\u7a7a\u95f4\uff0c\u5219\u9000\u56de\u5230\u6c34\u5e73\u653e\u7f6e\u3002\u8fd8\u6709\u53e6\u4e00\u4e2a\u7248\u672c\u7684 Composable\uff0c\u5b83\u6709\u4e00\u4e2a\u6309\u94ae\u69fd\uff0c\u53ef\u4ee5\u63d0\u4f9b\u81ea\u5b9a\u4e49\u7684\u6309\u94ae\u5e03\u5c40"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Composable\nfun AlertDialog(\n    onDismissRequest: () -> Unit,\n    buttons: () -> Unit,\n    modifier: Modifier = Modifier,\n    title: () -> Unit = null,\n    text: () -> Unit = null,\n    shape: Shape = MaterialTheme.shapes.medium,\n    backgroundColor: Color = MaterialTheme.colors.surface,\n    contentColor: Color = contentColorFor(backgroundColor),\n    properties: DialogProperties = DialogProperties()\n): @Composable Unit\n")),(0,i.kt)("p",null,"\u7b80\u5355\u7684\u4e00\u4e2a\u5b9e\u73b0\u4ee3\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val openDialog = remember { mutableStateOf(true) }\n\nif (openDialog.value) {\n    AlertDialog(\n        onDismissRequest = {\n            openDialog.value = false\n        },\n        title = {\n            Text(\n                text = "\u5f00\u542f\u4f4d\u7f6e\u670d\u52a1",\n                fontWeight = FontWeight.W700,\n                style = MaterialTheme.typography.h6\n            )\n        },\n        text = {\n            Text(\n                text = "\u8fd9\u5c06\u610f\u5473\u7740\uff0c\u6211\u4eec\u4f1a\u7ed9\u60a8\u63d0\u4f9b\u7cbe\u51c6\u7684\u4f4d\u7f6e\u670d\u52a1\uff0c\u5e76\u4e14\u60a8\u5c06\u63a5\u53d7\u5173\u4e8e\u60a8\u8ba2\u9605\u7684\u4f4d\u7f6e\u4fe1\u606f",\n                fontSize = 16.sp\n            )\n        },\n        buttons = {\n            Row(\n                modifier = Modifier.padding(all = 8.dp),\n                horizontalArrangement = Arrangement.Center\n            ) {\n                Button(\n                    modifier = Modifier.fillMaxWidth(),\n                    onClick = { openDialog.value = false }\n                ) {\n                    Text("\u5fc5\u987b\u63a5\u53d7\uff01")\n                }\n            }\n        }\n    )\n}\n')),(0,i.kt)("img",{src:s}),(0,i.kt)("h2",{id:"2-dialog"},"2. Dialog"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"AlertDialog")," \u5728\u4e00\u4e9b\u60c5\u51b5\u4e0b\u6709\u53ef\u80fd\u8fd8\u662f\u65e0\u6cd5\u6ee1\u8db3\u6211\u4eec\u7684\u4e1a\u52a1\u8981\u6c42\uff0c\u8fd9\u65f6\u5019\u6211\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528\u66f4\u5e95\u5c42\u7684\u4e00\u4e2a @Composable \u51fd\u6570 \u2014\u2014 Dialog"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'var flag by remember{ mutableStateOf(false) }\nBox(\n    modifier = Modifier.fillMaxSize(),\n    contentAlignment = Alignment.Center\n) {\n    Button(\n        onClick = { flag = true }\n    ) {\n        Text("\u5f39\u7a97")\n    }\n}\nif(flag) {\n    Dialog(\n        onDismissRequest = { flag = false }\n    ) {\n        Box(\n            modifier = Modifier\n                .size(300.dp)\n                .background(Color.White),\n            contentAlignment = Alignment.Center\n        ) {\n            Column {\n                LinearProgressIndicator()\n                Text("\u52a0\u8f7d\u4e2d ing...")\n            }\n        }\n    }\n}\n')),(0,i.kt)("img",{src:a}),(0,i.kt)("h2",{id:"3-\u66f4\u591a"},"3. \u66f4\u591a"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/kotlin/androidx/compose/material/package-summary#AlertDialog(kotlin.Function0,kotlin.Function0,androidx.compose.ui.Modifier,kotlin.Function0,kotlin.Function0,kotlin.Function0,androidx.compose.ui.graphics.Shape,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.ui.window.DialogProperties)"},"AlertDialog \u53c2\u6570\u8be6\u60c5")))}f.isMDXComponent=!0}}]);