$(function () {
    var editor = editormd("editor", {
        theme: "dark",
        editorTheme: "3024-night",
        previewTheme: "dark",
        path: "lib/",
        taskList: true,
        tex: true,
        flowChart: true,
        sequenceDiagram: true,
        previewCodeHighlight: true,
    });
});