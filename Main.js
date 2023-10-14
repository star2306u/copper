var Button = document.querySelector('.Buttons')
var actionButton = document.querySelectorAll('.action button')
var hiddenUpload = document.querySelector('.action .h-upload')
var image_workspaceSpan = document.querySelector('.image-wrk span')
var C_Span = document.querySelector('.container span')
var rotate = document.querySelectorAll('.Buttons .rotate svg')
var flip = document.querySelectorAll('.Buttons .flip svg')
var Ratio = document.querySelectorAll('.Buttons .aspect li')
var controlCropper = document.querySelectorAll('.ctrl-cropper svg')

// upload image
actionButton[0].onclick = () => hiddenUpload.click()
hiddenUpload.onchange = () => {
    document.querySelector('.image-wrk').innerHTML = `<img src="" alt="">`
    var image_workspace = document.querySelector('.image-wrk img')
    
    var file = hiddenUpload.files[0]
    var url = window.URL.createObjectURL(new Blob([file], { type : 'image/jpg' }))
    image_workspace.src = url
    image_workspaceSpan.style.display = 'none'
    C_Span.style.display = 'none'
// Options 
    var options = {
        dragMode: 'move',
        preview: '.img-preview',
        viewMode: 2,
        modal: false,
        background: false,
        ready: function(){
            
            // rotate image
            rotate[0].onclick = () => cropper.rotate(45)
            rotate[1].onclick = () => cropper.rotate(-45)

            // flip image
            var flipX = -1
            var flipY = -1
            flip[0].onclick = () => {
                cropper.scale(flipX, 1)
                flipX = -flipX
            }
            flip[1].onclick = () => {
                cropper.scale(1, flipY)
                flipY = -flipY
            }

            // set aspect ratio
            Ratio[0].onclick = () => cropper.setAspectRatio(1.7777777777777777)
            Ratio[1].onclick = () => cropper.setAspectRatio(1.3333333333333333)
            Ratio[2].onclick = () => cropper.setAspectRatio(1)
            Ratio[3].onclick = () => cropper.setAspectRatio(0.6666666666666666)

            // cropper control
            controlCropper[0].onclick = () => cropper.clear()
            controlCropper[1].onclick = () => cropper.crop()

        }
    }

    var cropper = new Cropper(image_workspace, options)
}