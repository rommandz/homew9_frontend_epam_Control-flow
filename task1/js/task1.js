var sh = "#" ;
var sp = " " ;
var i = 0;
while (i < 8) {
    if (i%2 === 0) {
        console.log(sh + sp + sh + sp + sh + sp + sh + sp);
    } else {
        console.log(sp + sh + sp + sh + sp + sh + sp + sh);
    }
    i++;
}
