define(["jquery","underscore","qlik","ng!$q","ng!$http","./lib/js/components/pp-climber/pp-climber"],function(a,b,c,d){var e=c.currApp(),f=function(){var a=d.defer();return e.getAppObjectList(function(c){var d=[],e=b.sortBy(c.qAppObjectList.qItems,function(a){return a.qData.rank});return b.each(e,function(a){d.push({value:a.qInfo.qId,label:a.qMeta.title})}),a.resolve(d)}),a.promise},g={uses:"dimensions",min:3,max:4},h={uses:"measures",min:1,max:1},i={uses:"sorting"},j={type:"items",component:"expandable-items",translation:"properties.addons",items:{dataHandling:{uses:"dataHandling"}}},k={component:"pp-cl-cards",translation:"Common.About",show:!0},l={ref:"props.selectOneAndGoto",label:"Selection mode",type:"boolean",component:"switch",defaultValue:!1,options:[{value:!0,label:"Select and goto sheet"},{value:!1,label:"Selection"}]},m={type:"string",component:"dropdown",label:"Select Sheet",ref:"props.selectedSheet",options:function(){return f().then(function(a){return a})},show:function(a){return a.props.selectOneAndGoto}},n={label:"Selection mode",type:"items",items:{selectOneAndGoto:l,sheetList:m}},o={type:"string",component:"dropdown",label:"Layout Mode",ref:"props.layoutMode",defaultValue:"MEDIUM",options:[{value:"SMALL",label:"Small"},{value:"MEDIUM",label:"Medium"},{value:"LARGE",label:"Large"}]},p={type:"string",component:"dropdown",label:"Image Layout",ref:"props.imageLayout",defaultValue:"LANDSCAPE",options:[{value:"LANDSCAPE",label:"Landscape"},{value:"SQUARE",label:"Square"},{value:"PORTRAIT",label:"Portrait"}]},q={type:"string",component:"dropdown",label:"Image Size Mode",ref:"props.imageSizeMode",defaultValue:"CONTAIN",options:[{value:"CONTAIN",label:"Contain"},{value:"COVER",label:"Cover"},{value:"FILL",label:"Fill"}]},r={label:"Cards Layout",type:"items",items:{layoutMode:o,imageLayout:p,imageSizeMode:q}},s={uses:"settings",items:{selectionPanel:n,layoutPanel:r,initFetchRows:{ref:"qHyperCubeDef.qInitialDataFetch.0.qHeight",label:"Initial fetch rows",type:"number",defaultValue:20}}};return{type:"items",component:"accordion",items:{dimensions:g,measures:h,sorting:i,addons:j,appearance:s,about:k}}});