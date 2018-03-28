$(document).ready(function()
{
    $(".estilo_tecla").click(function()
    {
        if($(this).attr("id") != "backspace")
        {
            $("#txt_teste").val($("#txt_teste").val() + $(this).attr("id"));
        }
        else
        {
            if($("#txt_teste").val().length == 1)
            {
                $("#txt_teste").val("");
            }
            else if($("#txt_teste").val().length >= 2)
            {
                $("#txt_teste").val($("#txt_teste").val().slice(0,-1));
            }
        }
    });
});