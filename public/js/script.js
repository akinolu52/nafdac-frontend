$(document).ready(function(){
    $(".file-upload-browse").click(function(){
        $(".file-upload-default").trigger("click");
        $(".file-upload-default").change(function(){
            $(".file-upload-info").attr('placeholder', 'Image seleted').addClass("green-border")
        })
    });
});