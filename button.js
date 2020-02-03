function resize (file,maxWidth,maxHeight,fn)
{
  var reader =new FileReader();
  reader.readAsDataURL(file);
reader.onload=function (event)
{
  var dataUrl =event.target.result;
  var image =new Image();
  image.src =dataUrl;
  image.onload =function()
  {
    var resizedDataUrl =resizeImage(image, maxWidth, maxHeight);
    fn(resizedDataUrl);
  };
  };
    }
    function resizeImage(image,maxWidth,maxHeight,quality)
    {
      var canvas=document.createElement('canvas');
      var width=image.width;
      var height=image.height;
      if(width>height)
      {
        if(width>maxWidth)
        height=Math.round(height* maxWidth/width);
        width=maxWidth;
      }
    }else
{
  (height>maxHeight)
    width=Math.round(height* maxHeight/height);
    height=maxHeight;
}
    }
    canvas.width= width;
    canvas.height=height;
     var ctx= canvas.getContent("2d");
     ctx.drawImage(image,0,0,width,height);
     return canvas.toDataURL("image/jpeg",quality);
  }
  var ScalingUpload= React.createClass({
    getinitialState: function(){
      return{};

    },
    _onChange: function(e)
    {
      var files=e.target.files;
      var self=this;
      var maxWidth = this.props.maxWidth;
      var maxHeight=thsi.props.maxHeight;
      resize(files[0],maxWidth, maxHeight,function(resizedDataUrl)
{
        self.setState({dataUrl:resizedDataUrl});
      });

      },
      render: function()
      {
         var image;
         var dataUrl=this.state.dataUrl;
         if(dataUrl)
         {
           image=<img src={dataUrl} />
                   }
                   return <div>
                     <input ref="upload" type="file" accept="image/*" onChange={ this._onChange}/>
                     {
                       image
                     }
                    
                   </div>
    }});
    var Test= React.createClass(
      {
        _onChange: function (file)
        {
          console.log('done',file);
        },
        render:function()
        {
          return <div>
            <ScalingUpload maxHeight={100} maxWidth={100} onChange={ this._onChange} />
            </div>
  
      }
    );