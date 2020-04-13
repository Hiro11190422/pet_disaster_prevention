function register() {
    for (var i = 3; i <= 21; i++) {
        if (document.getElementById("upload_file" + i)) {
            if (document.getElementById("upload_file" + i).type == "radio") {
                var pet_info_data = document.getElementById("upload_file" + i).checked
                localStorage.setItem("upload_file" + i, pet_info_data);
            } else {
                var pet_info_data = document.getElementById("upload_file" + i).value;
                localStorage.setItem("upload_file" + i, pet_info_data);
            }
        }
    }
    alert('登録しました');
}

(window.onload = function() {
    if (localStorage.getItem("upload_file1") == "") {

    } else {
        var upload_file = localStorage.getItem("upload_file1");
        document.getElementById("preview_area1").innerHTML="<img src='"+upload_file+"' width='90%'>";
    }
    if (localStorage.getItem("upload_file2") == "") {

    } else {
        var upload_file = localStorage.getItem("upload_file2");
        document.getElementById("preview_area2").innerHTML="<img src='"+upload_file+"' width='90%'>";
    }
    for (var i = 3; i <= 21; i++) {
        if (localStorage.getItem("upload_file" + i) == "") {
        } else {
            if (localStorage.getItem("upload_file" + i) == "true") {
                var upload_file = localStorage.getItem("upload_file" + i);
                document.getElementById("upload_file" + i).checked = upload_file;
            } else {
                var upload_file = localStorage.getItem("upload_file" + i);
                document.getElementById("upload_file" + i).value = upload_file;
            }
        }
    }
})();

function delet() {
    for (var i = 1; i <= 21; i++) {
        localStorage.setItem("upload_file" + i, "");
    }
}

function img() {
    // 選択されたファイル情報を取得
    var file = document.querySelector('input[type=file]').files[0];

    document.getElementById('preview_area1').innerHTML = file + "を読み込みしました";

    // readerのresultプロパティに、データURLとしてエンコードされたファイルデータを格納
    var reader = new FileReader();

    document.getElementById('preview_area1').innerHTML = reader.readyState;

    reader.addEventListener("load", function () {
        // convert image file to base64 string
        document.getElementById('preview_area1').innerHTML = "<img src='" + reader.result + "' width='90%'>";
        localStorage.setItem("upload_file1", reader.result);
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}
function img2() {
    // 選択されたファイル情報を取得
    var file =  document.getElementById('upload_file2').files[0];

    document.getElementById('preview_area2').innerHTML = file + "を読み込みしました";

    // readerのresultプロパティに、データURLとしてエンコードされたファイルデータを格納
    var reader2 = new FileReader();

    // document.getElementById('preview_area2').innerHTML = reader2.readyState;

    reader2.addEventListener("load", function () {
        // convert image file to base64 string
        document.getElementById('preview_area2').innerHTML = "<img src='" + reader2.result + "' width='90%'>";
        localStorage.setItem("upload_file2", reader2.result);
    }, false);

    if (file) {
        reader2.readAsDataURL(file);
    }
}