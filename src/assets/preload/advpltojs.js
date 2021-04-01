function(codeType, codeContent) {
  if(codeType === 'jsLog'){
    console.log(codeContent);
  } else {
    this.eventTarget.send(codeType, codeContent);
  }
}
