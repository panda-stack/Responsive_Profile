
export function init() {
    createUploadimg();
};

function createUploadimg() {

    let uploaddiv = document.getElementById("uploading_input");
    uploaddiv.style.height = "55px";
    uploaddiv.style.width = "55px";
    uploaddiv.style.position = "absolute";
    uploaddiv.style.top = 0;
    uploaddiv.style.left = 0;

    document.getElementById("uploading_input").innerHTML = '<input type="file"  accept="image/*" name="image" id="file"  onchange="loadFile(event)" style="display: none;">\n' + document.getElementById("uploading_input").innerHTML;
}