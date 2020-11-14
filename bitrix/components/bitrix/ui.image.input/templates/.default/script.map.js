{"version":3,"sources":["script.js"],"names":["exports","main_core","main_core_events","_templateObject","data","babelHelpers","taggedTemplateLiteral","ImageInput","params","arguments","length","undefined","classCallCheck","this","instanceId","containerId","loaderContainerId","settings","addImageHandler","addImage","bind","editImageHandler","editImage","EventEmitter","subscribe","onUploaderIsInitedHandler","createClass","key","value","event","_this","_event$getCompatData","getCompatData","_event$getCompatData2","slicedToArray","id","uploader","Type","isDomNode","fileInput","wrapper","closest","previews","querySelectorAll","Dom","addClass","requestAnimationFrame","getLoaderContainer","style","display","getContainer","onFileIsCreatedHandler","getInputInstance","BX","UI","FileInput","getInstance","getFileInput","agent","container","document","getElementById","Error","concat","loaderContainer","getAddButton","addButton","querySelector","target","detail","preventDefault","inputInstance","items","getItems","hasOwnProperty","frameFlags","active","frameFiles","stopPropagation","click","_this2","_event$getCompatData3","_event$getCompatData4","setTimeout","recalculateWrapper","isMultipleInput","uploadParams","maxCount","buildShadowElement","shadowElement","Tag","render","bottomMargin","preview","previewWrapper","canvas","height","offsetHeight","width","offsetWidth","prepend","Math","min","Event","unbind","removeClass","Reflection","namespace","window"],"mappings":"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","file":"script.map.js"}