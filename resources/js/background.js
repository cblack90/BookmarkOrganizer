function getBookmarks() {
    var results = browser.bookmarks.getTree();
    console.log(results);
}
function processNode(node){
    if(node.children){
        node.children.forEach(function(child){ processNode(child);})
    }
    if(node.url){ console.log(node.url);}
}